import React from 'react';
import Wishlist from '../../components/wishlist/WishListApp.js';
import './profile.css';
import UserProfile from './userprofile.js';
import Paper from "@material-ui/core/Paper";


import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid';

// This is the profile page updated
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
        <div>
          <Box sx={{ flexGrow: 1 }}>
   <Grid container spacing={2}>
  <Grid item xs={4}>
    <UserProfile />
  </Grid>
  <Grid item xs={8}>
    <Wishlist />
  </Grid>
</Grid>
</Box>
    </div>
    </Paper>
    );
};

<Grid container spacing={2}>
  <Grid item xs={4}>
    <UserProfile />
  </Grid>
  <Grid item xs={8}>
    <Wishlist />
  </Grid>
</Grid>

export default Profile;