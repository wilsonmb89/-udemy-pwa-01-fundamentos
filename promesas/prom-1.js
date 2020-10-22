function sumarUno(num, callback) {
  setTimeout(() => {
    callback(num + 1);
  }, 3000);
}

sumarUno(6, function(num) {
  sumarUno(num, function(num1) {
    console.log(num1);
  })
});