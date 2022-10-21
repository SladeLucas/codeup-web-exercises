"use strict";


$('.invisible').css({
    'visibility': 'hidden'
});

$('dd').addClass('invisible');

$(document).ready(function() {
    $('p').click(function(event) {
        event.preventDefault();
        $('dd').toggleClass('important');
        $('dd').toggleClass('invisible');
    });
});

$(document).ready(function() {
    $('dt').click(function(event) {
        event.preventDefault();
        $('dd').toggleClass('highlighted');
        $('body').css('background-color', 'yellow');
    });
});
//$('.important').css({
//        "color": 'red',
//        'visibility': 'visible'
//    }
//);
$("#reset").click(function(e){
    location.reload();
});