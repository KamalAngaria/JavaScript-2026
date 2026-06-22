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

Day 3 of Learning Javascript