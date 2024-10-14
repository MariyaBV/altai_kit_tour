document.addEventListener('DOMContentLoaded', function () {
    var swiper_block_reviews = new Swiper('.reviews-swiper', {
        direction: 'horizontal',
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 40,
        loop: true,
        navigation: {
            nextEl: '.reviews__swiper-button-next',
            prevEl: '.reviews__swiper-button-prev',
        },
        pagination: {
            el: '.reviews__swiper-pagination',
            type: 'bullets',
        },
    });
});
