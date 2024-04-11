const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})


//without storing it into a variable

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 2");
        resolve()
    },1000)
    
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise (function(resolve,reject){
   setInterval(function(){
    resolve({username: "Anu", email: "anu@yahoo.com"})
   },1000)
})

promiseThree.then(function(user){
   console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Anu", password: "123"})     
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})



promiseFour
.then((user) => {
   console.log(user);
   return user.username
}).then((username) => { //chaining
   console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {console.log("Either resolved or rejected");})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Javascript", password: 123});
        }
        else{
            reject('Js Error occurred');
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch{
        console.log('error');
    }
}

consumePromiseFive()

async function getAllUsers(){
    try{
        const response = await fetch('https://api.github.com/users/gitanushka')

        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log("Error in accessing github data");
    }
}

//or by using .then() :

fetch('https://api.github.com/users/gitanushka')
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);
})
.catch( (error) => console.log(error))