(this["webpackJsonppoke-front"]=this["webpackJsonppoke-front"]||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},114:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(12),s=a.n(r),o=(a(85),a(7)),i=a(73),l=a(14),u=(a(86),a(23)),p=a(11),b=a.n(p),d=a(16),j=a(13),x=a.n(j),h=(a(107),a(156)),v=a(161),f=(a(108),a(2));function O(e){var t=Object(c.useState)(!1),a=Object(o.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(e.tab),i=Object(o.a)(s,2),l=i[0],u=i[1];return Object(c.useEffect)(Object(d.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("pokeKey"),e.prev=1,e.next=4,x.a.post("https://pokedextestapp.herokuapp.com/auth/check",{token:t});case 4:a=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return");case 11:a.data.logged&&r(!0);case 12:case"end":return e.stop()}}),e,null,[[1,7]])}))),[]),Object(f.jsx)("div",{className:"navbox",children:Object(f.jsx)(h.a,{position:"static",children:Object(f.jsxs)("div",{className:"navSpace",children:[Object(f.jsx)("div",{className:"navTitle",children:"My Pokedex"}),n?Object(f.jsxs)("div",{className:"logButton",children:[Object(f.jsx)("span",{className:"subTabs ".concat("home"===l?"activeTab":""),onClick:function(){e.setTab("home"),u("home")},children:"Home"}),Object(f.jsx)("span",{className:"subTabs ".concat("fav"===l?"activeTab":""),onClick:function(){e.setTab("fav"),u("fav")},children:"Favorites"}),Object(f.jsx)(v.a,{variant:"contained",onClick:function(){r(!1),localStorage.removeItem("pokeKey"),window.location.replace("https://pokedextestapp.herokuapp.com/")},children:"Logout"})]}):null]})})})}var k=a(70),m=a.n(k),g=a(160);a(114);function S(e){return Object(f.jsxs)("div",{className:"searchBox",children:[Object(f.jsx)("div",{className:"searchIcon",children:Object(f.jsx)(m.a,{})}),Object(f.jsx)(g.a,{onKeyDown:function(t){"Enter"===t.key&&e.request()},onChange:function(t){return e.setSearch(t.target.value)},className:"searchField",label:"Search Pokemon",value:e.search}),Object(f.jsx)(v.a,{onClick:e.request,variant:"contained",color:"primary",children:"Search"})]})}var w=a(71),y=a.n(w);a(117);function T(e){var t=e.data,a=Object(c.useState)(),n=Object(o.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)(),l=Object(o.a)(i,2),u=l[0],p=l[1],j=Object(c.useState)(),h=Object(o.a)(j,2),v=h[0],O=h[1],k=Object(c.useState)(!1),m=Object(o.a)(k,2),g=m[0],S=m[1],w=function(){var t=Object(d.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=localStorage.getItem("pokeKey"),!g){t.next=15;break}return t.prev=2,t.next=5,x.a.post("https://pokedextestapp.herokuapp.com/fav/delete",{token:a,name:u.name});case 5:t.sent,S(!1),t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(2),console.log(t.t0),t.abrupt("return");case 13:t.next=26;break;case 15:return t.prev=15,t.next=18,x.a.post("https://pokedextestapp.herokuapp.com/fav/add",{token:a,name:u.name});case 18:t.sent,S(!0),t.next=26;break;case 22:return t.prev=22,t.t1=t.catch(15),console.log(t.t1),t.abrupt("return");case 26:"fav"===e.tab&&e.flop(!e.flip);case 27:case"end":return t.stop()}}),t,null,[[2,9],[15,22]])})));return function(){return t.apply(this,arguments)}}(),T=Object(c.useState)(!1),N=Object(o.a)(T,2),I=N[0],E=N[1],P=function(){return E(!0)},K=Object(c.useState)(!1),L=Object(o.a)(K,2),B=L[0],D=L[1],A=function(){return D(!0)},H=function(){return D(!1)};return Object(c.useEffect)(Object(d.a)(b.a.mark((function e(){var a,c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.url){e.next=25;break}return e.prev=1,e.next=4,x.a.get(t.url);case 4:a=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return p(a.data),c=a.data.name,O(a.data.name[0].toUpperCase()+a.data.name.slice(1)),e.prev=13,e.next=16,x.a.get(a.data.forms[0].url);case 16:a=e.sent,e.next=22;break;case 19:e.prev=19,e.t1=e.catch(13),console.log(e.t1);case 22:s(a.data.sprites.front_default),e.next=29;break;case 25:p(t),O(t.name[0].toUpperCase()+t.name.slice(1)),s(t.sprites.front_default),c=t.name;case 29:return n=localStorage.getItem("pokeKey"),e.prev=30,e.next=33,x.a.post("https://pokedextestapp.herokuapp.com/fav/isFav",{token:n,name:c});case 33:a=e.sent,S(a.data.fav),e.next=41;break;case 37:return e.prev=37,e.t2=e.catch(30),console.log(e.t2),e.abrupt("return");case 41:case"end":return e.stop()}}),e,null,[[1,7],[13,19],[30,37]])}))),[t]),Object(f.jsxs)("div",{className:"pokeCard ".concat(B?"cardActive":""),children:[Object(f.jsx)(y.a,{className:"favStar ".concat(g?"active":""),onClick:w}),r?Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:r,onClick:P,onMouseEnter:A,onMouseLeave:H}),Object(f.jsx)("div",{className:"cardText",onClick:P,onMouseEnter:A,onMouseLeave:H,children:v}),Object(f.jsx)(C,{cardInfo:u,img:r,name:v,open:I,onClose:function(){return E(!1)}})]}):null]})}var N=a(163);a(118);function C(e){var t=e.cardInfo,a=e.open,n=e.onClose,r=e.img,s=e.name,o=t,i=function(e){return e[0].toUpperCase()+e.slice(1)},l=function(e,t){return"HP&ATT"===t?"HP: ".concat(e[0].base_stat," | Attack: ").concat(e[1].base_stat):"DEF&SPKA"===t?"Defense: ".concat(e[2].base_stat," | Sp. Atk: ").concat(e[3].base_stat):"SPKD&SPD"===t?"Sp. Def: ".concat(e[4].base_stat," | Speed: ").concat(e[5].base_stat):void 0};return Object(c.useEffect)((function(){o=e.cardInfo}),[t]),Object(f.jsx)(N.a,{onClose:n,open:a,children:Object(f.jsxs)("div",{className:"dialogBox",children:[Object(f.jsx)("img",{src:r}),Object(f.jsx)("div",{className:"cardText boldText",children:s}),Object(f.jsx)("div",{className:"cardText underlineText subText",children:"TYPE"}),Object(f.jsx)("div",{className:"cardText subText",children:function(e){var t="";return e.forEach((function(a){t+=i(a.type.name),a!=e[e.length-1]&&(t+=" | ")})),t}(o.types)}),Object(f.jsx)("div",{className:"cardText underlineText subText",children:"STATS"}),Object(f.jsx)("div",{className:"cardText subText",children:l(o.stats,"HP&ATT")}),Object(f.jsx)("div",{className:"cardText subText",children:l(o.stats,"DEF&SPKA")}),Object(f.jsx)("div",{className:"cardText subText",children:l(o.stats,"SPKD&SPD")}),Object(f.jsx)("div",{className:"cardText underlineText subText",children:"ABILITIES"}),Object(f.jsx)("div",{className:"cardText subText",children:function(e){var t="";return e.forEach((function(a){t+=i(a.ability.name),a!=e[e.length-1]&&(t+=" | ")})),t}(o.abilities)})]})})}a(119);function I(e){var t=Object(c.useState)(!0),a=Object(o.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),l=i[0],u=i[1],p=Object(c.useState)(""),j=Object(o.a)(p,2),h=j[0],O=j[1],k=Object(c.useState)(""),m=Object(o.a)(k,2),S=m[0],w=m[1],y=Object(c.useState)(""),T=Object(o.a)(y,2),N=T[0],C=T[1],I=Object(c.useState)(""),E=Object(o.a)(I,2),P=E[0],K=E[1],L=Object(c.useState)(!1),B=Object(o.a)(L,2),D=B[0],A=B[1],H=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A(!1),""!==l&&""!==h){e.next=4;break}return A(!0),e.abrupt("return");case 4:return e.prev=4,e.next=7,x.a.post("https://pokedextestapp.herokuapp.com/auth/login",{user:l,pass:h});case 7:t=e.sent,e.next=15;break;case 10:return e.prev=10,e.t0=e.catch(4),console.log(e.t0),A(!0),e.abrupt("return");case 15:console.log(t.data.token),localStorage.setItem("pokeKey",t.data.token),window.location.replace("https://pokedextestapp.herokuapp.com/pokedex");case 18:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}(),_=Object(c.useState)(!1),M=Object(o.a)(_,2),F=M[0],U=M[1],q=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(U(!1),""!==S&&""!==N&&N===P){e.next=5;break}return console.log(S,N,P),U(!0),e.abrupt("return");case 5:return e.prev=5,e.next=8,x.a.post("https://pokedextestapp.herokuapp.com/auth/register",{user:S,pass:N});case 8:e.sent,e.next=16;break;case 11:return e.prev=11,e.t0=e.catch(5),console.log(e.t0),U(!0),e.abrupt("return");case 16:G();case 17:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(){return e.apply(this,arguments)}}(),G=function(){r(!0),w(""),C(""),K(""),U(!1)};return Object(f.jsx)("div",{className:"onBoardBox",children:n?Object(f.jsxs)("div",{className:"onboardGrid",children:[Object(f.jsx)("span",{className:"onboardHeader",children:"Login"}),D?Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{style:{color:"red"},children:"Check inputs again. "}),Object(f.jsx)("div",{style:{height:"8px"}})]}):null,Object(f.jsx)(g.a,{label:"Username",variant:"outlined",value:l,onChange:function(e){return u(e.target.value)}}),Object(f.jsx)("div",{style:{height:"7px"}}),Object(f.jsx)(g.a,{label:"Password",variant:"outlined",value:h,onChange:function(e){return O(e.target.value)},type:"password"}),Object(f.jsx)("div",{style:{height:"7px"}}),Object(f.jsx)(v.a,{variant:"contained",color:"primary",onClick:H,children:"Login"}),Object(f.jsx)("div",{style:{height:"10px"}}),Object(f.jsx)("div",{className:"onboardLink onboardSmall",onClick:function(){r(!1),u(""),O(""),A(!1)},children:"Don't have account?"})]}):Object(f.jsxs)("div",{className:"onboardGrid",children:[Object(f.jsx)("span",{className:"onboardHeader",children:"Sign up"}),F?Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{style:{color:"red"},children:"Check inputs again. "}),Object(f.jsx)("div",{style:{height:"8px"}})]}):null,Object(f.jsx)(g.a,{label:"Username",variant:"outlined",value:S,onChange:function(e){return w(e.target.value)}}),Object(f.jsx)("div",{style:{height:"7px"}}),Object(f.jsx)(g.a,{label:"Password",variant:"outlined",value:N,onChange:function(e){return C(e.target.value)},type:"password"}),Object(f.jsx)("div",{style:{height:"7px"}}),Object(f.jsx)(g.a,{label:"Confirm Password",variant:"outlined",value:P,onChange:function(e){return K(e.target.value)},type:"password"}),Object(f.jsx)("div",{style:{height:"7px"}}),Object(f.jsx)(v.a,{variant:"contained",color:"primary",onClick:q,children:"Register"}),Object(f.jsx)("div",{style:{height:"10px"}}),Object(f.jsx)("div",{className:"onboardLink onboardSmall",onClick:G,children:"Have an account?"})]})})}function E(e){Object(c.useEffect)(Object(d.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("pokeKey"),e.prev=1,t||(t=""),e.next=5,x.a.post("https://pokedextestapp.herokuapp.com/auth/check",{token:t});case 5:a=e.sent,e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return");case 12:a.data.logged||window.location.replace("https://pokedextestapp.herokuapp.com/");case 13:case"end":return e.stop()}}),e,null,[[1,8]])}))),[]);var t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)([]),i=Object(o.a)(s,2),l=i[0],p=i[1],j=Object(c.useState)(""),h=Object(o.a)(j,2),v=h[0],O=h[1],k=Object(c.useState)(!1),m=Object(o.a)(k,2),g=m[0],w=m[1],y=function(){var t=Object(d.a)(b.a.mark((function t(a){var c,r,s,o,i,l;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("home"!==e.tab){t.next=28;break}if(""===n){t.next=15;break}return t.prev=2,t.next=5,x.a.get("https://pokeapi.co/api/v2/pokemon/".concat(n.toLowerCase(),"/"));case 5:c=t.sent,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.log(t.t0);case 11:O(""),p([c.data]),t.next=26;break;case 15:return t.prev=15,t.next=18,x.a.get("https://pokeapi.co/api/v2/pokemon/");case 18:c=t.sent,t.next=24;break;case 21:t.prev=21,t.t1=t.catch(15),console.log(t.t1);case 24:O(c.data.next),p(c.data.results);case 26:t.next=58;break;case 28:return r=localStorage.getItem("pokeKey"),t.prev=29,t.next=32,x.a.post("https://pokedextestapp.herokuapp.com/fav/all",{token:r});case 32:c=t.sent,t.next=38;break;case 35:t.prev=35,t.t2=t.catch(29),console.log(t.t2);case 38:s=c.data.favs,o=[],i=0;case 41:if(i==s.length){t.next=56;break}return l=void 0,t.prev=43,t.next=46,x.a.get("https://pokeapi.co/api/v2/pokemon/".concat(s[i].fav.toLowerCase(),"/"));case 46:l=t.sent,t.next=52;break;case 49:t.prev=49,t.t3=t.catch(43),console.log(t.t3);case 52:s[i].fav!==n.toLowerCase()&&""!==n||o.push(l.data);case 53:i++,t.next=41;break;case 56:O(""),p(o);case 58:case"end":return t.stop()}}),t,null,[[2,8],[15,21],[29,35],[43,49]])})));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=Object(d.a)(b.a.mark((function t(a){var c,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("home"!==e.tab){t.next=16;break}if(c=a.target,""!=v){t.next=4;break}return t.abrupt("return");case 4:if(c.scrollHeight-c.scrollTop!==c.clientHeight){t.next=16;break}return t.prev=5,t.next=8,x.a.get(v);case 8:n=t.sent,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),console.log(t.t0);case 14:O(n.data.next),p([].concat(Object(u.a)(l),Object(u.a)(n.data.results)));case 16:case"end":return t.stop()}}),t,null,[[5,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)(Object(d.a)(b.a.mark((function t(){var a,c,n,r,s,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("home"!==e.tab){t.next=14;break}return t.prev=1,t.next=4,x.a.get("https://pokeapi.co/api/v2/pokemon/");case 4:a=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:O(a.data.next),p(a.data.results),t.next=44;break;case 14:return c=localStorage.getItem("pokeKey"),t.prev=15,t.next=18,x.a.post("https://pokedextestapp.herokuapp.com/fav/all",{token:c});case 18:a=t.sent,t.next=24;break;case 21:t.prev=21,t.t1=t.catch(15),console.log(t.t1);case 24:n=a.data.favs,r=[],s=0;case 27:if(s==n.length){t.next=42;break}return o=void 0,t.prev=29,t.next=32,x.a.get("https://pokeapi.co/api/v2/pokemon/".concat(n[s].fav.toLowerCase(),"/"));case 32:o=t.sent,t.next=38;break;case 35:t.prev=35,t.t2=t.catch(29),console.log(t.t2);case 38:r.push(o.data);case 39:s++,t.next=27;break;case 42:O(""),p(r);case 44:case"end":return t.stop()}}),t,null,[[1,7],[15,21],[29,35]])}))),[e.tab,g]),Object(f.jsx)("div",{className:"mainBody",children:Object(f.jsxs)("div",{className:"mainCenter",children:[Object(f.jsx)(S,{search:n,setSearch:r,request:y}),Object(f.jsx)("div",{className:"smartGrid",onScroll:N,children:l?l.map((function(t){return Object(f.jsx)(T,{data:t,flop:w,flip:g,tab:e.tab},t.url)})):null})]})})}a(120);var P=a.p+"static/media/ash.cc536fd5.jpg";function K(e){return Object(c.useEffect)(Object(d.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("pokeKey"),e.prev=1,e.next=4,x.a.post("https://pokedextestapp.herokuapp.com/auth/check",{token:t});case 4:a=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return");case 11:a.data.logged&&window.location.replace("https://pokedextestapp.herokuapp.com/pokedex");case 12:case"end":return e.stop()}}),e,null,[[1,7]])}))),[]),Object(f.jsxs)("div",{className:"entryBox",children:[Object(f.jsx)("div",{className:"split left",children:Object(f.jsx)("img",{className:"leftImage",src:P})}),Object(f.jsx)("div",{className:"split",children:Object(f.jsx)(I,{})})]})}function L(){var e=Object(c.useState)("home"),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(f.jsxs)("div",{className:"mainBody",children:[Object(f.jsx)(O,{setTab:n,tab:a}),Object(f.jsx)(i.a,{children:Object(f.jsx)("div",{children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{exact:!0,path:"/",component:K}),Object(f.jsx)(l.a,{exact:!0,path:"/pokedex",render:function(){return Object(f.jsx)(E,{tab:a})}})]})})})]})}s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root"))},85:function(e,t,a){},86:function(e,t,a){}},[[125,1,2]]]);
//# sourceMappingURL=main.618b7300.chunk.js.map