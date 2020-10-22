const img = document.getElementById('img-superman');
fetch('./assets/superman.png')
  .then(res => res.blob())
    .then(
      blobRes => {
        img.src = URL.createObjectURL(blobRes);
      }
    )
  .catch(console.error);