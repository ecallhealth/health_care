import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import SearchBox from './SearchBox';
import logo from '../assets/logo.png';
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
    <Navbar
      variant='dark'
      expand='lg'
      collapseOnSelect
      className='navbar-sticky'
    >
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav className='me-auto'>
              {/* Admin Links */}
              {/* { (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )} */}
              <LinkContainer to='/'>
                <Nav.Link className='nav-link'>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/pharmacy'>
                <Nav.Link>Pharmacy</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/laboratory'>
                <Nav.Link>Laboratory</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/tele-consultation'>
                <Nav.Link>Tele-Consultation</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/clinic'>
                <Nav.Link>Clinic Service</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/vitual'>
                <Nav.Link>Virtual Help</Nav.Link>
              </LinkContainer>
            </Nav>
          </Nav>
          
          {/* Nav links that disappear on small screens and expand on large screens */}
        </Navbar.Collapse>
        <Nav className='ml-auto d-lg-none'>
            {' '}
            {/* Show only on small screens */}
            <SearchBox />
          </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
