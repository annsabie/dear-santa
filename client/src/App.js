import React from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import SignIn from './components/auth/SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/profile' component={Profile} />
            <Route path='/signin' component={SignIn}/>
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
  );
}

export default App;
