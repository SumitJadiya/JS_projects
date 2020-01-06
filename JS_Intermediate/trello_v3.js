let myToDos = {
    day : 'Monday',
    meetings : 0,
    meetDone : 0,

    addMeeting : function (meet) {
        this.meetings = this.meetings + meet
    },

    addCompletedMeeting : function (meet) {
        this.meetDone = this.meetDone - meet
    },

    summary : function(){
        return `You have ${this.meetings + this.meetDone} meetings left today`
    }
}

myToDos.addMeeting(4)
myToDos.addCompletedMeeting(1)
console.log(myToDos.summary());

/* Search from array of objects in JS */
console.log("\n\n-------------- Search from array of objects in JS ---------------\n")

const myToDo = ['Buy Bread', 'Go to Gym', 'Record Youtube Videos']
console.log(myToDo.indexOf('Buy bread'));

const newTodos = [{
    title : 'Buy Bread',
    isDone : false
}, {
    title : 'Go to Gym',
    isDone : false
}, {
    title : 'Record Youtube Videos',
    isDone : true
}]

/*
const index = newTodos.findIndex(function (todo, index) {
    console.log(todo);
    
    return todo.title === 'Go to Gym'    
})

console.log("Index = " + index);
*/

// Method 1 
/*
const findToDo = function (myTodos, title) {
    const index = myTodos.findIndex(function (todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })

    return myTodos[index]
}

let printMe = findToDo(newTodos, 'Go To Gym')
console.log(printMe);
*/

// Method 2
const findTodo = function (myToDos, title){
    const titleReturned = myToDos.find(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}

let printMe = findTodo(newTodos, 'Go To Gym')
console.log(printMe);