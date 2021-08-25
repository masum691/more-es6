
// let const 
const name = 'Masum';
let myName = 'Masum Hossain';
myName = 'hossain';
console.log(name, myName);
const mobile = 'iPhone';


// default parameter
function maxNum (array = [9]){
    const max = Math.max(...array);
    return max;
}
const big = maxNum();
console.log(big);


// template string
const myNotes = `
I am masum ${myName}. I have an ${mobile}.
`
console.log(myNotes);


// spread or three dots
const arr = [23,34,45,342,64,234];
console.log(...arr);

// 4. arrow function 
// function square(x){
//     return x*x;
// }
const square = x => x * x;
console.log(square(3));


