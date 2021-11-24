import React from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Login from './auth/LoginForm';
import Signup from './auth/SignupForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/profile' component={Profile} />
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>    
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
          <Footer />
        </>
      </Router>
  );
}

export default App;
