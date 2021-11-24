import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default initialWishes => {
  const [wishes, setWishes] = useState(initialWishes);
  return {
    wishes,
    addWish: newWishText => {
      setWishes([
        ...wishes,
        {
          id: uuidv4(),
          content: newWishText,
          done: false,
          link: ""
        }
      ]);
    },
    deleteWish: wishId => {
      setWishes(wishes.filter(wish => wish.id !== wishId));
    },
    toggleWish: wishId => {
      setWishes(
        wishes.map(wish =>
          wish.id === wishId ? { ...wish, done: !wish.done } : wish
        )
      );
    },
    editWish: (wishId, newWishText) => {
      setWishes(
        wishes.map(wish =>
          wish.id === wishId ? { ...wish, content: newWishText } : wish
        )
      );
    }
  };
};
