import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
// import { logout } from '../slices/authSlice';
import SearchBox from './SearchBox';
// import logo from '../assets/logo.png';
// import { resetCart } from '../slices/cartSlice';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  return (
    <header className='header'>
      <Navbar bg='#232f3e' variant='light'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand href='#home'>ecall health</Navbar.Brand>
          </LinkContainer>
          <Nav className='d-none d-lg-block'>
            <SearchBox />
          </Nav>

          <LinkContainer to='/cart'>
            <Nav.Link>
              <FaShoppingCart className='cart-icon' />
              {cartItems.length > 0 && (
                <Badge pill bg='warning' className='cart-badge'>
                  {cartItems.reduce((a, c) => a + c.qty, 0)}
                </Badge>
              )}
            </Nav.Link>
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
