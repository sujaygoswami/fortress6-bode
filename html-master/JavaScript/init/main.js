// client logo slider
if ( $(".splide").length ) {
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.client-logo-module .splide', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    arrows : false,
    pagination : false,
    autoWidth : true,
    gap : 112,
    perPage: 7,
    autoScroll: {
      speed: 1,
    },
  }).mount( window.splide.Extensions );
});
}



jQuery(document).ready(function(){









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
var site = {}



site.FIRSTLOOK = function() {

    


    


};






jQuery(window).resize(function(){


});



jQuery( window ).on( "orientationchange", function( event ) {

   
          
});





// set back

jQuery('.set-back').each(function(){

 var SETBACK = jQuery(this).find('img').attr('src');
  jQuery(this).css('background-image', 'url(' + SETBACK + ')');

});










jQuery('.touch .has-submenu > a').addClass('dual-click');
   
   jQuery(document).on( "click", ".dual-click", function(event) {
        
        jQuery(".dual-click").not(this).removeClass("clicked");
        jQuery(this).toggleClass("clicked");
        if (jQuery(this).hasClass("clicked")) {
            event.preventDefault();
        }
    });


// go top
 jQuery('.go-top').click(function(){
   jQuery('html, body').animate({scrollTop: 0}, 400);
  
});


// startpage banner video
jQuery('.inview-video-paly-pause').viewportChecker({
  classToAdd: 'play',
  repeat: true,
  offset: 250,
  callbackFunction: function(elem, action){
    jQuery('.inview-video-paly-pause').each(function(){
      if ($(this).hasClass('play')) {
        $(this).trigger('play');
      }else{
        $(this).trigger('pause');
      }
    });   
  },
});

// cover video content
jQuery('.cover-video-content-module video').click(function(){
  this.paused ? this.play() : this.pause();
  jQuery(this).parents('.cover-video-content-module').find('.play-pause-trigger').toggle();
});

// switcher module
jQuery('.switcher-module').each(function(){

  

  jQuery(this).find('.site-tab-group-btn .button-wrap.active').each(function(){
    var WIDTH = jQuery(this).width();
    var HEIGHT = jQuery(this).height();
    var POSITION= jQuery(this).position();
  
    console.log(POSITION);
  
    jQuery(this).parent().find('span').width(WIDTH);
    jQuery(this).parent().find('span').height(HEIGHT);
    jQuery(this).parent().find('span').css('left', POSITION.left);
  });
  
  jQuery(this).find('.site-tab-group-btn .button-wrap').hover(function(){
    var WIDTH = jQuery(this).width();
    var HEIGHT = jQuery(this).height();
    jQuery(this).parent().find('.ball').width(WIDTH);
    jQuery(this).parent().find('.ball').height(HEIGHT);
  });
  
  jQuery(this).find('.site-tab-group-btn .button-wrap').click(function(e){
    var WIDTH = jQuery(this).width();
    var HEIGHT = jQuery(this).height();
    var POSITION= jQuery(this).position();
  
    console.log(POSITION);
  
    jQuery(this).parent().find('.button-wrap').not(this).removeClass('active');
    jQuery(this).parent().find('span').width(WIDTH);
    jQuery(this).parent().find('span').height(HEIGHT);
    jQuery(this).parent().find('span').css('left', POSITION.left);
    jQuery(this).addClass('active');
    e.stopPropagation();
  });

  

});

jQuery('.switcher-module').hover(function(){
  var GROUPBUTTON = jQuery(this).find('.site-tab-group-btn');
  jQuery('.switcher-module').removeClass('hovered');
  jQuery(this).addClass('hovered');
  $(document).on("mousemove", GROUPBUTTON, function(e){ 
    var x = e.clientX;
    var newposX = x - 90;
    var newposXTabMainStyle = x - 737;
    var newposXTabMainStyleMegaMenu = x - 737;

    if ($('.language-switcher:not(.inside-mega-menu)').hasClass('hovered')) {
      jQuery(this).find(".ball").css("left", newposX);
    }
    if ($('.tab-switcher-style-main').hasClass('hovered')) {
      jQuery(this).find(".ball").css("left", newposXTabMainStyle);
    }
    if ($('.language-switcher.inside-mega-menu').hasClass('hovered')) {
      jQuery(this).find(".ball").css("left", newposXTabMainStyleMegaMenu);
    }
    

    });
});

// jQuery('.tab-switcher-style-main').each(function(){
//   var GROUPBUTTON = jQuery(this).find('.site-tab-group-btn');
//   $(document).on("mousemove", GROUPBUTTON, function(e){ 
//     var x = e.clientX;
//     var y = e.clientY;
//     var newposX = x;
//     var newposY = y - 50;
//     $(this).find(".ball").css("left", newposX);
//     // $(".ball").css("top", newposY);
//     });
// });


// tab filter slider


jQuery('.tab-filter-slider-module .the-slider').each(function(){

  jQuery(this).parents('.tab-filter-slider-module').find('.switcher-module .button-wrap').each(function(){
    var INDEX = jQuery(this).index();
    jQuery(this).addClass('tab-filter' +  (INDEX + 1));
    jQuery(this).attr('data-tab-pid', 'tab-filter' +  (INDEX + 1));
  });

  jQuery(this).parents('.tab-filter-slider-module').find('.product-tab-contents .the-slider').each(function(){
    var INDEX = jQuery(this).index();
    jQuery(this).addClass('tab-filter' +  (INDEX + 1));
  });

  jQuery(this).parents('.tab-filter-slider-module').find('.switcher-module .button-wrap').click(function(){
    var DATAPID = jQuery(this).attr('data-tab-pid');
    jQuery(this).parents('.tab-filter-slider-module').find('.product-tab-contents').find('.' + DATAPID).addClass('active');
    jQuery(this).parents('.tab-filter-slider-module').find('.product-tab-contents .the-slider').not('.' + DATAPID).removeClass('active');
  });


  var SLIDERNAV = jQuery(this).find('.slider-nav');
  var SLIDERFOR = jQuery(this).find('.slider-for');


  SLIDERFOR.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
    asNavFor: SLIDERNAV
  });


  

  var $slider = $(SLIDERNAV);

  if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = jQuery(this).find('.counter .container-fluid span');
    // var sliderCounter = document.createElement('div');
    // sliderCounter.classList.add('slider__counter');
    
    var updateSliderCounter = function(slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $(sliderCounter).text(currentSlide + '/' +slidesCount)
    };

    $slider.on('init', function(event, slick) {
      // $slider.append(sliderCounter);
      updateSliderCounter(slick);
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });

    $slider.slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: SLIDERFOR,
      dots: false,
      arrows: true,
      centerMode: false,
      focusOnSelect: true,
      variableWidth: true,
      infinite: false,
      draggable: false
    });
  }
  SLIDERNAV.find('.slick-arrow').wrapAll('<div class="slider-arrows"><div class="container-fluid"></div></div>');

  jQuery('.tab-filter-slider-module .product-card .product-bild').matchHeight();
  jQuery('.tab-filter-slider-module .product-card .product-primary-info').matchHeight();

  
  

});


// product-detail-sync-slider
jQuery('.product-detail-sync-slider').each(function(){

  var SLIDERFOR = jQuery(this).find('.slider-for');
  var SLIDERNAV = jQuery(this).find('.slider-nav');

  SLIDERFOR.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: SLIDERNAV
  });
  SLIDERNAV.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: SLIDERFOR,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    infinite: true,
  });
});








// sliding card module text with tile view
var controller = $.superscrollorama();

// type 1
var paralaxCard = TweenMax.to( 
  $('.paralax-pause-scroller.type-1').find('.slidings-tiles.type-1'), .5, {css:{top: -150 + '%'}}
);
controller.pin('.paralax-pause-scroller.type-1', 4000, {offset: -50, anim: paralaxCard});

// type 2
var paralaxCard = TweenMax.to( 
  $('.paralax-pause-scroller.type-2').find('.slidings-tiles.type-2'), .5, {css:{top: -120 + '%'}}
);
controller.pin('.paralax-pause-scroller.type-2', 4000, {offset: -100, anim: paralaxCard});

// type 3
var paralaxCard = TweenMax.to( 
  $('.paralax-pause-scroller.type-3').find('.slidings-tiles.type-3'), .5, {css:{top: -220 + 'vh'}}
);
controller.pin('.paralax-pause-scroller.type-3', 4000, {offset: -100, anim: paralaxCard});

// global isotop
jQuery('.global-isotop .grid').isotope({
  // options
  itemSelector: '.grid-item'
});

// serial-box-wrap
jQuery('.serial-box-wrap .serial-box-col').each(function(){
  var SERIALBOXINDEX = jQuery(this).index();
  var INDEXOUTPUT = SERIALBOXINDEX + 1;
  var int_number = INDEXOUTPUT;
  var int_length = (''+int_number).length;
  jQuery(this).attr('data-serial', INDEXOUTPUT);

  jQuery(this).find('.serial-box').append('<span class="serial-number"></span>');

  if(int_length < 2){
    jQuery(this).find('.serial-box span').html('0' + INDEXOUTPUT);
  }else{
    jQuery(this).find('.serial-box span').html(INDEXOUTPUT);
  }

  

});





});








// load
jQuery(window).load(function(){
  
  jQuery(window).scrollTop(jQuery('.footer').offset().top);
  setTimeout(function() {
    jQuery('.go-top').trigger('click');
  }, 1000);
  setTimeout(function() {
    jQuery('.loader-screen').fadeOut();
    jQuery('body').css('overflow', 'auto');
  }, 2000);

  // cover slider
  setTimeout(function() {
    // cover slider
    jQuery('.cover-slider-module').each(function(){

      var SLIDER = jQuery(this);

      
      SLIDER.slick({
        centerPadding: '275px',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
      });

      jQuery(this).find('.slick-arrow').append('<span></span>');
      jQuery(this).find('.slick-prev').addClass('curve-link type-3-back hover-type-primary-light no-text-button size-type-2');
      jQuery(this).find('.slick-next').addClass('curve-link type-2 hover-type-primary-light no-text-button size-type-2');

    });
  }, 2100);
  

// navigation
var DESKTOPMENU = jQuery('.site-mega-menu.desktop-menu');
DESKTOPMENU.hide();
DESKTOPMENU.css('visibility', 'visible');
DESKTOPMENU.css('pointer-events', 'auto');
jQuery('.nav-hmbg').click(function(){
  DESKTOPMENU.addClass('slideInDown');
  DESKTOPMENU.removeClass('slideOutUp');
  DESKTOPMENU.show();
  setTimeout(function() {
    DESKTOPMENU.find('.mega-menu-main-link').addClass('on-view');
  }, 300);
});

jQuery('.close-mega-desktop-menu').click(function(){
  DESKTOPMENU.addClass('slideOutUp');
  DESKTOPMENU.removeClass('slideInDown');
  setTimeout(function() {
    DESKTOPMENU.find('.mega-menu-main-link').removeClass('on-view');
  }, 300);
});

// tab-filter-slider-module
  jQuery('.tab-filter-slider-module').each(function() {
    var $this = jQuery(this);
    setTimeout(function() {
      $this.find('.the-slider').addClass('inactive');
    }, 100);
  });



// match height
  jQuery('.equal-row').each(function() {
       jQuery(this).children('.equal-block').matchHeight();
  });

  jQuery('.element-row').each(function() {
       jQuery(this).children('.equal-block').matchHeight();
  });

  jQuery('.product-listing-card-type .product-bild').matchHeight();


  jQuery('.measure-card-module').each(function(){
    jQuery(this).find('.measure-card-info').matchHeight({byRow: false});
    jQuery(this).find('.measure-card-header').matchHeight();
  });

  







var siteLoad = {}




siteLoad.CAPTIONSLIDERHEIGHT = function() {

  
    

};   




jQuery(window).resize(function(){


});






});

