"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
    return "Hello, " + name + "!";
}
// console.log(sayHello("codeup"));//before return
// console.log("Hello, codeup!");// after return

function sayHelloPrint(name) {
    console.log(("Hello, " + name + "!"));
    //return is nothing, ie = undefined
}
// sayHelloPrint("bobby");
// console.log("comment " + sayHelloPrint("bobby"));
// console.log("comment " + undefined);

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
// functionName(input); <- call function
// function functionName(inputName){ inputName used internally } <-create function
//var varName = value
sayHello("Alfred");
var helloMessage = sayHello("Alfred");
// console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "Alfred";
// console.log(sayHello(myName)); //step 1
// console.log(sayHello("Alfred")); //step 2
// console.log("Hello, Alfred!"); //step 3


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1); // Math.random()* (max - min)) + offset <-not accurate

// The Math.floor() function returns the largest integer less than
// or equal to a given number.

// floor(), which rounds down to the nearest integer
// ceil(), which rounds up to the nearest integer
// round(), which rounds to the nearest integer

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
// = <- reassign variable
// == <- equal in value
// === <- equal in value and type
// "5" === 5 <-false
// "5" == 5 <-true

function isTwo(number) {
    return number === 2;
}

// console.log(isTwo(1)); // returns false
// console.log(isTwo(2)); // returns true
// console.log(isTwo(3)); // returns false
// console.log(random + " <- this number is equal to 2 -> " + isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(percent, total) {
    return percent * total
}

// console.log(calculateTip(0.20, 20)); // returns 4
// console.log(calculateTip(0.25, 25.50)); // returns 6.37
// console.log(calculateTip(0.15, 33.42)); // returns 5.013

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

var total = prompt("What is your bill total? ");
var percent = prompt("How much would you like to tip in decimal? (ie 5%, enter 0.05");
alert("You should tip $" + calculateTip(percent, total));


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */


function applyDiscount(originalPrice, discountPercent) {
    return originalPrice * discountPercent;
}
   var discountedPrice = originalPrice - discountPercent;
   console.log (applyDiscount + "Your original price of " + discountPercent + "leaves you with a grand total of " + discountedPrice);
//
//
//     //accept a price before a discount is applied. (a number 0 and 1)
//     // return a result applying the discount to the original price

