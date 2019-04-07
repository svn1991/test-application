<template>
  <transition name="fade">
    <div class="candidate-wrapper" v-if="!show">
      <button id="start-button" @click="startTest">Start</button>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['show'],
  updated () {

  },
  methods: {
    startTest () {
      this.show = true
      this.$emit('startTest', this.show)
    }
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
