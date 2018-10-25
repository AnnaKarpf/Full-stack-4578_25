let obj={
    "a":1,
    "b":2,
    "c":3
};

let obj1={...obj, "d":4};
let obj2={obj, "d":4};

console.log(obj);    //--> { a: 1, b: 2, c: 3 }
console.log(obj1);   //--> { a: 1, b: 2, c: 3, d: 4 }
console.log(obj2);   //--> { obj: { a: 1, b: 2, c: 3 }, d: 4 }