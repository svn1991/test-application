<template>
  <transition name="fade">
    <div class="results-wrapper" v-if="show">
      <div class="complete-test">
        Congrats {{name}},<br /> you have completed the test.
      </div>
      <div class="result-summary">
        You have answered {{this.results.testScore}} correctly out of {{this.results.testRecord.length}} questions.
      </div>
      <div class="good-score" v-if="goodScore">
        <span>Good Job!</span>
        <img src="./assets/smile-emoticon.png" alt="smile-emoticon" />
      </div>
      <div class="bad-score" v-if="!goodScore">
        <span>Better Luck Next Time!</span>
        <img src="./assets/bye-emoticon.png" alt="bye-emoticon" />
      </div>
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

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out 0.25s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.results-wrapper {
  > div {
    margin-bottom: 30px;
    &.complete-test {
      font-size: 25px;
      line-height: 1.3em;
    }

    &.good-score, &.bad-score {
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 35px;
        margin-left: 5px;
      }
    }
  }
}
</style>
