(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
let person = {};
person.firstName = 'Lucas';
person.lastName = 'Slade';
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
person.sayHello = function() {
    console.log(`Hello from ${person.firstName} ${person.lastName}!`);
}
person.sayHello();
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
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    let discount = .88
    shoppers.forEach(function(shopper) {
        if (shopper.amount > 200){
            console.log(`${shopper.name}s total is: ${shopper.amount} after the discount of 12%, the total is: ${shopper.amount * discount}`);
        } else {
            return console.log(`${shopper.name}s total is: ${shopper.amount} which does not qualify for the discount and is the amount ${shopper.name} will be paying`);
        }
    });
    //console.log(`${shoppers[1].name}s total is: ${shoppers[1].amount} after the discount of 12%, the total is: ${shoppers[1].amount * discount}`);
    //console.log(`${shoppers[2].name}s total is: ${shoppers[2].amount} after the discount of 12%, the total is: ${shoppers[2].amount * discount}`);
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
    let books = [
        {
            title: 'To Kill a Mockingbird',
            author: {
                firstName: 'Harper',
                lastName: 'Lee'
            }
        },
        {
            title: 'The Host',
            author: {
                firstName: 'Stephenie',
                lastName: 'Meyer'
            }
        },
        {
            title: 'The Book Thief',
            author: {
                firstName: 'Markus',
                lastName: 'Zusak'
            }
        },
        {
            title: 'The Selection',
            author: {
                firstName: 'Kiera',
                lastName: 'Cass'
            }
        },
        {
            title: 'The City of Ember',
            author: {
                firstName: 'Jeanne',
                lastName: 'DuPrau'
            }
        }
    ];
    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);

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
    let x = 1
    books.forEach(function(book){
        let indexBook = x++;
        console.log(`Book #${indexBook}
        Title: ${book.title},
        Author: ${book.author.firstName + ' ' + book.author.lastName}
        ---`);
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
    function createBook (input, input2) {
        let Book = {
            Title: input,
            Author: input2
        };
        return Book;
    };
    console.log(createBook('Harry Potter', 'J.K Rowling'));
    console.log(createBook(books[0].title, books[0].author.firstName + " " + books[0].author.lastName));

})();