const student = {
    name: 'john',
    age: 23,
    isActive: true
}

/*  Convert this object to string to be stored in local storage */
const studentObjToString = JSON.stringify(student)
console.log(typeof studentObjToString)
//localStorage.setItem('stringObj', studentObjToString)

/* Convert String to JSON */
const toJSONStudent = JSON.parse(studentObjToString)
console.log(typeof toJSONStudent);
