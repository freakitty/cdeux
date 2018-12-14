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
tw.type('You are not alone');

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
    
    /* ============================= AFFORDANCE ================================ */
    
    $(window).scroll(function () {
        $(".affo_brain").css("opacity", 1 - $(window).scrollTop() / 250);
    });

    /* ============================= TEXT INTRO ================================ */
    
    var mq = window.matchMedia("(max-width: 780px)");
  
    if (mq.matches) {
        $('.smart_txt').css('color', '#fff');
        (function () {
            var wordsCom = [
                'web',
                'print',
                'community management',
                'communication'
            ], a = 0;
            setInterval(function () {
                $('.com').fadeOut(function () {
                    $(this).html(wordsCom[a = (a + 1) % wordsCom.length]).fadeIn();
                });
                
            }, 4000);
        
        })();
    } else {
        $(".com").hover(function () {
            $(".com ul").addClass("active");
        }, function () {
            $(".com ul").removeClass("active");
        });
    
        $(".human").hover(function () {
            $(".human ul").addClass("active");
        }, function () {
            $(".human ul").removeClass("active");
        });
    
        $(".evolve").hover(function () {
            $(".evolve ul").addClass("active");
        }, function () {
            $(".evolve ul").removeClass("active");
        });
    
        $(".hey").hover(function () {
            $(".hey ul").addClass("active");
        }, function () {
            $(".hey ul").removeClass("active");
        });
    }
});