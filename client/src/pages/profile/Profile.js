// import * as React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./profile.css";
import Bio from "./bio";
import React from "react";
import Wishlist from "../../components/wishlist/WishListApp.js";
import Navbar from "../../components/navbar/Navbar";
const Profile = () => {
  return (
    <Paper
      className="profilegrid"
      style={{
        height: "100vh",
        overflowY:"scroll",
        padding: 0,
        margin: 0,
      }}
      elevation={0}
    >
      <Grid
        container
        justifyContent="center"
        spacing={3}
        style={{ margin: "0px 0px 100px 0px" }}
      >
        <Grid item justifyContent="center" xs={12} sm={5}>
          <Bio />
        </Grid>
        <Grid item justifyContent="center" xs={12} sm={12}>
          <Wishlist />
        </Grid>
      </Grid>
    </Paper>
  );
};
export default Profile;