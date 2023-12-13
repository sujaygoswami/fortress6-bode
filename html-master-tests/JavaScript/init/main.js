
jQuery(document).ready(function(){


  var s = skrollr.init();






function isAppleDevice(){
return (
(navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
(navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
(navigator.userAgent.toLowerCase().indexOf("ipod") > -1)
);
}
var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
var appStoreURL = "";
if(isAndroid > -1){
jQuery('body').addClass('android-device');
jQuery('html').addClass('android-device');
}
else if( isAppleDevice() ){
jQuery('body').addClass('ios-device');
jQuery('html').addClass('ios-device');

  // jQuery( window ).on( "orientationchange", function( event ) {
  //   location.reload();
  // });


}





//Check Mobile Devices
var checkMobile = function(){

    //Check Device
    var isTouch = ('ontouchstart' in document.documentElement);

    //Check Device //All Touch Devices
    if ( isTouch ) {

        jQuery('body').addClass('touch');

        

    }
    else {

        jQuery('body').addClass('no-touch');

    };

};

//Execute Check
checkMobile();











// object notation
// var site = {}



// site.FIRSTLOOK = function() {

    


    


// };






// jQuery(window).resize(function(){


// });



// jQuery( window ).on( "orientationchange", function( event ) {

   
          
// });



// test scroll function
jQuery('.slider-item').click(function(){
 console.log('wow');
});
$('.scroll-test-1').waypoint({
  handler: function(direction) {
    if (direction == 'down') {
      jQuery('.scroll-test-1').addClass("active");
      jQuery('.scroll-test-2').addClass("active");
      jQuery('.slider-item').trigger('click');
    } else {
      jQuery('.scroll-test-1').addClass("active");
      jQuery('.scroll-test-2').addClass("active");
      jQuery('.slider-item').trigger('click');
    }
  },
  offset: '0%'
});


$('.box').each(function(){
  var $el = $( this );
  $el.waypoint({
    handler: function(direction) {
      if (direction == 'down') {
        $el.addClass("active");
      } else {
        $el.removeClass("active");
      }
    },
    offset: '0%'
  })
});


$('.box.four').each(function(){
  var $el = $( this );
  var inview = new Waypoint.Inview({
    element: $(this)[0],
    exited: function(direction) {
      jQuery('.scroll-test-1').removeClass("active");
      jQuery('.scroll-test-2').removeClass("active");
    }
  })
});




// var sticky = new Waypoint.Sticky({
//   element: $('.scroll-test-1')[0]
// })



// set back

jQuery('.set-back').each(function(){

 var SETBACK = jQuery(this).find('img').attr('src');
  jQuery(this).css('background-image', 'url(' + SETBACK + ')');

});










// jQuery('.touch .has-submenu > a').addClass('dual-click');
   
//    jQuery(document).on( "click", ".dual-click", function(event) {
        
//         jQuery(".dual-click").not(this).removeClass("clicked");
//         jQuery(this).toggleClass("clicked");
//         if (jQuery(this).hasClass("clicked")) {
//             event.preventDefault();
//         }
//     });


// go top
//  jQuery('.go-top').click(function(){
//    jQuery('html, body').animate({scrollTop: 0}, 400);
  
// });


// slider
const slider = $(".slider-item");
slider
  .slick({
    dots: true,
    infinite: false,
    dots: false,
    arrows: false
  });

 

slider.on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickPrev');
  } else {
    $(this).slick('slickNext');
  }
}));


$(".slider-item").on('wheel', function(event, slick, direction){
  // console.log('yes');
  if ($('.index-1').parents('.slick-slide').hasClass('slick-active')) {
   jQuery('.circle').addClass('active-1of4');
  }
  if ($('.index-2').parents('.slick-slide').hasClass('slick-active')) {
    jQuery('.circle').addClass('active-2of4');
   }
   if ($('.index-3').parents('.slick-slide').hasClass('slick-active')) {
    jQuery('.circle').addClass('active-3of4');
   }
   if ($('.index-4').parents('.slick-slide').hasClass('slick-active')) {
    jQuery('.circle').addClass('active-4of4');

   }
});

$(".slider-item").on('beforeChange', function(event, slick, currentSlide, nextSlide){
  var decl = currentSlide - nextSlide;

  if(decl == 1 || decl == (slick.slideCount-1)*(-1) ) {
    // console.log('is prev direction');
    if ($('.index-4').parents('.slick-slide').hasClass('slick-active')) {
      jQuery('.circle').removeClass('active-4of4');
     }
     if ($('.index-3').parents('.slick-slide').hasClass('slick-active')) {
      jQuery('.circle').removeClass('active-3of4');
     }
     if ($('.index-2').parents('.slick-slide').hasClass('slick-active')) {
      jQuery('.circle').removeClass('active-2of4');
     }
     if ($('.index-1').parents('.slick-slide').hasClass('slick-active')) {
      jQuery('.circle').removeClass('active-1of4');
      jQuery('.slider-item').addClass('inactive');
      jQuery('.scroll-test-1').removeClass('active');
     }
  } else {
    // console.log('is next direction');
    if ($('.index-4').parents('.slick-slide').hasClass('slick-active')) {
      jQuery('.slider-item').addClass('inactive');
      jQuery('.scroll-test-1').removeClass('active');
     }
  }

});

// $("#content-1").mCustomScrollbar({
//   theme:"minimal"
// });

// var pinDur = 4000;
// var pinAnimations = new TimelineLite();

// var controller = $.superscrollorama();
// controller.pin($('#examples-pin'), pinDur, {
//   anim:pinAnimations, 
//   onPin: function() {
//     $('#examples-pin').css('height','100%');
//   }, 
//   onUnpin: function() {
//     $('#examples-pin').css('height','600px');
//   }
// });

// var controller = $.superscrollorama({
//   triggerAtCenter: false,
//   playoutAnimations: true
// });


// .site-tab-group-btn
jQuery('.site-tab-group-btn .button-wrap.active').each(function(){
  var WIDTH = jQuery(this).width();
  var HEIGHT = jQuery(this).height();
  var POSITION= jQuery(this).position();

  console.log(POSITION);

  jQuery(this).parent().find('span').width(WIDTH);
  jQuery(this).parent().find('span').height(HEIGHT);
  jQuery(this).parent().find('span').css('left', POSITION.left);
});

jQuery('.site-tab-group-btn .button-wrap').hover(function(){
  var WIDTH = jQuery(this).width();
  var HEIGHT = jQuery(this).height();
  jQuery(this).parent().find('.ball').width(WIDTH);
  jQuery(this).parent().find('.ball').height(HEIGHT);
});

jQuery('.site-tab-group-btn .button-wrap').click(function(e){
  var WIDTH = jQuery(this).width();
  var HEIGHT = jQuery(this).height();
  var POSITION= jQuery(this).position();

  console.log(POSITION);

  jQuery('.site-tab-group-btn .button-wrap').removeClass('active');
  jQuery(this).parent().find('span').width(WIDTH);
  jQuery(this).parent().find('span').height(HEIGHT);
  jQuery(this).parent().find('span').css('left', POSITION.left);
  jQuery(this).addClass('active');
  e.stopPropagation();
});

});









// load
jQuery(window).on("load", function(){




// match height
  // jQuery('.equal-row').each(function() {
  //      jQuery(this).children('.equal-block').matchHeight();
  // });

  // jQuery('.element-row').each(function() {
  //      jQuery(this).children('.equal-block').matchHeight();
  // });







// var siteLoad = {}




// siteLoad.CAPTIONSLIDERHEIGHT = function() {

  
    

// };   




// jQuery(window).resize(function(){


// });


});




// smooth movement tab cursor
$(document).on("mousemove",".site-tab-group-btn",function(e){ 
  var x = e.clientX;
  var y = e.clientY;
  var newposX = x - 735;
  var newposY = y - 50;
  $(".ball").css("left", newposX);
  // $(".ball").css("top", newposY);
  });


