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

$(document).ready(function() {
    $('#wNationalP').children().click(function(e) {
        e.preventDefault();
        $('#wNationalP').children().first().css('color', 'blue');
    });
});

$(document).ready(function() {
    $('#coolNP').children().click(function(e) {
        e.preventDefault();
        $('#coolNP').children().first().css('color', 'blue');
    });
});

$(document).ready(function() {
    $('#neature').children().click(function(e) {
        e.preventDefault();
        $('#neature').children().first().css('color', 'blue');
    });
});

$('.picture_frame1').css({
   'border': '3px solid blue',
    'width': '100px',
    'height': '100px',
    'background-image': 'url(img/flowers.jpeg)',
    'background-size': 'cover',
    'background-repeat': 'no-repeat'
});

$('.picture_frame2').css({
    'border': '3px solid black',
    'width': '100px',
    'height': '100px',
    'background-image': 'url(img/smile.jpeg)',
    'background-size': 'cover',
    'background-repeat': 'no-repeat'
});

$('.picture_frame3').css({
    'border': '3px solid green ',
    'width': '100px',
    'height': '100px',
    'background-image': 'url(img/wave.jpeg)',
    'background-size': 'cover',
    'background-repeat': 'no-repeat'
});