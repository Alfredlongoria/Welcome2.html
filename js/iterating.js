// var list= function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */


    var names = ["Glen", "Rick", "Vashawn", "Carol"];

/**
* TODO:
* Create a log statement that will log the number of elements in the names
* array.
*/
        console.log (names.length);


/**
 * TODO:
 * Create log statements that will print each of the names individually by
 * accessing each element's index.
 */
        console.log (names [0]);
        console.log (names [1]);
        console.log (names [2]);
        console.log (names [3]);



    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

        for (var i = 0; i < names.length; i++) {
            console.log(names[i]);
        }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
//     function thank(name){
//         console.log("thanks " + name + " for the great show");
//         names.forEach(thank);
//         names.forEach(function(names){
//             console.log(name + "!");
//         }
//     });
// .forEach(function(name, index)){
//         names[index] = name.toUpperCase()
// });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
var list=["Job1", "Job2", "Job3"]
function Job1(input) {
     if(array.isArray(input)){
         return input [input];
     }
    }
function Job2(input){
    if(array.isArray(input)){
        return input [1];
    }
}
function Job3(input) {
    if(array.isArray(input)){
        return input [2];
    }
}
console.log ("My Job List",list);
list.push("Job4");

var num= ["1","2","3","4","5","6"];

num.array.forEach(function(even) {
    console.log("Output even number, " + num);

})

// make an array containing 20 random numbers between 1 and 6
// var num =["1","3","4","5","1","2","3","4","1","6","5","2","2","4","2","1","6","3","2","4"];

    // num.forEach(function (element, index, array) {
    //
    // });

    // Math.floor(Math.random()* 6);
//make a forEach that only outputs the even numbers

//make a forEach that adds 10 to each numbers make a