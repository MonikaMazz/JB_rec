$(document).ready(function() {
    
    
    // hamburger menu
    $(".menu-icon").click(function() {
        $(".menu-icon").toggleClass('change');
        $("nav #menu").toggle(function () {
            $("nav #menu").addClass("d-none");
            $("nav #menu ul li").removeClass("d-block");
        }, function () {
            $("nav #menu").removeClass("d-none");
            $("nav #menu ul li").addClass("d-block");

        });
    });



    //   SCROLL
    var scrollLink = $('.scroll');

    
    // Smooth scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000 );
    });

    // Active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

            var sectionOffset = $(this.hash).offset().top - 20;

            if ( sectionOffset <= scrollbarLocation ) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });

    });

});