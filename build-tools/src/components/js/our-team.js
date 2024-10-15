document.addEventListener('DOMContentLoaded', function () {
    var swiper_block_reviews = new Swiper('.our-team-swiper', {
        direction: 'horizontal',
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 40,
        loop: true,
        navigation: {
            nextEl: '.our-team__swiper-button-next',
            prevEl: '.our-team__swiper-button-prev',
        },
        pagination: {
            el: '.our-team__swiper-pagination',
            type: 'bullets',
        },
    });
});
