import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import "./profile.css";
import { Divider, Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import { LoginContext } from "../../context/login.context";
import * as API from "../../utils/api"
import { getBio, getMe, setBio } from "../../utils/api";
import { useNavigate } from "react-router-dom";

export default function Bio() {
  const [bio, setBioState] = useState("");
  useEffect(() => {
    getBio()
      .catch((err) => {
        console.log(err);
        alert("failed to fetch bio");
      })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("something went wrong!");
        }

        const { content } = await response.json();
        setBioState(content);
      });
  }, []);
  async function savebio() {
    const response = await setBio(bio);
    if (!response.ok) {
      throw new Error("you broke it");
    }
  }
  const navigate = useNavigate();
  return (
    <LoginContext.Consumer>
      {(value) => {
        function logoutRedirect() {
          value.logout();
          API.logout();
          navigate("/");
        }
  return (
    <Card id="card">
      <Typography variant="h3" align="center"><span>{value.loginState.username}</span>
      </Typography>
      <Divider />
      <Typography variant="h4" align="center">
        Bio
      </Typography>
      <TextField
        id="biotext"
        value={bio}
        onChange={(event) => setBioState(event.target.value)}
        label=""
        multiline
        rows={8}
        defaultValue="Enter your bio here!"
        fullWidth
      />
      <Divider />

      <IconButton id="savebutton" aria-label="save" onClick={savebio}>
        <SaveIcon />
      </IconButton>
    </Card>
  )
      }}
  </LoginContext.Consumer>

  );
}
