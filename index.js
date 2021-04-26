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
if (age > 18) {
  console.log("You can drink !");
}
//if-else statement
if (age > 18) {
  console.log("You can drink !");
} else {
  console.log("You can't drink !");
}

// if-else Ladder
if (age > 32) {
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
