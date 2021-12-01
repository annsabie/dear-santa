
import React, { useEffect } from "react";
import WishForm from "./WishForm";
import WishList from "./Wishlist";
import useWishesState from "../../hooks/useWishesState";
import { WishesProvider } from "../../context/wishes.context";
import Grid from "@material-ui/core/Grid";

export default function WishListApp() {
  const { wishes, setWishes, addWish, deleteWish, toggleWish, editWish } =
    // Start out with wishes == null
    useWishesState(null);
  useEffect(() => {
    if (wishes == null) {

      // get wishes from the API instead of local storage
      setWishes(JSON.parse(window.localStorage.getItem("wishes")) || []);
    } else {
      // save wishes via the API instead of local storage
      window.localStorage.setItem("wishes", JSON.stringify(wishes));
    }
  }, [wishes, setWishes]);
  return (
    <Grid container justify="center" style={{ marginTop: "1rem" }}>
      <Grid item xs={11} md={9} lg={5}>
        <WishesProvider>
          <WishForm addWish={addWish} />
          { wishes &&
            /* Only render the wishes after initialization from the API or localStorage */
            <WishList
              wishes={wishes}
              toggleWish={toggleWish}
              deleteWish={deleteWish}
              editWish={editWish}
            />}
        </WishesProvider>
      </Grid>
    </Grid>
  );
}