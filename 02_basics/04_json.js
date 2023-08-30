// in this particularly learn about json-object and how to de-structure an object.

// JSON is just short-hand of JavaScript Object Notation, most of the api sends the data in this format.


// comes in key value pairs and in the curly braces just like an javascript object:

// {
//     "username": "kristinward",
//     "address": "122 Powell Trace Suite 016, Lloydport, SC 08075",
//     "name": "Katherine Gill",
//     "email": "jestrada@gmail.com",
//     "birthday": "1958-04-05"
// }

// Also in the array of an object

[
    {},
    {},
    {}
]


// de-structuring of the object in javascript

// lets declare an object
const myGithub = {
    userName: 'sumedhcode',
    numOfRepos: 3,
    starred: "js-hindi-youtube",
    following: 10
}

console.log(myGithub.userName); // => 'sumedhcode'

const {userName} = myGithub; // Object-de-structuring, just syntactical sugar

console.log(userName); // => 'sumedhcode', more convenient to use

const {userName: name} = myGithub; // redeclared the property to simplify further

console.log(name); // => 'sumedhcode'

console.log(myGithub); // =>  userName: 'sumedhcode', original obeject does not change
