$(document).ready(function ($) {
    // проверка URL и отображение каталога
    function checkCatalogInUrl() {
        // Проверяем ширину экрана перед выполнением функции
        if ($(window).width() < 767) {
            return; // Прерываем выполнение, если ширина экрана меньше 768px
        }

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

        // Проверяем ширину экрана перед выполнением функции
        if ($(window).width() < 767) {
            return; // Прерываем выполнение, если ширина экрана меньше 768px
        }

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

        // Проверяем ширину экрана перед выполнением функции
        if ($(window).width() < 767) {
            return; // Прерываем выполнение, если ширина экрана меньше 768px
        }

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
});

$(document).ready(function () {
    // меню бургер
    $('#burger-menu').click(function () {
        $(this).toggleClass('active');
        $('.header .top-menu').toggleClass('visible');
        $('#overlay').toggleClass('visible');
        $('body').toggleClass('overflow-hidden');
    });
});

//выпадающий список
$(document).ready(function () {
    // Открытие и закрытие подменю при клике на любой элемент с подменю
    $('#site-navigation').on('click', '.menu-item-has-children > a', function (event) {
        event.preventDefault();

        // Проверяем ширину экрана перед выполнением функции
        if ($(window).width() > 768) {
            return; // Прерываем выполнение, если ширина экрана больше 768px
        }

        var $menu = $(this).closest('.menu-item-has-children').find('ul.sub-menu').first();
        var parentText = $(this).find('p').text().trim(); // Текст текущего пункта меню

        // Проверяем состояние меню (открытое/закрытое)
        if ($menu.hasClass('show')) {
            // Закрываем текущее меню
            $menu.removeClass('show').addClass('hide');
            $(this).removeClass('selected-item-menu');

            // Если все подменю закрыты, скрываем кнопку "Назад"
            if ($('#site-navigation .sub-menu.show').length === 0) {
                $('#menu-back-button').addClass('hidden');
            }
        } else {
            // Закрываем все открытые подменю
            $('#site-navigation .sub-menu').removeClass('show').removeClass('hide');
            $('#site-navigation a.selected-item-menu').removeClass('selected-item-menu');

            // Открываем текущее подменю и добавляем активный класс
            $menu.removeClass('hide').addClass('show'); // Открываем текущее меню
            $(this).addClass('selected-item-menu');

            // Показать кнопку "Назад" с текстом текущего меню
            $('#menu-back-button').removeClass('hidden');
            $('#menu-back-button .back-text').text(parentText);
        }

        // Проверяем состояние родит элемента
        var $parentMenu = $(this).closest('.menu-item-has-children').parent().closest('ul.sub-menu');

        if ($menu.hasClass('show') && $parentMenu) {
            $parentMenu.addClass('hide');
            $parentMenu.removeClass('show');
        } else if ($menu.hasClass('hide')) {
            $parentMenu.addClass('show');
            $parentMenu.removeClass('hide');
            

        }
    });

    // Обработка кнопки "Назад"
    $('#menu-back-button').on('click', 'a.back-button', function (e) {
        e.preventDefault();

        // Закрываем последнее открытое подменю и возвращаемся на уровень выше
        var $lastOpenedMenu = $('#site-navigation .sub-menu.show').last();
        $lastOpenedMenu.removeClass('show');
        $parentOpenedPrev = $lastOpenedMenu.closest('.menu-item-has-children').parent().closest('ul.sub-menu');
        $parentOpenedPrev.removeClass('hide').addClass('show');
        var parentOpenedPrevPrevText = $parentOpenedPrev.closest('.menu-item-has-children').parent().find('p').first().text().trim();
        $('#menu-back-button .back-text').text(parentOpenedPrevPrevText);
        $parentOpenedPrev.siblings('a.menu-list__link').addClass('selected-item-menu');
        var $lastSelectedItem = $('#site-navigation a.selected-item-menu').last();
        $lastSelectedItem.removeClass('selected-item-menu');

        // Если подменю больше нет, скрываем кнопку "Назад"
        if ($('#site-navigation .sub-menu.show').length === 0) {
            $('#menu-back-button').addClass('hidden');
        } else {
            // Меняем текст кнопки "Назад" на предыдущий уровень меню
            var newBackText = $('#site-navigation .menu-item-has-children > a.selected-item-menu').last().find('p').text().trim();
            $('#menu-back-button .back-text').text(newBackText);
        }
    });
});

$(document).ready(function() {
    // Проверка при загрузке страницы
    if ($(window).height() < 800 && $(window).width() < 768) {
        $('.header .top-menu .menu-list__item.sub-menu').css('height', 'calc(100% - 130px)');
    }

    // Проверка при изменении размера окна
    $(window).resize(function() {
        if ($(window).height() < 800 && $(window).width() < 768) {
            $('.header .top-menu .menu-list__item.sub-menu').css('height', 'calc(100% - 130px)');
        }
    });
});
