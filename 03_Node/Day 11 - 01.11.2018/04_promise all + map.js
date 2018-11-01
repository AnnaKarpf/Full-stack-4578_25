let arr=[1000,3000,1500];

console.log(arr);  //--> [ 1000, 3000, 1500 ]


let mapArr=arr.map(el=> new Promise((resolve,reject)=>{setTimeout(resolve(`I am ${el}`),el)}));


console.log(mapArr);  //--> [ Promise { 'I am 1000' },Promise { 'I am 3000' },Promise { 'I am 1500' } ]




Promise.all(mapArr)
.then(res=>console.log(res));  //--> [ 'I am 1000', 'I am 3000', 'I am 1500' ]