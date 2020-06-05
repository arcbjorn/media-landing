/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// variables
var $sidebar = $( ".sidebar" );
var $nav = $( "nav" );


// toggle menu
$sidebar.find( "a" ).on( "click", function() {
  $( this ).parent().toggleClass( "open-menu" );
} );


// fullpage customization
$( "#fullpage" ).fullpage( {
  sectionsColor: [ "#FEFCF7", "#FFFFFF" ],
  sectionSelector: ".vertical-scrolling",
  controlArrows: false,
  anchors: [ "home", "contact" ],
  menu: "#menu",

  afterLoad: function( anchorLink, index ) {
    $nav.css({
      "background": "rgba(252, 249, 240, .5)"
    });
  },

  afterRender: function () {
    $(".preference-slider").ionRangeSlider({
      skin: "round",
      type: "single",
      min: 0,
      max: 100,
      grid: false,
      grid_margin: false,
      hide_min_max: true,
      prefix: "на все ",
      postfix: "%",
    });
    $(".time-slider").ionRangeSlider({
      skin: "round",
      type: "double",
      from: 35,
      to: 44,
      min: 0,
      max: 100,
      grid: false,
      grid_margin: false,
      hide_min_max: true,
      postfix: " мин.",
    });
    $(".radio").on("click", function () {
      $(this).toggleClass("radio--clicked");
    });
    $("#phone").mask("+7 (999) 999-9999");
    $(document).ready(function () {
      var parallaxItem = $('#grains')[0];
   
      $('#parallax').mousemove(function (e) {
        parallax(e, parallaxItem);
      });
    function parallax(e, target) {
    
      var x = ($('#parallax').width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / 20;
      var y = ($('#parallax').height() - target.offsetHeight) / 20 - (e.pageY - ($(window).height() / 20)) / 20;
  
      $(target).offset({
        top: y,
        left: x,
      });
    };
  });
  },
} );