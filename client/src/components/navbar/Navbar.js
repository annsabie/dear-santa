import React from "react";
import { LoginContext } from "../../context/login.context";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <LoginContext.Consumer>
      {(value) => {
        console.log(`render nav bar with context ${JSON.stringify(value)}`);
        return (
          <Nav>
            <NavLink to="/">
              <h1>🎅🏻 Dear Santa</h1>
            </NavLink>
            <Bars />
            <NavMenu>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/profile">Profile</NavLink>
            </NavMenu>
            {value.loginState.email ? (
              <span>User logged in: {value.loginState.email}</span>
            ) : (
              <>
                <NavBtn>
                  <NavBtnLink to="/login">Log In</NavBtnLink>
                </NavBtn>
                <NavBtn>
                  <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                </NavBtn>
              </>
            )}
            {/* <NavBtn>
        <NavBtnLink to="/signup">🏃 Logout</NavBtnLink>
        </NavBtn> */}
          </Nav>
        );
      }}
    </LoginContext.Consumer>
  );
};

/*
 

          */

export default Navbar;
