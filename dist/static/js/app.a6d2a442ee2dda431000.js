webpackJsonp([1],{"+AsU":function(t,e){},"+e8y":function(t,e){},"/35x":function(t,e){},"0nrk":function(t,e){},"17fl":function(t,e){},"5XV+":function(t,e){},"6APl":function(t,e){},"7JnT":function(t,e){},"8J+Y":function(t,e){},"9fl1":function(t,e){},FCPg:function(t,e){},FHf5:function(t,e){},"JA//":function(t,e){},Jtk3:function(t,e){},K8Ul:function(t,e){},LZHx:function(t,e){},MJmf:function(t,e){},Mlqx:function(t,e){},NATg:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{attrs:{id:"footer-com"}},[e("a",{attrs:{target:"_blank",href:"http://perm.hse.ru"}},[this._v("Сайт НИУ ВШЭ-Пермь")]),this._v(" "),e("a",{attrs:{target:"_blank",href:"http://perm.hse.ru/ba/se"}},[this._v("Программная инженерия в Перми")])])}]};var r=n("VU/8")({name:"FooterCom"},s,!1,function(t){n("v2eo")},"data-v-4a2323d6",null).exports;function i(t,e){return rt.post("/signin",{username:t,password:e}).then(function(e){return 200===e.status&&(localStorage.setItem("token","Bearer "+e.data.token),localStorage.setItem("username",t),!0)})}function o(){return null!==localStorage.getItem("username")&&null!==localStorage.getItem("token")}function l(){localStorage.removeItem("username"),localStorage.removeItem("token")}var u={name:"Navbar",data:function(){return{main:"",calculator:"",signin:"",signup:"",signout:"",userpage:"",agenda:"",isLoggedIn:o()}},created:function(){var t=[];for(var e in this.$router.options.routes)if(this.$router.options.routes.hasOwnProperty(e)){var n=this.$router.options.routes[e];n.hasOwnProperty("title")&&t.push(n)}this.signup=t[0],this.signin=t[1],this.userpage=t[2],this.calculator=t[3],this.agenda=t[4],this.signout=t[5],this.isLoggedIn=o()},watch:{$route:function(t){this.isLoggedIn=o(),t.name===this.signout.name&&(l(),this.$router.push("/signin"))}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-toggleable-sm navbar-light bg-success navbar-inverse"},[n("ul",{staticClass:"navbar-nav"},[t._m(0),t._v(" "),n("li",{staticClass:"nav-item"},[t.isLoggedIn?t._e():n("router-link",{staticClass:"nav-link",attrs:{to:t.signup,"active-class":"active"}},[t._v(t._s(t.signup.title))])],1),t._v(" "),n("li",{staticClass:"nav-item"},[t.isLoggedIn?n("router-link",{staticClass:"nav-link",attrs:{to:t.userpage,"active-class":"active"}},[t._v(t._s(t.userpage.title))]):t._e()],1),t._v(" "),n("li",{staticClass:"nav-item"},[t.isLoggedIn?t._e():n("router-link",{staticClass:"nav-link",attrs:{to:t.signin,"active-class":"active"}},[t._v(t._s(t.signin.title))])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:t.calculator,"active-class":"active"}},[t._v(t._s(t.calculator.title))])],1),t._v(" "),n("li",{staticClass:"nav-item"},[t.isLoggedIn?n("router-link",{staticClass:"nav-link",attrs:{to:t.agenda,"active-class":"active"}},[t._v(t._s(t.agenda.title))]):t._e()],1),t._v(" "),n("li",{staticClass:"nav-item"},[t.isLoggedIn?n("router-link",{staticClass:"nav-link",attrs:{to:t.signout}},[t._v(t._s(t.signout.title))]):t._e()],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("label",{staticClass:"nav-link active"},[this._v("Кредитный калькулятор")])])}]};var m={name:"App",components:{Navbar:n("VU/8")(u,c,!1,function(t){n("bz7L")},"data-v-74ff22f5",null).exports,FooterCom:r}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("navbar"),e("hr"),this._v(" "),e("router-view"),e("hr"),this._v(" "),e("footer-com")],1)},staticRenderFns:[]};var v=n("VU/8")(m,p,!1,function(t){n("nHtv")},null,null).exports,d=n("/ocq"),f=n("woOf"),h=n.n(f),g={name:"PaymentsTable",data:function(){return{options:{year:"numeric",month:"long",day:"numeric"},columnHeads:["Дата платежа","Сумма платежа","Остаток задолженности"]}},props:{payments:Array,page:Number,myPaymentPlan:Array,total:Number},methods:{countRest:function(t,e){for(var n=0,a=12*(e-1)+t+1,s=0;s<a;s++)n+=this.myPaymentPlan[s];return n}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group",attrs:{id:"payemnts-table"}},[n("table",{staticClass:"table table-bordered"},[n("thead",[n("tr",t._l(t.columnHeads,function(e){return n("th",{key:e},[t._v("\n        "+t._s(e)+"\n      ")])}))]),t._v(" "),t._l(t.payments,function(e,a){return n("tr",{key:e.paymentDate,staticClass:"form-control-static"},[n("td",[t._v(t._s(new Date(e.paymentDate).toLocaleDateString("ru",t.options)))]),t._v(" "),n("td",[n("vue-numeric",{attrs:{currency:"₽",separator:"space",value:e.paymentAmount,"read-only":!0,precision:2,"decimal-separator":"."}})],1),t._v(" "),t.myPaymentPlan?n("td",[n("vue-numeric",{attrs:{currency:"₽",separator:"space",value:t.total-t.countRest(a,t.page),"read-only":!0,precision:2,"decimal-separator":"."}})],1):t._e(),t._v(" "),t.myPaymentPlan?t._e():n("td",[n("vue-numeric",{attrs:{currency:"₽",separator:"space",value:t.total-e.paymentAmount*(a+1+12*(t.page-1)),"read-only":!0,precision:2,"decimal-separator":"."}})],1)])})],2)])},staticRenderFns:[]};var y=n("VU/8")(g,_,!1,function(t){n("XeOY")},"data-v-9bbe8e5e",null).exports,b={name:"Paginator",data:function(){return{offset:0}},props:{limit:Number,value:Object,length:Number},computed:{pages:function(){return Math.ceil(this.length/this.limit)},currentPage:function(){return this.value.offset/this.limit+1}},methods:{nextPage:function(){var t=this.value.offset+this.limit;t<this.length&&(this.value.offset=t),this.emitChange()},prevPage:function(){var t=this.value.offset-this.limit;t>=0&&(this.value.offset=t),this.emitChange()},emitChange:function(){this.$emit("input",{page:this.currentPage,limit:12,offset:this.value.offset})}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-outline-primary",attrs:{value:t.value.page},on:{click:t.prevPage}},[t._v("Назад")]),t._v(" "),n("label",[t._v(t._s(t.currentPage)+" из "+t._s(t.pages))]),t._v(" "),n("button",{staticClass:"btn btn-outline-primary",attrs:{value:t.value.page},on:{click:t.nextPage}},[t._v("Вперед")])])},staticRenderFns:[]};var P=n("VU/8")(b,C,!1,function(t){n("NS1R")},"data-v-6fcf77c1",null).exports,w=n("Zrlr"),x=n.n(w),k=function t(){x()(this,t),this.title="Новый кредит",this.paymentType=t.LoanTypes.Even,this.numberOfMonths=0,this.interestRate=0,this.totalPaymentAmount=0,this.paymentList=[],this.startDate=new Date(Date.now())};k.LoanTypes={Even:"Аннуитетный",Differentiated:"Дифференцированный"};var I=k,A=n("wxAW"),S=n.n(A),$=function t(e,n){x()(this,t),this.paymentDate=e,this.paymentAmount=n},D=function(){function t(){x()(this,t)}return S()(t,null,[{key:"calculate",value:function(t){return t.paymentType===I.LoanTypes.Even?this.calculateEqual(t):this.calculateDifferentiated(t)}},{key:"calculateEqual",value:function(t){var e=t.startDate,n=t.numberOfMonths,a=t.interestRate/12/100,s=a*Math.pow(1+a,n)/(Math.pow(1+a,n)-1),r=t.paymentAmount*s;t.totalPaymentAmount=r*t.numberOfMonths,t.paymentList=[];for(var i=0;i<t.numberOfMonths;i++){var o=e.setMonth(e.getMonth()+1);t.paymentList[i]=new $(o,r)}return t}},{key:"calculateDifferentiated",value:function(t){var e=t.startDate,n=t.paymentAmount/t.numberOfMonths;t.totalPaymentAmount=0,t.paymentList=[];for(var a=0;a<t.numberOfMonths;a++){var s=e.setMonth(e.getMonth()+1),r=n+(t.paymentAmount-n*a)*t.interestRate/100/12;t.paymentList[a]=new $(new Date(s),r),t.totalPaymentAmount+=r}return t}}]),t}(),q=n("IC97"),R=n("D52M"),T=function(){function t(e,n,a){x()(this,t),this.username=e,this.password=n,this.email=a,this.incomes=[],this.expenses=[],this.paymentPlans=[]}return S()(t,[{key:"fetch",value:function(){var t=this;return rt.get("/user/name/"+this.username,{headers:{Authorization:localStorage.getItem("token")}}).then(function(e){t.email=e.data.email,t.id=e.data.id,t.role=e.data.role,t.incomes=e.data.incomes,t.expenses=e.data.expenses,t.paymentPlans=e.data.paymentPlans}).catch(function(t){console.log(t)})}},{key:"save",value:function(){return rt.post("/signup",this,{headers:{Authorization:localStorage.getItem("token")}}).then(function(t){return t.status}).catch(function(t){console.log(t)})}},{key:"update",value:function(){return rt.post("/user/update",this,{headers:{Authorization:localStorage.getItem("token")}}).then(function(){})}}]),t}(),L={name:"calculator",components:{Datepicker:q.a,PaymentsTable:y,Paginator:P},data:function(){return{even:I.LoanTypes.Even,diff:I.LoanTypes.Differentiated,user:{},paymentPlan:new I,planToSave:null,startDate:Date.now(),datepickerLocale:R.a,datepickerInput:"form-control",errorsCust:{sum:[],month:[],rate:[]},pagination:{page:1,limit:12,offset:0},paymentDifference:0}},methods:{checkLogged:function(){return o()},calculation:function(){var t=this.paymentPlan.paymentAmount,e=this.paymentPlan.numberOfMonths,n=this.paymentPlan.interestRate;this.errorsCust.sum=[],this.errorsCust.month=[],this.errorsCust.rate=[],t&&e&&n?t<=0||t>999999999||e<=0||e>600||n<=0||n>2e3?(t<=0&&this.errorsCust.sum.push("Отрицательная или нулевая сумма кредита"),t>999999999&&this.errorsCust.sum.push("Слишком большое число суммы кредита"),e<=0&&this.errorsCust.month.push("Отрицательное или нулевое количество месяцев"),e>600&&this.errorsCust.month.push("Слишком большое число количества месяцев"),n<=0&&this.errorsCust.rate.push("Отрицательный или нулевой процент в год"),n>2e3&&this.errorsCust.rate.push("Слишком большое число процента в год")):(e+"").indexOf(".")>=0?this.errorsCust.month.push("Нецелое количество месяцев"):(this.paymentPlan.startDate=new Date(this.startDate),this.paymentPlan=D.calculate(this.paymentPlan),this.planToSave=h()(this.paymentPlan),this.pagination={page:1,limit:12,offset:0},this.paymentDifference=this.paymentPlan.totalPaymentAmount-this.paymentPlan.paymentAmount):(t||this.errorsCust.sum.push("Требуется указать сумму кредита"),e||this.errorsCust.month.push("Требуется указать количество месяцев"),n||this.errorsCust.rate.push("Требуется указать процент в год"))},addPlan:function(){null==this.user.paymentPlans&&(this.user.paymentPlans=[]),this.paymentPlan.interestRate=parseFloat(this.paymentPlan.interestRate),this.paymentPlan.numberOfMonths=parseFloat(this.paymentPlan.numberOfMonths),this.paymentPlan.paymentAmount=parseFloat(this.paymentPlan.paymentAmount),this.user.paymentPlans.push(this.planToSave),this.user.update(),this.planToSave={}}},computed:{currentPayments:function(){var t=(this.pagination.page-1)*this.pagination.limit,e=t+this.pagination.limit;return this.paymentPlan.paymentList.slice(t,e)},getPaymentsAmount:function(){if(this.paymentPlan.paymentType!==this.even){for(var t=[],e=0;e<this.paymentPlan.paymentList.length;e++)t.push(this.paymentPlan.paymentList[e].paymentAmount);return t}}},created:function(){var t=this,e=new T("","","");e.username=localStorage.getItem("username"),e.fetch().then(function(){null===e.expenses&&(e.expenses=[]),null===e.incomes&&(e.incomes=[]),null===e.paymentPlans&&(e.paymentPlans=[]),t.user=e})},mounted:function(){this.paymentPlan.paymentAmount=300001,this.paymentPlan.interestRate=12,this.paymentPlan.numberOfMonths=24}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-container",attrs:{id:"calculator"}},[n("div",{staticClass:"form-group",staticStyle:{"margin-bottom":"0","margin-top":"10pt"}},[n("label",[t._v("Название кредита")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentPlan.title,expression:"paymentPlan.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",min:1,placeholder:"Введите название",title:"Название кредита"},domProps:{value:t.paymentPlan.title},on:{input:function(e){e.target.composing||t.$set(t.paymentPlan,"title",e.target.value)}}})]),t._v(" "),t._l(t.errorsCust.month,function(e){return t.errorsCust.month.length?n("span",{key:e},[t._v(t._s(e))]):t._e()}),t._v(" "),n("div",{staticClass:"form-group",class:{"has-danger":t.errorsCust.sum.length},staticStyle:{"margin-bottom":"0"}},[n("label",[t._v("Сумма кредита, ₽")]),t._v(" "),n("vue-numeric",{staticClass:"form-control",attrs:{currency:"₽",separator:"space",placeholder:"сумма",id:"sum",title:"Сумма кредита",min:1,precision:2,value:t.paymentPlan.paymentAmount,"decimal-separator":"."},model:{value:t.paymentPlan.paymentAmount,callback:function(e){t.$set(t.paymentPlan,"paymentAmount",e)},expression:"paymentPlan.paymentAmount"}})],1),t._v(" "),t._l(t.errorsCust.sum,function(e){return t.errorsCust.sum.length?n("span",{key:e},[t._v(t._s(e))]):t._e()}),t._v(" "),n("div",{staticClass:"form-group",class:{"has-danger":t.errorsCust.month.length},staticStyle:{"margin-bottom":"0","margin-top":"10pt"}},[n("label",[t._v("Количество месяцев")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentPlan.numberOfMonths,expression:"paymentPlan.numberOfMonths"}],staticClass:"form-control",attrs:{type:"number",id:"month",min:1,title:"Количество месяцев"},domProps:{value:t.paymentPlan.numberOfMonths},on:{input:function(e){e.target.composing||t.$set(t.paymentPlan,"numberOfMonths",e.target.value)}}})]),t._v(" "),t._l(t.errorsCust.month,function(e){return t.errorsCust.month.length?n("span",{key:e},[t._v(t._s(e))]):t._e()}),t._v(" "),n("div",{staticClass:"form-group",class:{"has-danger":t.errorsCust.rate.length},staticStyle:{"margin-bottom":"0","margin-top":"10pt"}},[n("label",[t._v("Процент в год, %")]),t._v(" "),n("vue-numeric",{staticClass:"form-control",attrs:{currency:"%",separator:"space",placeholder:"процент в год",id:"rate",title:"Процент",min:.01,precision:2,value:t.paymentPlan.interestRate,"decimal-separator":"."},model:{value:t.paymentPlan.interestRate,callback:function(e){t.$set(t.paymentPlan,"interestRate",e)},expression:"paymentPlan.interestRate"}})],1),t._v(" "),t._l(t.errorsCust.rate,function(e){return t.errorsCust.rate.length?n("span",{key:e},[t._v(t._s(e))]):t._e()}),t._v(" "),n("div",{staticClass:"form-group",staticStyle:{"margin-top":"10pt"}},[n("label",[t._v("Дата начала платежей")]),t._v(" "),n("datepicker",{attrs:{"input-class":t.datepickerInput,language:t.datepickerLocale},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"d-block"},[t._v("Тип выплат")]),t._v(" "),n("label",{staticClass:"radio-inline",attrs:{for:"evenradio","data-toggle":"tooltip",title:"Равные выплаты"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentPlan.paymentType,expression:"paymentPlan.paymentType"}],attrs:{id:"evenradio",type:"radio"},domProps:{value:t.even,checked:t._q(t.paymentPlan.paymentType,t.even)},on:{change:function(e){t.$set(t.paymentPlan,"paymentType",t.even)}}}),t._v("\n      "+t._s(t.even)+"\n    ")]),t._v(" "),n("label",{staticClass:"radio-inline",attrs:{for:"diffradio","data-toggle":"tooltip",title:"Уменьшающиеся выплаты"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentPlan.paymentType,expression:"paymentPlan.paymentType"}],attrs:{id:"diffradio",type:"radio"},domProps:{value:t.diff,checked:t._q(t.paymentPlan.paymentType,t.diff)},on:{change:function(e){t.$set(t.paymentPlan,"paymentType",t.diff)}}}),t._v("\n      "+t._s(t.diff)+"\n    ")]),t._v(" "),n("div",{attrs:{align:"left"}},[t.paymentPlan.paymentType===t.diff?n("div",[t._v("Вычисляется следующим образом:\n        "),t._m(0)]):t._e(),t._v(" "),t.paymentPlan.paymentType===t.even?n("div",[t._v("Равные выплаты каждый месяц")]):t._e()])]),t._v(" "),n("div",{staticClass:"form-control-static"},[n("input",{staticClass:"btn btn-primary",attrs:{type:"submit",title:"Рассчитать",value:"Рассчитать"},on:{click:t.calculation}}),t._v(" "),t.checkLogged?n("input",{staticClass:"btn",class:{"btn-success":t.paymentPlan.totalPaymentAmount},attrs:{type:"submit",disabled:t.planToSave==={},title:"Добавить себе немного кредитов",value:"Добавить себе немного кредитов"},on:{click:t.addPlan}}):t._e()]),t._v(" "),t.paymentPlan.totalPaymentAmount?n("h5",{staticClass:"form-control-static"},[t._v("Итоговая сумма платежей:\n    "),n("vue-numeric",{attrs:{currency:"₽",separator:"space",value:t.paymentPlan.totalPaymentAmount,"read-only":!0,precision:2,"decimal-separator":"."}})],1):t._e(),t._v(" "),t.paymentPlan.totalPaymentAmount?n("h5",[t._v("\n    Переплата по кредиту:\n    "),n("vue-numeric",{attrs:{currency:"₽",separator:"space",value:t.paymentDifference,"read-only":!0,precision:2,"decimal-separator":"."}})],1):t._e(),t._v(" "),t.paymentPlan.totalPaymentAmount?n("PaymentsTable",{attrs:{payments:t.currentPayments,page:this.pagination.page,myPaymentPlan:t.getPaymentsAmount,total:t.paymentPlan.totalPaymentAmount}}):t._e(),t._v(" "),t.paymentPlan.totalPaymentAmount?n("paginator",{attrs:{limit:t.pagination.limit,length:t.paymentPlan.paymentList.length},model:{value:t.pagination,callback:function(e){t.pagination=e},expression:"pagination"}}):t._e()],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[t._v("ДП = ОСЗ / ПП + ОСЗ х ПС , где\n          "),n("li",[t._v("ДП - размер дифференцированного платежа")]),t._v(" "),n("li",[t._v("ОСЗ - остаток ссудной задолженности")]),t._v(" "),n("li",[t._v("ПП - количество периодов, оставшихся до погашения кредита")]),t._v(" "),n("li",[t._v("ПС - месячная процентная ставка по кредитному договору, равная 1/12 годовой процентной ставки")])])}]};var M=n("VU/8")(L,N,!1,function(t){n("U8Ce")},"data-v-1a128039",null).exports,E={name:"Signup",data:function(){return{settings:{email:"",username:"",password:"",password_confirmation:""}}},methods:{signup:function(){var t=this;this.$validator.validateAll().then(function(e){if(e){var n=new T(t.settings.username,t.settings.password,t.settings.email);n.save().then(function(e){console.log(e),201===e&&i(n.username,n.password).then(function(){t.$router.push("/user/profile")})})}}).catch(function(e){console.log("err "+e.message),t.errors.push(e)})}}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"form-group",class:{"has-danger":null!=t.errors.first("email")}},[n("label",{attrs:{for:"email"}},[t._v("Электронная почта:")]),t._v(" "),n("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:t.settings.email,expression:"settings.email"}],staticClass:"form-control",attrs:{id:"email",type:"email","data-vv-as":"Электронная почта",name:"email",placeholder:"Укажите email"},domProps:{value:t.settings.email},on:{input:function(e){e.target.composing||t.$set(t.settings,"email",e.target.value)}}})]),t._v(" "),n("span",[t._v(t._s(t.errors.first("email")))]),t._v(" "),n("div",{staticClass:"form-group",class:{"has-danger":null!=t.errors.first("username")}},[n("label",{attrs:{for:"username"}},[t._v("Имя пользователя:")]),t._v(" "),n("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_num",expression:"'required|alpha_num'"},{name:"model",rawName:"v-model",value:t.settings.username,expression:"settings.username"}],staticClass:"form-control",attrs:{id:"username",type:"text",name:"username","data-vv-as":"Имя пользователя",placeholder:"Укажите имя пользователя"},domProps:{value:t.settings.username},on:{input:function(e){e.target.composing||t.$set(t.settings,"username",e.target.value)}}})]),t._v(" "),n("span",[t._v(t._s(t.errors.first("username")))]),t._v(" "),n("div",{staticClass:"form-group",class:{"has-danger":t.errors.has("password")}},[n("label",{attrs:{for:"password"}},[t._v("Пароль:")]),t._v(" "),n("input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,min:3},expression:"{ required: true, min: 3}"},{name:"model",rawName:"v-model",value:t.settings.password,expression:"settings.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password","data-vv-as":"Пароль",placeholder:"Укажите пароль"},domProps:{value:t.settings.password},on:{input:function(e){e.target.composing||t.$set(t.settings,"password",e.target.value)}}})]),t._v(" "),n("span",[t._v(t._s(t.errors.first("password")))]),t._v(" "),n("div",{staticClass:"form-group",class:{"has-danger":t.errors.has("password_confirmation")}},[n("label",{attrs:{for:"password_confirmation"}},[t._v("Подтверждение пароля:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.password_confirmation,expression:"settings.password_confirmation"},{name:"validate",rawName:"v-validate",value:{required:!0,confirmed:t.settings.password},expression:"{ required: true, confirmed: settings.password}"}],staticClass:"form-control",attrs:{id:"password_confirmation",type:"password","data-vv-as":"Подтверждение пароля",name:"password_confirmation",placeholder:"Подтвердите пароль"},domProps:{value:t.settings.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.settings,"password_confirmation",e.target.value)}}})]),t._v(" "),t.errors.has("password_confirmation")?n("span",[t._v("Введенные пароли должны совпадать.")]):t._e(),t._v(" "),n("div",[n("button",{staticClass:"btn btn-primary",attrs:{type:"button",id:"confirm_btn"},on:{click:t.signup}},[t._v("ОК")])])])])},staticRenderFns:[]};var F=n("VU/8")(E,O,!1,function(t){n("w/nR")},"data-v-33c16670",null).exports,U={name:"Signin",data:function(){return{settings:{username:"",password:""},invalidCredentials:!1}},methods:{signin:function(){var t=this;this.$validator.validateAll().then(function(e){e&&i(t.settings.username,t.settings.password).then(function(){t.$router.push("/user/profile")}).catch(function(e){console.log("sign in error: "+e.message),t.invalidCredentials=!0})}).catch(function(t){console.log("validation error: "+t.message)})},hideAlert:function(){this.invalidCredentials=!1}}},V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[t.invalidCredentials?n("div",{staticClass:"alert alert-danger"},[n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-hidden":"true"},on:{click:t.hideAlert}},[t._v("×")]),t._v(" "),n("strong",[t._v("Ошибка")]),t._v(" неверный логин или пароль\n  ")]):t._e(),t._v(" "),n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"form-group",class:{"has-danger":null!=t.errors.first("username")}},[n("label",{attrs:{for:"username"}},[t._v("Имя пользователя:")]),t._v(" "),n("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.settings.username,expression:"settings.username"}],staticClass:"form-control",attrs:{id:"username",type:"text",name:"username","data-vv-as":"Имя пользователя",placeholder:"Укажите имя пользователя"},domProps:{value:t.settings.username},on:{input:function(e){e.target.composing||t.$set(t.settings,"username",e.target.value)}}})]),t._v(" "),n("span",[t._v(t._s(t.errors.first("username")))]),t._v(" "),n("div",{staticClass:"form-group",class:{"has-danger":t.errors.has("password")}},[n("label",{attrs:{for:"password"}},[t._v("Пароль:")]),t._v(" "),n("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.settings.password,expression:"settings.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password","data-vv-as":"Пароль",placeholder:"Укажите пароль"},domProps:{value:t.settings.password},on:{input:function(e){e.target.composing||t.$set(t.settings,"password",e.target.value)}}})]),t._v(" "),n("span",[t._v(t._s(t.errors.first("password")))]),t._v(" "),n("div",[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"confirm_btn"},on:{click:t.signin}},[t._v("Войти")])])])])},staticRenderFns:[]};var z=n("VU/8")(U,V,!1,function(t){n("a8iz")},"data-v-4039a58d",null).exports,H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"vue-libs-simple-toggle"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.model)?t._i(t.model,null)>-1:t.model},on:{change:function(e){var n=t.model,a=e.target,s=!!a.checked;if(Array.isArray(n)){var r=t._i(n,null);a.checked?r<0&&(t.model=n.concat([null])):r>-1&&(t.model=n.slice(0,r).concat(n.slice(r+1)))}else t.model=s}}}),t._v(" "),n("span",{staticClass:"slider round"})])},staticRenderFns:[]};var J=n("VU/8")({data:function(){return{model:this.value}},props:["value","disabled"],methods:{},components:{},watch:{model:function(){this.$emit("input",this.model)}}},H,!1,function(t){n("9fl1")},null,null).exports,X={name:"userPage",components:{Datepicker:q.a,Toggle:J},data:function(){return{user:{},options:{year:"numeric",month:"numeric",day:"numeric"},username:localStorage.getItem("username"),currentState:!0,currentIncome:{isIncome:!0,amount:"",reason:"",paymentPeriod:"",frequency:"",startDate:new Date(Date.now()),isRepeatable:!1},datepickerLocale:R.a,datepickerInput:"form-control"}},computed:{totalIncome:function(){if(!this.user.incomes)return 0;for(var t=0,e=0;e<this.user.incomes.length;e++)t+=this.user.incomes[e].amount;return t},totalExpense:function(){if(!this.user.expenses)return 0;for(var t=0,e=0;null!==this.user&&e<this.user.expenses.length;e++)t+=this.user.expenses[e].amount;return t},selectedState:function(){return this.currentIncome.isIncome?"Доход":"Расход"}},methods:{addBtnClick:function(){var t=this;this.$validator.validateAll().then(function(e){e&&(t.currentIncome.amount=parseFloat(t.currentIncome.amount,10),t.currentIncome.frequency=parseInt(t.currentIncome.frequency,10),null==t.user.incomes&&(t.user.incomes=[]),null==t.user.expenses&&(t.user.expenses=[]),t.currentIncome.isRepeatable="Единовременный"===t.currentIncome.paymentPeriod,t.currentIncome.isIncome?t.user.incomes.push(t.currentIncome):t.user.expenses.push(t.currentIncome),t.user.update(),t.currentIncome={isIncome:t.currentIncome.isIncome,amount:t.amount,reason:t.reason,paymentPeriod:t.paymentPeriod,frequency:t.frequency,startDate:new Date(Date.now()),isRepeatable:t.isRepeatable})})},deleteIncome:function(t,e){var n=this.user.incomes.indexOf(t);this.user.incomes.splice(n,1),this.user.update()},deleteExpense:function(t,e){var n=this.user.expenses.indexOf(t);this.user.expenses.splice(n,1),this.user.update()}},created:function(){var t=this,e=new T("","","");e.username=localStorage.getItem("username"),e.fetch().then(function(){null===e.expenses&&(e.expenses=[]),null===e.incomes&&(e.incomes=[]),t.user=e})}},Z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[n("div",{staticClass:"text-center col-lg-10 col-md-10 "},[n("h3",[t._v(t._s(t.user.username))]),n("br"),t._v(" "),n("div",[n("ul",{staticClass:"flex-container"},[n("li",[n("p",[t._v(t._s(t.selectedState))]),t._v(" "),n("toggle",{staticStyle:{"margin-bottom":"-6px"},model:{value:t.currentIncome.isIncome,callback:function(e){t.$set(t.currentIncome,"isIncome",e)},expression:"currentIncome.isIncome"}})],1),t._v(" "),n("li",{attrs:{id:"sum"}},[n("vue-numeric",{directives:[{name:"validate",rawName:"v-validate",value:{min_value:.01,required:!0,decimal:!0},expression:"{ min_value:0.01, required:true, decimal:true }"}],staticClass:"form-control flex-item",attrs:{currency:"₽",separator:"space","data-vv-as":"сумма",placeholder:"сумма",name:"incomeSum",precision:2,value:"","decimal-separator":"."},model:{value:t.currentIncome.amount,callback:function(e){t.$set(t.currentIncome,"amount",e)},expression:"currentIncome.amount"}})],1),t._v(" "),n("li",{attrs:{id:"reason"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentIncome.reason,expression:"currentIncome.reason"}],staticClass:"form-control flex-item",attrs:{name:"sourceIncome",placeholder:"источник",type:"text"},domProps:{value:t.currentIncome.reason},on:{input:function(e){e.target.composing||t.$set(t.currentIncome,"reason",e.target.value)}}})]),t._v(" "),n("li",{attrs:{id:"frequency"}},[n("vue-numeric",{directives:[{name:"validate",rawName:"v-validate",value:{min_value:0,required:!0,numeric:!0},expression:"{ min_value: 0, required:true, numeric:true }"}],staticClass:"form-control flex-item smalInt",attrs:{placeholder:"Количество",name:"frequency"},model:{value:t.currentIncome.frequency,callback:function(e){t.$set(t.currentIncome,"frequency",e)},expression:"currentIncome.frequency"}})],1),t._v(" "),n("li",{attrs:{id:"period"}},[t._v("Периодичность\n          "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.currentIncome.paymentPeriod,expression:"currentIncome.paymentPeriod"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.currentIncome,"paymentPeriod",e.target.multiple?n:n[0])}}},[n("option",[t._v("Единовременный")]),t._v(" "),n("option",[t._v("День")]),t._v(" "),n("option",[t._v("Неделя")]),t._v(" "),n("option",[t._v("Месяц")]),t._v(" "),n("option",[t._v("Квартал")]),t._v(" "),n("option",[t._v("Год")])])]),t._v(" "),n("li",{attrs:{id:"date"}},[n("datepicker",{staticClass:"flex-item",attrs:{"input-class":t.datepickerInput,language:t.datepickerLocale},model:{value:t.currentIncome.startDate,callback:function(e){t.$set(t.currentIncome,"startDate",e)},expression:"currentIncome.startDate"}})],1),t._v(" "),n("li",{attrs:{id:"add"}},[n("input",{staticClass:"btn btn-success flex-item",attrs:{title:"Добавить",value:"+",type:"submit"},on:{click:t.addBtnClick}})])]),t._v(" "),n("span",{},[t._v(t._s(t.errors.first("incomeSum")))])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"leftColumn"},[n("label",{staticClass:"form-control form-control-success"},[t._v("\n          Доходы:\n          "),n("vue-numeric",{attrs:{currency:"₽",separator:"space",value:t.totalIncome,"read-only":!0,precision:2,"decimal-separator":"."}})],1)]),t._v(" "),n("div",{staticClass:"rightColumn"},[n("label",{staticClass:"form-control form-control-success"},[t._v("\n          Расходы:\n          "),n("vue-numeric",{attrs:{currency:"₽",separator:"space",value:t.totalExpense,"read-only":!0,precision:2,"decimal-separator":"."}})],1)])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"leftColumn"},[n("table",{staticClass:"myFavoriteTable table table-bordered"},t._l(t.user.incomes,function(e){return n("tr",{key:e.id,staticClass:"form-control-static"},[n("td",[n("vue-numeric",{attrs:{currency:"₽",separator:"space",value:e.amount,"read-only":!0,precision:2,"decimal-separator":"."}})],1),t._v(" "),n("td",[t._v(t._s(e.reason))]),t._v(" "),n("td",{staticClass:"deleteRow"},[n("input",{staticClass:"btn btn-secondary btn-danger btn-sm",attrs:{type:"button",name:"deleteIncome",title:"Удалить",value:"—"},on:{click:function(n){t.deleteIncome(e,n)}}})])])}))]),t._v(" "),n("td",{staticClass:"rightColumn"},[n("table",{staticClass:"table table-bordered"},t._l(t.user.expenses,function(e){return n("tr",{key:e.id,staticClass:"form-control-static"},[n("td",[n("vue-numeric",{attrs:{currency:"₽",separator:"space",value:e.amount,"read-only":!0,precision:2,"decimal-separator":"."}})],1),t._v(" "),n("td",[t._v(t._s(e.reason))]),t._v(" "),n("td",[t._v("До "+t._s(new Date(e.startDate).toLocaleDateString("ru",t.options)))]),t._v(" "),n("td",{staticClass:"deleteRow"},[n("input",{staticClass:"btn btn-secondary btn-sm btn-danger",attrs:{type:"button",title:"Удалить",value:"—",name:"deleteIncome"},on:{click:function(n){t.deleteExpense(e,n)}}})])])}))])])])])},staticRenderFns:[]};var j=n("VU/8")(X,Z,!1,function(t){n("7JnT")},null,null).exports,B={name:"Agenda",data:function(){return{user:{}}},created:function(){var t=this,e=new T("","","");e.username=localStorage.getItem("username"),e.fetch().then(function(){null===e.expenses&&(e.expenses=[]),null===e.incomes&&(e.incomes=[]),null===e.paymentPlans&&(e.paymentPlans=[]),t.user=e})}},G={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Лента событий")]),t._v(" "),n("div",[n("table",{staticClass:"table table-bordered"},t._l(t.user.incomes,function(e){return n("tr",{key:e.id,staticClass:"form-control-static"},[n("td",[n("vue-numeric",{attrs:{currency:"₽",separator:"space",value:e.amount,"read-only":!0,precision:2,"decimal-separator":"."}})],1),t._v(" "),n("td",[t._v(t._s(e.reason))]),t._v(" "),n("td",{staticClass:"deleteRow"},[n("input",{staticClass:"btn btn-secondary btn-danger btn-sm",attrs:{type:"button",name:"deleteIncome",title:"Удалить",value:"—"},on:{click:function(n){t.deleteIncome(e,n)}}})])])}))])])},staticRenderFns:[]};var Y=n("VU/8")(B,G,!1,function(t){n("ZpUX")},"data-v-799fbf84",null).exports;a.a.use(d.a);var W=new d.a({routes:[{title:"Регистрация",path:"/signup",name:"Signup",meta:{title:"Регистрация"},component:F},{title:"Вход в систему",path:"/signin",name:"Signin",meta:{title:"Страница входа"},component:z},{title:"Личный кабинет",path:"/user/profile",name:"User",meta:{title:"Личный кабинет",requiresAuth:!0},component:j},{title:"Калькулятор",path:"/calculator",name:"Calculator",meta:{title:"Калькулятор"},component:M},{title:"События",path:"/user/agenda",name:"Agenda",component:Y,meta:{title:"События",requiresAuth:!0}},{title:"Выход",path:"/signout",name:"Signout",meta:{title:"Выход",requiresAuth:!0}}]}),K=(n("iodX"),n("sUu7")),Q=n("+/GF"),tt=n.n(Q),et=n("mtWM"),nt=n.n(et),at=n("O6Gy"),st=n.n(at);n.d(e,"HTTP",function(){return rt}),K.a.Validator.localize("ru",tt.a),a.a.use(K.a),a.a.use(st.a),a.a.config.productionTip=!1,W.beforeEach(function(t,e,n){t.meta.requiresAuth?function(){var t=this;return rt.get("/refreshToken",{headers:{Authorization:localStorage.getItem("token")}}).then(function(e){return 200===e.status?(localStorage.setItem("token","Bearer "+e.data.token),!0):(t.localStorage.removeItem("token"),t.localStorage.removeItem("username"),!1)})}().then(function(e){e?(document.title=void 0!==t.meta.title?t.meta.title:"Кредитный портфель",n()):(l(),W.push("/signin"))}).catch(function(){l(),W.push("/signin")}):(document.title=void 0!==t.meta.title?t.meta.title:"Кредитный портфель",n())});var rt=nt.a.create({baseURL:"https://protected-badlands-94104.herokuapp.com/"});new a.a({el:"#app",router:W,components:{App:v},template:"<App/>"})},NS1R:function(t,e){},SG2C:function(t,e){},TewM:function(t,e){},U8Ce:function(t,e){},VPMk:function(t,e){},VpI0:function(t,e){},X0uL:function(t,e){},XEJZ:function(t,e){},XeOY:function(t,e){},ZpUX:function(t,e){},a8iz:function(t,e){},aG4R:function(t,e){},bUuw:function(t,e){},bz7L:function(t,e){},jdpu:function(t,e){},kN2P:function(t,e){},ldKY:function(t,e){},n2ri:function(t,e){},nHtv:function(t,e){},qI60:function(t,e){},"qzS+":function(t,e){},"sd0+":function(t,e){},v2eo:function(t,e){},vZCS:function(t,e){},"w/nR":function(t,e){},zAZt:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a6d2a442ee2dda431000.js.map