import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [name, setName] = useState("");
  const inputRef = useRef(0);
  const btnRef = useRef();

  useEffect(() => {
    console.log(inputRef.current);
    console.log(inputRef.current.value);
    console.log(btnRef.current);
  });

  function handle(e) {
    e.preventDefault();
    let prevName = e.target.value;
    // inputRef.current.focus();
    // console.log(`Clicked ${inputRef.current}`);
    // console.log(inputRef.current.value)
    setName(prevName);
    console.log("Click");
  }

  // console.log(inputRef.current);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <p>{name}</p>
      <button onClick={handle}>Click Me</button>
    </div>
  );
};

export default UseRefHook;
