$(document).ready(function() {
    $('a[href="#booking"]').on('click', function(event) {
        event.preventDefault();
        $('#block_booking').addClass('visible');
        $('body').addClass('overflow-hidden');
        $('#overlay').addClass('visible');
        lockBodyScroll();
    });

    $('#close_booking_form').on('click', function(event) {
        event.preventDefault();
        $('#block_booking').removeClass('visible');
        $('body').removeClass('overflow-hidden');
        $('#overlay').removeClass('visible');
        unlockBodyScroll();
    });

    $('#overlay').on('click', function(event) {
        event.preventDefault();
        $('#block_booking').removeClass('visible');
        $('body').removeClass('overflow-hidden');
        $('#overlay').removeClass('visible');
        unlockBodyScroll();
    });
});
