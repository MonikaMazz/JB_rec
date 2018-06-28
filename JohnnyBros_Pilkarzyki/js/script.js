$(document).ready(function() {
    
    
    // hamburger menu

    if ($(window).innerWidth() <= 1024) {
    $("#home ul").toggle();
    $("#home ul").toggleClass("responsive");
    $(".menu-icon").click(function() {
        $("#home ul").toggle();
        $(".menu-icon").toggleClass("change");

        });

        $(window).scroll(function() {
            var height = $(window).scrollTop();
        
            if(height  > 500) {
                $("#home nav").addClass('p-sticky');
            } else {
                $("#home nav").removeClass('p-sticky');
             }
        });

    };

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