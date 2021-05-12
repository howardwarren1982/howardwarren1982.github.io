$(document).ready(function() {

/* Sticky nav script*/

var waypoint = new Waypoint({
  element: document.getElementById('stick-nav-trigger'),
  handler: function(direction) {
    if (direction == 'down'){
       $('nav').addClass('sticky');
     }else {
       $('nav').removeClass('sticky');
     }
  },
  offset: '60px'
})


/* Scrolling */

$(".js--scroll-to-plans").click(function(){
  $('html, body').animate({scrollTop: $(".js--section-plans").offset().top}, 1000);
})

$(".js--scroll-to-start").click(function(){
  $('html, body').animate({scrollTop: $(".js--section-featres").offset().top}, 1000);
})


/* Nav Scrolling with id in a tag*/
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  )
})

/* Animations on scrll*/

var waypoint = new Waypoint({
  element: document.getElementsByClassName("js-js--wp-1-trigger")[0],
  handler: function(direction) {
    $('.js--wp-1').addClass('animate__animated animate__fadeIn');
  },
  offset: '60px'
})


var waypoint = new Waypoint({
  element: document.getElementsByClassName("js-js--wp-2-trigger")[0],
  handler: function(direction) {
    $('.js--wp-2').addClass('animate__animated animate__fadeInLeft');
  },
  offset: '60px'
})



var waypoint = new Waypoint({
  element: document.getElementsByClassName("js-js--wp-3-trigger")[0],
  handler: function(direction) {
    $('.js--wp-3').addClass('animate__animated animate__heartBeat');
  },
  offset: '60px'
})


/*Mobile Nav*/

$(".js--nav-icon").click(function(){
  var nav = $(".js--main-nav");
  var icon = $(".js--nav-icon ion-icon");
  nav.slideToggle(200);
  if (icon.attr("name")=="menu-outline"){
    icon.attr('name','close-outline');
  }else {
    icon.attr('name','menu-outline');
  }


})











});
