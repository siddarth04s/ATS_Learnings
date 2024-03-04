function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }
checkAge(20);


// default parameter
function def(val='this is default'){
  console.log(val)
}
def();
def('hii')

// arrow function for sum

let sum=0;
let sumfun = (arr) =>{ for(ele in arr){sum+=arr[ele]}  
}
sumfun([1,2,3])
console.log(sum)

// rest parameters

let tot = 0;
let restfun = function(...args){
  args.forEach(element => {
        tot+=element
  });
}
restfun(2,2,2,2,2)
console.log(tot);





