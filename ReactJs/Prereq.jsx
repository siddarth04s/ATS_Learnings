import React from 'react'
export default function prereq(){
  const obj = {
      name1:"ats",
      age1:20,
      objdef: function() {
        return "carrrr";
      }
  }
  const dummy = Object.create(obj)   // creates a copy  //inheritance
  const {age1:newage} = obj;

  const obj2 = {
    car:"suv",
    car2:"mpv",
    price:function(){
      return "on road"
    }
  }
  function dispcar({car}){return car}

  
  return (
    <>
     {dummy.name1=="ats"?<div>welcome</div>:<div>bye bye{dummy.objdef()}</div>}
     {newage}
      {dispcar(obj2)}
    </>
  )
}
