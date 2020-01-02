const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
console.log(days)

// For each loop
days.forEach(function(day, index, x){
    console.log(`${index+1}. Day is ${day} ${x}`)
})

// For loop
console.log(`\nSize of array - ${days.length}`);
for (let index=0; index<days.length; index++){
    const element = days[index]
    console.log(element);   
}

// Todo app
console.log(`\nExample for TODO app`);
const myTodos = []

myTodos.push('Buy Bread')
myTodos.push('Record videos for youtube')
myTodos.push('Go to Gym')

myTodos.forEach(function(todo, index){
    console.log(`your task number #${index+1} is ${todo}`);    
})

// assignment
console.log(`\nAssignment`);
let getMyGrade = function(currentMarks, totalMarks) {
    let myPercent = (currentMarks/totalMarks) * 100;
    let myGrade = ''

    if(myPercent >= 90){
        myGrade = 'A'
    } else if(myPercent >= 80){
        myGrade = 'B'
    } else{
        myGrade = 'C'
    }

    return `Your grade is ${myGrade} and percentage is ${myPercent}`
}

console.log(`My Grade = ${getMyGrade(456, 500)}`)