var arr = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];
for(i=0;i<arr.length;i++){
    console.log(arr[i]);//for iteration
}
console.log("__________________________");

for(value in arr){
    console.log(arr[value]);
}

console.log("__________________________");

for(value of arr){
    console.log(value);
}

console.log("__________________________");

arr.forEach(value => console.log(value))
//creation of empty object
        let fridge = {};
        console.log(fridge);
        
        //add properties to empty object
        
        fridge.milk = "3 ltr";
        fridge.veg = "Tomato";
        fridge.dryfruit = "10 kg dryfruit";
        console.log(fridge);
        
        
        
        
        //Fully loaded object
        let mobile = {
          brand: "Apple",
          color: "Silver",
          price: "70 k",
          isInsurance: true,
        };
        
        console.log(mobile);
        console.log(`Mobile Brand: ${mobile.brand}
        Mobile Color: ${mobile.color}
        Mobile price:${mobile.price}
        Mobile Insurance: ${mobile.isInsurance}
        `);
        
        // Template is used to avoid the problem single and double quotation
let datas = [
    {
      name: "Joey",
      age: 3,
      type: "dog",
    },
  
    {
      name: "Lizzy",
      age: 6,
      type: "dog",
    },
  
    {
      name: "Red",
      age: 2,
      type: "dog",
    },
  
    {
      name: "Sheru",
      age: 4,
      type: "dog",
    },
  
    {
      name: "Butters",
      age: 6,
      type: "human",
    },
  ];
let b = datas.filter((a)=>a.type === "dog").map((a)=> a.age*7).reduce((a,c) => a+c);
console.log(b)
let arr = [10, 20, 10, 30, 10, 10, 10, 50];
let b =arr.map((a)=>) arr.filter((a)=> a)
let arr=[10,20,30,40,50]
let b = arr.reduce((sum,a) => sum +a)
console.log(b);
obj1 = {name:"raj",age:"26",city:"erode",counter:"india"}
obj2 = {name:"raj",age:"26",city:"erode",counter:"india"}
let b = obj1.map((a)=> a)
let c = obj2.map((b)=>b)
if (b ==c){
  console.log("t")
}
let Mymenu = {Width:100, Height:200 , item1: "idle", item2="dosa", item3="vada", item4="pongal"};
function showmenu (width,height,item1, item2, item3, item4){
  return ` my menu ${width} ${height} 
          
           ${item1} ${item2} ${item3} ${item4}`
}
let v =showmenu(Mymenu);
console.log(v)
Inheritance:

Grandfather=>Father =>(COmpany)+father property
extends

3 class=>
1.2 methods
2.3 methods
3.2 property from grandfather & father

child class=>dervied class
Base class=>Super class  or parent class

super()=>it is a keyword which is used to refer to parent class or superclass constructor
extends

this is parent class
class Car {
  constructor() {
    console.log("I am Car constructor ");
  }
  //created a method
  getModelNumber() {
    return "X1 Model";
  }

  getSeats() {
    return " having capacity 2 Seat";
  }
}

//this is child class
class Bmw extends Car {
  constructor(name) {
    super(name);
    console.log("I am constructor " + name);
  }

  getModelNumber() {
    return super.getModelNumber();
  }
}

class Tesla extends Bmw {
  constructor(seat) {
    super(seat);
  }

  getSeats() {
    return super.getSeats();
  }
}
model no

create a object

let x1 = new Bmw("Model X1");

console.log(x1.getModelNumber());

let obj = new Tesla("4 seats ");


class Grandparent {
    constructor(){
    }
gold(){
    return "1kg gold 100 acre land"
}
}
class Parent extends Grandparent {
   constructor(){
       super()
   }
factory(){
    return "Food industry Buisness"
}
}
class Child extends Parent {
    constructor(){
      super()
    }
company(){
    return "Software company"
}
}
let raj = new Child();
console.log(raj.company());