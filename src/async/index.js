const fetchData = require('../utils/fetchData').fetchDataWithHttp;;
const API = "https://rickandmortyapi.com/api/character/";

const cosaaa = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const data2 = await fetchData(url_api + data?.results?.[0]?.id);
    const data3 = await fetchData(data2.origin.url);

    console.log(data?.info?.count);
    console.log(data2?.name);
    console.log(data3?.dimension)
  } catch (error) {
    console.error(error)
  }
}

cosaaa(API);