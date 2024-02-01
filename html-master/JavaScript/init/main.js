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

  jQuery( window ).on( "orientationchange", function( event ) {
    if ($(window).width() >= 768) {
      location.reload();
    }
  });


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



site.HEADERVISIBILITYONSCROLL = function() {

  var HEADERHEIGHT = jQuery('header.header').height();
    

  if (jQuery(document).scrollTop() > 100) {
    jQuery('header.header').addClass('header-onscroll-hidden');
  }
  else {
    jQuery('header.header').removeClass('header-onscroll-hidden');
  }
    


};
site.HEADERVISIBILITYONSCROLL();






jQuery(window).resize(function(){


});



jQuery( window ).on( "orientationchange", function( event ) {

   
          
});

jQuery(window).scroll(function() {
  site.HEADERVISIBILITYONSCROLL();
});




// set back

jQuery('.set-back').each(function(){

 var SETBACK = jQuery(this).find('img:not(.no-set)').attr('src');
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
    asNavFor: SLIDERNAV,
    adaptiveHeight: true
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
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: SLIDERFOR,
      dots: false,
      arrows: true,
      centerMode: false,
      focusOnSelect: true,
      variableWidth: true,
      infinite: false,
      draggable: false,
      responsive: [
        {
          breakpoint: 999,
          settings: {
            centerPadding: '75px',
            centerMode: true,
            arrows: false,
            infinite: true,
          }
        }
      ]
    });
  }
  SLIDERNAV.find('.slick-arrow').wrapAll('<div class="slider-arrows"><div class="container-fluid"></div></div>');
  SLIDERNAV.find('.slick-arrow').append('<span></span>');
  SLIDERNAV.find('.slick-prev').addClass('curve-link type-3-back hover-type-primary-light no-text-button size-type-2 no-curve');
  SLIDERNAV.find('.slick-next').addClass('curve-link type-2 hover-type-primary-light no-text-button size-type-2 no-curve');

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
  jQuery(this).find('.slider-nav .slick-slide').matchHeight();
});








// sliding card module text with tile view
var controller = $.superscrollorama();

// type 1
jQuery('.paralax-pause-scroller.type-1').each(function(){
  var PARENTS = jQuery(this);
  var TOTALHEIGHT = jQuery(this).find('.slidings-tiles').height();
  var APPLIEDTOTALHEIGHT = TOTALHEIGHT + 430;
  var paralaxCard = TweenMax.to( 
    $(PARENTS).find('.slidings-tiles.type-1'), .5, {css:{top: -APPLIEDTOTALHEIGHT}}
  );
  if ($(window).width() >= 1000) {
    controller.pin(PARENTS, 4000, {offset: -30, anim: paralaxCard});
  }
  if ($(window).width() < 1000) {
    controller.pin(PARENTS, 4000, {offset: -30, anim: paralaxCard});
  }
});


// type 2
jQuery('.paralax-pause-scroller.type-2').each(function(){
  var PARENTS = jQuery(this);
  var TOTALHEIGHT = jQuery(this).find('.slidings-tiles').height();
  var APPLIEDTOTALHEIGHT = TOTALHEIGHT + 345;
  var paralaxCard = TweenMax.to( 
    $(PARENTS).find('.slidings-tiles.type-2'), .5, {css:{top: -APPLIEDTOTALHEIGHT}}
  );
  if ($(window).width() >= 1000) {
    controller.pin(PARENTS, 4000, {offset: -30, anim: paralaxCard});
  }
  if ($(window).width() < 1000) {
    controller.pin(PARENTS, 4000, {offset: -30, anim: paralaxCard});
  }
});


// type 3
jQuery('.paralax-pause-scroller.type-3').each(function(){
  var PARENTS = jQuery(this);
  var TOTALHEIGHT = jQuery(this).find('.slidings-tiles').height();
  var TOTALHEIGHTPLUS = TOTALHEIGHT + 200;
  var paralaxCard = TweenMax.to( 
    $(PARENTS).find('.slidings-tiles.type-3'), .5, {css:{top: -TOTALHEIGHTPLUS}}
  );

  if ($(window).width() >= 1000) {
    controller.pin(PARENTS, 4000, {offset: -30, anim: paralaxCard});
  }
  
  if ($(window).width() < 1000) {
    controller.pin(PARENTS, 4000, {offset: -30, anim: paralaxCard});
  }
});


// type 4
jQuery('.paralax-pause-scroller.type-4').each(function(){
  var PARENTS = jQuery(this);
  var TOTALHEIGHT = jQuery(this).find('.slidings-tiles').height();
  var TOTALHEIGHTPLUS = TOTALHEIGHT + 200;
  var paralaxCard = TweenMax.to( 
    $(PARENTS).find('.slidings-tiles.type-3'), .5, {css:{top: -TOTALHEIGHTPLUS}}
  );
  if ($(window).width() >= 1000) {
    controller.pin(PARENTS, 4000, {offset: -30, anim: paralaxCard});
  }
  if ($(window).width() < 1000) {
    controller.pin(PARENTS, 4000, {offset: -30, anim: paralaxCard});
  }
});




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

  jQuery(this).find('.serial-box').append('<span class="serial-number"><em></em></span>');

  if(int_length < 2){
    jQuery(this).find('.serial-box:not(.number-no-prefix-zero) span em').html('0' + INDEXOUTPUT);
    jQuery(this).find('.serial-box.number-no-prefix-zero span em').html(INDEXOUTPUT);
  }else{
    jQuery(this).find('.serial-box:not(.number-no-prefix-zero) span em').html(INDEXOUTPUT);
    jQuery(this).find('.serial-box.number-no-prefix-zero span em').html(INDEXOUTPUT);
  }

  

});

// fancy box
Fancybox.bind("[data-fancybox]", {
  Thumbs: false,
  wheel: false,
  contentClick: false,
  Toolbar: {
    display: {
      right: ["close"],
      left: ["infobar"],
    },
  },
  on: {
    done: (fancybox, slide) => {

      jQuery('.fancybox__toolbar__column.is-right').addClass('global-centered-rounded-action-button');
      jQuery('.fancybox__toolbar__column.is-right button').addClass('the-trigger type-1 close');
      jQuery('.fancybox__toolbar__column.is-right button').append('<span></span>');
      jQuery('.fancybox__toolbar__column.is-right button svg').remove();
      jQuery('.fancybox__toolbar__column.is-right button span:not(:first-child)').remove();
      jQuery('.fancybox__nav button').append('<span></span>');
      jQuery('.fancybox__nav button span:not(:last-child)').remove();
      jQuery('.fancybox__nav button.is-prev').addClass('curve-link type-3-back hover-type-primary-light no-text-button size-type-2 no-curve');
      jQuery('.fancybox__nav button.is-next').addClass('curve-link type-2 hover-type-primary-light no-text-button size-type-2 no-curve');


      var SELECTEDFANCYCONTENT = jQuery('.fancybox__slide.is-selected .fancybox__content');

      jQuery('.fancybox__slide').each(function(){
        var CONTENT = jQuery(this).find('.fancybox__content');
        var CAPTION = jQuery(this).find('.fancybox__caption');
        var INFOBAR = jQuery(this).find('.fancybox__infobar');
        var CAPTIONCONTENTHOLDER = jQuery(this).find('.caption-content-holder');

        jQuery(CAPTION).detach().appendTo(CONTENT);

      });

      jQuery('.fancybox__infobar').detach().appendTo(SELECTEDFANCYCONTENT);

      jQuery('.fancybox__content').each(function(){
        jQuery(this).find('.fancybox__caption, .fancybox__infobar').wrapAll('<div class="caption-content-holder"></div>');
        jQuery(this).find('.caption-content-holder:not(:last-child)').remove();
        jQuery(this).find('.fancybox__caption').detach().prependTo(this);
      });
      
    },
  },
});

// header responsive
if ($(window).width() < 1000) {

  jQuery('.header-search-form').detach().appendTo('header.header > .main-wrap');

  jQuery('header.header .main-link-col').detach().prependTo('.site-menu-column-holder');

  var QUICKLINKCOLHEIGHT = jQuery('.quick-link-col').height();

  jQuery('.site-mega-menu > .main-menu-wrap').css('padding-bottom', QUICKLINKCOLHEIGHT);

  

}

jQuery('.mobile-search-trigger').click(function(){
  jQuery(this).toggleClass('active');
  jQuery('.header-search-form').toggle();
});


// responsive measure card
if ($(window).width() < 1000) {
  jQuery('.type-mobile-slider').each(function(){
    var RESPONSIVEMEASURECARDSLIDERELEMENT = jQuery(this).find('> .row');
    RESPONSIVEMEASURECARDSLIDERELEMENT.slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });

  jQuery('.type-mobile-slider-type-two').each(function(){
    var RESPONSIVEMEASURECARDSLIDERELEMENT = jQuery(this).find('> .row');
    RESPONSIVEMEASURECARDSLIDERELEMENT.slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
  
}



// hotspot-module mobile
if ($(window).width() < 1000) {
  jQuery('.hotspot-module').each(function(){
    var TARGET = jQuery(this).find('.target-col');
    var CARD = jQuery(this).find('.card-col');

    jQuery(CARD).detach().insertBefore(TARGET);

  });
  
}

// curve-link-whole-hover
// jQuery('.curve-link-whole-hover').mouseenter(function(){
//   jQuery(this).find('.curve-link').trigger('click');
//   console.log('hover');
// });

// hang-type
jQuery('.hang-type').each(function(){
  var HEIGHT = jQuery(this).height();
  jQuery(this).parent('.hang-type-parent').css('padding-bottom', HEIGHT - 136);
});


// developer point
jQuery('.team-module .mobile-no-uplift .team-info').addClass('pull-text-right');




});








// load
jQuery(window).load(function(){
  
  // jQuery(window).scrollTop(jQuery('.footer').offset().top);
  // setTimeout(function() {
  //   jQuery('.go-top').trigger('click');
  // }, 1000);
  // setTimeout(function() {
  //   jQuery('.loader-screen').fadeOut();
  //   jQuery('body').css('overflow', 'auto');
  // }, 2200);


  // header responsive
  if ($(window).width() < 1000) {
  }  
  // cover slider
    jQuery('.cover-slider-module').each(function(){

      var SLIDER = jQuery(this);

      SLIDER.flickity({
        // options
        cellAlign: 'center',
        contain: true,
        wrapAround: true
      });

      jQuery(this).find('.flickity-button').append('<span></span>');
      jQuery(this).find('.previous').addClass('curve-link type-3-back hover-type-primary-light no-text-button size-type-2');
      jQuery(this).find('.next').addClass('curve-link type-2 hover-type-primary-light no-text-button size-type-2');

    });
  

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
  jQuery('main, header.header').addClass('menu-open');
});

jQuery('.close-mega-desktop-menu').click(function(){
  DESKTOPMENU.addClass('slideOutUp');
  DESKTOPMENU.removeClass('slideInDown');
  setTimeout(function() {
    DESKTOPMENU.find('.mega-menu-main-link').removeClass('on-view');
  }, 300);
  jQuery('main, header.header').removeClass('menu-open');
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


  jQuery('.measure-card-module:not(.adapt-all-height-row-false)').each(function(){
    jQuery(this).find('.measure-card-info').matchHeight();
    jQuery(this).find('.measure-card-header').matchHeight();
  });
  jQuery('.measure-card-module.adapt-all-height-row-false').each(function(){
    jQuery(this).find('.measure-card-info').matchHeight({byRow: false});
    jQuery(this).find('.measure-card-header').matchHeight({byRow: false});
  });

  jQuery('.image-with-content-card-module.adapt-all-height-row-false').matchHeight({byRow: false});

  jQuery('.equal-description').matchHeight();
  jQuery('.equal-heading').matchHeight();


// paralax
var controller = $.superscrollorama();


// counter paralaxtype 5 start
  
  jQuery('.counter-text-wrap').each(function(){
    var PARENTS = $(this).parents('.paralax-pause-scroller.type-5');
    var STEPBOXHEIGHT = jQuery(PARENTS).find('.stepbox').height();
    var DESKTOPSTEPBOXHEIGHT = jQuery(STEPBOXHEIGHT - 250);
    var MOBILESTEPBOXHEIGHT = jQuery(STEPBOXHEIGHT - 94);
    // console.log(DESKTOPSTEPBOXHEIGHT);
    // console.log(MOBILESTEPBOXHEIGHT);
    jQuery(this).find('.slider-cell').matchHeight({byRow: false});
    

    var SLIDERCELLMAXHEIGHT = jQuery(this).find('.slider-cell').height();
    jQuery(this).height(SLIDERCELLMAXHEIGHT + 20);

    var TOTALHEIGHT = jQuery(this).find('> .main-wrap').height();
    var TOTALHEIGHTPLUS = TOTALHEIGHT + 20;
    var TOTALHEIGHTPLUSLESS1PART = TOTALHEIGHTPLUS - SLIDERCELLMAXHEIGHT;

    if ($(window).width() >= 1700) {
      var circleProgress = TweenMax.to( 
        PARENTS.find('.circle .mask.full, .circle .fill, .stepbox, .counter-text-wrap > .main-wrap'), .5, {css:{rotation: 180, top: - 730, marginTop: - TOTALHEIGHTPLUSLESS1PART}},
      );
      controller.pin(PARENTS, 4000, {offset: -30, anim: circleProgress});
    }

    if ($(window).width() < 1700) {
      var circleProgress = TweenMax.to( 
        PARENTS.find('.circle .mask.full, .circle .fill, .stepbox, .counter-text-wrap > .main-wrap'), .5, {css:{rotation: 180, top: - 265, marginTop: - TOTALHEIGHTPLUSLESS1PART}},
      );
      controller.pin(PARENTS, 4000, {offset: -30, anim: circleProgress});
    }

  });

  
 

  // counter paralaxtype 5 end



  







var siteLoad = {}




siteLoad.CAPTIONSLIDERHEIGHT = function() {

  
    

};   




jQuery(window).resize(function(){


});


// type-mobile-slider
jQuery('.type-mobile-slider, .type-mobile-slider-type-two').find('.slick-list').css('overflow', 'inherit');


});




// image hotspot start
var HOTSPOTMODULE = jQuery('.hotspot-module').length;

if(HOTSPOTMODULE >= 1){
// Magnet Mouse - Start
const element = document.querySelector(".cursor");
const target = document.querySelector(".target");
const text = document.querySelector(".text");
const container = document.querySelector(".antrieb-image");

class Cursor {
  constructor(el, target, text) {
    this.el = el;
    this.bind();
  }

  bind() {
    document.addEventListener("mousemove", this.move.bind(this), false);
  }

  move(e) {
    const cursorPosition = {
      left: e.clientX,
      top: e.clientY,
      scrollLeft: e.pageX,
      scrollTop: e.pageY
    };

    const containerPos = {
      left: e.clientX - container.getBoundingClientRect().left,
    };

    document.querySelectorAll(".target").forEach((single) => {
      const triggerDistance = single.getBoundingClientRect().width;

      const targetPosition = {
        left:
          single.getBoundingClientRect().left +
          single.getBoundingClientRect().width / 2,
        top:
          single.getBoundingClientRect().top +
          single.getBoundingClientRect().height / 2
      };
      const distance = {
        x: targetPosition.left - cursorPosition.left,
        y: targetPosition.top - cursorPosition.top
      };

      const angle = Math.atan2(distance.x, distance.y);
      const hypotenuse = Math.sqrt(
        distance.x * distance.x + distance.y * distance.y
      );

      if (hypotenuse < triggerDistance) {

        TweenMax.to(single.querySelector(".text"), 0.2, {
          x: -((Math.sin(angle) * hypotenuse) / 2),
          y: -((Math.cos(angle) * hypotenuse) / 2)
        });

      } else {

        TweenMax.to(this.el, 0.2, {
          left: cursorPosition.left,
          top: cursorPosition.scrollTop,
          height: "30px",
          width: "30px"
        });

        TweenMax.to(single.querySelector(".text"), 0.2, {
          x: 0,
          y: 0
        });

      }
    });
  }
}
const cursor = new Cursor(element, target);
// Magnet Mouse - End


// Card Slider - Start
function cardSlide(){
  var FIRSTHEIGHT = jQuery('.cards_inner__card:first-child').height();
  jQuery('.card-col').height(FIRSTHEIGHT + 50);
  $('.antrieb-image .target:first-child()').addClass('active');
  $(document).on('click', ".target:not('.active')", function() {
        $('.target').removeClass('active');
        $(this).addClass('active');
        point = $(this).data("point");
        el = $('.card-'+point);
        const text = el.html();
        number = el.data("card");
        setTimeout(function(){
          el_class = el.attr('class').split(' ');
          el_class_end = el_class[1]
          el.addClass('invalid')
        },10)
        setTimeout(function(){
          $('.cards_inner .wrap').prepend('<div class="cards_inner__card ' + el_class_end + ' card_in" data-card="'+number+'">'+text+'</div>')
          el.remove();
        },160);
        setTimeout(function(){
          var FIRSTHEIGHT = jQuery('.cards_inner__card:first-child').height();
          jQuery('.card-col').height(FIRSTHEIGHT + 50);
        },200);
        setTimeout(function(){
          $('.card_in').removeClass('card_in')
        },500);

    });
}
cardSlide();
// Card Slider - End


$(document).ready(function(){
  $('.target').click(function(){
    console.log($(this).position().left)
  });
});




}
// image hot spot end


