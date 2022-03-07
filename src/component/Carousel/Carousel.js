import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import img1 from './lib-4.jpg'
import img2 from './lib-2.jpg'
import img3 from './lib-3.jpg'
import '../Carousel/carousel.scss';
function CarouselImg() {
  return (
    <div >
   
	<Carousel>
		<Carousel.Item interval={5000}>
		<img
			className="d-flex w-100"
			src={img1}
			alt="Image One"
			height={500}
			width={1900}
		/>
		<Carousel.Caption>
			<h3 className='caption'>Our Library</h3>
			<p className='captionpara'>Gateway to the future</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={5000}>
		<img
			className="d-flex w-100"
			src={img2}			
			alt="Image Two"
			height={500}
			width={1900}
 />
		
		<Carousel.Caption>
			<h3 className='caption'>Our Library</h3>
			<p className='captionpara'> Read and grow</p>
		</Carousel.Caption>
		</Carousel.Item>
    <Carousel.Item interval={5000}>
		<img
			className="d-flex w-100"
			src={img3}			
			alt="Image Three" 
			height={500}
			width={1900}
			/>
		
		<Carousel.Caption>
			<h3 className='caption'>Our Library</h3>
			<p className='captionpara'>A bibliophile's paradise</p>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>



    
  )
}

export default CarouselImg