
const numbers = [34,23,5,53,67,212,45,342];
const output = [];

// function doubleOld(n){
//     return n * 2;
// }

const doubleIt = number => number * 2;

// for(const number of numbers){
//     const result = doubleIt(number);
//     output.push(result);
// }
// console.log(output);

// const outputTwo = numbers.map(doubleIt);
// console.log(outputTwo);
// console.log(numbers.map(number => number * 2));
console.log(numbers.map(x => x * 4));
// console.log(outputTwo);


const squares = numbers.map(x => x * x);
console.log(squares);