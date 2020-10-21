# page_info Object
视频或超话的页面信息

## 视频
#### page_info字段结构
```
page_info
    |-- content1 : string
    |-- content2 : string
    |-- media_info
        |-- duration : number
        |-- stream_url : string
        |-- stream_url_hd : string
    |-- object_id : string
    |-- object_type : number
    |-- page_pic
        |-- height : number
        |-- width : number
        |-- is_self_cover : number
        |-- pid : string
        |-- source : number
        |-- type : number
        |-- url : string
    |-- page_title : string
    |-- page_url : string
    |-- play_count : string
    |-- title : string
    |-- type : string
    |-- url_ori : string
    |-- urls : (列出所有可能值)
        |-- hevc_mp4_hd
        |-- h265_mp4_hd
        |-- mp4_720p_mp4
        |-- mp4_hd_mp4
        |-- mp4_ld_mp4
    |-- video_orientation : string
```
#### 说明
|属性|类型|说明|附加说明|
|:--:|:--:|:--:|:--:|
|content1|string|一般为xxxx的微博视频|
|content2|string|微博正文|如果太长会截断|
|media_info|object|视频信息|仅在视频中出现|
|media_info.duration|float|视频时长|单位为秒，精确到小数点后2位|
|media_info.stream_url|string|视频预览|带音频，常见360p|
|media_info.stream_url_hd|string|稍高清视频预览|带音频，常见480p|
|object_id|string|应该是视频id|举例: 1034:4558123386470406|
|object_type|int|页面类型|视频为11|
|page_pic|object|视频封面信息|超话时这里不一样|
|page_pic.height|int|视频封面高度||
|page_pic.width|int|视频封面宽度||
|page_pic.is_self_cover|int|不知道干什么用的|只见过1|
|page_pic.pid|string|视频封面图片id||
|page_pic.source|int|图片来源|不知道干什么的，只见过1|
|page_pic.type|int|图片类型|不知道干什么的，只见过1|
|page_pic.url|string|封面图片网址|`https://wx2.sinaimg.cn/crop.0.33.960.533/006QZngZly1gjj2czqvztj30qo0gonlj.jpg`|
|page_title|string|和content1一样|超话时不一样|
|page_url|string|视频在微博视频的网址|`https://video.weibo.com/show?fid=${object_id}`|
|play_count|string|播放量|上万后仅显示xx万次播放|
|title|string|视频标题|
|type|string|视频时为"video"|超话时不一样|
|url_ori|string|page_url的短链||
|urls|object|包含各个清晰度的链接，非Dash|`mp4_hd_mp4`和`mp4_ld_mp4`一般都会有，`mp4_720p_mp4`仅出现在高清视频中，其他两个看脸|
|video_orientation|string|视频方向|只有`horizontal`和`vertical`|
***

## 超话
#### page_info字段结构
```
page_info
    |-- content1 : string
    |-- content2 : string
    |-- object_type : number
    |-- page_pic
        |-- url : string
    |-- page_title : string
    |-- page_url : string
    |-- play_count : string
    |-- title : string
    |-- type : string
```

#### 说明
|属性|类型|说明|附加说明|
|:--:|:--:|:--:|:--:|
|content1|string|超话信息|xx 《超话名称》 超话，xx可以是超话类型，比如`手游`|
|content2|string|超话关注数量|int人关注|
|object_type|int|页面类型|超话为0|
|page_pic|object|包含超话头像url|视频时这里不一样|
|page_pic.url|string|超话头像url|
|page_title|string|标题|【超话】超话名称|
|page_url|string|超话链接|
|type|string|视频时为"topic"|视频时不一样|