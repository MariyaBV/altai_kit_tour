// $(document).ready(function () {
//     $('.custom-ordering .custom-ordering-trigger').on('click', function () {
//         $(this).closest('.custom-ordering-select').toggleClass('opened');
//     });

//     $('.custom-ordering-option').on('click', function () {
//         var $option = $(this);
//         var value = $option.data('value');
//         var label = $option.text().trim();

//         var $trigger = $option.closest('.custom-ordering-select').find('.custom-ordering-trigger');
//         $trigger.text(label);

//         console.log($trigger);

//         var $form = $option.closest('form');
//         $form.find('input[name="orderby"]').val(value);

//         $('.custom-ordering-option').removeClass('selected');
//         $option.addClass('selected');

//         if (value === '' || label === 'Сортировать') {
//             $trigger.removeClass('selected');
//         } else {
//             $trigger.addClass('selected');
//         }

//         $form.submit();
//     });

//     $(document).on('click', function (e) {
//         if (!$(e.target).closest('.custom-ordering-select').length) {
//             $('.custom-ordering-select').removeClass('opened');
//         }
//     });

//     function initOrderingState() {
//         var selectedOrderBy = $('.custom-ordering').find('input[name="orderby"]').val();
//         var $trigger = $('.custom-ordering-trigger');

//         if (selectedOrderBy === '' || $trigger.text().trim() === 'Сортировать') {
//             $trigger.removeClass('selected');
//         } else {
//             $trigger.addClass('selected');
//         }
//     }

//     initOrderingState();
// });
// $(document).ready(function () {
//     // Открытие/закрытие кастомного выпадающего списка
//     $('.custom-select-trigger').on('click', function () {
//         $(this).parents('.custom-select').toggleClass('opened');
//     });

//     // Закрытие выпадающего списка при клике вне его
//     $(document).on('click', function (e) {
//         if (!$(e.target).closest('.custom-select').length) {
//             $('.custom-select').removeClass('opened');
//         }
//     });

//     // Выбор элемента из кастомного списка
//     $('.custom-option').on('click', function () {
//         var $option = $(this);
//         var $selectContainer = $option.closest('.attribute-filters__select');
//         var value = $option.data('value');
//         var label = $option.text().trim();

//         $selectContainer.find('.custom-select-trigger').text(label);
//         $selectContainer.find('input[type="hidden"]').val(value);

//         $option.addClass('selected').siblings().removeClass('selected');

//         $selectContainer.find('.custom-select').removeClass('opened');

//         checkSelectValues();
//     });

//     // Инициализация: проверка текущих значений
//     // function checkSelectValues() {
//     //     $('.attribute-filters__select').each(function () {
//     //         const $selectContainer = $(this);
//     //         const $resetButton = $selectContainer.find('.reset-button');
//     //         const $verticalLine = $selectContainer.find('.vertical-line');
//     //         const $icon = $selectContainer.find('.icon-Down-3');
//     //         const $selectTrigger = $selectContainer.find('.custom-select-trigger');
//     //         const selectedOptionValue = $selectContainer.find('input[type="hidden"]').val().trim();

//     //         if (selectedOptionValue !== '') {
//     //             $selectContainer.addClass('option-selected');
//     //             $resetButton.css('display', 'block');
//     //             $verticalLine.css('display', 'block');
//     //             $icon.css('display', 'none');
//     //             $selectTrigger.addClass('selected-item-menu');
//     //         } else {
//     //             $selectContainer.removeClass('option-selected');
//     //             $resetButton.css('display', 'none');
//     //             $verticalLine.css('display', 'none');
//     //             $icon.css('display', 'block');
//     //             $selectTrigger.removeClass('selected-item-menu');
//     //         }
//     //     });
//     // }

//     // checkSelectValues();

//     // Сброс выбранного фильтра
//     $('.reset-button').on('click', function () {
//         const $selectContainer = $(this).closest('.attribute-filters__select');
//         const attributeLabel = $selectContainer.find('.custom-select-trigger').data('attribute-label');
        
//         $selectContainer.find('input[type="hidden"]').val('');
//         $selectContainer.find('.custom-select-trigger').text(attributeLabel);
//         $selectContainer.find('.custom-option').removeClass('selected');
//         checkSelectValues();
//     });

//     // Отслеживание изменений URL
//     function observeURLChanges(callback) {
//         let lastUrl = window.location.href;
//         new MutationObserver(() => {
//             const currentUrl = window.location.href;
//             if (currentUrl !== lastUrl) {
//                 lastUrl = currentUrl;
//                 callback();
//             }
//         }).observe(document, { subtree: true, childList: true });
//     }

//     observeURLChanges(checkSelectValues);
// });


$(document).ready(function () {
    // Открытие/закрытие кастомного выпадающего списка
    $('.custom-ordering-trigger, .custom-select-trigger').on('click', function () {
        var $trigger = $(this);
        var $container = $trigger.closest('.custom-ordering-select, .custom-select');

        $container.toggleClass('opened');
    });

    // Закрытие выпадающего списка при клике вне его
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.custom-ordering-select, .custom-select').length) {
            $('.custom-ordering-select, .custom-select').removeClass('opened');
        }
    });

    // Выбор элемента из кастомного списка
    $('.custom-ordering-option, .custom-option').on('click', function () {
        var $option = $(this);
        var $container = $option.closest('.custom-ordering-select, .attribute-filters__select');
        var value = $option.data('value');
        var label = $option.text().trim();

        // Обновление текста триггера
        $container.find('.custom-ordering-trigger, .custom-select-trigger').text(label);
        $container.find('input[type="hidden"], input[name="orderby"]').val(value);

        // Добавление класса 'selected'
        $option.addClass('selected').siblings().removeClass('selected');

        // Закрытие выпадающего списка
        $container.removeClass('opened');

        // Отправка формы (если это кастомный ordering)
        if ($container.hasClass('custom-ordering-select')) {
            $container.closest('form').submit();
        }

        checkSelectValues();
    });

    // Инициализация состояний при загрузке страницы
    function initOrderingState() {
        var selectedOrderBy = $('.custom-ordering').find('input[name="orderby"]').val();
        var $trigger = $('.custom-ordering-trigger');

        if (selectedOrderBy === '' || $trigger.text().trim() === 'Сортировать') {
            $trigger.removeClass('selected');
        } else {
            $trigger.addClass('selected');
        }
    }

    initOrderingState();

    // Проверка текущих значений для кастомных select
    function checkSelectValues() {
        $('.attribute-filters__select').each(function () {
            var $selectContainer = $(this);
            var $resetButton = $selectContainer.find('.reset-button');
            var $verticalLine = $selectContainer.find('.vertical-line');
            var $selectTrigger = $selectContainer.find('.custom-select-trigger');
            var selectedOptionValue = $selectContainer.find('input[type="hidden"]').val().trim();

            if (selectedOptionValue !== '') {
                $selectContainer.addClass('option-selected');
                $resetButton.css('display', 'block');
                $verticalLine.css('display', 'block');
                $selectTrigger.addClass('selected-item-menu');
            } else {
                $selectContainer.removeClass('option-selected');
                $resetButton.css('display', 'none');
                $verticalLine.css('display', 'none');
                $selectTrigger.removeClass('selected-item-menu');
            }
        });
    }

    checkSelectValues();

    // Сброс выбранного фильтра
    $('.reset-button').on('click', function () {
        var $selectContainer = $(this).closest('.attribute-filters__select');
        var attributeLabel = $selectContainer.find('.custom-select-trigger').data('attribute-label');
        
        $selectContainer.find('input[type="hidden"]').val('');
        $selectContainer.find('.custom-select-trigger').text(attributeLabel);
        $selectContainer.find('.custom-option').removeClass('selected');

        checkSelectValues();
    });

    // Отслеживание изменений URL
    function observeURLChanges(callback) {
        let lastUrl = window.location.href;
        new MutationObserver(() => {
            const currentUrl = window.location.href;
            if (currentUrl !== lastUrl) {
                lastUrl = currentUrl;
                callback();
            }
        }).observe(document, { subtree: true, childList: true });
    }

    observeURLChanges(checkSelectValues);
});
