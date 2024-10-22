document.addEventListener('DOMContentLoaded', function () {
    const searchSections = document.querySelectorAll('.reviews-year');

    searchSections.forEach(searchSection => {
        const swiperElement = searchSection.querySelector('.swiper');
        if (swiperElement) {
            const swiperIDSlider = swiperElement.getAttribute('id');
            if (swiperIDSlider) {
                const controls = searchSection.querySelectorAll("#" + swiperIDSlider + "_controls li");
                const slides = searchSection.querySelectorAll("#" + swiperIDSlider + "_slide .swiper-slide.reviews-year__slide");
                const dropdown = searchSection.querySelector("#" + swiperIDSlider + "_dropdown");

                
                const swiper_saved_money = new Swiper("#" + swiperIDSlider, {
                    direction: "horizontal",
                    loop: true,
                    slidesPerView: 1,
                    autoHeight: true,
                    spaceBetween: 40,
                });

                function updateActiveControl() {
                    const swiperRealIndex = swiper_saved_money.realIndex;
                    controls.forEach((control, index) => {
                        if (index === swiperRealIndex) {
                            control.classList.add('active');
                        } else {
                            control.classList.remove('active');
                        }
                    });
                    slides.forEach((slide, index) => {
                        if (index === swiperRealIndex) {
                            slide.classList.add('swiper-slide-active');
                        } else {
                            slide.classList.remove('swiper-slide-active');
                        }
                    });
                    dropdown.value = swiperRealIndex;
                }

                swiper_saved_money.on('slideChange', updateActiveControl);

                controls.forEach((control, index) => {
                    control.addEventListener('click', () => {
                        swiper_saved_money.slideToLoop(index);
                    });
                });

                dropdown.addEventListener('change', () => {
                    swiper_saved_money.slideToLoop(parseInt(dropdown.value));
                });

                updateActiveControl();
            }
        }
    })
});