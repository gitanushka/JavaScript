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