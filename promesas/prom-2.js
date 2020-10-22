const sumarUno = (num) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        if (num < 9) {
          resolve(num + 1);
        } else {
          reject('El numero es muy alto: ' + num);
        }
      }, 1500);
    } catch (error) {
      reject(error);
    }
  });
}

sumarUno(5)
  .then(sumarUno)
    .then(sumarUno)
      .then(sumarUno)
        .then(sumarUno)
          .then(res => console.log('Fin:', res))
      /* .catch(console.error)
    .catch(console.error) */
  .catch(console.error);
