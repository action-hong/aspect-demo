<template>
  <div id="app" :class="ratio">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { calRatio } from './ratio'
export default {
  name: 'app',
  data () {
    return {
      ratio: ''
    }
  },
  components: {
    HelloWorld
  },
  created () {
    this.initRatio()
    window.addEventListener('resize', () => {
      this.initRatio()
    })
  },
  destroyed() {
    window.removeEventListener('resize', () => {
      this.initRatio()
    })
  },
  methods: {
    initRatio () {
      const doc = document.documentElement
      this.ratio = calRatio(doc)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
