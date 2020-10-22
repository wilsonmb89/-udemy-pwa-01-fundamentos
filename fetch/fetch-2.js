// Peticion GET
// https://reqres.in/api/users

fetch('https://reqres.in/api/users')
  .then(res => res.json())
    .then(console.log)
  .catch(console.error);