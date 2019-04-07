<template>
  <div class="test-wrapper">
    <div v-for="questionInfo in test" v-bind:key="questionInfo">
      <question :question="questionInfo.question"></question>
      <div v-if="questionInfo.type === 'multiple-radio' || questionInfo.type === 'multiple-checkbox'">
        <multiple-choice-options :options="questionInfo.options" :type="questionInfo.type"></multiple-choice-options>
      </div>
      <div v-else-if="questionInfo.type === 'text'">
        <text-options></text-options>
      </div>
    </div>
  </div>
</template>

<script>
import Question from './Question.vue'
import MultipleChoiceOptions from './MultipleChoiceOptions.vue'
import TextOptions from './TextOptions.vue'

export default {
  props: ['test'],
  components: {
    Question,
    MultipleChoiceOptions,
    TextOptions
  }
}
</script>

<style></style>
