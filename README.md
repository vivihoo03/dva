项目结构
just for dva demo

```
   |-- mock
       |-- example.js                           （本地调试使用）            
   |-- package.json                             （依赖文件）
   |-- webpack.config.js                        （webpack配置文件）
   `-- src                                      （项目目录）
       |-- APP                                  （应用入口）
       |   |-- demo                             （应用Demo，调试业务组件用的）
       |   |   |-- demo.html                    （应用Demo html）
       |   |   |-- demo.js                      （应用Demo js）
       |   |   `-- demo.scss                    （应用Demo css）
       |   |-- index                            （应用A）
       |   |   |-- index.html
       |   |   |-- index.js
       |   |   `-- index.scss
       |   |-- list                             （应用B）   
       |   |   |-- list.html
       |   |   |-- list.js
       |   |   `-- list.scss
       |-- components                           （业务组件目录）
       |   |-- header.js                        （当前业务组件模块）
       |   |-- footer.js                        （当前业务组件模块）
       |   |-- bListView                        （封装的通用公共业务组件目录）
       |   |   |-- index.js                 （封装的通用公共业务组件的export）
       |   |   |-- src                      （封装的通用公共业务组件的源程序）
       |   |   |   |-- bListView.js         （封装的通用公共业务组件的模块）
       |   |   |   |-- style
       |   |   |   |   |-- bListView.scss  （封装的通用公共业务组件的模块样式）
       |   |-- bSlider                      （其他封装的通用公共业务组件目录）
       |-- models        (存放改变（state）的函数方法，也可简单理解为ajax处理,进行dispatch等操作)     
       |   |-- examples.js       
       |   |-- index.js
       |-- pages（项目的根组件，存放各个父路由页面，并将数据（state）转换成属性（props）分发到各个子组件（component文件夹下）中去）
       |   |-- index
       |   |   |-- indexPage.js
       |   |   |-- indexPage.less
       |   |-- list
       |   |   |-- listPage.js
       |   |   |-- listPage.less
       |-- routes             （项目的路由配置）
       |   |-- index_router.js
       |   |-- list_router.js
       |-- services            （一些service，工具类）
       |   |-- dataservice.js
       |   |-- example.js
       |-- styles           （公共样式，变量）
       |   |-- base.1.0.0.scss
       |   |-- common.1.0.0.scss
       |   |-- var.1.0.0.scss
       |-- tests                （测试）
       |   |-- models
       |   |   |-- example-test.js
       `-- utils              （工具类）
           |-- dataservice.js
           `-- request.js


```

## 使用的技术：
底层基于`Reactjs`、`redux`、`redux-saga`、`react-router`(dva)等
打包使用`webpack`
使用`babel`转码`es6`到`es5`
样式预处理使用`sass` 。

## 什么是dva
dva作者： https://github.com/sorrycc
知识库1：http://10.101.64.50:8042/dvadoc/getting-started.html
知识库2：https://github.com/dvajs/dva-docs

## 样式命名：
统一使用下划线，公共组件`class`以`ui_`开头，后面跟上组件的名字，组件相关的样式包在命名内部。
例如：公共：`.ui_slider`:

```
.ui_slider{
    img{
    }
}
```

业务组件以`class`名称以`.uib`开头，后面跟上组件的名字，组件相关的样式包在命名内部。
.uib_listview:

```
.uib_listview{   
    .title{

    } 
}
```

公共`base.1.0.0.scss`和`var.1.0.0.scss`
`base.1.0.0.scss`基于`normalize.css`,
`var.1.0.0.scss`提供基础变量，和`UI`标注一一对应。
比如`UI`给出的`body`的标注是`list-primary`,则可以这么写：
```

@import '../../../../styles/var.1.0.0.scss';
body {
    color:$primary;
    font-size:$list;
}
```

其中的变量名已经在`var.1.0.0.scss`里面声明好了。

## JS组件命名：
组件名统一使用驼峰命名：
公共: `imgPreview`、`listView`
业务组件：`bListView`、`bImgPreview`

## Run

### best-cli

  你可以通过list命令查看目前支持的模版，目前包含：
4in1模版
react_4in1模版
dva模版（dva模版是react配套redux、router的最佳实践方案，且易上手，学习成本低）
react-native@0.21.0模版
wxapp 微信小程序模版
### Install

```bash
$ npm install -g best-cli
```

## Usage

### best init

```bash
你不需要手动创建一个项目文件，like  mkdir myPath && cd myPath
just
$ tc list  
$ tc init
Template name: react_4in1
Project name: projectName
```

```bash
$ npm start
```

http://localhost:8000/demo.html