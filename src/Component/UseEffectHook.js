import React, { useState, useEffect } from 'react'


const UseEffectHook = () => {
    const [comment, setComment]  = useState("hi there, how are you");
    const [comment_two, setComment_two]  = useState("hi there, how are you");

    useEffect(()=>{
        console.log("component did mount");
        // setComment("hwllo");
    },[comment_two])

    function commentHandler(){
        setComment("i am fine");
    }

    function commentHandlerTwo(){
        setComment_two("i am fine");
    }
  
  
    return (
    <div>
        <>
        <h1>{comment}</h1>
        <h1>{comment_two}</h1>
        <button onClick={commentHandler}>Reply</button>
        <button onClick={commentHandlerTwo}>Reply Two</button>
        </>
    </div>
  )
}



export default UseEffectHook