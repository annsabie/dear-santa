import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { createUser } from "../../utils/api";
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

  const handleFormSubmit = async (event) => {
    event.preventDefault();

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
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={2}
            noValidate
            validated={validated}
          >

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
