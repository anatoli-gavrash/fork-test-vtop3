// Функция добавляет анимацию, задержку и удаляет по завершении.

const addAnimation = (tag, animationName, delay = 0, remove = false) => {
  // Проверка приходящих данных
  if (!HTMLElement.prototype.isPrototypeOf(tag)
      || !(typeof animationName === 'string')
      || !(typeof delay === 'number')
      || !(typeof remove === 'boolean'))
  {
    throw new TypeError();
  }

  // Добавляем задержку и анимацию
  tag.style.animationDelay = delay + 's';
  tag.classList.add(animationName);
  
  // Удаляем по завершении если нужно
  if (remove) {
    tag.addEventListener('animationend', (evnt) => {
      evnt.target.classList.remove(animationName);
    });
  }
};

export default addAnimation;