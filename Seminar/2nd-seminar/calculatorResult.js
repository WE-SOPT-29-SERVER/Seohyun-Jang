// const calculator = require('./calculator');
const { add, subtract, multiply, divide } = require("./calculator")

// console.log('add(2, 3): ', calculator[0](2,3));
// console.log('subtract(2, 3): ', calculator[1](2,3));
// console.log('multiply(2, 3): ', calculator[2](2,3));
// console.log('divide(2, 3): ', calculator[3](2,3));

console.log('2 + 3 = ', add(2,3));
console.log('2 - 3 = ', subtract(2,3));
console.log('2 * 3 = ', multiply(2,3));
console.log('2 / 3 = ', divide(2,3));

