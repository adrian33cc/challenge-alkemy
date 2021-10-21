import React from 'react';
import { Button, Container, Form, FormLabel, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  
  //const [pagevar, toggleUser,isUser] = useAuth();

  return ( 
    <Navbar bg='dark' variant='dark'>
      <Container className='p-2' >
        <NavbarBrand>Challenge React Alkemy</NavbarBrand>

        <Form>
          <Form.Group>
            <Form.Control placeholder='Search Superhero' />
          </Form.Group>
        </Form>

        <Link to='/login'> <Button> Login </Button> </Link>
      </Container>
    </Navbar>
   );
}
 
export default NavBar;