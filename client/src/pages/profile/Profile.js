import * as React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import TextField from '@material-ui/core/TextField';
import "./profile.css"
import { Divider, Typography } from '@material-ui/core';
import WishList from '../../components/wishlist/WishListApp';
import { IconButton } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";



const Profile = () => {
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

      <Grid container justifyContent="center" spacing={3} style={{ margin: "0px 0px 300px 0px"}}>
        <Grid item justifyContent="center" xs={12} sm={5}>
          <Card id="cardcontents">
            <Avatar>UN</Avatar>
            <Typography variant="h4" align="center">User</Typography>
            <Divider />
            <Typography variant="h5" align="center">Bio</Typography>
            <TextField
              id="bio"
              label=""
              multiline
              rows={8}
              defaultValue="Enter your bio here!"
              fullWidth
            />
            <Divider />
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="save">
              <SaveIcon />
            </IconButton>
          </Card> 
        </Grid>
        <Grid item justifyContent="center" xs={12} sm={5}>
          <WishList />
        </Grid>
    </Grid>
  </Paper>
  )
}

export default Profile;
