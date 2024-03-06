//singleton : if object created by constructors and not by literals
//Object.create

//object literals (declaring object)


// later investigation : using Symbol datatype as a key in bject and print it(can be asked in interviews)
const mySym = Symbol("key1") 


const user = {
    name: "August",
    age: 21,
    [mySym]: "mykey1", //is square brackets not used then it will take it as a string and not a symbol
    location: "Singapore",
    email: "anushka@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//how to access values inside the object

//dot operator
console.log(user.email);
//using key "" is used as js take key inside the object as string
console.log(user["email"]);

console.log(user[mySym]);

//change object values
user.email = "anushka@microsoft.com";
console.log(user["email"])

//if one dont wanna let anyone change the object values
// ...Object.freeze(user)

//if want to use function as variables in object

user.greeting = function(){
    console.log("Hello JS user");
}

console.log(user.greeting());

user.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(user.greetingTwo());
