<template>
  <div class="options-wrapper">
    <ul>
      <li v-for="option in options" v-bind:key="option">
        <span v-if="type === 'multiple-radio'">
          <input type="radio" value="option" /> {{option}}
        </span>
        <span v-else-if="type === 'multiple-checkbox'">
          <input type="checkbox" value="option" /> {{option}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['type', 'options']
}
</script>

<style>
  li {
    list-style-type: none;
  }
</style>
