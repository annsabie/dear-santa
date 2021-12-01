import React, { Component } from "react";
import "./wish.css";
import Wish from "../../images/wishList.jpg";
import Box from "@material-ui/core/Box";

class WishSection extends Component {
  render() {
    return (
      <div className="ui masthead3 segment">
        <Box justifyContent="center">
          <h2 justifyContent="center">Example Wishlist</h2>
        </Box>
        <img
          src={Wish}
          style={{
            width: "50%",
          }}
        ></img>
      </div>
    );
  }
}

export default WishSection;
