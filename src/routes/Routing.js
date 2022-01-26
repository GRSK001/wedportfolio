import React from 'react'
import { BrowserRouter as Router, Routes,Route, Switch ,Link } from 'react-router-dom'

import Dashboard from '../components/Dashboard'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import { AuthProvider } from '../components/Auth'
import Home from '../Pages/Home';
import Portfolio from '../Pages/portfolio';
import About from '../Pages/about';




function Routing() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/About" component={About} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default Routing;
