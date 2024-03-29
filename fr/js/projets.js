/*jslint es6 */
/*jslint browser: true*/
/*global $, jQuery, TweenMax, TimelineMax, Power4*/
/* jslint expr: true */


$(function () {
    "use strict";

/* ============================= BURGER ================================ */
    
    function getH() {
        return window.location.hash;
    }
    function setH(h) {window.location.hash = h;}

    function tweenreset() {
        TweenMax.to("#navbar", 0.1, {top: "-100%"});
    }

    function toMenu() {
        TweenMax.to("#navbar", 0.1, {top: "0%"});
    }

    function toView(route) {
        switch (route) {
        case "#navbar":
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
            $('body').css('overflow-y', 'hidden');
            $('.close_menu').delay(800)
                .queue(function (next) { 
                    $(this).css('display', 'block'); 
                    next(); 
                });
            $('body').css('overflow-y','hidden');
        } else {
            toView('home');
            $('.hamburger-button').css('z-index', '9999');
            $('.menu_name').css('display', 'block');
            $('.close_menu').css('display', 'none');
            $('body').css('overflow-y','scroll');
        }
    });
    
/* ============================= TYPE ================================ */

    var typewriter = require('typewriter'),
        twSpan = document.getElementById('typewriter'),
        tw = typewriter(twSpan).withAccuracy(95)
            .withMinimumSpeed(5)
            .withMaximumSpeed(17)
            .build();
    tw.type('Nos réalisations. Bon voyage ');

    toView(getH());
});

/* ============================= SCROLL ANIMATION ================================ */
    
    $(window).scroll(function () {
        $(".anim .card").each(function () {
            const position = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll > position - windowHeight) {
                $(this).addClass("active");
            }
            if (scroll < 100) {
                $(this).removeClass("active");
            }
        });
    });

var mq = window.matchMedia("(max-width: 480px)");
  
    if (mq.matches) {
         $('.anim').toggleClass('wrapp');
    }