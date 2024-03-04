let obj ={
    name:"sid",
    roll: 198,
    name:"qqq",
    roll:897
}

for(key in obj){
    console.log(obj[key])
}

// sum for numbers

let sumobj ={}
sumobj.name="sid"
sumobj.num1=100
sumobj.num2=200

let sum=0;
for(key in sumobj){
    if(typeof(sumobj[key])=='number'){
         sum += sumobj[key]
    }
}
console.log(sum)

//methods inside a object:

let obj_method = {
    name:"hgf",
    method_greet(){
        console.log("say hii")
    }
}
for(key in obj_method){
    console.log(key);
    console.log(obj_method[key]);
    if(typeof(obj_method[key]) == 'function' ){
        obj_method[key]();
    }
}