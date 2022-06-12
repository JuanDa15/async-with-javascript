const promise = () => {
  return new Promise((resolve, reject) => {
    if (true ) {
      resolve('xdddd');
    } else {
      reject ('dxxxxx');
    }
  })
}

// promise()
// .then( response => console.log(response))
// .catch( error => console.error(error))
// .finally( () => console.log('Acabe'));

const promise2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('resuelto');
      }, 2000);
    } else {
      const error = new Error('Me dañe');
      reject(error);
    }
  })
}

// promise2()
// .then( response => console.log(response))
// .catch( error => console.error(error))
// .finally( () => console.log('acabe'));

// Trae el resultado de todas las promesas, si una es rechazada se cancela
// Promise.all([promise(), promise2()])
//   .then( values => console.log(values))
//   .catch( error => console.error( error))
//   .finally( () => console.log('acabe desde el promise all'));


// Trae el primer resultado que llegue del arreglo de promesas
Promise.race([promise(), promise2()])
  .then( values => console.log(values))
  .catch( error => console.error( error))
  .finally( () => console.log('acabe desde el promise race'));