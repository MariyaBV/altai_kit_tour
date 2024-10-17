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