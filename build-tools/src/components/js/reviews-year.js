document.addEventListener('DOMContentLoaded', function () {
    const searchSections = document.querySelectorAll('.reviews-year');

    searchSections.forEach(searchSection => {
        const swiperElementAll = searchSection.querySelectorAll('.swiper');

        swiperElementAll.forEach(swiperElement => {
            if (swiperElement) {
                const swiperIDSlider = swiperElement.getAttribute('id');
                console.log(swiperIDSlider);
                if (swiperIDSlider) {
                    const sliderPagination = searchSection.querySelector('.swiper-pagination_' + swiperIDSlider);

                    console.log(sliderPagination);

                    const swiper_saved_money = new Swiper("#" + swiperIDSlider, {
                        direction: "horizontal",
                        loop: true,
                        slidesPerView: 1.5,
                        slidesPerGroup: 1,
                        autoHeight: true,
                        spaceBetween: 10,
                        pagination: {
                            el: sliderPagination,
                            type: 'bullets',
                            clickable: true, 
                        },
                        breakpoints: {
                            500: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                                spaceBetween: 40,
                            },
                        },
                    });
                }
            }
        });
    });
});

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Показ выбранного таба
    const selectedTab = document.getElementById(cityName);
    selectedTab.style.display = "block";

    if (evt) {
        evt.currentTarget.className += " active";
    }
}

// Обработчик для выпадающего списка
document.getElementById('reviews_year_dropdown').addEventListener('change', function(event) {
    var selectedYear = event.target.value;
    openCity(null, selectedYear);
});
