//parseInt()
//parseFloat()
// string to number --> object & alphabets (no conversion)

//number to string conversion
let a = 5;
b = String(a)
console.log(typeof(b));

//string to number
let c="44"
console.log(typeof(c));

//array to number
// o/p --> Nan, because array is a object so it cannot convert to number, so gives Nan
let arr = [1,2,3,4]
narr = Number(arr)
console.log(narr);