$(document).ready(function () {
    $("body").ready(function () {
        var element = jQuery(this);
        element.find('.header').load("header.html");
        element.find(".footer").load("footer.html");

    });
    $('body').find(".slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoPlay: true
    });
});
