(function(e){function t(t){for(var n,r,o=t[0],c=t[1],u=t[2],d=0,p=[];d<o.length;d++)r=o[d],a[r]&&p.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},a={app:0},i=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/test-application/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"029f":function(e,t,s){},"071c":function(e,t,s){},"16a2":function(e,t,s){e.exports=s.p+"img/bye-emoticon.35805927.png"},"16ea":function(e,t,s){},"33a8":function(e,t,s){"use strict";var n=s("f6d3"),a=s.n(n);a.a},3582:function(e,t,s){},4405:function(e,t,s){e.exports=s.p+"img/smile-emoticon.0eabcfb2.png"},"56d7":function(e,t,s){"use strict";s.r(t);var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("candidate-info",{attrs:{show:e.showIntro},on:{startTest:function(t){return e.startTestClicked(t)}}}),s("test",{attrs:{test:e.testInfo,show:e.startTest},on:{testEnded:function(t){return e.endTestClicked(t)}}}),s("end-test",{attrs:{show:e.testEnded,name:e.candidateName,results:e.results}})],1)},i=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"fade",mode:"out-in"}},[e.show?s("div",{staticClass:"candidate-wrapper"},[s("div",{staticClass:"intro-for-candidate"},[s("span",{staticClass:"greet-candidate"},[e._v("Hi"),s("span",{staticClass:"greet-name"},[e._v(e._s(e.getName))]),e._v("!")]),s("span",{staticClass:"test-intro"},[e._v("Welcome to Random Testing!!")]),s("span",{staticClass:"test-desc"},[e._v("\n        Today, we are going to answer a series of multiple-choice and open-ended questions.\n        Before starting the test, please enter your Name.\n      ")]),s("span",{staticClass:"test-wish"},[e._v("\n        Do your best!!\n      ")])]),s("div",{staticClass:"candidate-info-wrapper"},[s("div",{staticClass:"candidate-name"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.candidateName,expression:"candidateName"}],attrs:{type:"text",placeholder:"Enter your name",value:""},domProps:{value:e.candidateName},on:{input:function(t){t.target.composing||(e.candidateName=t.target.value)}}}),s("transition",{attrs:{name:"fade"}},[e.nameCheck?e._e():s("div",{staticClass:"valid-name"},[e._v("Please enter a name")])])],1)]),s("button",{staticClass:"start-button",on:{click:e.startTest}},[e._v("Start")])]):e._e()])},o=[],c={props:["show"],data(){return{candidateName:"",nameCheck:!0}},computed:{getName(){return" "+this.candidateName+" "}},methods:{startTest(){this.candidateName?this.$emit("startTest",this.candidateName):this.nameCheck=!1}}},u=c,l=(s("9cb9"),s("2877")),d=Object(l["a"])(u,r,o,!1,null,null,null),p=d.exports,h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"fade",mode:"out-in"}},[e.show?s("div",{staticClass:"test-wrapper"},[s("transition-group",{attrs:{name:"fade"}},e._l(e.test,function(t,n){return s("div",{key:n+"_"+n,attrs:{indexNumber:n}},[e.displayQuestion===n?s("div",{staticClass:"question"},[s("question",{attrs:{question:t.question}}),s("div",{staticClass:"answer-wrapper",class:e.answerSubmitted?"no-change":""},["multiple-radio"===t.type||"multiple-checkbox"===t.type?s("div",[s("multiple-choice-options",{attrs:{options:t.options,type:t.type,groupBy:t.groupBy},on:{answered:function(t){e.answered=t},answer:function(t){e.answer=t}}})],1):"text"===t.type?s("div",[s("text-options",{on:{answered:function(t){e.answered=t},answer:function(t){e.answer=t}}})],1):e._e()]),s("div",{staticClass:"next-button-wrapper"},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[e.answered?e._e():s("span",{attrs:{id:"answer-prompt"}},[e._v("Please answer the question.")]),e.answered&&!e.answerSubmitted?s("button",{attrs:{id:"submit-answer"},on:{click:e.answerIsSubmitted}},[e._v("Submit Answer")]):e._e(),e.answerSubmitted&&e.displayQuestion<e.test.length-1?s("button",{attrs:{id:"next-button"},on:{click:e.getNextQuestion}},[e._v("Next Question")]):e._e(),e.answerSubmitted&&e.displayQuestion===e.test.length-1?s("button",{attrs:{id:"finish-button"},on:{click:e.testFinished}},[e._v("Finish Test")]):e._e()])],1),e.answerSubmitted?s("question-result",{attrs:{showEncourage:e.displayQuestion<e.test.length-1,questionObject:e.test[e.displayQuestion],candidateAnswer:e.answer},on:{returnResultStatus:function(t){return e.resultStatusReturned(t)}}}):e._e()],1):e._e()])}),0)],1):e._e()])},m=[],f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"question-wrapper"},[e._v(e._s(e.question))])},w=[],v={props:["question"]},b=v,_=(s("33a8"),Object(l["a"])(b,f,w,!1,null,null,null)),y=_.exports,g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"options-wrapper"},[s("ul",e._l(e.options,function(t){return s("li",{key:t},["multiple-radio"===e.type?s("span",[s("label",{staticClass:"label-wrapper radio-label"},[e._v(e._s(t)+"\n          "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{type:"radio",name:e.groupBy},domProps:{value:t,checked:e._q(e.picked,t)},on:{change:[function(s){e.picked=t},e.isRadioAnswered]}}),s("span",{staticClass:"checkmark"})])]):"multiple-checkbox"===e.type?s("span",[s("label",{staticClass:"label-wrapper checkbox-label"},[e._v(e._s(t)+"\n          "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.checked)?e._i(e.checked,t)>-1:e.checked},on:{change:[function(s){var n=e.checked,a=s.target,i=!!a.checked;if(Array.isArray(n)){var r=t,o=e._i(n,r);a.checked?o<0&&(e.checked=n.concat([r])):o>-1&&(e.checked=n.slice(0,o).concat(n.slice(o+1)))}else e.checked=i},e.isCheckboxAnswered]}}),s("span",{staticClass:"checkmark"})])]):e._e()])}),0)])},x=[],k={props:["type","options","groupBy"],data(){return{picked:"",checked:[]}},methods:{isRadioAnswered(){this.$emit("answered",!!this.picked),this.$emit("answer",this.picked)},isCheckboxAnswered(){this.$emit("answered",this.checked.length>0),this.$emit("answer",this.checked)}}},C=k,O=(s("e043"),Object(l["a"])(C,g,x,!1,null,null,null)),q=O.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-option-wrapper"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.textBox,expression:"textBox"}],attrs:{placeholder:"Please type your answer here. Limit of 1500 characters applies."},domProps:{value:e.textBox},on:{input:[function(t){t.target.composing||(e.textBox=t.target.value)},e.isTextAdded]}}),s("div",{staticClass:"notify",class:e.remainingChar<=0?"deny-char":""},[e._v(e._s(e.notification))])])},T=[],E={data(){return{limit:1500,textBox:""}},computed:{remainingChar(){return this.limit-this.textBox.length},notification(){return"Characters Limit: "+this.remainingChar+"/"+this.limit}},methods:{isTextAdded(){this.check(),this.$emit("answered",!!this.textBox),this.$emit("answer",this.textBox)},check(){this.textBox=this.textBox.substr(0,this.limit)}}},A=E,N=(s("bec5"),Object(l["a"])(A,S,T,!1,null,null,null)),R=N.exports,j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"question-result-wrapper"},[e.showOverall?s("div",{staticClass:"result"},[s("div",{staticClass:"pass",class:e.showResult?"showResult":"hideResult"},[e._v("You answered correctly. Good job!")]),s("div",{staticClass:"fail",class:e.showResult?"hideResult":"showResult"},[e._v("\n        That was the wrong answer."),s("br"),e.showEncourage?s("span",[e._v("\n          Let's do better in the next question!\n        ")]):e._e()])]):e._e()])},B=[],P={props:["showEncourage","questionObject","candidateAnswer"],data(){return{showResult:!1,showOverall:!1}},mounted(){this.checkResults()},methods:{checkResults(){let e=this.questionObject.type,t=this.candidateAnswer,s=this.questionObject.answers,n={question:this.questionObject.question,candidateAnswer:t},a=0,i="";switch(e){case"multiple-radio":this.showOverall=!0,t===s&&(this.showResult=!0,a++),n.preDefinedAnswer=s,i="fixed";break;case"multiple-checkbox":this.showOverall=!0,this.isArrayEqual(t,s)&&(this.showResult=!0,a++),n.preDefinedAnswer=s,i="fixed";break;case"text":i="open-end";break;default:console.log("No result check for question type: "+e)}this.$emit("returnResultStatus",{record:n,point:a,pushToType:i})},isArrayEqual(e,t){if(e.length===t.length){let s=e.sort().join(","),n=t.sort().join(",");if(s===n)return!0}return!1}}},$=P,Q=(s("6d35"),Object(l["a"])($,j,B,!1,null,null,null)),I=Q.exports,M={props:["show","test"],data(){return{displayQuestion:0,answer:"",openEndedAnswers:[],fixedAnswers:[],answered:!1,answerSubmitted:!1,correct:0}},components:{Question:y,MultipleChoiceOptions:q,TextOptions:R,QuestionResult:I},methods:{answerIsSubmitted(){this.answerSubmitted=!0},resultStatusReturned(e){this.correct+=e.point,"fixed"===e.pushToType?this.fixedAnswers.push(e.record):this.openEndedAnswers.push(e.record)},getNextQuestion(){this.answered=!1,this.answer="",this.answerSubmitted=!1,this.displayQuestion++},testFinished(){this.$emit("testEnded",{testRecord:this.fixedAnswers,testScore:this.correct,testOpenEnded:this.openEndedAnswers})}}},D=M,F=(s("82e3"),Object(l["a"])(D,h,m,!1,null,null,null)),H=F.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.show?n("div",{staticClass:"results-wrapper"},[n("div",{staticClass:"complete-test"},[e._v("\n      Congrats "+e._s(e.name)+","),n("br"),e._v(" you have completed the test.\n    ")]),n("div",{staticClass:"result-summary"},[e._v("\n      You have answered "+e._s(this.results.testScore)+" correctly out of "+e._s(this.results.testRecord.length)+" questions.\n    ")]),e.goodScore?n("div",{staticClass:"good-score"},[n("span",[e._v("Good Job!")]),n("img",{attrs:{src:s("4405"),alt:"smile-emoticon"}})]):e._e(),e.goodScore?e._e():n("div",{staticClass:"bad-score"},[n("span",[e._v("Better Luck Next Time!")]),n("img",{attrs:{src:s("16a2"),alt:"bye-emoticon"}})])]):e._e()])},W=[],G={props:["show","name","results"],data(){return{goodScore:!1}},updated(){let e=this.results.testRecord.length/2;this.results.testScore>=e?this.goodScore=!0:this.goodScore=!1}},J=G,Y=(s("df14"),Object(l["a"])(J,L,W,!1,null,null,null)),z=Y.exports,K=s("d6b2"),U={name:"app",components:{CandidateInfo:p,Test:H,EndTest:z},data(){return{showIntro:!0,startTest:!1,testEnded:!1,candidateName:"",testInfo:[],results:{testRecord:[],testScore:0,testOpenEnded:[]}}},created(){this.testInfo=K.questions},methods:{startTestClicked(e){this.showIntro=!1,this.startTest=!0,this.candidateName=e},endTestClicked(e){this.startTest=!1,this.testEnded=!0,this.results.testRecord=e.testRecord,this.results.testScore=e.testScore,this.results.testOpenEnded=e.testOpenEnded}}},V=U,X=(s("5c0b"),Object(l["a"])(V,a,i,!1,null,null,null)),Z=X.exports;n["a"].config.productionTip=!1,new n["a"]({render:e=>e(Z)}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var n=s("5e27"),a=s.n(n);a.a},"5e27":function(e,t,s){},"6d35":function(e,t,s){"use strict";var n=s("ab9f"),a=s.n(n);a.a},"82e3":function(e,t,s){"use strict";var n=s("029f"),a=s.n(n);a.a},"9cb9":function(e,t,s){"use strict";var n=s("16ea"),a=s.n(n);a.a},a508:function(e,t,s){},ab9f:function(e,t,s){},bec5:function(e,t,s){"use strict";var n=s("a508"),a=s.n(n);a.a},d6b2:function(e){e.exports={questions:[{question:"5 + 6 = ?",type:"multiple-radio",groupBy:"addition",options:["13","11","56","98"],answers:"11"},{question:"Select the animals which are mammals? There could be more than 1 correct answer. ",type:"multiple-checkbox",groupBy:"mammals",options:["Elephant","Platypus","Octopus","Orca","None of the above"],answers:["Elephant","Orca","Platypus"]},{question:"What is the difference between front-end and back-end?",type:"text"},{question:"The car ____ moving.",type:"multiple-radio",groupBy:"grammer",options:["shall","is","are","going to"],answers:"is"},{question:"Why is there something rather than nothing?",type:"text"},{question:"What is 1 + 1?",type:"multiple-checkbox",groupBy:"binaryAddition",options:["2","101","02","10","None of the above"],answers:["02","2","10"]},{question:"Harry Potter and the Deathly _____________",type:"multiple-radio",groupBy:"harryPotter",options:["Hallows","Prisoner of Azkaban","Goblet of Fire"],answers:"Hallows"}]}},df14:function(e,t,s){"use strict";var n=s("3582"),a=s.n(n);a.a},e043:function(e,t,s){"use strict";var n=s("071c"),a=s.n(n);a.a},f6d3:function(e,t,s){}});
//# sourceMappingURL=app.1cadaf5d.js.map