## GET statuses/show
以JSON格式返回单条微博内容

Endpoint: https://m.weibo.cn/statuses/show

### 请求头
不必要

### 参数
|参数|说明|必要|
|:--:|:--:|:--:|
|id|单条微博id，可以为全数字(id)或9位数字/字母混合(bid)|是|

### 返回
|名称|类型|说明|
|:--:|:--:|:--:|
|data|Object|[data object](https://github.com/Ninzore/weibo-api/blob/main/object/data.md)包含单条微博所有内容|
|ok|number|是否成功，成功为1|
