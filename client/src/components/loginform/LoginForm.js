// import React, { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';
// /* import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations'; */

// /* import Auth from '../utils/auth'; */

// const LoginForm = () => {
//   const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  
//  /*  const [login, { error, data }] = useMutation(LOGIN_USER); */
  
//   const [validated] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     // check if form has everything
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     try {
//       /* const { data } = await login({
//         variables: { ...userFormData },
//       }); */
      
//       /* Auth.login(data.login.token); */
//     } catch (err) {
//       console.error(err);
//       setShowAlert(true);
//     }

//     setUserFormData({
//       username: '',
//       email: '',
//       password: '',
//     });
//   };

//   return (
//     <>
//       <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//         <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
//           Something went wrong with your login credentials!
//         </Alert>
//         <Form.Group>
//           <Form.Label htmlFor='email'>Email</Form.Label>
//           <Form.Control
//             type='text'
//             placeholder='Your email'
//             name='email'
//             onChange={handleInputChange}
//             value={userFormData.email}
//             required
//           />
//           <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label htmlFor='password'>Password</Form.Label>
//           <Form.Control
//             type='password'
//             placeholder='Your password'
//             name='password'
//             onChange={handleInputChange}
//             value={userFormData.password}
//             required
//           />
//           <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
//         </Form.Group>
//         <Button
//           disabled={!(userFormData.email && userFormData.password)}
//           type='submit'
//           variant='success'>
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// };

// export default LoginForm;



/* return (
  <>
    <form>
      <label>
        First Name: 
        <input type="text" name="firstname" />
      </label>
      <label>
        Last Name: 
        <input type="text" name="lastname" />
      </label>
      <label>
        Email Address: 
        <input type="text" name="email" />
      </label>
      <label>
        Password: 
        <input type="text" name="password" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </>
); */

import React, { useState } from 'react';
// import { login } from '../utils/auth';

// import React, { Component } from 'react';
// import axios from 'axios';
// import {Redirect} from 'react-router-dom';

// import { Form, Button, Alert } from 'react-bootstrap';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';
// import {connect} from 'react-redux';
// import {signIn} from '../../store/actions/authActions';

// import Auth from '../utils/auth';

// export default function LoginForm() {
const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({
     email: '', 
     password: '' 
  });

  const defaultLoginFormValues = { email: "", password: "" };

  const [errorMessage, setErrorMessage] = useState('');
  const [currentView, setCurrentView] = useState("Login");

  // 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });

    // this.setState({
    //   [e.target.id]: e.target.value
    // })
  };

  // const handleFormSubmit = async (e) => {
     // prevents refreshing the page that the form submit does once submitted
    // e.preventDefault();

    // check if email is valid. if not, display error message
    // if(!formData.email) {
    //   setErrorMessage('Email is incorrect');
    //   return;
    // }

    // check if password is valid. if not, display error message
    // if(!checkPassword(formData.password)) {
    //   setErrorMessage('Invalid password. Please try again')
    // };
    //   return;
  

return (
  <div className="container">
    {/* <form onSubmit={this.handleFormSubmit} className="white"> */}
    <form className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
            <label htmlFor="email">Email</label>
            <input 
              // value={formData.username}
              type="email" 
              id="email" 
              onChange={this.handleInputChange} 
              required
              />
        </div>
        <div className="input-field">
            <label htmlFor="password">Password</label>
            <input 
              // value={formData.password}
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
    {/* {errorMessage && ( */}
        {/* // <div>
        //   <p style={errorStyle} className="error-text">{errorMessage}</p>
        // </div> */}
      {/* // )} */}
  </div>
)}


export default LoginForm;