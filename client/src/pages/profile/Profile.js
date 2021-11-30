// import * as React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./profile.css";
import Bio from "./bio"
import React from 'react';
import Wishlist from '../../components/wishlist/WishListApp.js';
import Navbar from "../../components/navbar/Navbar";

const Profile = () => {
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
    <Grid container justifyContent="center" spacing={3} style={{ margin: "0px 0px 300px 0px"}}>
      <Grid item justifyContent="center" xs={12} sm={5}>
        <Bio />
      </Grid>
      <Grid item justifyContent="center" xs={12} sm={5}>
        <Wishlist />
      </Grid>
    </Grid>
  </Paper>
    );
};

export default Profile;