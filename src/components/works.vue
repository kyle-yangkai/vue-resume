<template>
  <div class="background">
    <div class="box">
      <div class="title">项目经历</div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in project" :key="index">
              <div class="backImg">
                <img :src="item.picUrl" alt="">
                <p class="name"><span>{{item.name}}</span></p>
                <p class="link">
                  <a :href="item.githubUrl" class="link1" target="view_frame" :download="item.download">{{item.git}}</a>
                  <a :href="item.showUrl" class="link2" target="view_frame" >{{item.show}}</a>
                </p>
              </div>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  name: 'works',
  data () {
    return {
      project:[
        {
          name: '整点内部Erp系统',
          picUrl: '/static/erp.png',
          show: '示例',
          git: '源码',
          showUrl: 'https://kyle-yang.top/main.html',
          githubUrl: 'https://kyle-yang.top/main.html'
        },
        {
          name: '个人简历（网站版）',
          picUrl: '/static/resume.png',
          show: '示例',
          git: '源码',
          showUrl: 'https://kyle-yang.top/resume',
          githubUrl: 'https://github.com/kyle-yangkai/vue-resume'
        },
        {
          name: '饿了么手机端',
          picUrl: '/static//eleme.jpg',
          show: '示例',
          git: '源码',
          showUrl: 'https://kyle-yang.top/eleme/',
          githubUrl: 'https://github.com/kyle-yangkai/vue-mobil'
        },
        {
          name: '个人简历(pdf下载版）',
          picUrl: '/static/download.jpg',
          show: '查看',
          git: '下载',
          showUrl: 'https://kyle-yang.top/yangkai.pdf',
          githubUrl: 'https://kyle-yang.top/yangkai.pdf',
          download: '杨凯-前端工程师'
        },
        {
          name: '临摹静态网站',
          picUrl: '/static/demo.png',
          show: '示例',
          git: '源码',
          showUrl: 'https://kyle-yang.top/showDemo/home.html',
          githubUrl: 'https://github.com/kyle-yangkai/cssStudy/tree/master/%E7%BD%91%E7%AB%99%E4%B8%B4%E6%91%B9/show'
        },
      ]
    }
  },
  methods: {
    enterAnimate () {
      this.showMe = true
    }
  },
  mounted () {
     new Swiper('.swiper-container', {
        observer: true,
        observeParents: true,
        initialSlide:0,
        autoplay:5000,
        autoplayDisableOnInteraction: false,
        effect : 'coverflow',
        pagination: '.swiper-pagination',
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
     })
  }
}
</script>
<style scoped>
.background { 
  background:linear-gradient(to bottom, rgb(0,177,188), rgb(0, 162, 158));
  width: 100vw;
  height: 100vh;
}
.box {
  padding-top: 7%;
  width: 70%;
  margin: 0 auto;
}
.title {
  margin-bottom: 0.2rem;
}
.projectBox {
  display: flex;
}
.project {
  flex-grow: 1;
  flex-shrink: 0;
  width: 500px;
  height: 100px;
  padding: 50px;
  margin: 50px;
  border: 1px solid #000;
}
.swiper-container {
    width: 6rem;
    height: 3rem;
}
.backImg{
  /* width: 90%; */
  margin: 0 auto;
  display: flex;
}
.backImg img {
  opacity: 0.9;
}
.link,.name{
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0.5rem;
  width: 100%;
}
.name {
  bottom: 1.5rem;
}
.link a,.name span  {
  padding: 0 0.2rem;
  margin: 0 0.1rem;
  border: 1px solid #555;
  text-align: center;
  border-radius: 0.2rem;
  color: #fff;
  background: rgb(0, 162, 158);
}
.name span {
  padding: 0 0.4rem;
}
</style>
