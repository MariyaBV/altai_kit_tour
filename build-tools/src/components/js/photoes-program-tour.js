document.addEventListener('DOMContentLoaded', function () {
    const searchSections = document.querySelectorAll('.block-more-details__img');
    
    searchSections.forEach(searchSection => {
        const swiperElement = searchSection.querySelector('.swiper');
        if (swiperElement) {
            const swiperIDSlider = swiperElement.getAttribute('id');
            const slides = swiperElement.querySelectorAll('.swiper-slide');

            if (swiperIDSlider && slides.length > 0) {
                const sliderNextBtn = searchSection.querySelector('#next_' + swiperIDSlider);
                const sliderPrevBtn = searchSection.querySelector('#prev_' + swiperIDSlider);
                const sliderPagination = searchSection.querySelector('#pagination_' + swiperIDSlider);

                if (slides.length === 1) {
                    // Если только один слайд, скрываем кнопки и пагинацию
                    if (sliderNextBtn) sliderNextBtn.style.display = 'none';
                    if (sliderPrevBtn) sliderPrevBtn.style.display = 'none';
                    if (sliderPagination) sliderPagination.style.display = 'none';
                }

                const swiper_block_sliders = new Swiper("#" + swiperIDSlider, {
                    direction: 'horizontal',
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    loop: slides.length > 1,
                    navigation: {
                        nextEl: sliderNextBtn,
                        prevEl: sliderPrevBtn,
                    },
                    pagination: {
                        el: sliderPagination,
                        type: 'bullets',
                        clickable: true, 
                    },
                });
            }
        }
    });
});
