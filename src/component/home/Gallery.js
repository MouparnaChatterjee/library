import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../Carousel/carousel.scss'
import '../home/gallery.css'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <>
    <div className='gallery'>
    <ImageList
      // sx={{ width: 100, height:  }}
      variant="quilted"
      cols={4}
      rowHeight={300}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
    </>
  );
}

const itemData = [
  {
    img: 'https://www.timesofsports.com/wp-content/uploads/2020/04/Sachin-Tendulkar-biography-scaled.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/61hm4gCzPoL.jpg',
    title: 'Burger',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_A-PGsahAfaZSDUnyuQ-UAe0qDwU9ye9fsg&usqp=CAU',
    title: 'Camera',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/61hm4gCzPoL.jpg',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://m.media-amazon.com/images/I/51frAMG17WL.jpg',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://m.media-amazon.com/images/I/51frAMG17WL.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://hi-static.z-dn.net/files/d8d/809815ee866efd3a3c3239bd81e4c429.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/61hm4gCzPoL.jpg',
    title: 'Fern',
  }
  ];
