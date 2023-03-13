import validation from './validation.js';
import addAnimation from './add-animation.js';
import modalRegistered from './modal-registered.js';

// Обработчики событий
const handlers = () => {
  // Форма, текстовые поля, submit button
  const form = document.querySelector('.sign-up-right__form');
  const inputCollection = document.querySelectorAll('.registration__field-input');
  const submitButton = document.querySelector('.form-bottom__button');

  const inputHandler = (evnt) => {
    const input = evnt.target;
    const parent = input.parentElement;
    const isValid = validation.self(input);

    if (!isValid) {

    } else {

    }
  };

  const submitButtonHandler = (evnt) => {
    const button = evnt.target;
    const formData = new FormData(form);
    const isFullValid = validation.full(formData);

    if (!isFullValid.valid) {
      // Добавляет анимацию.
      addAnimation(button, 'animation-shake', 0, true);
    } else {
      // Показываем сообщение об окончании регистрации.
      modalRegistered();
    }
  };

  const formHandler = (evnt) => {
    evnt.preventDefault();

    const form = evnt.target;
    const formData = new FormData(form);
    const isFullValid = validation.full(formData);

    if (!isFullValid.valid) {
      
    } else {

    }
  };

  // Обработчик на инпуты, submit кнопку, форму
  inputCollection.forEach((input) => {
    input.addEventListener('input', inputHandler);
  });
  submitButton.addEventListener('click', submitButtonHandler);
  form.addEventListener('submit', formHandler);
};

export default handlers;