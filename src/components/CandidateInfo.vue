<!--
  Scope:
    1. Provide an introduction to the test
    2. Get candidate name
    3. Start Test
-->
<template>
  <transition name="fade" mode="out-in">
    <div class="candidate-wrapper" v-if="show">
      <div class="intro-for-candidate">
        <span class="greet-candidate">Hi<span class="greet-name">{{getName}}</span>!</span>
        <span class="test-intro">Welcome to Random Testing!!</span>
        <span class="test-desc">
          Today, we are going to answer a series of multiple-choice and open-ended questions.
          Before starting the test, please enter your Name.
        </span>
        <span class="test-wish">
          Do your best!!
        </span>
      </div>
      <div class="candidate-info-wrapper">
        <div class="candidate-name">
          <input type="text" placeholder="Enter your name" value="" v-model="candidateName"/>
          <transition name="fade">
            <div class="valid-name" v-if="!nameCheck">Please enter a name</div>
          </transition>
        </div>
      </div>
      <button class="start-button" @click="startTest">Start</button>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['show'],
  data () {
    return {
      candidateName: '',
      nameCheck: true
    }
  },
  computed: {
    /*
      Description: Update name in html live
    */
    getName () {
      return ' ' + this.candidateName + ' '
    }
  },
  methods: {
    /*
      Description: Send signal that candidate is ready to start test
    */
    startTest () {
      if (this.candidateName) {
        this.$emit('startTest', this.candidateName)
      } else {
        this.nameCheck = false
      }
    }
  }
}
</script>

<style lang="scss">
.candidate-wrapper {
  .intro-for-candidate {
    max-width: 500px;
    margin: 0 auto 30px;

    > span {
      display: block;
      margin-bottom: 20px;

      &.greet-candidate {
        font-size: 25px;

        .greet-name {
          color: #f08105;
        }
      }

      &.test-intro {
        font-size: 20px;
        font-weight: bold;
        color: #f08105;
      }

      &.test-desc {
        font-size: 15px;
        line-height: 1.3em;
        text-align: left;
      }

      &.test-wish {
        font-size: 20px;
        color: #f08105;
      }
    }
  }

  .candidate-name {
      height: 50px;
      font-size: 20px;
      width: 250px;
      margin: 0 auto;

    input {
      border-bottom: 1px solid #ffffff;
      padding-bottom: 1px;
    }

    .valid-name {
      color: #fc0505;
      font-size: 11px;
      margin-top: 5px;
      text-align: left;
    }
  }

  .start-button {
    border-radius: 8px;
    padding: 15px 50px;
    font-size: 22px;
    text-decoration: none;
    margin: 30px 20px;
    color: #fff;
    position: relative;
    display: inline-block;
    background-color: #2ecc71;
    box-shadow: 0px 5px 0px 0px #15B358;
    border: none;

    &:hover {
      background-color: #48E68B;
    }

    &:active {
      transform: translate(0px, 5px);
      -webkit-transform: translate(0px, 5px);
      box-shadow: 0px 1px 0px 0px;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
