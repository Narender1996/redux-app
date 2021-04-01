import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './fun.comp/Home'
import User from './fun.comp/User'
import Signup from './fun.comp/signup';
import Login from './fun.comp/login'
// import Navbar from './fun_comp/Navbar'
import Protected from './fun.comp/protected'
function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route exact path='/home'><Protected Cmp={Home} /></Route>
          <Route exact path='/user'><Protected Cmp={User} /></Route>
          <Route exact path='/' component={Signup} />
          <Route exact path='/Login' component={Login} />
        </Switch>
      </Router>
    </div>

  );
}


 export default App;
