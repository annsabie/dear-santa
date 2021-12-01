import React, { createContext, useState } from "react";
import { getMe } from "../utils/api";

export const LoginContext = createContext();
// provider calls our custom hook to set up the initial wishes object
export function LoginProvider(props) {
  const [loginState, setLoginState] = useState({});

  const context = {
    loginState,
    login: (user) => {
      setLoginState(user);
    },
    logout: () => {
      setLoginState({});
    },
  };

  if (!loginState.key) {

    getMe().then(async res => {
      if (res.ok) {
        // The user is already logged in
        let user = await res.json();
        context.login(user);
      }
    });
  }

  return (

    <LoginContext.Provider
      value={context}
    >
      {props.children}
    </LoginContext.Provider>
  );
}
