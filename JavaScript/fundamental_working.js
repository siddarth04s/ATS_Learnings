// order of execution
console.log("hi");

console.log(a);
var ans =callFunc();
console.log(ans);

var a = 10;
console.log("variable value is "+a);

function callFunc(){
    var b = 5;
    var c = b+a;
    console.log(c);
}
