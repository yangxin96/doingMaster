(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{383:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"项目部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目部署"}},[s._v("#")]),s._v(" 项目部署")]),s._v(" "),a("h2",{attrs:{id:"前端部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端部署"}},[s._v("#")]),s._v(" 前端部署")]),s._v(" "),a("h3",{attrs:{id:"vue-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-项目"}},[s._v("#")]),s._v(" Vue 项目")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Vue 项目")]),s._v(" "),a("p",[s._v("部署到Linux")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("环境配置：需要npm、nginx\n\n服务器上没有环境\nnpm install --unsafe-perm -registry=https://registry.npm.taobao.org\n\n--unsafe-perm。：防止权限问题\n-registry=https://registry.npm.taobao.org ： 淘宝镜像源\n\n安装nginx(推荐docker启动部署)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("（2）项目打包")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm run build\n或者打成生产环境包\nnpm run build:prod\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("（3）包文件上传")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vue项目打包之后会在项目目录下面生产一个dist文件夹。文件夹里面有个index.html。这是一个入口文件\n上传dist文件夹到服务器\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("（4）nginx配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nginx配置文件nginx.confg 配置端口，\n比如设置8080端口，浏览器访问 ip:8080 之后就转发到dist文件夹目录下面的index.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"vuepress项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress项目"}},[s._v("#")]),s._v(" vuepress项目")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("vuepress静态网站部署")]),s._v(" "),a("p",[s._v("使用宝塔部署")])]),s._v(" "),a("p",[s._v("1、打包")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("打包命令在package.json里面\nvuepress build docs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("2、上传")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("上传dist打包文件到服务器\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3、宝塔配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("登陆宝塔面板==》网站==〉添加站点==》域名可以填服务器IP:端口号，\n根目录选择上传的dist文件，其他不用配置==〉提交\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("4、访问")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("访问上面的IP:端口号\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"后端部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端部署"}},[s._v("#")]),s._v(" 后端部署")]),s._v(" "),a("p",[s._v("docker 部署")]),s._v(" "),a("h2",{attrs:{id:"自动化部署-jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化部署-jenkins"}},[s._v("#")]),s._v(" 自动化部署(Jenkins)")]),s._v(" "),a("h3",{attrs:{id:"docker方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker方式"}},[s._v("#")]),s._v(" docker方式")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("准备")]),s._v(" "),a("p",[s._v("Jenkins 镜像")]),s._v(" "),a("p",[s._v("registry镜像")]),s._v(" "),a("p",[s._v("一个服务器 43.108.27.265")]),s._v(" "),a("p",[s._v("frolvlad/alpine-oraclejdk8:latest  jdk镜像")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("创建Jenkins挂载目录")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mkdir -p usr/jenkins_home\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("拉取镜像")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 拉取Jenkins镜像。lts是稳定版、latest是最新版\ndocker pull jenkins/jenkins:lts \n\n拉取私服registry\ndocker pull registry\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("启动镜像，浏览器访问")]),s._v(" "),a("p",[s._v("Jenkins 浏览器访问：http://43.108.27.265:8080")]),s._v(" "),a("p",[s._v("registry私服浏览器访问：http://43.108.27.265:5000/v2/_catalog")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#启动Jenkins\ndocker run -d -p 50000:50000 -p 8080:8080 --name jenkins -v /usr/jenkins_home:/var/jenkins_home jenkins/jenkins:latest\n\n# 把宿主机目录/var/jenkins_home 挂载到容器/var/jenkins_home目录，Jenkins下载的maven会下载到/var/jenkins_home/tools目录下面\n\n#启动registry\ndocker run -d -p 5000:5000 registry \n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("输入密码，安装插件   /images/CoursePhoto/")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cat /var/jenkins_home/secrets/initialAdminPassword\n\n6fb2291ce20c4df0bfe22f8fd167b56e \n\n#没有密码\ndocker logs JenkinsID\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/images/CoursePhoto/jenkins/Jenkins 2022-06-14 20.37.41.png",alt:"Jenkins2022-06-14 20.37.41"}}),s._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/images/CoursePhoto/jenkins/jenkins2022-06-14 20.59.50.png",alt:"jenkins2022-06-14 20.59.50"}})]),s._v(" "),a("li",[a("p",[s._v("时间管理大师，我们趁机修改项目pom.xml")]),s._v(" "),a("p",[s._v("添加docker- maven- plugin插件")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--docker的maven插件--\x3e")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("com.spotify"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("docker-maven-plugin"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("1.2.2"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("executions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("execution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("build-images"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("phase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("package"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("phase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("goals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("goal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("build"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("goal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("goals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("execution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("executions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--配置部分--\x3e")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--修改imageName节点的内容，改为私有仓库地址和端口，再加上镜像id和TAG,可以直接上传到私服--\x3e")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--配置最后生成的镜像名，docker images里的，我们这边取项目名:版本--\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--              <imageName>43.108.27.265:2375:5000/${project.artifactId}:${project.version}</imageName>--\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--                    镜像打包后到名称是  43.108.27.265:5000/${project.artifactId}:${project.version} --\x3e")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("imageName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("43.108.27.265:5000/${project.artifactId}:${project.version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("imageName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dockerHost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("http://43.108.27.265:2375"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dockerHost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--基础镜像，相当于Dockerfile里的from--\x3e")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("baseImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("frolvlad/alpine-oraclejdk8:latest"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("baseImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--                    <baseImage>openjdk:8-jdk-alpine</baseImage>--\x3e")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("resources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("resource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("targetPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("/"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("targetPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("directory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("${project.build.directory}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("directory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--把哪个文件上传到docker，相当于Dockerfile里的add testDocker.jar /--\x3e")]),s._v("\n                            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("${project.build.finalName}.jar"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("resource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("resources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--入口点，project.build.finalName就是project标签下的build标签下的filename标签内容，testDocker--\x3e")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--相当于启动容器后，会自动执行java -jar /testDocker.jar--\x3e")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("entryPoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v('["java","-jar","/${project.build.finalName}.jar"]'),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("entryPoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--是否推送到docker私有仓库--\x3e")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("pushImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("true"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("pushImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("registryUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("43.108.27.265:5000"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("registryUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])]),a("p",[s._v("######################重点来了")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("entryPoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v('["java","-jar","/${project.build.finalName}.jar"]'),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("entryPoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n标签里面的内容一定要手动敲下，不然打包之后的镜像docker run 启动会出现 ：\nError: Could not find or load main class ‐jar 错误\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("系统环境配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("系统管理--》全局工具配置 \n\njenkins 镜像自带jdk和git，我们找出path就行,所以我们只需要安装maven就行\n路径是容器内的路径\njdk path\n/opt/java/openjdk\n\ngit path \n/usr/bin/git\n\n安装maven  新增maven ===》选择版本\n\n然后页面滑倒最下面，应用保存\n\n2、安装maven插件 ，插件管理==》搜索 Maven Integration 插件，然后安装\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("img",{staticStyle:{zoom:"30%"},attrs:{src:"/images/CoursePhoto/jenkins/jenkins2022-06-14 21.15.31.png",alt:"截屏2022-06-14 21.15.31"}}),s._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/images/CoursePhoto/jenkins/jenkins2022-06-14 21.19.17.png",alt:"截屏2022-06-14 21.19.17"}})]),s._v(" "),a("li",[a("p",[s._v("新建任务，开始构建任务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1、选择 构建一个maven项目，这个是安装maven插件才会出现的。\n2、填写项目地址，GitHub或者gitee,增加凭据，选择用户名和密码模式\n3、预构建选择==》调用顶层maven目标，选择maven版本、打包目录 clean package 和目标pom.xml\n4、保存\n5、开始构建。\n6、项目jar 包是从国外的maven仓库下载，所以先停止项目\n\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/images/CoursePhoto/jenkins/jenkins2022-06-14 21.23.02.png",alt:"jenkins2022-06-14 21.23.02"}}),s._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/images/CoursePhoto/jenkins/jenkins2022-06-14 21.26.38.png",alt:"jenkins2022-06-14 21.26.38"}}),s._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/images/CoursePhoto/jenkins/jenkins2022-06-14 21.35.01.png",alt:"jenkins2022-06-14 21.35.01.png"}})]),s._v(" "),a("li",[a("p",[s._v("修改maven配置settings.xml")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("Jenkins是用容器挂载的，所以只需要修改，宿主机里面的目录，\n/usr/jenkins_home/tools/hudson.tasks.Maven_MavenInstallation/maven386/conf/settings.xml\n\n改为阿里云仓库，不用添加本地仓库本地仓库\n\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("mirror")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("aliyunmaven"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("mirrorOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("*"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("mirrorOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("阿里云公共仓库"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("https://maven.aliyun.com/repository/public"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- #### https://maven.aliyun.com/repository/public/  --\x3e")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- <url>https://maven.aliyun.com/nexus/content/groups/public/</url> --\x3e")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("mirror")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("修改registry的https、开放Jenkins的2375端口,然后统一重启docker")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('1、先修改registry \n\nvim /etc/docker/daemon.json\n#### 添加   "insecure-registries":["http://43.108.27.265:5000"]\n\n\n{\n    "registry-mirrors": ["https://mirror.ccs.tencentyun.com"],\n    "insecure-registries":["http://43.108.27.265:5000"]\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("2、开放Jenkins的2375端口\nvi /lib/systemd/system/docker.service\n\n##### ExecStart  后面添加   -H tcp://0.0.0.0:2375\n\n\nExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock -H tcp://0.0.0.0:2375 -H unix://var/run/docker.sock\nExecReload=/bin/kill -s HUP $MAINPID\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl daemon-reload  刷新配置\nsystemctl restart docker 重启docker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("重新构建任务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("重新进Jenkins，继续构建任务\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("查看registry私服镜像")]),s._v(" "),a("p",[s._v("浏览器访问：http://43.108.27.265:5000/v2/_catalog")])])]),s._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/images/CoursePhoto/jenkins/Jenkins2022-06-14 22.05.58.png",alt:"截屏2022-06-14 22.05.15"}}),s._v(" "),a("p",[s._v("​")])])}),[],!1,null,null,null);a.default=e.exports}}]);