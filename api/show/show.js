const axios = require("axios");

let id = "4558131943713068";
let bid = "JoohcfzWc";

axios({
    url : "https://m.weibo.cn/statuses/show",
    method : "GET", 
    headers : {},
    params : {
        id : id
        // id : bid
    }
}).then(res => {
    console.log(res.data);
}).catch(err => {
    console.error(err.response);
});
