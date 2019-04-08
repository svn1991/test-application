<template>
  <transition name="fade">
    <div class="test-wrapper" v-if="show">
      <transition-group name="fade" mode="out-in">
        <div v-for="(questionInfo, index) in test" v-bind:key="index+'_'+index" v-bind:indexNumber="index">
            <div class="question" v-if="displayQuestion === index">
              <question :question="questionInfo.question"></question>
              <div v-if="questionInfo.type === 'multiple-radio' || questionInfo.type === 'multiple-checkbox'">
                <multiple-choice-options
                  :options="questionInfo.options"
                  :type="questionInfo.type"
                  :groupBy="questionInfo.groupBy"
                  @answered="answered=$event"
                  @answer="answer=$event"
                ></multiple-choice-options>
                <transition name="fade" mode="out-in">
                  <div class="result" v-if="answerSubmitted">
                    <div class="pass" v-if="showResult">You answered correctly. Good job!</div>
                    <div class="fail" v-if="!showResult">
                      That was the wrong answer.<br />
                      Let's do better in the next question!</div>
                  </div>
                </transition>
              </div>
              <div v-else-if="questionInfo.type === 'text'">
                <text-options @answered="answered=$event" @answer="answer=$event"></text-options>
              </div>
              <div class="next-button-wrapper">
                <transition name="fade">
                  <span id="answer-prompt" v-if="!answered">Please answer the question.</span>
                  <button id="submit-answer" @click="answerIsSubmitted" v-if="answered && !answerSubmitted">Submit Answer</button>
                  <button id="next-button" @click="getNextQuestion" v-if="answerSubmitted && displayQuestion < test.length-1">Next Question</button>
                  <button id="finish-button" @click="testFinished" v-if="answerSubmitted && displayQuestion === test.length-1">Finish Test</button>
                </transition>
              </div>
            </div>
        </div>
      </transition-group>
    </div>
  </transition>
</template>

<script>
import Question from './Question.vue'
import MultipleChoiceOptions from './MultipleChoiceOptions.vue'
import TextOptions from './TextOptions.vue'

export default {
  props: ['show', 'test'],
  data () {
    return {
      displayQuestion: 0,
      answer: '',
      testAnswers: [],
      answered: false,
      answerSubmitted: false,
      correct: 0,
      showResult: false
    }
  },
  components: {
    Question,
    MultipleChoiceOptions,
    TextOptions
  },
  methods: {
    answerIsSubmitted () {
      this.checkResults()
      this.answerSubmitted = true
    },
    checkResults () {
      let currentQuestionInfo = this.test[this.displayQuestion]
      let type = currentQuestionInfo.type
      let candidateAnswer = this.answer
      let correctAnswer = currentQuestionInfo.answers

      let record = {
        question: currentQuestionInfo.question,
        candidateAnswer: candidateAnswer
      }

      switch (type) {
        case 'multiple-radio':
          if (candidateAnswer === correctAnswer) {
            this.showResult = true
            this.correct++
          }
          record.preDefinedAnswer = correctAnswer
          break
        case 'multiple-checkbox':
          if (this.isArrayEqual(candidateAnswer, correctAnswer)) {
            this.showResult = true
            this.correct++
          }
          record.preDefinedAnswer = correctAnswer
          break
        case 'text':
          break
        default:
          console.log('No result check for question type: ' + type)
      }
      this.testAnswers.push(record)
    },
    isArrayEqual (array1, array2) {
      if (array1.length === array2.length) {
        let arrayString1 = array1.sort().join(',')
        let arrayString2 = array2.sort().join(',')
        if (arrayString1 === arrayString2) {
          return true
        }
      }
      return false
    },
    getNextQuestion () {
      this.answered = false
      this.answer = ''
      this.answerSubmitted = false
      this.showResult = false
      this.displayQuestion++
    },
    testFinished () {
      this.$emit('testEnded')
    }
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity 0.25s ease-out 0.25s;
}

.fade-leave-active {
  transition: opacity 0.25s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
