// Отправка формы на сервер.

const sendForm = (form) => {
  // Примерный код отправки формы на сервер.
  const url = './server/server.php';
  
  fetch(url, {
    method: 'POST',
    body: form
  }).then((response) => {
    if (!response.ok) { throw new Error('Server has ' + response.status + ' status.'); }
  }).catch((error) => {
    throw new Error('Error: ' + error);
  });
};

export default sendForm;