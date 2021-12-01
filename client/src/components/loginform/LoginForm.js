import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";
import { loginUser } from "../../utils/api";
import { LoginContext } from "../../context/login.context";

const emailRegex = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;

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

      try {
        const response = await loginUser(userFormData);

        if (!response.ok) {
          throw new Error("something went wrong!");
        }

        const { user } = await response.json();
        context.login(user);
        navigate("/profile");
      } catch (err) {
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
            <Grid
              container
              direction="column"
              justifyContent="center"
              spacing={2}
              noValidate
              validated={validated}
              onSubmit={handleFormSubmit(context)}
            >

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
