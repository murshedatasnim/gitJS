// console.log("hello");
// var a = 9;
// var c = "okay"; // var can be accessed from anywhere
// let s = "kajshd";//can be used only within a scope. local var
// const k = 133; //value can't be changed
// console.log(a);
// console.log(c);
// console.log(s);
// console.log(k);
// console.log(c[0]);
// // k = s;
// // console.log(k);
// function wordBlanks(myNoun, myAdj, myVerb, myAdv) {
//   var result = "";
//   return result;
//
// }
// console.log(wordBlanks("dog", "big", "ran", "quickly"));
var a = [["as",1],["kaj",4]];
a.shift();
//a.pop(["asd",3]);
console.log(a);

function nextInLine(arr,item) {
  arr.push(item);
  return arr.shift();
}

var tarr = [1,2,3,4];

console.log("before  "+tarr);
console.log(nextInLine(tarr,5));
console.log("after  "+JSON.stringify(tarr));

var x=7
if (x=='7') {
  console.log(true);//checks only value , not types,
}                   //first it performs a type conversion then checks value
else {
  console.log(false);
}

if (x==='7') {
  console.log(true);//checks type. strict equality opaerator
}
else {
  console.log(false);
}


if (x!='7') {
  console.log(true);//checks only value , not types,
}                   //first it performs a type conversion then checks value
else {
  console.log(false);
}

if (x!=='7') {
  console.log(true);//checks type. strict equality opaerator
}
else {
  console.log(false);
}
