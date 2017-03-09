$(function () {
    $('#banner.carousel').carousel({
        interval: 2000
    });

    Waves.init();


    // init Masonry
    var $grid = $('#gridImg').masonry({
        percentPosition: true,
        itemSelector: '.grid-img-item'
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
        $("#loading").addClass("hide");
        $grid.masonry('layout');
    });



// ===========点击======================

});


