import React,{useState} from 'react'
import bookData from '../books.json'
import { Link, useParams } from 'react-router-dom'
import {Container, Row,Col, Card} from 'react-bootstrap'
import './search.css'
import '../Carousel/carousel.scss'

function AdvanceSearch(){
    const [searchTerm,setSearchTerm] = useState('');
    const val=useParams();
    console.log(val);
    const data = bookData.items.find((info)=> info.sid === val.sid)
    console.log("data",data);
    return(
        <>
        <Container>
        <div className='mt-5 mb-5 search'>
      <input type="text" placeholder="Search by keyword" onChange={(event)=>{setSearchTerm(event.target.value)}}/>
      </div>
      <div className='section-one'><h1>List of books on {data.subject}</h1></div> 
       <hr className='horizen'/>
       <Row xs={1} md={1} className="g-4 mb-5 pb-5">
    {data.list.filter((book)=>{
                if(searchTerm=='')
                {return book;}
                else if(book.keyword.toLowerCase().includes(searchTerm.toLowerCase()))
                {return book}
                })
    .map((info) => (
    <Col xs={12} md={12}>
      <Card>
        <div className='pb-5 pt-5 booksearch'>
        

          <h1 className='bookheading'>{info.title}</h1>
          
          <p>
            {info.content.des}
          </p>
          <p><span style={{color: "blue"}}>Includes:</span>{info.keyword}</p>
        
        <button className='btn-sub-advance'><Link to={`/search/${val.sid}/${info.bid}`} style={{textDecoration:"none"}}>Click to see content</Link></button> 
        </div>
      </Card>
    </Col>
  ))}
</Row>
  
            {/* { 
             data.list.filter((info)=>{
                if(searchTerm=='')
                {return info;}
                else if(info.keyword.toLowerCase().includes(searchTerm.toLowerCase()))
                {return info}
                })
                .map((book)=>
               <li key={book.bid}>
                 {book.title}:-<span>{book.content.author}</span> 
              <p>{book.keyword}</p>
            <button><Link to={`/search/${val.sid}/${book.bid}`}>Click to see content</Link></button>                
              </li>
             )
            
           }*/}
        
        </Container>
        </>
    )
}
export default AdvanceSearch