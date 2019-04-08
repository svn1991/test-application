<template>
  <div class="text-option-wrapper">
    <textarea
      v-model="textBox"
      @input="isTextAdded"
      placeholder="Please type your answer here. Limit of 1500 characters applies.">
    </textarea>
    <div class="notify" v-bind:class="remainingChar <= 0 ? 'deny-char' : ''">{{notification}}</div>
  </div>
</template>

<script>
// Text Area verification and source credit: https://codepen.io/rajcsanyiz/pen/VQEZmy

export default {
  data () {
    return {
      limit: 1500,
      textBox: ''
    }
  },
  computed: {
    remainingChar () {
      return this.limit - this.textBox.length
    },
    notification () {
      return 'Characters Limit: ' + this.remainingChar + '/' + this.limit
    }
  },
  methods: {
    isTextAdded () {
      this.check()
      this.$emit('answered', !!this.textBox)
      this.$emit('answer', this.textBox)
    },
    check () {
      this.textBox = this.textBox.substr(0, this.limit)
    }
  }
}
</script>

<style lang="scss">
.text-option-wrapper {
  margin-bottom: 20px;
  textarea {
    resize: none;
    width: 100%;
    min-height: 150px;
    color: #000000;
    text-align: left;
    font-size: 13px;
  }

  .notify {
    text-align: right;
    font-size: 11px;
    margin-top: 3px;
    color: #aeaeae;

    &.deny-char {
      color: #fc0505;
    }
  }
}

</style>
