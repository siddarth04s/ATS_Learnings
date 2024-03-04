import React from "react";

export const Rendering = ()=>{
    const age = 10
    // const msg =  age>=18?"Vote":"dont vote"
    // return(msg)
    // or 
    return (
        <>
        {age>=18?<h4>vote</h4>:<h4>try next time</h4>}
        </>
    )
}