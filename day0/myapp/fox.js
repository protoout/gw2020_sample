// axiosライブラリを呼び出す
const axios = require('axios');

// 実際にデータを取得する getRequest 関数
async function getRequest() {
  try {
    const response = await axios.get('https://randomfox.ca/floof/');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// getRequest を呼び出してデータを読み込む
getRequest();