(function(){"use strict";var t={2410:function(t,e,n){var a=n(6369),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"layout",attrs:{id:"app"}},[e("CHeader"),e("main",{staticClass:"main layout__main"},[e("router-view")],1),e("footer",{staticClass:"footer layout__footer"})],1)},o=[],i=n(3822),s=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header layout__header"},[e("div",{staticClass:"header__container container"},[e("router-link",{staticClass:"header__logo-link",attrs:{to:"/"}},[e("img",{staticClass:"header__logo",attrs:{src:n(2835),alt:"logo"}})]),e("nav",{staticClass:"header__nav nav"},[e("router-link",{staticClass:"nav__link button",attrs:{to:{path:"/",hash:"#users-section"}}},[t._v("Users")]),e("router-link",{staticClass:"nav__link button button--offset1",attrs:{to:{path:"/",hash:"#sign-up-section"}}},[t._v(" Sign up ")])],1)],1)])},u=[],l={name:"CHeader"},c=l,p=n(1001),f=(0,p.Z)(c,s,u,!1,null,null,null),d=f.exports,h={name:"App",components:{CHeader:d},methods:{...(0,i.nv)(["fetchToken"])},mounted(){this.fetchToken()}},m=h,g=(0,p.Z)(m,r,o,!1,null,null,null),v=g.exports,_=n(2631);const b="/abz.agency-test-task/";a.ZP.use(_.ZP);const C=[{path:`${b}`,name:"home",component:()=>n.e(129).then(n.bind(n,5129))},{path:`${b}about`,name:"about",component:()=>n.e(119).then(n.bind(n,9119))}],y=new _.ZP({mode:"history",routes:C,scrollBehavior(t,e,n){return t.hash?{selector:t.hash,behavior:"smooth"}:n||{x:0,y:0}}});var k=y,w={namespaced:!0,state:{usersInfo:{users:[],total_pages:0}},getters:{getUsers:({usersInfo:t})=>t.users?.sort(((t,e)=>t?.registration_timestamp+e?.registration_timestamp)),getUsersTotalPages:t=>t.usersInfo.total_pages},mutations:{SET_USERS_INFO(t,{usersInfo:e,pageCount:n}){const{users:a=[],total_pages:r}=e||{};t.usersInfo.users=1===n?[...a]:[...t.usersInfo.users,...a],t.usersInfo.total_pages=r}},actions:{async fetchUsersAction({commit:t},e=1){const n=await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${e}&count=6`),a=await n.json();t("SET_USERS_INFO",{usersInfo:a,pageCount:e})},async sendFormData({commit:t,rootGetters:e},n){const a=new FormData;for(const i in n)a.append(i,n[i]);const{getToken:r}=e,o={method:"POST",body:a,headers:{Token:r}};return await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users",o).then((t=>t.json()))}}};a.ZP.use(i.ZP);var P=new i.ZP.Store({state:{token:""},getters:{getToken:t=>t.token},mutations:{SET_TOKEN(t,e){t.token=e}},actions:{async fetchToken({commit:t}){const e=await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token"),n=await e.json();t("SET_TOKEN",n.token)}},modules:{users:w}}),O=n(1191),Z=a.ZP.use(O.ZP,{directive:"tippy",flipDuration:0,placement:"bottom",popperOptions:{modifiers:{preventOverflow:{enabled:!1}}}}),T=n(5708);a.ZP.component("ValidationProvider",T.d_),(0,T.l7)("name",{validate:t=>/^[а-яА-ЯёЁіІїЇєЄa-zA-Z ]{2,60}$/.test(t),message:"Only 2-60 characters"}),(0,T.l7)("email",{validate:t=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t),message:"Email not valid"}),(0,T.l7)("phone",{validate:t=>/^\+380\d{9}$/.test(t),message:"Phone not valid"}),(0,T.l7)("ext",{validate:t=>{if(!t)return!1;const e=["jpeg","jpg"];return e.includes(t.type.split("/")[1])},message:"The photo format must be jpeg/jpg type"}),(0,T.l7)("size",{validate:t=>{if(!t)return!1;const e=1e-6,n=5,a=t.size*e;return n>a},message:"The photo size must not be greater than 5 Mb"}),(0,T.l7)("dimensions",{validate:t=>{if(!t)return!1;const e=70,n=70;return new Promise((a=>{const r=new Image;let o,i;r.src=URL.createObjectURL(t),r.onload=()=>{({width:o,height:i}=r),a({valid:o>=n&&i>=e})}}))},message:"Minimum size of photo 70px x 70px"});var x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ui-input",class:{"ui-input--error":!!t.errors?.length}},[e("input",{staticClass:"ui-input__input",attrs:{id:t.idFromLabel,type:"text"},domProps:{value:t.value},on:{input:t.onInput,focus:function(e){return t.isInputInFocus(!0)},blur:function(e){return t.isInputInFocus(!1)}}}),e("label",{staticClass:"ui-input__label",class:{"ui-input__label--active":t.isLabelActive},attrs:{for:t.idFromLabel}},[t._v(" "+t._s(t.label)+" ")]),e("div",{staticClass:"ui-input__text"},[t.errors.length?e("span",{domProps:{textContent:t._s(t.errors[0])}}):e("span",{domProps:{textContent:t._s(t.helperText)}})])])},F=[],I={name:"UiInput",data(){return{inputOnFocus:!1}},props:{label:{type:String,required:!0},value:{type:String,default:""},helperText:{type:String,default:""},errors:{type:Array,default:[]}},computed:{isLabelActive(){return!!this.value.length||this.inputOnFocus},idFromLabel(){return this.label.replaceAll(" ","_").toLowerCase()}},methods:{isInputInFocus(t=!1){this.inputOnFocus=t},onInput(t){this.$emit("input",t.target.value)}}},D=I,j=(0,p.Z)(D,x,F,!1,null,"19b5a322",null),S=j.exports,z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ui-radio"},t._l(t.data,(function(n){return e("div",{staticClass:"ui-radio__item"},[e("input",{staticClass:"ui-radio__input",attrs:{id:t.idFromLabel(n.name),type:"radio",name:t.name},domProps:{value:n.id,checked:1===n.id},on:{change:t.onChange}}),e("label",{staticClass:"ui-radio__label",attrs:{for:t.idFromLabel(n.name)}},[t._v(" "+t._s(n.name)+" ")])])})),0)},U=[],A={name:"UiRadio",data(){return{inputOnFocus:!1}},props:{name:{type:String,required:!0},data:{type:Array,default:""}},computed:{},methods:{idFromLabel(t){return t.replaceAll(" ","_").toLowerCase()},onChange(t){this.$emit("change",t.target.value)}}},L=A,E=(0,p.Z)(L,z,U,!1,null,"44dea90e",null),$=E.exports,N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ui-file",class:{"ui-file--error":!!t.errors?.length}},[e("input",{ref:"fileInput",staticClass:"ui-file__input",attrs:{type:"file"},on:{change:t.onFileInputChange}}),e("div",{staticClass:"ui-file__drop-zone",class:{"ui-file__drop-zone--active":t.isDragging},on:{dragover:function(e){return e.preventDefault(),t.onDragOver.apply(null,arguments)},dragleave:t.onDragLeave,drop:t.onFileDrop,click:t.onDropZoneClick}},[e("span",{staticClass:"ui-file__button"},[t._v(" Upload ")]),e("div",{staticClass:"ui-file__field"},[t.file?e("span",{staticClass:"ui-file__file-name"},[t._v(t._s(t.file.name))]):e("span",[t._v("Upload your photo")])])]),e("div",{staticClass:"ui-file__text"},[t.errors.length?e("span",{domProps:{textContent:t._s(t.errors[0])}}):t._e()])])},M=[],R={name:"UiFile",data(){return{file:null,isDragging:!1}},props:{errors:{type:Array,default:[]}},methods:{onDropZoneClick(){this.$refs.fileInput.click()},onFileInputChange(t){const e=t.target.files[0];this.file=e,this.$emit("file-uploaded",e)},onFileDrop(t){t.preventDefault();const e=t.dataTransfer.files[0];this.file=e,this.isDragging=!1,this.$emit("file-uploaded",e)},onDragOver(t){t.preventDefault(),this.isDragging=!0},onDragLeave(t){this.isDragging=!1}}},B=R,q=(0,p.Z)(B,N,M,!1,null,null,null),H=q.exports,K=function(){var t=this,e=t._self._c;return e("svg",{staticClass:"preloader",attrs:{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M24 2.4C24 1.07452 25.0772 -0.0124356 26.3961 0.119892C30.2962 0.511212 34.0543 1.85353 37.3337 4.04473C41.2805 6.68189 44.3566 10.4302 46.1731 14.8156C47.9896 19.201 48.4649 24.0266 47.5388 28.6822C46.6128 33.3377 44.327 37.6141 40.9706 40.9706C37.6141 44.327 33.3377 46.6128 28.6822 47.5388C24.0266 48.4649 19.201 47.9896 14.8156 46.1731C10.4302 44.3566 6.68188 41.2805 4.04473 37.3337C1.85353 34.0543 0.511211 30.2963 0.119892 26.3961C-0.0124351 25.0772 1.07452 24 2.4 24C3.72548 24 4.78454 25.0787 4.9498 26.3938C5.32038 29.343 6.37231 32.1774 8.03578 34.6669C10.1455 37.8244 13.1441 40.2853 16.6525 41.7385C20.1608 43.1917 24.0213 43.5719 27.7457 42.8311C31.4702 42.0902 34.8913 40.2616 37.5765 37.5765C40.2616 34.8913 42.0902 31.4702 42.8311 27.7457C43.5719 24.0213 43.1917 20.1608 41.7385 16.6525C40.2853 13.1441 37.8244 10.1455 34.667 8.03578C32.1774 6.37231 29.343 5.32039 26.3938 4.9498C25.0787 4.78454 24 3.72548 24 2.4Z",fill:"#00BDD3"}})])},G=[],V={name:"UiPreloader"},J=V,Q=(0,p.Z)(J,K,G,!1,null,null,null),W=Q.exports;a.ZP.component("UiInput",S),a.ZP.component("UiRadio",$),a.ZP.component("UiFile",H),a.ZP.component("UiPreloader",W),a.ZP.config.productionTip=!1,new a.ZP({router:k,store:P,tippy:Z,render:t=>t(v)}).$mount("#app")},2835:function(t,e,n){t.exports=n.p+"img/logo.0902afb7.svg"}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,o){if(!a){var i=1/0;for(c=0;c<t.length;c++){a=t[c][0],r=t[c][1],o=t[c][2];for(var s=!0,u=0;u<a.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[u])}))?a.splice(u--,1):(s=!1,o<i&&(i=o));if(s){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[a,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{119:"f7679a43",129:"c87f86dd"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="abz.agency-test-task:";n.l=function(a,r,o,i){if(t[a])t[a].push(r);else{var s,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var p=l[c];if(p.getAttribute("src")==a||p.getAttribute("data-webpack")==e+o){s=p;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+o),s.src=a),t[a]=[r];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(d);var r=t[a];if(delete t[a],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/abz.agency-test-task/"}(),function(){var t={143:0};n.f.j=function(e,a){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=t[e]=[n,a]}));a.push(r[2]=o);var i=n.p+n.u(e),s=new Error,u=function(a){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,r[1](s)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,o,i=a[0],s=a[1],u=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var c=u(n)}for(e&&e(a);l<i.length;l++)o=i[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},a=self["webpackChunkabz_agency_test_task"]=self["webpackChunkabz_agency_test_task"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2410)}));a=n.O(a)})();
//# sourceMappingURL=app.c117c366.js.map