import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthState from './context/auth/authState';
import Home from './pages/Home';
import Login from './pages/Login'

function App() {
  
  //const token = localStorage.getItem('token');


  return (

    <AuthState>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/team' component={Home} />
        </Switch>
      </Router>
      
    </AuthState>
    
  )
}

export default App
