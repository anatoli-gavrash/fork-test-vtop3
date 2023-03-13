// Обработчики событий

const handlers = () => {
  // Форма, текстовые поля, submit button
  const form = document.querySelector('.sign-up-right__form');
  const inputCollection = document.querySelectorAll('.registration__field-input');
  const submitButton = document.querySelector('.form-bottom__button');

  const inputHandler = (evnt) => {
    const input = evnt.target;
    
  };

  const submitButtonHandler = (evnt) => {
    
  };

  const formHandler = (evnt) => {
    evnt.preventDefault();
    
  };

  // Обработчик на инпуты
  inputCollection.forEach((input) => {
    input.addEventListener('input', inputHandler);
  });
  // Обработчик на submit кнопку
  submitButton.addEventListener('click', submitButtonHandler);
  // Обработчик формы
  form.addEventListener('submit', formHandler);
};

export default handlers;