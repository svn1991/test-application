<template>
  <transition name="fade">
    <div class="test-wrapper" v-if="show">
      <div v-for="(questionInfo, index) in test" v-bind:key="index">
        <transition name="fade">
          <div class="question" v-if="displayQuestion === index">
            <question :question="questionInfo.question"></question>
            <div v-if="questionInfo.type === 'multiple-radio' || questionInfo.type === 'multiple-checkbox'">
              <multiple-choice-options
                :options="questionInfo.options"
                :type="questionInfo.type"
                :groupBy="questionInfo.groupBy"
                @answered="answered=$event"
              ></multiple-choice-options>
            </div>
            <div v-else-if="questionInfo.type === 'text'">
              <text-options @answered="answered=$event"></text-options>
            </div>
            <div class="next-button-wrapper">
              <transition name="fade">
                <span id="answer-prompt" v-if="!answered">Please answer the question.</span>
                <button id="next-button" @click="getNextQuestion" v-if="answered && displayQuestion < questions-1">Next Question</button>
                <button id="finish-button" @click="testFinished" v-if="answered && displayQuestion === questions-1">Finish Test</button>
              </transition>
            </div>
          </div>
        </transition>
      </div>
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
      answered: false,
      questions: this.test.length,
      correct: 0
    }
  },
  components: {
    Question,
    MultipleChoiceOptions,
    TextOptions
  },
  methods: {
    getNextQuestion () {
      this.answered = false
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
