<template>
  <transition name="fade">
    <div class="results-wrapper" v-if="show">
      Congrats {{name}}, you have completed the test.<br />
      You have answered {{this.results.testScore}} correctly out of {{this.results.testRecord.length}} questions.<br />
      <div class="good-score" v-if="goodScore">Good Job!</div>
      <div class="bad-score" v-if="!goodScore">Better Luck Next Time!</div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['show', 'name', 'results'],
  data () {
    return {
      goodScore: false
    }
  },
  updated () {
    let halfScore = this.results.testRecord.length / 2
    if (this.results.testScore >= halfScore) {
      this.goodScore = true
    } else {
      this.goodScore = false
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out 0.25s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
