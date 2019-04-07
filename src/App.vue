<template>
  <div id="app">
    <candidate-info @startTest="startTest = $event" :show="startTest"></candidate-info>
    <test :test='testInfo' :show='startTest'></test>
  </div>
</template>

<script>
import CandidateInfo from './components/CandidateInfo.vue'
import Test from './components/Test.vue'

import testInfo from './assets/question-answers.json'

export default {
  name: 'app',
  components: {
    CandidateInfo,
    Test
  },
  data () {
    return {
      startTest: false,
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
