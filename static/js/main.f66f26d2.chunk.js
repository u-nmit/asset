(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[0],[,,,,,function(e,t,n){e.exports={BreadTop:"style_BreadTop__hUv7d",Seed:"style_Seed__3i8T2",Second:"style_Second__1OygB",Third:"style_Third__1ENDv",Fourth:"style_Fourth__2yHB5",Salad:"style_Salad__2XJPo",Meat:"style_Meat__1vqzc",Cheese:"style_Cheese__HsFGa",Bacon:"style_Bacon__241tk",BreadBottom:"style_BreadBottom__2Tk5s"}},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(2),r=n(3),o=n(0),l=n.n(o),c=n(14),s=l.a.createContext(),i={saving:!1,logginIn:!1,error:null,errorCode:null,token:null,userId:null,expireDate:null},u=function(e){var t=Object(o.useState)(i),n=Object(r.a)(t,2),u=n[0],d=n[1],m=function(e,t,n,r){localStorage.setItem("token",e),localStorage.setItem("userId",t),localStorage.setItem("expireDate",n),localStorage.setItem("refreshToken",r),d(Object(a.a)({},u,{logginIn:!1,error:null,errorCode:null,token:e,userId:t,expireDate:n}))};return l.a.createElement(s.Provider,{value:{state:u,signupUser:function(e,t){d(Object(a.a)({},u,{saving:!0}));var n={email:e,password:t,returnSecureToken:!0};c.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAs35ADQd-WDsacfuzRt5pjIHEniQ3K4yA",n).then((function(e){var t=e.data.idToken,n=e.data.localId;localStorage.setItem("token",t),localStorage.setItem("userId",n),d(Object(a.a)({},u,{saving:!1,token:t,userId:n,error:null,errorCode:null}))})).catch((function(e){d(Object(a.a)({},u,{saving:!1,token:null,userId:null,error:e.message,errorCode:e.code}))}))},loginUser:function(e,t){d(Object(a.a)({},u,{logginIn:!0}));var n={email:e,password:t,returnSecureToken:!0};c.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAs35ADQd-WDsacfuzRt5pjIHEniQ3K4yA",n).then((function(e){console.log("Logged in =======>",e.data),console.log(new Date);var t=e.data.idToken,n=e.data.localId,a=e.data.expiresIn,r=new Date((new Date).getTime()+1e3*a),o=e.data.refreshToken;m(t,n,r,o)})).catch((function(e){d(Object(a.a)({},u,{logginIn:!1,error:e.message,errorCode:e.code,token:null,userId:null,expireDate:null}))}))},logout:function(){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expireDate"),localStorage.removeItem("refreshToken"),d(i)},loginUserSucces:m,autoRenewTokenAfterMillisec:function e(t){c.a.post("https://securetoken.googleapis.com/v1/token?key=AIzaSyAs35ADQd-WDsacfuzRt5pjIHEniQ3K4yA",{grant_type:"refresh_token",refresh_token:localStorage.getItem("refreshToken")}).then((function(e){console.log("Token refreshed .....",e.data);var t=e.data.id_token,n=e.data.user_id,a=e.data.expires_in,r=new Date((new Date).getTime()+1e3*a),o=e.data.refresh_token;m(t,n,r,o)})).catch((function(e){d(Object(a.a)({},u,{logginIn:!1,error:e.message,errorCode:e.code,token:null,userId:null,expireDate:null}))})),setTimeout((function(){e(36e5)}),t)}}},e.children)};t.b=s},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(18),r=n(2),o=n(3),l=n(0),c=n.n(l),s=n(14),i=c.a.createContext(),u=function(e){var t={ingredients:{salad:0,cheese:0,bacon:0,meat:0},totalPrice:"",purchasing:!1,ingredientNames:{"\u0426\u0430\u0445\u0438\u043b\u0433\u0430\u0430\u043d\u044b \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438":"\u0426\u0430\u0445\u0438\u043b\u0433\u0430\u0430\u043d\u044b \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438","\u041f\u0440\u043e\u0433\u0440\u0430\u043c \u0445\u0430\u043d\u0433\u0430\u043c\u0436\u0438\u0439\u043d \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438":"\u041f\u0440\u043e\u0433\u0440\u0430\u043c \u0445\u0430\u043d\u0433\u0430\u043c\u0436\u0438\u0439\u043d \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438","\u0425\u0438\u043c\u0438\u0439\u043d \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438":"\u0425\u0438\u043c\u0438\u0439\u043d \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438","\u041c\u0435\u0445\u0430\u043d\u0438\u043a\u044b\u043d \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438":"\u041c\u0435\u0445\u0430\u043d\u0438\u043a\u044b\u043d \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438"},saving:!1,finished:!1,error:null},n=Object(l.useState)(t),u=Object(o.a)(n,2),d=u[0],m=u[1],g={salad:150,cheese:250,bacon:800,meat:1500};return c.a.createElement(i.Provider,{value:{Burger:d,addIngredient:function(e){m(Object(r.a)({},d,{ingredients:Object(r.a)({},d.ingredients,Object(a.a)({},e,d.ingredients[e])),totalPrice:e,purchasing:!0}))},removeIngredient:function(e){var t=d.totalPrice-g[e];m(Object(r.a)({},d,{ingredients:Object(r.a)({},d.ingredients,Object(a.a)({},e,d.ingredients[e]-1)),totalPrice:t,purchasing:t>1e3}))},saveBurger:function(e,t){m(Object(r.a)({},d,{saving:!0})),s.a.post("/orders.json?auth=".concat(t),e).then((function(e){m(Object(r.a)({},d,{saving:!1,finished:!0,error:null}))})).catch((function(e){m(Object(r.a)({},d,{error:e,saving:!1,finished:!0}))}))},clearBurger:function(){m(t)}}},e.children)};t.b=i},function(e,t,n){"use strict";var a=n(46),r=n.n(a).a.create({baseURL:"https://burger-2fefc-default-rtdb.asia-southeast1.firebasedatabase.app/"});t.a=r},,function(e,t,n){e.exports={SideBar:"style_SideBar__9JBw5",Open:"style_Open__1HI6o",Close:"style_Close__9aYr9",Logo:"style_Logo__3VGOu"}},,,function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(28),l=n.n(o);t.a=function(e){return r.a.createElement("button",{onClick:e.daragdsan,className:"".concat(l.a.Button," ").concat(l.a[e.btnType])},e.text)}},function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(52),l=n.n(o);t.a=function(){return r.a.createElement("div",{className:l.a.Loader})}},,,,function(e,t,n){e.exports={Toolbar:"style_Toolbar__3nPSU",HideOnMobile:"style_HideOnMobile__3Xwkt"}},function(e,t,n){e.exports={MenuItem:"style_MenuItem__1rtbd",active:"style_active__18l-V"}},,,function(e,t,n){e.exports={Button:"style_Button__1FaHY",Success:"style_Success__u7dEO",Danger:"style_Danger__1gnky"}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(2),r=n(3),o=n(0),l=n.n(o),c=n(14),s=l.a.createContext(),i=function(e){var t=Object(o.useState)({orders:[],loading:!1,error:null}),n=Object(r.a)(t,2),i=n[0],u=n[1];return l.a.createElement(s.Provider,{value:{state:i,loadOrders:function(e,t){u(Object(a.a)({},i,{loading:!0})),c.a.get("orders.json?auth=".concat(t,'&orderBy="userId"&equalTo="').concat(e,'"')).then((function(e){var t=Object.entries(e.data).reverse();u(Object(a.a)({},i,{orders:t}))})).catch((function(e){return u(Object(a.a)({},i,{error:e}))}))}}},e.children)};t.b=s},,,,,,,,,,,function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(48),l=n.n(o);t.a=function(e){return e.show?r.a.createElement("div",{onClick:e.darahad,className:l.a.Shadow}):null}},function(e,t,n){e.exports={Content:"style_Content__Dp7rG"}},function(e,t,n){e.exports={Logo:"style_Logo__bE7VX"}},function(e,t,n){e.exports={Menu:"style_Menu__1Rhv_"}},,,function(e,t,n){e.exports={HamburgerMenu:"style_HamburgerMenu__17TTr"}},function(e,t,n){e.exports={Shadow:"style_Shadow__r4iig"}},function(e,t,n){e.exports={Burger:"style_Burger__3a1aH"}},function(e,t,n){e.exports={ShippingPage:"style_ShippingPage__2Mxxt"}},function(e,t,n){e.exports={ContactData:"style_ContactData__3jtl2"}},function(e,t,n){e.exports={Loader:"style_Loader__3y1Rf",load1:"style_load1__2Jq2u"}},,function(e,t,n){"use strict";n(0),n(5),n(49),n(13)},function(e,t,n){e.exports=n(89)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logoNmit.4fd0e198.png"},function(e,t,n){e.exports=n.p+"static/media/nmit.aa2e0bc7.mp4"},,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){e.exports={container:"style_container__2g5gP",card:"style_card__1VAt0",social_icon:"style_social_icon__2DehB","card-header":"style_card-header__2aXl3","input-group-prepend":"style_input-group-prepend__1XJwz",remember:"style_remember__3mWUY",login_btn:"style_login_btn__1_0P1",links:"style_links__DTzC4"}},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),l=n.n(o),c=(n(60),n(3)),s=n(42),i=n.n(s),u=n(24),d=n.n(u),m=(n(61),n(43)),g=n.n(m),f=(n(62),function(){return r.a.createElement("div",{className:g.a.Logo})}),p=n(44),_=n.n(p),b=n(12),h=n(25),E=n.n(h),v=function(e){return r.a.createElement("li",{className:E.a.MenuItem},r.a.createElement(b.b,{exact:e.exact,activeClassName:E.a.active,to:e.link},e.children))},y=n(8),O=function(e){var t=Object(a.useContext)(y.b);return r.a.createElement("div",null,r.a.createElement("ul",{className:_.a.Menu},t.state.userId?r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{exact:!0,link:"/"},"\u0428\u0418\u041d\u042d \u0417\u0410\u0425\u0418\u0410\u041b\u0413\u0410"),r.a.createElement(v,{link:"/orders"},"\u0417\u0410\u0425\u0418\u0410\u041b\u0413\u0410\u041d\u0423\u0423\u0414"),r.a.createElement(v,{link:"/logout"},"\u0413\u0410\u0420\u0410\u0425")):r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{link:"/login"},"\u041d\u042d\u0412\u0422\u0420\u042d\u0425"),r.a.createElement(v,{link:"/signup"},"\u0411\u04ae\u0420\u0422\u0413\u04ae\u04ae\u041b\u042d\u0425"))))},S=n(47),j=n.n(S),k=function(e){return r.a.createElement("div",{onClick:e.toggleSideBar,className:j.a.HamburgerMenu},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},I=function(e){return r.a.createElement("header",{className:d.a.Toolbar},r.a.createElement(k,{toggleSideBar:e.toggleSideBar}),r.a.createElement(f,null),r.a.createElement("nav",{className:d.a.HideOnMobile},r.a.createElement(O,null)))},x=n(16),B=n.n(x),C=n(41),w=function(e){var t=[B.a.SideBar,B.a.Close];return e.showSidebar&&(t=[B.a.SideBar,B.a.Open]),r.a.createElement("div",null,r.a.createElement(C.a,{show:e.showSidebar,darahad:e.toggleSideBar}),r.a.createElement("div",{onClick:e.toggleSideBar,className:t.join(" ")},r.a.createElement("div",{className:B.a.Logo},r.a.createElement(f,null)),r.a.createElement(O,null)))},T=n(9),D=(n(54),n(19)),N=n(50),M=n.n(N),P=n(51),A=n.n(P),z=n(20),H=n(13),L=(n(84),function(e){var t=Object(T.g)(),n=Object(a.useContext)(y.b),o=Object(a.useContext)(H.b),l=Object(a.useState)(null),s=Object(c.a)(l,2),i=s[0],u=s[1],d=Object(a.useState)(null),m=Object(c.a)(d,2),g=m[0],f=m[1],p=Object(a.useState)(null),_=Object(c.a)(p,2),b=_[0],h=_[1],E=Object(a.useState)(null),v=Object(c.a)(E,2),O=v[0],S=v[1];Object(a.useEffect)((function(){return o.Burger.finished&&!o.Burger.error&&t.replace("/orders"),function(){o.clearBurger()}}),[o.Burger.finished]);var j=Object(a.useRef)();return r.a.createElement("div",{className:A.a.ContactData},r.a.createElement("div",{ref:j}),r.a.createElement("div",null,o.Burger.error&&"\u0425\u04af\u0441\u044d\u043b\u0442\u0439\u0433 \u0445\u0430\u0434\u0433\u0430\u043b\u0430\u0445 \u044f\u0432\u0446\u0430\u0434 \u0430\u043b\u0434\u0430\u0430 \u0433\u0430\u0440\u043b\u0430\u0430 : ".concat(o.Burger.error)),o.Burger.saving?r.a.createElement(z.a,null):r.a.createElement("div",null,r.a.createElement("input",{style:{width:"70%"},onChange:function(e){"red"==j.current.style.color?j.current.style.color="green":j.current.style.color="red",u(e.target.value)},type:"text",name:"name",placeholder:"\u0422\u0430\u043d\u044b \u043d\u044d\u0440"}),r.a.createElement("input",{style:{width:"70%"},onChange:function(e){h(e.target.value)},type:"text",name:"street",placeholder:"\u0422\u0430\u043d\u044b \u0430\u043d\u0433\u0438"}),r.a.createElement("input",{style:{width:"70%"},onChange:function(e){f(e.target.value)},type:"text",name:"city",placeholder:"\u0422\u0430\u043d\u044b \u043a\u043e\u0434"}),r.a.createElement("input",{style:{width:"70%"},onChange:function(e){S(e.target.value)},type:"text",name:"request",placeholder:"\u041b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438\u0430\u0441 \u0430\u0432\u0430\u0445 \u0437\u04af\u0439\u043b"}),r.a.createElement("button",{onClick:function(){var e={dun:o.Burger.totalPrice,userId:n.state.userId,request:O,hayag:{name:i,city:g,street:b}};o.saveBurger(e,n.state.token)},type:"",class:"submitBtn"},"\u0418\u043b\u0433\u044d\u044d\u0445")))}),U=function(e){var t=Object(a.useContext)(H.b);return Object(a.useEffect)((function(){e.history.replace("/ship/contact")}),[]),r.a.createElement("div",{className:M.a.ShippingPage},r.a.createElement("p",{style:{fontSize:"24px"}},r.a.createElement("strong",{style:{color:"white"}}," ","\u0422\u0430 \u04e9\u04e9\u0440\u0438\u0439\u043d \u043d\u044d\u0440, \u0430\u043d\u0433\u0438, \u043a\u043e\u0434\u043e\u043e \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443")),r.a.createElement("p",{style:{fontSize:"24px"}},r.a.createElement("strong",{style:{color:"white"}},"\u0421\u043e\u043d\u0433\u043e\u0441\u043e\u043d \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438: ",t.Burger.totalPrice,"\u20ae")),r.a.createElement(D.a,{daragdsan:function(){e.history.goBack()},btnType:"Danger",text:"\u0425\u04ae\u0421\u042d\u041b\u0422\u0418\u0419\u0413 \u0426\u0423\u0426\u041b\u0410\u0425"}),r.a.createElement(T.b,{path:"/ship/contact"},r.a.createElement(L,null)))},R=(n(85),n(86),function(){var e=Object(a.useContext)(y.b),t=Object(a.useState)(""),n=Object(c.a)(t,2),o=n[0],l=n[1],s=Object(a.useState)(""),i=Object(c.a)(s,2),u=i[0],d=i[1];return r.a.createElement("div",{class:"body"},e.state.userId?r.a.createElement(T.a,{to:"/orders"}):null,r.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"//fonts.googleapis.com/css?family=Aguafina+Script"}),r.a.createElement("div",null,r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"login-container"},r.a.createElement("div",{class:"login-container-img"},r.a.createElement("h1",null,"NEW MONGOL",r.a.createElement("span",null,"Institute of technology"))),r.a.createElement("div",{class:"login-container-content"},r.a.createElement("div",{class:"login-form"},r.a.createElement("h1",null,"\u041d\u044d\u0432\u0442\u0440\u044d\u0445"),r.a.createElement("p",{class:"field"},r.a.createElement("label",null,"\u0425\u044d\u0440\u044d\u0433\u043b\u044d\u0433\u0447\u0438\u0439\u043d \u043d\u044d\u0440"),r.a.createElement("input",{onChange:function(e){l(e.target.value)},type:"text",name:"username",placeholder:""})),r.a.createElement("p",{class:"field"},r.a.createElement("label",null,"\u041d\u0443\u0443\u0446 \u04af\u0433"),r.a.createElement("input",{onChange:function(e){d(e.target.value)},type:"password",name:"password",placeholder:""})),e.state.firebaseError&&400===e.state.firebaseErrorCode?r.a.createElement("div",{style:{color:"red"}},"\u041d\u0443\u0443\u0446 \u04af\u0433 \u0431\u0443\u0440\u0443\u0443 \u0431\u0430\u0439\u043d\u0430"):null,e.state.loginIn?r.a.createElement(z.a,null):null,r.a.createElement("button",{onClick:function(){e.loginUser(o,u)},type:"",class:"submitBtn"},"\u041d\u044d\u0432\u0442\u0440\u044d\u0445")))))))}),W=(n(88),function(e){var t=Object(a.useContext)(y.b);return Object(a.useEffect)((function(){t.logout()}),[]),r.a.createElement("div",null,r.a.createElement(T.a,{to:"/"}))}),F=n(30),J=r.a.lazy((function(){return n.e(3).then(n.bind(null,97))})),Q=r.a.lazy((function(){return n.e(5).then(n.bind(null,96))})),q=r.a.lazy((function(){return n.e(4).then(n.bind(null,91))})),X=function(e){var t=Object(a.useContext)(y.b),n=Object(a.useState)(!1),o=Object(c.a)(n,2),l=o[0],s=o[1],u=function(){s((function(e){return!e}))};return Object(a.useEffect)((function(){var e=localStorage.getItem("token"),n=localStorage.getItem("userId"),a=new Date(localStorage.getItem("expireDate")),r=localStorage.getItem("refreshToken");e&&(a>new Date?(t.loginUserSucces(e,n,a,r),t.autoRenewTokenAfterMillisec(a.getTime-(new Date).getTime())):t.logout())}),[]),r.a.createElement("div",null,r.a.createElement(I,{toggleSideBar:u}),r.a.createElement(w,{showSidebar:l,toggleSideBar:u}),r.a.createElement("main",{className:i.a.Content},r.a.createElement(H.a,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"\u0422\u04af\u0440 \u0445\u04af\u043b\u044d\u044d\u043d\u044d \u04af\u04af")},t.state.userId?r.a.createElement(T.d,null,r.a.createElement(T.b,{path:"/logout",component:W}),r.a.createElement(T.b,{path:"/orders"},r.a.createElement(F.a,null,r.a.createElement(q,null))),r.a.createElement(T.b,{path:"/ship",component:U}),r.a.createElement(T.b,{path:"/",component:J})):r.a.createElement(T.d,null,r.a.createElement(T.b,{path:"/signup",component:Q}),r.a.createElement(T.b,{path:"/login",component:R}),r.a.createElement(T.a,{to:"/login"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b.a,null,r.a.createElement(y.a,null,r.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[55,1,2]]]);
//# sourceMappingURL=main.f66f26d2.chunk.js.map