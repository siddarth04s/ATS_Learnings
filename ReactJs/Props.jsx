import React from "react";

// const name = "eee"
// const age = 28
// const cmp = "ddd"

// const obj = {
//     name,
//     age,
//     cmp
// };

// const {name:n,age:a,cmp:c} = obj;

export default (props)=>{
        return (
            <>
            {props.name}
            {props.age}
            {props.cmp}
            </>
        )
}