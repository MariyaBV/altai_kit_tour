$(document).ready(function() {
    // Обработчик для кнопки "Показать все"
    $('.show-all').click(function(event) {
        event.preventDefault();
        
        var parentBlock = $(this).closest('.form__block');
        var moreOptionsBlock = parentBlock.find('.form__block_more');
        
        moreOptionsBlock.show();
        $(this).hide();
    });

    // Обработчик для кнопки "Свернуть"
    $('.hide-all').click(function(event) {
        event.preventDefault(); 

        var parentBlock = $(this).closest('.form__block');
        var moreOptionsBlock = parentBlock.find('.form__block_more');
        var showButton = parentBlock.find('.show-all');
        
        moreOptionsBlock.hide();
        showButton.show();
    });
});

$(document).ready(function () {
    $('#button_filteres').on('click', function (e) {
        e.preventDefault(); 
        $('#sidebar').toggleClass('visible-mobile');
        $('body').toggleClass('overflow-hidden');

        if ($('body').hasClass('overflow-hidden')) {
            unlockBodyScroll();
        } else {
            lockBodyScroll();
        }
    });

    $('#close-sidebar').on('click', function (e) {
        e.preventDefault(); 
        $('#sidebar').removeClass('visible-mobile');
        $('body').removeClass('overflow-hidden');
        unlockBodyScroll();
    });
});