(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 5,

        getArea: function () {
            // TODO: complete this method
            let area = Math.PI * Math.pow(this.radius, 2);

            return area // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding == true){
                return console.log(Math.round(this.getArea()));

            }else {
                return console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
    //Radius of 3 returned 28.stuff and 28 when rounded.
    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    // Didn't say you need both outcomes to read at the same time!
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();