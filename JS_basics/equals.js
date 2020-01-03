//  --> True
console.log(2 == 2.0);
//  --> True
console.log(2 === 2.0)

//  --> True
console.log('' == '');
//  --> True
console.log('' === '');

let myVar = ''
let myVarTwo = ''
//  --> True
console.log(myVar == myVarTwo);
//   --> True
console.log(myVar === myVarTwo);

let myVar1 = {}
let myVarTwo1 = {}
// == checks only that value is equal or not  --> False
console.log(myVar1 == myVarTwo1);
// == checks for object reference  --> False
console.log(myVar1 === myVarTwo1);

let myVar2 = {}
let myVarTwo2 = myVar2
// == checks only that value is equal or not [Equality]  --> True
console.log(myVar2 == myVarTwo2);
// == checks for object reference in memory [Identity]  --> True
console.log(myVar2 === myVarTwo2);
