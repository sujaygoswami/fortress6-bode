
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
  $('.antrieb-image .target:last-child()').addClass('active');
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
          $('.cards_inner .wrap').append('<div class="cards_inner__card ' + el_class_end + ' card_in" data-card="'+number+'">'+text+'</div>')
          el.remove();
        },160);
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