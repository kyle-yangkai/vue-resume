<template>
  <div class="background">
    <div class="content">
      <div class="edu">教育经历</div>
      <div class="box animated zoomIn " v-for="(item,index) in eduInf" :key="index">
        <div class="box-1">
          <div class="imgbox">
            <img :src="item.imgUrl" alt="">
          </div>
        </div>
        <div class="box-2">
          <div class="first">
            <span>{{item.time}}</span>
            <span>{{item.school}}</span>
            <span>{{item.department}}</span>
          </div>
          <div class="second">
            <p><strong>{{item.title}}: </strong>{{item.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'education',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      eduInf :[
        {
          time: '2011.9-2015.6',
          imgUrl: '/static/hust.png',
          school: '华中科技大学',
          department: '工程力学系',
          title: '主修专业课程',
          content: '理论力学、材料力学、流体力学、实验力学、计算力学、C++程序设计、电子技术、计算机网络技术、计算机仿真、数学建模、结构优化设计等'
        },
        {
          time: '2019.3-2021.9',
          imgUrl: '/static/xiada.png',
          school: '厦门大学',
          department: '计算机科学与技术',
          title: '主修专业课程',
          content: 'c语言、计算机组成原理、Matlab程序设计与应用、web程序设计、网络安全、软件项目管理、计算机网络与通讯等'
        }
      ]
    }
  },
    methods: {
      enterAnimate () {
        this.showMe = true
      }
    }
}
</script>
<style scoped>
.background {
  background:linear-gradient(to bottom, rgb(125,255,254), rgb(0,254,248));
  width: 100vw;
  height: 100vh;
}
.content {
  width: 70%;
  padding-top: 10%;
  margin: 0 auto;
}
.edu {
  margin-bottom: 0.2rem;
}
.box {
  display: flex;
  align-content: center;
  vertical-align: middle;
  margin-bottom: 0.2rem;
  align-items: center;
  width: 100%;
}
.imgbox{
  width:1rem;
}
.box-2 {
  padding-left: 0.2rem;
  width: 85.7%;
  display: flex;
  flex-direction: column;
}
.first {
  display: flex;
  height: 0.2rem;
  justify-content: center;
}
.first>span {
  font-size: 0.15rem;
  padding-right: 0.15rem;
}
.second>p{
  font-size: 0.1rem;
  margin-top:0.08rem;
  text-align:left;
}
</style>


