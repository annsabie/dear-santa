import React from "react";
import { LoginContext } from "../../context/login.context";
import { useNavigate } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

import "./navbar.css"
import * as API from "../../utils/api"

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <LoginContext.Consumer>
      {(value) => {
        function logoutRedirect() {
          value.logout();
          API.logout();
          navigate("/");
        }
        console.log(`render nav bar with context ${JSON.stringify(value)}`);
        return (
          <Nav>
            <NavLink to="/">
              <h1>🎅🏻 Dear Santa</h1>
            </NavLink>
            <Bars />
            <NavMenu>
              <NavLink to="/about">About</NavLink>
            </NavMenu>
            {value.loginState.email ? (
              <>
                <NavLink to="/profile">Profile</NavLink>
                <NavBtn>
                  <a class="logout" onClick={logoutRedirect}>🏃 Logout</a>
                </NavBtn>
                <span>User logged in: {value.loginState.email}</span>
              </>
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
          </Nav>
        );
      }}
    </LoginContext.Consumer>
  );
};

/*
 

          */

export default Navbar;
