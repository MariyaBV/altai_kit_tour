document.addEventListener('DOMContentLoaded', function () {
    var swiper_block_rour_team = new Swiper('.our-team-swiper', {
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
                spaceBetween: 15,
            },
        },
        navigation: {
            nextEl: '.our-team__swiper-button-next',
            prevEl: '.our-team__swiper-button-prev',
        },
        pagination: {
            el: '.our-team__swiper-pagination',
            type: 'bullets',
            clickable: true, 
        },
    });
});
