import React, { useRef, useState } from "react";

const UseRefHookTwo = () => {
  const [num, setNum] = useState(0);
  const InputOne = useRef();
  const InputTwo = useRef();

  function getNumber() {
    console.log(InputOne.current);
    InputOne.current.style.width = "400px";
  }

  function getText() {
    console.log(InputTwo.current);
  }

  return (
    <div>
      <input
        type="number"
        ref={InputOne}
        value={num}
        style={{width:"200px"}}
        onChange={(e) => setNum(e.target.value)}
      />
      <input
        type="text"
        ref={InputTwo}
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <h3>value is : {num}</h3>
      <button onClick={() => getNumber()}>Rupees</button>
      <button onClick={() => getText()}>Doller</button>
    </div>
  );
};

export default UseRefHookTwo;
