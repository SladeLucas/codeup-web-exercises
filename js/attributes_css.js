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


//$('.important').css({
//        "color": 'red',
//        'visibility': 'visible'
//    }
//);