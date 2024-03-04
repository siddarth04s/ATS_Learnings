let a = 15;
let cond = a>=18?"true":"false";
console.log(cond);

//Null Handling

function login(name){
    let cond = name?name:"enter your name";
    console.log("hii "+cond);
}
login();

// array
const arr = {name:"sid",age:20};
console.log(arr.name);

// arrow , anonymous function

const greeting=()=>{
    return "hii all";
}
console.log(greeting());

//sample

const mark = 90;
const grade = mark>=90?"A":mark>=80?"B":mark>=50?"C":"Sorry";
console.log(grade);

//  ?? nullish coleasing operator

const value=null??"assign this"
console.log(value)

// ??= (useful for object handling)

const obj = {name:"sid",age:21}
obj.city??="cbe"
console.log(obj.city);

