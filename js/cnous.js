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
            $('.menu_name').css('display', 'none');
            $('.close_menu').delay(800)
                .queue(function (next) { 
                    $(this).css('display', 'block'); 
                    next(); 
                });
            $('body').css('overflow-y','hidden')
        } else {
            toView('home');
            $('.hamburger-button').css('display', 'block');
            $('.menu_name').css('display', 'block');
            $('.close_menu').css('display', 'none');
            $('body').css('overflow-y','scroll')
        }
    });
    
    /* ============================= AFFORDANCE ================================ */
    
    $(window).scroll(function () {
        $(".affo_brain").css("opacity", 1 - $(window).scrollTop() / 250);
    });
    
    $(".affo_brain").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},
        'slow');
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
        
        $(".pixel").hover(function () {
            $(".pixel ul").addClass("active");
        }, function () {
            $(".pixel ul").removeClass("active");
        });
        
        $(".inno").hover(function () {
            $(".inno ul").addClass("active");
        }, function () {
            $(".inno ul").removeClass("active");
        });
        
        $(".ux").hover(function () {
            $(".ux ul").addClass("active");
        }, function () {
            $(".ux ul").removeClass("active");
        });
        
        $(".mac").hover(function () {
            $(".mac ul").addClass("active");
        }, function () {
            $(".mac ul").removeClass("active");
        });
        
        $(".placard").hover(function () {
            $(".placard ul").addClass("active");
        }, function () {
            $(".placard ul").removeClass("active");
        });
        
        $(".md").hover(function () {
            $(".md ul").addClass("active");
        }, function () {
            $(".md ul").removeClass("active");
        });
    }
    
    /* ============================= ATTR IMG PORTRAIT ================================ */
    
    /*$(".dot_cindy").click(function(){
        $(".img_cindy").attr("src","images/cindyprofil.png");
        $('.img_cindy').css('z-index', '200');
    });*/
    
    $('.dot_cindy').on('click', function () {
        var imageEnCours = $('.img_cindy').attr('src');
        $('.img_cindy').fadeOut(300, function () {
            if (imageEnCours === 'images/cindy-photo-portfolio.png') {
                $('.img_cindy').attr('src', 'images/cindyprofil.png').fadeIn(300);
                $('.img_cindy').css('z-index', '200');
            } else {
                $('.img_cindy').attr('src', 'images/cindy-photo-portfolio.png').fadeIn(300);
                $('.img_cindy').css('z-index', '0');
            }
        });
    });
    
    $('.dot_ceci').on('click', function () {
        var imageActuelle = $('.img_cecilia').attr('src');
        $('.img_cecilia').fadeOut(300, function () {
            if (imageActuelle === 'images/Ceci-photo-portfolio.png') {
                $('.img_cecilia').attr('src', 'images/ceciprofil.png').fadeIn(300);
                $('.img_cecilia').css('z-index', '200');
            } else {
                $('.img_cecilia').attr('src', 'images/Ceci-photo-portfolio.png').fadeIn(300);
                $('.img_cecilia').css('z-index', '0');
            }
        });
    });
    
    $('.dot_middle').on('click', function () {
        $('.img_cecilia').fadeOut(300, function () {
            $('.img_cecilia').attr('src', 'images/Ceci-photo-portfolio.png').fadeIn(300);
            $('.img_cecilia').css('z-index', '100');
        });
        $('.img_cindy').fadeOut(300, function () {
            $('.img_cindy').attr('src', 'images/cindy-photo-portfolio.png').fadeIn(300);
            $('.img_cindy').css('z-index', '0');
        });
    });
    
    toView(getH());
    
});