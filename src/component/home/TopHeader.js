import React from 'react'
// import '../Carousel/carousel.css'
import {Row, Col, Container} from 'react-bootstrap';
// import logo2 from '../Carousel/logo2.jpg'
import '../home/topheader.css'
import logo1 from '../home/logo-1.jpg'
import facebook from '../home/icons8-facebook-20.png'
import twitter from '../home/icons8-twitter-20.png'
import instagram from '../home/icons8-instagram-20.png'
function TopHeader() {
  return (
    <>
    <div className='topheader'>
   
     <Row>   
         <Col>
         <div className='logoBox mt-2'>
         <img src={logo1} alt="logo"  height={80} />
         </div>
         </Col>
         <Col>
         <div className='textHead'>
            <h1 className='text1'>Our Library</h1> 
         </div>
         </Col>
         <Col>
         <div className='mt-4'>
         
         <span><img src={facebook} alt="facebook" /> </span>
         <span><img src={twitter} alt="twitter" /> </span>
         <span><img src={instagram} alt="instagram" /> </span>
        
         </div>
         </Col>
    
    </Row>
    </div>
    
    </>
  )
}

export default TopHeader