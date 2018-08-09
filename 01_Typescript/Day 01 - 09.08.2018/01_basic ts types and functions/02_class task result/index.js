/**
 * @function sumDigits
 * @param num - 2 digits num (0-99)
 * @returns number - the sum of num's digits
 */
function sumDigits(num) {
    return Math.floor(num / 10) + (num % 10);
}
var numberArr = [
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
var currentTime = Date.now();
var twoLastDigits = currentTime % 100;
var sum = sumDigits(twoLastDigits);
sum = (sum > 9) ? sumDigits(sum) : sum;
console.log("currentTime", currentTime); //--> currentTime 1533836460274
console.log("twoLastDigits", twoLastDigits); //--> twoLastDigits 74
console.log("sum", numberArr[sum]); //--> sum two
