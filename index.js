//1.""Ways to print in JavaScript"""
// console.log("hello world");
//alert("me"); this tag is not used!
// document.write("This is document write");

//""2. JavaScript console API"""
// console.log("hello world", 4 + 6, "Another log");
//alert("me"); this tag is not used!
// document.write("This is document write");
// console.warn("this a warning");
//Error identify karne ke liye use karte hai
//kahi bhi kisi bhi jagah par Error ko lock karna hua to use karege
// console.error("This is an error");

//3. JavaScript Variables
//What are Variables? ----Containers to store data values
//Single Line Comment
/* Multi Line Comment */
var number1 = 45;
var number2 = 55;
// console.log(number1 + number2);

// 4. Data Type  in JavaScript
// Number
num1 = 458;
num2 = 556.5;

// String
var str1 = "This is a string.";
var str2 = "This is also a string.";

//object
var marks = {
  ravi: 34,
  sbhubham: 43,
  tommy: 54,
};
// console.log(marks);

//Booleans
var a = true;
var b = false;
// console.log(a, b);

//var und= undefined
var und;
// console.log(und);
// Null
var n = null;
// console.log(n);

/*
At a very high level, ther are 2 types of data type in JavaScript
1.Primitive Data Types: Undefined,Null,Number,String,Boolean,Symbol
2.Reference Data Types: Array and Objects
*/

var arr = [1, 2, 3, 4, 5];
// console.log(arr);

//Operators in JavaScript
//Arithmetic Operators
var a = 45;
var b = 56;
// console.log("The value of a+b", a + b);
// console.log("The value of a-b", a - b);
// console.log("The value of a*b", a * b);
// console.log("The value of a/b", a / b);

// Assigment Operators
var c = b;
// c += 2;
// c -= 2; //c =c-2;
// c *= 2;
// c /= 2;
// console.log(c);

//Comparison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x <= y);
// console.log(x >= y);
// console.log(x < y);
// console.log(x > y);
// console.log(x != y);

// Logical Operators
// Logical And(&&)
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical Or(||)
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// | Bitwise operator
// Logical Not
// console.log(!false);
// console.log(!true);

// Function in JavaScript
// DRY = Do not repeat yourself
function avg(a, b) {
  //   return (a + b) / 2;
  c = (a + b) / 2;
  return c;
}
c1 = avg(4, 6);
c2 = avg(56, 85);
// console.log(c1, c2);

// Conditionals Statements in JavaScript

var age = 41;
//Single if statement
/*if (age > 18) {
  console.log("You can drink !");
}
//if-else statement
if (age > 18) {
  console.log("You can drink !");
} else {
  console.log("You can't drink !");
}*/

// if-else Ladder
/*if (age > 32) {
  console.log("You are adult");
} else if (age > 21) {
  console.log("Boy eligible for married");
} else if (age > 18) {
  console.log("Girl eligible for married");
} else if (age > 11) {
  console.log("You are child !");
} else {
  console.log("You are Kid !");
}
console.log("End of ladder");
*/

// Array in JavaScript
// For Loop
var arr = [1, 2, 3, 4, 5, 6, 7];
// for (var i = 0; i < arr.length; i++) {
//   if (i == 2) {
//     // break; //Looping karna chod do
//     continue; //Continue ka matlb hota hai is iteration ko chodo dusari iteration me baad jao
//   }
//   console.log(arr[i]);
// }

//For each Loop
/*arr.forEach(function (element) {
  console.log(element);
});*/

// const aa = 0; //const ko kabhi change nai karege to use karte hai
// aa++;
// aa = aa + 1;

//While loop -- conditon check karte phir run hota hai
// let j = 0;
// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }

// Do-While Loop ----first time run then check condition
// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);

let myArr = ["Fan", "Camera", 34, null, true];
//Array Methods
// console.log(myArr.length);
// myArr.pop(); //last me se ek value remove ho jayegi
// myArr.push("shalni"); //Push se ham ek value ko add kar sakte hai
// myArr.shift(); //shift se hamare arr ki first value remove ho jayegi
// const newLen = myArr.unshift("shalni");
// console.log(newLen);
// console.log(myArr);

/* toString
myArr.toString()
"shalni,Fan,Camera,34,,true"
*/

/*Sort
myArr.sort()
(6) [34, "Camera", "Fan", null, "shalni", true]*/

// String Methods in JavaScript
let myLovelyString = "Shalini is a good girl !";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good")); //particular index ki value ko find karke de raha hai
// console.log(myLovelyString.lastIndexOf("d")); //last index ki value bata raha hai jo hame diya hai

// console.log(myLovelyString.slice(0, 3));
// d = myLovelyString.replace("Shalini", "AbhiSha");
// console.log(d, myLovelyString);

//Date Method in JavaScript

let myDate = new Date();
// console.log(myDate.getTime()); //"getTime" Time ko seconds me deta hai
// console.log(myDate.getFullYear()); //"getFullYear" date as a four digit
// console.log(myDate.getMonth());
// console.log(myDate.getHours());
// console.log(myDate.getDate());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getDay());

// JavaScript DOM (Document Object Mode) Manipulation
// consol par ja kar command ko run karna hai in future
//  document
//  document.location
let elem = document.getElementById("click");
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "SlateBlue";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-Success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
tn = document.getElementsByTagName("div");
console.log(tn);
createdElement = document.createElement("p");
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement("b");
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(Element);---->Remove an Element

//Selecting using Query
sel = document.querySelector(".container");
console.log(sel);
sel = document.querySelectorAll(".container");
console.log(sel);
