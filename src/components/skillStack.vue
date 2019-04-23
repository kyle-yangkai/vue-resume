<template>
  <div class="background">
    3
  </div>
</template>

<script>
export default {
  name: 'skillStack',
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
  background:linear-gradient(to bottom, rgb(0,254,248), rgb(0,214,209));
  width: 100vw;
  height: 100vh;
}
</style>

