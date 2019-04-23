<template>
  <div class="background">
    4
  </div>
</template>

<script>
export default {
  name: 'job',
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
  background:linear-gradient(to bottom, rgb(0,214,209), rgb(0,177,188));
  width: 100vw;
  height: 100vh;
}
</style>


