import React, { useState, createContext } from "react";

export const initialState = {
  session: {
    token: "Secret",
    username: "Rahul Jain",
  },
  getToken: () => initialState.session.token,
};

const ThemeContext = createContext(initialState);

export const ThemeProvider = ({ children }) => {
  const [session, setSession] = useState(initialState.session);
  return (
    <ThemeContext.Provider value={{ session, setSession }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
