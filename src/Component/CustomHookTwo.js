import React, { useCallback, useState } from 'react'

const friendList = [
    {name: "rahul", age: 23 },
    {name: "rahul1", age: 22 },
    {name: "rahul2", age: 24 },
]

const CustomHookTwo = () => {
    const [friend, filterChange] = useFilter(friendList);
    console.log(friend);



  return (
    <div>
        <button onClick={()=> filterChange("rahul1")}>Toggle State</button>
    </div>
  )
}

export default CustomHookTwo


const useFilter  = (initialState = []) =>{
    const [friend, setFriend] = useState(initialState)
    const filterChange = useCallback((name)=>{
        setFriend(friendList.filter(obj => obj.name === name))
       
    },[]) 
    return [friend, filterChange]
}
