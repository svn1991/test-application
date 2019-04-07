<template>
  <div id="app">
    <test :test='testInfo'></test>
  </div>
</template>

<script>
import Test from './components/Test.vue'
import testInfo from './assets/question-answers.json'

export default {
  name: 'app',
  components: {
    Test
  },
  data () {
    return {
      testInfo: {}
    }
  },
  created () {
    this.testInfo = testInfo.questions
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
