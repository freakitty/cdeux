/*jslint browser: true*/
/*global $, jQuery, TweenMax, TimelineMax, Power4*/
/* jslint expr: true */

/* ============================= TYPE ================================ */

var typewriter = require('typewriter');
var twSpan = document.getElementById('typewriter');
var tw = typewriter(twSpan).withAccuracy(95)
                             .withMinimumSpeed(5)
                             .withMaximumSpeed(17)
                             .build();
tw.type('Hello world ')
    .waitRange(500, 1000)
    .put('<br/>')
    .waitRange(1000, 1500)
    .type('Ici C2')
    .waitRange(1000, 1500)
    .put('<br/>')
    .type('Communication établie');

/* ============================= BURGER ================================ */
$(function () {
    "use strict";

    function getH() {return window.location.hash; }
    function setH(h) {window.location.hash = h; }

    function tweenreset() {
        TweenMax.to('#navbar', 0.7, {top: '-100%'});
    }

    function toMenu() {
        TweenMax.to('#navbar', 0.7, {top: 0});
    }

    function toView(route) {
        switch (route) {
        case '#navbar':
            setH(route);
            toMenu();
            break;
        default:
            tweenreset();
            setH('');
        }
    }

    window.addEventListener("hashchange", console.log('test'));
    $("#burger").on('click', function () {
        if ($('#navbar').offset().top < 0) {
            tweenreset();
            toView('#navbar');
            $('.hamburger-button').css('display', 'none');
            $('.close_menu').css('display', 'block');
        } else {
            toView('home');
            $('.hamburger-button').css('display', 'block');
            $('.close_menu').css('display', 'none');
        }
    });
    
    
    var vid = document.getElementById('vid_intro');
    if (vid) {
        vid.addEventListener('ended', function () {
            $(this).css({'display': 'none'});
            $('#skip').css({'display': 'none'});
        });
    }
    
    $('#skip').on('click', function () {
        $(this).css({'display': 'none'});
        $('#vid_intro').css({'display': 'none'});
    });
    
    $("#ufo").on('click', function () {
        $("#vid_intro").css('display', 'block');
        $("#skip").css('display', 'block');
        if (vid.paused ) {
          vid.play();    
        }
    });
    
});