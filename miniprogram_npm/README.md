---
 title: fake_blbl
date: 2022-11-05 19:07:09
tags: 微信小程序
---

### 项目简介

+ 想要项目练手的同学可以考虑网y云的项目，github 上有专门的api服务,相对来说舒心一点。

+ 这是一个小项目，也算是作者迈出前端的第一步，在此之前都没有了解js,h5，c3。所以代码很“青涩”，放在此处做一个念想，毕竟是自己第一个小项目。

+ 本项目用nginx代理，获取blbl wx小程序的资源，利用fidder 进行抓包，截至22年11月，有些api还是可以用的（网上有些帖子专门收集的，有些资源需要app key 才能访问），引入了vant 组件库，但是没有，刚开始不知道怎么用。

+ 实现功能

  + 首页轮播图，返回顶点。
  
    <img src="https://s2.loli.net/2022/11/05/MIrSJLOP3ZNXsAd.png" style="zoom:50%;" />
  
    <img src="C:\Users\lijusting\AppData\Roaming\Typora\typora-user-images\image-20221105201120991.png" alt="image-20221105201120991" style="zoom:50%;" />
  
  + 分类界面（有些分类跳转web view)
  
    <img src="C:\Users\lijusting\AppData\Roaming\Typora\typora-user-images\image-20221105201200523.png" alt="image-20221105201200523" style="zoom:50%;" />
  
  + 视频播放，弹幕（配合小程序的弹幕）。
  
    <img src="C:\Users\lijusting\AppData\Roaming\Typora\typora-user-images\image-20221105201254152.png" alt="image-20221105201254152" style="zoom:50%;" />
  
  + 简介的折叠展开。
  
+ 项目还有很多可以优化的地方，比如防抖，增加动画过渡，界面可以再美化一点）

###  项目部署

+ 下载[微信开发者工具]([微信开发者工具（稳定版 Stable Build）下载地址与更新日志 | 微信开放文档 (qq.com)](https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html))

+ 下载[nginx]([nginx: download](http://nginx.org/en/download.html)) 版本

  <img src="https://s2.loli.net/2022/11/05/DZ6Verf9UcXpJGn.png" style="zoom: 50%;" />

​       前面的是`linux `版本，后面带`windows` 是`Windows`版本。

+ 下载[nginx 配置文件](https://www.aliyundrive.com/s/naLd98Kf4Dh)。

+ 下载[fiddler]([Fiddler4 (telerik.com)](https://www.telerik.com/download/fiddler/fiddler4)) 如果你不需要自己抓包（获取api）可以省略这一步

  `fidder`的简单使用教程我准备写在另外的一篇博客。

+ 用上面下载下来的文件替换`nginx`安装路径下 `nginx-1.22.1\conf`下面的`nginx.config`文件，然后返回上级点击`nginx`应用程序

  <img src="https://s2.loli.net/2022/11/05/jdOmQ89Ka3g4GR6.png" style="zoom:50%;" />
  
+ 打开`微信开发者工具`,选择小程序，导入从[github]() 下载下来的文件,选择不使用云服务，点击确认就行了

​       ![image-20221105200213868](C:\Users\lijusting\AppData\Roaming\Typora\typora-user-images\image-20221105200213868.png) 

![image-20221105200608182](C:\Users\lijusting\AppData\Roaming\Typora\typora-user-images\image-20221105200608182.png)

