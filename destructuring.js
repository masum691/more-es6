
const fish = { name: 'White gold', id: 12, price: 3425, phone: '0234345', address: 'Mymensingh', dress: 'white' };

// const phone = fish.phone;
// const price = fish.price;
// const id = fish.id;
// const dress = fish.dress;

// console.log(dress)
// console.log(phone)
// console.log(id)
// console.log(price)
// console.log(phone)
// console.log(id)

// const {phone, price, id, name} = fish;
// console.log(phone);
// console.log(price);
// console.log(name);


const company = {
    name: 'Robi',
    CEO: {name: 'Masum hossain', id: 01, favFood: 'biriani'},
    Web: {work: 'Web development', employee: 345, framework: 'React js',
    frontEnd: {first: 'html', second: 'css', third: 'bootstrap', 
    backEnd: {num1: 'node js', num2: 'php', num3: 'python',
    database: {one: 'MongoDB', two: 'MariaDB', three: 'MySQL'}}}}
};
// const work = company.CEO.favFood;
// console.log(work);
const {work, framework} = company.Web;
console.log(work, framework);
const {name, id} = company.CEO;
console.log(name, id);
const {first, third} = company.Web.frontEnd;
console.log(first, third);
const {num1, num2} = company.Web.frontEnd.backEnd;
console.log(num1,num2);
const {one, two, three} = company.Web.frontEnd.backEnd.database;
console.log(one, two, three)