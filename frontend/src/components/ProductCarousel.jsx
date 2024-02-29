import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
// import Message from './Message';

const slides = [
  {
    id: 1,
    name: 'Product 1',
    image: './banners/banner-4.jpg',
    price: 19.99,
  },
  {
    id: 2,
    name: 'Product 2',
    image: './banners/banner-5.jpg',
    price: 24.99,
  },
  {
    id: 3,
    name: 'Product 3',
    image: './banners/banner-6.jpg',
    price: 29.99,
  },
];

const ProductCarousel = () => {
  return (
    <Carousel pause='hover' className='bg-primary mb-4'>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <Link to={`/`}>
            <Image
              src={slide.image}
              alt={slide.name}
              fluid
              style={{ height: '400px', objectFit: 'cover' }}
              className='d-block w-100'
            />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
