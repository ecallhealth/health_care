import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import SearchBox from './SearchBox';
// import logo from '../assets/logo.png';
import { resetCart } from '../slices/cartSlice';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      // NOTE: here we need to reset cart state for when a user logs out so the next
      // user doesn't inherit the previous users cart and shipping
      dispatch(resetCart());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className='header'>
  <Navbar bg='#232f3e' variant='light'>
    <Container className="d-flex justify-content-between align-items-center">
      {/* Logo on the left */}
      <LinkContainer to='/'>
        <Navbar.Brand href='#home'>ecall health</Navbar.Brand>
      </LinkContainer>

      {/* Search Box in the middle */}
      <div className="search-box-container">
        <Nav className='d-none d-lg-block'>
          <SearchBox />
        </Nav>
      </div>

      {/* Cart and User Icon on the right */}
      <div className="d-flex align-items-center">
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
      </div>
    </Container>
  </Navbar>
</header>

  );
};

export default Header;
