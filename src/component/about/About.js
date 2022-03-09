import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import img1 from '../Carousel/lib-1.jpg'
import '../Carousel/carousel.scss'
function About() {
  return (
    <>
    <br /><br />
    <Row><div className='section-one'><h1>OUR LIBRARY</h1></div></Row>
    <hr className='horizen'/>
    <Row>
      <Col md={12} xs={12}>
        <Container>
          <div >
    <img src={img1} alt='image-1' height={600} className='image'/>
          </div>
    </Container>
    </Col>
   
    </Row>
    <Row>
     
        <Col md={12} xs={12}>
        <Container>
          <div className='mt-5 section-one'>
      <p><span className='aboutspan'>I</span>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      <p></p>
      </div>
      </Container>
      </Col>
      
    </Row>
    <br />
    <br />
    </>
  )
}

export default About