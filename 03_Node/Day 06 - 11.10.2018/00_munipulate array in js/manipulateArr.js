let arr = [{
        id: 3,
        age: 5
    },
    {
        id: 6,
        age: 2
    },
    {
        id: 9,
        age: 1
    }
];


console.log(arr); //--> [ { id: 3, age: 5 }, { id: 6, age: 2 }, { id: 9, age: 1 } ]



//---------------update the element that has id==6 to age=7-------------

let pointerToObj = arr.find(el => el.id == 6);

//noe `pointerToObj` points to the same object that arr[1] points
pointerToObj.age = 7;

console.log(arr); //--> [ { id: 3, age: 5 }, { id: 6, age: 7 }, { id: 9, age: 1 } ]


//---------------remove the element that has id==9-------------
let indexOfElement;

for (let i in arr) {
    if (arr[i].id == 9)
        indexOfElement = i;
}

arr.splice(indexOfElement, 1);

console.log(arr); //--> [ { id: 3, age: 5 }, { id: 6, age: 7 } ]



//---------------remove the element that has id==6-------------
arr=arr.filter(el => el.id != 6);

console.log(arr); //--> [ { id: 3, age: 5 } ] 