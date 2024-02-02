function increment(num){
    return num + 1;
}
increment(2)
increment.lower = 2; // we can use function as an object
increment.logMe = function(){
    console.log('Sumedh')
}
// console.log(increment) // -> [Function: increment] { lower: 2, logMe: [Function (anonymous)] }
// increment.logMe()

// console.log();
// console.log(increment.prototype) // -> {}
increment.prototype.logUser = function (username) {
    this.username = username
    console.log(`${this.username}: user-1`);
}
const chat = increment(4); // here we stored the return value
// console.log(typeof chat); // -> number

const chai = new increment(1) // here we create `new` instance of the prototype object
// console.log(typeof chai) // -> object
// chai.logUser('Sumedh')
// console.log(chai.username) // -> undefined if called before logUser
console.log('----------------------')


//this

function createUser(username, email, password){
    // console.log(this) // reference to global object
    this.username = username;
    // console.log(this) // username present in global obj
    // this.email = email;
    // this.password = password;
}
// console.log(this) // -> {}
this.name = 'sumedh'
// console.log(this) // -> { name: 'sumedh' }

// console.log(this); // global object
// console.log(globalThis); // global object
// console.log(global); // global object
// console.log(window) // unknown for nodejs
// createUser();

// constructor function
function createStore(storename, pincode = new Number | 0, location){
    this.storename = storename;
    this.pincode = pincode
    this.location = location
    return `storename: ${this.storename}, pincode: ${this.pincode}, location: ${this.location}`
    // return this
}
createStore.prototype.logPIN = function(){
    console.log(this.pincode);
}
const store1 = new createStore('apple');
const store2 = createStore('D-Mart')
// console.log(store1 )
// store1.logPIN();
// console.log(store2)
