import React from "react";

export default function Best_pract_code(){
    //variable referencing
    const name = "sid"
    const age = 21
    const cmp = "ATS"
    //object referencing
    const emp_obj = {
        name,
        age,
        cmp
    }
    // destructuring 
    const {name:n,age:a, cmp:c} = emp_obj


    return( 
    <> 
        <h3>{name}</h3> <h4>{age}</h4> <h3>{cmp}</h3> 
        <h3>{name}</h3> <h4>{age}</h4> <h3>{cmp}</h3>
        {emp_obj.name} {emp_obj.age} {emp_obj.cmp}
        <h5>destructuring</h5>        
        {n} {a} {c}
     </> 
    )
}
