import React, { useCallback, useState } from "react";

const functionAdd = new Set();

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);
  const [Ocount, setOCount] = useState(0);

  const IncrementFun = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const DecrementFun = useCallback(() => {
    setCount(count - 1);
  },[count]);


  const OincrementFun = useCallback(() => {
    setOCount(Ocount + 1);
  }, [Ocount]);

  const OdecrementFun = useCallback(() => {
    setOCount(Ocount - 1);
  }, [Ocount]);
 
  

  functionAdd.add(IncrementFun);
  functionAdd.add(DecrementFun);
  functionAdd.add(OincrementFun);
  functionAdd.add(OdecrementFun);

  console.log(functionAdd);

  return (
    <div>
      <h1>Count is {count}</h1>
      <h1>Count is {Ocount}</h1>
      <button onClick={IncrementFun}>+ Increment</button>
      <button onClick={DecrementFun}>- Decrement</button>
      <button onClick={OincrementFun}>+ o Increment</button>
      <button onClick={OdecrementFun}>- o Decrement</button>
    </div>
  );
};

export default UseCallbackHook;
