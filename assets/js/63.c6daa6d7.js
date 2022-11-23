(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{379:function(s,n,a){"use strict";a.r(n);var e=a(7),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"jenkins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jenkins"}},[s._v("#")]),s._v(" jenkins")]),s._v(" "),n("h3",{attrs:{id:"jenkins-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-2"}},[s._v("#")]),s._v(" jenkins")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('拉取镜像\ndocker pull jenkins:jenkins\n\n创建一个Jenkins挂在目录，比如在 /usr/jenkins_home,\nmkdir -p /usr/jenkins_home\n\n修改jenkins_home 权限，等会容器启动会报错(用数字进行修改，r w x 对应4 2 1，分别为所有人、所属组、其他人，最高权限为r+w+x=4+2+1=7 ,所以Jenkins_home文件夹最高权限为777)\n-R（注意是大写）选项表示连同子目录中的所有文件，也都修改设定的权限\n想了解权限具体的修改查看 http://c.biancheng.net/view/755.html\nchmod -R 777 jenkins_home \n\n\n启动Jenkins\ndocker run -d -p 50000:50000 -p 8080:8080 --name jenkins -v /usr/jenkins_home:/var/jenkins_home --restart=always jenkins/jenkins\n\n-p 50000:50000 -p 8989:8080  映射50000和8989端口\n-v /usr/jenkins_home:/var/jenkins_home 把宿主机/usr/jenkins_home目录挂载到容器/var/jenkins_home\n\n\n\n{\n    "registry-mirrors": [\n        "https://mirror.ccs.tencentyun.com"\n    ],\n    "insecure-registries":["43.138.27.208:5000"],\n    "insecure-registries":["81.106.250.112:5000"]\n}\n\n\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#maven打包")]),s._v("\nmvn clean package\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'package ok!'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'build start!'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("service_name")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ruoyi-admin"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("service_prot")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8787")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看镜像id")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IID")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$service_name")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $3}'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IID '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$IID")]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$IID")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exist '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SERVER_NAME")]),s._v(" image,IID="),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$IID")]),s._v('"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除镜像")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$service_name")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"delete '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SERVER_NAME")]),s._v(' image"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#构建")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$service_name")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SERVER_NAME")]),s._v(' image"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no exist '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SERVER_NAME")]),s._v(' image,build docker"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#构建")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$service_name")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SERVER_NAME")]),s._v(' image"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看容器id")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CID")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SERVER_NAME")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $1}'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CID '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CID")]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CID")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exist '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SERVER_NAME")]),s._v(" container,CID="),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CID")]),s._v('"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$service_name")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除容器")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$service_name")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no exist '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SERVER_NAME")]),s._v(' container"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$service_name")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--net")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("host "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$service_prot")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$service_prot")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$service_name")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看启动日志")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#docker logs -f  $service_name")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#!/bin/bash\napp_name='test001'\ndocker stop ${app_name}\necho '....stop container....'\ndocker rm ${app_name}\necho '---rm container---'\ndocker run -di --name=${app_name} -p 8787:8787 test/${app_name}:0.0.1-SNAPSHOT\necho '.......start container'\n\n\n\n#!/bin/bash\napp_name='test001'\ndocker stop ${app_name}\necho '....stop container....'\ndocker rm ${app_name}\necho '---rm container---'\ndocker run -di --name=${app_name} -p 8787:8787 test/${app_name}\necho '.......start container'\n\n\nssh \n\n/home/jenkins/jenkins.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("Jenkins")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cat: /var/jenkins_home/secrets/initialAdminPassword: No such file or directory\n\n解决：\n通过docker 日志查看\ndocker logs jenkins容器ID\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('FROM openjdk:8-jdk-alpine\nVOLUME /tmp\nCOPY ./target/demojenkins.jar demojenkins.jar\nENTRYPOINT ["java","-jar","/demojenkins.jar", "&"]\n\n\ndocker run -u root  --rm     #(可选)关闭时⾃动删除Docker容器\n-d   #(可选)在后台运⾏容器（即“分离”模式）并输出容器ID。如果您不指定此选项，则在终端窗⼝中输出正在运⾏的此容器的Docker⽇志。\n -p 8002:8080  #容器的端⼝8080到主机上的端⼝8002。前⾯是主机的端⼝，后⾯是容器的端⼝\n-p 50000:50000  #将容器的端⼝50000 映射到主机上的端⼝50000(代理端⼝) \n-v jenkins-data:/var/jenkins_home #映射在容器中的`/var/jenkins_home` ⽬录到具有名字 `jenkins-data` 的[volume] \n-v /var/run/docker.sock:/var/run/docker.sock #容器与Docker守护进程通信\n-v /usr/local/maven:/usr/local/maven # 将宿主机的maven环境变量/usr/java/maven映射到容器的/usr/local/maven，jenkins⾥配置maven时地址填写/usr/local/maven \n-v /etc/localtime:/etc/localtime:ro #设置容器时间与宿主机⼀致\n--name jenkins #设置别名\njenkinszh/jenkins-zh\n\n\ndocker run -u root -d -p 50000:50000 -p 8080:8080 -v /usr/local/maven/jenkins-data:/var/jenkins_home /var/run/docker.sock:/var/run/docker.sock  -v /usr/local/apache-maven-3.8.5:/usr/local/maven -v /etc/localtime:/etc/localtime:ro --name jenkins jenkins/jenkins\n\ndocker run -d -p 50000:50000 -p 8080:8080 -v /usr/local/maven/jenkins-data:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock  -v /usr/local/apache-maven-3.8.5:/usr/local/maven -v /etc/localtime:/etc/localtime:ro --name jenkins jenkins/jenkins\n\ndocker run -d -p 50000:50000 -p8701:8080 -v /usr/local/maven385:/usr/local/maven --name jenkins jenkins/jenkins\n\n\n把宿主机目录/var/jenkins_home 挂载到容器/var/jenkins_home目录，Jenkins下载的maven会下载到/var/jenkins_home/tools目录下面\ndocker run -d -p 50000:50000 -p 8702:8080 -v /var/jenkins_home:/var/jenkins_home --name jenkins jenkins/jenkins \n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("方式一（推荐）\n\n先进入 jenkins 的容器中\n\ndocker exec -it jenkins容器id /bin/bash\njdk\n\n/opt/java/openjdk\n\n然后通过echo $JAVA_HOME来查看 java 路径在/usr/local中，然后配置进 jenkins 的 JAVA_HOME 中即可\n\ngit\n\n/usr/bin/git\n通过which git查看 git 执行文件路径为/usr/bin/git，把这个复制到 jenkins 路径中\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);