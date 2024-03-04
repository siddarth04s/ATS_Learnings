let tab =5; itr=1; limit =5;

do{
    var val = tab*itr;
    console.log(val);
    itr++;
}
while(itr<limit){
}

for(let i=0;i<10;i++){
    console.log(i);
}

let arr=[];
for(let k=5;k<10;k++){
    arr.push(k);
    console.log(arr);
}

// for-each loops

let var_val = ["a","b","c"]
var_val.forEach((ele,index,var_val)=>{
    var_val[index] = ele.toUpperCase()
})
console.log(var_val);


