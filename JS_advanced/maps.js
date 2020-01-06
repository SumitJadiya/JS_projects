var john = {
    name : 'I am John',
    age : 25,
    isActive : true
}

var marry = {
    name : 'I am marry',
    age : 22,
    isActive : true    
}

var sam = {
    name : 'I am sam',
    age : 29,
    isActive : false    
}

let users = new Map()
console.log(typeof users + " \n ");

users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)
// console.log("Keys = " + users.keys() + " \n ") ;
// console.log("Values = " + users.values() + " \n ") ;

for (const key of users.keys())
    console.log(`Key - ${key}`)

for (const value of users.values())
    console.log(`Values - ${value.name}`)    

console.log("\n")

for (const [key,value] of users.entries())
    console.log(`Key is - ${key} and name is - ${value.name}`)

console.log("\n")

users.forEach((value,key) => {
    console.log(`Key is - ${key} and name is - ${value.name}`)    
});

var arrOfArr = [['one','1'],['two','2'],['three','3']]
var newMap = new Map(arrOfArr)

console.log("\n")

console.log(newMap);