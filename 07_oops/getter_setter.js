class User {
   constructor(email, password){
      this.email = email;
      this.password = password
   }
  
   get email(){
     return this._email.toUpperCase()
   }
   
   set email(value){
     this._email = value
   }
   
   get password(){
     return `${this._password}anushka`
   }

   set password(value){
     this._password = value
   }
}

const anushka = new User("anushka@google.com", "123")
console.log(anushka.email);
console.log(anushka.password);

//lexical scoping and closures

function makeFunc(){
  const name = "Anushka";
  function displayName(){
    console.log(name);
  }
  return displayName
}

const myFunc = makeFunc();
myFunc();

//since return displayName is written then when the function is called then only that function or execution context of that fun do not go in call stack but also the lexical scope of that function goes to call stack that includes outerfunction scope  

//this is called closure

//practical example of closures : video 49