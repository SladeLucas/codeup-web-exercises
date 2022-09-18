(function () {
"use strict";
    let pow = 0;
    while(Math.pow(2,pow) < Math.pow(2,16)){
        console.log(Math.pow(2,++pow))
    }




    let conesToSell = Math.floor(50 + Math.random()*(100 - 50 + 1));
    console.log(`I need to sell ${conesToSell} cones`)
    do{
        let customerWants = Math.floor(Math.random() * 5) + 1
        if(conesToSell < customerWants){
            console.log(`I can't sell you ${customerWants} cones, I only have ${conesToSell}.`);
        }else if(conesToSell > customerWants){
            conesToSell -= customerWants
            console.log(`${customerWants} cones sold.`);
        }else{
            conesToSell -= customerWants
            console.log("All the cones have been sold!");
        }
    } while(conesToSell > 0);






})();