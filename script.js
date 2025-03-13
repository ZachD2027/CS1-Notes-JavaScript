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

/* FUNCTIONS: 
    Reusable sets of code statements that perform a specific task or process
*/

// Example of DECLARING (creating) a function
function skincare() {
    console.log("1. Double cleanse");
    console.log("2. Apply toner");
    console.log("3. Moisturize");
}
// To CALL (run) our function, say its name
skincare();

/* Functions are like RECIPES: 
   Reliably perform the same set of actions for a consistent result
    PARAMETERS (input) are like the ingrediants
    RETURN values (output) are like the completed meal
*/ 

// Sandwuch-making example of a function
// that requires PARAMETERS and RETURN data
// (takes input, provides output)
function makeSandwich(bread, filling, sauce) {
    // function BODY (procedure/recipe steps)
    let sandwich = filling + " sandwich with " + sauce + " on " + bread;
    return sandwich;
}
// Call a function that returns data
// store the output in a variable!
let burger = makeSandwich("bun", "patty", "ketchup");
console.log(burger);

// TRY the cuntion with different ARGUMENTS (input data)
let caprese = makeSandwich("ciabetta", "mozz", "pesto");
console.log(caprese)

