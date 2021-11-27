import React, { createContext, useState } from "react";

export const LoginContext = createContext();
// provider calls our custom hook to set up the initial wishes object
export function LoginProvider(props) {
  const [loginState, setLoginState] = useState({});

  const context = {
    loginState,
    login: (user) => {
      console.log(`set loginState: ${JSON.stringify(user)}`);
      setLoginState(user);
    },
    logout: () => {
      setLoginState({});
    },
  };
  return (
    //   return a provider wrapper
    <LoginContext.Provider
      // pass the wishes object as a value so any children can consume it
      value={context}
    >
      {props.children}
    </LoginContext.Provider>
  );
}
