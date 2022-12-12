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
    useEffect(()=>{
        console.log("Child Render");
    })

    return (
        <div>
            <h1>This is child component</h1>
        </div>
    )
}

