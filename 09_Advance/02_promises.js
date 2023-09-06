/*The Promise object represents the eventual completion (or failure) of an 
asynchronous operation and its resulting value*/

const promiseOne =  new Promise(function(resolve, reject) {
   setTimeout(function(){
    // console.log("Promise is completed")
    resolve()
   }, 1000) 
});

promiseOne.then(function(){
    // console.log('Promise Consumed');
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log('Async process completed');
        resolve();
    },1000)
}).then(function(){
    // console.log('promise consumed');
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
         resolve({userName: "sumedhcode", followers: 3 })
    }, 1000)
})

promiseThree.then(function(obj){
    // console.log(obj);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = true;
        if(!error){
            resolve({userName: "sumedhcode", followers: 4})
        } else{
            reject("Error in the JS")
        }
    }, 1000)
})

promiseFour.then(function(data){
    console.log(data);
    let nameOfUser = data.userName 
    return nameOfUser

}).then(function(nameOfUser){
    console.log(nameOfUser);
    
}).catch(function(error){
    console.log(error);
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response =  await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

fetch('https://api.github.com/users/sumedhcode') // using fetch method
.then(function(response){
    return response.json() // converting text response to json
})
.then(function(data){
    console.log(data.name); // this printed first even though is excuted in last
})
.catch(function(error){  // if the request is rejected or some error occured this block will execute
    console.log("Something went wrong ", error);
})