//  Primitive [bcz variables of this types are passed by value]
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// javascript is dynamically typed language => datatypes of variables are defined by the value it holds at runtime 

//Symbol datatype usage, even though assigned same value inside still the id value is different

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)

//Non primitive (Reference)
// Arrays, Objects , Functions

//Arrays
const actors = ["dylan wang","xu kai","wang xiyi"] 
//Object
let myObj = {
    name : "Anushka",
    age : 21,
}
//Function
const myFunction = function(){
    console.log("Love and Shine")
}


// ++++++++++++++++++++++++++++++

// Stack (Primitive)=>copy of value created , Heap(Non-Primitive) =>referenced to the original location of variable

let name01 = "Anushka"
let nameOfEmp = name01
nameOfEmp = "August"

console.log(name01)
console.log(nameOfEmp)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "anu@google.com"

console.log(userOne.email)
console.log(userTwo.email)
