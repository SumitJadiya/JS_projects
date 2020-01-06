let numOne = 22
let numTwo = 7

result = numOne/numTwo
let floatRes = result.toFixed(2)

// JS maths basics
console.log(Math.floor(floatRes));
console.log(Math.ceil(floatRes));
console.log(Math.ceil(Math.random() * 10));

let upper = 6
let lower = 1

let myRandom = Math.floor (Math.random() * (upper - lower + 1)) + lower
console.log("Dice - " , myRandom);
