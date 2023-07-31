// There are 2 datatypes in JS
// 1-Primitive datatypes
// 2-Reference(Non-primitive) datatypes

// There are 7 types in Primitive datatypes:

// 1-String
let myName = "Sumedh"; // defined in double quotes.                     
const myLastName = 'Shewale'; // also can define in single quotes.
let myCity = new String("Pune"); // also define like this

// 2-Number
let myAge = 21;
const phoneNumber = new Number(9129941706);

// 3-Boolean
const isProgrammer = true;
const playBasketball = new Boolean(false);

// 4-Null 
const myBrother = null; // NOT EXIST

// 5-Undefined
const myWife = undefined;
let myWifeName; // output is undefined

// 6-BigInt
let bigNumber = 45090952045034341n
console.log(typeof bigNumber); // output bigint

// 7-Symbol 
const id = Symbol('123');
const anotherId = Symbol('123'); 
// this two are different symbols
console.log(typeof id); // => symbol
console.log(anotherId); // => Symbol(123);
console.log(id === anotherId); // => false
console.log(id + anotherId); // => TypeError


// SUMMAURY
// 1 - string => charaters that are strung together in single thread eg, "Sumedh", "loves", "cars" etc.
// 2 - number => any type of numerical value eg, 4, 54, 145, 244524 etc.
// 3 - boolean => only shows two values true or false.
// 4 - null => special keyword that represent non-existent value not 0.
// 5 - undefined => a value that is not defined yet.
// 6 - bigInt => used to store big integers like- 14541451524515452145, 94354544623656640.
// 7 - symbol => we used symbols to store unique values mostly used to identify components.

// Reference Datatypes

// 1-Arrays
const myInfo = ['Sumedh', '20', false, null, 'Shewale']; // collection of data