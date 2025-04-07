const myArr = [1,2,3,4,5];
const newArr = new Array(1,2,3,4,5);
const newData = newArr.join();
console.log(typeof newData);
myArr.shift();
myArr.unshift(55);
console.log(myArr)

// Difference between slice and splice

const myN1 = myArr.slice(1,3);
console.log(myN1);
console.log(myArr);


const myN2 = myArr.splice(1,3);
console.log(myN2);
console.log(myArr);
