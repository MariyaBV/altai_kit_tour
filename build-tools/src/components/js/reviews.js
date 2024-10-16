document.addEventListener('DOMContentLoaded', function () {
    var swiper_block_reviews = new Swiper('.reviews-swiper', {
        direction: 'horizontal',
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 40,
            },
        },
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
