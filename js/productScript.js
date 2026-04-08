
var productTabs = document.querySelectorAll('.productTabs');
var productContent = document.querySelectorAll(".product-content");

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

// Activate a tab by name
function activateTab(tabName, animate) {
    // Update tab buttons
    productTabs.forEach(function(tab) {
        tab.classList.remove('active');
        if (tab.getAttribute('data-tabname') === tabName) {
            tab.classList.add('active');
        }
    });

    var currentActive = document.querySelector('.product-content.active');
    var newContent = document.querySelector('.product-' + tabName + '-content');

    if (!newContent || currentActive === newContent) return;

    function showNewTab() {
        // Hide all content
        productContent.forEach(function(content) {
            content.classList.remove('active', 'fade-in', 'fade-out');
        });

        // Show and fade in new content
        newContent.classList.add('active');
        // Force reflow so transition triggers
        newContent.offsetHeight;
        newContent.classList.add('fade-in');

        // Destroy and reinitialize slick to ensure correct dimensions
        var $slider = $(newContent).find('.kitchen-content-slick, .wardrobe-content-slick');
        if ($slider.length) {
            setTimeout(function() {
                if ($slider.hasClass('slick-initialized')) {
                    $slider.slick('unslick');
                }
                $slider.slick(slickConfig);
            }, 50);
        }
    }

    if (animate && currentActive) {
        // Fade out current tab
        currentActive.classList.add('fade-out');
        setTimeout(function() {
            showNewTab();
        }, 400);
    } else {
        showNewTab();
    }
}

// On page load, check URL for ?tab= parameter
var urlParams = new URLSearchParams(window.location.search);
var tabParam = urlParams.get('tab');
if (tabParam) {
    activateTab(tabParam);
}

// Product Tabs / Product Content Functionality Start

productTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        var tabName = this.getAttribute('data-tabname');
        activateTab(tabName, true);
    });
});


// Product Tabs / Product Content Functionality End
