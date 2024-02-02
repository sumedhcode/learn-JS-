
let arr = [1, 3, 4, 5, 23]
Array.prototype.myName = function(){
    console.log('hey my name is sumedh')
}
arr.myName()

const myPowers = {
    power: 'write code',
    strength: 900
}
Object.prototype.printFruit = function(){
    console.log('Apple')
}
myPowers.printFruit()
arr.printFruit() // -> Apple
// myPowers.myName() // ->  ERR

// inheretence

const gitHubuser = {
    username: 'sumedhsh_'
}
const myObject = {
    name: 'sumedh',
    live: 'sangvi'
}

const myWork = {
    work: 'code',
    hobbie: 'write',
    __proto__: myObject // inherits the property of myObject
}

console.log(myWork.name) // -> sumedh

// modern syntax
Object.setPrototypeOf(myObject, gitHubuser)
// console.log(myObject.live)
console.log(myObject.username)