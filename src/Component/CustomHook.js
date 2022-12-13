import React, { useCallback, useState } from 'react'

const CustomHook = () => {
    const [toggle, toggleChange] = useToggle(false);
  return (
    <div>
        <h1>Toggle {`${toggle}`}</h1>
        <button onClick={toggleChange}>Toggle State</button>
    </div>
  )
}

export default CustomHook


const useToggle  = (initialState = false) =>{
    const [toggle, setToggle] = useState(initialState)
    const toggleChange = useCallback(()=>setToggle(toggle => !toggle)) 
    return [toggle, toggleChange]
}
