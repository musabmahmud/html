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
    jQuery('').meanmenu({
        meanScreenWidth: "576",
    });



    /*--------------------------
    4. Sticky Menu 
---------------------------- */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 400) {
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

    var owl = $('.owl-custom-theme');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1800,
        autoplayHoverPause: true
    });
    var owl = $('.owl-custom-blog');
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
    6. jarallax active
    ---------------------------- */

    particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });



    /*----------------------------
    7. isotope active
    ------------------------------ */
    var $grid = $('.work-filter').isotope({
        itemSelector: '.project-item',
        stagger: 30
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