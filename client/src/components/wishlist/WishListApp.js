import React, { useEffect } from 'react';
import WishForm from './WishForm';
import WishList from './Wishlist';
import useWishesState from '../../hooks/useWishesState';
import { WishesProvider } from '../../context/wishes.context';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { v4 as uuidv4 } from 'uuid';
/* import api from '../../utils/api.js'; */

export default function WishListApp() {
  // GET current userKey
  // Fetch current user wish list
  const initialWishes = [];

  api.getWishes().then(function(response) {
    if (!response.ok) { console.error("unable to get wishes:", response.status, response.statusText); return }
    response.json()
  }).then(function(wishes){
    wishes.each(function(wish){
      initialWishes.push({ 
        content: wish.description, 
        done: wish.granted 
      });
    });
  });

  console.log("WishListApp:", initialWishes);

  const { wishes, addWish, deleteWish, toggleWish, editWish } = useWishesState(initialWishes);

  useEffect(
    () => {
      // sync wishes to localStorage by saving them under the key of "wishes"
      // since wishes are objects, and localStorage needs a string,
      // we need to explicitly convert them into strings, in order to avoid
      // the JS Engline implicitly calling .toString() on the objects
      window.localStorage.setItem('wishes', JSON.stringify(wishes));
    },
    [ wishes ]
  );

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
      {/* use Paper Component as a reusable container to provide us with a background color */}
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        {/* AppBar, Toolbar, and Typography Components are from the material-ui docs */}
        <Toolbar>
          <Typography color='inherit'>Wishes</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={9} lg={5}>
          <WishesProvider>
            <WishForm addWish={addWish} />
            <WishList wishes={wishes} toggleWish={toggleWish} deleteWish={deleteWish} editWish={editWish} />
          </WishesProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}
