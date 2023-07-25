// numbers and math in javascript

let num1 = 239;
const score = new Number(200);
// console.log(score);
// console.log(num1);

// methods for number datatype
// console.log(score.toString());
// console.log(score.toFixed(2));

const otherNum = 123.5657;
// console.log(otherNum.toPrecision(3));

const hundreds = 10000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-6));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.4));
// console.log(Math.floor(4.9));
// console.log(Math.min(23, 35, 5, 6))

// Math.random
// console.log(Math.random());
// console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)