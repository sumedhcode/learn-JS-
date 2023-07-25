// datatype conversion

// Number to String conversion
let anyNumber = 3595;
let numberInString = String(anyNumber);
// console.log(typeof numberInString); // => string

// Number to Boolean conversion
let number2 = 393;
let numberInBoolean = Boolean(number2);
// console.log(numberInBoolean); // => true
// console.log(typeof numberInBoolean); // => boolean

number2 = 0; // reassigning the value
numberInBoolean = Boolean(number2);
// console.log(numberInBoolean); // => false

// Boolean to Number conversion
let bool1 = true;
let bool2 = false;
let boolToNum = Number(bool1);
let boolToNum2 = Number(bool2);
// console.log(boolToNum); // => 1
// console.log(boolToNum2); // => 0

// Boolean to String conversion
let boolToString = String(bool1);
// console.log(boolToString); // => true
// console.log(typeof boolToString); // => string

// String to Number conversion
let string = "Sumedh";
let string2 = "";
let string3 = "223"
let randomString = null;

let toNum = Number(string);
let toNum2 = Number(string2);
let toNum3 = Number(string3);
let toNum4 = Number(randomString);
// console.log(toNum); // => NaN
// console.log(typeof toNum); // => number
// console.log(toNum2); // => 0 
// console.log(typeof toNum2); // => number 
// console.log(toNum3); // => 223 convert in number
// console.log(typeof toNum3); // => number 
// console.log(toNum4); // => 0

// String to Boolean conversion 
let toBool = Boolean(string);
let toBool2 = Boolean(string2);
let toBool3 = Boolean(string3);
let toBool4 = Boolean(randomString);
// console.table([toBool, toBool2, toBool3, typeof toBool, typeof toBool2, typeof toBool3]);
// console.log(toBool4); // => False and Boolean