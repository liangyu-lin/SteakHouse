$(document).ready(function () {

    //sticky nav
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });


    //scroll to element
    $('js--scroll-to-top').click(function () {
   $('html, body').animate({
       scrollTop: $('.section-start').offset().top
   }, 1000);
    });

    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
       $('.js--scroll-to-food').click(function () {
           $('html, body').animate({
               scrollTop: $('.js--section-plans').offset().top
           }, 1000);
       });
          $('.js--scroll-to-steps').click(function () {
              $('html, body').animate({
                  scrollTop: $('.js--section-steps').offset().top
              }, 1000);
          });
             $('.js--scroll-to-cities').click(function () {
                 $('html, body').animate({
                     scrollTop: $('.js--section-cities').offset().top
                 }, 1000);
             });
                $('.js--scroll-to-signup').click(function () {
                    $('html, body').animate({
                        scrollTop: $('.js--section-signup').offset().top
                    }, 1000);
                });



 
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animate__pulse');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animate__fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animate__pulse');
    }, {
        offset: '50%'
    });


/* Mobile Nav Icon*/
$('.js--nav-icon').click(function(){
    const nav = $('.js--main-nav');
    const icon = $('.js--nav-icon i')
    nav.slideToggle(200);
     if (icon.hasClass('fa-bars')){
        icon.addClass('fa-times');
        icon.removeClass('fa-bars')
     }else {
icon.addClass('fa-bars');
icon.removeClass('fa-times')
     }
})

});

