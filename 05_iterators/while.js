
let index = 0 // initialization
while (index <= 10) { // condition under parenthesis
    console.log(`Value of index is ${index}`); // body
    index = index + 2 // value change
}

// iterating array using while loop

let myArray = ['flashlight', "chamkadar", "superdupermaan"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

// do-while loop

let score = 11

do { // this loop will execute atleast once irrespective of the condition is true or false
    console.log(`Score is ${score}`); // it will "do" whatever the codition is, 11
    score++
} while (score <= 10); // condition after execution