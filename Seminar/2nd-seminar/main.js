const sum = require('./sum');

const calculator = require('./calculator');

console.log('add(2, 3): ', calculator[0](2,3));
console.log('subtract(2, 3): ', calculator[1](2,3));
console.log('multiply(2, 3): ', calculator[2](2,3));
console.log('divide(2, 3): ', calculator[3](2,3));


// const result = sum(1, 3);
// console.log('sum result: ', result);