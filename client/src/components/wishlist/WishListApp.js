import React, { useEffect, useState } from 'react';
import WishForm from './WishForm';
import WishList from './Wishlist';
import useWishesState from '../../hooks/useWishesState';
import { WishesProvider } from '../../context/wishes.context';
import { v4 as uuidv4 } from 'uuid';
import Grid from "@material-ui/core/Grid"

import { getWishes, createWish, updateWish, deleteWish } from "../../utils/api";

export default function WishListApp() {
  const initialWishes = [];
  const [wishes, setWishes] = useState([]);

  const { wishes, addWish, deleteWish, toggleWish, editWish } = useWishesState(initialWishes);
  
  useEffect(() => {
    console.log("useEffect");
    getWishes()
    .then(wishes => {
      console.log(wishes);
      setWishes(wishes);

  })
  }, []);

  return (

    <WishesProvider>
      <WishForm addWish={addWish} />
      <WishList wishes={wishes} toggleWish={toggleWish} deleteWish={deleteWish} editWish={editWish} />
    </WishesProvider>

 
  );
}
