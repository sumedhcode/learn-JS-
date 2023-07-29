// lets now talk about functions
// functions are the processing unit of the program
// we package all the code into a function to reuse it when we need

// function defination-
function nameOfTheFunction(parameter) {
    console.log(parameter); // the function body
}

// console.log(nameOfTheFunction(3)); // => 3 and undefined, calling the function with an argument 3

// return keyword
function multiply(param){
    return param * 3;
}

//  console.log(multiply(2)) // => undefined, without return keyword
// console.log(multiply(2)) // => 6, with return keyword

// return keyword returns the value we passed in

// passing the arrays and objects into a function

// when building shop cart feature we dont know the exact number of values we get-
function anyFunction(price) {
    return price
}
console.log(anyFunction(200, 499, 299)) // => 200, does not further values

// using rest operator(look the same as spread operator)
function cartProductPrices(...pricesOfProduct){  
    return pricesOfProduct
}
console.log(cartProductPrices(200, 599, 3000, 210)); // => [ 200, 599, 3000, 210 ], gives an array

// passing the arrays and objects into a function
let randomObject = {
    firstName: "Colt",
    lastName: "Washington"
}

function intro(anyObject){
    console.log(`Hi my name is ${anyObject.firstName} ${anyObject.lastName}.`);
}

intro(randomObject) // => Hi my name is Colt Washington.

let arrayOfNumbers = [232, 41, 525, 425, 563]

function printtheNum(Array){
    return Array[0];
}

console.log(printtheNum(arrayOfNumbers)); // => 232