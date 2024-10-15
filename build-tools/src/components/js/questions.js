document.addEventListener('DOMContentLoaded', function () {
    let questions = document.querySelectorAll('.question');

    questions.forEach(function(question, index) {
        let open = question.querySelector('.question-block');
        let thisPopup = question.querySelector('.otvet');
        let plus = question.querySelector('.plus');

        thisPopup.style.display = 'none';

        open.addEventListener('click', function() {
            if (thisPopup.style.display == 'none') {
                thisPopup.style.display = 'block';
                plus.classList.add('turn');
            } else {
                thisPopup.style.display = 'none';
                plus.classList.remove('turn');
            }
        });
    });
});
