webpackJsonp([0],{"/L1V":function(t,e,a){"use strict";var n=a("YYVX"),r=a.n(n),i=a("EqD3"),s=a.n(i),o=a("lqKz"),c=a.n(o),l=a("+9Dj"),u=(a.n(l),a("A9xe")),d=a("StR0"),p=a("wKgo"),g=a("mtWM"),f=a.n(g);e.a={data:function(){return{isRecognize:!1,buttonText:"Start Recognition",languages:[{icon:"🇰🇷",text:"Korean",code:"ko",talk:"ko-KR"},{icon:"🇺🇸",text:"English",code:"en",talk:"en-US"},{icon:"🇯🇵",text:"Japanese",code:"ja",talk:"ja-JP"},{icon:"🇨🇳",text:"Chinese",code:"zh",talk:"zh-CN"}],transcript:"",transcripts:{},speech:{},apiKey:"AIzaSyCCioj-_r71RMpBewDvS6Vq6Z4bkYu82LQ",apiURL:"https://translation.googleapis.com/language/translate/v2?"}},methods:{initSpeechRecognition:function(){var t=c()(r.a.mark(function t(){var e,a=this;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition,t.next=3,navigator.mediaDevices.getUserMedia({video:!1,audio:!0});case 3:e=new SpeechRecognition,this.$store.commit("setRecognition",e),e.interimResults=!0,e.lang="ko-KR",e.addEventListener("result",function(t){var e,n=[].concat(s()(t.results)).map(function(t){return t[0].transcript}).join("");if(a.transcript=n,t.results[0].isFinal){var i={text:n,language:a.$store.state.source.code,created:Date.now()};p.a.ref("/events/abc/speech").push(i),a.transcript="",a.languages.forEach((e=c()(r.a.mark(function t(e){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get(a.apiURL+"q="+i.text+"&target="+e.code+"&key="+a.apiKey);case 2:n=t.sent.data.data.translations[0].translatedText,p.a.ref("/events/abc/translated/"+e.code).push({text:n});case 4:case"end":return t.stop()}},t,a)})),function(t){return e.apply(this,arguments)}))}}),e.addEventListener("end",e.start);case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),startRecognition:function(){this.isRecognize=!this.isRecognize,this.isRecognize?(this.$store.state.recognition.stop(),this.buttonText="Start Recognition"):(this.$store.state.recognition.start(),this.buttonText="Stop Recognition")}},firebase:function(){return{speech:p.a.ref("/events/"+this.$route.hash.replace("#","")+"/speech")}},created:function(){this.initSpeechRecognition()},computed:{target:function(){return this.$bindAsArray("transcripts",p.a.ref("/events/"+this.$route.hash.replace("#","")+"/translated/"+this.$store.state.target.code),null,function(){console.log("ready!")}),this.$store.state.target}},fetch:function(t){var e=t.redirect,a=Object(l.detect)();a&&"chrome"!==a.name&&e("/unsupported")},components:{Toolbar:u.a,TextList:d.a}}},"07SK":function(t,e,a){t.exports={default:a("JVTR"),__esModule:!0}},"0kig":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".card div.btn__content{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start}",""])},"5HY6":function(t,e,a){"use strict";var n=a("flxn"),r=a("S1Pu"),i=!1;var s=function(t){i||(a("V8dc"),a("Rusi"))},o=a("VU/8")(n.a,r.a,!1,s,"data-v-2ebd4d1e",null);o.options.__file="components/LangDialog.vue",e.a=o.exports},A9xe:function(t,e,a){"use strict";var n=a("BHbX"),r=a("TA0r"),i=!1;var s=function(t){i||a("cam9")},o=a("VU/8")(n.a,r.a,!1,s,"data-v-61212e70",null);o.options.__file="components/Toolbar.vue",e.a=o.exports},BHbX:function(t,e,a){"use strict";e.a={props:["rightIcon"],methods:{isRightIconExist:function(){return!this.rightIcon}}}},BPIj:function(t,e,a){"use strict";var n=a("5HY6");e.a={props:["langs","scripts","status","transcript"],components:{LangDialog:n.a},methods:{getScript:function(t){return t.text.replace("&#39;","'")},scriptScroll:function(t){document.querySelectorAll(".scripts")[0].scrollTop=t.target.scrollTop,document.querySelectorAll(".scripts")[1].scrollTop=t.target.scrollTop}},computed:{reversedScript:function(){return this.scripts.slice().reverse()}}}},EqD3:function(t,e,a){"use strict";e.__esModule=!0;var n,r=a("07SK"),i=(n=r)&&n.__esModule?n:{default:n};e.default=function(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return(0,i.default)(t)}},Evih:function(t,e,a){"use strict";var n=a("CUXq"),r=a("q4Qt");t.exports=function(t,e,a){e in t?n.f(t,e,r(0,a)):t[e]=a}},F7MN:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"contain"},[a("Toolbar"),a("v-layout",{staticClass:"status"},[a("v-btn",{attrs:{round:"",color:"cyan"},on:{click:t.startRecognition}},[t._v(t._s(t.buttonText))])],1),a("v-layout",{staticClass:"display-box"},[a("span",{staticStyle:{display:"none"}},[t._v(t._s(t.target))]),a("text-list",{attrs:{transcript:t.transcript,scripts:t.speech,langs:t.languages,status:"source"}}),a("text-list",{attrs:{scripts:t.transcripts,langs:t.languages,status:"target"}}),a("div",{staticClass:"triangle"})],1)],1)};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},JVTR:function(t,e,a){a("c78P"),a("xSMG"),t.exports=a("8eAJ").Array.from},PzyB:function(t,e,a){var n=a("YD+y");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("78c569c2",n,!1,{sourceMap:!1})},QBxO:function(t,e,a){var n=a("XaaU");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("6a8ce931",n,!1,{sourceMap:!1})},Rusi:function(t,e,a){var n=a("XU4g");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("6b34f3c6",n,!1,{sourceMap:!1})},S1Pu:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-btn",{staticClass:"lang--btn",attrs:{slot:"activator",flat:"",color:"primary",dark:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}},slot:"activator"},[a("v-icon",{attrs:{medium:""}},[t._v("\n      "+t._s(t.getCurrentLanguage.icon)+"\n    ")]),a("span",[t._v("\n      "+t._s(t.getCurrentLanguage.text)+"\n    ")])],1),a("v-dialog",{attrs:{scrollable:"",width:"200"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("v-icon",[t._v("\n          language\n        ")]),t._v("\n          Select Language\n      ")],1),a("v-divider"),a("v-card-text",t._l(t.langs,function(e){return a("v-btn",{key:e.text,attrs:{flat:""},on:{click:function(a){t.changeLanguage(e)}}},[a("v-icon",[t._v("\n            "+t._s(e.icon)+"\n          ")]),a("span",[t._v("\n            "+t._s(e.text)+"\n          ")])],1)}))],1)],1)],1)};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},StR0:function(t,e,a){"use strict";var n=a("BPIj"),r=a("WyuY"),i=!1;var s=function(t){i||a("PzyB")},o=a("VU/8")(n.a,r.a,!1,s,"data-v-2bd6b374",null);o.options.__file="components/TextList.vue",e.a=o.exports},TA0r:function(t,e,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-toolbar",{attrs:{flat:"",height:"54"}},[e("v-btn",{attrs:{icon:"",disabled:""}}),e("v-layout",[e("img",{staticClass:"logo",attrs:{src:"/logo.png"}})]),e("v-btn",{attrs:{icon:"",disabled:this.isRightIconExist()}},[e("v-icon",{attrs:{dark:""}},[this._v(this._s(this.rightIcon))])],1)],1)};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},V8dc:function(t,e,a){var n=a("0kig");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("f3ed710e",n,!1,{sourceMap:!1})},WyuY:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"outter-box"},[a("v-layout",{staticClass:"inner-box"},[a("lang-dialog",{attrs:{langs:t.langs,status:t.status}}),a("v-layout",{staticClass:"scripts",on:{scroll:t.scriptScroll}},[a("v-layout",{staticClass:"script"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.transcript,expression:"transcript"}]},[t._v(t._s(t.transcript))]),t._l(t.reversedScript,function(e){return a("span",{key:e[".key"]},[t._v("\n          "+t._s(t.getScript(e))+"\n        ")])})],2)],1)],1)],1)};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},XU4g:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".lang--btn[data-v-2ebd4d1e]{background:#6272a4!important;margin:0;width:100%;border-radius:0;border-top-left-radius:10px;border-top-right-radius:10px}.lang--btn .icon[data-v-2ebd4d1e]{padding-bottom:2px}.lang--btn span[data-v-2ebd4d1e]{font-size:19.2px;font-size:1.2rem;margin-left:10px}.card[data-v-2ebd4d1e]{background:#282a36}.card hr[data-v-2ebd4d1e]{background:grey}.card .card__text[data-v-2ebd4d1e]{display:grid;padding:0;height:180px}.card .card__text .btn[data-v-2ebd4d1e]{display:grid;height:45px;padding:0;margin:0;text-transform:none}.card .card__text .btn .btn__content[data-v-2ebd4d1e]{background:#f8f8f2}.card .card__text .btn .btn__content span[data-v-2ebd4d1e]{margin-left:10px}",""])},XaaU:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".contain[data-v-5b878f26]{display:grid;background:#282a36;width:100%;height:100%;grid-template-rows:54px 54px 1fr}.contain .status[data-v-5b878f26]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.contain .display-box[data-v-5b878f26]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:100%}",""])},"YD+y":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".outter-box[data-v-2bd6b374]{width:100%;padding:20px;padding-top:0}.outter-box .inner-box[data-v-2bd6b374]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:#44475a;border-radius:10px;-ms-flex-line-pack:start;align-content:start}.outter-box .inner-box .scripts[data-v-2bd6b374]{position:relative;height:100%;overflow:auto;scroll:invi}.outter-box .inner-box .scripts .script[data-v-2bd6b374]{position:absolute;padding:8px;display:grid;-ms-flex-line-pack:start;align-content:start;grid-gap:8px;font-size:24px;font-size:1.5rem}",""])},cam9:function(t,e,a){var n=a("fm3H");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("a329de7e",n,!1,{sourceMap:!1})},flxn:function(t,e,a){"use strict";e.a={data:function(){return{dialog:!1}},props:["langs","status"],computed:{getCurrentLanguage:function(){return this.$store.state[this.status]}},methods:{changeLanguage:function(t){this.dialog=!1,this.$store.commit("setLanguage",{status:this.status,lang:t}),"source"===this.status&&this.$store.commit("setRecognitionLang",t.talk)}}}},fm3H:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".toolbar .layout[data-v-61212e70]{display:grid}.toolbar .layout .logo[data-v-61212e70]{height:38px;justify-self:center;-ms-flex-item-align:center;align-self:center}",""])},g11p:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("/L1V"),r=a("F7MN"),i=!1;var s=function(t){i||a("QBxO")},o=a("VU/8")(n.a,r.a,!1,s,"data-v-5b878f26",null);o.options.__file="pages/admin.vue",e.default=o.exports},xSMG:function(t,e,a){"use strict";var n=a("/NkW"),r=a("9/SQ"),i=a("dFh5"),s=a("B8H1"),o=a("UqWz"),c=a("dnK3"),l=a("Evih"),u=a("Ipaa");r(r.S+r.F*!a("EHZF")(function(t){Array.from(t)}),"Array",{from:function(t){var e,a,r,d,p=i(t),g="function"==typeof this?this:Array,f=arguments.length,v=f>1?arguments[1]:void 0,h=void 0!==v,x=0,b=u(p);if(h&&(v=n(v,f>2?arguments[2]:void 0,2)),void 0==b||g==Array&&o(b))for(a=new g(e=c(p.length));e>x;x++)l(a,x,h?v(p[x],x):p[x]);else for(d=b.call(p),a=new g;!(r=d.next()).done;x++)l(a,x,h?s(d,v,[r.value,x],!0):r.value);return a.length=x,a}})}});