"use strict";

fetch('https://dog.ceo/api/breeds/image/random Fetch!\n')
    .then(response => console.log(response.json()))
    .catch(error => console.log(error));