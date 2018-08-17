// (function() {
    "use strict";


   var car = {}
   car.make = "Toyota";
   car.model = "Celica";
   car.year = "2002";

    console.log("Make: " + car.make);
    console.log("Model: " + car.model);
    console.log("Year: " + car.year);
    // car.honk = function (){
   //     alert("Honk!, Honk!")
   // }
   //
   //
   // car.honk()
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     */
    var person = {};
    person.firstName = "Alfred";
    person.lastName = "Longoria";
    person.age = "42";
    person.sayHello = function() {
        alert("Hello! I'm " + person.firstName + person.lastName + ".");
        // console.log("Hello! " + person.firstName + person.lastName);
    }
    person.sayHello();
    console.log(" First Name: " + person.firstName);
    console.log(" Last Name: " + person.lastName);
    console.log( "Age: " + person.age);

    /**
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     *
     * HEB Shoppers who purchase more than 200+ get 12% discount.
     * Write a JS program using conditionals that logs to the browser how much
     * 3 different shoppers need to pay. (Cameron bought $180, Ryan $250 and George $320)
     *
     * Write a JS program that will display a line with the name of the person the amount before the
     * discount, the discount if any and the amount after the discount.
     * Use a foreach loop to iterate through the array and console.log the relevant ---
     * -------------------            message for each person.-----------
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper) {
        var total;
        var discount = 0;

        if (shopper.amount > 200) {
            discount = shopper.amount * .12;
            total = shopper.amount - discount;
        } else {
            total = shopper.amount;
        }

        console.log("Shopper, " + shopper.name + "purchase" + "$" + shopper.amount + " of products. " + discount + total);

    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = []
    books.push({title:"Cat In The Hat", author: { firstName:"Dr.", lastName: "Suess" }});
   books.push({title:"Land The Tech Job You Love", author: { firstName: "Andy", lastName: "Lester"}});


    books.forEach(function (book){
        console.log(book.title);
        console.log(book.author);
    })

    var music = []
    music.push({band: "Madeline Orange", Musicians: {Mandoline: "James Jameson", Violin: "Chirstina Wood", Drums: "Jefferson"}})

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    var bookListing = function(book, bookNumber){
        console.log("book #" + bookNumber);
        console.log("title: " + book.title);
        console.log("Authour" + book.author.firstName + " " + book.author.lastName);

    }
    // bookListing(books[3], 3);
    books.forEach(function(book, id){
        bookListing(book, id+1);
    });
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    var createBook = function (title, author) {
        var book = {};
        book.title = title;
        if (typeof author === "string"){
            var names = author.split("");
            var authobj = {
                firstName: names[0],
                lastName: names[1]
            }
        }
        else if (typeof author === "object"){
            book.author = author;
        }
        return book;
    }
    console.log(createBook())

// var showBookInfo = function (book, bookNumber){
//
// }
// });