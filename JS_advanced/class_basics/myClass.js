class User {

    constructor(firstname, lastname, credit) {
        this.firstname = firstname
        this.lastname = lastname
        this.credit = credit
    }

    getFullName() {
        return this.firstname + ' ' + this.lastname
    }

    editName(newName) {
        const myName = newName.split(' ')
        this.firstname = myName[0]
        this.lastname = myName[1]
    }
}

// when object is created using new, constructor is always called
const john = new User('Rohit', 'Sharma', 34)
// This will not throw error but return undefined
const sammy = new User()

console.log(john.getFullName());
// console.log(sammy);

// edit Name
john.editName('Virat Kohli')

console.log(john.getFullName());