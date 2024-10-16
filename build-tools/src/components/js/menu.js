$(document).ready(function($) {
    function checkCatalogInUrl() {
        var url = window.location.href;
        var blockCatalog = $('#block-tours');

        if (url.includes('#all_tours')) {
            blockCatalog.addClass('visible');
        } else {
            blockCatalog.removeClass('visible');
        }
    }

    function toggleCatalog(event) {
        event.preventDefault();
        var blockCatalog = $('#block-tours');
        var url = window.location.href;

        if (blockCatalog.hasClass('visible')) {
            blockCatalog.removeClass('visible');
            history.pushState(null, null, window.location.pathname + window.location.search);
        } else {
            setTimeout(() => {
                blockCatalog.addClass('visible');
            }, 200);
            history.pushState(null, null, '#all_tours');
        }
    }

    function closeCatalogMenu(event) {
        event.preventDefault();
        var blockCatalog = $('#block-tours');
        blockCatalog.removeClass('visible');
        history.pushState(null, null, window.location.pathname + window.location.search);
    }

    checkCatalogInUrl();

    $('a[href="#all_tours"]').on('click', toggleCatalog);

    $('#close-catalog-menu').on('click', closeCatalogMenu);
});


$(document).ready(function() {
    $('#burger-menu').click(function() {
        $(this).toggleClass('active');
        $('#site-navigation').toggleClass('visible');
    });
});
