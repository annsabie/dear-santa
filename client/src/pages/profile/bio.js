import * as React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import TextField from '@material-ui/core/TextField';
import "./profile.css"
import { Divider, Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import useBioState from "../../hooks/useBioState"
import { getMe } from '../../utils/api';


export default function Bio() {
  const { bio, addBio, deleteBio, editBio } = useBioState();
  return (
          <Card id="cardcontents">
            <Avatar>{getMe}</Avatar>
            <Typography variant="h4" align="center">{getMe}</Typography>
            <Divider />
            <Typography variant="h5" align="center">Bio</Typography>
            <TextField
              label=""
              multiline
              rows={8}
              defaultValue="Enter your bio here!"
              fullWidth
            />
            <Divider />
            <IconButton aria-label="delete" onClick={() => deleteBio()}>
              <DeleteIcon />
            </IconButton>
            <IconButton id="savebutton" aria-label="save" onClick={() => addBio()}>
              <SaveIcon />
            </IconButton>
          </Card> 
  )
}
