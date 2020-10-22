fetch('../no-encontrado.html')
  .then(res => res.text())
    .then(textRes => {
      const body = document.querySelector('body');
      body.innerHTML = textRes;
    })
  .catch(console.error);