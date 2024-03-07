// object created through constructors

//singleton 
//const user = new Object();

//non singleton
const user = {};

user.id = "123abc"
user.name = "Sam"
user.isLoggedIn = false

console.log(user);

//can nest object inside objects

const enduser = {
    email: "user@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Aaron",
            lastname : "Yan"
        }
    }
}

console.log(enduser.fullname.userfullname.lastname);

//merge two objects

const obj1 = {1: "a", 2:"b", 3:"c"}
const obj2 = {4: "d", 5:"e"}
const obj3 = {6: "f"}

//{} :empty object is used as target and remaining all as the source (refer to definition)
const objFinal = Object.assign({}, obj1, obj2, obj3)
console.log(objFinal);

//using spread operator
const objF = {...obj1, ...obj2}

//when data comes from database ; array of objects
const users = [
    {
        id: 1,
        email: "anu@gmail.com"
    },
    {
        id: 1,
        email: "anu@gmail.com"
    },
    {
        id: 1,
        email: "anu@gmail.com"
    }
]
//accessing value
//user[1].email;

console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('isLoggedIn'));