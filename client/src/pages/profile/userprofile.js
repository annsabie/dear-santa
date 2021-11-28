import * as React from 'react';
//import CardContent from '@material-ui/core/CardContent';
//import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import UploadButton from './imageUpload';
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
//import CardMedia from '@material-ui/core/CardMedia';
import Hat from "../../images/hat.png"
import TextField from '@material-ui/core/TextField';
import "./profile.css"
import { Divider, Typography } from '@material-ui/core';
import Santa from "../../images/santa.jpg"
import { LoginContext } from "../../context/login.context";

export default function UserProfile() {
  return (
    <Paper 
    style={{
      height: '100vh',
      backgroundImage: 'linear-gradient(to right top, #d1bebc, #d2c0c1, #c5b0ba, #b2a3b6, #9798b2, #768faa)',
      padding: 0,
      margin: 0
    }}
   elevation={0}
>

<Grid id="profilecard" container justifyContent='center' style={{ marginTop: '0rem' }}>
  <Grid item xs={8} md={8} lg={5}>
          <Card id="cardcontents">
          <Avatar padding="10">UN</Avatar>
          <Typography variant="h5" align="center">Username</Typography>
          <Typography variant="h6" align="center">Email</Typography>
          <Divider />
          <img id= "santa" src={Santa} />
          <Typography variant="h4" align="center">Share your list!</Typography>
          <TextField 
          id="standard-read-only-input"
          label="Copy this link"
          defaultValue="www.dearsanta.com/user"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
          fullWidth
        />
            
          </Card>
        </Grid>
  
</Grid>

</Paper>
  )}
