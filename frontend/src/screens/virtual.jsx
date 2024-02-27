import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import { FaCheck } from 'react-icons/fa';
import SlidingCarousel from '../components/slidingCarousel';
import AdvertisingCarousel from '../components/AdvertisingBanner';

const ClinicScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <Container className='py-5'>
            <h2 className='text-center mb-5'>FREE Medical Consultation</h2>
            <Card className='mb-4'>
              {/* <Card.Header>Tele consultation</Card.Header> */}
              <Card.Body>
                <Card.Title>- AI CHAT BOT FREE Medical Consultation</Card.Title>
                <Card.Text>
                  AI CHAT BOT is designed to help find and assess which possible
                  disease one may be sufferring from according to the symptoms
                </Card.Text>
                <Button variant='primary'>Get Started Now</Button>
              </Card.Body>
            </Card>
          </Container>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default ClinicScreen;
