(function($) {
    "use strict";

    /*----------------------------
    1. Full page Preloader
    -----------------------------*/
    jQuery(window).on('load', function() {
        jQuery(".preloader").delay(350).fadeOut("slow");
    });

    /*----------------------------
    2. Mobile Menu Activation
    -----------------------------*/
    //sticky top
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 600) {
            $('.menu-area').addClass('sticky-top');
        } else {
            $('.menu-area').removeClass('sticky-top');
        }
    });
    //New Menu
    $(document).ready(function() {
        $('.header__burger').click(function(event) {
            $('.header__burger, .header__menu').toggleClass('active')
            $('body').toggleClass('lock')
        })
    })

    /*--------------------------
    3. Sticky Menu 
---------------------------- */

    $(document).ready(function() {
        $('.sticky-menu ul li a').click(function() {
            $('.sticky-menu ul li a').removeClass("active");
            $(this).addClass("active");
        });
    });

    $(".sticky-menu a").on("click", function(e) {
        var a = $(this);
        $("html, body").stop().animate({ scrollTop: $(a.attr("href")).offset().top - 0 }, 1500, "easeInOutExpo"), e.preventDefault()
    })

    /*----------------------------
    4. owl active
    ------------------------------ */

    var owl = $('.covid-section');
    owl.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            768: {
                items: 2,
                margin: 10
            },
            992: {
                items: 3,
                margin: 20
            }
        }
    });
    var owl = $('.blog-section');
    owl.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            768: {
                items: 2,
                margin: 10
            }
        }
    });
    /*--------------------------
    -------------------------
    5. video Section
    ---------------------------- */
    jQuery(document).ready(function() {

        jQuery("#gallery").unitegallery();

    });

    /*--------------------------
    -----------
    6. scrollUp
    ---------------- -- -- -- -- -- -- -
    - -- -- -- -- -- -- */
    $("body").delay(350).css({ overflow: "visible" }), $(window).on("scroll", function() { $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut() }), $(".back_top").click(function() { return $("html, body").animate({ scrollTop: 0 }, 1e3), !1 }), $("#wave_img").length && $("#wave_img").wavify({ height: 100, bones: 3, amplitude: 50, color: "#fff", speed: .25 });

})(jQuery);