let obj={
    "a":1,
    "b":2,
    "c":3
};


let a1=obj.a;
let c1=obj.c;

console.log(a1);  //--> 1
console.log(c1);  //--> 3

let {a,c}={...obj};

console.log(a);  //--> 1
console.log(c);  //--> 3