const axios = require('axios');
const url = `http://weather.livedoor.com/forecast/webservice/json/v1?city=130010`;

async function main(){
    const result = await axios.get(url);
    const item = result.data;
    // console.log(item.description.text);
    console.log(item.forecasts);
}

main();