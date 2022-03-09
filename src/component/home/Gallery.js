import * as React from 'react';
import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
import './gallery.css'


export default function StandardImageList() {
  
  return (
    <div className='gallery'>
    <ImageList cols={4} rowHeight={400}>
     
        
         
    <img  src="https://inteng-storage.s3.amazonaws.com/images/DECEMBER/sizes/best_science_books_The_Elegant_Universe_resize_md.jpg"
            // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
             alt="The Elegent Universe"
            height={400}
            loading="lazy" />
         
        <img
            src="https://media.wired.com/photos/5dfc0b15a03b9b0008afa1a0/master/w_1600%2Cc_limit/Science_books_9781328879981_hres.jpg"
            // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="Infinite Power"
            height={400}
            loading="lazy"
          />
           <img
            src="https://inteng-storage.s3.amazonaws.com/images/DECEMBER/sizes/best_science_books_Brief_History_resize_md.jpg"           
             alt="A Brief History of the time"
            height={400}
            loading="lazy"
          />
           <img
            src="https://images-na.ssl-images-amazon.com/images/I/81NbdUH+HIL.jpg"
           
             alt="Indian Economy"
            height={400}
            loading="lazy"
          />
           
      
      
      
      
    </ImageList>
    </div>
  );
}

