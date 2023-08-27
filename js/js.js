(function ($) {
       'use strict';

//   const options = {
//     containers: ["#swup", "#swupMenu"],
//     animateHistoryBrowsing: true,
//     linkSelector: "a:not([data-no-swup])",
//   };
//   const swup = new Swup(options);



       $(".art-language-change li").on('click', function () {
              $(".art-language-change li").removeClass('art-active-lang');
              $(this).addClass('art-active-lang');
              if ($(this).hasClass('dark-theme')) {
                     $('link[href*="dark.css"]').prop('disabled', false);

              } else {

                     $('link[href*="dark.css"]').prop('disabled', true);
              }

       });


       $('.menu-item-type-custom').each(function () {
              $(this).find('> a').attr('data-no-swup', '');
       });
       $("a").each(function () {
         $(this).attr("data-no-swup", "");
       });

       if (!$('body').hasClass('default--scrolling')) {
              Scrollbar.use(OverscrollPlugin);
              if ($('#scrollbar').length) {
                     var scrollbar = Scrollbar.init(document.querySelector('#scrollbar'), {
                            damping: 0.05,
                            renderByPixel: true,
                            continuousScrolling: true,
                     });
              }
              if ($('#scrollbar2').length) {
                     var scrollbar2 = Scrollbar.init(document.querySelector('#scrollbar2'), {
                            damping: 0.05,
                            renderByPixel: true,
                            continuousScrolling: true,
                     });
              }
       }

       $(window).on('scroll', function () {
              if ($(window).scrollTop() > 40) {
                     $('body').addClass('fixed');
              } else {
                     $('body').removeClass('fixed');
              }
       });

       $(window).on("load", function () {
              anime({
                     targets: '.art-preloader',
                     opacity: [1, 0],
                     delay: 2200,
                     duration: 400,
                     easing: 'linear',
                     complete: function (anim) {
                            $('.art-preloader').css('display', 'none');
                     }
              });
              anime({
                     targets: '.art-counter-frame',
                     opacity: [0, 1],
                     duration: 800,
                     delay: 2300,
                     easing: 'linear',
              });
              anime({
                     targets: '.art-counter',
                     delay: 1300,
                     opacity: [1, 1],
                     complete: function (anim) {
                            $('.art-counter').each(function () {
                                   $(this).prop('Counter', 0).animate({
                                          Counter: $(this).text()
                                   }, {
                                          duration: 2000,
                                          easing: 'linear',
                                          step: function (now) {
                                                 $(this).text(Math.ceil(now));
                                          }
                                   });
                            });
                     }
              });
              var bar_delay = 2500;
              $('.art-skills-progress').each(function () {
                     var bar_id = $(this).attr('id');
                     var bar_val = parseInt($(this).attr('data-value')) / 100;
                     var bar_type = $(this).attr('data-type');
                     bar_delay = bar_delay + 100;
                     if (bar_type == 'circles') {
                            var bar = new ProgressBar.Circle('#' + bar_id, {
                                   strokeWidth: 7,
                                   easing: 'easeInOut',
                                   duration: 1400,
                                   delay: bar_delay,
                                   trailWidth: 7,
                                   step: function (state, circle) {
                                          var value = Math.round(circle.value() * 100);
                                          if (value === 0) {
                                                 circle.setText('');
                                          } else {
                                                 circle.setText(value);
                                          }
                                   }
                            });
                            bar.animate(bar_val);
                     }
                     if (bar_type == 'progress') {
                            var bar = new ProgressBar.Line('#' + bar_id, {
                                   strokeWidth: 1.72,
                                   easing: 'easeInOut',
                                   duration: 1400,
                                   delay: bar_delay,
                                   trailWidth: 1.72,
                                   svgStyle: {
                                          width: '100%',
                                          height: '100%'
                                   },
                                   step: (state, bar) => {
                                          bar.setText(Math.round(bar.value() * 100) + ' %');
                                   }
                            });
                            bar.animate(bar_val);
                     }
              });
       });
       $('.art-preloader-load-first').hide();
       var bar = new ProgressBar.Line(preloader, {
              strokeWidth: 1.7,
              easing: 'easeInOut',
              duration: 1400,
              delay: 750,
              trailWidth: 1.7,
              svgStyle: {
                     width: '100%',
                     height: '100%'
              },
              step: (state, bar) => {
                     bar.setText(Math.round(bar.value() * 100) + ' %');
              }
       });
       bar.animate(1);
       $(".art-input").keyup(function () {
         if ($(this).val()) {
           $(this).addClass("art-active");
         } else {
           $(this).removeClass("art-active");
         }
       });
       $('.art-filter a').on('click', function () {
              $('.art-filter .art-current').removeClass('art-current');
              $(this).addClass('art-current');
              var selector = $(this).data('filter');
              $('.art-grid').isotope({
                     filter: selector
              });
              return false;
       });
       if ($('.art-grid').length) {
              var $container = $('.art-grid');
              $container.imagesLoaded(function () {
                     $container.isotope({
                            filter: '*',
                            itemSelector: '.art-grid-item',
                            transitionDuration: '.6s',
                     });
                     $(document).on('lazyloaded', function (e) {
                            $container.isotope('reloadItems').isotope();
                     });
              });
       }

       if (typeof Swiper == 'function') {
              if ($('.art-testimonial-slider').length) {
              var swiper = new Swiper('.art-testimonial-slider', {
                     slidesPerView: 3,
                     spaceBetween: 30,
                     speed: 1400,
                     autoplay: false,
                     autoplaySpeed: 5000,
                     pagination: {
                            el: '.art-testi-swiper-pagination',
                            clickable: true,
                     },
                     navigation: {
                            nextEl: '.art-testi-swiper-next',
                            prevEl: '.art-testi-swiper-prev',
                     },
                     breakpoints: {
                            0: {
                                   slidesPerView: 1,
                            },
                            720: {
                                   slidesPerView: 1,
                            },
                            1200: {
                                   slidesPerView: 2,
                            },
                            1500: {
                                   slidesPerView: 2,
                            },
                     },
              });
              };

              if ($('.art-clients-slider').length) {
              var swiper = new Swiper('.art-clients-slider', {
                     slidesPerView: 4,
                     spaceBetween: 30,
                     speed: 1400,
                     autoplay: false,
                     autoplaySpeed: 5000,
                     pagination: {
                            el: '.art-clients-swiper-pagination',
                            clickable: true,
                     },
                     navigation: {
                            nextEl: '.art-clients-swiper-next',
                            prevEl: '.art-clients-swiper-prev',
                     },
                     breakpoints: {
                            0: {
                                   slidesPerView: 1,
                            },
                            720: {
                                   slidesPerView: 2,
                            },
                            1200: {
                                   slidesPerView: 4,
                            },
                            1500: {
                                   slidesPerView: 4,
                            },
                     },
              });
              };
              if ($('.art-works-slider').length) {
                     var swiper = new Swiper('.art-works-slider', {
                            slidesPerView: 3,
                            spaceBetween: 30,
                            speed: 1400,
                            autoplay: {
                                   delay: 4000,
                            },
                            autoplaySpeed: 5000,
                            pagination: {
                                   el: '.swiper-pagination',
                                   clickable: true,
                            },
                            navigation: {
                                   nextEl: '.art-works-swiper-next',
                                   prevEl: '.art-works-swiper-prev',
                            },
                            breakpoints: {
                                   0: {
                                          slidesPerView: 1,
                                   },
                                   720: {
                                          slidesPerView: 2,
                                   },
                                   1200: {
                                          slidesPerView: 2,
                                   },
                                   1500: {
                                          slidesPerView: 2,
                                   },
                            },
                     });
              }

              if ($('.art-blog-slider').length) {
                     var swiper = new Swiper('.art-blog-slider', {
                            slidesPerView: 3,
                            spaceBetween: 30,
                            speed: 1400,
                            autoplay: {
                                   delay: 4000,
                            },
                            autoplaySpeed: 5000,
                            pagination: {
                                   el: '.swiper-pagination',
                                   clickable: true,
                            },
                            navigation: {
                                   nextEl: '.art-blog-swiper-next',
                                   prevEl: '.art-blog-swiper-prev',
                            },
                            breakpoints: {
                                   0: {
                                          slidesPerView: 1,
                                   },
                                   720: {
                                          slidesPerView: 1,
                                   },
                                   1200: {
                                          slidesPerView: 2,
                                   },
                                   1500: {
                                          slidesPerView: 3,
                                   },
                            },
                     });
              }

       } else {
              console.log('no swiper found')
       }



$('[data-fancybox="gallery"]').fancybox({
  animationEffect: "zoom-in-out",
  animationDuration: 600,
  transitionDuration: 1200,
  buttons: ["zoom", "share", "slideShow", "thumbs", "close"],
});

$('[data-fancybox="diplome"]').fancybox({
  animationEffect: "zoom-in-out",
  animationDuration: 600,
  transitionDuration: 1200,
  buttons: ["zoom", "slideShow", "thumbs", "close"],
});

$('[data-fancybox="avatar"]').fancybox({
  animationEffect: "zoom-in-out",
  animationDuration: 600,
  transitionDuration: 1200,
  buttons: ["zoom", "close"],
});

$('[data-fancybox="recommendation"]').fancybox({
  animationEffect: "zoom-in-out",
  animationDuration: 600,
  transitionDuration: 1200,
  buttons: ["zoom", "slideShow", "thumbs", "close"],
});

$.fancybox.defaults.hash = false;


      
       $('.current-menu-item a').clone().appendTo('.art-current-page');
       $('.art-map-overlay').on('click', function () {
              $(this).addClass('art-active');
       });
       $('.art-info-bar-btn').on('click', function () {
              $('.art-info-bar').toggleClass('art-active');
              $('.art-menu-bar-btn').toggleClass('art-disabled');
       });
       $('.art-menu-bar-btn').on('click', function () {
              $('.art-menu-bar-btn , .art-menu-bar').toggleClass("art-active");
              $('.art-info-bar-btn').toggleClass('art-disabled');
       });
       $('.art-info-bar-btn , .art-menu-bar-btn').on('click', function () {
              $('.art-content').toggleClass('art-active');
       });
       $('.art-curtain , .art-mobile-top-bar').on('click', function () {
              $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
       });
       $('.menu-item a').on('click', function () {
              if ($(this).parent().hasClass('menu-item-has-children')) {
                     $(this).parent().children('.sub-menu').toggleClass('art-active');
                     if ($(this).attr('href') != '' && $(this).attr('href') != '#' && $(this).attr('href') != '#.') {
                            if ($(this).parent().hasClass('opened')) {
                                   $(this).parent().removeClass('opened');
                            } else {
                                   $(this).parent().addClass('opened');
                                   return false;
                            }
                     } else {
                            return false;
                     }
              } else {
                     $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
              }
              if ($(this).attr('href') != '' && $(this).attr('href') != undefined) {
                     if ($(this).attr('href').charAt(0) == "#") {
                            var section_id = $(this).attr('href');
                            if ($(section_id).length && !$('body').hasClass('default--scrolling')) {
                                   var section_top = scrollbar.scrollTop + $(section_id).offset().top - 30;
                                   scrollbar.scrollTo(0, section_top, 500);
                            }
                     }
              }
       });


       $('a').on('click', function () {
                     if ($(this).attr('href') != '' && $(this).attr('href') != undefined) {
                     if ($(this).attr('href').charAt(0) == "#") {
                            var section_id = $(this).attr('href');
                            if ($(section_id).length && !$('body').hasClass('default--scrolling')) {
                                   var section_top = scrollbar.scrollTop + $(section_id).offset().top - 30;
                                   scrollbar.scrollTo(0, section_top, 500);
                            }
                     }
              }
       })


       $('.art-price-list li').each(function () {
              if ($(this).find('del').text()) {
                     $(this).addClass('art-empty-item');
                     $(this).html($(this).find('del').text());
              }
       });
       $('.art-input').on('focusin', function () {
              $(this).parent().next('label').addClass('focused');
       });
       $('.art-input').on('focusout', function () {
              $(this).parent().next('label').removeClass('focused');
       });
       

  $("#form").submit(function () {
    $.ajax({
      type: "POST",
      url: "https://www.designerashish.org/resume/mail.php",
      data: $(this).serialize(),
    }).done(function () {
      var tl = anime.timeline({
        easing: "easeOutExpo",
      });

      tl.add({
        targets: ".art-submit",
        opacity: 0,
        scale: 0.5,
      }).add({
        targets: ".art-success",
        scale: 1,
        height: "45px",
      });
    });
    return false;
  });



  // reinit
  document.addEventListener("swup:contentReplaced", function() {
        console.log('content replaced')
  })





})(jQuery);