(function($) {
    "use strict";

    // scroll 
    $(document).ready(function () {
        $("#fullview").fullView({
            //Navigation
            navbar: "#navbar",
            backToTop: false,
            dots: true,
            dotsPosition: 'right',
        })
    });

    //mean menu
    jQuery(document).ready(function () {
        jQuery('.mobile_menu').meanmenu({
            meanExpand: '<i class="fas fa-angle-down"></i>',
            meanContract: '<i class="fas fa-angle-up"></i>',
        });
    });
})(jQuery);


