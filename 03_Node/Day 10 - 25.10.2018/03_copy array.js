let arr=["a","b","c"];

let arr1=arr;
let arr2=[...arr];


console.log(arr);    //--> [ 'a', 'b', 'c' ]
console.log(arr1);   //--> [ 'a', 'b', 'c' ]
console.log(arr2);   //--> [ 'a', 'b', 'c' ]

arr2[0]="z";
console.log(arr);   //--> [ 'a', 'b', 'c' ]
console.log(arr1);  //--> [ 'a', 'b', 'c' ]
console.log(arr2);  //--> [ 'z', 'b', 'c' ]


arr1[0]="t";
console.log(arr);     //--> [ 't', 'b', 'c' ]
console.log(arr1);    //--> [ 't', 'b', 'c' ]
console.log(arr2);    //--> [ 'z', 'b', 'c' ]