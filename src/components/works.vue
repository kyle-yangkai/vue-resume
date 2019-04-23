<template>
  <div class="background">
    5
  </div>
</template>

<script>
export default {
  name: 'works',
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
  background:linear-gradient(to bottom, rgb(0,177,188), rgb(0,162,158));
  width: 100vw;
  height: 100vh;
}
</style>
