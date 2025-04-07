

//Numbers
const number = 100;
const newNumber = new Number(100000000000);
console.log(number)
console.log(newNumber)
console.log(newNumber.toFixed(2));
console.log(newNumber.toLocaleString('en-IN'));


// Maths

console.log(Math.ceil(1.3));
console.log(Math.floor(1.3));
console.log(Math.round(1.3));
console.log(Math.random());
const max = 20;
const min = 10;
console.log(Math.floor(Math.random()*(max-min+1))+min)