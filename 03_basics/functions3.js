// Immediately Invoked Function Expressions (IIFE)
//why use : to immediately invoke functions (for ex: as we start the application, db has to be connected), also to avoid the pollution of gloca scope and its variables

//below is how a normal fun written and called

// function js(){
//     console.log("DB connected")
// }
// js()

//iife written as ()()

(function js(){
    console.log("DB Connected")
})();

//since we are writing more than 1 ifee thus semi colon used 

( (name) => {
    console.log(`DB Connected, alert to user ${name}`);
} )("Anushka")
