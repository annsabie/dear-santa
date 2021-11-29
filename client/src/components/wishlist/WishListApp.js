import React, { useEffect } from 'react';
import WishForm from './WishForm';
import WishList from './Wishlist';
import useWishesState from '../../hooks/useWishesState';
import { WishesProvider } from '../../context/wishes.context';
import { v4 as uuidv4 } from 'uuid';
import Grid from "@material-ui/core/Grid"

export default function WishListApp() {
  // GET current userKey
  // Fetch current user wish list
  const initialWishes = [];
/*   const [wishList, setWishList] = useState([]); */

 /*  api.getWishes().then(function(response) {
    if (!response.ok) { console.error("unable to get wishes:", response.status, response.statusText); return }
    response.json()
  }).then(function(wishes){
    wishes.each(function(wish){
      initialWishes.push({ 
        content: wish.description, 
        done: wish.granted 
      });
    });
  }); */

  console.log("WishListApp:", initialWishes);

  const { wishes, addWish, deleteWish, toggleWish, editWish } = useWishesState(initialWishes);

  useEffect(() => {
    const getWishList = async () => {
      try {
        const res = await getWishes();
        if (!res.ok) {
          throw new Error('No list of wishes');
        }
        const wishList = await res.json();
/*         setWishList(wishList); */
      } catch (err) {
        console.error(err);
      }
    };
    getWishList();
  }, [ wishes ] );

  return (

          <WishesProvider>
            <WishForm addWish={addWish} />
            <WishList wishes={wishes} toggleWish={toggleWish} deleteWish={deleteWish} editWish={editWish} />
          </WishesProvider>

 
  );
}
