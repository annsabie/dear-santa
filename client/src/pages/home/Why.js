import React, { Component } from "react";
import "./why.css";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Card1 from "./Card1.js";
import Card2 from "./Card2.js";
import Card3 from "./Card3.js";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: "transparent",
        color: "white",
        p: 1,
        m: 1,
        borderRadius: 1,
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])),
    PropTypes.func,
    PropTypes.object,
  ]),
};

class Why extends Component {
  render() {
    return (
      <div className="ui masthead2 segment">
        <Box justifyContent="center">
          <h2 justifyContent="center">Why choose us?</h2>
        </Box>

        <div style={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              p: 1,
              m: 1,
              bgcolor: "transparent",
              justifyContent: "space-around",
            }}
          >
            <Item>
              <Card1 />
            </Item>
            <Item>
              <Card2 />
            </Item>
            <Item>
              <Card3 />
            </Item>
          </Box>
        </div>
      </div>
    );
  }
}

export default Why;
