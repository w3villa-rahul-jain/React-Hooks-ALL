import React, { useId } from 'react'

const UseIdHook = () => {
    return (
    <div>
        <IdCheck></IdCheck>
        <IdCheck></IdCheck>
        <IdCheck></IdCheck>
      
    </div>
  )
}

export default UseIdHook


function IdCheck(){
    const myId = useId();
    return(
        <>
        <label htmlFor={myId}>Do You Like it </label>
        <input id={myId} type="checkbox" />
        <br></br>
        </>
    )
}