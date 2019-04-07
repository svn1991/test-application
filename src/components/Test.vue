<template>
  <transition name="fade">
    <div class="test-wrapper" v-if="show">
      <div v-for="(questionInfo, index) in test" v-bind:key="questionInfo">
        <question :question="questionInfo.question"></question>
        <div v-if="questionInfo.type === 'multiple-radio' || questionInfo.type === 'multiple-checkbox'">
          <multiple-choice-options :options="questionInfo.options" :type="questionInfo.type"></multiple-choice-options>
        </div>
        <div v-else-if="questionInfo.type === 'text'">
          <text-options></text-options>
        </div>
      </div>
      <div class="next-button-wrapper" v-if="!show">
        <button id="next-button" @click="startTest">Next Question</button>
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
      displayQuestion: 0
    }
  },
  components: {
    Question,
    MultipleChoiceOptions,
    TextOptions
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
