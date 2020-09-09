/*jslint browser: true*/
/*global $, jQuery, TweenMax, TimelineMax, Power4*/
/* jslint expr: true */

$(function () {
    "use strict";

/* ============================= BURGER ================================ */
    
    function getH() {return window.location.hash; }
    function setH(h) {window.location.hash = h; }

    function tweenreset() {
        TweenMax.to('#navbar', 0.1, {top: '-100%'});
    }

    function toMenu() {
        TweenMax.to('#navbar', .1, {top: '0%'});
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
            $('.hamburger-button').css('z-index', '9');
            $('.menu_name').css('display', 'none');
            $('.close_menu').delay(300)
                .queue(function (next) { 
                    $(this).css('display', 'block'); 
                    next(); 
                });
        } else {
            toView('home');
            $('.hamburger-button').css('z-index', '9999');
            $('.menu_name').css('display', 'block');
            $('.close_menu').css('display', 'none');
        }
    });
    
/* ============================= TYPE ================================ */

    var typewriter = require('typewriter'),
        twSpan = document.getElementById('typewriter'),
        tw = typewriter(twSpan).withAccuracy(95)
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
        .type('Communication établie')
        .waitRange(500, 1000)
        .put('<br/>')
        .type('Design / CM / Web / Conseil');

    
    
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
        if (vid.paused) {
            vid.play();
        }
    });
    
    toView(getH());
});