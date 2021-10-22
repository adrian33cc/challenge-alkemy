import React, {useContext, useEffect} from 'react';
import { Button, Container, Form, FormLabel, Navbar, NavbarBrand } from 'react-bootstrap';
import AuthContext from '../../context/auth/authContext';

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

        {autenticated ? <Button onClick={userLogout}>Cerrar Sesion </Button> : null}
      </Container>
    </Navbar>
   );
}
 
export default NavBar;