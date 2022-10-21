"use strict";


//$('.invisible').css({
//    'visibility': 'hidden'
//});
//
//$('dd').addClass('invisible');

//$(document).ready(function() {
//    $('p').click(function(event) {
//        event.preventDefault();
//        $('dd').toggleClass('important');
//        $('dd').toggleClass('invisible');
//    });
//});
//
//$(document).ready(function() {
//    $('dt').click(function(event) {
//        event.preventDefault();
//        $('dd').toggleClass('highlighted');
//        $('body').css('background-color', 'yellow');
//    });
//});
//$('.important').css({
//        "color": 'red',
//        'visibility': 'visible'
//    }
//);
$(document).ready(function() {
    $('h3').click(function(e) {
        e.preventDefault();
        $(this).next().children().css('font-weight', 'bold');
    });
});

$("#highlighter").click(function(e){
    $('li').each( function (index) {
        if (index == 4) {
            $(this).css('background-color', '#FF0');
            $('#coolNP').children().last().css('background-color', '#FF0');
            $('#neature').children().last().css('background-color', '#FF0');
        }
    });
});