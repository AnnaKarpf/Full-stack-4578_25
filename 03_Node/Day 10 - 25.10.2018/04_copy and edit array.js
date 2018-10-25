let arr=["a","b","c"];

let arr1=[...arr , "s"];
let arr2=[arr , "s"];

console.log(arr);    //--> [ 'a', 'b', 'c' ]
console.log(arr1);   //--> [ 'a', 'b', 'c', 's' ]
console.log(arr2);   //--> [ [ 'a', 'b', 'c' ], 's' ]