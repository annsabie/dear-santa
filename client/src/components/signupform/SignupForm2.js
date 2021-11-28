import React, { useState, useEffect } from 'react';
import { createUser } from '../../utils/api';
import './signup.css'

import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

import Auth from '../../utils/auth';

const SignupForm = () => {
  // initial form state
  const [userFormData, setUserFormData] = useState({
    username: '',
    password: '',
  });
  // state for form validation
  const [validated] = useState(false);
  // state for alert
  const [showAlert, setShowAlert] = useState(false);

  // const [addUser, { error }] = createUser();
  const addUser = createUser();

  // useEffect(() => {
  //   if (error) {
  //     setShowAlert(true);
  //   } else {
  //     setShowAlert(false);
  //   }
  // }, [error]);

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
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
    <Grid className="signupContainer" container spacing={0} justifyContent="center" direction="row">
      <Grid item className="signupForm">
      <Grid container direction="column" justifyContent="center" spacing={2} >
      {/* <Grid item>
      <FormControl noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          severity="error"
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="outlined"
        >
          Something went wrong with your signup!
        </Alert>
        </FormControl>
        </Grid> */}
        <h1>Sign Up!</h1>
        <br />
        <FormControl>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          {/* <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback> */}
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          {/* <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback> */}
        </FormControl>
        <br />
        <Button
          disabled={
            !(
              userFormData.username &&
              userFormData.password
            )
          }
          type="submit"
          variant="contained"
          href="/profile"
        >
          Signup
        </Button>
    </Grid>
    </Grid>
    </Grid>
    </>
  );
};

export default SignupForm;