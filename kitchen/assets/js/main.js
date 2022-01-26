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

    $('.nav__trigger', ).on('click', function(e) {

        // prevent default behavior
        e.preventDefault();

        // add nav--active class to nav icon
        $(this).parent().toggleClass('nav--active').show();

        // disable scroll behind nav
        $('body').toggleClass('no-scroll');

    });
    $('.nav li, .nav').on('click', function() {
        $(".nav__trigger").parent().removeClass("nav--active");
        $(".nav__icon").removeClass("nav--active");
        $('body').removeClass('no-scroll');
    });

    /*--------------------------
        4. Sticky Menu 
    ---------------------------- */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('#sticky').addClass("sticky");
        } else {
            $('#sticky').removeClass("sticky");
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
    //Header-area
    var teamCarousel = $('#header-slider');
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
    //TEAM CAROUSEL
    var teamCarousel = $('.team-carousel');
    if (teamCarousel.length) {
        teamCarousel.owlCarousel({
            autoPlay: true,
            loop: true,
            margin: 30,
            navSpeed: 1500,
            nav: true,
            pagination: false,
            dots: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 4
                }
            }
        });
    };
    $('#myTab a').on('click', function(e) {
        e.preventDefault()
        $(this).tab('show')
    })

    //Blog Area
    var teamCarousel = $('.custom-blog');
    if (teamCarousel.length) {
        teamCarousel.owlCarousel({
            items: 4,
            autoPlay: true,
            loop: true,
            margin: 30,
            navSpeed: 1500,
            nav: true,
            animateOut: 'slideOutUp',
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                768: {
                    items: 2,
                    nav: true
                },
                992: {
                    items: 3
                }
            }
        });
    };
    /*----------------------------
    7. isotope active
    ------------------------------ */
    var $grid = $('.portfolio-filter').isotope({
        itemSelector: '.portfolio-item',
        stagger: 30,
        margin: 10
    });

    $('.filter-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });


    // change is-checked class on buttons

    $('.filter-button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });

    // show all items
    $grid.isotope({ filter: '*' });

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