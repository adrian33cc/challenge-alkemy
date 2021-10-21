import React from 'react';
import NavBar from './Navbar';

const MainLayout = ({children}) => {
  return ( 
    <>
      <NavBar/>
      {children}
    </>
   );
}
 
export default MainLayout;