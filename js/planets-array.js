(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets.unshift('The Sun'));

    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets.push('Pluto'));
    //console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets.pop('The Sun'));

    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets.shift('Pluto'));

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf('Earth') + " is the location of Earth in the planets array");

    console.log("Reversing the order of the planets array.");
    console.log(planets.reverse());

    console.log("Sorting the planets array.");
    console.log(planets.sort());
})();