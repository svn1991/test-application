(function(e){function t(t){for(var n,a,o=t[0],c=t[1],d=t[2],l=0,p=[];l<o.length;l++)a=o[l],r[a]&&p.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,d||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=s[0]))}return e}var n={},r={app:0},i=[];function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=n,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/<test-application>/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0c1a":function(e,t,s){},"284c":function(e,t,s){},"3bf0":function(e,t,s){"use strict";var n=s("a25d"),r=s.n(n);r.a},"541c":function(e,t,s){"use strict";var n=s("284c"),r=s.n(n);r.a},"56d7":function(e,t,s){"use strict";s.r(t);var n=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("candidate-info",{attrs:{show:e.showIntro},on:{startTest:function(t){return e.startTestClicked(t)}}}),s("test",{attrs:{test:e.testInfo,show:e.startTest},on:{testEnded:function(t){return e.endTestClicked(t)}}}),s("results",{attrs:{show:e.testEnded,name:e.candidateName,results:e.results}})],1)},i=[],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"fade"}},[e.show?s("div",{staticClass:"candidate-wrapper"},[s("div",{staticClass:"candidate-info-wrapper"},[s("div",{staticClass:"candidate-name"},[e._v("\n        Name: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.candidateName,expression:"candidateName"}],attrs:{type:"text",value:""},domProps:{value:e.candidateName},on:{input:function(t){t.target.composing||(e.candidateName=t.target.value)}}})])]),s("button",{attrs:{id:"start-button"},on:{click:e.startTest}},[e._v("Start")])]):e._e()])},o=[],c={props:["show"],data(){return{candidateName:""}},updated(){},methods:{startTest(){this.$emit("startTest",this.candidateName)}}},d=c,u=(s("9ab6"),s("2877")),l=Object(u["a"])(d,a,o,!1,null,null,null),p=l.exports,h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"fade"}},[e.show?s("div",{staticClass:"test-wrapper"},[s("transition-group",{attrs:{name:"fade"}},e._l(e.test,function(t,n){return s("div",{key:n+"_"+n,attrs:{indexNumber:n}},[e.displayQuestion===n?s("div",{staticClass:"question"},[s("question",{attrs:{question:t.question}}),s("div",{staticClass:"answer-wrapper",class:e.answerSubmitted?"no-change":""},["multiple-radio"===t.type||"multiple-checkbox"===t.type?s("div",[s("multiple-choice-options",{attrs:{options:t.options,type:t.type,groupBy:t.groupBy},on:{answered:function(t){e.answered=t},answer:function(t){e.answer=t}}}),s("transition",{attrs:{name:"fade",mode:"out-in"}},[e.answerSubmitted?s("div",{staticClass:"result"},[e.showResult?s("div",{staticClass:"pass"},[e._v("You answered correctly. Good job!")]):e._e(),e.showResult?e._e():s("div",{staticClass:"fail"},[e._v("\n                      That was the wrong answer."),s("br"),e._v("\n                      Let's do better in the next question!")])]):e._e()])],1):"text"===t.type?s("div",[s("text-options",{on:{answered:function(t){e.answered=t},answer:function(t){e.answer=t}}})],1):e._e()]),s("div",{staticClass:"next-button-wrapper"},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[e.answered?e._e():s("span",{attrs:{id:"answer-prompt"}},[e._v("Please answer the question.")]),e.answered&&!e.answerSubmitted?s("button",{attrs:{id:"submit-answer"},on:{click:e.answerIsSubmitted}},[e._v("Submit Answer")]):e._e(),e.answerSubmitted&&e.displayQuestion<e.test.length-1?s("button",{attrs:{id:"next-button"},on:{click:e.getNextQuestion}},[e._v("Next Question")]):e._e(),e.answerSubmitted&&e.displayQuestion===e.test.length-1?s("button",{attrs:{id:"finish-button"},on:{click:e.testFinished}},[e._v("Finish Test")]):e._e()])],1)],1):e._e()])}),0)],1):e._e()])},m=[],f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"question-wrapper"},[e._v(e._s(e.question))])},w=[],v={props:["question"]},b=v,_=Object(u["a"])(b,f,w,!1,null,null,null),y=_.exports,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"options-wrapper"},[s("ul",e._l(e.options,function(t){return s("li",{key:t},["multiple-radio"===e.type?s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{type:"radio",name:e.groupBy},domProps:{value:t,checked:e._q(e.picked,t)},on:{change:[function(s){e.picked=t},e.isRadioAnswered]}}),e._v(" "+e._s(t)+"\n      ")]):"multiple-checkbox"===e.type?s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.checked)?e._i(e.checked,t)>-1:e.checked},on:{change:[function(s){var n=e.checked,r=s.target,i=!!r.checked;if(Array.isArray(n)){var a=t,o=e._i(n,a);r.checked?o<0&&(e.checked=n.concat([a])):o>-1&&(e.checked=n.slice(0,o).concat(n.slice(o+1)))}else e.checked=i},e.isCheckboxAnswered]}}),e._v(" "+e._s(t)+"\n      ")]):e._e()])}),0)])},g=[],k={props:["type","options","groupBy"],data(){return{picked:"",checked:[]}},methods:{isRadioAnswered(){this.$emit("answered",!!this.picked),this.$emit("answer",this.picked)},isCheckboxAnswered(){this.$emit("answered",this.checked.length>0),this.$emit("answer",this.checked)}}},S=k,q=(s("541c"),Object(u["a"])(S,x,g,!1,null,null,null)),A=q.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-option-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.textBox,expression:"textBox"}],attrs:{type:"text",value:""},domProps:{value:e.textBox},on:{input:[function(t){t.target.composing||(e.textBox=t.target.value)},e.isTextAdded]}})])},T=[],O={data(){return{textBox:""}},methods:{isTextAdded(){this.$emit("answered",!!this.textBox),this.$emit("answer",this.textBox)}}},E=O,N=Object(u["a"])(E,C,T,!1,null,null,null),j=N.exports,B={props:["show","test"],data(){return{displayQuestion:0,answer:"",openEndedAnswers:[],fixedAnswers:[],answered:!1,answerSubmitted:!1,correct:0,showResult:!1}},components:{Question:y,MultipleChoiceOptions:A,TextOptions:j},methods:{answerIsSubmitted(){this.checkResults(),this.answerSubmitted=!0},checkResults(){let e=this.test[this.displayQuestion],t=e.type,s=this.answer,n=e.answers,r={question:e.question,candidateAnswer:s};switch(t){case"multiple-radio":s===n&&(this.showResult=!0,this.correct++),r.preDefinedAnswer=n,this.fixedAnswers.push(r);break;case"multiple-checkbox":this.isArrayEqual(s,n)&&(this.showResult=!0,this.correct++),r.preDefinedAnswer=n,this.fixedAnswers.push(r);break;case"text":this.openEndedAnswers.push(r);break;default:console.log("No result check for question type: "+t)}},isArrayEqual(e,t){if(e.length===t.length){let s=e.sort().join(","),n=t.sort().join(",");if(s===n)return!0}return!1},getNextQuestion(){this.answered=!1,this.answer="",this.answerSubmitted=!1,this.showResult=!1,this.displayQuestion++},testFinished(){this.$emit("testEnded",{testRecord:this.fixedAnswers,testScore:this.correct,testOpenEnded:this.openEndedAnswers})}}},R=B,$=(s("3bf0"),Object(u["a"])(R,h,m,!1,null,null,null)),P=$.exports,Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"fade"}},[e.show?s("div",{staticClass:"results-wrapper"},[e._v("\n    Congrats "+e._s(e.name)+", you have completed the test."),s("br"),e._v("\n    You have answered "+e._s(this.results.testScore)+" correctly out of "+e._s(this.results.testRecord.length)+" questions."),s("br"),e.goodScore?s("div",{staticClass:"good-score"},[e._v("Good Job!")]):e._e(),e.goodScore?e._e():s("div",{staticClass:"bad-score"},[e._v("Better Luck Next Time!")])]):e._e()])},I=[],M={props:["show","name","results"],data(){return{goodScore:!1}},updated(){let e=this.results.testRecord.length/2;this.results.testScore>=e?this.goodScore=!0:this.goodScore=!1}},F=M,D=(s("67b8"),Object(u["a"])(F,Q,I,!1,null,null,null)),G=D.exports,H=s("d6b2"),J={name:"app",components:{CandidateInfo:p,Test:P,Results:G},data(){return{showIntro:!0,startTest:!1,testEnded:!1,candidateName:"",testInfo:[],results:{testRecord:[],testScore:0,testOpenEnded:[]}}},created(){this.testInfo=H.questions},methods:{startTestClicked(e){this.showIntro=!1,this.startTest=!0,this.candidateName=e},endTestClicked(e){this.startTest=!1,this.testEnded=!0,this.results.testRecord=e.testRecord,this.results.testScore=e.testScore,this.results.testOpenEnded=e.testOpenEnded}}},W=J,L=(s("5c0b"),Object(u["a"])(W,r,i,!1,null,null,null)),Y=L.exports;n["a"].config.productionTip=!1,new n["a"]({render:e=>e(Y)}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var n=s("5e27"),r=s.n(n);r.a},"5e27":function(e,t,s){},"67b8":function(e,t,s){"use strict";var n=s("0c1a"),r=s.n(n);r.a},"9ab6":function(e,t,s){"use strict";var n=s("d4da"),r=s.n(n);r.a},a25d:function(e,t,s){},d4da:function(e,t,s){},d6b2:function(e){e.exports={questions:[{question:"5 + 6 = ",type:"multiple-radio",groupBy:"addition",options:["13","11","56","98"],answers:"11"},{question:"Select the animals which are mammals? There could be more than 1 correct answer. ",type:"multiple-checkbox",groupBy:"mammals",options:["elephant","platypus","octopus","orca","none of the above"],answers:["elephant","orca","platypus"]},{question:"What is the difference between front-end and back-end?",type:"text"},{question:"The car ____ moving.",type:"multiple-radio",groupBy:"grammer",options:["shall","is","are","going to"],answers:"is"},{question:"Why is there something rather than nothing?",type:"text"},{question:"What is 1 + 1?",type:"multiple-checkbox",groupBy:"binaryAddition",options:["2","101","02","10","None of the above"],answers:["02","2","10"]},{question:"Harry Potter and the Deathly _____________",type:"multiple-radio",groupBy:"harryPotter",options:["Hallows","Prisoner of Azkaban","Goblet of Fire"],answers:"Hallows"}]}}});
//# sourceMappingURL=app.310cf883.js.map