const sumarLento = (num) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        if (num > 3) {
          reject(`Numero ${num} muy grande`)
        } else {
          resolve(num + 1);
        }
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

Promise.race([
  sumarLento(3),
  sumarNormal(2),
  sumarRapido(3)
]).then(
  res => {
    console.log('Resultado:', res);
  }
).catch(
  err => {
    console.error(err);
  }
);