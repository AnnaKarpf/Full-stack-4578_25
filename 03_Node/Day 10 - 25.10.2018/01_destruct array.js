let arr=["a","b","c"];


let a1=arr[0];
let b1=arr[1];
let c1=arr[2];

console.log(a1);  //--> a
console.log(b1);  //--> b
console.log(c1);  //--> c


let [a2,b2,c2]=[...arr];
console.log(a2);  //--> a
console.log(b2);  //--> b
console.log(c2);  //--> c