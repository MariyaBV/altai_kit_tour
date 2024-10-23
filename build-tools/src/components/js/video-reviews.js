document.addEventListener('DOMContentLoaded', function () {
    var swiper_block_video_review = new Swiper('.video-review-swiper', {
        direction: 'horizontal',
        slidesPerGroup: 1,
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 10,
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10,
                centeredSlides: false,
            },
            1000: {
                slidesPerView: 2.5,
                slidesPerGroup: 2,
                spaceBetween: 24,
                centeredSlides: true,
            },
        },
        pagination: {
            el: '.video-review__swiper-pagination',
            type: 'bullets',
            clickable: true, 
        },
    });
});