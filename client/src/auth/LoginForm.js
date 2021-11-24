import React, { useState } from 'react';
import { login } from '../utils/auth';

// import React, { Component } from 'react';
// import axios from 'axios';
// import {Redirect} from 'react-router-dom';

// import { Form, Button, Alert } from 'react-bootstrap';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';
// import {connect} from 'react-redux';
// import {signIn} from '../../store/actions/authActions';

// import Auth from '../utils/auth';

export default function LoginForm() {
  const [userFormData, setUserFormData] = useState({
     email: '', 
     password: '' 
  });

  const defaultLoginFormValues = { email: "", password: "" };

  const [errorMessage, setErrorMessage] = useState('');
  const [currentView, setCurrentView] = useState("Login");

  // 
   handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });

    // this.setState({
    //   [e.target.id]: e.target.value
    // })
  };

   handleFormSubmit = (e) => {
     // prevents refreshing the page that the form submit does once submitted
    e.preventDefault();

    // check if email is valid. if not, display error message
    if(!formData.email) {
      setErrorMessage('Email is incorrect');
      return;
    }

    // check if password is valid. if not, display error message
    if(!checkPassword(formData.password)) {
      setErrorMessage('Invalid password. Please try again')
    };
      return;
  }

return (
  <div className="container">
    <form onSubmit={this.handleFormSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
            <label htmlFor="email">Email</label>
            <input 
              value={formData.username}
              type="email" 
              id="email" 
              onChange={this.handleInputChange} 
              required
              />
        </div>
        <div className="input-field">
            <label htmlFor="password">Password</label>
            <input 
              value={formData.password}
              type="password" 
              id="password" 
              onChange={this.handleInputChange} 
              required
              />
        </div>
        <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            {/* <div className="red-text center">
                {authError ? <p>{authError}</p> : null}
            </div> */}
        </div>
        <h7 className="grey-text text-darken-3">* If you do not have an account with us yet, please <a href="/signup">Sign Up</a></h7>
    </form>
    {errorMessage && (
        <div>
          <p style={errorStyle} className="error-text">{errorMessage}</p>
        </div>
      )}
  </div>
)
}

export default LoginForm;