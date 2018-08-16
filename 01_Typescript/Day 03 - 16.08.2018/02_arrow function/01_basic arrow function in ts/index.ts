/*
The way to declare a function type in ts:
_________________________________________

(paramerts with type) => return type
*/


// f1 gets no parameters and returns void
let func1:() => void =()=>{console.log("f1")};


// f2 gets one parameter and returns void
let func2:(x: number) => void=(num)=>{console.log(num)};


// f5 gets one parameter and returns a number
let func3:(x: number) => number=num=>num*2;
