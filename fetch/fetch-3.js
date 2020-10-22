// Peticion POST
// https://reqres.in/api/users

const usuario = {
  "name": "Wilson",
  "job": "DEveloper"
};

fetch('https://reqres.in/api/users', {
  method: 'POST',
  body: JSON.stringify(usuario),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(res => res.json())
  .then(console.log)
.catch(console.error);