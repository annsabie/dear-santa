// import { InputLabel } from '@material-ui/core';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Form, Button, Alert } from 'react-bootstrap';
import "./signup.css";

import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

import { createUser } from "../../utils/api";
import Auth from "../../utils/auth";
import { TextField } from "@material-ui/core";

const SignupForm = () => {
  const navigate = useNavigate();
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  /* When a new user is created, the server will send back a token 
  for that user, as well as the user's data. The Auth.login() method 
  will then save that token to localStorage. */

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    try {
      const response = await createUser(userFormData);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { user } = await response.json();
      console.log(user);
      navigate("/profile");
      // Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
  };

  return (
    <>
      <Grid
        className="signupContainer"
        container
        spacing={0}
        justifyContent="center"
        direction="row"
      >
        <Grid item className="signupForm">
          {/* TODO: Validation functionality in Material UI format */}
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={2}
            noValidate
            validated={validated}
          >
            {/* <Form noValidate validated={validated} onSubmit={handleFormSubmit}> */}

            {/* TODO: show alert if server response is bad in Material UI */}
            {/* show alert if server response is bad */}
            {/* <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert> */}

            <h1>Signup!</h1>
            <br />
            <form onSubmit={handleFormSubmit}>
              <TextField
                label="Username"
                type="text"
                placeholder="Your username"
                name="username"
                onChange={handleInputChange}
                value={userFormData.username}
                required
              />
              {/* TODO: Alert feedback in Material UI format */}
              {/* <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback> */}

              <br />
              <TextField
                label="Email"
                type="email"
                placeholder="Your email address"
                name="email"
                onChange={handleInputChange}
                value={userFormData.email}
                required
              />
              {/* TODO: Alert feedback in Material UI format */}
              {/* <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback> */}

              <br />

              <TextField
                label="Password"
                type="password"
                placeholder="Your password"
                name="password"
                onChange={handleInputChange}
                value={userFormData.password}
                required
              />
              {/* TODO: Alert feedback in Material UI format */}
              {/* <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback> */}

              <br />
              <Button
                disabled={
                  !(
                    userFormData.username &&
                    userFormData.email &&
                    userFormData.password
                  )
                }
                variant="success"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SignupForm;
