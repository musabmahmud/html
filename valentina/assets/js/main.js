(function($) {
    "use strict";

    /*----------------------------
    1. Full page Preloader
    -----------------------------*/
    jQuery(window).on('load', function() {
        jQuery(".preloader").delay(350).fadeOut("slow");
    });


    /*--------------------------
    2. Menu
    ---------------------------- */


    /*----------------------------
    3. Mobile Menu Activation
    -----------------------------*/
    jQuery('navbar').meanmenu({
        meanScreenWidth: "576",
    });

    //New Menu
    $(document).ready(function() {
        $('.header__burger').click(function(event) {
            $('.header__burger, .header__menu').toggleClass('active')
            $('body').toggleClass('lock')
        })
    })

    /*--------------------------
    4. Sticky Menu 
---------------------------- */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 600) {
            $('nav').addClass('black');
        } else {
            $('nav').removeClass('black');
        }
    });

    $(document).ready(function() {
        $('ul li a').click(function() {
            $('li a').removeClass("active");
            $(this).addClass("active");
        });
    });

    $(".navbar-nav a").on("click", function(e) {
        var a = $(this);
        $("html, body").stop().animate({ scrollTop: $(a.attr("href")).offset().top - 0 }, 1500, "easeInOutExpo"), e.preventDefault()
    })


    /*----------------------------
    5. owl active
    ------------------------------ */
    //team-area
    var teamCarousel = $('.owl-cus-team');
    if (teamCarousel.length) {
        teamCarousel.owlCarousel({
            items: 4,
            autoPlay: true,
            loop: true,
            margin: 30,
            navSpeed: 1500,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                576: {
                    items: 2
                },
                992: {
                    items: 4
                }
            }
        });
    };

    /* -------------------------------------------------------
    8. PORTFOLIO FILTER SET ACTIVE CLASS FOR STYLE
        ----------------------------------------------------------*/
    $('.portfolio-filter li').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    /* ----------------------------------------------------
     PORTFOLIO MASONRY STYLE ISOTOPE
    ------------------------------------------------------*/
    var $varPortfolioMasonry = $('.portfolio-masonry');
    if (typeof imagesLoaded == 'function') {
        imagesLoaded($varPortfolioMasonry, function() {
            setTimeout(function() {
                $varPortfolioMasonry.isotope({
                    itemSelector: '.portfolio-item',
                    resizesContainer: false,
                    fitWidth: true,
                    layoutMode: 'masonry',
                    filter: '*'
                });
            }, 500);

        });
    };

    /* ---------------------------------------------------
     PORTFOLIO FILTERING ISOTOPE
     ---------------------------------------------------- */
    $('.portfolio-filter-button').on('click', 'a', function() {
        $(this).addClass('current');
        var filterValue = $(this).attr('data-filter');
        $(this).parents('.portfolio-filter').next().isotope({
            filter: filterValue
        });
    });


    $grid.isotope({ filter: '*' });
    /*----------------------------
    8. magnific Popup active
    ------------------------------ */
    $('.portfolio-gallery').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        gallery: {
            enabled: true
        }
    });

    /*--------------------------
    -------------------------
    11. fadein
    ---------------------------- */
    new WOW().init();


    /*--------------------------
    -----------
    11. scrollUp
    ---------------- -- -- -- -- -- -- -
    - -- -- -- -- -- -- */
    $("body").delay(350).css({ overflow: "visible" }), $(window).on("scroll", function() { $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut() }), $(".back_top").click(function() { return $("html, body").animate({ scrollTop: 0 }, 1e3), !1 }), $("#wave_img").length && $("#wave_img").wavify({ height: 100, bones: 3, amplitude: 50, color: "#fff", speed: .25 });

})(jQuery);