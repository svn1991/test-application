<template>
  <div id="app">
    <candidate-info @startTest="startTestClicked($event)" :show="showIntro"></candidate-info>
    <test :test='testInfo' :show='startTest' @testEnded="endTestClicked($event)"></test>
    <results :show="testEnded" :name="candidateName" :results="results"></results>
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
      testInfo: [],
      results: {
        testRecord: [],
        testScore: 0,
        testOpenEnded: []
      }
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
      this.results.testRecord = endInfo.testRecord
      this.results.testScore = endInfo.testScore
      this.results.testOpenEnded = endInfo.testOpenEnded
    }
  }
}
</script>

<style lang="scss">
@import url(./assets/css/reset.css);
body {
  background-color: #063852;

  #app {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    width: 70%;
    height: calc(100vh - 100px);
    margin: 100px auto 0;
    position: relative;

    >div {
      position: absolute;
      width: 100%;
    }
  }
}
</style>
