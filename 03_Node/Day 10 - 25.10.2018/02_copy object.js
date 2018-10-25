let obj={
    "a":1,
    "b":2,
    "c":3
};


let obj1=obj;
let obj2={...obj};


console.log(obj);   //--> { a: 1, b: 2, c: 3 }
console.log(obj1);  //--> { a: 1, b: 2, c: 3 }
console.log(obj2);  //--> { a: 1, b: 2, c: 3 }

obj2.a=8;
console.log(obj);     //--> { a: 1, b: 2, c: 3 }
console.log(obj1);    //--> { a: 1, b: 2, c: 3 }
console.log(obj2);    //--> { a: 8, b: 2, c: 3 }

obj1.a=9;
console.log(obj);    //--> { a: 9, b: 2, c: 3 }
console.log(obj1);   //--> { a: 9, b: 2, c: 3 }
console.log(obj2);   //--> { a: 8, b: 2, c: 3 }