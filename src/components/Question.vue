<template>
    <div class="question-wrapper">{{question}}</div>
</template>

<script>
export default {
  props: ['question']
}
</script>

<style>
.question-wrapper {
  min-height: 50px;
  margin-bottom: 10px;
}
</style>
