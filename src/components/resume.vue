<template>
  <div id="resume" class="resume">
    <ul id="tab-dot"  class="tab-dot" v-show="isPc">
      <li @click="toggleTab(index,$event)" v-for="(item,index) in items" :key="index">
        <svg :class="[item.active, 'icon','pageIcon']" aria-hidden="true" >
          <use :xlink:href="item.icon"></use>
        </svg>
        <span class="iconDetail">{{item.iconDetail}}</span>
      </li>
    </ul>
    <div class="content">
      <transition-group
        :name = "slideDirection"
      >
        <page v-for="(item, index) in pageList" v-show="showCondition(index)" :is="item" :key="item" ref="component" style="position:absolute;"></page>
      </transition-group>
    </div>
  </div>
</template>

<script>
import aboutMe from '@/components/aboutMe.vue'
import skillStack from '@/components/skillStack.vue'
import works from '@/components/works.vue'
import education from '@/components/education.vue'
import job from '@/components/job.vue'
import {debounceFunc, mobileCheck, goChart} from '@/util.js'
import store from '@/store/store.js'
export default {
  name: 'resume',
  data () {
    return {
      curIndex: 0,  //初始化当前页面序号
      slideDirection: 'up', //初始化页面滑动方向
      startY: 0,    // 初始化滑动开始位置
      endY: 0,      // 初始化滑动结束位置
      // 切换按钮列表
      items: [
        {
        icon: '#iconuser',
        active: 'active',
        iconDetail: '关于我'
        },
        {
        icon: '#iconschool1',
        active: '',
        iconDetail: '教育经历'
        },
        {
        icon: '#iconcode',
        active: '',
        iconDetail: '技术栈'
        },
        {
        icon: '#iconjob',
        active: '',
        iconDetail: '工作经历'
        },
        {
        icon: '#iconproject',
        active: '',
        iconDetail: '项目经历'
        }
      ],
      // 切换页面列表
      pageList:['aboutMe','education','skillStack','job','works'],
      // 技能页面数据
      chartData: [
        [100,"#2dc6c8","git","熟练使用git工具进行版本管理及团队协作"], 
        [100,"#b6a2dd", "webpack","熟练使用webpack打包发布"], 
        [200,"#5ab1ee","vue全家桶","熟练使用vue全家桶完成项目开发"],
        [200,"#5c9c57","jquery","熟练使用jquery进行常规dom操作"], 
        [300,"#d7797f","html","熟悉常用html元素特性，熟悉盒模型及各种布局方式"],
        [300,"#7490cf","css","熟练使用css布局和动画，伪类，伪元素等"],
        [400,"#b35a49","javascript","熟悉es6，熟悉模块化开发，熟悉封装"]
      ]
    }
  },
  components: {
    aboutMe,
    education,
    skillStack,
    job,
    works
  },
  computed:{
      pageNum () {
        return this.pageList.length
      },
      isPc () {
        return store.state.isPc
      }
  },
  mounted () {
    window.addEventListener('mousewheel', debounceFunc(this.handleScroll,200),true)  // 监听（绑定）滚轮 滚动事件
    window.addEventListener('DOMMouseScroll', debounceFunc(this.handleScroll,200),true) // 兼容firefox
    window.addEventListener('touchstart', this.touchstartFunc,true) // 移动端滑动开始
    window.addEventListener('touchend', this.touchendFunc,true) // 移动端滑动结束
  },
  methods: {
    // 页面切换按钮功能
    toggleTab(index,e){ 
      let items = this.$data.items
      // 判断要切换的页面是否是当前页面
      if(items[index].active !== "active"){
        for(let i=0;i<items.length;i++){
          items[i].active = ""
        }
        items[index].active = "active"
        if(index === 2){
          goChart(this.chartData)
        }
        // 更改页面滑动方式
         if(this.curIndex > index){
           this.slideDirection = "down"
         }
         if(this.curIndex < index){
           this.slideDirection = "up"
         }
      }
      this.curIndex = index
    },
    // 鼠标滚动功能(需要做兼容)
    handleScroll(e){
      let detail = 0
      let isDown = 0
      if(e.wheelDelta){ //opera,chrome,ie
        detail = e.wheelDelta
      } else {  //firefox
        detail = -e.detail
      }
      isDown = (detail < 0)?1:-1
      this.slideDirection = (isDown < 0)? "down" : "up"
        this.curIndex+=isDown
        if(this.curIndex<0){
          this.curIndex = 0
        }
        if(this.curIndex>this.pageNum-1){
          this.curIndex = this.pageNum-1
        }
        this.toggleTab(this.curIndex,e)
    },
    touchstartFunc(e){
        e = e||event
        if(e.touches.length == 1) {// 检测接触点是否只有一个
            this.startY = e.touches[0].clientY
        }
    },
    touchendFunc(e){
        e = e||event
        e.preventDefault()
        this.endY = e.changedTouches[0].clientY
        let distance = this.endY - this.startY
        if(distance<0){
          this.slideDirection = "up"
          if(this.curIndex<this.pageNum-1){
            this.curIndex++
          }
        }
        if(distance>0){
          this.slideDirection = "down"
          if(this.curIndex>0){
            this.curIndex--
          }
        }
    },
    // 显示页面
    showCondition(index){ 
      return this.curIndex === index
    }
  },
  created () {
    if(mobileCheck()){  //移动端隐藏切换按钮
      store.commit('isNotPc')
    }
  }
}
</script>

<style scope>
.resume {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* 切换按钮样式 */
.tab-dot {
  padding: 0;
  margin: 0;
  position: absolute;
  /* width: 100px; */
  top: 41%;
  right:0.2rem;
  display: block;
  list-style: none;
  z-index: 2;
}
.tab-dot li{
  position: relative;
  height: auto;
  font-size: 0.1rem;
  /* display: flex; */
  vertical-align:middle;
}
.iconDetail {
  position: absolute;
  display: none;
  right:0.34rem;
  top:0;
  min-width:0.6rem;
  padding: 0 0.05rem;
  background-color: #2c3e50;
  color: #fff;
  border-radius: 5%;
  border-top-right-radius: 0.125rem;
  border-bottom-right-radius: 0.125rem;
  height: 0.25rem;
  line-height: 0.25rem;
  font-size: 0.1rem;
  /* width: 100%; */
}
/* @media screen and (max-width: 700px)  {
  .iconDetail {
    min-width:0.9rem;
  }
} */
.pageIcon:hover {
  width: 0.25rem;
  height: 0.25rem;
}
.active {
  width: 0.25rem;
  height: 0.25rem;
}
.pageIcon:hover + .iconDetail{
  display: block;
}

/*************************** 页面切换动画 ***************************/
/*********** 上滑（小序号-->大序号） ***********/
.up-enter-active {
  animation: slideInUp 1s;
}
@keyframes slideInUp
{
0%   {top:100vh;}
100% {top: 0;}
}
.up-leave-active {
  animation: slideOutUp 1s;
}
@keyframes slideOutUp
{
0%   {top:0;}
100% {top: -100vh;}
}

/*********** 下滑（大序号-->小序号） ***********/
.down-enter-active {
  animation: slideInDown 1s;
}
@keyframes slideInDown
{
0%   {top:-100vh;}
100% {top: 0;}
}
.down-leave-active {
  animation: slideOutDown 1s;
}
@keyframes slideOutDown
{
0%   {top:0;}
100% {top: 100vh;}
}
</style>
