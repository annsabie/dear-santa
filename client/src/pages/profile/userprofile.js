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
import Wishlist from '../../components/wishlist/WishListApp.js';
import './profile.css';
import WishList from '../../components/wishlist/WishListApp';


export default function UserProfile() {
  return (
    <Paper 
    style={{
      height: '100vh',
      backgroundImage: 'linear-gradient(to right top, #d1bebc, #d2c0c1, #c5b0ba, #b2a3b6, #9798b2, #768faa)',
      padding: 0,
      margin: 0,
      marginTop: 0
    }}
   elevation={0}
   >
<WishList />
<Grid container justifyContent="center" spacing={3} style={{ margin: "0px 0px 300px 0px"}}>
        <Grid item justifyContent="center" xs={12} sm={5}>
          <Card id="cardcontents">
          <Avatar padding="10">UN</Avatar>
          <Typography variant="h5" align="center">Username</Typography>
          
          <Divider />
          <Typography variant="h4" align="center">Bio</Typography>
          <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={8}
          defaultValue="Default Value"
        />
            
          </Card>
        </Grid>
  
</Grid>


</Paper>
  )}
