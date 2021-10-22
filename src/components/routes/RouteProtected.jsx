import React, {useContext, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';


const RouteProtected = ({ component: Component, ...props  }) => {
  
  const authContext = useContext(AuthContext);
  const {autenticated, userAutenticated} = authContext;
  
  useEffect(() => {
    userAutenticated()
  }, [])

  return ( 
    <Route
      {...props} render={props => !autenticated ? (
        <Redirect to={'/'} />
      ) : (
        <Component {...props} />
      ) }
    />
   );
}
 
export default RouteProtected;