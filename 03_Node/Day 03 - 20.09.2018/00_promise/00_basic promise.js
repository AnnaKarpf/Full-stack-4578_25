function returnProm(num1, num2) {
    return new Promise(
        (resolve, reject) => {
            (num1 == num2) ? resolve("num1 is eq to num2"): reject("num1 is not eq to num2")
        }
    );
}


returnProm(2, 2)
    .then((msg)=>{console.log(`we sent 2,2, msg is: ${msg}`)})
    .catch((err)=>{console.log(`we sent 2,2, msg is: ${err}`)});


    returnProm(2, 3)
    .then((msg)=>{console.log(`we sent 2,3, msg is: ${msg}`)})
    .catch((err)=>{console.log(`we sent 2,3, msg is: ${err}`)});


/*
OUTPUT:
______________________
we sent 2,2, msg is: num1 is eq to num2
we sent 2,3, msg is: num1 is not eq to num2
*/