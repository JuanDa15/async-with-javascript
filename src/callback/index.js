const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const api = "https://rickandmortyapi.com/api/character/";

const fetchData = (url_api, callback) => {
  const xhttp = new XMLHttpRequest();
  // Open the connection with the server
  xhttp.open('GET',url_api, true);
  // Listen to any server answer
  xhttp.onreadystatechange = (event) => {
    // request finished and response is ready
    if (xhttp.readyState === 4){
      if (xhttp.status === 200){
        callback(null, JSON.parse(xhttp.responseText));
      } else if ( xhttp.status === 404) {
        const error = new Error('Error page not found', url_api);
        callback(error, null);
      } else if ( xhttp.status === 500 ){
        const error = new Error('server error', url_api);
        callback(error, null);
      }
    }
  }
  //Sends the request 
  xhttp.send();
}

fetchData(api, (error1, data1) => {
  if (error1){
    return console.error(error1);
  }else {
    fetchData(api + data1?.results?.[0]?.id, (error2, data2) => {
      if (error2) {
        return console.error(error2);
      } else {
        fetchData(data2.origin.url, (error3, data3) => {
          if (error3) {
            return console.error(error3)
          } else {
            console.log(data1?.info?.count);
            console.log(data2?.name);
            console.log(data3?.dimension)
            // Rutas
            console.log(api);
            console.log(api + data1.results[0].id); 
            console.log(data2.origin.url); 
          }
        })
      }
    })
  }
});