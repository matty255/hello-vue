(function(){"use strict";var t={5146:function(t,e,l){var a=l(144),s=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-app",[l("v-app-bar",{staticClass:"darken-2",attrs:{app:"",color:"yellow",dark:""}},[l("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}})],1),l("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[l("v-list-item",[l("v-list-item-content",[l("v-list-item-title",{staticClass:"text-h6"},[t._v(" Vue.js 배워보자! ")]),l("v-list-item-subtitle",{staticClass:"pt-3"},[t._v(" 할수 있다! ")])],1)],1),l("v-divider"),l("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return l("v-list-item",{key:e.title,attrs:{link:"",to:e.to}},[l("v-list-item-icon",[l("v-icon",[t._v(t._s(e.icon))])],1),l("v-list-item-content",[l("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),l("v-main",[l("v-container",[l("router-view")],1)],1)],1)},o=[],i={name:"App",data(){return{drawer:!0,items:[{title:"Home",icon:"mdi-view-dashboard",to:"/hello-vue"},{title:"로그인",icon:"mdi-view-dashboard",to:"/sign-in"},{title:"회원가입",icon:"mdi-help-box",to:"/sign-up"},{title:"Grid-system",icon:"mdi-image",to:"/grid-system"}],right:null}}},r=i,n=l(1001),c=l(3453),v=l.n(c),d=l(7524),u=l(426),m=l(5206),p=l(247),f=l(1418),w=l(6428),h=l(6816),_=l(7620),b=l(8103),y=l(459),x=l(7877),g=l(4216),C=(0,n.Z)(r,s,o,!1,null,null,null),Z=C.exports;v()(C,{VApp:d.Z,VAppBar:u.Z,VAppBarNavIcon:m.Z,VContainer:p.Z,VDivider:f.Z,VIcon:w.Z,VList:h.Z,VListItem:_.Z,VListItemContent:b.km,VListItemIcon:y.Z,VListItemSubtitle:b.oZ,VListItemTitle:b.V9,VMain:x.Z,VNavigationDrawer:g.Z});var V=l(1910);a.Z.use(V.Z);var k=new V.Z({}),P=l(8345),E=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-container",{attrs:{fluid:""}},[l("v-row",{staticClass:"text-center"},[l("v-col",{attrs:{cols:"3",sm:"2",md:"3"}}),l("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[l("v-card",{staticClass:"pt-10",attrs:{elevation:"11"}},[l("h2",{staticClass:"orange--text text-uppercase mb-3"},[t._v(" "+t._s(t.title)+" ")]),l("v-divider",{staticClass:"mt-2 darken-4 pa-1 mx-3",attrs:{color:"orange"}}),l("v-form",{ref:"form",staticClass:"mt-10 mb-6 pr-8 pl-8 pb-8 pt-4",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.onLogin.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[l("v-text-field",{attrs:{"append-icon":"mdi-mailbox",outlined:"",color:"yellow","error-count":"2",rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),l("v-text-field",{attrs:{color:"yellow",rules:t.passwordRules,"append-icon":t.show1?"mdi-eye":"mdi-eye-off",type:t.show1?"text":"password",label:"Password",outlined:"",required:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),l("v-btn",{staticClass:"mr-4 text",attrs:{"x-large":"",type:"submit",block:"",disabled:!t.valid,color:"yellow darken-4"},on:{click:t.validate}},[l("span",{staticClass:"white--text"},[t._v("Login")]),l("v-icon",{attrs:{light:"",color:"yellow"}},[t._v(" mdi-account-circle ")])],1)],1)],1)],1),l("v-col",{attrs:{cols:"3",sm:"2",md:"3"}})],1)],1)},I=[],O={data:()=>({title:"로그인 컴포넌트 만들기",valid:!0,show1:!1,email:"",emailRules:[t=>!!t||"ID를 입력해주세요",t=>/.+@.+\..+/.test(t)||"ID는 메일 형태로 해주세요"],password:"",passwordRules:[t=>!!t||"Password를 입력해주세요",t=>t&&t.length>=8||"Password는 8자 이상이어야 합니다"]}),methods:{validate(){this.refs.form.validate()},onLogin(){""===this.email||""===this.password?alert("빈칸을 채워주세요"):alert("로그인 되었습니다.")}}},D=O,R=l(680),$=l(3237),S=l(2102),j=l(6232),L=l(2877),T=l(1347),F=(0,n.Z)(D,E,I,!1,null,"57cf2e60",null),M=F.exports;v()(F,{VBtn:R.Z,VCard:$.Z,VCol:S.Z,VContainer:p.Z,VDivider:f.Z,VForm:j.Z,VIcon:w.Z,VRow:L.Z,VTextField:T.Z});var q=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-container",{attrs:{fluid:""}},[l("v-row",[l("v-col",[l("v-card",{staticClass:"pa-4 yellow"},[t._v(" col ")])],1)],1),l("v-row",[l("v-col",[l("v-card",{staticClass:"pa-4 yellow"},[t._v(" col ")])],1),l("v-col",[l("v-card",{staticClass:"pa-4 yellow"},[t._v(" col ")])],1),l("v-col",[l("v-card",{staticClass:"pa-4 yellow"},[t._v(" col ")])],1)],1),l("v-row",[l("v-col",[l("v-card",{staticClass:"pa-4 yellow"},[t._v(" col ")])],1),l("v-col",[l("v-card",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pa-4 yellow"},[t._v(" col ")])],1),l("v-col",[l("v-card",{staticClass:"pa-4 yellow"},[t._v(" col ")])],1),l("v-col",[l("v-card",{staticClass:"pa-4 yellow"},[t._v(" col ")])],1)],1),l("v-row",[l("v-col",[l("v-card",{staticClass:"pa-4 yellow mt-3",attrs:{height:"300"}},[t._v(" col ")])],1),l("v-col",t._l(3,(function(e){return l("v-card",{key:e,staticClass:"pa-4 yellow my-3",class:3===e&&"ml-auto pa-4 yellow my-3"},[t._v(" Flex item ")])})),1)],1),l("v-row",{staticClass:"d-flex flex-column justify-space-around"},[l("v-col",[l("v-card",{staticClass:"pa-4 yellow align-end",attrs:{width:"100"}},[t._v(" col ")])],1)],1)],1)},A=[],B={},z=B,N=(0,n.Z)(z,q,A,!1,null,null,null),G=N.exports;v()(N,{VCard:$.Z,VCol:S.Z,VContainer:p.Z,VRow:L.Z});var H=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-container",{attrs:{fluid:""}},[l("v-row",{staticClass:"text-center"},[l("v-col",{attrs:{cols:"3",sm:"2",md:"3"}}),l("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[l("v-card",{staticClass:"pt-10",attrs:{elevation:"11"}},[l("h2",{staticClass:"orange--text text-uppercase mb-3"},[t._v(" "+t._s(t.title)+" ")]),l("v-divider",{staticClass:"mt-2 darken-4 pa-1 mx-3",attrs:{color:"orange"}}),l("v-form",{ref:"form",staticClass:"mt-10 mb-6 pr-8 pl-8 pb-8 pt-4",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.onSignup.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[l("v-text-field",{attrs:{color:"yellow",outlined:"","append-icon":"mdi-mailbox","error-count":"2",rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),l("v-text-field",{attrs:{color:"yellow",rules:t.passwordRules,"append-icon":t.show1?"mdi-eye":"mdi-eye-off",outlined:"",type:t.show1?"text":"password",label:"Password","error-count":"4",required:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),l("v-text-field",{attrs:{"error-count":"2",rules:t.confirmPasswordRules,"append-icon":t.show2?"mdi-eye":"mdi-eye-off",type:t.show2?"text":"password",color:"yellow",outlined:"",label:"Confirm Password",required:""},on:{"click:append":function(e){t.show2=!t.show2}},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}}),l("v-btn",{staticClass:"mr-4",attrs:{shaped:"",block:"","x-large":"",type:"submit",disabled:!t.valid,color:"yellow darken-4"},on:{click:t.validate}},[l("span",{staticClass:"white--text"},[t._v("Sign up")]),l("v-icon",{attrs:{light:"",color:"yellow"}},[t._v(" mdi-account-circle ")])],1)],1)],1)],1),l("v-col",{attrs:{cols:"3",sm:"2",md:"3"}})],1)],1)},U=[],X={data(){return{title:"회원가입하기",valid:!0,show1:!1,show2:!1,email:"",emailRules:[t=>!!t||"ID를 입력해주세요",t=>/.+@.+\..+/.test(t)||"ID는 메일 형태로 해주세요"],password:"",passwordRules:[t=>!!t||"Password를 입력해주세요",t=>t&&t.length>=8||"Password는 8자 이상이어야 합니다",t=>/(?=.*[a-z])/.test(t)&&/(?=.*\d)/.test(t)||"영문과 숫자를 혼합해주세요",t=>/([!@$%<>*''])/.test(t)||"다음과 같은 특수문자를 포함해주세요 [!@#$%]"],confirmPassword:"",confirmPasswordRules:[t=>!!t||"Password를 다시 한번 입력해주세요",t=>t===this.password||"Password가 일치하지 않습니다"]}},methods:{validate(){this.refs.form.validate()},onSignup(){""===this.email||""===this.password||""===this.confirmPassword?alert("빈칸을 채워주세요"):this.password!==this.confirmPassword?alert("비밀번호를 확인해주세요."):alert("회원가입에 성공하셨습니다. 로그인해주세요")}}},J=X,K=(0,n.Z)(J,H,U,!1,null,"5f8be384",null),Q=K.exports;v()(K,{VBtn:R.Z,VCard:$.Z,VCol:S.Z,VContainer:p.Z,VDivider:f.Z,VForm:j.Z,VIcon:w.Z,VRow:L.Z,VTextField:T.Z});var W=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"mx-auto",attrs:{align:"center"}},[l("v-list-item-title",{staticClass:"text-h3 mt-5"},[t._v(" Vue 문법 중요한거 5가지 외우기! ")]),l("p",{staticClass:"text-h4 font-weight-bold mb-3 pt-10",attrs:{align:"left"}},[t._v(" 1. template 문법 ")]),t._m(0),l("p",{staticClass:"text-h4 font-weight-bold mb-3 pt-10",attrs:{align:"left"}},[t._v(" 2. computed 문법 ")]),t._m(1),l("p",{staticClass:"text-h4 font-weight-bold mb-3 pt-10",attrs:{align:"left"}},[t._v(" 3. watch 문법 ")]),t._m(2),l("p",{staticClass:"text-h4 font-weight-bold mb-3 pt-10",attrs:{align:"left"}},[t._v(" 4. vue의 lifecycle ")]),t._m(3),l("p",{staticClass:"text-h4 font-weight-bold mb-3 pt-10",attrs:{align:"left"}},[t._v(" 5. vueX ")]),t._m(4)],1)])},Y=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"text-h6",attrs:{align:"left"}},[l("li",[t._v("v-html은 문자열 형태의 html을 브라우저가 html로 처리하게끔 해줍니다. v-text는 단순 문자열로 나옵니다.")]),l("li",[t._v("v-bind로 html의 속성값도 바인딩할 수 있습니다. 약어로 :로도 사용할 수 있으며 무척 자주 사용합니다.")]),l("li",[t._v("v-model을 사용하면 input으로부터 data에 값을 넣을 수 있습니다. input에는 select같은 것도 포함되니 잘 알아둡시다.")]),l("li",[t._v("v-show와 v-if를 사용하면 조건부렌더링을 할 수 있습니다.")]),l("li",[t._v("v-on은 이벤트핸들러입니다. 약어는 @으로 가장 자주 쓰이는 문법 중 하나입니다. key를 이벤트에 할당하는 방식이 리액트보다 쉽습니다.")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"text-h6",attrs:{align:"left"}},[l("li",[t._v("반환 값이 data 속성이고, 반환값이 똑같다면 로직을 수행하지 않고 결과 값을 반환함으로서 렌더링을 최적화할 수 있습니다.")]),l("li",[t._v("computed의 get과 set을 사용하면 데이터를 가져오거나 넣어줄때 지정한 로직을 수행할 수 있게 해줍니다.")]),l("li",[t._v("데이터에 연산이 포함된다면 되도록 computed에 넣어줍시다.")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"text-h6",attrs:{align:"left"}},[l("li",[t._v("관리하는 data 속성의 변수가 변경이 되면 watch 함수가 실행되게 할 수 있습니다. useEffect같은 역할입니다.")]),l("li",[t._v("인자값에 현재값, 과거값을 넣어서 비교하는 것도 가능합니다.")]),l("li",[t._v("computed와 사용할 때를 헷갈리곤 하는데 computed는 반복되는 연산을 줄이기 위해서 사용하는 것이고 watch는 연산의 실행을 트리거로 할 수 있는 문법입니다. watch를 쓸때는 useEffect를 쓸때와 마찬가지로 무한루프가 일어나지 않게 조심합니다.")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"text-h6",attrs:{align:"left"}},[l("li",[t._v("beforeCreate() - 제일 처음 실행되는 메소드")]),l("li",[t._v("created() - 생성 후 데이터 관련 작업이 실행되는 시점입니다")]),l("li",[t._v("beforeMount() - template html이 돔에 추가되기 직전 호출되는 메소드입니다.")]),l("li",[t._v("mounted() - DOM에 html이 올라온 직후 호출합니다.")]),l("li",[t._v("update(), beforeUpdate() - 데이터의 변화로 인해 재렌더링이 발생할 때만 호출됩니다. 두개의 메소드로 시점을 조절할 수 있습니다.")]),l("li",[t._v("destroyed(), beforeDestroyed() - 각각 제거된 후, 제거되기 전 호출되는 메소드입니다.")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"text-h6",attrs:{align:"left"}},[l("li",[t._v("vue의 상태관리 라이브러리입니다.")]),l("li",[t._v("리덕스와 달리 스토어를 여러개 둘 수 있습니다.")]),l("li",[t._v("state = state")]),l("li",[t._v("getters = computed")]),l("li",[t._v("mutations = state를 동기적으로 수정하고 싶을때")]),l("li",[t._v(" actions = state를 비동기적으로 수정하고 싶을때, 여러 mutation을 연달아 실행하고 싶을 때 ")])])}],tt={},et=tt,lt=(0,n.Z)(et,W,Y,!1,null,null,null),at=lt.exports;v()(lt,{VListItemTitle:b.V9}),a.Z.use(P.Z);const st=[{path:"/hello-vue",name:"HomeComponent",component:at},{path:"/sign-in",name:"Dashboard",component:M},{path:"/grid-system",name:"GridSystem",component:G},{path:"/sign-up",name:"SignUp",component:Q}],ot=new P.Z({mode:"history",routes:st});var it=ot;a.Z.config.productionTip=!1,new a.Z({vuetify:k,router:it,render:t=>t(Z)}).$mount("#app")}},e={};function l(a){var s=e[a];if(void 0!==s)return s.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,l),o.exports}l.m=t,function(){var t=[];l.O=function(e,a,s,o){if(!a){var i=1/0;for(v=0;v<t.length;v++){a=t[v][0],s=t[v][1],o=t[v][2];for(var r=!0,n=0;n<a.length;n++)(!1&o||i>=o)&&Object.keys(l.O).every((function(t){return l.O[t](a[n])}))?a.splice(n--,1):(r=!1,o<i&&(i=o));if(r){t.splice(v--,1);var c=s();void 0!==c&&(e=c)}}return e}o=o||0;for(var v=t.length;v>0&&t[v-1][2]>o;v--)t[v]=t[v-1];t[v]=[a,s,o]}}(),function(){l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,{a:e}),e}}(),function(){l.d=function(t,e){for(var a in e)l.o(e,a)&&!l.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};l.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,o,i=a[0],r=a[1],n=a[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(s in r)l.o(r,s)&&(l.m[s]=r[s]);if(n)var v=n(l)}for(e&&e(a);c<i.length;c++)o=i[c],l.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return l.O(v)},a=self["webpackChunkhello_vue"]=self["webpackChunkhello_vue"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=l.O(void 0,[998],(function(){return l(5146)}));a=l.O(a)})();
//# sourceMappingURL=app.8a0df97d.js.map