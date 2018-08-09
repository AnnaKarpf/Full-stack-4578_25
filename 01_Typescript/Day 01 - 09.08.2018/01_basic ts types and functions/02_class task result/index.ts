/**
 * @function sumDigits 
 * @param num - 2 digits num (0-99)
 * @returns number - the sum of num's digits 
 */
function sumDigits(num:number):number{
    return Math.floor(num / 10) + (num % 10)
}

let numberArr: string[] = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];

let currentTime: number = Date.now();
let twoLastDigits: number = currentTime % 100;
let sum: number =sumDigits(twoLastDigits);
sum=(sum>9)?sumDigits(sum):sum;


console.log("currentTime", currentTime);        //--> currentTime 1533836460274
console.log("twoLastDigits", twoLastDigits);    //--> twoLastDigits 74
console.log("sum", numberArr[sum]);             //--> sum two

