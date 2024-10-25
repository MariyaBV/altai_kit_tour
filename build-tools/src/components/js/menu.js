$(document).ready(function ($) {
    // открытие/закрытие каталога
    function toggleCatalog(event) {
        event.preventDefault();

        var blockCatalog = $('#block-tours');
        var header = $('#main-header');

        if (blockCatalog.hasClass('visible')) {
            blockCatalog.removeClass('visible');
            header.removeClass('z_index');
            resetToFirstItem();
        } else {
            setTimeout(function () {
                blockCatalog.addClass('visible');
                header.addClass('z_index');
                if ($(window).width() >= 767) {
                    openFirstItem();
                }
            }, 200);
        }
    }

    // закрываем католог
    function closeCatalogMenu(event) {
        event.preventDefault();
        $('#main-header').removeClass('z_index');
        $('#block-tours').removeClass('visible');
        resetToFirstItem(); // Скрываем все, кроме первого элемента
        history.pushState(null, null, window.location.pathname + window.location.search);
    }

    // открываем первый элемент в списке
    function openFirstItem() {
        var firstParent = $('.block-tours__list_item').first();
        if (firstParent.length) {
            firstParent.addClass('visible').removeClass('hidden');
            
            var submenu = firstParent.find('.block-tours__list_item__inner');
            if (submenu.length) {
                submenu.addClass('visible').removeClass('hidden');
            }
        }
    }

    // сброс списка - скрываются все элементы, кроме первого
    function resetToFirstItem() {
        var firstParent = $('.block-tours__list_item').first();

        // Скрываем все родительские элементы и подменю
        $('.block-tours__list_item').removeClass('visible').addClass('hidden');
        $('.block-tours__list_item__inner').removeClass('visible').addClass('hidden');

        // Оставляем первый родительский элемент видимым
        firstParent.addClass('visible').removeClass('hidden');
        var submenu = firstParent.find('.block-tours__list_item__inner');
        if (submenu.length) {
            submenu.addClass('visible').removeClass('hidden');
            var text = submenu.first().siblings('a').find('span').text().trim();
            $('#menu-back-button .back-text').text(text);
        }
    }

    // клик по родительским элементам
    function handleParentClick(event) {
        event.preventDefault();
        var parentItem = $(this).parent();

        // Закрываем все списки и удаляем класс visible у всех родителей
        $('.block-tours__list_item').removeClass('visible').addClass('hidden');
        $('.block-tours__list_item__inner').removeClass('visible').addClass('hidden');

        // Открываем текущий родительский элемент
        parentItem.addClass('visible').removeClass('hidden');
        var submenu = parentItem.find('.block-tours__list_item__inner');

        if (submenu.length) {
            submenu.addClass('visible').removeClass('hidden');
            var text = submenu.first().siblings('a').find('span').text().trim();
            $('#menu-back-button .back-text').text(text);
            $('#menu-back-button').removeClass('lastUl');
        }
    }

    //открытие и закртыие блока каталога
    $('#all_tours').on('click', function (event) { 
        event.preventDefault();
        var text = $('#all_tours').find('span').text().trim();
        $('#menu-back-button .back-text').text(text);
        $('#menu-back-button').removeClass('hidden');
        toggleCatalog(event);
    });
    
    $('#close-catalog-menu').on('click', closeCatalogMenu);

    // родительские элементы
    $('.block-tours__list_item > a').on('click', handleParentClick);

    $('#menu-back-button').on('click', 'a.back-button', function (e) {
        e.preventDefault();

        // Закрываем последнее открытое подменю и возвращаемся на уровень выше
        var $lastOpenedMenu = $('#block-tours .sub-menu.visible').last();
        $lastOpenedMenu.removeClass('visible');
        $lastOpenedMenu.parent().removeClass('visible');

        // Если подменю больше нет, скрываем кнопку "Назад" и возвращаемся на первый уровень
        if (($('#block-tours .sub-menu.visible').length === 0) && ($('#menu-back-button').hasClass('lastUl'))){
            $('#menu-back-button').addClass('hidden');
            $('#block-tours').removeClass('visible');
         } else {
            // Меняем текст кнопки "Назад" на предыдущий уровень меню
            var newBackText = $('#block-tours .menu-item-has-children.visible > a').find('span').text().trim();
            $('#menu-back-button .back-text').text(newBackText);

            if (($('#block-tours .sub-menu.visible').length === 0) && (!newBackText) && (!$('#menu-back-button').hasClass('lastUl'))){
                var text = $('#all_tours').find('span').text().trim();
                $('#menu-back-button .back-text').text(text);
                $('#menu-back-button').addClass('lastUl');
            } 
        }
    });
});

$(document).ready(function () {
    // меню бургер
    $('#burger-menu').click(function () {
        $(this).toggleClass('active');
        $('.header .top-menu').toggleClass('visible');
        $('#overlay').toggleClass('visible');
        //$('body').toggleClass('overflow-hidden');

        if ($('#overlay').hasClass('visible')) {
            lockBodyScroll();
        } else {
            unlockBodyScroll();
        }

        if (!$('.header .top-menu').hasClass('visible')) {
            $('#block-tours').removeClass('visible');
            $('#menu-back-button').addClass('hidden').removeClass('lastUl').removeClass('visible');
            $('#menu-back-button a span').text('');
            $('.block-tours__list_item.menu-item-has-children').addClass('hidden').removeClass('visible');
            $('.block-tours__list_item__inner.sub-menu').addClass('hidden').removeClass('visible');
        }
    });
});