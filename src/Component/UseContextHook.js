import React from "react";
import ContextChild from "./ContextChild";

import { createContext } from "react";

export const Context = createContext("My Context Value");

const UseContextHook = () => {
  const val = "Initial Value";
  return (
    <div>
      <Context.Provider value={val}>
        <ContextChild />
      </Context.Provider>
    </div>
  );
};

export default UseContextHook;
