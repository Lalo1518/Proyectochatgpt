// Agregar la funcionalidad de búsqueda
const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que el formulario se envíe

  const searchTerm = input.value.toLowerCase();
  const paragraphs = document.querySelectorAll('p');

  paragraphs.forEach(paragraph => {
    const text = paragraph.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      paragraph.classList.add('highlight');
    } else {
      paragraph.classList.remove('highlight');
    }
  });
});

