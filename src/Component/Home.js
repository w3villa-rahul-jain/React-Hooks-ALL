import React, { useContext } from "react";
import ThemeContext from "./Store";

export default function Home() {
  const { session, setSession } = useContext(ThemeContext);

  function clickHandler() {
    console.log("click me");
    setSession({ ...session, token: "new-value" });
    console.log(session);
  }

  return (
    <div>
      <p>{session.token}</p>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}
