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
            <h2 className='text-center mb-5'>Consultation</h2>
            <Card className='mb-4'>
              <Card.Header>Tele consultation</Card.Header>
              <Card.Body>
                <Card.Title>- Need a doctor?</Card.Title>
                <Card.Text>
                  Tired of long queues and hours at the clinic to see a doctor?
                  We give you 24/7 access to medical care in minutes. You have
                  access to doctor consultations in the middle of the night even
                  when you’re out of town. Be assured of quality care all the
                  time.
                </Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
            <Row className='justify-content-center'>
              <Col md={6} lg={4} className='mb-4'>
                <Card className='h-100'>
                  <Card.Body>
                    <Card.Title className='text-center'>
                      Basic Consultation
                    </Card.Title>
                    <Card.Text className='text-center'>Starting from</Card.Text>
                    <Card.Text className='text-center'>$50</Card.Text>
                    <Button variant='primary' className='w-100'>
                      Book Now
                    </Button>
                  </Card.Body>
                  <Card.Footer className='text-muted text-center'>
                    <FaCheck /> Instant Bookings Available
                  </Card.Footer>
                </Card>
              </Col>
              <Col md={6} lg={4} className='mb-4'>
                <Card className='h-100'>
                  <Card.Body>
                    <Card.Title className='text-center'>
                      Premium Consultation
                    </Card.Title>
                    <Card.Text className='text-center'>Starting from</Card.Text>
                    <Card.Text className='text-center'>$100</Card.Text>
                    <Button variant='primary' className='w-100'>
                      Book Now
                    </Button>
                  </Card.Body>
                  <Card.Footer className='text-muted text-center'>
                    <FaCheck /> Dedicated Support
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
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
