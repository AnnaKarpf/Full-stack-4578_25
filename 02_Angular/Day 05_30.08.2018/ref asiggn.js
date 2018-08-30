let obj1 = {
    name: "Binjamin"
};
obj2 = obj1;

console.log(obj1);  //--> { name: 'Binjamin' }
console.log(obj2);  //--> { name: 'Binjamin' }

obj1.name = "Reuven";

console.log(obj1);  //--> { name: 'Reuven' }
console.log(obj2);  //--> { name: 'Reuven' }

obj1 = {
    name: "Mayaan"
};

console.log(obj1);  //--> { name: 'Mayaan' }
console.log(obj2);  //--> { name: 'Reuven' }