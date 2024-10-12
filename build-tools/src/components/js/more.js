document.getElementById('tours-more').addEventListener('click', function(event) {
    event.preventDefault();
    this.style.display = 'none';
    const block = document.querySelector('.tours-by-type-recreation__block-more');
    block.style.display = 'flex';
  });