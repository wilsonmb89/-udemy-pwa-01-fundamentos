const sumarLento = (num) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(num + 1);
      }, 5000);
    } catch (error) {
      reject(error);
    }
  });
};

const sumarNormal = (num) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        if (num > 4) {
          reject(`Numero ${num} muy grande`)
        } else {
          resolve(num + 1);
        }
      }, 2500);
    } catch (error) {
      reject(error);
    }
  });
};

const sumarRapido = (num) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        if (num > 5) {
          reject(`Numero ${num} muy grande`)
        } else {
          resolve(num + 1);
        }
      }, 1);
    } catch (error) {
      reject(error);
    }
  });
};

Promise.all([
  sumarLento(1),
  1,
  sumarNormal(3),
  true,
  sumarRapido(3),
  'oli',
  (() => 'Funcion flecha')()
]).then(
  res => {
    console.log('Resultado:', res);
  }
).catch(
  err => {
    console.error(err);
  }
);