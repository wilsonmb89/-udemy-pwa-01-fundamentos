// Tarea sobre promesas y fetch
// Realice resolución de cada ejercicio,

// compruebe el resultado en la consola y posteriormente
// siga con el siguiente.

// Comente TODO el código del ejercicio anterior
// antes de continuar con el siguiente.

// ==============================================
// Ejercicio #1
// ==============================================
/*
 Realizar un llamado FETCH a la siguiente API
 https://swapi.dev/api/people/1/
 Imprima en consola el nombre y género de la persona.
*/

// Resolución de la tarea #1
/* 
fetch('https://swapi.dev/api/people/1/')
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('He fallado maestro');
    }
  })
    .then(({name, gender}) => {
      console.log(`Nombre: ${name}, Género: ${gender}`);
    })
  .catch(console.error);
 */

// ==============================================
// Ejercicio #2
// ==============================================
/*
 Similar al ejercicio anterior... haga un llamado a la misma api
 (puede reutilizar el código )
 https://swapi.dev/api/people/1/
 
 Pero con el nombre y el género, haga un posteo
 POST a: https://reqres.in/api/users

 Imprima en consola el objeto y asegúrese que tenga
 el ID y la fecha de creación del objeto
*/

// Resolución de la tarea #2

const postData = (name, gender) => {
  const usuario = {
    "name": name,
    "gender": gender
  };
  return fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
      'Content-Type': 'application/json'
    }
  })
};

fetch('https://swapi.dev/api/people/1/')
  .then(res => res.json())
    .then(({name, gender}) => postData(name, gender))
      .then(postRes => postRes.json())
        .then(console.log)
  .catch(console.error);

