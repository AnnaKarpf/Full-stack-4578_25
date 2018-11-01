
let p1= new Promise((resolve,reject)=>{
    setTimeout(resolve("I am p1"),3000)
});


let p2= new Promise((resolve,reject)=>{
    setTimeout(resolve("I am p2"),1000)
});


Promise.all([p1,p2])
.then(res=>console.log(res));  //--> [ 'I am p1', 'I am p2' ]

