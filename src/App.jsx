import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import RouteProtected from './components/routes/RouteProtected';
import AuthState from './context/auth/authState';
import Home from './pages/Home';
import Login from './pages/Login'
import PageError from "./pages/PageError";

function App() {
  
  //const token = localStorage.getItem('token');


  return (

    <AuthState>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <RouteProtected exact path='/team' component={Home} />
          <Route path='*' component={PageError} />
        </Switch>
      </Router>
      
    </AuthState>
    
  )
}

export default App
