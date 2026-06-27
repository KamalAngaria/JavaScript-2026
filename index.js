// # JavaScript-2026
// Day 1 of learning Javascript
//  Today topic
//  What is variable in javascript?
//  varaibel is a acontainer used to store the valuse or data  in javascript
//  there are thre types of variables in javascript
// 1 var
// 2 let
// 3 const
//  lets understand and disuss how we can write variables and store data in it
//  lets take the example of let variable
//  we can make variable using two types of form
//  example == 1 let a;
//  2 let a = 10;
// Decalaration V/S Initialization
// what is decalaration ?
// decalration is the process of creating a variable in js and give it a name
// Exammple -----

// var a; // this is how we decalre a variable in js whaat this decalartion only
// work with let and var
// what is intialiazation ?
// initalization is the proces where we give the 'first value the to variable we decalred in js
// Example -----
// var a = 10; // thsi is how we decalre and intialize a variable in js

// Day 2 of Learning Javascript
// Today topic ---
// Difference between var,let and co`   nst in javascript
// 1 var =====================================
//var is the old way of declaring varriable in javascript
// 1 we can redeclare the variable which is error prone and cause bugs in the code
//  Example ---- var a = 10;
//  var a= 20; this is the example of re declareing the variable using same name with different value which is not good practice in javascript
// 2 var is the function scoped variable.
// 3 var is ealiy added to the window object in the browser which can cause issues in the code
// 2 let =====================================
// let is the new way of declaring variable in javascript
// let gives error if we try to redeclare the variable with same name which is good practice in javascript
// Example-----
// let a = 10;
// let a = 20; // this will give error because we are trying to redeclare the variable with some name which is not allowed in javascript
// 3 const=======================================
// const is the way of declaring variable in javascript
// const is the variable which cannot be redeclared and cannot be reassigned a new value
// Example-----
// const age = 21;
// age = 22; // Error

// Today topic No. 2-----
//Scope in javascript
// There are three types of scopes in javascript
// 1 Global Scope===========================
// Global scope is the scope which is accessible from anywhere in the code
// 2 Locla Scope===========================
// Local scope is the scope which is accesible only whith in the function
// 3 Block scope============================
// Block scope is the scope which is accessible only whith in th block of the code

// Today topic No. 3-----
// Temproal Dead Zone in javascript
// Temporal Dead Zone (TDZ) is the period from entering a scope until a let or const variable is declared,
// during which accessing that variable throws a ReferenceError.
// Example -----------
// let b = 10;
// console.log(b); // ✅

// console.log(a); // ❌

// look all these space this is tdz conslole knows that a is exeisted but it cannot be accsed  before initialization

// let a = "Kamal";

// Day 3 of Learning Javascript
// Today topic-------
// Hoisting  in javascript
// Hoisting JavaScript ka behavior hai jisme declarations
// (variables aur functions) ko execution se pehle memory me register kar diya jata hai.
// Example -----------
// console.log(a); // undefined

// var a = 10;
// ---------------------------------------------
// var a;          // memory me pehle place mil gaya and it gives undefined because it is not initialized yet

// console.log(a); // undefined

// a = 10;
// ---------------------------------------------

// Day 4 of Learning Javascript
// Practice section of =================================================
// var, let, const
// Scope (global, function, block)
// Reassignment & redeclaration
// Temporal Dead Zone (TDZ)
// Hoisting
//                                Level 1 — Basic

// Q1

// console.log(a);
//  var a = 10;
// Answer = undefined

// Q2

// console.log(b);
// let b = 10;
// Answer i thik this is litle trick but my answer is undefined and refrence error  because if we use
// let b ; this is undefined  at this time
// console.log(b);
// b =10;  so in console undefined occur cause in hoisting every
// varible devide in two parts and declartion part is always goes at top most of code this is my reason
// but my final answer is ReferenceError

//Q3

// console.logc(c);
// const c = 10;
//Answer = same as Q2

// Q4

// var a = 10;
// var a = 20;
// console.log(a);
// Answer = 20

// Q5

// let a = 10 ;
// let a = 20;
// console.log(a);
// Answer= indetifier a is already declared

//                             Level 2 — Scope

// Q6

// {
//   let a = 10;
// }
// console.log(a);
// Answer = refence error because let is in the  block and let is the block scope variable can only acces under the block if its
//  in the blcok

// Q7

// {
//   var a = 10;
// }
// console.log(a);
// Asnwer = 10 ,because var have global acces and did not respect the blocks

// Q8

// let a = 100;

// {
//   let a = 200;
//   console.log(a);
// }

// console.log(a);
// //Answer = 200 then  100

// Q9
// var a = 100;
// {
//   var a = 200;
// }
// console.log(a);
//Answer = 200 i  want to know the reason why

//                                Level 3 — TDZ

// Q10

// {
//   console.log(a);

//   let a = 10;
// }
// Answer - cannot acess a before innitialization

// Q11

// {
//   let a = 10;

//   console.log(a);
// }
//Answer - 10

// Q12

// let a = 10;
// {
//   console.log(a);

//   let a = 20;
// }
//  Answer - cannot acess a before innitialization

//                           Level 4 — Hoisting
// Q13

// var a;
// console.log(a);
// a = 50;
// Answer = undefined

// Q14

// let a;
// console.log(a);
// a = 50;
// Answer = undefined

// Q15

// function test() {
//   console.log(a);
//   var a = 100;
// }
// test();
// Answer = undefined  i dont know the reason of thi because i am not familure with functions

// Q16

// function test() {
//   console.log(a);
//   let a = 100;
// }
// test();

// again not familure with function

//                       Day 5 of Learning Javascript
// Data Type  + Type System
// Data types are Devided in to 2 catograies
// 1 Primitive Data Type
// 2 Refrence Data Type

//                      Primitives Data Type
// Primitive Defination------
// Primitive data types are basic data types that store a single value and are not objects.
// Example Type ----
// 1 string
// 2 number
// 3 boolean
// 4 undefined
// 5 null
// 6 bigint
// 7 symbol

//                         Reference Data Type
// Reference Definition-------
// A reference is a value that points to the location of an object in memory rather than containing the object itself.
// Example Type ----
// 1 Object
// 2 function
// 3 array

//                       Day 6 of Learning Javascript

//                      Dynamic typing in javascript?
// In JavaScript, a variable can hold any type of value, and its type can change while the program is running.
// Example-------
// let value = 10;

// console.log(value);         // 10
// console.log(typeof value);  // number

// value = "Hello";

// console.log(value);         // Hello
// console.log(typeof value);  // string

// Topic 2------------------

//                              Type coercion
// Type coercion is the automatic or explicit conversion of a value from one data type to another.
// Example 1
// console.log("5" + 2);
// Output:
// "52"
// Why?
// "5" is a string.
// + with a string performs string concatenation.
// JavaScript converts 2 → "2".
// So it becomes:
// "5" + "2"
// Result:
// "52"

//  Topic 3----------------

//                              Operators

// What are operators in JavaScript?
// Operators are special symbols or keywords that perform operations on values (operands) and produce a result.
// For example:
// let sum = 10 + 5;
// Here:
// 10 → operand
// 5 → operand
// + → operator
// The + operator adds the two operands and returns 15.

// Type of Operators in Javascript-
// 1 Arithmetic
// 2 comaparison
// 3 logical
// 4 assignment
// 5 unary
// 6 ternary


//                          1. Arithmetic Operators

// Used for mathematical calculations.

// Operator	Meaning	Example	Result
// +	Addition	5 + 2	7
// -	Subtraction	5 - 2	3
// *	Multiplication	5 * 2	10
// /	Division	10 / 2	5
// %	Modulus (remainder)	10 % 3	1
// **	Exponent	2 ** 3	8

// let x = 10;
// let y = 3;

// console.log(x + y * 2 - 4 / 2);
// 10+6-2

//                            2. Comparison Operators

// Comparison operators compare two values and return a boolean value: either true or false.
// | Operator | Meaning                | Example     | Result  |
// | -------- | ---------------------- | ----------- | ------- |
// | `==`     | Equal (loose equality) | `5 == "5"`  | `true`  |
// | `===`    | Strict equal           | `5 === "5"` | `false` |
// | `!=`     | Not equal              | `5 != "5"`  | `false` |
// | `!==`    | Strict not equal       | `5 !== "5"` | `true`  |
// | `>`      | Greater than           | `10 > 5`    | `true`  |
// | `<`      | Less than              | `5 < 10`    | `true`  |
// | `>=`     | Greater than or equal  | `10 >= 10`  | `true`  |
// | `<=`     | Less than or equal     | `5 <= 10`   | `true`  |

//                         Practice Sestion
// Part 1: Basic Comparisons
// let a = 20;
// let b = 15;
// console.log(a>b); true
// console.log(a<b);false
// console.log(a==b); false
// console.log(a != b); true
// console.log(a<=b);false
// console.log(a>=b); false


//                       Day 7 of Learning Javascript

//                          Assignment Operator
// An assignment operator is used to assign a value to a variable.
// | Operator | Meaning              | Example   |
// | -------- | -------------------- | --------- |
// | `=`      | Assign               | `x = 10`  |
// | `+=`     | Add and assign       | `x += 5`  |
// | `-=`     | Subtract and assign  | `x -= 5`  |
// | `*=`     | Multiply and assign  | `x *= 5`  |
// | `/=`     | Divide and assign    | `x /= 5`  |
// | `%=`     | Remainder and assign | `x %= 5`  |
// | `**=`    | Exponent and assign  | `x **= 2` |



//                        Logical  Operator
// Logical operators are used to combine or modify boolean (true/false) values.
// 1. Logical AND (&&)
// Returns true only if both conditions are true.
// 2. Logical OR (||)
// Returns true if at least one condition is true.
// 3. Logical NOT (!)
// Reverses a boolean value. convert true to flase and false to true

//                      Unary and Ternary Operator
// What is a Unary Operator?
// A unary operator is an operator that works on only one operand (one value or one variable).

// Q1--------------
// let count = 10 ;
// console.log(++count);  Answer = 11
// Q2--------------
// let lives = 5;
// console.log(--lives);; Answer = 4
// Q3---------------
// let age = "21"
// console.log(+age); done
// Q4--------------
// let amount = "500";
// console.log(-amount); done
// Q5--------------
// let isLoggedIn = true;
// console.log(!isLoggedIn); done
// Q6----------------
// let city = "Shimla";
// console.log(typeof city); string
// Q7-----------
// let x = 10;
// console.log(x++); 10
// console.log(x); 11
// let y = 10;
// console.log(++y); 11
// console.log(y); 11
// Q8--------------
// let age = 21;
// let status = age;
// (status>=21) ?console.log("Adult"):consolele.log("Minor"); done
// Q9-------------
// let marks = 35 ;
// (marks >= 33) ?console.log("pass") : console.log("fail"); done


//                       Day 8 of Learning Javascript
// Q1
// let score = 49 ;
// console.log(++score); done


// Q2
// let balance = 1000;
// console.log(--balance); doen

// Q3
// let number = "250";
// console.log(+ number );
// console.log(typeof +number);
// console.log(typeof number);  u did not mention which typeof

// Q4
// let tempreature = "35";
// console.log(- tempreature); done

// Q5
// let isOnline = false ;
// console.log(! isOnline);

// Q6
// let age = 17 ;
// let personType =(age>=18) ? "Adult" : "Minor";
// console.log(personType)

// Q7 
// let marks = 91 ;
// let result = (marks>=90) ? "Excelent": " Keep Improving";
// console.log(result);

// Q8
// let number = 25 ;
// let result = number % 2 === 0 ? "even" : "odd" ;
// console.log(result);

// Q9
// let username= " kamal";
// let message = username === " kamal" ? " welecome" : " acess denied" ;
// console.log(message);

// Q10 
// let salary = 28000;
// let Tax = salary >= 30000 ? "Tax Applicable" : "No Tax" ;
// console.log(Tax);

// Q11
// let age = 22 ;
// let hasLicense = false ;
// let police = age >=18 && hasLicense ? " can drive" : "cannot drive"
// console.log(police);

// Q12
// let username ="Kamal";
// let paswword = "12345";
// let login = username === "Kamal" && paswword === "12345"
// ? "Login Successful" 
// : "Invalid Credentials";
// console.log(login);

//                 chatgpt practice question chaleng 
//                      Level 1 (Warm-up)

// Q1
// let num1 = 25;
// let num2 = 15;
// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(num1%num2);

// Q2
// let score = 80 ;
// console.log(++score); 81 
// console.log(--score); 79

// Q3
// let age =20;
// let voter = age>=18 
// ? "Adult" 
// : "Minor";
// console.log(voter);

// Q4
// let marks = 70 ;
// let result = marks>=33 
// ? "Pass"
// : "Fail";
// console.log(result);

//                      Level 2 (Comparison + Logical)

// Q5
// let age = 22 ;
// let hasLicense = true ;
// let Drive = age>=18  &&  hasLicense 
// ? "Eligible to Drive"
// : "Eligible to Drive";
// console.log(Drive);

// Q6
// let username = "Kamal";
// let password = "12345";
// let login = username === "Kamal" && password === "12345"
// ? "Login Successful"
// : "Invalid Credentials" ;
// console.log(login);

// Q7
// let salary = 45000;
// let income = salary>=50000 
// ? "High Income"
// : "Average Income";
// console.log(income);

// Q8
// let number = 19 ;
// let term = number % 2 === 0
// ? "even"
// : "odd";
// console.log(term);


//                      Level 3 (Real Thinking)

// Q9
// let english = 70;
// let maths = 80;
// let science = 60;
// let total = english + maths + science ;
// console.log (total);
// let average = total/3 ;
// let result = average>=40 
// ? "Pass" 
// : "Fail"
// console.log(result);

// Q10
// let price = 1200;
// let discount = 20;
// let DiscountAmount = price*discount/100
// console.log(DiscountAmount);
// let FinalPrice =price -DiscountAmount 
// console.log(FinalPrice);

// Q11
// let wallet = 5000;
// let phonePrice = 6500;
// let purchase = wallet>=6500
// ? " can buy"
// : "cannot buy"
// console.log(purchase);

// Q12
// let email = true;
// let phone = false;
// let login = email===true && phone===true
// ? "login allow"
// : " phone no wrong";
// console.log(login);
