<template>
  <div class="options-wrapper">
    <ul>
      <li v-for="option in options" v-bind:key="option">
        <span v-if="type === 'multiple-radio'">
          <input type="radio" v-bind:value="option" v-bind:name="groupBy" v-model="picked" @change="isRadioAnswered"/> {{option}}
        </span>
        <span v-else-if="type === 'multiple-checkbox'">
          <input type="checkbox" v-bind:value="option" v-model="checked" @change="isCheckboxAnswered"/> {{option}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['type', 'options', 'groupBy'],
  data () {
    return {
      picked: '',
      checked: []
    }
  },
  methods: {
    isRadioAnswered () {
      this.$emit('answered', !!this.picked)
      this.$emit('answer', this.picked)
    },
    isCheckboxAnswered () {
      this.$emit('answered', this.checked.length > 0)
      this.$emit('answer', this.checked)
    }
  }
}
</script>

<style>
  li {
    list-style-type: none;
  }
</style>
