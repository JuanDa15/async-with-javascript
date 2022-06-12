const fetchData = require( "../utils/fetchData").fetchData;
const fetchDataWithHttps = require( "../utils/fetchData").fetchDataWithHttp;

const api = "https://rickandmortyapi.com/api/character/";


fetchData(api)
  .then(value => {
    console.log(value?.info?.count);
    return fetchData(api + value?.results?.[0]?.id)
  })
  .then(value => {
    console.log(value?.name);
    return fetchData(value.origin.url)
  })
  .then(value => {
    console.log(value?.dimension)
  })
  .catch(error => console.error(error))
  .finally( () => console.log('acabe'))

  fetchDataWithHttps(api)
  .then(value => {
    console.log(value?.info?.count);
    return fetchData(api + value?.results?.[0]?.id)
  })
  .then(value => {
    console.log(value?.name);
    return fetchData(value.origin.url)
  })
  .then(value => {
    console.log(value?.dimension)
  })
  .catch(error => console.error(error))
  .finally( () => console.log('acabe'))