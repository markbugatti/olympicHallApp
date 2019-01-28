var myFullpage = new fullpage('#fullpage', {
    licenseKey: '981093A2-2C134508-B175A706-5E3F2241',
    // sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage'],
    // menu: '#menu',
    slidesNavigation: true,
    responsiveHeight: 330,
    // scrollingSpeed: 300,
    controlArrows: false,
    // scrolling
    css3: false,
    touchSensitivity: 18,
    // accessibility
    recordHistory: false,

    // design
    paddingTop: '56px',
    controlArrows: true,
    autoScrolling: false,
    // navigationTooltips: ['First page', 'Second page', 'Third and last page']
    // Callbacks
    afterSlideLoad: gallerySize(),
    afterResize: function () {
        gallerySize();
        },
    onLeave: function (origin, destination, direction) {
        fullpage_api.setScrollingSpeed(700);
    },
    onSlideLeave: function (section, origin, destination, direction) {
        fullpage_api.setScrollingSpeed(200);
    }
});

// gallery rotation
function gallerySize() {
    if($(window).width()>$(window).height()) {
        $('.glr-slide').css({"background-size": "auto 145%"})
    }
    else {
        $('.glr-slide').css({"background-size": "145% auto"})
    }
};

// fullscreen photo
// push mouse
// get element by id
// fullscreen it
$(window).click(function (e) {
    console.dir(e);
})