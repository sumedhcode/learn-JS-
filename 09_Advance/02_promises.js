/*The Promise object represents the eventual completion (or failure) of an 
asynchronous operation and its resulting value*/

const promiseOne =  new Promise(function(resolve, reject){
    console.log('Promise one')
    resolve() // directly connects to then()
})

promiseOne.then(function(){
    console.log('Promise Consumed')
})

new Promise(function(resolve, reject){
    console.log('Promise Two')
    resolve({user: 'Sumedh', age: 20}) // getting data in the resolve
}).then(function(data){
    console.log(data)
})

new Promise(function(resolve, reject){
    reject()
})

fetch('https://api.github.com/users/sumedhcode') // using fetch method
.then(function(response){
    return response.json() // converting text response to json
}) // using chaining
.then(function(data){
    console.log(data.name); // this printed first even though is excuted in last
})
.catch(function(error){  // if the request is rejected or some error occured this block will execute
    console.log("Something went wrong ", error);
})