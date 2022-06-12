const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const https = require('https');

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    // Open the connection with the server
    xhttp.open('GET',url_api, true);
    // Listen to any server answer
    xhttp.onreadystatechange = (event) => {
      // request finished and response is ready
      if (xhttp.readyState === 4){
        if (xhttp.status === 200){
          resolve(JSON.parse(xhttp.responseText));
        } else if ( xhttp.status === 404) {
          const error = new Error('Error page not found', url_api);
          reject(error);
        } else if ( xhttp.status === 500 ){
          const error = new Error('server error', url_api);
          reject(error);
        }
      }
    }
    //Sends the request 
    xhttp.send();
  });
}

const fetchDataWithHttp = (url_api) => {
  return new Promise( (resolve, reject) => {
    https.get(url_api, (response) => {
      response.setEncoding('utf-8');
      if (response.statusCode === 200 ) {
        let body = '';
        response.on('data', (data) => {
          body += data;
        });

        response.on('end', () => {
          resolve(JSON.parse(body));
        });
      } else {
        const error = new Error('Error contact with and admin', url_api);
          reject(error);
      }
    })
  })
}

module.exports.fetchData = fetchData;
module.exports.fetchDataWithHttp = fetchDataWithHttp;