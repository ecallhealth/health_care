import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Message from './Message';
import banners from "./banners.json"
// import banner from "../../public/images/banners/"
import { useGetTopProductsQuery } from '../slices/productsApiSlice';

const SlidingCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel
      pause='hover'
      className='bg-primary mb-4'
      fade
      style={{ width: '100%' }}
    >
      {banners.map((item, index) => (
        <Carousel.Item key={index}>
          <Link>
            <Image
              src={item.imageUrl}
              alt={`Slide ${index + 1}`}
              fluid
              // className='d-block w-100'
              style={{ height: '400px', objectFit: 'cover' }}
              className='d-block w-100'
            />
            <Carousel.Caption className='carousel-caption'>
              <h2 className='text-white text-right'>{item.title}</h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SlidingCarousel;
