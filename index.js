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

//                      Level 4 (Developer Thinking)

// Q13
// let username = "Kamal";
// let isAdmin = false;
// let loginSucsses = username==="Kamal" && isAdmin===!false
// ? "Welcome Admin"
// : "Access Restricted";
// console.log(loginSucsses);

// Q14 
// let marks = 91;
// let result = marks>=90 ? "Excellent"
// : marks>=75 ? "Good"
// : marks>=50 ? "Average"
// : "fail";
// console.log(result);

// Q15
// let age = 25;
// let hasLicense = true;
// let helmet = false;
// let eligbility = age>=18 && hasLicense === true && helmet ===!false
// ? " can ride "
// : "cannot ride";
// console.log(eligbility);

//                       Day 9 of Learning Javascript

//                              Control Flow

// Topic----- Control Flow
    // ├── if
    // ├── if...else
    // ├── else if
    // ├── switch
    // └── early return

//                          🟢 Section A - if
// Q1
// let age = 20;
// if(age>=18){
//     console.log("you are eligible to vote");
// }

// Q2
// let  marks =25;
// if(marks>=33){
//     console.log("Pass");
// }

// Q3
// let balance = 5000;
// let withdraw = 3000;
// if (balance>=5000){
//     balance -= withdraw;
//     console.log(balance);
// }

//                          🟡 Section B - if...else

// Q4
// let temperature = 32;
// if(temperature>=30){
//     console.log("Hot");
// }else{
//     console.log("Normal")
// }

// Q5
// let number = 25;
// if (number % 2 === 0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// Q6
// let username ="Kamal";
// let password ="12345";
// if ( username === "Kamal" && password === "12345"){
//     console.log("login succesful");
// }else{
//     console.log("invalid credentials");
// }

//                          🟠 Section C - else if

// Q7
// let marks = 92;
// if (marks >= 90){
//     console.log("A Grade");
// }else if(marks >=75){
//     console.log("B Grade");
// }else if (marks >= 50){
//     console.log(" C Grade");
// }else{
//     console.log("Fail");
// }

// Q8
// let salary = 65000;
// if (salary >= 70000) {
//     console.log("High Income");
// }else if(salary >=40000){
//     console.log("Medium Income")
// }else{
//     console.log("Low Income");
// }

// Q9
// let age = 67;
// if (age<13) {
//     console.log("Child");
// }else if (age < 20){
//     console.log("Teenager");
// }else if( age < 60){
//        console.log("Adult");
// } else {
//     console.log("Senior Citizen");
// }

//                          🔵 Section D - Switch

// Q10
// let day = 3;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break ;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break ;
//     case 5: 
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Staturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break ;
//     default:
//         console.log("Invalid Day Number")
// }

// Q11
// let month = 2;
// switch (month) {
//     case 2:
//         console.log("february")
//         break;
//     default:
//         console.log("invalid gess");
// }

// Q12
// let grade = A;
// switch(grade){
//     case A:
//         console.log("Excellent");
//         break;
//     case B :
//         console.log("Good");
//         break;
//     case C :
//         console.log("Average");
//         break;
//     case D :
//         console.log("Fail");
//         break;
//         default:
//         console.log("Invalid Grade");

// }

//                   🔴 Mixed Practice (Real Thinking)

// Q13
// let age = 24;
// let hasLicense = true;
// let helmet = true;
// if (age>=18 && hasLicense ===  true && helmet=== true) {
//     console.log("Can ride")
// } else {
//     console.log("Cannot ride")
// }

// Q14
// let english = 75;
// let maths = 82;
// let science = 69;
// let total = english + maths + science;
// let average = total/3;
// if (average>=90) {
//     console.log("A Grade");
// }
// else if(average>=70){
//     console.log("B Grade");
// }
// else if(average>=35){
//     console.log("C Grade");
// }
// else{
//     console.log("Fail");
// }

// Q15
// let wallet = 1200;
// let itemPrice = 900;
// if (wallet -= itemPrice){
//     console.log(wallet);
// }
// else{
//     console.log("Insufficient Balance");
// }

// Q16
// let username = "Kamal";
// let password = "12345";
// let otpVerified = true;
// if (username=== "Kamal" && password==="12345" && otpVerified=== true){
//     console.log("Login Successful");
// }
// else{
//     console.log("login unsuccesful");
// }

//                  ⭐ Challenge (Developer Thinking)

// let balance = 15000;
// let withdrawAmount = 2000;
// let pinCorrect = true;
// balance -= withdrawAmount;
// if(balance>=0.1 && pinCorrect=== true){
//     console.log("Withdrawal Successful");
//     console.log("Remaining Balance:" +balance);
// }else{
//     console.log("You don't Have Inof Balance");
// }
 
//                  ⭐ Challenge 2 - Shopping

// let price = 5000;
// let discount = 10;
// let wallet = 4800;
// let discountAmount =(price*discount)/100
// let finalprice = price -discountAmount;
// if (wallet>=4500 && finalprice>=4500) {
//     console.log("Purchase Successful");
// }else{
//     console.log("Insufficient Money");
// }

//                           🔥 Final Boss

// let english = 90;
// let maths = 80;
// let science = 70;
// let attendance = 78;
// let TotalMarks = english+maths+science;
// let average = TotalMarks /3;
// if (attendance<75){
//     console.log("Result Withheld")
// } else if (average >= 90) {
//     console.log("A");
// } else if (average >= 75) {
//     console.log("B");
// } else if (average >= 60) {
//     console.log("C");
// } else if (average >= 45) {
//     console.log("D");
// } else {
//     console.log("Fail");
// }


//                      Day 10 of learning Javasscript

// Q1
// for(let i = 1 ; i<=10 ; i++){
//     console.log(i);
// }

// Q2
// let i = 10;
// while (i>0) {
//     console.log(i);
//     i--
// }

// Q3
// for(let i = 1; i<=20 ; i++){
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// Q4
// let i = 1;
// while (i<=15) {
//  if (i % 2===1) {
//     console.log(i);
//  }   
//  i++;
// }

// Q5
// for (let i = 1; i < 11; i++) {
//    console.log(`5 * ${i} = ${5*i}`);
// }

// Q6
// let sum = 0;
// for(let i = 1; i<=100; i++){
//     sum = sum +i ;
// }
// console.log(`${sum}`);

// Q7
// for(let i = 1; i <51; i++){
//     if(i % 3 === 0){
//         console.log(i);
//     }
// }

// Q8
// let val =prompt("Please Entre a Number");
// for(let i = 1; i<=val; i++){
//     if(i%2===0){
//         console.log(`${i} is even`);
//     }
//     else{
//         console.log(`${i} is odd`);
//     }
// }

// Q9
// for(let i = 1; i <101; i++){
//     if(i % 3  === 0 && i % 5 ===0){
//         console.log(i);
//     }
// }

//                          🟢 Level 1 (Easy)

// Q1
// for(let i = 1; i<= 20 ; i ++){
//     if(i%2===0){
//         console.log(`${i} even`)
//     }
//     else{
//          console.log(`${i} odd`)
//     }
// }

// Q2
// let table = 7;
// for(let i = 1; i<=10; i++){
//     console.log(`7 * ${i} =${table*i}`);
// }

// Q3
// let marks = 82;
// if(marks>=90){
//     console.log("Grade A");
// }else if(marks>=70){
//     console.log("Grade B");
// }else if(marks>=50){
//     console.log("Grade C");
// }else{
//     console.log("Fail");
// }

// Q4
// let age = 17;
// let hasID = true;
// if (age >= 18 && hasID) {
//     console.log("Allowed to enter the event.");
// } else {
//     console.log("Not allowed to enter the event.");
// }

// // Q5
// let wallet = 5000;
// let itemPrice = 3200;
// if(wallet>=itemPrice){
//     wallet -= itemPrice;
//     console.log(`Purchase successful! Remaining balance: ${wallet}`)
// } else {
//     console.log("Insufficient funds. Purchase not possible.");
// }

//                         🟡 Level 2

// Q6
// for(let i = 1; i<=50; i++){
//     if(i%3===0){
//         console.log(`Number Divisble By 3 Are ${i}`)
//     }
// }

// Q7
// let username = "Kamal";
// let password = "12345";
// let otpVerified = true;

// if (username === "Kamal" && password === "12345" && otpVerified) {
//     console.log("Login successful.");
// } else {
//     console.log("Login failed.");
// }

// Q8
// let month = 8;
// switch(month){
//     case 1:console.log("January"); break;
//     case 2:console.log("February");break;
//     case 3:console.log("March");break;
//     case 4:console.log("Apirl");break;
//     case 5:console.log("May");break;
//     case 6:console.log("June");break;
//     case 7:console.log("July");break;
//     case 8:console.log("Agust");break;
//     case 9:console.log("September");break;
//     case 10:console.log("October");break;
//     case 11:console.log("Novmber");break;
//     case 12:console.log("December");break;
//     default:console.log("Invalid Month");
// }

// Q9
// let  salary = 55000;
// let experience = 3;
// if(salary>=50000 && experience===2){
//     console.log("employee gets a bonus");
// }else{
//     console.log("Critera is Not completed");
// }

// Q10
// for(let i = 20 ; i>=1; i--){
//     console.log(i);
// }

//                         🟠 Level 3

// Q11
// for(let i = 1; i<101; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// Q12
// let english = 75 ;
// let maths = 82;
// let science = 64;
// let attendance = 81;
// let total = english+maths+science;
// let Average = total/3;
// console.log(`Total Marks ${total}`);
// console.log(`Average Marks  ${Average}`);
// console.log(`Attedance : ${attendance}%`);

// Q13
// let day = 6;
// if(day===6 || day === 7){
//     console.log("Weekend");
// }else if(day>=1 && day<=5){
//     console.log("Weekday");
// }else{
//     console.log("Invalid Day");
// }

// Q14
// for(let i = 1; i < 101 ; i ++){
//     if(i%5===0){
//         console.log("Buzz");
//     }else {
//         console.log(i);
//     }
// }

// Q15
// let balance =12000;
// let withdraw = 4000;
// let pinCorrect = true;
// if (pinCorrect && balance >= withdraw) {
//     balance -= withdraw;
//     console.log(`Withdrawal successful! Balance left: ${balance}`);
// } else if (!pinCorrect) {
//     console.log("Incorrect PIN!");
// } else {
//     console.log("Insufficient funds!");
// }


//                  Day 11 of Learning Javascript

//                 ---------------Function-------------
// Topic= 1 _ Function Declaration ,expression and arrow Functions


//                     ============ Function Statment

// function firstfunction (){
//     console.log(`Hello world`);         
// }
// firstfunction();


//                      ============ Function Expression

// let fun = function (){
//     console.log(`Hello World`);    
// }
// fun();


//                          ============Fat Arrow Function

// let fun =() =>{
//     console.log(` hello world`);
// }
// fun ();


// Topic = 2             Parameter & Arguments

// function print (A , B){
// console.log(A+B);
// }
// print(1,7);  

//                  Day 12 of Learning Javascript

//               Default ,rest and spread Parameters

// function add(v1= 0,v2 = 0){
// console.log(v1+v2);
// }
// add(1,7);

//                             Rest Parameter

// function sum(...numbers){
// console.log(numbers);
// }

// sum(1,1,1,1,1,1);

//              Return values and early return
 
// function jet(a){
//    return 12+a ;
// }



// let jetfire =jet(12);
// console.log(jetfire);


//                  Day 13 of Learning Javascript

//                   Revision of Function From Basic----
// function add ( a,b){
//     console.log(a-b);
// }
// add(10,5);
// add(33,1); 

// function add (...a){
//     console.log(a);

// }
// add(1,1,1,1,1,1,1,1,1);

// function add (a,b){
//     return a+b;
// }


// let val = add(10,20);
// console.log(val);

//              Level 1 – Function Basics (Very Easy)

// Q1

// function FirstFunction (){
//     console.log(`Hello , JavaScript`);
// }
// FirstFunction ();

// Q2

// let SecondFunction = function(){
//     console.log(`Learning JavaScript`);
// }
// SecondFunction();

// Q3

// let ThirdFunction = ()=>{
// console.log("Welcome!");
// }
// ThirdFunction();

// Q4
// function val(){
//     console.log("I am 5 time print function");
// }
// val();
// val();
// val();
// val();
// val();

// Q5

// function Name(v1){
//     console.log(`Hello ${v1}`);
// }
// Name("Rahul");

//              Level 2 – Parameters & Arguments.

// Q1

// function add(v1,v2){
//    return v1+v2;
// }
// console.log(add(10,20));

// Q2

// function multiply(a,b,c){
//     return a*b*c;
// }
// console.log(multiply(2,3,4));

// Q3

// function introduce(name, age, city) {
//     return ` Hi, I'm ${name}.\n I'm${age} years old. \n I Live in ${city}.`;
// }

// console.log(introduce("Rahul",22,"Delhi"));

// Q4

// function isEven(number){
//     return number%2===0;
// }
// console.log(isEven(10)); // true
// console.log(isEven(7));  // false

// Q5

// function findLargest(a,b){
//     return a > b ? a: b;
// }
// console.log(findLargest(50,80));

//                  Day 14 of Learning Javascript

//                  Logic Building Level 1

// Q1 Positive, Negative or Zero

// function checkNumber(number){
//     if(number >0){
//         console.log("Positive Number");
//     }else if(number <0){
//         console.log("Negative Number")
//     }
//     else{
//         console.log("Zero");
//     }
// }

// checkNumber(10);
// checkNumber(-5);
// checkNumber(0);

// Q2 Even numbers from 1 to n

// function printEven(n){
//     for(let i=1;i<=n;i++){
//         if(i%2===0){
//             console.log(i);    i take help of google to this but i understand the logic
//         }
//     }
// }
// printEven(10);

// Q3 - Sum of 1 to n

// function sum(n){
//     let total = 0;
//     for (let i = 1; i<=n; i++){
//         total += i;
//     }
//     return total;   honestely i did not even understand this question and i solved it using google but i understand logic but i consider you to test me ok
// }

// console.log(sum(5));

// Q4 - Multiplication Table

// function table(number){
//     for(let i = 1; i<=10; i++){
//         console.log(`${number} x ${i} = ${number * i}`);
//     }
// }                
// table(18);

// Q5 ⭐ (Logic Building)

// function largest(a,b,c){
//     if (a>=b && a>=c){
//         return a;
//     }
//     else if (b>=a && b>=c){
//         return b;
//     }  
//     else if(c>=a && c>= b){
//         return c;            dekh bhai me sirf itna he logic bna paya
//     }
// }
// console.log(largest(10,50,30));


//                  Day 15 of learning Javascript


//                  📚 Revision Challenge (2 minutes)

// 1. Difference between
// ==    Loose Equality example 5 == "5" true

// and

// === Strict Equality example 5 === "5" false  Recommended for everyday code
// 2. What does % do?

// Example:

// 10 % 3  this is mode  % operator used to get remandier of two number 
 
// 3. Which operator is AND?
// This operator is logical AND && operator gives true if both equations are true 

// .4 Which loop runs at least once?
// for
// while
// do...while  this do while

// 5. What is the ternary operator?
//  condition ? expressionIfTrue : expressionIfFalse; shorten vesion of if else


    //                   🟡 Logic Building Level 2


 // Q1 ⭐ Count Even Numbers

    // function countEven(n){
    //     let count =0;
    //     for(let i =2; i<=n ; i += 2){
    //      count++;
    //     }
    //      return count;    use google to solve this ye repeat test karna mujhe
       
    // }
    // console.log(countEven(10));

// Q2 ⭐ Count Digits
// mujhe nhi aya kane bro logic bhi nhi bna even

// Q3 ⭐ Reverse a Number
// smae nhi bna  Math.floor() mujhe ese chize nhi ati abhi bali mujhe asi shortcut ya cizo ke bare me nhi pta hia  

// Q4
// not solved

// Q5 ⭐⭐⭐ Mini Calculator

// function calculator(a,b,operator){
//     switch (operator){
//         case "+" :
//             return a+b;
//         case "*" :
//             return a*b;
//         case "-" :
//             return a-b;
//         case "/":
//             return a/b;
//         case "%" :
//             return a%b;
//         default :
//         return " invalid operator"
//     }
// }
// console.log(calculator(10, 5, "+")); // Output: 15
// console.log(calculator(10, 5, "-")); // Output: 5
// console.log(calculator(10, 5, "*")); // Output: 50
// console.log(calculator(10, 5, "/")); // Output: 2
// console.log(calculator(10, 5, "%")); // Output: 0
// console.log(calculator(10, 5, "$")); //



//                  Day 16 of learning Javascript

//              🟢 Practice Set #1 (10 Questions)

// Q1 ⭐ Easy (Functions + Operators)

// function square(number){
//     return number * number;
// }
// console.log(square(7));

// Q2 ⭐ Easy (Functions + if-else)

// function checkAge(age){
//     if(age<13){
//         console.log("Child");
//     }else if(age>=13 && age<=19){
//         console.log("Teen");
//     }
//     else{
//         console.log("Adult");
//     }
// }
// checkAge(20);

// Q3 ⭐ Easy (Loops)

// function countDown(startNumber) {
//     for (let i = startNumber; i >= 1; i--) {
//         console.log(i);
//     }
// }
// countDown(20);

// Q4 ⭐ Easy (Operators)

// function inDivisible(number){
//     if(number%3===0 && number%5===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(inDivisible(15));

// Q5 ⭐⭐ Medium (Loops
// function multiples(input,endgoal){
//     for(let i = input; i <=endgoal ; i+=input){
//         console.log(i);
//     }
// }
// multiples(5,100)

// Q6 ⭐⭐ Medium (Functions + Return)

// function findSmallest(a,b){
//     if(a>b){
//         return a;
//     }else {
//         return b;}
// }
// console.log(findSmallest(1,5));

// Q7 ⭐⭐ Medium (Loops + if)

// function countMultiplesOf5(n){
//    let count = 0;
//    for(let i =1; i<=n; i++){
//     if(i%5===0){
//         count++
//     }
//    }
//    return count;
// }

// console.log(countMultiplesOf5(20));


//                      Day 17 of Learning Javascript

// First class Function means treating a fuction as a value and as a parameter
// and can call inside the function ?

// function first(val){
//     console.log("Hello");
// }                           Store a function in a variable
// let myFunction = first;
// myFunction();

// function greet(){
//     console.log("Hello");
// }
//                                 Pass a function as an argument
// function execute(fn){
//     fn();
// }
// execute(greet);

// function greet() {
//     console.log("Hello");
// }

// let x = greet();
// console.log(x);


// 🧠 JavaScript Test - Return & First-Class Functions

// Q1

// function greet() {
//     return "Hello";
// }

// console.log(greet);

//  Answer Function greet because greet kiya ho jo ki fuction hia agar "greet" hota to ye string hia

// Q2

// function greet() {
//     return "Hello";
// }

// console.log(greet());

//  Answer Hello because isme hmne fuction ko hello string rreturn ki jo ki ab fuction me save ya return hui ab jo bhi fuction ko call krke print krva rha hia use hello milega

// Q3

// function greet() {
//     console.log("Hello");
// }

// let x = greet;

// x();

// Answer Hello because greet jo ki ek fuction hia ise hmne x variable me sotre kiya so ab hme x ko call kr ke real fuction ka output le sakte hia is term ko store fuction as variablr bhi khate hia

// Q4
// function greet() {
//     return "Hello";
// }

// let x = greet();

// console.log(x);

// Answer Hello because x me hmne fuction dalne ki jgh use call kiya means uska result call kiya 
// so greet(); hello return tha so hello print hoga na

// Q5

// function greet() {
//     return "Hello";
// }

// function test() {
//     return greet;
// }

// let x = test();


// Answer iska answer mujhe pta nhi lg rha hia smj to aya ki phela ek fuction 
// bnaya greet usme hello return hia so jo greet ko call karega use hello milega
// pr 2 fuction me hmne greet yani pura fuction call kiya hia so 
// ye kuch esa hia dikh rha hia meri imagination me 

// fuction test(){
//     fuction greet(){
//         return "hello";
//     }
// }

// let x = test();  so test to kuch print nhi kr payega agar krta hia to use pura greet fuction karna padega

// Q6
// function greet() {
//     return "Hello";
// }

// function test() {
//     return greet();
// }

// let x = test(); 

// answer hello ho ga pr bp print karan padega na

// Q7
// function greet() {
//     console.log("Hello");
// }

// function execute(fn) {
//     fn();
// }

// execute(greet);

// answer hello because  
// function greet() {
//     console.log("Hello");
// }   ye hello print karta jb ise call kre hmne pura fuciton as a argument pass kr diya 
// dusare fuction ko in fn parameter aur fn pagameter me to pura greet hia puction hia jise call kr diya hia fu(); kr kre

// Q8

// function greet() {
//     console.log("Hello");
// }

// function execute(fn) {
//     fn();
// }

// execute(greet);

// greet(); === fn();


// Q9

// Kaunsa statement First-Class Function ko prove karta hai?

// A)

// Functions can be stored in variables.

// B)

// Functions can be passed as arguments.

// C)

// Functions can be returned from other functions.

// D)

// All of the abov  shi


// Q10 ⭐ Final Boss
// function hello() {
//     return "Hi";
// }

// let a = hello;
// let b = hello();

// console.log(a);
// console.log(b);
// Answer
// Function hello
// Hi

//                  Day 18 of Learning Jvascipt

//                           Arrays

let arr =[1,2,3,8,9,10,4,5,6,7];
// arr[2] = 8;  modifiying the array


//                              Array Methods
// arr.reverse();
// let sr=arr.sort(function(a,b){
//     return b-a;   Methode use to arrange the numbers in the assending and desnding order
// });

// arr.forEach( function (val){
//     console.log(val + 2);
// });

// let ne =arr.map(function (val){
//     if(val >= 2){
//         return val+2;
//     }
//     else{
//         return val;
//     }
// });

// let abc = arr.filter(function (val){
// if(val > 4)  return true;
// });

// let ans = arr.reduce(function(Add,val){
//     return Add + val ;
// },0);

// let va =arr.find(function (val){
//     return val === 4;
// });

//                   Day 19 of Learning JavaScript

//                       Level 1 (Very Easy)



// Question 1
// let name = "Rahul"
// console.log(typeof name);
// Answer === "string"

// Question 2
// let age = 22 ;
// console.log(typeof age);
// Answer === number

// Question 3
// let isStudent = false;
// console.log(typeof isStudent);
// Answer === boolean

// Question 4
// let city;
// console.log(city);
// console.log(typeof city);
// Answer === undefined
// undefined

// Question 5
// let user = null;
// console.log(typeof user);
// Answer === object

// Question 6
// console.log(typeof NaN);
// console.log(typeof Infinity);
// Answer === number 
// number 

// Question 7
// console.log(typeof []);  
// console.log(typeof {});  
// console.log(typeof function(){}); 
// Answer === object
//            object
//            function