<!--
  Scope:
    1. Print out all the questions and options stated in question-answers.json
    2. For each question, candidate should receive info if question is answered correctly or not
    3. Able to traverse between questions till end of test
    4. Send signal when test is completed
-->
<template>
  <transition name="fade" mode="out-in">
    <div class="test-wrapper" v-if="show">
      <transition-group name="fade">
        <div v-for="(questionInfo, index) in test" v-bind:key="index+'_'+index" v-bind:indexNumber="index">
            <div class="question" v-if="displayQuestion === index">
              <question :question="questionInfo.question"></question>
              <div class="answer-wrapper" v-bind:class="answerSubmitted ? 'no-change' : ''">
                <div v-if="questionInfo.type === 'multiple-radio' || questionInfo.type === 'multiple-checkbox'">
                  <multiple-choice-options
                    :options="questionInfo.options"
                    :type="questionInfo.type"
                    :groupBy="questionInfo.groupBy"
                    @answered="answered=$event"
                    @answer="answer=$event"
                  ></multiple-choice-options>
                  <question-result
                    v-if="answerSubmitted"
                    :showEncourage="displayQuestion < test.length-1"
                    :questionObject="test[displayQuestion]"
                    :candidateAnswer="answer"
                    @returnFromQuestionResult="resultStatusReturned($event)"
                  ></question-result>
                </div>
                <div v-else-if="questionInfo.type === 'text'">
                  <text-options @answered="answered=$event" @answer="answer=$event"></text-options>
                </div>
              </div>
              <div class="next-button-wrapper">
                <transition name="fade" mode="out-in">
                  <span id="answer-prompt" v-if="!answered">Please answer the question.</span>
                  <button id="submit-answer" @click="answerIsSubmitted" v-if="answered && !answerSubmitted">Submit Answer</button>
                  <button id="next-button" @click="getNextQuestion" v-if="answerSubmitted && displayQuestion < test.length-1">Next Question</button>
                  <button id="finish-button" @click="testFinished" v-if="answerSubmitted && displayQuestion === test.length-1">Finish Test</button>
                </transition>
              </div>
            </div>
        </div>
      </transition-group>
    </div>
  </transition>
</template>

<script>
import Question from './Question.vue'
import MultipleChoiceOptions from './MultipleChoiceOptions.vue'
import TextOptions from './TextOptions.vue'
import QuestionResult from './QuestionResult.vue'

export default {
  props: ['show', 'test'],
  data () {
    return {
      displayQuestion: 0,
      answer: '',
      openEndedAnswers: [],
      fixedAnswers: [],
      answered: false,
      answerSubmitted: false,
      correct: 0
    }
  },
  components: {
    Question,
    MultipleChoiceOptions,
    TextOptions,
    QuestionResult
  },
  methods: {
    /*
      Desc:
      When candidate submits answer,
      'answerSubmitted' flag helps to show if answer is correct or not
    */
    answerIsSubmitted () {
      this.answerSubmitted = true
    },
    /*
      Desc:
      Info from result component is returned and stored:
      -> update questions answered correctly
      -> update and categorize the questions between
         questions with/without pre-given answers
    */
    resultStatusReturned (info) {
      this.correct += info.point
      if (info.type === 'fixed') {
        this.fixedAnswers.push(info.record)
      } else {
        this.openEndedAnswers.push(info.record)
      }
    },
    /*
      Desc:
      Reset 'data' variables to prepare for next question
    */
    getNextQuestion () {
      this.answered = false
      this.answer = ''
      this.answerSubmitted = false
      this.displayQuestion++
    },
    /*
      Desc:
      Send back information to parent component regarding
      candidate performance
    */
    testFinished () {
      this.$emit('testEnded', {
        testRecord: this.fixedAnswers,
        testScore: this.correct,
        testOpenEnded: this.openEndedAnswers
      })
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active {
  transition: opacity 0.25s ease-out 0.25s;
}

.fade-leave-active {
  transition: opacity 0.25s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.test-wrapper {
  .answer-wrapper {
    min-height: 150px;
    margin-bottom: 10px;
    &.no-change {
      pointer-events: none;
    }
  }

  .next-button-wrapper button {
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

    &#submit-answer {
      background-color: #ac5c00;
      -webkit-box-shadow: 0px 5px 0px 0px #7b4201;
      box-shadow: 0px 5px 0px 0px #7b4201;

      &:hover {
        background-color: #f08105;
      }
    }
  }
}
</style>
