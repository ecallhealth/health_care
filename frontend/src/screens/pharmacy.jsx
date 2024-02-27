import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import SlidingCarousel from '../components/slidingCarousel';
import AdvertisingCarousel from '../components/AdvertisingBanner';

const PharmacyScreen = () => {
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
          {/* <Meta />
          <h5>Ecall Health Pharmacy: Order online, receive promptly.</h5>
          <Row>
                {data.products.map((product, index) => (
                (index % 4 === 0) && (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row> */}
          <Row>
            {data.products.map(
              (product, index) =>
                index % 4 === 0 && (
                  <Row key={index} className='mb-4'>
                    {data.products.slice(index, index + 4).map((product) => (
                      <Col key={product._id} sm={12} md={6} lg={3}>
                        <Product product={product} />
                      </Col>
                    ))}
                  </Row>
                )
            )}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
      <SlidingCarousel />
    </>
  );
};

export default PharmacyScreen;
