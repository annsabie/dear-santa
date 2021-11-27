import React, { useState } from 'react';
import './login.css'

import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

import { loginUser } from '../../utils/api';
import Auth from '../../utils/auth';

const LoginForm = () => {
  const [ userFormData, setUserFormData ] = useState({ email: '', password: '' });
  const [ validated, setValidated ] = useState(false);
  const [ showAlert, setShowAlert ] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormData)

    /* Here we call the loginUser method, passing in the form data. If 
    the login is successful, we'll receive back a token as well as the 
    user data. The Auth.login() method will add the token to localStorage. */
    try {
      const response = await loginUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user)
      Auth.login(token);
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

  return (
    <>
      <Grid className="loginContainer" container spacing={0} justifyContent="center" direction="row">
      <Grid item className="loginForm">
    
    {/* TODO: Validation functionality in Material UI format */}
      <Grid container direction="column" justifyContent="center" spacing={2} noValidate validated={validated} onSubmit={handleFormSubmit}>
      {/* <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
      TODO: Alert feedback in Material UI format
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert> */}

    
        <h1>Login:</h1>
        <br />
        <FormControl>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <Input
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          {/* TODO: Alert feedback in Material UI format */}
          {/* <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback> */}
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <Input
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          {/* TODO: Alert feedback in Material UI format */}
          {/* <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback> */}
        </FormControl>
        <br />
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Grid>
      </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;
