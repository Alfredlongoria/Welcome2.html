// if (confirm("Do you want to play a game")){
//     var magicNumber = Math.floor((Math.random() *100)+1);
//     var ourGuess;
//     do {
//         ourGuess = parseInt(prompt("Guess a number between 1 and 100"))
//         if (ourGuess < magicNumber){
//             alert("Your Guess is too low");
//         }else if (ourGuess>magicNumber){
//             alert("your guess is too high")
//         }
//     }while (ourGuess !== magicNumber)
//     alert("Congratulations, you guessed it!")
// }
//
// var count = 0
// while (count < 10){
//     console.log (count);
//     count ++
// }
//
// for (var count1 = 0; count <10; count1 ++) {
//     console.log(count1);
// }
//
// for (var i=0; i< 10; i++) {
//     console.log(i);
// }
// for (intialization; condition; increment){
//     console.log(i);
// }

"use.strict";

var count = 2;
while (count <= 65536){
    console.log(count);
     count *=2;
    }

    var count1 = 3;
while (count1 <= 1594323){
    console.log(count1);
    count1 *=3;
}

var count3 = 4;
while (count3 <= 65536){
    console.log(count3);
    count3 *= 4;
}

var num = 5;
var end = 390625;

while(num <= end){
    console.log(num);
    num = num *2;
}
//ice cream seller must sell all her cones.
// each client purchases between 1 and 5 cones.
//do a do-while loop to log the amount of cones sold to each person.
//(this is how you get random numbers).
var allCones = Math.floor(Math.random()* 50)+ 50;
console.log(allCones);

do {
    var conesOrdered = Math.floor(Math.random() * 5) + 1;

    if (conesOrdered > allCones) {
        console.log("Cannot sell you " + conesOrdered + " I only have " + allCones)
    }

    else if (conesOrdered === allCones) {
        allCones = allCones - conesOrdered;
        console.log("Sold exactly " + conesOrdered + " cones");
    }

    else  {
        allCones = allCones - conesOrdered;
        console.log("Sold " + conesOrdered + " cones");
   }

   console.log("I have " + allCones + " cones left.");

} while (allCones > 0);


console.log ("I'm all sold out! ");




// var allCones1 = Math.floor(Math.random()*50) +50;
// var conesOrdered2;
//
//
// do {
//     conesOrdered2 = Math.floor(Math.random() * 5) + 1;
//
//     if (conesOrdered2 > allCones1) {
//         console.log("I cannot sell you" + conesOrdered2 + "I only have" + allCones1);
//     } else if (conesOrdered2 === allCones1) {
//         console.log(conesOrdered2 <= 0);
//         while (allCones1 > 0) ;
//         console.log("I'm sold out")
//     }
// }
