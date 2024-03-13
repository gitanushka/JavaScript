//this keyword : it refers to the current context (varibles or the value hold)

const user = {
   username: "Shinchan",
   price: 999,

   welcomeMessage: function(){
      console.log(`${this.username} , welcome to the website`);
      console.log(this);
     }
}

user.welcomeMessage();
user.username = "August";
user.welcomeMessage();

//below will give empty object {}
console.log(this);

//browser ke andar jo global object h vo h window object : try console.log(this) in browser

//this with function (below this.username do not work with functions)
//   function chai(){
//     let username = "August"
//     console.log(this.username);
//   }

// chai()


//ARROW FUNCTIONS

() => {}

// const addTwo = (num1,num2) => {
//    return num1+num2 ..explicit return
// }
// console.log(addTwo(3,4))

//implicit return
// const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(3,4))

const addTwo = (num1, num2) => ({username: "August"})
console.log(addTwo(3,4));
