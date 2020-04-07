var dog = {
  "name" : "Camper",
  "leg" : 4,
  "tails" : 1,
  "friends" : ["everything!"]
};

var nameValue = dog.name;
var legVal = dog.leg;

console.log(legVal);
console.log(nameValue);


//accessing obj thro bracket

var cat = {
  "its name" : "cat",
  "its age" : 1,
  "head" : 1,
  12 : 'akjd'
};

var x = cat["its name"];
var y = cat['its age'];
var z = cat[12];

console.log(x);
console.log(y);
console.log(z);


//add property to obj

cat['leg'] = 2;
cat['breed'] = 'de'
console.log(cat);

//delete property

delete cat.leg;
console.log(cat);

//check if a obj has a property

function check(prop) {
  if (cat.hasOwnProperty(prop)) {
    return cat[prop];
  }
  return "no";
}

console.log(check('hea'));

//random function
console.log(Math.random());
console.log(Math.floor(Math.random()*20));
var mmax = 10;
var mmin = 1;
//random whole value within range
console.log(Math.floor(Math.random()*(mmax-mmin+1)+mmin));

// convert to int of num of any base

console.log(parseInt('1010',2));
console.log(parseInt('1010',8));
console.log(parseInt('1010',16));
console.log(parseInt('1010',10));
console.log(parseInt('1010'));
console.log(parseInt('str',2));//returns NAN (not a number)


///ternary op
function ternaryOp(a,b) {
"use strict";
  return a>b?'a is greater':'b is greater';
}

const SENTENCE = 123;

console.log(ternaryOp(12,3));

//arrow function

var magic = () => new Date();
console.log(magic);

var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2],[3,4,5]));

function conc(arr1,arr2) {
  return arr1.concat(arr2);
}

console.log(conc([1,2],[3,4]));

//map and filter

const realNum = [1,4.5,-7.6,-2,6];

const squareList = (arr) => {
  const squaredInt = arr.filter( num => Number.isInteger(num) && num > 0).map(x =>x*x);
  return squaredInt;
};

const squaredInt = squareList(realNum);
console.log(squaredInt);



//prevent obj mutation


function freezeObj() {
  "use strict" ;
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  //Object.freeze(MATH_CONSTANTS); //prevents to change

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  } finally {
    return MATH_CONSTANTS.PI;
  }
}


  const PI = freezeObj();

  console.log(PI);


//rest opaerator


const sum = (function(){
  return function sum(...args) {
    return args.reduce((a,b) => a+b, 0);
  };
})();
console.log(sum(1,3,4,5));

//spread opaerator

const arr1 = ['as','df','we','er'];

let arr2;

(function() {
  arr2 = [...arr1];
  arr1[0] = 'pot'
})();
console.log(arr2);


//use destructuring assignment  to assign variables from objects

var voxel = {
  x : 3.6,y: 7.4,z : 6.54
};
const { x : a, y : b, z : c } = voxel;//means get x,y,z from voxel to a,b,c respectively

console.log(a,b,c);

//destructuring assignment with nested objects

const localForcast = {
  today: { min: 72,max: 83 },
  tomorrow: {min: 73.3, max: 84.6}
};

function getMaxTMR(forecast){
  const { tomorrow : {max : maxOfTmr }} = localForcast;
  return maxOfTmr;
}
console.log(getMaxTMR(localForcast));


//use destructuring assignment to assign variables from arrays


var [l,m,,n] = [1,2,3,4,5,6];
console.log(l,m,n);

let p =4, q = 3;
// (() => {
//   [p,q]=[q,p]
// })();
[p,q]=[q,p]
console.log(p,q);


//destructuring assignment with rest opaerator

const source = [1,2,3,4,5,6];
function removeFirstTwo(list) {

  const [ , , ...arr] = list;//takes element of list except first two in arr
  return arr;
}
const arr3 = removeFirstTwo(source);
console.log(arr3);
console.log(source);


//destructuring assignment to pass an object as a function's parameters

const stats = {
  max : 56.78,
  standard_deviation: 4.34,
  median: 34.45,
  mode:34,
  min:23,
  avg:35
};

const half = (function(){
  return function half({max,min}) {
    return (max + min )/2.0;
  };
})();

console.log(stats);
console.log(half(stats));


//create strings using template literals

const person = {
  name: "zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);


//write concise obj literal declarations using simple fields


// const createPerson = (name, age, gender) => {
//   return {
//     name: name,
//     age: age,
//     gender: gender
//   };
// };

//more simpler version
const createPerson = (name, age, gender) => ({name,age,gender});

console.log(createPerson("zodiac Hasbro", 56, "male"));


//concise declarative functions

const bicycle = {
  gear: 2,
  setGear(newGear){
    this.gear = newGear;
  }
};

bicycle.setGear(4);

console.log(bicycle.gear);

//use class syntax to define a constructor function


class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}

var zeus = new SpaceShuttle('jupiter');
console.log(zeus.targetPlanet);

//getter setter

function makeClass() {
  class Thermo {
    constructor(tempt) {
      this._temp=tempt; //underscore for private
    }
    get tempt(){
      return this._temp;
    }
    set tempt(ut){
      this._temp=ut;
    }
  }
  return Thermo;
}

const thermos = makeClass();
const tem = new thermos(23);
let temp = tem.tempt;
tem.tempt = 34;
temp = tem.temp;
console.log(temp);



//alert and prompt

//var v = prompt('wowow');
//console.log(v);

var c = confirm("Ok or cancel?");
if (c) {
  alert("You pressed \"ok\"");
} else {
  alert('You clicked "Cancel"')
}
