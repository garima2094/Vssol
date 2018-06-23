$(document).ready(function () {
        var element = jQuery("body");
        element.find('.header').load("header.html");
        element.find(".footer").load("footer.html");

    var slider = element.find(".slider");
    if(slider.length != 0){
        slider.slick({
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoPlay: true
        });
    }
    var loadMore = element.find(".loadMore");
    if(loadMore.length !=0) {
        $('.loadMore').loadMoreResults({
            tag: {
                name: 'div',
                'class': 'image'
            },
            displayedItems: 8,
            showItems: 8
        });
    }
});
