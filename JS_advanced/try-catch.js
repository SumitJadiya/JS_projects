// Take input in dollar and convert into rupees
const convertToRs = (dollar) => {
    if (typeof dollar === 'number')
        return dollar * 72;

    throw Error("Amount needs to be in number")
}
let myVal = convertToRs(5)
console.log(myVal); // 360

try {
    let myVal1 = convertToRs('Five')
    console.log(myVal1); // NAN
} catch (error) {
    console.log(error);
}

console.log("I'll not run if program crashes");