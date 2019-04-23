<template>
  <div class="background">
    <div class="edu">教育经历</div>
    <div class="box" v-for="(item,index) in eduInf" :key="index">
      <div class="first">
        <span>{{item.time}}</span>
        <span>{{item.school}}</span>
        <span>{{item.department}}</span>
      </div>
      <div class="second">
        <p>{{item.title}}</p>
        <p>{{item.content}}</p>
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
          school: '华中科技大学',
          department: '工程力学系',
          category: '统招',
          title: '主修专业课程',
          content: '理论力学、材料力学、流体力学、实验力学、计算力学、C++程序设计、电子技术、计算机网络技术、计算机仿真、数学建模、结构优化设计等'
        },
        {
          time: '2019.3-2021.9',
          school: '厦门大学',
          department: '计算机科学与技术',
          category: '非统招',
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
.edu {
  
}
</style>


