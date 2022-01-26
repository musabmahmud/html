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


    new WOW().init();
    /*----------------------------
    3. Mobile Menu Activation
    -----------------------------*/
    jQuery('navbar').meanmenu({
        meanScreenWidth: "576",
    });



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

    $(".navbar-nav a,.arrow-bottom a").on("click", function(e) {
        var a = $(this);
        $("html, body").stop().animate({ scrollTop: $(a.attr("href")).offset().top - 0 }, 1500, "easeInOutExpo"), e.preventDefault()
    });

    $(".auto-typed").each(function() {
        var e = $(this);
        e.typed({
            strings: e.attr("data-elements").split(","),
            typeSpeed: 100,
            backDelay: 3e3
        });
    });




    /*----------------------------
    5. owl active
    ------------------------------ */


    /*----------------------------
    7. isotope active
    ------------------------------ */
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        stagger: 30,
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
    $('.gallery').magnificPopup({
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
    //POP YOUTUBE
    $(document).ready(function() {
        $('.popup-youtube').magnificPopup({
            type: 'iframe'
        });
    });


    $('.youtube').magnificPopup({
        items: {
            src: 'https://www.youtube.com/watch?v=124qhYkJG2w'
        },
        type: 'iframe'
    });
    /*--------------------------
    -------------------------
    11. fadein
    ---------------------------- */
    AOS.init();



    /*--------------------------
    -----------
    11. scrollUp
    ---------------- -- -- -- -- -- -- -
    - -- -- -- -- -- -- */
    $(".back_top").click(function() { return $("html, body").animate({ scrollTop: 0 }, 1e3), !1 });

})(jQuery);