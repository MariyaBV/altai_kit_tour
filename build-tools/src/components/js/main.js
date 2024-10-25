// Функция для добавления overflow-hidden с компенсацией полосы прокрутки
const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
function lockBodyScroll() {
    $('body').addClass('overflow-hidden').css('padding-right', `${scrollbarWidth}px`);
}

// Функция для удаления overflow-hidden и сброса отступа
function unlockBodyScroll() {
    $('body').removeClass('overflow-hidden').css('padding-right', '');
}