// arrays are the most basic data-structure in programming let see how it used in JS.
// arrays used to store multiple data or datatypes for example 
// in this we discuss only about important methods in array for now

const exampleArray = [1, 2, 3, 54, 65, 62, 23] // we hold this array in a variable

console.log(exampleArray[0]); // => 1, accessing the array using square brakets

// some arrays methods to interact with array
let randomArray = [1, 2, 3, 4, 5];

console.log(randomArray.length) // => 5

// removing the last element of an array
console.log(randomArray.pop()); // => 5
console.log(randomArray); // => [ 1, 2, 3, 4 ]

// joining the array
console.log(randomArray.join()); // => 1,2,3,4

// combining two arrays
let newArray = ["Sumedh", "India", "Shewale", "programmer"]
console.log(randomArray.concat(newArray)); // => [ 1, 2, 3, 4, 5, 'Sumedh', 'India', 'Shewale', 'programmer' ]
console.log([...randomArray, ...newArray]); // => <same result>, combining using spread operator ("...") 

console.log(randomArray.find); // search this

// pushing an element into the arrray 
console.log(randomArray.push(6));
console.log(randomArray); // => [ 1, 2, 3, 4, 5, 6 ]

console.log(randomArray.includes(2)); // => true

// slicing and splicing of the array
console.log(randomArray.slice(1, 4)); // => [ 2, 3, 4 ]
console.log(randomArray); // => [ 1, 2, 3, 4, 5 ], NOT  mutates the original array
console.log(randomArray.splice(1, 4)); // => [ 2, 3, 4, 5 ]
console.log(randomArray); // => [ 1 ], permanantly changes the original array

// nested arrays
let nestedArr = [1, 2, 4, [6, 76, 53, [95, 5, 23]]]
//  accessing the value 95
console.log(nestedArr[3][3][0]); // => 95

// converting nested array into the normal one
console.log(nestedArr.flat(3));// => [1,  2, 4,  6, 76, 53, 95, 5, 23]

// some more array methods
// checking the array
console.log(Array.isArray("Sumedh")); // => false
console.log(Array.isArray([1, 3, 5, 5, 5])); // => true

// converting into the array
console.log(Array.from("Sumedh")); // => [ 'S', 'u', 'm', 'e', 'd', 'h' ]
console.log(Array.from({name: "Sumedh", age: 21, colleage: "Modern"},[2])); // search

// Array.of() method to make an array from an set of elements 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // => [ 100, 200, 300 ]

// read more about Array.isArray, Array.from() and Array.of()