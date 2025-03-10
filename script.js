/* This is a MULTI-LINE COMMENT
The code below is an example STATEMENT
(instruction/command) 
Every STATEMENT ends in a SEMICOLON (;)
 */
console.log("Welcome to JavaScript!");

// This is a SINGLE-LINE COMMENT

// console.log() is a FUNCTION that displays info
console.log("My name is Zach");

// DECLARE a new variable (buying a box)
let luckyNumber;

// ASSIGN a value to that variable // (putting an item in a box)
luckyNumber = 26;

//DECLARE + ASSIGN in one statement
let worstNumber = 21;

//You can "PASS IN" a variable into a function
console.log(luckyNumber);
console.log(worstNumber);

// Can change the value stored in a variable 
let mood = "happy";
console.log(mood);
mood = "sad";
console.log(mood);

// We can copy the value from one variable into another
let isHappy = true;
let isThrilled;
isThrilled = isHappy;
console.log(isThrilled); 

// MATH OPERATIONS
let score = 0;
score = score + 5;
console.log(score);
score = score - 10;
console.log(score);
score = score * (-3);
console.log(score);
score = score / 5;
console.log(score);

// Can combine multiple operators in one statement
// Order of evaluation follows PEMDAS!
score = (score ** 2 - 23 + 4) * 2 / 4;
console.log(score);

// STRING CONCATENATE (merging) 
// Concatenate two string LITERALS
// String literals are contained in "Quotes"
let greeting = "Hello " + "Friend";
console.log(greeting);
 
// Can combine variables with string literals
let username = "zackexx26";
console.log("Welcome, " + username + "!!!");

//Concatenation will convert non-String data
console.log( 4 + 5 ); // add numbers
console.log( "4" + 5 ); // 45
console.log( 4 + '5'); // same as above

// SHORTCUT OPERATORS (Increment/Decrement)
let counter = 0;
counter = counter + 1; // LONG WAY
counter++; // SHORT WAY (does the same thing)
console.log(counter);
counter--;
console.log(counter);




