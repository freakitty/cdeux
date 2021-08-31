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

/* ============================= LINES ================================ */

function Properties(){
    this.segments = 12,
    this.growth = 180,
    this.step = 0.01,
    this.rows = 42,
    this.lineDiff = 0.054,
    this.curveDiff = 1,
    this.lineWidth = 1,
    this.lineColor = '#71fa69',
    this.bgColor = '#F0F0F0';
}

var mouseX;
var mouseY;


// Perlin noise function creted by Banksean
// https://gist.github.com/banksean/304522
var ClassicalNoise=function(a){void 0==a&&(a=Math),this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.p=[];for(var b=0;b<256;b++)this.p[b]=Math.floor(256*a.random());this.perm=[];for(var b=0;b<512;b++)this.perm[b]=this.p[255&b]};ClassicalNoise.prototype.dot=function(a,b,c,d){return a[0]*b+a[1]*c+a[2]*d},ClassicalNoise.prototype.mix=function(a,b,c){return(1-c)*a+c*b},ClassicalNoise.prototype.fade=function(a){return a*a*a*(a*(6*a-15)+10)},ClassicalNoise.prototype.noise=function(a,b,c){var d=Math.floor(a),e=Math.floor(b),f=Math.floor(c);a-=d,b-=e,c-=f,d&=255,e&=255,f&=255;var g=this.perm[d+this.perm[e+this.perm[f]]]%12,h=this.perm[d+this.perm[e+this.perm[f+1]]]%12,i=this.perm[d+this.perm[e+1+this.perm[f]]]%12,j=this.perm[d+this.perm[e+1+this.perm[f+1]]]%12,k=this.perm[d+1+this.perm[e+this.perm[f]]]%12,l=this.perm[d+1+this.perm[e+this.perm[f+1]]]%12,m=this.perm[d+1+this.perm[e+1+this.perm[f]]]%12,n=this.perm[d+1+this.perm[e+1+this.perm[f+1]]]%12,o=this.dot(this.grad3[g],a,b,c),p=this.dot(this.grad3[k],a-1,b,c),q=this.dot(this.grad3[i],a,b-1,c),r=this.dot(this.grad3[m],a-1,b-1,c),s=this.dot(this.grad3[h],a,b,c-1),t=this.dot(this.grad3[l],a-1,b,c-1),u=this.dot(this.grad3[j],a,b-1,c-1),v=this.dot(this.grad3[n],a-1,b-1,c-1),w=this.fade(a),x=this.fade(b),y=this.fade(c),z=this.mix(o,p,w),A=this.mix(s,t,w),B=this.mix(q,r,w),C=this.mix(u,v,w),D=this.mix(z,B,x),E=this.mix(A,C,x),F=this.mix(D,E,y);return F};

var canvas,
    ctx,
    segmentSize,
    number,
    n,
    prop = new Properties();


function onMouseMove(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

$(document).ready(function() {  
    canvas = document.getElementById("myCanvas");
    calculateResize();
    ctx = canvas.getContext("2d");
    canvas.addEventListener("mousemove", onMouseMove);
    mouseX = 0;
    mouseY = 0;
    n = new ClassicalNoise();
    init();
  
    segmentController.onChange(function(){
      calculateResize();
    })
  
    $(window).resize(function(){
      calculateResize();
    });
    
});

function init(){
  number = 0;
  iterate();
}

function calculateResize(){
  canvas.width = $( window ).width();
  canvas.height = $( window ).height();
  segmentSize = distance( 0, canvas.height/2, canvas.width, canvas.height/2) / prop.segments;
}

function iterate(){ 
  clearCanvas();
  for(var i = 1; i <= Math.floor(prop.rows); i++){
    drawCurve(i);
  }
  number += prop.step;
  setTimeout(function() {iterate()}, 50);
}

function drawCurve(row){
  var height = ((canvas.height / 2) / (prop.rows + 2) * row) + canvas.height / 4;
  prop.growth = Math.min(400, mouseY / 3 + 100);
  var initialNoise = n.noise(number, row * prop.lineDiff, 1);
  var path = 'M0,' + Math.round((height) + (initialNoise * prop.growth));
  ctx.save();
  ctx.strokeStyle = prop.lineColor;
  ctx.lineWidth = prop.lineWidth;
  ctx.beginPath();
  for(var i = 1; i <= prop.segments; i++){
    var noise1 = n.noise(number, row * prop.lineDiff, i * prop.curveDiff);
    var noise2 = n.noise(number, row * prop.lineDiff, (i-0.5) * prop.curveDiff);
    path = path + ' S' + Math.round((segmentSize * (i-1)) + segmentSize / 2) + ',' + 
      Math.round((height) + (noise1 * prop.growth)) + ' ' + 
      Math.round(segmentSize * i) + ',' + 
      Math.round((height) + (noise2 * prop.growth));
  };

  ctx.stroke(new Path2D(path));
	ctx.restore();
}

function clearCanvas(){
  ctx.save();
  ctx.fillStyle = prop.bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}

function distance(x1, y1, x2, y2){
  return Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 );
}