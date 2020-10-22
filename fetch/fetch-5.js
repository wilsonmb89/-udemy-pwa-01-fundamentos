fetch('https://reqres.in/api/users/2')
  .then(res => {
    // Se clona el readable stream para evitar errores de lectura ya realizada
    res.clone().json()
      .then(console.log)
      .catch(console.error);

    // Se ejecuta el readable stream
    res.json()
      .then(jsonRes => fetch(jsonRes.data.avatar))
        .then(avatarRes => avatarRes.blob())
          .then(blobRes => {
            document.getElementById('img-superman').src = URL.createObjectURL(blobRes);
          })
      .catch(console.error)
  })
  .catch(console.error);