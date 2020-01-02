// one of the ways to write function (definition)
let sayHello = function(userName){

    console.log(`Greeting Message for ${userName}`)
}

// function calling
sayHello("Sumit")

let fullNameMaker = function(firstname, lastname){
    console.log(`welcome, ${firstname} ${lastname}`);    
}

// function with multiple parameters
fullNameMaker('John', 'doe')

let myMultiplier = function(number1, number2){
    return number1*number2;
}

console.log(`Result of multiplication ${myMultiplier(2,3)}`)

let guestUser = function(name, courseCount){
    return 'Hello ' + name + ' and your course count is : ' + courseCount;
}

// if parameter is not provided, default value is undefined [default parameters]
console.log(guestUser('Sumit', null));
