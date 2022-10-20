"use strict";

$('h1').click(
    function () {
        $(this).css('background-color', '#FF0');
    }
);

$('p').dblclick(function(e) {
    $(this).css('font-size', '18px');
});