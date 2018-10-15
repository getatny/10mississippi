# 10mississippi

10 Mississippi 是一款基于 [wepy](https://tencent.github.io/wepy/) 框架开发的音乐文学类小程序。

创作该小程序的初衷原本是自己想要有一个能够推荐自己喜欢的音乐的小程序，有了这样的想法之后，就开始着手一边设计一边看小程序api码代码。经历了写写停停差不多两个月的时间终于前后端都到了可以发beta版的时候，突然发现微信开放平台个人账户是没办法发布和音乐有关的小程序的。 :weary: 内心崩溃之余想了想决定开源，本来也不是什么特别高端的小程序，如果能给大家在实际开发中带来一点点灵感就很满足了。

PS：喜欢的话，希望能给这个项目点个star，谢谢！！

## 小程序截图

<img src="https://raw.githubusercontent.com/wiki/getatny/10mississippi/1.png" width="30%" style="margin-right: 10px;border: 1px solid #000"></img><img src="https://raw.githubusercontent.com/wiki/getatny/10mississippi/2.png" width="30%" style="margin-right: 10px;border: 1px solid #000"></img><img src="https://raw.githubusercontent.com/wiki/getatny/10mississippi/3.png" width="30%" style="margin-right: 10px;border: 1px solid #000"></img>

<img src="https://raw.githubusercontent.com/wiki/getatny/10mississippi/4.png" width="30%" style="margin-right: 10px;border: 1px solid #000"></img><img src="https://raw.githubusercontent.com/wiki/getatny/10mississippi/5.png" width="30%" style="margin-right: 10px;border: 1px solid #000"></img><img src="https://raw.githubusercontent.com/wiki/getatny/10mississippi/6.png" width="30%" style="margin-right: 10px;border: 1px solid #000"></img>

## 如何运行
该小程序使用 [wepy](https://tencent.github.io/wepy/) 框架敏捷开发，不同于原生微信小程序开发，该框架引入了webpack对代码和资源进行打包。所以首先你需要确保你的电脑上已经安装了Node。

Node安装成功之后，你的电脑上应该同时安装了npm，你可以使用以下代码验证（之后请安装wepy-cli，具体请上wepy官网查看）：

```
    node -v && npm -v
```

确认Node及npm安装成功之后，在命令行中将目录切换到你clone的小程序的项目根目录下。执行以下代码：

```
    npm i
```

P.S 由于一些你懂的原因，在你执行以上代码之后，可能会出现长时间未响应的情况。请自行百度npm淘宝镜像安装cnpm。在该项目相关的依赖安装完成之后，在项目根目录执行：

```
    npm run dev
```

之后打开微信小程序开发工具，加载该项目即可看到小程序运行效果。

