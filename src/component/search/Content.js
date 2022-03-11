import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import bookData from '../books.json'
import {Row, Col, Container} from 'react-bootstrap'
import '../search/search.css'
function Content() {
    const [num1, setQuantity]=useState(0);
    const [total, setTotal]=useState(0);
    const topic=useParams();
    // console.log("topic",topic);
    const singletopic= bookData.items.find((data)=> data.sid === topic.sid)
    //console.log("topic",singletopic);
    const singleBook = singletopic.list.find((info)=> info.bid === topic.bid)
    console.log("topic",singleBook);
    const requiredID=singleBook.content.id;
    const fee=singleBook.content.price;
    const quant=singleBook.content.quantity
    
    const multiply = ()=>{
      
      setTotal(num1*fee)
     
    }
    
  
  return (
    <>
    
    
    <br />
    <br/>
    <Row>
    <Col md={6} xs={12}>
    <h1 className='bookheading'>{singleBook.title}</h1>
    <Container>
    <Row className='mt-5 mx-3'>
     
      <Col md={3} xs={6}>
        <div className='highlight'>
      <strong style={{color:'#0062cc'}}>Highlights</strong>  
      </div> 
      </Col>
      <Col md={9} xs={6}>
       <ul className="list">
       <li>Author: {singleBook.content.author}</li>
           <li>Publisher: xxxxx</li>
           <li> Number of books in stock:{singleBook.content.quantity}</li>
           <li> Number of chapter: 6</li>
           <li> Language: English</li>
           <li>Price: {singleBook.content.price}</li>   
       </ul>  
      </Col>
      {/* <p>{singleBook.content.des}</p> */}
      
    </Row>
    </Container>
    </Col>
    <Col md={6} xs={12}>
    <img src={singleBook.content.img} alt="Book" height={400}/>   
    </Col>
    </Row>
    
     <Row>
       <Col md={12} xs={12}>
         <Container>
         <div className='border mt-5'>
          <h3  className='mx-5'>CONTENT:</h3> 
         <p className='mx-5'>{singleBook.content.des}</p>
         </div>
         </Container>
         
         </Col>
     </Row>
     <div className='mb-5 mt-3 buybutton'>
    <Row>
      <Col md={4} xs={12}>
        <Container>
          
        <div className='search ml-5'>
        <input type='number' name='quantity' value={num1} onChange={e=>setQuantity(+e.target.value)} required/>
        
        </div>
        <div className='pos'>
          <p>Enter quantity to buy</p>
        </div>
        </Container>
        </Col>

      <Col md={4} xs={12}>
        <button onClick={multiply} className='btn-sub1'>Click to check total price</button>
        <p>Total Price:{total}</p>
        {
          (num1>quant)?(<span style={{color:"red"}}>!!Out of stock</span>):((num1==0)?(<span style={{color:"blue"}}>Enter quantity</span>):(<span style={{color:"green"}}>Available</span>))
        }
        </Col>
     
      <Col md={4} xs={12}>
        <Container>
        <button className='btn-sub'><Link to={`/search/${topic.sid}/${singleBook.bid}/${singleBook.content.id}/${num1}/${total}`} style={{textDecoration:"none"}}>Buy now</Link></button> 
        </Container>
    </Col>
    
    </Row>
    </div>
    </>
  )
}

export default Content