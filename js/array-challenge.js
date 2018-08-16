//
// Challenge #1:
//
// Define a function named allIndexesOf that takes in two arguments.
var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//    noun, array value count  (iterate = move across a list(array)).Loops are a way to iterate.
// count / result
//


//           (   parameter - variables   array and element )
function allIndexesOf(array, element) {
    solution=0;
    for(i=0; i<4; i++);{

        console.log(array.indexOf);
       console.log(array.pop(element))
    }
    return solution;
    array.indexOf(element);
    // return console.log(element);
    console.log (array.indexOf(element))
    // search.valueOf(fruits);
}
allIndexesOf(fruits, "apple");



// allIndexesOf(search2.valueOf(0,3));
// console.log(search1.indexOf("apple, apple"));
// console.log(search2.valueOf([]));

// allIndexesOf(fruits, "guava");
// allIndexesOf(fruits, "pineapple");
// console.log(fruits.indexOf([]));
// console.log(fruits.indexOf("pineapple"));
function allIndexesOf(array, value) {
    var output = [];

    array.forEach(function(element, index) {
        if(element === value) {
            output.push(index);
        }
    });

    return output;
}

console.log("The indexes where 'apple' occurs in the fruits array is: " + allIndexesOf(fruits, "apple"));
console.log("The indexes where 'dragonfruit' occurs in the fruits array is: " + allIndexesOf(fruits, "dragonfruit"));

//
// }
// The first argument should be the array to search and the second argument should be the value you want to search for.
// If the item does not exist in the provided array, return an empty array;
//
// Given:
//     var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
// allIndexesOf(fruits, "apple") should return the array [0, 3]
// allIndexesOf(fruits, "guava") should return the array []
// allIndexesOf(fruits, "pineapple") should return [4]
//
//
// Challenge #2
// Define a function named removeAll(array, value) that takes in two arguments.
// The first argument should be an array and the second argument should be a value you wish to
//
// Given:
//     var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
//
// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
//
// removeAll(bugs, "roach") should return the original array b/c "roach" has no occurrances.
//
// function removeAll(array2,itemToRemove){
//     var output =[];
//     array2.forEach(function(element)){
//
//         if (itemToRemove !== element){
//
//             output.push(element);
//         }
//     }
//     return output;
// }
// console.log("The array[2,2,4] with all the 2s removed is:"   + removeAll([2,2,4],2));