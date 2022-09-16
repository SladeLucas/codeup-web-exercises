(function (){
"use strict";
//console.log("sanity check");
function showMultiplicationTable(x){
    for (let i = 1; i <= 10; i++) {
        const result = i * x;
        console.log((`${x} * ${i} = ${result}`));
    }
}
showMultiplicationTable(7)
    for (let i = 0; i < 10; i++) {
        let randomNum = Math.floor(Math.random() * 180 + 20);
        if (randomNum % 2 == 0) {
            console.log(randomNum + " is even")
        } else {
            console.log(randomNum + " is odd")
        }
    }

for(let i=1; i<10; i++){
    let Num='';
    for(let j=0; j<i; j++){
        Num += i;
    }
    console.log(Num);
}
for (let i=100; i > 0; i -= 5){
    console.log(i);
}

})();