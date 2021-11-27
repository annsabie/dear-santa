import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";
import { loginUser } from "../../utils/api";
import Auth from "../../utils/auth";
import { LoginContext } from "../../context/login.context";

const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

const LoginForm = () => {
  const navigate = useNavigate();

  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [emailValidationError, setEmailValidationError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const validateEmail = () => {
    if (emailRegex.test(userFormData.email)) {
      setEmailValidationError("");
    } else {
      setEmailValidationError("Your login is your email address");
    }
  };

  function handleFormSubmit(context) {
    return async (event) => {
      event.preventDefault();
      console.log(userFormData);

      /* Here we call the loginUser method, passing in the form data. If 
      the login is successful, we'll receive back a token as well as the 
      user data. The Auth.login() method will add the token to localStorage. */
      try {
        const response = await loginUser(userFormData);

        if (!response.ok) {
          throw new Error("something went wrong!");
        }

        const { user } = await response.json();
        context.login(user);
        console.log(user);
        navigate("/profile");
      } catch (err) {
        console.error(err);
        setShowAlert(true);
      }
    };
  }

  return (
    <LoginContext.Consumer>
      {(context) => (
        <Grid
          className="loginContainer"
          container
          spacing={0}
          justifyContent="center"
          direction="row"
        >
          <Grid item className="loginForm">
            {/* TODO: Validation functionality in Material UI format */}
            <Grid
              container
              direction="column"
              justifyContent="center"
              spacing={2}
              noValidate
              validated={validated}
              onSubmit={handleFormSubmit(context)}
            >
              {/* <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
    TODO: Alert feedback in Material UI format
      <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
        Something went wrong with your login credentials!
      </Alert> */}

              <h1>Login:</h1>
              <br />
              <form>
                <TextField
                  helperText={emailValidationError}
                  error={!!emailValidationError}
                  label="Email"
                  placeholder="Your email"
                  name="email"
                  onChange={handleInputChange}
                  onBlur={validateEmail}
                  value={userFormData.email}
                  required
                />
                {/* TODO: Alert feedback in Material UI format */}
                {/* <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback> */}
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
                    !(userFormData.email && userFormData.password) ||
                    emailValidationError
                  }
                  type="submit"
                  variant="success"
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </Grid>
      )}
    </LoginContext.Consumer>
  );
};

export default LoginForm;
