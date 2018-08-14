"use.strict"

// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70
// Create a function named showMultiplicationTable
// that accepts a number and
// console.logs the multiplication table for that number
// (just multiply by the numbers 1 through 10)


function showMultiplicationTable(num) {

    for(var i = 1; i<= 10; i++){
        console.log(num + " x " + i + " = " +(num * i));
    }
}


showMultiplicationTable(5);
showMultiplicationTable(7);
showMultiplicationTable(20);

function showMultiplication (number) {
    for (var i = 1; i <= 10; i++){
        console.log(number + " z " + i + " = " + (number * i));
    }
}


showMultiplication(9);

// Use a for loop and the code from
// the previous lessons to generate 10 random numbers
// between 20 and 200 and output to the console whether each number
// is odd or even. For example:

function randomNumber (min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

var message;
var number;

for(var i = 0; i <= 10; i++){
    number = randomNumber(20, 200);
    message = "";
    if(number % 2 === 0){
        message = "is even";
    } else {
        message = "is odd";
    }
}
console.log(number + message);
//loop is going to run 9 times.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
//
// var output;
// for (var i = 1; i <= 9; i++){
//     output = "";
//     for (j = 1; j<= i; j++){
//         output += i"" ;
//         ""
//     } =
// }