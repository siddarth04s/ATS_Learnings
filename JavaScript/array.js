let arr = [
    [1,2,3],[4,5,6]
]

console.log(typeof(arr[0].toString()))

let ar = [5,6,7,8,16]
ar.push(9);
ar.push(10);
console.log(ar)
ar.pop();
console.log(ar);
ar.splice(0,2)
console.log(ar)
ar.concat([9, 10], 13, 14)
console.log(ar) 
console.log(ar.indexOf(0))
console.log(arr.includes(1))
console.log(ar.indexOf(5))
console.log(ar.lastIndexOf(5))

// find in array

let are = [
    {id:1,name:"q"},
    {id:2,name:"w"},
    {id:3,name:"e"}
]
are.find(each =>each.id==3?console.log("hii"):console.log("sorry"))
console.log(are)

// filter 

are.filter(element => element.id <3 ? console.log(element):"")

// map 

are.map(itr => itr.id == 1 ? itr.id = 100:"")
console.log(are)

// sort
console.log("before sort  "+ar)
ar.sort()
console.log("after "+ ar);

// split 

let names = "a , b,cd";
let each_name = names.split(',')
for(i in each_name){
    console.log(each_name[i])
}

let str_name = "qwerty"
str_name.split('')
console.log(str_name[0])

//reduce/reduceRight method

let res = ar.reduce((sum,itr)=>itr+sum)
console.log(res);

// for-each
let nar = [1,5,3,4]

nar.forEach(ele => console.log(ele))