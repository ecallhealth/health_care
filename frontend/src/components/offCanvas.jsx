// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// // import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { LinkContainer } from 'react-router-bootstrap';

// function OffcanvasExample() {
//   return (
//     <>
//       <Navbar bg='primary' variant='dark' expand='lg' sticky='top'>
//         <Container>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' />
//           <Navbar.Collapse id='basic-navbar-nav'>
//             <Nav className='me-auto'>
//               <LinkContainer to='/cart'>
//                 <Nav.Link>
//                   <FaShoppingCart /> Cart
//                   {cartItems.length > 0 && (
//                     <Badge pill bg='success' style={{ marginLeft: '5px' }}>
//                       {cartItems.reduce((a, c) => a + c.qty, 0)}
//                     </Badge>
//                   )}
//                 </Nav.Link>
//               </LinkContainer>
//               {userInfo ? (
//                 <>
//                   <NavDropdown title={userInfo.name} id='username'>
//                     <LinkContainer to='/profile'>
//                       <NavDropdown.Item>Profile</NavDropdown.Item>
//                     </LinkContainer>
//                     <NavDropdown.Item onClick={logoutHandler}>
//                       Logout
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </>
//               ) : (
//                 <LinkContainer to='/login'>
//                   <Nav.Link>
//                     <FaUser /> Sign In
//                   </Nav.Link>
//                 </LinkContainer>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//           <Button variant='outline-light' onClick={handleShow}>
//             Open Offcanvas
//           </Button>
//         </Container>
//       </Navbar>
//       <Offcanvas show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>This is the content of the Offcanvas.</Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// export default OffcanvasExample;
