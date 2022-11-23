(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{404:function(s,a,n){"use strict";n.r(a);var t=n(7),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),a("p",[s._v("pigx项目启动")]),s._v(" "),a("h2",{attrs:{id:"pigx版本说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pigx版本说明"}},[s._v("#")]),s._v(" pigx版本说明：")]),s._v(" "),a("p",[s._v("1.intelligence版（github有）")]),s._v(" "),a("p",[s._v("2.pigx版（有2种，pig是开源版，pigx是商业版）")]),s._v(" "),a("p",[s._v("-----本次教程采用pigx商业版运行-----")]),s._v(" "),a("h2",{attrs:{id:"环境要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境要求"}},[s._v("#")]),s._v(" 环境要求")]),s._v(" "),a("p",[s._v("redis")]),s._v(" "),a("p",[s._v("mysql:5.7以上")]),s._v(" "),a("p",[s._v("idea2019以上（已安装Lombok）")]),s._v(" "),a("p",[s._v("WebStorm 218")]),s._v(" "),a("p",[s._v("Navicat")]),s._v(" "),a("p",[s._v("SwitchHosts")]),s._v(" "),a("p",[s._v("nodejs,10版本以上最好")]),s._v(" "),a("h2",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),a("h3",{attrs:{id:"_1、switchhosts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、switchhosts"}},[s._v("#")]),s._v(" 1、SwitchHosts")]),s._v(" "),a("p",[s._v("SwitchHosts配置本地hosts，必须配置 hosts ,禁止修改代码中配置成IP(就是项目中yml文件数据源修改成ip不推荐)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("上面和下面两个版本都行，随便哪一个\n\n127.0.0.1 pigx-mysql\n127.0.0.1 pigx-redis\n127.0.0.1 pigx-gateway\n127.0.0.1 pigx-register\n127.0.0.1 pigx-sentinel\n\n127.0.0.1 intelligence-register\n127.0.0.1 intelligence-gateway\n127.0.0.1 intelligence-redis\n127.0.0.1 intelligence-mysql\n127.0.0.1 intelligence-sentinel\n127.0.0.1 intelligence-xxl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"_2、初始化数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、初始化数据库"}},[s._v("#")]),s._v(" 2、初始化数据库")]),s._v(" "),a("p",[s._v("打开项目目录下面的db文件夹")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("说明：第一个sql文件是其他库的建库sql,本项目启动只需要导入pigxx.sql和pigxx_config.sql即可，也可以全部导入，如果pigxx数据库导入有问题，打开文件找到sys_route_conf表，把route_id的varchar改成300.\n\n1schema.sql\n2pigxx.sql         重点数据库\n3pigxx_ac.sql\n4pigxx_job.sql\n5pigxx_mp.sql\n6pigxx_config.sql   nacos相关数据\n7pigxx_pay.sql\n8pigxx_codegen.sql\nv311_v4_update.sql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"_3、清空redis-一定要初始化-flushall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、清空redis-一定要初始化-flushall"}},[s._v("#")]),s._v(" 3、清空redis(一定要初始化，flushall)")]),s._v(" "),a("p",[s._v("使用redisDesktop连接redis清空")]),s._v(" "),a("h2",{attrs:{id:"后端服务启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端服务启动"}},[s._v("#")]),s._v(" 后端服务启动")]),s._v(" "),a("h3",{attrs:{id:"_1-使用idea导入项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用idea导入项目"}},[s._v("#")]),s._v(" 1.使用idea导入项目")]),s._v(" "),a("p",[s._v("如果前面没有配置本地hosts,就需要修改数据源IP")]),s._v(" "),a("div",{staticClass:"language-xml-dtd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("127.0.0.1 pigx-mysql\n127.0.0.1 pigx-redis\n127.0.0.1 pigx-gateway\n127.0.0.1 pigx-register\n127.0.0.1 pigx-sentinel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/public96/image/raw/master/src/20210323181905.png",alt:"image-20210323181905474"}})]),s._v(" "),a("h3",{attrs:{id:"_2-网关也跟nacos一样"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-网关也跟nacos一样"}},[s._v("#")]),s._v(" 2.网关也跟Nacos一样")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/public96/image/raw/master/src/20210323182035.png",alt:"image-20210323182035752"}})]),s._v(" "),a("h3",{attrs:{id:"_3-启动nacos服务-浏览器修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动nacos服务-浏览器修改配置"}},[s._v("#")]),s._v(" 3.启动Nacos服务，浏览器修改配置")]),s._v(" "),a("p",[s._v("前面如果没有配置本地host,浏览器访问nacos，配置列表里面修改以下yml相关数据源（root,password,url）")]),s._v(" "),a("p",[a("strong",[s._v("一定要保证配置文件里面的数据库用户名和密码正确。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("application-dev.yml\npigx-auth-dev.yml\npigx-gateway-dev.yml\npigx-upms-biz-dev.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_4-启动顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动顺序"}},[s._v("#")]),s._v(" 4.启动顺序")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/public96/image/raw/master/src/20210323181333.png",alt:"image-20210323181323619"}})]),s._v(" "),a("h2",{attrs:{id:"前端服务启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端服务启动"}},[s._v("#")]),s._v(" 前端服务启动")]),s._v(" "),a("h3",{attrs:{id:"本机已经安装node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本机已经安装node-js"}},[s._v("#")]),s._v(" 本机已经安装node.js")]),s._v(" "),a("p",[s._v("WebStorm导入项目,软件会提示下载响应的包，同意就行，大概五分钟之后下载好执行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("##下载npm包\nnpm run install\n######################################################\nnode.js版本低于16，选择12或者14\n\n##启动项目\nnpm run dev \n\n网关地址有变化需要修改vue.config.js（位置在package.json下面），下面那个图片可以看到\n\n * 配置参考:\n * https://cli.vuejs.org/zh/config/\n */\nconst url = 'http://pigx-gateway:9999'\nconst CompressionWebpackPlugin = require('compression-webpack-plugin')\nconst productionGzipExtensions = ['js', 'css']\n\n\n浏览器登录，用户名和密码是\namdin \n123456\n\n\nhttp://localhost:9999/doc.html 查看文档地址（）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/public96/image/raw/master/src/20210323184621.png",alt:"image-20210323184621512"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/public96/image/raw/master/src/20210323184731.png",alt:"image-20210323184731442"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/public96/image/raw/master/src/20210323185246.png",alt:"image-20210112114708162"}})]),s._v(" "),a("h2",{attrs:{id:"模块说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块说明"}},[s._v("#")]),s._v(" 模块说明")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("PIGX\n├── PIGX-ui -- 前端工程[8080]\n├── PIGX-auth -- 授权服务提供[3000]\n├── PIGX-common -- 系统公共模块\n├    ├── PIGX-common-bom -- 公共依赖版本\n├    ├── PIGX-common-core -- 公共工具类核心包\n├    ├── PIGX-common-data -- 数据相关\n├    ├── PIGX-common-datasource -- 动态数据源相关\n├    ├── PIGX-common-feign -- feign 通用封装\n├    ├── PIGX-common-gateway -- 动态路由定义\n├    ├── PIGX-common-gray -- 灰度路由控制封装\n├    ├── PIGX-common-job -- 定时任务\n├    ├── PIGX-common-log -- 日志服务\n├    ├── PIGX-common-oss -- 通用文件系统\n├    ├── PIGX-common-security -- 安全工具类\n├    ├── PIGX-common-sentinel -- sentinel分装\n├    ├── PIGX-common-sequence -- 全局发号器\n├    ├── PIGX-common-swagger -- Swagger Api文档生成\n├    ├── PIGX-common-test -- oauth 2.0 单元测试方案\n├    ├── PIGX-common-xss  -- xss 安全过滤组件\n├    └── PIGX-common-transaction -- 分布式事务工具包\n├── PIGX-register -- 注册中心、配置中心[8848]\n├── PIGX-gateway -- Spring Cloud Gateway网关[9999]\n├── PIGX-upms -- 通用用户权限管理模块\n├    └── PIGX-upms-api -- 通用用户权限管理系统公共api模块\n├    └── PIGX-upms-biz -- 通用用户权限管理系统业务处理模块[4000]\n└── PIGX-visual  -- 图形化模块\n├    ├── PIGX-monitor -- Spring Boot Admin监控 [5001]\n├    ├── PIGX-daemon-elastic-job -- 分布式调度中心[elastic-job 版本]\n├    ├── PIGX-daemon-quartz -- 分布式调度中心[quartz]\n├    ├── PIGX-code-gen -- 图形化代码生成[5003]\n├    ├── PIGX-sso-client-demo -- sso 客户端接入示例\n├    ├── PIGX-tx-manager -- PIGX分布式事务解决方案[5004]\n├    ├── PIGX-bi-platform -- 报表在线设计模块[5006]\n├    ├── PIGX-oa-platform -- 工作流模块[5005]\n├    ├── PIGX-pay-platform -- 微信支付宝收单模块[5010]\n├    ├── PIGX-mp-platform -- 微信管理模块[6000]\n├    └── PIGX-sentinel-dashboard -- sentinel 控制台[5005]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])]),a("h3",{attrs:{id:"_1、报表设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、报表设计"}},[s._v("#")]),s._v(" 1、报表设计")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("└── PIGX-visual  -- 图形化模块\n├    ├── PIGX-bi-platform -- 报表在线设计模块[5006]\n\n启动之后浏览器访问 http://localhost:5006 或者idea里面微服务启动Services点击5006\npigx系统里面点击报表设计模块会显示127.0.0.1拒绝访问\n账号密码都是pigx\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_2、代码生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、代码生成"}},[s._v("#")]),s._v(" 2、代码生成")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("└── PIGX-visual  -- 图形化模块\n├    ├── PIGX-code-gen -- 图形化代码生成[5003]\n\npigx系统里面点击访问代码生成模块，可以在线设计数据库，或者导入sql表到pigxx_codegen数据库里面,代码生成的是前端代码和后端代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"重点提醒"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重点提醒"}},[s._v("#")]),s._v(" 重点提醒")]),s._v(" "),a("p",[s._v("前端用pigx3.8版，验证码不显示（base64图片流解析有问题）")]),s._v(" "),a("p",[s._v("pigx3.9版，是滑块验证码可以完美运行。———推荐使用------")]),s._v(" "),a("p",[s._v("前端用intelligence版没有验证码（用户名和密码就可以登录）")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/public96/image/raw/master/src/20210323200919.png",alt:"image-20210323200918816"}})]),s._v(" "),a("p",[s._v("intelligence.zip 为服务端源码\nintelligence-ui.zip 为前端源码\nintelligence-gen.zip 为 archetype 源码使用")]),s._v(" "),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),a("p",[s._v("nacos/intelligence-gateway-dev.yml 中的密钥是否可以修改？\n可以自己修改为指定的密钥，但请参考以下文档。")]),s._v(" "),a("p",[s._v("pigx配置文件加密\nhttps://pig4cloud.com/doc/pigx/pigx-config-enc")]),s._v(" "),a("p",[s._v("pigx登录报文加密及解密\nhttps://pig4cloud.com/doc/pigx/pigx-front-enc\n工作流模块提示类找不到 LeaveProcessTaskListener\n常考工单常见问题 #974 协同管理-代办任务 请假管理单审批报错 com.pig4cloud.pigx.act.listener.LeaveProcessTaskListener")]),s._v(" "),a("p",[s._v("https://git.pig4cloud.com/pig/pigx/issues/974")]),s._v(" "),a("p",[s._v("更多常见问题参考\nhttp://t.cn/A64pCGiI\n问题反馈")]),s._v(" "),a("p",[s._v("https://support.pig4cloud.com")]),s._v(" "),a("p",[s._v("登录报错看auth 控制台信息")]),s._v(" "),a("p",[s._v("注册中心是否三个服务（getway,auth，intelligence-）")]),s._v(" "),a("p",[s._v("试试http://localhost:9999/doc.html\n看看页面是否是空的doc.html\n是空的看看2号数据库sys_route_conf有无数据\n如果没有数据说明2号数据库导入的时候没有倒进去")]),s._v(" "),a("p",[s._v("导入完重启author和admin")]),s._v(" "),a("p",[s._v("注意nacos服务名和数据库sys_route_conf 里面route_id服务名是否一致")]),s._v(" "),a("p",[s._v("重启服务admin")]),s._v(" "),a("p",[s._v("还是没有数据看sys_route_conf 数据库sql文件插入表数据\n创建表之前加上SET NAMES GBK")]),s._v(" "),a("p",[s._v("用 intelligence包名数据库将id改成300，类型为varchar")]),s._v(" "),a("p",[s._v("编辑表将route_id改成300 类型是varchar\nGBK 可以不加\n数据有无重新灌入redis，有就可以访问前端，如果还是重启getway,前端项目也重启")]),s._v(" "),a("p",[s._v("访问可以看到页面")]),s._v(" "),a("h3",{attrs:{id:"_2、pigxgateway-启动报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、pigxgateway-启动报错"}},[s._v("#")]),s._v(" 2、PigxGateway 启动报错")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Description:\n\n路由信息未初始化，网关启动失败\n\nAction:\n\n解决方案参考: http://t.cn/A6Gl3sDJ\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("原因："),a("code",[s._v("admin")]),s._v("和"),a("code",[s._v("auth")]),s._v("模块数据没有写入"),a("code",[s._v("redis")]),s._v("里面，"),a("code",[s._v("getway")]),s._v("没有读取到"),a("code",[s._v("redis")]),s._v("里面数据。")]),s._v(" "),a("p",[s._v("解决：先清空"),a("code",[s._v("redis")]),s._v("里面所有数据，然后按顺序启动"),a("code",[s._v("admin")]),s._v("和"),a("code",[s._v("auth")]),s._v("再启动"),a("code",[s._v("getway")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"_3、maven项目配置不可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、maven项目配置不可用"}},[s._v("#")]),s._v(" 3、Maven项目配置不可用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Error:Maven resources compiler: Maven project configuration required for module 'pigx-common-core' isn't available. Compilation of Maven projects is supported only if external build is started from an IDE.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("解决： 在IDEA中，点击Build然后选择Rebuild Project即可")]),s._v(" "),a("h2",{attrs:{id:"mybatis-plus-spring-data-redis多租户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-plus-spring-data-redis多租户"}},[s._v("#")]),s._v(" mybatis-plus+Spring Data Redis多租户")]),s._v(" "),a("p",[s._v("PIGX 通过"),a("strong",[s._v("整合 mybatis-plus 多租户插件和重写 Spring Data Redis 模块")]),s._v("实现多租户功能，能够实现"),a("strong",[s._v("开发过程无感知")]),s._v("的多租户实现。")]),s._v(" "),a("p",[a("strong",[s._v("mybatis-plus 多租户插件介绍")])]),s._v(" "),a("blockquote",[a("p",[s._v("插件地址： https://mybatis.plus/guide/tenant.html 租户共享同一个 Database、同一个 Schema，但在表中增加 TenantID 多租户的数据字段。这是共享程度最高、隔离级别最低的模式。除了一些系统共用的表以外，其他租户相关的表，我们都需要在 sql 不厌其烦的加上 AND t.provider_id = ?查询条件，稍不注意就会导致数据越界，数据安全问题让人担忧。好在有了 MybatisPlus 这个神器，可以极为方便的实现多租户 SQL 解析器")])])])}),[],!1,null,null,null);a.default=e.exports}}]);