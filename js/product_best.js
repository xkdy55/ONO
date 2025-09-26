$(document).ready(function() {
    var $productTitle = $('.product_left_img_title'); 

    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition > 140) {
            $productTitle.fadeIn(500);
        } else {
            $productTitle.fadeOut(500);
        }
    });
});
