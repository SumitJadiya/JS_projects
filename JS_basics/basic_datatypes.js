/*
Variables
*/
console.log("\nVariable - ");
let name = "John" // This is String
let score = '100' // This is String
let bonus = '20'
let totalScore = score + bonus
console.log("Hello " + name + " Total Score = "+ totalScore);

let firstName = 'John'
let lastName = 'Doe'
console.log("FirstName = "+firstName + " LastName = "+lastName);

console.log("\nConstant Variable - ");
const constName = 'John' 
console.log("This name can not be changed - " + constName);

console.log("--------------------------------------------");
console.log("\nNumbers - ");

var complex = 4 + 4 * 5;
console.log(complex);

let tempInFahrenheit = 50
// do calculations
let celcius = (tempInFahrenheit-32) * (5/9)
console.log(celcius)

console.log("--------------------------------------------");
console.log("\nUndefined and Boolean Values - ");
let temp 
console.log("Temp = " + temp)

let actualScore = 7
let myGrade = (actualScore < 10)
console.log(myGrade)

console.log("--------------------------------------------");
console.log("\nDifference between let and var - ");
let iAmGlobal = 'someValue'
if(true){
    // let will have scope only till this method exists. var will have scope throughout the code
    // let iAmLocal = 'someMoreValue' 
    var iAmLocal = 'someMoreValue' 
    iAmGlobal = 'superman' // change in value will be reflected in throughout the code

    console.log("Inside block of code - " , iAmGlobal);
    console.log("Inside block of code - " , iAmLocal);
}
console.log("Outside block of code - " , iAmGlobal);
console.log("Outside block of code - " , iAmLocal); 