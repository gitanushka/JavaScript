const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman", "flash", "batman"]


//how can we merge or add both the arrays
//below methods cant be used since arrays can ave multi datatype values, thus it will treat the later array as single value\
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);
//thus to get the desired value
console.log(marvel_heroes[3][1]);

//......concat....(storing in new array since concat returns new array after concatenating)
const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);

//....using spread operator.... (mostly used)
const allNewHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allNewHeroes);


//flat method used to create array from all subarrays
const arrSub = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
const arrAll = arrSub.flat(Infinity)
console.log(arrAll);

//if wanna convert a value in array so as to perform operations of array

//asking if given value is array
console.log(Array.isArray("August"));
//converting to array
console.log(Array.from("August"));
// the below code will give empty array as one has to specify from which array has to be made ; from keys or values
console.log(Array.from({name: "august"})) //interesting case for interview

//of method

let score1 = 100
let scoee2 = 200
let score3 = 300

console.log(Array.of(score1, scoee2, score3));
