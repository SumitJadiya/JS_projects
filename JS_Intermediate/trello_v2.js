let myToDos = {
    day : 'Monday',
    meetings : 0,
    meetDone : 0
}

let addMeeting = function (todo, meet = 0) {
    todo.meetings = todo.meetings + meet    
}

let meetDone = function (todo, meet = 0) {
    todo.meetDone = todo.meetDone - meet
}

let resetDay = function(todo) {
    todo.meetings = 0
    todo.meetDone = 0
}

let getSummaryOfDay = function(todo) {
    let meetLeft = todo.meetings + todo.meetDone
    return `You have ${meetLeft} meetings left for today`;
}

addMeeting(myToDos , 4)
addMeeting(myToDos , 2)
meetDone(myToDos , 5)
console.log(myToDos);

console.log(getSummaryOfDay(myToDos));

