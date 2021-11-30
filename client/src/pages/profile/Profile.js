import * as React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./profile.css";
import WishList from '../../components/wishlist/WishListApp';
import Bio from "./bio"

const Profile = () => {

  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    getWishes()
    .then(wishes => {
      console.log(wishes);
      setWishes(wishes);

    })
  },

  async function addWish(wishList) {
    const response = await createWish(wishList);
    if (!response.ok) {
      throw new Error("WishListApp: wishes: Error");
    }
  },
  async function toggleWish(wishList) {
    const response = await updateWish(wishList);
    if (!response.ok) {
      throw new Error("WishListApp: wishes: Error");
    }
  },
  async function editWish(wishList) {
    const response = await updateWish(wishList);
    if (!response.ok) {
      throw new Error("WishListApp: wishes: Error");
    }
  },
  async function deleteWish(wishList) {
    const response = await deleteWish(wishList);
    if (!response.ok) {
      throw new Error("WishListApp: wishes: Error");
    }
  },

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
    <Grid container justifyContent="center" spacing={3} style={{ margin: "0px 0px 300px 0px"}}>
      <Grid item justifyContent="center" xs={12} sm={5}>
        <Bio />
      </Grid>
      <Grid item justifyContent="center" xs={12} sm={5}>
        <WishList />
      </Grid>
    </Grid>
  </Paper>
  );
};

export default Profile;