console.log("Hello, 🌍!!! 🤩");

// x1 -> [1,2, 10] // 1GB
// x2 -> [1, 2, 12] // 1GB

// a -> x1 (memory address)
// (increase efficiency in storting)
// b -> x1

// c -> x2

let a = [1, 2];
let b = a; // copy by reference
let c = [1, 2];

// [ 4,5 ] === [ 4,5 ]
// array are checked by memory address
console.log(a === b); // true
console.log(a === c); // false

b.push(10);
c.push(12);

console.log(a, b, c);

// 1. Ans - Reason1
// 2. Ans - Reason2
// 3. Ans - Reason3

// primitive datatypes

let z1 = 5;
let z2 = z1;
let z3 = 5;

console.log(z1 === z2); // true
console.log(z1 === z3); // true

// x3 -> [6, 7]
// x4 -> [6, 7]

// t1 -> x3
// t2 -> x4

let t1 = [6, 7];
let t2 = [...t1]; // copy by value

console.log(t1, t2);

t2.push(100);

console.log(t1, t2);

// const c1 = 3;
// const c2 = "3";

// console.log(c1 == c2);
// console.log(c1 === c2);

// Which is faster?
//  1. Ans
//  2. Ans
//  Reason  - why?

// myth
// == true -   1. Check for only the value
// === false - 1. Check for only the value &  2. data type
// === slower

const c1 = 3;
const c2 = "3";

console.log(c1 == c2);
console.log(c1 === c2);
// == It allows type casting

// 1. c2 -> "3" -> 3
// 2. 3 == 3   -> true

// ==== It does not allows type casting
// 1. c2 -> "3"  c1-> 3 different data type -> false

// === faster

// Array destructuring
// const [ u1, u2, u3]  = [5, 6, 10];
// console.log(u1, u2, u3) // 5 6 10

// const [ u1, u2, u3]  = [5, 6];
// console.log(u1, u2, u3) // 5 6 undefined

// u3=10 is called default value
// if only if we have undefined, then default value will be taken
// const [ u1, u2, u3 = 10]  = [5, 6];
// console.log(u1, u2, u3) // 5 6 10

// const [ u1, u2, u3 = 10]  = [5, 6, 100];
// console.log(u1, u2, u3) // 5 6 100

// const [ u1, u2, u3 = 10]  = [5, 6, null];
// console.log(u1, u2, u3) // 5 6 null

const goal = 5 > 4 ? "Wins" : "Loss";
// ternary operator
// ? :
// 3 operands

// binary operator - 2 operands
// num1 > num2  / * - + % arthmetic operators
// > < >= ==  relational operators
// && || logical operators

// uniary operator - 1 operand
// ++ -- ! typeof

console.log(goal);

// undefined vs not defined

// let q1;
// // declared but not assigned a value
// console.log(q1); // undefined

// // console.log(q2); // not defined - Error - Not declared

// console.log(q1, typeof q1) // typeof - always it returns a string

// // console.log(q1 === typeof q1) // typeof - always it returns a string

// function double(b){
//   return [b, b*2];
// } //[5, 10]

// multi line arrow function
// const double = (b) => {
//   return [b, b*2];
// } //[5, 10]

// only if arrow function is one line then you could do this
const double = (b) => [b, b * 2];
const [h1, h2] = double(5); //[5, 10]

// Array destructuring - unpacking the value
// const [h1, h2] = [5, 10];
console.log(h1, h2);

// h1  - value & datatype
// h2 -  value & datatype

// 1st
// function dbl(n){
//   return n * 2
// }

//2nd
// const dbl = (n) => {
//   return n * 2
// }

// 3rd
const dbl = (n) => n * 2;

const nums = [10, 20, 40];

console.log(nums.map(dbl)); // always returns the same no. of

// 4th - nameless function - anonymous function - shorter
console.log(nums.map((n) => n * 2)); // always returns the same no. of  elements as input
// map
// output
// [20, 40, 80]

// const [name, age] = [15,  'Balaji']; // based on index

// console.log(name, age);

// 1. Ans - Reason1
// 2. Ans - Reason2

// name - 15
// age - "Balaji"

// Object destructuring
const { name, age } = { age: 15, name: "Balaji" }; // based on keys
console.log(name, age);
// 1. Ans - Reason1
// 2. Ans - Reason2

// name - "Balaji"
// age - 15

// function fullname(obj) {
//   return "Welcome " + obj.lastname + ", " + obj.firstname + " 🤩!!!"
// }

//win + .
//template literal ``

// ${}  - interpolation/substitution
// function fullname(obj) {
//   return `Welcome ${obj.lastname}, ${obj.firstname} 🤩!!!`
// }

// function fullname(obj) {

//   // const { name, age } = { age: 15, name: "Balaji" }; // based on keys
//     const { firstname, lastname } = obj; // based on keys

//   return `Welcome ${lastname}, ${firstname} 🤩!!!`
// }

// function fn( {firstname, lastname}, {mark, class} ) {
// return ...
// }

// function fullname( {firstname, lastname} ) {
//   return `Welcome ${lastname}, ${firstname} 🤩!!!`
// }

const fullname = ({ firstname, lastname }) =>
  `Welcome ${lastname}, ${firstname} 🤩!!!`;

// with object destructuring

console.log(fullname({ firstname: "Naga", lastname: "Swarup" }));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DAY-2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let countriesInfo = [
//   {
//     name: "India",
//     population: " 1,394,975,829",
//     region: "Asia",
//     flag:
//       "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
//     capital: "New delhi"
//   },
//   {
//     name: "Germany",
//     population: "81,770,900",
//     region: "Europe",
//     flag:
//       "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
//     capital: "Berlin"
//   },
//   {
//     name: "United states",
//     population: "323,947,000",
//     region: "Americas",
//     flag:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
//     capital: "Washington D.C"
//   },
//   {
//     name: "Brazil",
//     population: "206,135,893",
//     region: "Americas",
//     flag:
//       "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
//     capital: "Brasilia"
//   },
//   {
//     name: "Iceland",
//     population: "334,300",
//     region: "Europe",
//     flag:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
//     capital: "Reykjavik"
//   }
// ];

// No HTML
// only JS or CSS
// append vs appendChild
// time - 12:45

// DRY - Dont Repeat Yourself
// const countryName = document.createElement("h2");
// countryName.innerText = "India";
// // document.body.append(countryName)

// const Population = document.createElement("p");
// Population.innerText = "Population: 1,394,975,829";
// // document.body.append(Population);

// const Region = document.createElement("p");
// Region.innerText = "Region: Asia";
// // document.body.append(Region);

// const Capital = document.createElement("p");
// Capital.innerText = "Capital: New delhi";
// // document.body.append(Capital);

// document.body.append(countryName, Population, Region, Capital);

// createElement - avoid

const countryName = "India";
const population = "1,394,975,829";

// fetch - returns promise object - then

fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json()) // .then -> will always returns Promise object

  // data -> Response object
  .then((countries) => {
    countries.forEach((country) => {
      createCountry(country);
    });
  });

function createCountry({ flag, name, population, region, capital }) {
  // const {flag, name, population, region, capital} = country;

  document.body.innerHTML += `
<div class="container">
  <img src="${flag}" alt="${name.common} flag" class="flag" />
  <div class="info">
    <h2>${name.common}</h2>
    <p><span>Population: </span>${population}</p>
    <p><span>Region: </span>${region}</p>
    <p><span>Capital: </span> ${capital}</p>
  </div>
</div> 
`;
}

// function createCountry(country) {
//   document.body.innerHTML += `
// <div class="container">
//   <img src="${country.flag}" alt="${country.name} flag" class="flag" />
//   <div class="info">
//     <h2>${country.name}</h2>
//     <p><span>Population: </span>${country.population}</p>
//     <p><span>Region: </span>${country.region}</p>
//     <p><span>Capital: </span> ${country.capital}</p>
//   </div>
// </div>
// `;
// }
