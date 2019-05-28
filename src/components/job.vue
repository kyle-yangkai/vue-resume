<template>
  <div class="background">
    <div class="box">
      <div class="title">工作经历</div>
      <div :class="['job animated lightSpeedIn',item.class]" v-for="(item, index) in jobList" :key="index">
        <svg class="icon " aria-hidden="true">
          <use xlink:href="#icontime"></use>
        </svg>
        <div class="time">{{item.time}}</div>
        <div class="content">
          <p>
            <span>{{item.company}}</span>
            <span>{{item.position}}</span>
          </p>
          <div class="duty">
            <strong>职责： </strong>
            <p>
              <span v-for="(duty,index) in item.duty" :key="index">{{duty}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'job',
  data () {
    return {
      jobList: [
        {
          class: '',
          time: '2015.7-2016.1',
          company: '中建八局第一建设有限公司',
          position: '土建工程师',
          duty: ['识图、制图；相关各部门协力合作，协调各供应商保质保量完成工程建设。']
        },
        {
          class: 'delay-1s',
          time: '2016.4-2018.3',
          company: '厦门诺予营销策划有限公司',
          position: '项目经理',
          duty: ['项目的统筹与运营、活动组织协调、项目监督总结、客户维护对接管理。']
        },
        {
          class: 'delay-2s',
          time: '2018.4-至今',
          company: '厦门整点广告有限公司',
          position: '前端工程师',
          duty: [
                  '1. 公司内部erp系统前端的开发，主要应用的技术是html，css，javascript，jquery，layUI日期插件',
                  '2.erp微信小程序前端的开发，主要用于公司审批及查看，应用的技术是微信原声开发工具，WEUI',
                  '3.其他小项目的前端界面制作'
                ]
        },
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
  background:linear-gradient(to bottom, rgb(0,214,209), rgb(0,177,188));
  width: 100vw;
  height: 100vh;
}
.box {
  padding-top: 10%;
  width: 70%;
  margin: 0 auto;
}
.title {
  margin-bottom: 0.2rem;
}
.job {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.2rem;
}
.time {
  white-space:nowrap;
  font-size: 0.15rem;
  width: 20%;
  height:0.2rem;
  line-height: 0.2rem;
}
.icon {
  height: 0.2rem;
  width: 0.2rem;
}
.content {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 75%;
}
.content p:first-child, .content  p:first-child span{
  font-size: 0.15rem;
  height:0.2rem;
  line-height: 0.2rem;
}
.duty, .duty p,.duty p span{
  font-size: 0.1rem;
  display: flex;
}
.duty {
  margin-top: 0.05rem;
}
.duty p{
  flex-direction: column;
}
.duty p span {
  margin-bottom: 0.05rem;
}
</style>


