<!--
  Scope: Display options for questions which are multiple choice and need the options to be radio/checkbox
  -->
<template>
  <div class="options-wrapper">
    <ul>
      <li v-for="option in options" v-bind:key="option">
        <span v-if="type === 'multiple-radio'">
          <label class="label-wrapper radio-label">{{option}}
            <input type="radio" v-bind:value="option" v-bind:name="groupBy" v-model="picked" @change="isRadioAnswered"/>
            <span class="checkmark"></span>
          </label>
        </span>
        <span v-else-if="type === 'multiple-checkbox'">
          <label class="label-wrapper checkbox-label">{{option}}
            <input type="checkbox" v-bind:value="option" v-model="checked" @change="isCheckboxAnswered"/>
            <span class="checkmark"></span>
          </label>
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
    /**
     * Desc: Report back on the answer selected to parent component
     */
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

<style lang="scss">
  .options-wrapper {
    ul {
      display: inline-block;
      li {
        list-style-type: none;
        display: block;

        /*custom radio button credit: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_radio*/

        /* The container */
        .label-wrapper {
          display: block;
          position: relative;
          padding-left: 35px;
          margin-bottom: 15px;
          cursor: pointer;
          font-size: 18px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          line-height: 1.3em;
          text-align: left;

          &.checkbox-label {
            line-height: 1em;
          }

          /* Hide the browser's default radio button */
          input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }

          /* Create a custom radio button */
          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            background-color: #bc9971;
          }

          &.radio-label .checkmark {
            border-radius: 50%;
            height: 20px;
            width: 20px;
          }

          &.checkbox-label .checkmark {
            height: 15px;
            width: 15px;
          }

          /* On mouse-over, add a grey background color */
          &:hover input ~ .checkmark {
            background-color: #dd9848;
          }

          /* When the radio button is checked, add a blue background */
          input:checked ~ .checkmark {
            background-color: #f08105;
          }

          /* Create the indicator (the dot/circle - hidden when not checked) */
          .checkmark:after {
            content: "";
            position: absolute;
            display: none;
          }

          /* Show the indicator (dot/circle) when checked */
          input:checked ~ .checkmark:after {
            display: block;
          }

          /* Style the indicator (dot/circle) */
          &.radio-label .checkmark:after {
            top: 6px;
            left: 6px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: white;
          }

          &.checkbox-label .checkmark:after {
            left: 4px;
            top: 0;
            width: 4px;
            height: 8px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
          }
        }
      }
    }
  }
</style>
