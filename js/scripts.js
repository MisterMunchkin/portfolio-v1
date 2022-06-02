$(function () {

    // init feather icons
    feather.replace();

    // init tooltip & popovers
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 20
        }, 1000);
        event.preventDefault();
    });

    // slick slider
    $('.slick-about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });

    //toggle scroll menu
    var scrollTop = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //adjust menu background
        if (scroll > 80) {
            if (scroll > scrollTop) {
                $('.smart-scroll').addClass('scrolling').removeClass('up');
            } else {
                $('.smart-scroll').addClass('up');
            }
        } else {
            // remove if scroll = scrollTop
            $('.smart-scroll').removeClass('scrolling').removeClass('up');
        }

        scrollTop = scroll;

        // adjust scroll to top
        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });

    // scroll top top
    $('.scroll-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    /**Theme switcher - DEMO PURPOSE ONLY */
    $('.switcher-trigger').click(function () {
        $('.switcher-wrap').toggleClass('active');
    });
    $('.color-switcher ul li').click(function () {
        var color = $(this).attr('data-color');
        $('#theme-color').attr("href", "css/" + color + ".css");
        $('.color-switcher ul li').removeClass('active');
        $(this).addClass('active');
    });

    //To transition background color second section to white
    // var $target = $('.wrapper');
    // inView.threshold(0.3);
    // inView('section')
    // .on('enter', function (el) {
    //     var color = $(el).attr('data-background-color');
    //     $target.css('background-color', color);
    //     $target.css('transition', 'background .2s ease');
    // });

    //To make text transition to appear with ease
    // var $heroTextTarget = $('#hero-text');
    // var $heroSubtextTarget = $("#hero-subtext");
    // var $callToActionTarget = $(".call-to-action");
    // inView('#home')
    // .on('enter', function (el) {
    //     $heroTextTarget.css('opacity', '100');
    //     $heroSubtextTarget.css('opacity', '100');
    //     $callToActionTarget.css('opacity', '100');
    // })
    // .on('exit', function (el) {
    //     console.log('exited home page');
    // });

    var $contactUsPage = $('.contact-us-page');
    window.toggleContactUs = function() {
        if ($contactUsPage.hasClass('active')) {
            $contactUsPage.removeClass('active');
        } else {
            $contactUsPage.addClass('active');
        }
    }

    window.redirectToSocials = function (url) {
        window.location.href = url;
    }
});