
import React, { useEffect, useState } from "react";
import WishForm from "./WishForm";
import WishList from "./Wishlist";
import useWishesState from "../../hooks/useWishesState";
import { WishesProvider } from "../../context/wishes.context";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { v4 as uuid } from "uuid";
// import uuid from 'uuid/v4';
import Grid from "@material-ui/core/Grid";
export default function WishListApp() {
  const initialWishesArray = [
    // {
    //   id: uuid(),
    //   content: 'Audio-Technica ATH-M50x Headphones',
    //   done: false,
    //   link: 'https://www.audio-technica.com/cms/headphones/99aff89488ddd6b1/index.html'
    // }
  ];
  // const wishesLength = JSON.parse(localStorage.getItem('wishes')).length;
  const wishesLength = 0;
  const initialWishes =
    wishesLength > 0
      ? // if there are any wishes, render them
        JSON.parse(window.localStorage.getItem("wishes"))
      : // otherwise, in case the user deleted all, reload hardcoded wishes from
        // initialWishesArray upon refresh so it won't start as empty
        initialWishesArray;
  const { wishes, addWish, deleteWish, toggleWish, editWish } =
    useWishesState(initialWishes);
  useEffect(() => {
    // sync wishes to localStorage by saving them under the key of "wishes"
    // since wishes are objects, and localStorage needs a string,
    // we need to explicitly convert them into strings, in order to avoid
    // the JS Engline implicitly calling .toString() on the objects
    window.localStorage.setItem("wishes", JSON.stringify(wishes));
  }, [wishes]);
  return (
    // <Paper
    //   style={{
    //     height: "100vh",
    //     padding: 0,
    //     margin: 0,
    //   }}
    //   elevation={0}
    // >
    <Grid container justify="center" style={{ marginTop: "1rem" }}>
      <Grid item xs={11} md={9} lg={5}>
        <WishesProvider>
          <WishForm addWish={addWish} />
          <WishList
            wishes={wishes}
            toggleWish={toggleWish}
            deleteWish={deleteWish}
            editWish={editWish}
          />
        </WishesProvider>
      </Grid>
    </Grid>
    // </Paper>
  );
}