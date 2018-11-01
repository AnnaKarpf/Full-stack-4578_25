let obj={
    hobbies:["Sport", "Math" , "Music"],
    age:13
}


let obj1={...obj};

let obj2=JSON.parse(JSON.stringify(obj));


console.log(obj);    //--> { hobbies: [ 'Sport', 'Math', 'Music' ], age: 13 }
console.log(obj1);   //--> { hobbies: [ 'Sport', 'Math', 'Music' ], age: 13 }
console.log(obj2);   //--> { hobbies: [ 'Sport', 'Math', 'Music' ], age: 13 }


obj1.age=16;
console.log(obj);    //--> { hobbies: [ 'Sport', 'Math', 'Music' ], age: 13 }
console.log(obj1);   //--> { hobbies: [ 'Sport', 'Math', 'Music' ], age: 16 }
console.log(obj2);   //--> { hobbies: [ 'Sport', 'Math', 'Music' ], age: 13 }


obj2.age=19;
console.log(obj);    //--> { hobbies: [ 'Sport', 'Math', 'Music' ], age: 13 }
console.log(obj1);   //--> { hobbies: [ 'Sport', 'Math', 'Music' ], age: 16 }
console.log(obj2);   //--> { hobbies: [ 'Sport', 'Math', 'Music' ], age: 19 }

obj1.hobbies[0]="Sleep";
console.log(obj);    //--> { hobbies: [ 'Sleep', 'Math', 'Music' ], age: 13 }
console.log(obj1);   //--> { hobbies: [ 'Sleep', 'Math', 'Music' ], age: 16 }
console.log(obj2);   //--> { hobbies: [ 'Sport', 'Math', 'Music' ], age: 19 }


obj2.hobbies[0]="Eat";
console.log(obj);    //--> { hobbies: [ 'Sleep', 'Math', 'Music' ], age: 13 }
console.log(obj1);   //--> { hobbies: [ 'Sleep', 'Math', 'Music' ], age: 16 }
console.log(obj2);   //--> { hobbies: [ 'Eat', 'Math', 'Music' ], age: 19 }