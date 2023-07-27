// objects are simple data-structure to store data in key-value pairs
// objects are declared in two ways literal and using constructor 

// declaring objects using literals-
const exampleObj = {
    name: "Sumedh",
    age: 22,
    passion: "coding",
    BirthDate: "4 May 2002",
    email: "Sumedh@gmail.com"
}

// accessing  the values of the object
// console.log(exampleObj.BirthDate); // => 4 May 2002
// console.log(exampleObj["email"]); // => Sumedh@gmail.com, another method to accessing the values

// accessing an symbol in the array

const igSymbol = Symbol('$101') // declaring the symbol

let myIg = {
    name: "Sumedh Shewale",
    userName: "sumedhshewale_",
    bio: "learning...",
    about: "personal blog",
    accountType: "creator",
    [igSymbol]: "dollar sign"
}

// console.log(myIg); // => [Symbol($101)]: 'dollar sign'() output of the symbol)
// console.log(myIg[igSymbol]); // => dollar sign

// objects can store any type of data like arrays, functions and even the object itself

// functions in an objects called as methods

myIg.greetings = function(){
    console.log("Hey");
}
myIg.greetings() // => Hey, using the function

//