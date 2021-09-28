# vue-admin-template (后台管理系统模版)

<a href="https://github.com/vuejs/vue">
  <img src="https://img.shields.io/badge/vue-2.6.11-brightgreen.svg" alt="vue">
</a>
<a href="https://github.com/ElemeFE/element">
  <img src="https://img.shields.io/badge/element--ui-2.15.6-brightgreen.svg" alt="element-ui">
</a>
<a href="https://github.com/greper/d2-crud-plus">
  <img src="https://img.shields.io/badge/d2--crud--plus-2.17.7-brightgreen.svg" alt="d2-crud-plus">
</a>
<a href="https://axios-http.com/">
  <img src="https://img.shields.io/badge/axios-0.21.4-brightgreen.svg" alt="axios">
</a>
<a href="https://necolas.github.io/normalize.css">
  <img src="https://img.shields.io/badge/normalize.css-8.0.1-brightgreen.svg" alt="normalize">
</a>
<a href="https://github.com/fuyi501/vue-element-admin/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
</a>

基于 [PanJiaChen/vue-admin-template](https://github.com/PanJiaChen/vue-admin-template) 项目重新整理的精简模版，删减和整理了一些内容，通过学习使得对原项目有了更深刻的理解，便于以后自己开发使用。

在 [PanJiaChen/vue-admin-template](https://github.com/PanJiaChen/vue-admin-template) 的基础上使用了 [d2-crud-plus](https://github.com/greper/d2-crud-plus) 的 crud 处理框架，可以根据 crud 配置快速开发 crud 功能。

- [github 仓库](https://github.com/fuyi501/vue-admin-template)
- [gitee 仓库](https://gitee.com/fuwenwei501/vue-admin-template.git)
- [github 在线预览](https://fuyi501.github.io/vue-admin-template)
- [gitee 在线预览](https://fuwenwei501.gitee.io/vue-admin-template)

## 功能

```
- vue-admin 后台模版
- d2-crud-plus 快速 crud
```

## 安装

```sh
# 克隆项目
git clone https://github.com/fuyi501/vue-admin-template.git

# 进入项目目录
cd vue-admin-template

# 安装依赖
npm install

# 启动项目
npm run serve

# 编译项目
npm run build
```

## 效果展示

![](https://alioss.fuwenwei.com/img/20210927234223.png)

![](https://alioss.fuwenwei.com/img/20210928172823.png)
## 部署

### GitHub Pages

GitHub Pages 部署请看：https://cli.vuejs.org/zh/guide/deployment.html#github-pages

运行 `deploy.sh` 脚本即可：

```sh
sh deploy.sh
```

### Docker (Nginx)

1、安装 [Docker](https://www.docker.com/get-started)

2、编译项目文件

```sh
npm run build
```

3、使用 nginx 镜像构建 vue 应用镜像

```sh
docker pull nginx
```

4、创建 nginx 配置文件

在项目根目录下创建 `nginx` 文件夹，该文件夹下新建文件 `default.conf`

```sh
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;
    access_log  /var/log/nginx/host.access.log  main;
    error_log  /var/log/nginx/error.log  error;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}

```

该配置文件定义了首页的指向为 `/usr/share/nginx/html/index.html`, 所以我们可以一会把构建出来的 index.html 文件和相关的静态资源放到 `/usr/share/nginx/html` 目录下。

5、创建 Dockerfile 文件

```dockerfile
FROM nginx
COPY dist/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
```

6、基于该 Dockerfile 构建 vue 应用镜像

```sh
# 注意不要少了最后的 “.”
# -t 是给镜像命名 . 是基于当前目录的 Dockerfile 来构建镜像
docker build -t vue-project-name .
```

7、运行 vue 应用镜像

```sh
docker run -d -p 9528:80 --name=vue-project-name vue-project-name
```

8、访问 vue 应用

打开浏览器，访问项目地址就可以了

## 相关信息

> 本项目是基于 [PanJiaChen/vue-admin-template](https://github.com/PanJiaChen/vue-admin-template) 重新整理的，它是一个极简的 vue admin 管理后台。

### vue-element-admin

> [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) 是 [PanJiaChen/vue-admin-template](https://github.com/PanJiaChen/vue-admin-template) 的完整版项目，是一个后台前端解决方案，内置了 i18n 国际化解决方案，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，可以帮助你快速搭建企业级中后台产品原型。

- 帮助文档：https://panjiachen.github.io/vue-element-admin-site/zh/guide/
- 仓库：https://github.com/PanJiaChen/vue-element-admin
- 预览：https://panjiachen.gitee.io/vue-element-admin/#/dashboard

原作者 [花裤衩](https://github.com/PanJiaChen) 配套了系列教程文章，如何从零构建后一个完整的后台项目，可以先看完这些文章再来实践本项目。

- [手摸手，带你用 vue 撸后台 系列一(基础篇)](https://juejin.im/post/59097cd7a22b9d0065fb61d2)
- [手摸手，带你用 vue 撸后台 系列二(登录权限篇)](https://juejin.im/post/591aa14f570c35006961acac)
- [手摸手，带你用 vue 撸后台 系列三 (实战篇)](https://juejin.im/post/593121aa0ce4630057f70d35)
- [手摸手，带你用 vue 撸后台 系列四(vueAdmin 一个极简的后台基础模板)](https://juejin.im/post/595b4d776fb9a06bbe7dba56)
- [手摸手，带你用vue撸后台 系列五(v4.0新版本)](https://juejin.im/post/5c92ff94f265da6128275a85)
- [手摸手，带你封装一个 vue component](https://segmentfault.com/a/1190000009090836)
- [手摸手，带你优雅的使用 icon](https://juejin.im/post/59bb864b5188257e7a427c09)
- [手摸手，带你用合理的姿势使用 webpack4（上）](https://juejin.im/post/5b56909a518825195f499806)
- [手摸手，带你用合理的姿势使用 webpack4（下）](https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc)

### d2-crud-plus

> d2-crud-plus 是基于 d2-admin 的 d2-crud 的扩展,旨在简化 d2-crud 配置，快速开发crud功能。

- 帮助文档：http://d2-crud-plus.docmirror.cn/d2-crud-plus/guide/
- 仓库：https://gitee.com/greper/d2-crud-plus
- 预览：http://preview.d2-crud-plus.docmirror.cn/D2CrudPlusExample/index.html

## 浏览器支持

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge | last 2 versions | last 2 versions | last 2 versions |

## License

[MIT](https://github.com/PanJiaChen/vue-element-admin/blob/master/LICENSE)
