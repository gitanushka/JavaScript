//Prototypes are the mechanism by which JavaScript objects inherit features from one another.


function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

//this tells it to be in current context 

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe();


//........ About Prototype.........

let myName = "anushka    "

console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }

}

Object.prototype.anushka = function(){
    console.log(`anushka is present in all objects`);
}

Array.prototype.heyanushka = function(){
    console.log(`Anushka says hello`);
}

heropower.anushka();

myHeros.anushka();

heropower.heyanushka();

//inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "August    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length()}`);
}

anotherUserName.trueLength();

"anushka".trueLength()
"coffee".trueLength()