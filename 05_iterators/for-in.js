// we use for -in loop which is designed to iterate over an object

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for- in loop over an array
const programming = ["js", "rb", "py", "java", "cpp"] // array is is also js object

for (const key in programming) {
    console.log(key); //=> 0 1 2 3 4, for-in loop gives array keys which are indexes 
}

/*Arrays are essentially objects with additional behavior and methods 
that are specific to handling collections of data, particularly ordered lists of values. 
thats why we can iterate over them using for-in loop*/

// for-in loop cannot iterate over an map object