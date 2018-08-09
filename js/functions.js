"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!" */

function sayHello(name) {
var output = "Hello from all the Beatles" + name;
return output;
}
var helloMessage = sayHello=("Alfred");
console.log (helloMessage);

// console.log("John lennon says " + sayHello(name));

// function makeJuice(fruit) {
//     var output = ""
//
// }

function toPrice(input) {
    var output = "$" + input;
    return output;
}
 var candybar = 2;
console.log ("The price of this candy-bar is " + toPrice(candybar));

// function printAmount() { console.log(amount.tofixed(2));
// }
// var amount = 99.99;
// printAmount(); //"99.99"
// amount = amount * 2;
// printAmount();
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */


// function sayHello2(greetings) {
//     var = "helloMessage";
//     console.log ("Hi !" + sayHello(""));
//
//     sayHello2("What's up!");
//     sayHello2("How are you?");
//     sayHello2("Top of the Morning!");
//
// }
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random

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
function isTwo(num) {
    if (num === 2) {
        return true;
    }
    else {
        return false;
    }
}
console.log(random);
console.log (isTwo(randon));
    // return num === 2
    // var is2 = (num == 2)
isTwo(random);


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


function calculateTip(billTotal, percentage) {
    return billtotal * percentage;
}
    console.log(calculateTip(.20, 20) + "should return 4");
    console.log (calculateTip(.15, 33.42) + "should return 5.013");




/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

var totalCost= prompt("Total purchased price");




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
var =originalPrice
function applyDiscount(originalPrice, discountPercent) {
    return originalPrice * discountPercent;
}
   var discountedPrice = originalPrice - discountPercent;
   console.log (applyDiscount + "Your original price of " + discountPercent + "leaves you with a grand total of " + discountedPrice);


    //accept a price before a discount is applied. (a number 0 and 1)
    // return a result applying the discount to the original price

}