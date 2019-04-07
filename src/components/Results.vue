<template>
  <transition name="fade">
    <div class="results-wrapper" v-if="show">
      Congrats, you have completed the test.
    </div>
  </transition>
</template>

<script>
export default {
  props: ['show']
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
