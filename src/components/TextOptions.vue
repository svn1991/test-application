<template>
  <div class="text-option-wrapper">
    <input type="text" value="" v-model="textBox" @input="isTextAdded"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textBox: ''
    }
  },
  methods: {
    isTextAdded () {
      this.$emit('answered', !!this.textBox)
      this.$emit('answer', this.textBox)
    }
  }
}
</script>

<style>

</style>
