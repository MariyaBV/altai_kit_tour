document.addEventListener('DOMContentLoaded', function () {
    var swiper_block_photoes_tour = new Swiper('.photoes-tour-swiper', {
        direction: 'horizontal',
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
            nextEl: '.photoes-tour__swiper-button-next',
            prevEl: '.photoes-tour__swiper-button-prev',
        },
        pagination: {
            el: '.photoes-tour__swiper-pagination',
            type: 'bullets',
            clickable: true, 
        },
    });
});
