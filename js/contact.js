/*jslint browser: true*/
/*global $, jQuery, TweenMax, TimelineMax, Power4*/
/* jslint expr: true */

/* ============================= TYPE ================================ */

var typewriter = require('typewriter');
var twSpan = document.getElementById('typewriter_contact');
var tw = typewriter(twSpan).withAccuracy(95)
                             .withMinimumSpeed(5)
                             .withMaximumSpeed(17)
                             .build();
tw.type('Embarquez à bord du vaisseau C2. ')
    .waitRange(500, 1000)
    .put('<br/>')
    .waitRange(1000, 1500)
    .type('Notre mission, donner du sens à vos projets,')
    .waitRange(1000, 1500)
    .put('<br/>')
    .type('pour aller toujours plus loin.')
    .waitRange(1000, 1500)
    .put('<br/>')
    .type('Communication en cours…');

/* ============================= BURGER ================================ */
$(function () {
    "use strict";

    function getH() {return window.location.hash; }
    function setH(h) {window.location.hash = h; }

    function tweenreset() {
        TweenMax.to('#navbar', 0.7, {top: '-100%'});
    }

    function toMenu() {
        TweenMax.to('#navbar', 0.7, {top: '0%'});
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
});