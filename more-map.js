
const friends = ['smith', 'john', 'ada', 'bill gates'];
const fLengths = friends.map(friend => friend.length);
console.log(fLengths);


const products = [
    {name: 'mobile', price: 34232, color: 'goldren'},
    {name: 'laptop', price: 343232, color: 'black'},
    {name: 'bottle', price: 232, color: 'yellow'},
    {name: 'watch', price: 332, color: 'blue'},
    {name: 'sticky', price: 32, color: 'white'}  
]
const productNames = products.map(product => product.name);
// products.map(product => console.log(product));
products.forEach(product => console.log(product));
// console.log(productNames);