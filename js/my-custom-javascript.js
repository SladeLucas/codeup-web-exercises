"use strict";

$('h1').click(
    function () {
        $(this).css('background-color', '#FF0');
    }
);

$('p').dblclick(function(e) {
    $(this).css('font-size', '18px');
});

$('li').hover(
    function() {
        $(this).css('background-color', '#FF0000');
    },
    function() {
        $(this).css('background-color', '#000000');
    }
);