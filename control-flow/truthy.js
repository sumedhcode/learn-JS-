const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) { // checking the array is empty
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {  // checking if object is empty
    console.log("Object is empty"); 
}

// Nullish Coalescing Operator (??): make for null and undefined values


let val1;
val1 = 5 ?? 10 // => 5, this rigth-hand side mostly are functions that return some value by calling database
// val1 = null ?? 10 // => 10, operator assign 10 because null may be problematic to run programs  
// val1 = undefined ?? 15 // => 15
// val1 = null ?? 10 ?? 20 // => 10

console.log(val1);

// one more example
let productPrice = 1199
let free = 0

let price = free || productPrice 
console.log(price); // => 1199, because 0 is an falsy value

price = free ?? productPrice // always provides left hand side value, unless it is null or undefined
console.log(price); // => 0

// Terniary Operator // shorthand for the if else statement

// condition ? true : false

const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")