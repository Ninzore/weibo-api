## GET statuses/show
以JSON格式返回单条微博内容

Endpoint: https://m.weibo.cn/statuses/show

### 请求头
不必要

### 参数
|参数|说明|
|:--:|:--:|
|id(必要)|单条微博id，可以为全数字(id)或9位数字/字母混合(bid)|

### 返回
|名称|类型||
|:--:|:--:|:--:|
|data|Object|包含所有内容|
|ok|number|是否成功，成功为1|