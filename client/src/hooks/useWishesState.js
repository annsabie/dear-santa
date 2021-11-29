import { useState } from "react";
/* import api from '../utils/api'; */
import { v4 as uuidv4 } from 'uuid';

export default initialWishes => {
  const [wishes, setWishes] = useState(initialWishes);

  return {
    wishes,
    addWish: newWishText => {
      const wish = {
        description: newWishText,
        granted: false
      };
      
/*       handleResponse("create new", api.createWish(wish));   */      
    },
    deleteWish: newWishText => {
      const wish = { description: newWishText };

/*       handleResponse("delete wish", api.deleteWish(wish)); */
    },
    toggleWish: newWishText => {
      const wish = { granted: newWishText };

/*       handleResponse("toggle wish", api.updateWish(wish)); */
    },
    editWish: newWishText => {
      const wish = { description: newWishText };

/*       handleResponse("edit wish", api.updateWish(wish)); */
    }
  };
};


function handleResponse(action, response) {
  response.then(function (response){
    if (!response.ok) { throw new Error(`Couldn't ${action} wish: ${response.status} ${response.statusText}`) }
    response.json()
  })
  .then(function(wishes){
    return wishes.map(function(wish){
      return { 
        content: wish.description, 
        done: wish.granted 
      };
  })})
  .then(function(wishes){
/*     setWishes(wishes); */
  })
  .catch(function(err){
    console.error(`${action} error: ${err.message}`)
  });
}