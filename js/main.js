$(window).on('scroll', function () {
    console.log('스크롤', $(window).scrollTop());
    if ($(window).scrollTop() > 0) {
        $('#header_scroll').addClass('on');
    }
    else {
        $('#header_scroll').removeClass('on');
    }


    $('.mainSlide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.mainSlide').on('init afterChange', function (e, s, c) {
        //c = 0,1,2
        var current = $('.mainSlide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.mainVisual .main_slide_dots li').removeClass('on');
        $('.mainVisual .main_slide_dots li').eq(c ? c : 0).addClass('on');
    });

    $('.mainVisual .main_slide_dots button').on('click', function () {
        var idx = $(this).parent().index();
        $('.mainSlide').slick('slickGoTo', idx);
    });

    $('.mainVisual .main_slide_dots li').on('click', function () {
        $('.mainVisual .main_slide_dots li').removeClass('on');
        $(this).addClass('on');

    });


});




