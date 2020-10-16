## data Obejct
单个微博内容构成

### data字段结构
```
data
    |-- alchemy_params
        |-- ug_red_envelope : boolean
    |-- attitudes_count : number
    |-- bid : string
    |-- buttons : array
    |-- can_edit : boolean
    |-- comments_count : number
    |-- content_auth : number
    |-- created_at : string
    |-- darwin_tags : array
    |-- favorited : boolean
    |-- fid : number
    |-- hide_flag : number
    |-- id : string
    |-- isLongText : boolean
    |-- is_paid ：boolean
    |-- is_imported_topic : boolean
    |-- mblog_vip_type : number
    |-- mblogtype : number
    |-- mid : string
    |-- mlevel : number
    |-- more_info_type : number
    |-- number_display_strategy
        |-- apply_scenario_flag : number
        |-- display_text : string
        |-- display_text_min_number : number
    |-- ok : number
    |-- page_info : object
    |-- pending_approval_count : number
    |-- pic_ids : array
    |-- pic_num : number
    |-- pic_types : string
    |-- pid : number
    |-- pidstr : string
    |-- pending_approval_count : number
    |-- reposts_count : number
    |-- reward_exhibition_type : number
    |-- show_additional_indication : number
    |-- source : string
    |-- status_title : string
    |-- text : string
    |-- raw_text : string
    |-- repost_number : number
    |-- repost_type : number
    |-- textLength : number
    |-- user : object
    |-- visible
        |-- list_id : number
        |-- type : number
```

### 说明
|属性|类型|说明|附加说明|
|:--:|:--:|:--:|:--:|
|id|string|单条微博id|
|mid|string|单条微博id，同id|所以为什么又有id又有mid啊明明一样的|
|bid|string|单条微博id，用于短链|
|created_at|string|发布时间，格式为 WWW MM DD HH:MM:SS +0800 YYYY|
|user|object|user object 该条微博用户信息|
|pid|number|转发链中上条微博id|转发|
|pidstr|string|同pid，但为string|转发|
|status_title|string|原微博标题，多为微博前20个字|长微博似乎会不一样|
|text|string|微博文本,html形式|
|raw_text|string|微博文本，纯文本形式|转发|
|textLength|number|文字数量(去除html标签)|似乎转发不会有这个|
|isLongText|boolean|是否是长文，>140字|
|comments_count|number|评论数量|
|reposts_count|number|转发数量|
|retweeted_status|object|转发中原微博的data obejct|转发|
|reposts_type|number|转发类型，是什么不知道|转发，但是不一定会有，待观察|
|pics|array of object|pic object列表|总是会有，没图就是空的|
|pic_num|number|图片数量|
|pic_types|string|图片类型，干什么不知道|
|pic_ids|array of string|图片id列表|
|picStatus|string|可能为 0:1 不知道什么意思|必须有图，但不一定会有，待观察|
|bmiddle_pic|string|大号缩略图|
|thumbnail_pic|string|缩略图|
|page_info|object|page_info object，用于超话，视频|没有这俩就没有这条|
|is_imported_topic|boolean|是否为重要内容|有超话时会出现，似乎有关|
|is_paid|boolean|pay了吗？|
|attitudes_count|number|热度|
|buttons|array of object|没什么用，一般长度只有1|
|can_edit|number|只见过0|
|content_auth|number|只见过0|
|darwin_tags|array of object|好像如果是蓝V发的就会有？|里面会写“热门手游最新动态”之类的|
|mblogtype|number|只见过0|
|mblog_vip_type|number|只见过0|
|mlevel|number|只见过0|
|more_info_type|number|只见过0|
|pending_approval_count|number|只见过0|
|source|string|可能为超话名称或者微博 weibo.com|