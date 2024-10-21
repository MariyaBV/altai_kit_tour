document.addEventListener('DOMContentLoaded', function () {
    var swiper_block_video_review = new Swiper('.video-review-swiper', {
        direction: 'horizontal',
        slidesPerGroup: 2,
        slidesPerView: 2.5,
        centeredSlides: true,
        spaceBetween: 24,
        loop: true,
        pagination: {
            el: '.video-review__swiper-pagination',
            type: 'bullets',
            clickable: true, 
        },
    });
});