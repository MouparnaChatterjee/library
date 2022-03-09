import React, {useState} from 'react'
import './search.css'
import '../Registration/reg.css'
import {Container,Table} from 'react-bootstrap'
import BookData from '../books.json'
import { Link } from 'react-router-dom'

function Search() {
  const [searchTerm,setSearchTerm]=useState('');
  return (
    <>
    <Container>
    <div className='mt-5 mb-5 search'>
      <input type="text" placeholder="Search by subject name" onChange={(event)=>{setSearchTerm(event.target.value)}}/>
      </div>
      <table className="table" size="sm">
  <thead className='tablehead'>
    <tr>
      <th>Subject id</th>
      <th>Subject name</th>
      <th>Almirah No.</th>
      <th>Total No. of books 
        <p>on this subject</p> </th>
       <th>Click the button
         <p>to read the books</p></th> 
    </tr>
  </thead>
  {
  BookData.items.filter((info)=>{
     if(searchTerm=='')
    {return info;}
     else if(info.subject.toLowerCase().includes(searchTerm.toLowerCase()))
    {return info}
    
     })
    .map((data)=>
  <>
  <tbody className='tablebody'>
    <tr key={data.sid}>
      <td>{data.sid}</td>
      <td>{data.subject}</td>
      <td>{data.almirah}</td>
      <td>{data.quantity_of_books}</td>
      <td><button className='btn-sub'><Link to={`/search/${data.sid}`} style={{textDecoration:"none"}}>Click</Link></button></td>
    </tr>
    </tbody>
    </>
  )}
    
</table>
      
      
      
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Search