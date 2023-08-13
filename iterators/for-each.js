// for-each is a default loop method in array

// syntax

// array.forEach(element => { // using a call back function to perform any action on array elements
//     //  body
// });

let carArr = ["ferrari", "swift", "thar", "fortuner", "lamborghini"]

// we use call-back 
carArr.forEach(function (element) { // A callback function is a function passed into another function as an argument,
    console.log(element);
});

// accessing index and complete array
carArr.forEach( (element, index, array) => console.log(`${element}, ${index}, ${array}`))
