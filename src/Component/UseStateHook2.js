import React, { useState } from 'react'

const UseStateHook2 = () => {
    const [name, setName] = useState({firstName: '', lastName: ''});


    

  return (
    <div>
        <form>
            <input type="text"  value={name.firstName}  />
            <input type="text"  value={name.lastName}  />
            <input type="text" />
        </form>

    </div>
  )
}

export default UseStateHook2