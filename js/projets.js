/*jslint browser: true*/
/*global $, jQuery, TweenMax, TimelineMax, Power4*/
/* jslint expr: true */

$(function () {
    "use strict";

/* ============================= BURGER ================================ */
    
    function getH() {return window.location.hash; }
    function setH(h) {window.location.hash = h; }

    function tweenreset() {
        TweenMax.to('#navbar', 0.7, {top: '-100%'});
    }

    function toMenu() {
        TweenMax.to('#navbar', 0.7, {top: '0px'});
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
        .put('<br/>')
        .waitRange(1000, 1500)
        .type('cette page est actuellement')
        .waitRange(1000, 1500)
        .put('<br/>')
        .put('<br/>')
        .type('EN CONSTRUCTION');

    
    toView(getH());
});