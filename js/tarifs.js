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
tw.type('Nos formules de community management');

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


    /* ============================= BOX ================================ */

    function hasClass(el, className) {
        if (el.classList)
        return el.classList.contains(className);
            else
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }

    function addClass(el, classNames) {
        classNames = classNames.split(' ')
        if (el.classList)
        classNames.forEach((classname) => el.classList.add(classname))
            else if (!hasClass(el, className))
            classNames.forEach((classname) => el.className += " " + classname)
    }

    function removeClass(el, className) {
        if (el.classList)
        el.classList.remove(className);
            else if (hasClass(el, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    };

    (function() {
        let lastAnimation = 0,
            sections = Array.prototype.slice.call(document.querySelectorAll('.box')),
            currentSection = 0,
            len = sections.length

        const handleScroll = (e) => {
            e.preventDefault()

            let timeNow = Date.now(),
            newSection,
            delta = e.deltaY
                  ? e.deltaY
                  : ts - e.touches[0].clientY

            if (timeNow - lastAnimation < 2000) {
                return;
            }

            if (delta < 0) {
            // Up
                newSection = (currentSection > 0) ? currentSection - 1 : currentSection
            } else if (delta > 0) {
            // Down
                newSection = (currentSection < len - 1) ? currentSection + 1 : currentSection
            } else { newSection = currentSection }

            if (currentSection !== newSection) {
            // newSection is currentSection now
            // And `old` currentSection is previousSection
                if (currentSection < newSection) {
                // Moving Down
                    removeClass(sections[newSection], 'under')
                    addClass(sections[newSection], 'current')
                    removeClass(sections[currentSection], 'current')
                    addClass(sections[currentSection], 'above')
                } else {
                // Moving Up
                    removeClass(sections[newSection], 'above')
                    addClass(sections[newSection], 'current')
                    removeClass(sections[currentSection], 'current')
                    addClass(sections[currentSection], 'under')
                }

                // Update currentSection
                currentSection = newSection

                sections.forEach((item, index) => {
                // item.style.top = `${(index - currentSection) * 100}vh`
                    item.style.transform = `translateY(${(index - currentSection) * 100}vh)`
                })
            }

        lastAnimation = timeNow
    }

   // first-load
    addClass(sections[currentSection], 'current')
    document.addEventListener('keydown', (ev) => {
        if (ev.keyCode === 38 || ev.keyCode === 40) {
			ev.preventDefault()
			return false
		}
	}, false)

    document.addEventListener('wheel', handleScroll, {passive: false})
    document.addEventListener('touchmove', handleScroll, {passive: false});

    let newSection
    var ts;

    $(document).bind('touchstart', function (e){
        ts = e.originalEvent.touches[0].clientY;
    });

    $(document).bind('touchmove', function(e) {
        var te = e.originalEvent.changedTouches[0].clientY;
        if (ts > te) {
            newSection = (currentSection < len - 1) ? currentSection + 1 : currentSection;
            console.log('down');
        } else {
            newSection = (currentSection > 0) ? currentSection - 1 : currentSection;
            console.log('up');
        }
    });

    const tarifs = $('.box ul')
    tarifs.bind('touchmove', e => {
      if (window.matchMedia("(max-width: 480px)").matches) {
        tarifs.css({marginTop: `+=${e.touches[0].clientY - ts}px`})
        ts = e.touches[0].clientY

        return false
      }
    })

    /* ============================= AFFORDANCE ================================ */

    $("html, body").bind("mousewheel", function(){
        if ($('.current').hasClass("atome_page")) {
            $(".affo_tarifs").css("opacity", '0')
        } else {
            $(".affo_tarifs").css("opacity", '1');
        }
    });

    $("html, body").bind("touchmove", function(){
        if ($('.current').hasClass("atome_page")) {
            $(".affo_tarifs").css("opacity", '0')
<<<<<<< Updated upstream
=======
            document.addEventListener('scroll', handleScroll)
>>>>>>> Stashed changes
        } else {
            $(".affo_tarifs").css("opacity", '1');
        }
    });

})()

    toView(getH());

});
