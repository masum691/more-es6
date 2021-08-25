
// // declare variable based on the name of an object property
// const myObject = { x: 34, y: 56, z: 234, a: 56, b: 74 };
// const { x, z } = myObject;
// console.log(z, x);


// // destructuring array
// const [p, q] = [223, 23, 34, 342];
// const sum = p + q;
// console.log(sum);



// const [best, foe] = [45, 332];
// console.log(best, foe);
// const { sky, color } = { sky: 'blue', color: 'white', money: 342 };
// console.log(sky, color);


// chaining
const company = {
    name: 'Xmazon',
    CEO: { name: 'Masum hossain', id: 01, favFood: 'burger' },
    Web: {
        work: 'Web development', employee: 345, framework: 'React js',
        frontEnd: {
            first: 'html', second: 'css', third: 'bootstrap',
            backEnd: {
                num1: 'node js', num2: 'php', num3: 'python',
                database: { one: 'MongoDB', two: 'MariaDB', three: 'MySQL' }
            }
        }
    }
};
// console.log(company.Web.frontEnd.first);
// console.log(company.Web.frontEnd.backEnd.database.two);
console.log(company?.WebDevelopment?.frontEnd.backEnd.database.two);