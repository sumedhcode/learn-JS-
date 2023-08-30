// for of



// syntax

for (const iterator of object) { // here object is not actual javascript object it can be anything like string arrays
    //  body
}


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

/*The Map object holds key-value pairs and remembers the original insertion order of the keys. 
 Any value (both objects and primitive values) may be used as either a key or a value. */

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
// map.set('IN', "India")


console.log(map);


//  returns the array of key, value pair => [key, value]
for (const key of map) {
    console.log(key);
}

// accessing only keys
for (const [key] of map) {
    console.log(key);
}

// acessing both keys and values 
for (const [key, val] of map) {
    console.log(key, ':-', val);
}

// iterating on object using for-of loop
const gameObject = {
    game1: 'PUB-G',
    game2: 'Candy-Crush'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value); // => gameObject is not iterable, we have different loop for object
    
}