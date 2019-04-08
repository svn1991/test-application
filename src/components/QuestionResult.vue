<!--
  Scope: Check is question has been answered correctly
-->
<template>
  <div class="question-result-wrapper">
    <div class="result" v-if="showOverall"> 
      <div class="pass" v-bind:class="showResult ? 'showResult' : 'hideResult'">You answered correctly. Good job!</div>
      <div class="fail" v-bind:class="!showResult ? 'showResult' : 'hideResult'">
          That was the wrong answer.<br />
          <span v-if="showEncourage">
            Let's do better in the next question!
          </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showEncourage', 'questionObject', 'candidateAnswer'],
  data () {
    return {
      showResult: false,
      showOverall: false
    }
  },
  /**
   * Desc: check candidate answer with pre-given answers and report back to parent component
  */
  mounted () {
    this.checkResults()
  },
  methods: {
    /**
     * Desc: recheck results
     */
    checkResults () {
      let type = this.questionObject.type
      let candidateAnswer = this.candidateAnswer
      let correctAnswer = this.questionObject.answers

      let record = {
        question: this.questionObject.question,
        candidateAnswer: candidateAnswer
      }

      let correct = 0
      let pushToType = ''

      switch (type) {
        case 'multiple-radio':
          this.showOverall = true
          if (candidateAnswer === correctAnswer) {
            this.showResult = true
            correct++
          }
          record.preDefinedAnswer = correctAnswer
          pushToType = 'fixed'
          break
        case 'multiple-checkbox':
          this.showOverall = true
          if (this.isArrayEqual(candidateAnswer, correctAnswer)) {
            this.showResult = true
            correct++
          }
          record.preDefinedAnswer = correctAnswer
          pushToType = 'fixed'
          break
        case 'text':
          pushToType = 'open-end'
          break
        default:
          console.log('No result check for question type: ' + type)
      }

      this.$emit('returnResultStatus', {
        record,
        point: correct,
        pushToType
      })
    },
    /**
     * Desc: Check if two arrays are equal
     */
    isArrayEqual (array1, array2) {
      if (array1.length === array2.length) {
        let arrayString1 = array1.sort().join(',')
        let arrayString2 = array2.sort().join(',')
        if (arrayString1 === arrayString2) {
          return true
        }
      }
      return false
    }
  }
}
</script>

<style lang="scss">
.question-result-wrapper {
  .result {
    .hideResult {
      opacity: 0;
      max-height: 0;
      margin-top: 0;
    }
    .showResult {
      opacity: 1;
      max-height: 40px;
      margin-top: 20px;
      transition: opacity 0.25s ease-out, max-height 0.25s ease-out, margin-top 0.25s ease-out;
    }
  }
}
</style>
