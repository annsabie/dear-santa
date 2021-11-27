import React, { useState } from 'react';
import {userLogin} from '../../utils/api';
import './login.css'

import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

import Auth from '../../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ username: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const data = await userLogin( {...userFormData} );
      const final = await data.json();
      console.log(final);
      Auth.recordLogin(final.token);

    } catch (e) {
      console.log("Error")
      console.log(e);
    }

    // clear form values
    setUserFormData({
      username: '',
      password: '',
    });
  };

return (
  <>
  <Grid className="loginContainer" container spacing={0} justifyContent="center" direction="row">
    <Grid item className="loginForm">
      <Grid container direction="column" justifyContent="center" spacing={2}>
        {/* <Grid item>
    <FormControl noValidate validated={validated} onSubmit={handleFormSubmit}>
      <Alert
        severity="error"
        dismissible
        onClose={() => setShowAlert(false)}
        show={showAlert}
        variant="outlined"
      >
        Something went wrong with your login!
      </Alert>
      </FormControl>
      </Grid> */}
      <h1>Login:</h1>
      <br />
      <FormControl>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleInputChange}
          value={userFormData.username}
          required
        />
        {/* <Form.Control.Feedback type="invalid">
          Please enter username
        </Form.Control.Feedback> */}
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="outlined-password-input"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          value={userFormData.password}
          required
        />
        {/* <Form.Control.Feedback type="invalid">
          Please enter password
        </Form.Control.Feedback> */}
      </FormControl>
      <br />
      <Button
        disabled={!(userFormData.username && userFormData.password)}
        type="submit"
        variant="contained"
        href="/profile"
      >
        Login
      </Button>
    </Grid>
    </Grid>
    </Grid>
  </>
);
};


export default LoginForm;