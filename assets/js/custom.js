$(document).ready(function () {
    $("body").ready(function () {
        var element = jQuery(this);
        element.find('.header').load("header.html");
        element.find(".footer").load("footer.html");

    });
    var slider = jQuery('body').find(".slider");
    if(slider.length != 0){
        slider.slick({
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoPlay: true
        });
    }
});
