<template>
  <transition name="fade">
    <div class="candidate-wrapper" v-if="show">
      <div class="candidate-info-wrapper">
        <div class="candidate-name">
          Name: <input type="text" value="" v-model="candidateName"/>
        </div>
      </div>
      <button id="start-button" @click="startTest">Start</button>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['show'],
  data () {
    return {
      candidateName: ''
    }
  },
  updated () {

  },
  methods: {
    startTest () {
      this.$emit('startTest', this.candidateName)
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
