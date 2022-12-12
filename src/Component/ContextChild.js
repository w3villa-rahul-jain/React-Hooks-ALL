import React, { useContext } from 'react'
import { Context } from './UseContextHook';

const ContextChild = () => {
   const value = useContext(Context);
  return (
    <div>
        {value}
    </div>
  )
}

export default ContextChild;