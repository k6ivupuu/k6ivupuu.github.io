(function(){var e={6858:function(e,t,n){"use strict";var s=n(5130),i=n(6768);const o={id:"app"};function a(e,t,n,s,a,r){const l=(0,i.g2)("MainHeader"),c=(0,i.g2)("router-view"),u=(0,i.g2)("MainFooter");return(0,i.uX)(),(0,i.CE)("div",o,[(0,i.bF)(l),(0,i.bF)(c),(0,i.bF)(u)])}var r=n(4232);const l={class:"nav-container"};function c(e,t,n,s,o,a){const c=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("header",null,[(0,i.Lk)("nav",l,[(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/"},{default:(0,i.k6)((()=>t[1]||(t[1]=[(0,i.eW)("Home")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/addPost"},{default:(0,i.k6)((()=>t[2]||(t[2]=[(0,i.eW)("Add Post")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/signup"},{default:(0,i.k6)((()=>t[3]||(t[3]=[(0,i.eW)("Signup")]))),_:1})])]),(0,i.Lk)("div",{class:"login-container",onClick:t[0]||(t[0]=(...e)=>a.handleLoginClick&&a.handleLoginClick(...e))},[t[5]||(t[5]=(0,i.Lk)("i",{class:"bi-person-circle"},null,-1)),(0,i.Lk)("div",{class:(0,r.C4)(["dropdown-menu",{show:o.isDropdownVisible}])},[(0,i.Lk)("p",null,(0,r.v_)(o.user.name),1),(0,i.Lk)("p",null,(0,r.v_)(o.user.email),1),(0,i.bF)(c,{to:"/login"},{default:(0,i.k6)((()=>t[4]||(t[4]=[(0,i.eW)("Logout")]))),_:1})],2)])])])}var u={name:"MainHeader",data(){return{isDropdownVisible:!1,user:{name:"John Doe",email:"john.doe@ut.ee"}}},mounted(){document.addEventListener("click",this.handleOutsideClick)},beforeUnmount(){document.removeEventListener("click",this.handleOutsideClick)},methods:{handleLoginClick(e){e.target.closest(".bi-person-circle")&&(this.isDropdownVisible=!this.isDropdownVisible)},handleOutsideClick(e){e.target.closest(".login-container")||(this.isDropdownVisible=!1)}}},d=n(1241);const p=(0,d.A)(u,[["render",c],["__scopeId","data-v-1cdb00d6"]]);var g=p;const m={class:"footer"},f={class:"footer-content"},h={class:"footer-section"},v={class:"copyright"};function k(e,t,n,s,o,a){const l=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("footer",m,[(0,i.Lk)("div",f,[t[3]||(t[3]=(0,i.Lk)("div",{class:"footer-section"},[(0,i.Lk)("h3",null,"About Us"),(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,"Phone: +123-456-7890"),(0,i.Lk)("li",null,"Email: support@postit.com"),(0,i.Lk)("li",null,"Address: Narva mnt 18, Tartu")])],-1)),(0,i.Lk)("div",h,[t[2]||(t[2]=(0,i.Lk)("h3",null,"Quick Links",-1)),(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[(0,i.bF)(l,{to:"/"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Home")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(l,{to:"/addPost"},{default:(0,i.k6)((()=>t[1]||(t[1]=[(0,i.eW)("Add Post")]))),_:1})])])])]),(0,i.Lk)("div",v,[(0,i.Lk)("p",null,"© "+(0,r.v_)(a.currentYear)+" PostIt. All rights reserved.",1)])])}var b={name:"MainFooter",computed:{currentYear(){return(new Date).getFullYear()}}};const L=(0,d.A)(b,[["render",k],["__scopeId","data-v-85edfbc6"]]);var _=L,y={name:"App",components:{MainFooter:_,MainHeader:g}};const w=(0,d.A)(y,[["render",a]]);var C=w,P=n(1387);const M={class:"home-page"},x={class:"content"},A={class:"flex-container"};function E(e,t,n,s,o,a){const r=(0,i.g2)("post-feed");return(0,i.uX)(),(0,i.CE)("div",M,[(0,i.Lk)("div",x,[(0,i.Lk)("div",A,[t[1]||(t[1]=(0,i.Lk)("div",{class:"column"},null,-1)),(0,i.bF)(r),t[2]||(t[2]=(0,i.Lk)("div",{class:"column"},null,-1))])]),(0,i.Lk)("div",null,[(0,i.Lk)("button",{class:"reset-button",onClick:t[0]||(t[0]=(...e)=>s.likeKiller&&s.likeKiller(...e))}," Reset likes ")])])}const F={class:"postfeed"};function O(e,t,n,s,o,a){const r=(0,i.g2)("post-item");return(0,i.uX)(),(0,i.CE)("div",F,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.posts,(e=>((0,i.uX)(),(0,i.Wv)(r,{key:e.id,post:e},null,8,["post"])))),128))])}var j=n(782);const I={class:"postItem"},D={class:"post-header"},H=["src","alt"];function S(e,t,s,o,a,l){return(0,i.uX)(),(0,i.CE)("div",I,[(0,i.Lk)("div",D,[t[1]||(t[1]=(0,i.Lk)("span",{style:{"font-size":"24px"}},"👤",-1)),(0,i.Lk)("span",null,(0,r.v_)(s.post.date),1)]),(0,i.Lk)("h1",null,(0,r.v_)(s.post.title),1),s.post?.image?((0,i.uX)(),(0,i.CE)("img",{key:0,class:"post-image",src:n(3811)("./"+s.post.image.name),alt:s.post.image.name},null,8,H)):(0,i.Q3)("",!0),(0,i.Lk)("p",null,(0,r.v_)(s.post.content),1),(0,i.Lk)("div",null,[(0,i.Lk)("button",{class:"like-button",onClick:t[0]||(t[0]=(...e)=>o.likeHandler&&o.likeHandler(...e))}," 👍 "+(0,r.v_)(o.getLikes)+" Likes ",1)])])}var T={name:"PostItem",props:{post:{type:Object,require:!0,default:()=>({})}},setup(e){const t=(0,j.Pj)(),n=(0,i.EW)((()=>t.state.likes[e.post.id]||0)),s=()=>{t.commit("likeCounter",e.post.id)};return{getLikes:n,likeHandler:s}}};const W=(0,d.A)(T,[["render",S],["__scopeId","data-v-70cd2509"]]);var X=W,U={name:"PostFeed",components:{PostItem:X},setup(){const e=(0,j.Pj)(),t=(0,i.EW)((()=>e.state.posts));return{posts:t}}};const N=(0,d.A)(U,[["render",O],["__scopeId","data-v-5f65ba6c"]]);var z=N,V={name:"HomePage",components:{PostFeed:z},setup(){const e=(0,j.Pj)();(0,i.sV)((()=>{e.dispatch("loadPosts")}));const t=()=>{e.commit("likesResetter")};return{store:e,likeKiller:t}},methods:{handleClick(){console.log("Button Click")}}};const B=(0,d.A)(V,[["render",E],["__scopeId","data-v-4ce47a51"]]);var q=B;const J={class:"signup-page"},K={class:"content"},Y={class:"flex-container"},Q={class:"signup-box"},R={key:0,class:"error-message"};function $(e,t,n,o,a,l){return(0,i.uX)(),(0,i.CE)("div",J,[(0,i.Lk)("div",K,[(0,i.Lk)("div",Y,[t[6]||(t[6]=(0,i.Lk)("div",{class:"column"},null,-1)),(0,i.Lk)("div",Q,[t[4]||(t[4]=(0,i.Lk)("h2",null,"Welcome to PostIt!",-1)),t[5]||(t[5]=(0,i.Lk)("p",null,"Please enter your email and create a password to sign up.",-1)),(0,i.Lk)("form",{onSubmit:t[3]||(t[3]=(0,s.D$)(((...e)=>l.handleSignup&&l.handleSignup(...e)),["prevent"]))},[(0,i.bo)((0,i.Lk)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=e=>a.email=e),class:"input-field",placeholder:"Email",required:""},null,512),[[s.Jo,a.email]]),(0,i.bo)((0,i.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>a.password=e),class:"input-field",placeholder:"Password",required:""},null,512),[[s.Jo,a.password]]),a.errorMessage?((0,i.uX)(),(0,i.CE)("p",R,(0,r.v_)(a.errorMessage),1)):(0,i.Q3)("",!0),(0,i.Lk)("button",{type:"submit",id:"signup-button",class:(0,r.C4)({clicked:e.signupButtonClicked}),onClick:t[2]||(t[2]=(...e)=>l.handleSignup&&l.handleSignup(...e))},"Sign Up",2)],32)]),t[7]||(t[7]=(0,i.Lk)("div",{class:"column"},null,-1))])])])}n(4114);var G={name:"SignUp",components:{},data(){return{email:"",password:"",errorMessage:""}},methods:{handleSignup(){this.errorMessage="";const e=this.validatePassword(this.password);e.length>0?this.errorMessage=`The password is not valid for these given reasons:  ${e.join(", ")}`:alert("Signup Successful!")},validatePassword(e){const t=[];return(e.length<8||e.length>15)&&t.push("Must be 8-15 characters long"),/[A-Z]/.test(e)||t.push("Must include at least one uppercase letter"),/[a-z].*[a-z]/.test(e)||t.push("Must include at least two lowercase letters"),/\d/.test(e)||t.push("Must include at least one numeric value"),/_/.test(e)||t.push("Must include the character '_'"),/^[A-Z]/.test(e)||t.push("Must start with an uppercase letter"),t}}};const Z=(0,d.A)(G,[["render",$],["__scopeId","data-v-12f3b88d"]]);var ee=Z;function te(e,t,n,s,o,a){return(0,i.uX)(),(0,i.CE)("div",null,t[0]||(t[0]=[(0,i.Lk)("h1",null,"Adding a post functionality on this page",-1),(0,i.Lk)("div",{class:"content"},[(0,i.Lk)("p",null,"This is content placeholder")],-1)]))}var ne={name:"AddPost",components:{},data(){return{message:"Hello World!"}},methods:{}};const se=(0,d.A)(ne,[["render",te],["__scopeId","data-v-b66c41ec"]]);var ie=se;const oe=[{path:"/",name:"Home",component:q},{path:"/signup",name:"Sign Up",component:ee},{path:"/addPost",name:"Add Post",component:ie}],ae=(0,P.aE)({history:(0,P.LA)(),routes:oe});var re=ae,le=JSON.parse('{"A":[{"id":1,"reference":"tartu-2024","date":"2024-10-06","title":"Tartu 2024","content":"A great picture of Tartu town square.","image":{"name":"tartu.jpg","src":"../images/tartu.jpg"}},{"id":2,"reference":"post-atomic-habits","date":"2024-09-15","title":"Building Better Habits with \\"Atomic Habits\\"","content":"James Clear\'s \\"Atomic Habits\\" offers a proven framework for improving every day. Learn how small changes can lead to remarkable results in your personal and professional life.","image":{"name":"atomic_habits.png","src":"/src/assets/images/atomic_habits.png"}},{"id":3,"reference":"post-infinity-beyond","date":"2024-09-10","title":"Space Exploration Insights from \\"To Infinity and Beyond\\"","content":"Buzz Aldrin\'s \\"To Infinity and Beyond\\" provides a fascinating look at the future of space exploration. Discover the potential of Mars colonization and the challenges we face in becoming a multi-planetary species.","image":{"name":"space_exploration_timeline.png","src":"/src/assets/images/space_exploration_timeline.png"}},{"id":4,"reference":"post-digital-minimalism","date":"2024-09-05","title":"Embracing \\"Digital Minimalism\\" in a Hyperconnected World","content":"Cal Newport\'s \\"Digital Minimalism\\" offers a philosophy of technology use in a noisy world. Learn strategies to reclaim your time and attention from the constant buzz of digital life.","image":{"name":"digital_detox_guide.png","src":"/src/assets/images/digital_detox_guide.png"}},{"id":5,"reference":"post-21-lessons","date":"2024-08-28","title":"Navigating the Future with \\"21 Lessons for the 21st Century\\"","content":"Yuval Noah Harari\'s \\"21 Lessons for the 21st Century\\" provides crucial insights into our rapidly evolving world. Explore how technological disruption, political upheaval, and climate change will shape our future.","image":null},{"id":6,"reference":"post-starry-messenger","date":"2024-08-20","title":"Cosmic Perspectives on Civilization: Insights from \\"Starry Messenger\\"","content":"Neil deGrasse Tyson\'s \\"Starry Messenger\\" offers a unique view on earthly conflicts through the lens of cosmic perspective. Discover how looking at the stars can change our view of life on Earth.","image":{"name":"cosmic_perspective.png","src":"/src/assets/images/cosmic_perspective.png"}},{"id":7,"reference":"post-jellyfish","date":"2024-08-15","title":"Unraveling Mysteries with \\"Gopler aeldes baglaens\\"","content":"This intriguing book (title translates to \\"Jellyfishes age backwards\\") explores fascinating biological phenomena. Learn about the unique lifecycle of jellyfish and what it might teach us about aging.","image":null},{"id":8,"reference":"post-meeting-cookbook","date":"2024-08-08","title":"Mastering Meetings with \\"Koosolekute kokaraamat\\"","content":"\\"Koosolekute kokaraamat\\" (Meeting Cookbook) provides practical tips for running effective meetings. Discover how to make your meetings more productive, engaging, and time-efficient.","image":{"name":"effective_meeting_checklist.png","src":"/src/assets/images/effective_meeting_checklist.png"}},{"id":9,"reference":"post-psychology-money","date":"2024-09-19","title":"Learning about spenditure with \\"Psychology of Money \\"","content":"This provides some fancy thoughts about how we are manipulated by ourselves to do unwise decision.","image":null},{"id":10,"reference":"post-nudge","date":"2024-09-23","title":"Positive Nudges with \\"Nudge\\"","content":"Discussing patriarchic democracy to positively influence the decisions of individuals and populations.","image":null}]}'),ce=(0,j.y$)({state:{posts:[],likes:{}},mutations:{setPosts(e,t){e.posts=t},likeCounter(e,t){e.likes[t]||(e.likes[t]=0),e.likes[t]++},likesResetter(e){e.likes={}}},actions:{loadPosts({commit:e}){e("setPosts",le.A)}},getters:{}});const ue=(0,s.Ef)(C);ue.use(re),ue.use(ce),ue.mount("#app")},3811:function(e,t,n){var s={"./atomic_habits.png":9976,"./cosmic_perspective.png":7830,"./digital_detox_guide.png":5841,"./effective_meeting_checklist.png":6999,"./space_exploration_timeline.png":3877,"./tartu.jpg":6455};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=o,e.exports=i,i.id=3811},9976:function(e,t,n){"use strict";e.exports=n.p+"img/atomic_habits.ee5386e5.png"},7830:function(e,t,n){"use strict";e.exports=n.p+"img/cosmic_perspective.6c2ce112.png"},5841:function(e,t,n){"use strict";e.exports=n.p+"img/digital_detox_guide.2c65337b.png"},6999:function(e,t,n){"use strict";e.exports=n.p+"img/effective_meeting_checklist.ddd4aae7.png"},3877:function(e,t,n){"use strict";e.exports=n.p+"img/space_exploration_timeline.6b22ad76.png"},6455:function(e,t,n){"use strict";e.exports=n.p+"img/tartu.032a22f7.jpg"}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,s,i,o){if(!s){var a=1/0;for(u=0;u<e.length;u++){s=e[u][0],i=e[u][1],o=e[u][2];for(var r=!0,l=0;l<s.length;l++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(r=!1,o<a&&(a=o));if(r){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[s,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/AUgroup/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,o,a=s[0],r=s[1],l=s[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(l)var u=l(n)}for(t&&t(s);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},s=self["webpackChunkk6ivupuu_wad"]=self["webpackChunkk6ivupuu_wad"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[504],(function(){return n(6858)}));s=n.O(s)})();
//# sourceMappingURL=app.05657b94.js.map