(function(){
    'use strict'
    function arrayEven(array){
        let even = array.filter(array => {
            return array % 2 === 0;
        });
    }

    arrayEven(even);

    for (let i = 20; i >= 0; i--){
        console.log(i);
    }

    var fruits = ["strawberry","mango", "blueberries","strawberry", "oranges", "banana", "papaya", "kiwi", "strawberry"];



})();