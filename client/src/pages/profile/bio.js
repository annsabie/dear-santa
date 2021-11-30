import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import "./profile.css";
import { Divider, Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

import { getBio, getMe, setBio } from "../../utils/api";

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
  return (
    <Card id="cardcontents">
      <Avatar>{getMe}</Avatar>
      <Typography variant="h4" align="center">
        {getMe}
      </Typography>
      <Divider />
      <Typography variant="h5" align="center">
        Bio
      </Typography>
      <TextField
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
  );
}
