import React from 'react'

import logo2 from '../Carousel/Book-with-tree-vector.jpg'
import {Container, Row, Col} from 'react-bootstrap'
import '../Carousel/carousel.scss'
function SectionOne() {
  return (
    <div>
      <div className='section-one'>
        <Container className='mt-5 mb-5'>
            
  <Row>
    <Col md={6} xs={12}><img src={logo2} height={400} /></Col>
    <Col md={6} xs={12}>
    <h1>About Library</h1>
    <hr className='horizen'/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero. </p>
    <button>Read more</button>
    </Col>
  </Row>
  
  
  </Container>
  <div className='mt-5 mb-5'>
  <h1>Latest Publication</h1>
  <hr className='horizen1'/>
  </div>
    </div>
    </div>
  )
}

export default SectionOne