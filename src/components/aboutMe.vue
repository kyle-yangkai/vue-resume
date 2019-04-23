<template>
  <div class="background">
      <div class="photo">
        <img src="" alt="">
        <span>杨凯</span>
      </div>
      <div class="inf">
        <div class="inf-1">
          <span>出生年月</span>
          <span>籍贯</span>
          <span>现居地</span>
          <span>电话</span>
          <span>邮箱</span>
        </div>
        <div class="inf-1">
          <span>1992-08</span>
          <span>湖北荆州</span>
          <span>思明区卧龙晓城</span>
          <span>13164621409</span>
          <span>1186211204@qq.com</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'aboutMe',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  background:linear-gradient(to bottom, rgb(162,255,254), rgb(125,255,254));
  width: 100vw;
  height: 100vh;
}
</style>


