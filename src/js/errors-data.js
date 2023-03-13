  // Объект с информацией для валидации и ошибок полей
  const errorsData = {
    "first-name": {
      "message": 'Only latin or cyrillic letters',
      validation(string) { return /^[A-Za-zА-Яа-яЁё]+$/.test(string); },
    },
    "last-name": {
      "message": 'Only latin or cyrillic letters',
      validation(string) { return /^[A-Za-zА-Яа-яЁё]+$/.test(string); },
    },
    "email": {
      "message": 'Must contain @ and . symbols',
      validation(string) { return /^[\.\w-]+@([\w-]+\.)+[\w-]{1,4}$/.test(string); },
    },
    "password": {
      "message": 'At least 8 characters, letters A-z, A-z and numbers',
      validation(string) { return /^[0-9A-Za-z]{8,}$/.test(string); },
    },
    "password-confirm": {
      "message": 'Password mismatch',
      validation(confirmPassword) {
        const password = document.getElementById('password').value;
        if (password === '') return false;
        return password === confirmPassword;
      },
    },
  };

  export default errorsData;