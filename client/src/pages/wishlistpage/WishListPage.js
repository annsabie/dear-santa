import React from 'react';
import Wishlist from '../../components/wishlist/WishListApp.js';
import Paper from "@material-ui/core/Paper";

import Grid from '@material-ui/core/Grid';



// This is the profile page updated
const WishListPage = () => {
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
     
        <Grid container justifyContent='center' style={{ marginTop: '0rem' }}>
        <Grid item xs={11} md={9} lg={5}>
      <Wishlist />
      </Grid>
      </Grid>

    );


    </Paper>
    );
};


export default WishListPage;