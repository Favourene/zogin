
$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    });
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints:{
        750: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 10
      },
    }
    });
    var swiper = new Swiper('.swiper-container2', {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      breakpoints:{
        1000: {
          slidesPerView: 2,
          spaceBetween: 30
      },
        750: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 0
      },
    }
    });
    $('.skill-per').each(function(){
      var $this = $(this);
      var per = $this.attr('per');
      $this.css("width",per+'%');
      $({animatedValue: 0}).animate({animatedValue: per},{
        duration: 10000,
        step: function(){
          $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function(){
          $this.attr('per', Math.floor(this.animatedValue) + '%');
        }
      });
    });
    $(".accordion_header").click(function(){
      $(".accordion_header").removeClass("active");
     $(this).addClass("active");
  });
    
    
});
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 5000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }
 

});
