import React, {useContext, useEffect} from 'react';
import { Button, Container, Form, FormLabel, Navbar, NavbarBrand } from 'react-bootstrap';
import AuthContext from '../../context/auth/AuthContext';

const NavBar = () => {
  
  //const [pagevar, toggleUser,isUser] = useAuth();
  const authContext = useContext(AuthContext)
  const {autenticated, userLogout,userAutenticated} = authContext;
  useEffect(() => {
    userAutenticated()
  },[autenticated] )

  return ( 
    <Navbar bg='dark' variant='dark'>
      <Container className='p-2' >
        <NavbarBrand>Challenge React Alkemy</NavbarBrand>

        <Form>
          <Form.Group>
            <Form.Control placeholder='Search Superhero' />
          </Form.Group>
        </Form>

        {autenticated ? <Button onClick={userLogout}>Cerrar Sesion </Button> : null}
      </Container>
    </Navbar>
   );
}
 
export default NavBar;