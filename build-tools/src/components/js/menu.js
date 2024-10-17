$(document).ready(function ($) {
    // проверка URL и отображение каталога
    function checkCatalogInUrl() {
        var url = window.location.href;
        var blockCatalog = $('#block-tours');
        var header = $('#main-header');

        if (url.includes('#all_tours')) {
            blockCatalog.addClass('visible');
            header.addClass('z_index');
            openFirstItem();
        } else {
            blockCatalog.removeClass('visible');
            header.removeClass('z_index');
            resetToFirstItem();
        }
    }

    // открытие/закрытие каталога
    function toggleCatalog(event) {
        event.preventDefault();
        var blockCatalog = $('#block-tours');
        var header = $('#main-header');
        var url = window.location.href;

        if (blockCatalog.hasClass('visible')) {
            blockCatalog.removeClass('visible');
            header.removeClass('z_index');
            resetToFirstItem();
            history.pushState(null, null, window.location.pathname + window.location.search);
        } else {
            setTimeout(function () {
                blockCatalog.addClass('visible');
                header.addClass('z_index');
                openFirstItem();
            }, 200);
            history.pushState(null, null, '#all_tours');
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
        }
    }

    checkCatalogInUrl();

    //открытие и закртыие блока каталога
    $('a[href="#all_tours"]').on('click', toggleCatalog);
    $('#close-catalog-menu').on('click', closeCatalogMenu);

    // родительские элементы
    $('.block-tours__list_item > a').on('click', handleParentClick);

    // меню бургер
    $('#burger-menu').click(function () {
        $(this).toggleClass('active');
        $('#site-navigation').toggleClass('visible');
    });
});
