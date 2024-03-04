import React from "react";

export function Map(){
    const arr = ["1","2","3","4","5"]
    return(
            arr.map((ele,key)=>{return <h5>{ele} "key" {key}</h5> })
    )
}