var myFullpage = new fullpage('#fullpage', {
    licenseKey: '981093A2-2C134508-B175A706-5E3F2241',
    // sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage'],
    // menu: '#menu',
    slidesNavigation: true,
    // responsiveHeight: 330,
    // scrollingSpeed: 1000,
    controlArrows: false,
    // scrolling
    // css3: false,
    // touchSensitivity: 18,
    // accessibility
    recordHistory: false,

    // design
    // paddingTop: '44px',
    controlArrows: true,
    // autoScrolling: false,
    // fitToSection: false,
    // navigationTooltips: ['First page', 'Second page', 'Third and last page']
    // Callbacks

    afterLoad: function (origin, destination, direction) {
        //change color
        // adjustNav($(destination.item).css('background-color'));
    },
    afterSlideLoad: gallerySize(),
    afterResize: function () {
        gallerySize();
    },
    onLeave: function (origin, destination, direction) {
        fullpage_api.setScrollingSpeed(1200);
        adjustNav($(destination.item).css('background-color'));
    },
    onSlideLeave: function (section, origin, destination, direction) {
        fullpage_api.setScrollingSpeed(200);
    }
});

function adjustNav(color) {
    var rgb;
    rgb = color.replace(/[^\d,]/g, '').split(',');
    color = 'rgb(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ')';

    $('.navbar').css({"background-color": color});

    switch (color.toString()) {
        case "rgb(42, 99, 99)":
            // light font color
            adjustCss('navbar-light', 'navbar-dark', 1);
            break;
        case "rgb(242, 242, 242)":
            // dark font color
            adjustCss('navbar-dark', 'navbar-light', 0);
            break;
        default:
            break;
    }

    function adjustCss(nav_rem, nav_add, invert) {
        // it will change text color in nav
        $('.navbar').removeClass(nav_rem);
        $('.navbar').addClass(nav_add);
        // it will change color in contacts
        $('.nav-contacts,.nav-btn-contacts, .fp-slidesNav span').css({'filter': 'invert(' + invert + ')'});
        $('.nav-contacts, .nav-btn-contacts, .fp-slidesNav span').css({'-webkit-filter': 'invert(' + invert + ')'});
        $('.nav-contacts, .nav-btn-contacts, .fp-slidesNav span').css({'-ms-filter': 'invert(' + invert + ')'});
    }

}

// gallery rotation
function gallerySize() {
    if ($(window).width() > $(window).height()) {
        $('.glr-slide').css({"background-size": "auto 100%"})
    }
    else {
        $('.glr-slide').css({"background-size": "100% auto"})
    }
};

// enable menu after page load to avoid non stylized text
$(window).on('load', function () {
    $('.navbar').css({"visibility": "visible"});
})