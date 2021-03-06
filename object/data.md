## data Obejct
单个微博内容构成

### data字段结构
```
data
    |-- ad_state : number
    |-- alchemy_params
        |-- ug_red_envelope : boolean
    |-- attitudes_count : number
    |-- bid : string
    |-- buttons : array
    |-- can_edit : boolean
    |-- cardid : string
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
    |-- mark : string
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
    |-- repost_type : number
    |-- retweeted_status : object
    |-- reward_exhibition_type : number
    |-- safe_tags : number
    |-- show_additional_indication : number
    |-- source : string
    |-- status_title : string
    |-- text : string
    |-- raw_text : string
    |-- textLength : number
    |-- user : object
    |-- version : number
    |-- visible
        |-- list_id : number
        |-- type : number
```

### 说明
|属性|类型|说明|附加说明|
|:--:|:--:|:--:|:--:|
|id|string|单条微博id|
|mid|string|单条微博id，同id|所以为什么又有id又有mid啊明明一样的|
|bid|string|单条微博id，用于短链|区分大小写|
|created_at|string|发布时间，格式为 WWW MM DD HH:MM:SS +0800 YYYY|
|user|object|[user object](./user.md) 该条微博用户信息|
|pid|number|转发链中上条微博id|转发|
|pidstr|string|同pid，但为string|转发|
|status_title|string|原微博标题，一般为微博前20个字+...，或为长微博标题|
|text|string|微博文本,html形式|
|raw_text|string|微博文本，纯文本形式|转发|
|textLength|number|文字数量(去除html标签)|转发不会有这个|
|isLongText|boolean|是否是长文，>140字|
|comments_count|number|评论数量|
|attitudes_count|number|点赞数量|
|favorited|boolean|是否已收藏|不登录总是为false|
|pics|array of object|[pic object](./pic.md) 列表|总是会有，没图就是空的|
|pic_num|number|图片数量|没图为0|
|pic_types|string|图片类型，干什么不知道|没图为空|
|pic_ids|array of string|图片id列表|
|picStatus|string|可能为 0:1 不知道什么意思|必须有图，但不一定会有，待观察|
|pic_rectangle_object|array|不知道|拼图时会有但是是空的|
|pic_focus_point|array of object|pic_focus_point object|拼图时会出现|
|reposts_count|number|转发数量|
|retweeted_status|object|原微博的data obejct|转发|
|repost_type|number|转发类型|转发，但是不一定会有，可能条件是带emoji？|
|thumbnail_pic|string|小图url|单图才会有|
|bmiddle_pic|string|中图url|单图才会有|
|original_pic|string|大图url|单图才会有|
|page_info|object|[page_info object](./page_info.md) 用于超话，视频|没有这俩就没有这条|
|user|object|[user object](./user.md) 该条微博用户信息|
|visible|object|是否可见|不登录应该是全0吧|
|alchemy_params|object|带有ug_red_envelope字段，紧急红信封？什么东西？|只见过false|
|is_imported_topic|boolean|是否为重要内容|有超话时会出现，似乎有关|
|is_paid|boolean|pay了吗？|
|ad_state|number|看名字应该是判断广告|
|buttons|array of object|没什么用，一般长度只有1|
|can_edit|number|判断是否可修改|只见过0|
|cardid|string|不知道是什么，举个栗子：star_072|出现条件未知|
|content_auth|number|不知道是什么|只见过0|
|darwin_tags|array of object|好像如果是蓝V发的就会有？|里面会写“热门手游最新动态”之类的|
|hide_flag|number|应该标识是否隐藏|只见过0|
|mark|string|不知道是什么，举个栗子|999_reallog_mark_ad:999|WeiboADNatural|
|mblogtype|number|只见过0|
|mblog_vip_type|number|只见过0|
|mlevel|number|只见过0|
|more_info_type|number|只见过0|
|number_display_strategy|object|每条都有，不知道用来干什么|
|ok|number|你都200了当然ok啦|
|pending_approval_count|number|只见过0|
|safe_tags|number|不知道是什么，可能值：64|不一定会有|
|source|string|发布来源|可能为超话名称，weibo.com，微博国际版|
