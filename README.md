# vue-resume

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


**本项目重难点**
1. 主流轮播插件不能满足本项目的需求，因此需要自己编写，主要利用vue过渡动画/css/css伪类/js实现
2. 本项目部分动画部份使用animate.css组件实现
3. 本项目可以在pc端和移动端运行且效果不同，需要利用js正则判断终端是pc端还是移动端
4. pc端中滚轮滑动监听是个重难点，具体技术参考[scroll优化/节流和防抖](https://segmentfault.com/a/1190000015833729)
5. 移动端需要监听手指滑动，具体技术参考[js监听屏幕触摸和手指滑动](https://blog.csdn.net/m_uncle/article/details/78129222)
6. 移动端部分浏览器（如chrome）自带下滑刷新的功能，这与本项目下滑跳转下一页的功能冲突，因此需要禁用
7. 为了保证页面时刻全屏，需要用到`width:100vw;height:100vh`的css属性
8. 
