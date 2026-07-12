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
//  var a= 20; this is the example of re declareing the variable using same name with different value which is Not good practice in javascript
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

// let arr =[1,2,3,8,9,10,4,5,6,7];
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

//                  Level 2 (Dynamic Typing)

// Question 8
// let data = 10;
// console.log(typeof data);
// data = "Hello";
// console.log(typeof data);
// data = true;
// console.log(typeof data);
// // Answer === number
//               "string"
//               boolean

// Question 9
// let value = null;
// console.log(typeof value);
// value = [];
// console.log(typeof value);
// Answer === object 
//            object


//                 Level 3 (Primitive vs Non-Primitive)

// Question 10
// let a = 10;
// let b = a;
// b = 50;
// console.log(a);
// console.log(b);
// Answer === 10
//            50

// Question 11
// let obj1 = {
//     name : "Rahul"
// };
// let obj2 = obj1;
// obj2.name = "Aman";
// console.log(obj1.name);
// Answer === Aman

// Question 12
// let arr1 = [1,2,3];
// let arr2 = arr1;
// arr2.push(4);
// console.log(arr1);
// Answer === (4) [1,2,3,4]

//                 Level 3 (Primitive vs Non-Primitive)

// Question 13
// if ("Hello") {
//     console.log("Yes");
// }
// Answer yes and its return

// Question 14
// if ("") {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// Question 15
// if ([]) {
//     console.log("Array");
// }
// Answer === Array

// Question 16 
// if ({}) {
//     console.log("Object");
// }
// // Answer === Object

// Question 17
// if (0) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }
// Answer === NO because it 0 is falsy

// Question 18
// console.log(Boolean(" "));
// console.log(Boolean("0"));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// Answer === true
//            true
//            false
//            false

//              Day 20 Of learning Javascript


//              JavaScript Practice - Set 1 (10 Questions)

//                          Topics Covered:

// Data Types
// typeof
// Dynamic Typing
// Primitive vs Reference
// Truthy/Falsy
// Hoisting
// TDZ
// Operators (Arithmetic, Assignment, Comparison, Logical)

// Question 1 ⭐
// let a = 10;
// let b = "10";
// console.log(a==b); true
// console.log(a===b) false
// console.log(a!=b) false
// console.log(a!==b) true

// Question 2 ⭐⭐
// console.log(typeof null); Object
// console.log(typeof NaN); Number
// console.log(typeof []); Object
// console.log(typeof {}); Object
// console.log(typeof function (){}); function

// Question 3 ⭐⭐
// let x = 5;
// console.log(x++);5
// console.log(++x);7
// console.log(x--);7
// console.log(--x);5

// Question 4 ⭐⭐⭐
// let value = "";
// if(value){
//     console.log("A");
// }else{
//     console.log("B");
// }
// B

// let value = [];
// if(value){
//     console.log("A");
// }else {
//     console.log("B");;
// }
// A 

// let value = {};
// if(value){
//     console.log("A");
// }else {
//     console.log("B");;
// }
// A

// let value = " ";
// if(value){
//     console.log("A");
// }else {
//     console.log("B");;
// }
// A

// let value = 0;
// if(value){
//     console.log("A");
// }else {
//     console.log("B");;
// }
// B

// let value = "false";
// if(value){
//     console.log("A");
// }else {
//     console.log("B");;
// }
// A 

// Question 5 ⭐⭐⭐
// let a = 10;
// let b = a;
// b += 20;
// console.log(a);
// console.log(b);
// 10
// 30 Why?  simple bro a =10 then b = a menas b =10 now b += 20 means 10 += 20 = 30
// so a=10 ,b=30

// Question 6 ⭐⭐⭐
// let person1 ={
//     name : "Rahul"
// };
// let person2 =person1;
// person2.name = "Aman";
// console.log(person1.name);
// console.log(person2.name);
// Aman 
// Aman why? simple because look the code first we creat a variable with person1 and initialized the object in it
// now we create a another variable and used assignement operator to assign the person1 menory addres to person 2 
// because its refrence if i chnage person 2 cange in person 1 also like 1 tv 2 remotes 

// Question 7 ⭐⭐⭐⭐ (Hoisting)
// console.log(a)
// var a =100;
// console.log(a);
// undefined
// 100

// Question 8 ⭐⭐⭐⭐ (TDZ)
// console.log(age);
// let age = 20;
// refrence error 
// age is not initialized 
// because in js on let TDZ apply js ne kbhi let ko koi value nhi di like var ise pta hia age varible hia but koi value use nhi krta hia jb tk tdz ktm na ho
// Temproral Dead Zone

// Question 9 ⭐⭐⭐⭐ (Mixed)
// let a = "5";
// let b = 2;
// console.log(a + b); "25" "string" concetination
// console.log(a - b); 3 number Type coercion 
// console.log(a * b); 10   number Type coercion 
// console.log(a / b); 2.5  number Type coercion 
// console.log(a % b); 1    number Type coercion 

// Question 10 ⭐⭐⭐⭐⭐ (Interview Favorite)
// let score = 0;
// console.log(score || 100);
// console.log(score ?? 100);
// I dont get it bro easy explain karna

//          JavaScript Practice – Set 2 (10 Questions)

// Question 1 ⭐ (Type Coercion)
// console.log(1 + "2"); 12
// console.log("2" + 1); 21
// console.log(1 + 2 + "3"); 33
// console.log("1" + 2 + 3); 123

// Question 2 ⭐⭐ (Arithmetic + String)
// console.log("10" - 5); 5
// console.log("10" * 2); 20
// console.log("10" / 2); 5
// console.log("10" % 3); 1
// console.log("10" + 2); 102

// Question 3 ⭐⭐ (Boolean Conversion)
// console.log(Boolean([])); true 
// console.log(Boolean({})); true
// console.log(Boolean("")); false 
// console.log(Boolean("0")); true 
// console.log(Boolean(0)); false 
// console.log(Boolean(-1)); true 
// console.log(Boolean(NaN)); false

// Question 4 ⭐⭐⭐ (== vs ===)
// console.log(false == 0);  true 
// console.log(false === 0); false 
// console.log(null == undefined); true
// console.log(null === undefined); false
// console.log("5" == 5); true 
// console.log("5" === 5); false 

// Question 5 ⭐⭐⭐ (Logical Operators)
// console.log(true && false); false because && finding both true so first is true so it moves to next and next is false so its print true only when both are true
// console.log(true || false); true because OR ignore false when at least one contdition true
// console.log(!true); false ! not operatore change false value in true and true change into false
// console.log(10 && 20); 20 same as first bro because isne true check kiya next 20 hia jo ki abhi is condition me as a false hia 
// console.log(0 && 20); 0 because 0 is a falsy value
// console.log(0 || 20); 20 0 is falsy and 20 true according to rule bro true print so 20
// console.log(10 || 20); 10  prit 10 because its stop when it find true
//

// Question 6 ⭐⭐⭐⭐ (Short-Circuit)
// let a = 5;
// console.log(a > 2 && "Passed");  Passed
// console.log(a < 2 && "Passed"); false
// console.log(a > 2 || "Failed"); true
// console.log(a < 2 || "Failed");  Failed

// Question 7 ⭐⭐⭐⭐ (Operator Precedence)
// console.log(2 + 3 * 4); 14
// console.log((2 + 3) * 4); 20
// console.log(10 - 5 + 2); 7
// console.log(10 - (5 + 2));3

// Question 8 ⭐⭐⭐⭐ (Unary Operators)

// let a = "10";
// console.log(+a); 10
// console.log(-a); -10
// let b = true;
// console.log(+b); 1
// let c = false;
// console.log(+c); 0

// Question 9 ⭐⭐⭐⭐⭐ (Tricky)
// let x = 10;
// console.log(x++ + ++x);
// 22 because 10 but x++ make it 11 pr print nhi krta kuki x ab ek 11 hia and samne bala bhi 11 hia isliye 22

// Question 10 ⭐⭐⭐⭐⭐ (Interview Favorite)
// let name = "";
// console.log(name || "Guest"); "Guest"
// console.log(name ?? "Guest"); blank ku ki ue sirf undefined and null dekhta hia aur tbhi print kargega
// name = null;
// console.log(name || "Guest"); "Guest"
// console.log(name ?? "Guest"); "Guest"

// Bonus Challenge (⭐⭐⭐⭐⭐)
// console.log([] == false); true 
// console.log([] === false); false
// console.log("" == 0); true
// console.log("0" == 0); true
// console.log(null == 0); false


//                  Day 21 Of Learning Javascript 

//                  Set 3 – JavaScript WTF Questions.

// Question 1 ⭐
// console.log([] + []); "" + "" = ""
// console.log([] + {}); "" +"[object object]" = "[object object]"
// console.log({} + []); "[object object]" +"" = "[object object]"
// console.log({} + {}); "[object object]" +"[object object]" ="[object object][object object]"
// Why = simple because these are all non primitive value and its sum nothing we cant add car + bike
// so js convert it to primitive value first its chek valueof if smae return it use typeof to
// converte into primitve value [] = "" and {} "[object object]" then i used concetination to merge together

// Question 2 ⭐⭐
// console.log(+[]); 0
// console.log(+{}); NaN
// console.log(+""); 0 
// console.log(+"100");  100
// console.log(+"Hello");  NaN 
// Why ? because there we are using type conversion and unary operator both together
// look [] = "" ,+"" =0 and {}= object is obejct is nas no sense to convert in no SO NaN
// Same  in "Hello" We are not able to convert this is no nor js so its Nan

// Question 3 ⭐⭐
// console.log(![]); false
// console.log(!{}); false
// console.log(!![]); true
// console.log(!!{}); true
// console.log(!!""); false →
// Why ? ! → Bollean → true / false depends on expresion example "" this is false but if we
// do !"" → true now !! ! → Bollean → true / false → false ko true and reverse

// Question 4 ⭐⭐⭐
// console.log([] == false); true
// console.log("" == false); true
// console.log(0 == false); true 
// console.log("0" == false); true
// console.log(null == false); false 
// why ? because look bollean which is false is convert in 0 and is left side if we convert sting to number and object to string and aslo convert again string to number cause the == did not check correct it only chek that there is same thing or not
// and null thbhi true hota hia jb same undefined hotha hia

// Question 5 ⭐⭐⭐
// console.log(5 + true); 6 
// console.log(5 + false); 5
// console.log(5 - true); 4 
// console.log(5 - false); 5 
// console.log(true + true); 2 
// console.log(false + false); 0
// why ? simple false = 0 and true = 1 

// Question 6 ⭐⭐⭐⭐
// console.log("5" - -"2"); 7 why? -"2" convert in no = -2 and - kbhi concate nhi krta hia so "5" no me gaya now 5 -(-2)=7
// console.log("5" + +"2");52 concetination simple 
// console.log("5" + -"2");5-2 again concetination 

// Question 7 ⭐⭐⭐⭐
// let a = 10;
// console.log(a++ + a++); 10 + 11 = 21  post increment 
// let b = 10; 
// console.log(++b + ++b); 11 + 12 = 23 pre increment

// Question 8 ⭐⭐⭐⭐
// console.log(NaN == NaN); false  NaN is not = to itself
// console.log(NaN === NaN); false type coesion not avilable in NaN
// console.log(typeof NaN); number  trying to make a no but its not valid so NaN
// console.log(Number("Hello")); NaN   trying to make "Hello" in no and fail so NaN

// Question 9 ⭐⭐⭐⭐⭐
// let x = null;
// let y = undefined;
// let z = 0;
// console.log(x || 100);  100
// console.log(x ?? 100); 100
// console.log(y || 100); 100
// console.log(y ?? 100); 10
// console.log(z || 100); 100
// console.log(z ?? 100); 0

// ?? is left side null undefined then right side return if left is not null or undefiined return left
// || if it always reture true value

// Question 10 ⭐⭐⭐⭐⭐ (Interview Favorite)
// console.log(typeof null); object 
// console.log(typeof undefined); undefined
// console.log(null == undefined); true
// console.log(null === undefined); false 
// console.log(typeof []); object 
// console.log(typeof function(){}); function
// console.log(typeof NaN); Number

// 🔥 Bonus Challenge (Interview Level)
// let a = "10";
// console.log(a++);  10  post increment and have rule to change the in number first
// console.log(a);  11

// Question 1 ⭐
// let num = -5;
// if (num > 0) {
//     console.log("Positive");
// } else if (num < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }

// Question 2 ⭐
// let number = 7;
// if(number%2===0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }

// Question 3 ⭐
// let age = 17;
// if(age >= 18){
//     console.log("Eligible");
// }else{
//     console.log("Not Eligible");
// }

// Question 4 ⭐⭐
// let a = 20;
// let b = 35;
// if(a>b){
//     console.log(a);
// }else{
//     console.log(b);
// }

// Question 5 ⭐⭐
// let a = 10;
// let b = 50;
// let c = 25;
// if(a>=b && a>=c){
//     console.log(`${a} is largest`);
// }else if (b>=a && b>=c){
//     console.log(`${b} is largest`);
// }else{
//     console.log(`${c} is largest`);
// }

// Question 6 ⭐⭐
// let year = 2024;
// if((year%4===0 && year%100 !==0) || year % 400 ===0){
//     console.log("Leap Year");
// }
// else{
//     console.log("Not a Leap Year");
// }

// Question 7 ⭐⭐⭐
// let marks = 70;
// if(marks >= 90){
//     console.log("Grade A");
// }else if(marks>=80 && marks <= 89){
//     console.log("Grade B");
// }else if(marks>=70 && marks <= 79){
//     console.log("Grade C");
// }else if(marks>=60 && marks <= 69){
//     console.log("Grade D");
// }else{
//     console.log("Fail");
// }

// Question 8 ⭐⭐⭐
// let  a = 20;
// let  b = 10;
// let operator = "*";
// switch(operator){
//     case "+": 
//     console.log(a+b);
//     break;
//     case "-": 
//     console.log(a-b);
//     break;
//     case "*": 
//     console.log(a*b);
//     break;
//     case "/": 
//     console.log(a/b);
//     break;
//     case "%": 
//     console.log(a%b);
//     break;
//     default:
//         console.log("invalid input");
// }

// Question 9 ⭐⭐⭐
// let username = "Rahul";
// let password = "12345";
// (username === "Rahul" && password === "12345")
// ? console.log("Login Successful")
// : console.log(" Invalid Credentials");

// Question 10 ⭐⭐⭐⭐ (Interview)
// let age = 65;
// if(age < 5){
//     console.log("Ticket Price = Free");
// }else if(age >=5 && age <=17){
//     console.log("Ticket Price = ₹100");
// }else if(age >=18 && age <=59){
//     console.log("Ticket Price = ₹200");
// }else if(age >=60){
//     console.log("Ticket Price = ₹150");
// }else{
//     console.log("Please Entre Your Age");
// }

// let a = 10;
// let b = 25;
// let c = 18;
// let d = 7;

// if(a>=b && a>=c && a>=d){
//     console.log(`${a} Is Largest No`);
// }else if(b>=c && b>=d){
//     console.log(`${b} Is Largest No`);
// }else if( c>=d){
//     console.log(`${c} Is Largest NO`);
// }else{
//     console.log(`${d} Is Largest NO`);
// }


// if(a<=b && a<=c && a<=d){
//     console.log(`${a} Is Smallest No`);
// }else if(b<=c && b<=d){
//     console.log(`${b} Is Smallest No`);
// }else if( c<=d){
//     console.log(`${c} Is Smallest No`);
// }else{
//     console.log(`${d} Is Smallest No`);
// }

// let largest = a;

// if (b > largest) {
//     largest = b;
// }

// if (c > largest) {
//     largest = c;
// }

// if (d > largest) {
//     largest = d;
// }

// console.log(largest);

// let Smallest = a;

// if (b < Smallest) {
//     Smallest = b;
// }

// if (c < Smallest) {
//     Smallest = c;
// }

// if (d < Smallest) {
//     Smallest = d;
// }

// console.log(`${Smallest} Is Smallest Number`);

// 🚀 Question 1 – ATM Machine ⭐⭐
// let balance = 5000;
// let withdraw = 2000;
// (withdraw<=balance)
// ? console.log("Transaction Successful")
// : console.log("Insufficient Balance");

// 🚀 Question 2 – Bank Loan ⭐⭐⭐
// let age = 24 ;
// let salary = 30000;
// let creditScore =720;
// (age>=21 && salary>= 25000 && creditScore>=700)
// ? console.log("Loan Approved")
// : console.log("Loan Rejected");

// 🚀 Question 3 – Student Scholarship ⭐⭐⭐
// let marks = 91;
// let attendance = 78;
// (marks>=90 && attendance>=80)
// ?console.log("Scholarship")
// :console.log("No Scholarship");

// 🚀 Question 4 – E-commerce Discount ⭐⭐⭐⭐
// let amount = 3500;
// if(amount>=5000) {console.log(`20% Discount`);}
// else if(amount>=3000) {console.log(`10% Discount`);}
// else{console.log("No Discount");}

// 🚀 Question 5 – Login System ⭐⭐⭐⭐

// let username = "Rahul";
// let password = "12345";
// if(username === "Rahul"){
//         if(password === "12345"){
//              console.log("Login Successful");
//         } else {
//         console.log("Invalid Password");
//     }
// }else {
//     console.log("Invalid Username");  google help li thi
// }

// 🚀 Question 6 – Electricity Bill ⭐⭐⭐⭐
// let unit = 250;
// if(unit<=100){console.log(`${unit * 5}`);}
// else if(unit<=300){console.log(`${unit*7}`);}
// else {console.log(`${unit*10}`);}

// 🚀 Question 7 – Movie Ticket ⭐⭐⭐⭐⭐
// let age = 0;
// let isStudent = true;
// let price;
// let discount = 20;
// if(age<5){price = 0;}
// else if (age <=17){price = 100;}
// else if(age <=59){price =200;}
// else { price = 150;}

// if(isStudent && price>0){
//     price = price - (price*discount) /100;
// }
// console.log(`Movie Ticket  Rs : ${price}`);

// 🚀 Question 8 – BMI Calculator ⭐⭐⭐⭐⭐
// let weight = 70;
// let height = 1.75;

// let bmi = weight /(height**2);
// console.log("BMI:",bmi.toFixed(2));
// if(bmi < 18.5){console.log("Underweight");}
// else if(bmi <=24.9){console.log("Normal");}
// else if(bmi <=29.9){console.log("Overweight");}
// else{console.log("Obese");}

// 🚀 Question 9 – Password Strength ⭐⭐⭐⭐⭐
// let password = "Rahul12356";
// if(password.length<8){console.log("Weak Password");}
// else if (password.length<=11){console.log("Medium Password");}
// else{console.log("Strong Password");}
// .length ka use nhi pta tha mujhe so google kiya and lga pta hia ki ye charchter lenght dekhta hia 

// 🚀 Question 10 – Interview Question ⭐⭐⭐⭐⭐
// let experience = 12;
// let rating = 5;
// let bonus;

// switch(true){
//     case(experience < 2):
//     bonus = 0;
//     break;
//     case(experience <=5):
//     bonus = 10000;
//     break;
//     case(experience <=10):
//     bonus = 25000;
//     break;
//     default:
//         bonus = 50000;
// }

// if(rating === 5){
//     bonus += 5000;
// }
// console.log(`${bonus}`);  google se dekha bro 

//                  🧠 Round 3 – 10 Logic Questions

// Question 1 ⭐⭐⭐ (Online Exam)
// let marks = 80;
// let attendance = 70;

// if(marks>=33){
//     if(attendance>=75){
//         console.log("Pass");
//     }else{
//         console.log("Failed due to low attendance");
//     }
// }else{console.log("Failed due to low marks");}

// Question 2 ⭐⭐⭐ (Hospital)
// let age  = 30;
// let temperature  = 104;
// let oxygen = 95;
// if(age>=60 || temperature >= 103 || oxygen < 90){
//     console.log("Emergency Ward");
// }else{
//     console.log("General Ward");
// }

// Question 3 ⭐⭐⭐⭐ (Shopping Website)
// let amount = 6000;
// let premium = true;

// if (amount >= 5000 && premium === true) {
//     console.log("30% Discount");
// } else if (amount >= 3000) {
//     console.log("15% Discount");
// } else if (amount >= 1000) {
//     console.log("5% Discount");
// } else {
//     console.log("No Discount");
// } mujhe ata tha fir bhi mujhe google pe dekhna pda tum consfuse kr deta ho question metyumne urce and variable amount diya hia

// Question 4 ⭐⭐⭐⭐ (Company Bonus)
// let experience = 7;
// let rating = 5;
// let salary;
// let bonus = 10000;
// if(experience>=10){ salary = 50000;}
// else if(experience >= 5){ salary = 25000;}
// else if(experience >= 2){salary = 10000;}
// else{salary = 0;}

// if(rating===5){
//     salary = salary + bonus;
// }
// console.log(salary);

// Question 5 ⭐⭐⭐⭐ (Traffic Signal)
// let signal = "Yellow";
// (signal==="Red") ? console.log("Stop"):
// (signal==="Yellow") ? console.log("Ready"):
// (signal==="Green") ? console.log("Go"):
// console.log("Invalid Signal");

// switch se  bhi 
// let signal  = "Yellow";
// switch(true){
//     case( signal=== "Red"):
//     console.log("Stop");
//     break;
//     case( signal=== "Yellow"):
//     console.log("Ready");
//     break;
//     case( signal=== "Green"):
//     console.log("Go");
//     break;
//     default:
//         console.log("Invalid Signal");
// }

// Question 6 ⭐⭐⭐⭐⭐ (Restaurant Bill)
// let item = "Pizza";
// let quantity = 3;
// let price = 0;
// switch (item) {
//     case "Pizza":
//         price = 300;
//         break;
//     case "Burger":
//         price = 150;
//         break;
//     case "Pasta":
//         price = 250;
//         break;
//     default:
//         console.log("Item not available in menu");
// }

// if (price > 0) {
//     let total = price * quantity;
//     console.log(`Item  : ${item}\nPrice : ${price} \nTotal : ${total}`);
// }

// Question 7 ⭐⭐⭐⭐⭐ (University Admission)
// let boardMarks = 82;
// let entrance = 70;
// (boardMarks>=75 && entrance>=80)? console.log("Admission Confirmed"):
// (boardMarks>=75 || entrance>=80)? console.log("Waiting List"):
// console.log("Rejected");

// Question 8 ⭐⭐⭐⭐⭐ (Bank Account)
// let balance = -200;
// (balance < 0)  ? console.log("Account Blocked"):
// (balance < 500) ? console.log("Low Balance Warning"):
// console.log("Normal Account");

// Question 9 ⭐⭐⭐⭐⭐ (Interview Logic)
// let age = 27;
// let degree = true;
// let experience = 0;
// (age>=18 && age<=30 && degree === true && experience >= 1)
// ? console.log("Eligible")
// : console.log("Not Eligible");

// Question 10 ⭐⭐⭐⭐⭐⭐ (Boss Level)
// let show = "Night";
// let weekend = true;
// let student = true;
// let weekendPrice = 50;
// let discount = 20;
// let price;
// switch(show){
//     case "Morning":
//         price = 150;
//         break;
//     case "Afternoon":
//         price = 200;
//         break;
//     case "Night":
//         price = 300;
//         break;

// }
// if(weekend=== true && student === true){
//     price = price + weekendPrice;
//     let finalprice = price - (price*discount) /100
//     console.log(`Show : ${show}\nWeekendPrice: ${weekendPrice} Rs\nDiscount : ${discount}%\nFinalPrice : ${finalprice} Rs`)
// }

// 🔥 Bonus Challenge (Interview)
// let age = 23;
// let hasLicense = true;
// let helmet = false;

// if(age>=18 && hasLicense === true && helmet === true){
//     console.log("Can Ride");
// }else{console.log("Cannot Ride");}

//              🏆 Final Round – 10 Questions

// Question 1 ⭐⭐⭐⭐⭐ (ATM 2.0)
// let balance = 5000;
// let withdraw = 3000;
// let dailyLimit = 4000;

// if(withdraw> dailyLimit)
// {console.log(`Daily Limit Exceeded`);}
// else if(withdraw>balance)
// {console.log(`Insufficient Balance`);}
// else{console.log(`Transaction Successful`);}

// Question 2 ⭐⭐⭐⭐⭐ (Company Hiring)
// let age = 25;
// let degree = true;
// let experience = 3;
// let english = true;
// (age>=21 && age <=30 && degree===true && experience >=2)
// ?console.log("Selected")
// :console.log("Rejected");

// Question 3 ⭐⭐⭐⭐⭐ (Netflix)

// let memeberShip = "Standard";
// let pictureQuality ;

// switch(memeberShip){
//     case "Free" :
//         pictureQuality = "480p";
//         break;
//     case "Standard" :
//         pictureQuality = "1080p";
//         break;
//     case "Premium" :
//         pictureQuality = "4K";
//         break;
//     default:
//         console.log("Invalid Plan");
// }

// console.log(`MemeberShip : ${memeberShip}\nPictureQuality : ${pictureQuality}`);

// Question 4 ⭐⭐⭐⭐⭐ (Restaurant)
// let item = "Pizza";
// let quantity = 2;
// let coupon = true;
// let discount = 20
// let price;

// switch(item){
//     case "Pizza" :
//         price = 300;
//         break;
//     case "Pizza" :
//         price = 300;
//         break;
//     case "Pizza" :
//         price = 300;
//         break;
//     case "Pizza" :
//         price = 300;
//         break;
//     default:
//         console.log(" Item Not Avilable");
// }
// if(price > 0 && coupon=== true){
//     let Finalprice= price - (price*discount) /100;
//     console.log(`Item : ${item}\nPrice : ${price} Rs\nDiscount : ${discount}%\nFinal Amount : ${Finalprice} Rs`)
// }

// Question 5 ⭐⭐⭐⭐⭐ (Student Result)
// let marks = 70;
// let attendance = 78;
// let practical = true;
// if(marks>=33 && attendance>=75 && practical===true)
// {console.log("Pass");}
// else if(practical !== true)
// {console.log("Failed in Practical");}
// else if(attendance<75)
// {console.log("Low Attendance");}
// else{console.log("Failed in Theory");}

// Question 6 ⭐⭐⭐⭐⭐⭐ (Salary)
// let salary = 50000;
// let experience = 6;
// let rating = 5;

// let oldSalary = salary;
// let incrementAmount = 0;
// let finalSalary = salary;

// // Rule 1: Pehle Experience check karke 10% Increment apply karo
// if (experience >= 5) {
//     incrementAmount = (salary * 10) / 100; // ₹5000
//     finalSalary = salary + incrementAmount; // ₹55000
// }

// // Rule 2: Uske baad rating check karke finalSalary par extra 5% apply karo
// if (rating === 5) {
//     let extraBonusAmount = (finalSalary * 5) / 100; // ₹2750
//     finalSalary = finalSalary + extraBonusAmount;  // ₹57750
// }

// console.log(`Old Salary : ${oldSalary} Rs`);
// console.log(`Incremented Base : ${oldSalary + incrementAmount} Rs`);
// console.log(`Final Salary : ${finalSalary} Rs`);

//              Day 23 of Learning Javascript

// 🟢 for Loop Practice Set 1 (Beginner → Easy)

// Question 1 ⭐
// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }  1 2 3 4 5

// Question 2 ⭐
// for(let i = 5; i >= 1; i--){
//     console.log(i);
// }5 4 3 2 1

// Question 3 ⭐
// for(let i = 2; i <= 10; i += 2){
//     console.log(i);
// }
// 2 4 6  8 10

// Question 4 ⭐⭐
// for(let i = 1; i < 10; i += 3){
//     console.log(i);
// }1 4 7

// Question 5 ⭐⭐
// for(let i = 10; i >0; i -= 2){
//     console.log(i);
// }10 8 6 4 2 

// Question 6 ⭐⭐
// for(let i = 1; i <= 5; i++){
//     console.log(i * 2);
// }
// 2 4 6  8 10
// Question 7 ⭐⭐⭐
// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     sum = sum + i;
// }
// console.log(sum);
// 15

// Question 8 ⭐⭐⭐
// let x = 1;
// for(let i = 1; i <= 4; i++){
//     x = x * 2;
// }
// console.log(x);
// 16

// Question 9 ⭐⭐⭐
// for(let i = 1; i <= 5; i++){
//     console.log("JavaScript " + i);
// }
// JavaScript 1
//  JavaScript 2
//  JavaScript 3
//  JavaScript 4
//  JavaScript 5

// Question 10 ⭐⭐⭐⭐ (Logic)
// let total = 0;
// for(let i = 1; i <= 5; i++){
//     total = total + i;
//     console.log(total);
// }
// 1 3 6 10 15

//          🟡 JavaScript for Loop - Set 2 (Intermediate)

// Question 1 ⭐⭐⭐
// for(let i = 1; i <= 10; i += 3){
//     console.log(i);
// }
// 1 4 7 10

// Question 2 ⭐⭐⭐
// let sum = 0;

// for(let i = 2; i <= 10; i += 2){
//     sum += i;
// }

// console.log(sum);
// sum = 2   i = 2
// sum = 6   i = 4   bhoot time laga
// sum = 12  i = 6
// sum  = 20  i= 8
// sum =  30  i = 10

// Question 3 ⭐⭐⭐
// let x = 20;

// for(let i = 1; i <= 4; i++){
//     x -= 3;
// }

// console.log(x);
// // i = 1  20 - 3  = 17
// // i = 2  18 - 3  = 14  
// // i = 3  15 - 3  =  11
// // i = 4  12 - 3  =  8

// Question 4 ⭐⭐⭐⭐
// for(let i = 1; i <= 5; i++){
//     console.log(i);

//     if(i === 3){
//         break;
//     }
// }
// 1 2 3

// Question 5 ⭐⭐⭐⭐
// for(let i = 1; i <= 5; i++){

//     if(i === 3){
//         continue;
//     }

//     console.log(i);
// }
// 1 2 4 5

// Question 6 ⭐⭐⭐⭐
// let total = 1;

// for(let i = 1; i <= 4; i++){
//     total *= i;
// }

// console.log(total);

// // i = 1 total = 1
// // i = 2 total = 2
// // i = 3 total = 6
// // i=  4 total = 24

// Question 7 ⭐⭐⭐⭐⭐
// for(let i = 10; i >= 1; i -= 3){
//     console.log(i);
// }
// i = 10  print = 10
// i = 10 -3  print = 7
// i = 7 -3 print = 4
// i = 4 -3 print = 1  mujhe abhi esa solve karna pd rha hia

// Question 8 ⭐⭐⭐⭐⭐
// let a = 1;

// for(let i = 1; i <= 5; i++){
//     a += i;
//     console.log(a);
// }
// // i = 1 a = 2
// // i = 2 a = 4
// // i = 3 a = 7
// // i = 4 a = 11
// // i = 5 a = 16

// Question 9 ⭐⭐⭐⭐⭐
// for(let i = 1; i <= 5; i++){

//     if(i % 2 === 0){
//         console.log("Even");
//     }else{
//         console.log("Odd");
//     }

// }
// // 1 % 2 === 0  odd 
// // 2 % 2 ==== 0 even
// // 3 odd
// // 4 even  
// // 5 odd 
//  isme ye pta lg gya tha even odd hia but print ho ga ye bhool gaya to console dekha bha print hua hia

// Question 10 ⭐⭐⭐⭐⭐ (Tricky)

// let x = 0;

// for(let i = 1; i <= 5; i++){

//     x += i;

//     if(x > 6){
//         break;
//     }

//     console.log(x);

// }
// i = 1 x = 1
// i = 2 x = 3
// i = 3 x = 6
// i = 4 x = 10 sp greater then six and break no console

// for(let i = 5; i <= 50; i += 5){
//     console.log(i);
// }
// 10 time i just answer it by mistake i count on mey fingure 1st fingure 5 last 50

//                          While Loop

// Practice Set 1 (Output Prediction)

// Q1
// let i = 1;

// while(i <= 5){
//     console.log(i);
//     i++;
// }
// 1 2 3 4 5

// Q2
// let i = 5;

// while(i >= 1){
//     console.log(i);
//     i--;
// }5 4 3 2 1

// Q3
// let i = 2;

// while(i <= 10){
//     console.log(i);
//     i += 2;
// }
// 2 4 6 8 10

// Q4
// let sum = 0;
// let i = 1;

// while(i <= 5){
//     sum += i;
//     i++;
// }

// console.log(sum); 15 because loop ke bhar hia so final answer print hoga
// sum = 1 i = 1
// sum = 3 i = 2
// sum = 6 i = 3
// sum = 10 i = 4
// sum = 15 i = 5

// Q5
// let x = 10;

// while(x > 0){
//     console.log(x);
//     x -= 3;
// }
// 10 7 4 1

//              🟡 while Loop - Set 2 (Intermediate)

// Question 1 ⭐⭐⭐⭐ (break)

// let i = 1;
// while(i <= 5){
//     if(i === 4){
//         break;
//     }
//     console.log(i);
//     i++;
// }
// 1 2 3 

// Question 2 ⭐⭐⭐⭐ (continue)
// let i = 0;
// while(i < 5){
//     i++;             
//     if(i === 3){
//         continue;
//     }
//     console.log(i);
// }   
//  1 2 4 5

// 🧠 Bonus Question (Think Before Answering)

// let i = 1;

// while(i <= 5){

//     if(i === 3){
//         continue;
//     }

//     console.log(i);

//     i++;
// }
                        // ye smjh nhi aya mujhe
// // 1 2 4 5


