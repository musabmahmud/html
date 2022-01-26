(function($) {
    "use strict";

    /*----------------------------
    1. Full page Preloader
    -----------------------------*/
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(350).fadeOut("slow");
    });

    /*--------------------------
    2. sticky sider bar
    ---------------------------- */
    $('#aboutcontent').theiaStickySidebar({
        additionalMarginTop: 30
    });

    /*----------------------------
    3. Mobile Menu Activation
    -----------------------------*/
    $('.main-menu').meanmenu({
        meanMenuContainer: 'header',
        meanScreenWidth: 768,
        onePage: true
    });
    $(function() {
        $("#element").kenburnsy({
            fullscreen: true
        });
    });


    /*--------------------------
    4. Sticky Menu 
---------------------------- */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 600) {
            $('#sticky').addClass('sticky');
        } else {
            $('#sticky').removeClass('sticky');
        }
    });

    $(document).ready(function() {
        $('ul li a').click(function() {
            $('li a').removeClass("active");
            $(this).addClass("active");
        });
    });

    $(".main-menu a").on("click", function(e) {
        var a = $(this);
        $("html, body").stop().animate({ scrollTop: $(a.attr("href")).offset().top - 0 }, 1500, "easeInOutExpo"), e.preventDefault()
    })

    /*----------------------------
    5. owl active
    ------------------------------ */

    var teamCarousel = $('.about-slider');
    if (teamCarousel.length) {
        teamCarousel.owlCarousel({
            items: 1,
            autoPlay: true,
            loop: true,
            margin: 0,
            navSpeed: 1500,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        });
    };

    var teamCarousel = $('.custom-blog');
    if (teamCarousel.length) {
        teamCarousel.owlCarousel({
            items: 1,
            autoPlay: true,
            loop: true,
            navSpeed: 1500,
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
                },
                992: {
                    items: 3,
                    margin: 20
                }
            }
        });
    };
    var owl = $('');
    owl.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 1200,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            600: {
                items: 1,
                margin: 0
            },
            1000: {
                items: 3,
                margin: 10
            }
        }
    });
    /*--------------------------
    6. On Hover active
    ---------------------------- */
    var singlepricing = $('.pr-card')

    singlepricing
        .mouseover(function() {
            singlepricing.removeClass('active');
            $(this).addClass('active');
        });

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
    /*----------------------------
    8. magnific Popup active
    ------------------------------ */
    $('').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: true,
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });
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
    AOS.init();

    new WOW().init();


    /*--------------------------
    -----------
    11. scrollUp
    ---------------- -- -- -- -- -- -- -
    - -- -- -- -- -- -- */
    $("body").delay(350).css({ overflow: "visible" }), $(window).on("scroll", function() { $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut() }), $(".back_top").click(function() { return $("html, body").animate({ scrollTop: 0 }, 1e3), !1 }), $("#wave_img").length && $("#wave_img").wavify({ height: 100, bones: 3, amplitude: 50, color: "#fff", speed: .25 });

})(jQuery);