import React, { useState, useEffect, useMemo } from 'react';


const UseMemoHook = () => {
    const [counter, setCounter] = useState(0);  

    useEffect(()=>{
        console.log("parent Render");
    })

    const Memorize = useMemo(()=>{
        return <Child></Child>
    },[])

  return (
    <div>
        {Memorize}
        <h1>Counter is {counter}</h1>
        <button onClick={()=> setCounter(counter+1)}>Click me</button>
    </div>
  )
}

export default UseMemoHook;


const Child = () =>{
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("Child Render");
    })

    function ChangeText(){
            setCount(count+1);
    }

    return (
        <div>
            <h1>This is child component</h1>
            <button onClick={ChangeText}>Click me</button>
        </div>
    )
}

