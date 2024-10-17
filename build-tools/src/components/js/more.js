$(document).ready(function() {
  if ($('#tours-more').length) {
    $('#tours-more').on('click', function(event) {
      event.preventDefault();
      $(this).hide();
      $('.tours-by-type-recreation__block-more').css('display', 'flex');
    });
  }
});
