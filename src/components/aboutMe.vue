<template>
  <div class="background">
      <div class="header">
        <div class="photo animated zoomIn slow">
          <img src="/static/photo.jpg" alt="">  <!-- ../assets/photo.jpg -->
        </div>
        <span>杨凯</span>
      </div>
      <div class="inf">
        <div class="inf-1">
          <div class="inf-1-1" v-for="(item,index) in iconItems" :key="index">
            <a :href="item.link" target="view_frame" class="animated bounce delay-1s">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.icon"></use>
              </svg>
              <p class="iconCont">{{item.content}}</p>
            </a>
          </div>
        </div>
        <!-- <div class="inf-1">
          <span :class="item.class" v-for="(item,index) in iconItems" :key="index">{{item.content}}</span>
        </div> -->
      </div>
  </div>
</template>

<script>
export default {
  name: 'aboutMe',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      iconItems: [
        {
        link: 'javascript:void();',
        icon: '#iconshengri--',
        class: 'age',
        content:'1992-08'
        },
        {
        link: 'javascript:void();',
        icon: '#icondizhi1',
        class: 'adress',
        content:'思明区卧龙晓城'
        },
        {
        link: 'tel:18559769559',
        icon: '#iconziyuan1',
        class: 'tel',
        content:'18559769559'
        },
        {
        link: 'mailto:1186211204@qq.com',
        icon: '#iconyouxiang',
        class: 'email',
        content:'1186211204@qq.com'
        },
        {
        link: 'https://github.com/kyle-yangkai',
        icon: '#iconziyuan',
        class: 'github',
        content:'kyle-yangkai'
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
  background:linear-gradient(to bottom, rgb(162,255,254), rgb(125,255,254));
  width: 100vw;
  height: 100vh;
}
.header {
  padding-top:10%;
  padding-bottom:0.05rem; 
  width: 70%;
  margin: 0 auto 0.1rem;
  border-bottom: 3px solid #fff;
}
.photo {
  margin: 0 auto;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-bottom: 0.05rem;
  overflow: hidden;
}
.inf {
  width: 70%;
  margin: 0 auto;
  position: relative;
}
.inf-1 {
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-grow: initial;
}
.inf-1>.inf-1-1 {
  width: 20%;
}
.inf-1-1>a{
  display: block;
  position: relative;
}
.icon {
  height: 0.4rem;
  width: 0.4rem;
}
.inf-1-1 .iconCont {
  position: absolute;
  width: 100%;
  display: block;
  font-size: 0.12rem;
}
.inf-1:first-child>span {
  padding-bottom: 0.1rem;
}
/* .age,.adress,.tel,.email,.github {
  position: relative;
  width:15%;
  text-align: center;
  font-size: 0.15rem;
}
.adress,.tel {
  width: 20%;
}
.email {
  width: 30%;
} */
</style>


