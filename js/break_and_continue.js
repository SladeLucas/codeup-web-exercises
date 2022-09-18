(function(){
'use strict';
    let odd;
    while(1) {
        odd = prompt("Enter an odd number between 1 and 50")
        if(odd % 2 !== 0) break;
    }
    for(let i = 0; i < 50;i++){
        if(i == odd) {
            console.log(`Yikes! Skipping number: ${i}`);
            continue;
        }else if(i % 2 !== 0){
            console.log(`Here is an odd number: ${i}`);
        }
    }


})();