

$(function () {
    $('.mainSlide').on('init afterChange', function (e, s, c) {
        //c = 0,1,2
        var current = $('.mainSlide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.mainVisual .main_slide_dots li').removeClass('on');
        $('.mainVisual .main_slide_dots li').eq(c ? c : 0).addClass('on');
    });

    $('.mainSlide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    $('.mainVisual .main_slide_dots button').on('click', function () {
        var idx = $(this).parent().index();
        $('.mainSlide').slick('slickGoTo', idx);
    });

    $('.mainVisual .main_slide_dots li').on('click', function () {
        $('.mainVisual .main_slide_dots li').removeClass('on');
        $(this).addClass('on');

    });


    // 스크롤 이벤트

    $(window).on('scroll', function () {
        console.log('스크롤', $(window).scrollTop());
        if ($(window).scrollTop() > 0) {
            $('#header_scroll').addClass('on');
        }
        else {
            $('#header_scroll').removeClass('on');
        }

    });

    $("#bgndVideo").YTPlayer({
        videoURL: 'j6TUohZvcPg',
        containment: '.mainYoutubeBg',
        showControls: false,
        mute: true,
        playOnlyIfVisible: true,
    });

    $('.promotion_slide').slick({
        slidesToShow: 5,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.promotion_slide_controller>button:first-child').on('click', function () {
        $('.promotion_slide').slick('slickPrev')
    });

    $('.promotion_slide_controller>button:last-child').on('click', function () {
        $('.promotion_slide').slick('slickNext')
    });

    $('.promotion_slide_controller ul button').on('click', function () {
        var idx = $(this).parent().index();
        $('.promotion_slide').slick('slickGoTo', idx)
    });

    $('.mainCustomer .main_tab_menu>li button').on('click', function () {
        var idx = $(this).parent().index();
        $('.mainCustomer .main_tab_content>li').removeClass('on');
        $('.mainCustomer .main_tab_content>li').eq(idx).addClass('on');

        $('.mainCustomer .main_tab_menu>li').removeClass('on');
        $(this).parent().addClass('on');
    });




















})






