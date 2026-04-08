// Header Hamburger menu Open/Close Functionality Start 

var hamburgerBtn = document.querySelector('.hamburger-button');
var closeBtn = document.querySelector('.close-btn');
var backDrop = document.querySelector('.backDrop');

hamburgerBtn.addEventListener('click', function() {
    backDrop.classList.add('pop-up-show');
    document.body.classList.add('scroll-y');
});

closeBtn.addEventListener('click', function() {
    backDrop.classList.remove('pop-up-show');
    document.body.classList.remove('scroll-y');
});

// Header Hamburger menu Open/Close Functionality End 

// Banner Slick Slider Initialization Start

$(document).ready(function(){
    $('.banner-wrapper').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
    });
});

// Banner Slick Slider Initialization End


// Product Content Slick Slider Initialization Start

var slickConfig = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'linear'
};

// Only initialize slick on the active (visible) tab on page load
$(document).ready(function(){
    $('.product-content.active .kitchen-content-slick').slick(slickConfig);
    $('.product-content.active .wardrobe-content-slick').slick(slickConfig);
});

// Product Content Slick Slider Initialization End
