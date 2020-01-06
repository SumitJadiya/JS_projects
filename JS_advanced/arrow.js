/* Basic Function Syntax */
/*
    const sayHello = function (name) {
        return `Hey there! ${name}!`
    }

    console.log(sayHello('Sumit'))
*/

/* Arrow Function Syntax */
/*  Steps to convert -
    1. Replace keyword 'function' with '=>' 
    2. Remove 'curly braces' and 'return' keyword
*/
const sayHello = (name) => `Hey there! ${name}!`

console.log(sayHello('Sumit'))

const todos = [{
    title : 'Buy Bread',
    isDone : true
}, {
    title : 'Go to Gym',
    isDone : true
}, {
    title : 'Record Youtube Videos',
    isDone : false
}]

// Pick only todos which are done
const thingsDone = todos.filter((todo, index) => todo.isDone === true )
console.log("Todos that are done - " , thingsDone);

// print title of not done todos
const mytodo = [{
    title : 'Practice Car',
    isDone : true
}, {
    title : 'Go To Gym',
    isDone : false
}, {
    title : 'Go for Swim',
    isDone : false
}, {
    title : 'Cook Food',
    isDone : true
}, {
    title : 'Practice Code',
    isDone : true
}, {
    title : 'Buy Milk',
    isDone : false
}]

const returnPendingTodos = mytodo.filter( (todo, index) => todo.isDone === false )
console.log("\nPending items are - ")
for ( let pending in returnPendingTodos){
    console.log(returnPendingTodos[pending].title)
}

// More Example
const camera = {
    price : 600,
    weight : 2000,
    // never use arrow fn in method/constructors
    myDescription : () => `\nThis Canon Camera is of Rs.${this.price} `,
    myDes : function (){
        return `\nThis Canon Camera is of Rs.${this.price} `
    } 
}

// Where we should avoid arrow functions
console.log(camera.myDescription()); // price is undefined
console.log(camera.myDes());
