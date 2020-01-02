// datatypes -- Arrays

const superHeros = ['IronMan', 'SpiderMan', 1, true, 'Capt. America', 'Thor']

console.log(`we have ${superHeros.length} superHeros`);

const numbers = ['one', 'two', 'three', 'four', 'five', 'six']
numbers[1] = 'Something'
console.log(numbers);

// start
console.log(numbers.shift())
console.log(numbers);

numbers.unshift("S")
console.log(numbers);

// end
console.log(numbers.pop())
console.log(numbers);

numbers.push('Seven')
console.log(numbers);

// middle
console.log(numbers.splice(2,1,'XYZ')); // start from 2 delete 1 element and place XYZ.
console.log(numbers);