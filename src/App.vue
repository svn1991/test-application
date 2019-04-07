<template>
  <div id="app">
    <candidate-info @startTest="startTestClicked($event)" :show="showIntro"></candidate-info>
    <test :test='testInfo' :show='startTest' @testEnded="endTestClicked"></test>
    <results :show="testEnded"></results>
  </div>
</template>

<script>
import CandidateInfo from './components/CandidateInfo.vue'
import Test from './components/Test.vue'
import Results from './components/Results.vue'

import testInfo from './assets/question-answers.json'

export default {
  name: 'app',
  components: {
    CandidateInfo,
    Test,
    Results
  },
  data () {
    return {
      showIntro: true,
      startTest: false,
      testEnded: false,
      candidateName: '',
      testInfo: []
    }
  },
  created () {
    this.testInfo = testInfo.questions
  },
  methods: {
    startTestClicked (candidateName) {
      this.showIntro = false
      this.startTest = true
      this.candidateName = candidateName
    },
    endTestClicked (endInfo) {
      this.startTest = false
      this.testEnded = true
    }
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
