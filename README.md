# weibo-api
Weibo APIs collection from network traffic analysis of Mobile/Desktop webpages and mobile app  

新浪微博API，来源为对新浪微博的移动/桌面版网页，以及APP的抓包分析

## API
[api](./api)中每一个api都有一个文件夹，文件夹中包含md说明文件以及使用Axios进行示例的js文件  
#### api说明包含
* 请求头 : 如果需要特殊请求头会在这里进行说明
* 参数 : 请求时可用的参数
* 返回 : 返回值

其中请求头和参数使用以下格式
|参数|说明|必要|
|:--:|:--:|:--:|
|参数名|参数说明|必要或是可选|

返回值以下方Object的格式说明

## Object
[object](./object)中列出了API返回中可能包含的Object
#### 以如下格式展示API结构: 
仅为举例
```
data
    |-- mid : number
    |-- page_info
        |-- blabla : string
    |-- count : number
    |-- id)str : string
```

#### 以如下格式说明字段内容: 
|属性|类型|说明|附加说明|
|:--:|:--:|:--:|:--:|
|属性名称|属性类型|返回值说明|其他，什么都有|