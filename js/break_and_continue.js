(function(){
'use strict';
    for (let i = 1; i < 50; i++) {
        let x = prompt("Enter an odd number between 1 and 50");
        if (i % 2 !== 0) {
            continue;
        }
        alert("That wasn't an odd number...")
    }
console.log("sanity?")


})();