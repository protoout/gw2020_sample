// axiosライブラリを呼び出す
const axios = require('axios');

// 今回使うAPIの問い合わせ先
const DISCORD_API_URL = 'DISCORD_API_URL';

// 送信する設定
let config = {
    url: DISCORD_API_URL,  // 把握した問い合わせるURL
    method: 'post',  // HTTP リクエストはPOST
    data: {  // メッセージを送るためのデータ
        content: 'ProtoOut Studioからの通知だよー！',
    }
}

// 実際にデータを取得する getRequest 関数
async function getRequest() {
  let response;
  try {
    response = await axios.request(config);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// getRequest を呼び出してデータを読み込む
getRequest();