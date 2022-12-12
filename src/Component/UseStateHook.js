import React, { useState } from "react";

// const nameValue = "Rahul"

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState({firstName:"rahul", lastName: "jain"});
  const [properties, setProperties] = useState("");

//   console.log(name);
//   console.log({nameValue});


    function SetAllItem(){
        setName({...name,firstName: "updated"});
    }

    // console.log(name);
 


  function Increase() {  
    setCount((prev) => prev + 1);
  }
//   console.log("count is ", count);

  function Decrement() {
      if(count === 0){
          setCount(0);
      }
      else{

          setCount((prev) => prev - 1);
      }
  }

  function Reset() {
    setCount((prev) => 0);
  }

  function DisplayProperties(e){
      e.preventDefault();
    setProperties(properties);
    console.log("Prop", properties);
  }


  function handleChange(e){
    let event = e.target.value;
    setProperties(event);
  }

  



  return (
    <div>
        <input type="text" value ={properties} onChange={handleChange}/> 
        <p>{properties}</p>
        <button onClick={DisplayProperties}>SET Properties</button>

        <h1>My Name is {name.firstName}</h1>
        <button onClick={SetAllItem}>set item</button>
       
      <span>{count}</span>
      <button onClick={Increase}>Increment</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default UseStateHook;
