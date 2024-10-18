$(document).ready(function() {
    $('.accordion').each(function() {
        let accordion = $(this);
        let questions = accordion.find('.question');

        // Проверка на наличие класса что значит открывается по 1-му open_one
        if (accordion.hasClass('open_one')) {
            questions.each(function(index) {
                let open = $(this).find('.question-block');
                let thisPopup = $(this).find('.otvet');
                let plus = $(this).find('.plus');

                thisPopup.hide(); // Изначально все скрыты

                // Обработчик клика для открытия/закрытия
                open.on('click', function() {
                    // Если текущий блок скрыт
                    if (thisPopup.is(':hidden')) {
                        // Скрываем все другие открытые блоки
                        questions.find('.otvet').slideUp();
                        questions.find('.plus').removeClass('turn');

                        // Показываем текущий блок
                        thisPopup.slideDown();
                        plus.addClass('turn');
                    } else {
                        // Закрываем текущий блок
                        thisPopup.slideUp();
                        plus.removeClass('turn');
                    }
                });
            });

            // Открываем первый блок при загрузке страницы
            let firstQuestion = questions.first().find('.otvet');
            let firstPlus = questions.first().find('.plus');
            firstQuestion.slideDown(); // Открываем первый блок
            firstPlus.addClass('turn'); // Добавляем класс для поворота значка
        } else {
            // Поведение по умолчанию без класса open_one
            questions.each(function(index) {
                let open = $(this).find('.question-block');
                let thisPopup = $(this).find('.otvet');
                let plus = $(this).find('.plus');

                thisPopup.hide(); // Изначально все скрыты

                open.on('click', function() {
                    if (thisPopup.is(':hidden')) {
                        thisPopup.slideDown();
                        plus.addClass('turn');
                    } else {
                        thisPopup.slideUp();
                        plus.removeClass('turn');
                    }
                });
            });
        }
    });
});
