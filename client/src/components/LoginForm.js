import React, { useState } from 'react';
// import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

// import { Form, Button, Alert } from 'react-bootstrap';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';
// import {connect} from 'react-redux';
// import {signIn} from '../../store/actions/authActions';


import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({
     email: '', 
     password: '' 
  });
  
  // const [login, { error, data }] = useMutation(LOGIN_USER);
  // const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });

    // this.setState({
    //   [e.target.id]: e.target.value
    // })
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    })
    // e.preventDefault();

    // check if form has everything
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });
      
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

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
return (
  <div className="container">
    <form onSubmit={this.handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
                {authError ? <p>{authError}</p> : null}
            </div>
        </div>
        <h7 className="grey-text text-darken-3">* If you do not have an account with us yet, please <a href="/signup">Sign Up</a></h7>
    </form>
  </div>
)
}

export default LoginForm;