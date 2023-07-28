// declaring an object using constructor
const instaUser = new Object() // here there is just syntatical difference,

instaUser.name = "Sumedh"
instaUser.age = 20
instaUser.isLoggedIn = true
instaUser.email = "sam@gmail.com"

console.log(instaUser); // => { name: 'Sumedh', age: 20, isLoggedIn: true, email: 'sam@gmail.com' }

// nested objects 

let myheros ={
    firsthero: 'superman',
    secondhero: 'batman',
    powers: {
        energy: 200,
        strength: 1000,
        capbilities: {
            first: 'fly',
            second: 'hide'
        }
    }
}

console.log(myheros.powers.capbilities.first); // => fly

// combining two or more objects
console.log({},instaUser, myheros);

const combinedObj = {...instaUser, ...myheros}; // combined using spread operator
console.log(combinedObj);

// arrays of object, usually databases send values like this 

let anArrayofObject = [
    {
        id: 65,
        email: 'some@gmail.com'
    },

    {
        id: 45,
        email: 'some2@gmail.com'
    },

    {
        id: 34,
        email: 'some3@gmail.com'
    }
]

console.log(anArrayofObject[1].email); // => some2@gmail.com

// accessing values, keys and entries

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser)); // search what is enumerable properties
console.log(Object.entries(instaUser));

// checking the existence of an property
console.log(instaUser.hasOwnProperty('userName')); // => false
console.log(instaUser.hasOwnProperty('name')); // => true