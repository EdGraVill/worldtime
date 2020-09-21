(this.webpackJsonpworldtime=this.webpackJsonpworldtime||[]).push([[0],{41:function(e,n,t){e.exports=t(55)},54:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n),t.d(n,"mapReducers",(function(){return ae})),t.d(n,"setupStore",(function(){return ue})),t.d(n,"StoreProvider",(function(){return le})),t.d(n,"getSearchInitialState",(function(){return T})),t.d(n,"searchActions",(function(){return F})),t.d(n,"searchReducerName",(function(){return L})),t.d(n,"searchReducer",(function(){return C})),t.d(n,"searchRootStateSelector",(function(){return D})),t.d(n,"suggestionsSelector",(function(){return H})),t.d(n,"isSearchFetching",(function(){return I})),t.d(n,"lastSearch",(function(){return M})),t.d(n,"fetchSuggestionsEffect",(function(){return A})),t.d(n,"searchSagas",(function(){return J})),t.d(n,"Search",(function(){return _})),t.d(n,"getTimeInitialState",(function(){return b})),t.d(n,"timeActions",(function(){return p})),t.d(n,"timeReducerName",(function(){return g})),t.d(n,"timeReducer",(function(){return h})),t.d(n,"fetchTimezoneEffect",(function(){return ee})),t.d(n,"setSearchEffect",(function(){return ne})),t.d(n,"timeSagas",(function(){return te})),t.d(n,"timeRootStateSelector",(function(){return K})),t.d(n,"timezoneListSelector",(function(){return V})),t.d(n,"homeTimezoneSelector",(function(){return q})),t.d(n,"selectedTimezoneSelector",(function(){return G})),t.d(n,"timezoneSelector",(function(){return Q})),t.d(n,"WorldTime",(function(){return on})),t.d(n,"HomeTimezone",(function(){return $e}));var r=t(0),c=t(25),o=t(5),i=t(6),a=t(16),u=t(18),l=t(24),s=function(e,n){return localStorage.setItem("".concat("@preservation","/").concat(e),JSON.stringify({value:n})),n};function f(e,n){var t=localStorage.getItem("".concat("@preservation","/").concat(e));return JSON.parse(t||'{ "value": null }').value||n||void 0}var m=parseFloat(getComputedStyle(document.documentElement).fontSize),d=function(){return new Date((new Date).toUTCString())},b=function(){return{home:f("time/home",null),isFetching:!1,list:f("time/list",[]),selected:f("time/selected",[])}},v=Object(a.b)({initialState:b(),name:"time",reducers:{fetchTimezone:function(e,n){e.isFetching=!0},fulfillTimezone:function(e,n){var t=n.payload;e.isFetching=!1,e.list=s("time/list",function(e,n,t){var r=e.reduce((function(e,n){return Object(l.a)(Object(l.a)({},e),{},Object(u.a)({},n[t],n))}),{});return n.forEach((function(e){r[e[t]]=e})),Object.values(r)}(e.list,t.timezone?[t]:[],"timezone"))},setHomeTimezone:function(e,n){var t=n.payload,r=e.selected.indexOf(t);r>=0&&e.home&&(e.selected[r]=e.home),e.home=s("time/home",t),e.selected=s("time/selected",e.selected)},switchTimezone:function(e,n){var t=n.payload,r=e.selected.indexOf(t);-1===r?e.selected.push(t):e.selected.splice(r,1),s("time/selected",e.selected)}}}),p=v.actions,g=v.name,h=v.reducer,j=t(10),O=t.n(j),w=t(14),E=t(29),x="https://worldtimeapi.org/api",S=function(){var e=Object(E.a)(O.a.mark((function e(){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/timezone"));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(E.a)(O.a.mark((function e(n){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/timezone/").concat(n));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),z=function(){var e=Object(E.a)(O.a.mark((function e(){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/ip"));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){return{isFetching:!1,lastSelection:null,suggestions:f("search/suggestions",[])}},k=Object(a.b)({initialState:T(),name:"search",reducers:{fetchSuggestions:function(e){e.isFetching=!0},fulfillSuggestions:function(e,n){var t=n.payload;e.isFetching=!1,e.suggestions=s("search/suggestions",t)},setLastSelection:function(e,n){var t=n.payload;e.lastSelection=t}}}),F=k.actions,L=k.name,C=k.reducer,N=t(15),D=function(e){return e.search||T()},H=Object(N.a)(D,(function(e){return e.suggestions})),I=Object(N.a)(D,(function(e){return e.isFetching})),M=Object(N.a)(D,(function(e){return e.lastSelection})),B=O.a.mark(A),R=O.a.mark(J);function A(){var e;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(w.a)(S);case 2:return e=n.sent,n.next=5,Object(w.b)(F.fulfillSuggestions(e));case 5:case"end":return n.stop()}}),B)}function J(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.e)(F.fetchSuggestions.type,A);case 2:case"end":return e.stop()}}),R)}var P=t(9),U=t(11);function X(){var e=Object(o.a)(["\n  border-radius: .5rem;\n  max-width: 15rem;\n  padding: .3rem .75rem;\n  width: 50%;\n\n  &:focus {\n    outline: none;\n  }\n"]);return X=function(){return e},e}var W=i.c.input(X()),_=function(){var e=Object(U.b)(),n=Object(U.c)(H),t="WorldTime_suggestionlist",c=r.useState(""),o=Object(P.a)(c,2),i=o[0],a=o[1];r.useEffect((function(){e(F.fetchSuggestions())}),[e]);var u=r.useCallback((function(e){a(e.currentTarget.value)}),[]),l=r.useCallback((function(t){"Enter"===t.key&&(n.indexOf(i)>=0&&e(F.setLastSelection(i)))}),[e,n,i]),s=r.useCallback((function(n){n.nativeEvent instanceof InputEvent||(e(F.setLastSelection(n.currentTarget.value)),setTimeout((function(){return a("")}),1e3))}),[e]);return r.createElement(r.Fragment,null,r.createElement(W,{list:t,onChange:u,onInputCapture:s,onKeyDown:l,placeholder:"Find timezone",value:i}),r.createElement("datalist",{id:t},n.map((function(e){return r.createElement("option",{key:e},e)}))))},K=function(e){return e.time||b()},V=Object(N.a)(K,(function(e){return e.list})),q=Object(N.a)(K,(function(e){var n=e.home;return e.list.find((function(e){return e.timezone===n}))||null})),G=Object(N.a)(K,(function(e){return e.selected})),Q=function(e){return Object(N.a)(K,(function(n){return n.list.find((function(n){return n.timezone===e}))||null}))},Y=O.a.mark(ee),Z=O.a.mark(ne),$=O.a.mark(te);function ee(e){var n,t;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload,r.next=3,Object(w.a)(y,n);case 3:return t=r.sent,r.next=6,Object(w.b)(p.fulfillTimezone(t));case 6:case"end":return r.stop()}}),Y)}function ne(e){var n,t,r;return O.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n=e.payload,c.next=3,Object(w.c)(G);case 3:return t=c.sent,c.next=6,Object(w.c)(q);case 6:if(r=c.sent,console.log(n),-1!==t.indexOf(n)||r.timezone===n){c.next=11;break}return c.next=11,Object(w.b)(p.switchTimezone(n));case 11:case"end":return c.stop()}}),Z)}function te(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.d)(p.fetchTimezone.type,ee);case 2:return e.next=4,Object(w.d)(F.setLastSelection.type,ne);case 4:case"end":return e.stop()}}),$)}var re,ce=t(38),oe=t(13),ie=t(39),ae=(re={},Object(u.a)(re,g,h),Object(u.a)(re,L,C),re),ue=function(e){var n=Object(ie.a)(),t=Object(a.a)({reducer:Object(oe.c)(ae),devTools:!1,middleware:[].concat(Object(ce.a)(Object(a.c)()),[n]),preloadedState:e});return n.run(te),n.run(J),t},le=function(e){var n=e.children,t=r.useMemo(ue,[]);return r.createElement(U.a,{store:t},n)},se=t(58);function fe(){var e=Object(o.a)(["\n    align-items: center;\n    background-color: #e74c3c33;\n    border-bottom: .5rem solid #e74c3c;\n    border-left: 1px solid #e74c3c;\n    border-radius: .5rem;\n    border-right: 1px solid #e74c3c;\n    border-top: .5rem solid #e74c3c;\n    ","\n    cursor: grab;\n    display: flex;\n    flex-flow: column nowrap;\n    height: ","rem;\n    position: absolute;\n    top: -1rem;\n    width: calc(2.5rem + ","px);\n\n    &:active {\n      cursor: grabbing;\n    }\n\n    & > span {\n      font-size: .6rem;\n      margin-bottom: 5.3rem;\n    }\n  "]);return fe=function(){return e},e}function me(){var e=Object(o.a)(["\n  ","\n"]);return me=function(){return e},e}var de=i.c.div.attrs((function(e){var n=e.diff;return{style:{left:e.left-(n<0?n:0)}}}))(me(),(function(e){var n=e.amount,t=e.diff;return Object(i.b)(fe(),t<2.5*-m+2?"border: 0;":"",6*n-1,t<0?t:0)})),be=function(e){var n=e.localTime,t=r.useState(document.getElementsByClassName("worldtime-graph")[0]),c=Object(P.a)(t,2),o=c[0],i=c[1],a=Object(U.c)(G),u=r.useMemo((function(){return(null===o||void 0===o?void 0:o.offsetLeft)-m/4+n.getHours()*m*2||0}),[o,n]),l=r.useState(u),s=Object(P.a)(l,2),f=s[0],d=s[1],b=r.useState(0),v=Object(P.a)(b,2),p=v[0],g=v[1],h=r.useState(0),j=Object(P.a)(h,2),O=j[0],w=j[1],E=r.useState(0),x=Object(P.a)(E,2),S=x[0],y=x[1];r.useEffect((function(){if(o){var e=function(e){var n=e.currentTarget;g(n.scrollLeft)};return o.addEventListener("scroll",e),function(){o.removeEventListener("scroll",e)}}setTimeout((function(){i(document.getElementsByClassName("worldtime-graph")[0])}),10)}),[o,u]),r.useEffect((function(){d(u)}),[u]);var z=r.useCallback((function(e){var n=e.pageX,t=0,r=function(e){y(e.pageX-n),t=e.pageX-n},c=function e(){window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",e),w(O+t),y(0)};window.addEventListener("mousemove",r),window.addEventListener("mouseup",c),window.addEventListener("mouseleave",c)}),[O]);if(r.useEffect((function(){o&&0!==f&&f-o.offsetLeft+4+O<0&&w(-(f-o.offsetLeft+4)),0!==f&&O>=23*m*2-(f-o.offsetLeft+4)&&w(23*m*2-(f-o.offsetLeft+4))}),[o,O,f]),0===f)return null;var T=O+S+f-p,k=((T+p-m-4)/(2*m)-12).toFixed(2).split("."),F=Object(P.a)(k,2),L=F[0],C=F[1];return r.createElement(de,{amount:a.length+1,diff:T-o.offsetLeft+4,left:T,onDoubleClick:function(){return w(0)},onMouseDown:z},r.createElement("span",null,(Number(L)/100).toFixed(2).split(".")[1],":",(60*Number(C)/1e4).toFixed(2).split(".")[1]))},ve=t(57);function pe(){var e=Object(o.a)(["\n  color: #777;\n  font-size: .7rem;\n"]);return pe=function(){return e},e}function ge(){var e=Object(o.a)(["\n  align-items: flex-end;\n  display: flex;\n  flex: 1;\n  flex-flow: column nowrap;\n  justify-content: center;\n"]);return ge=function(){return e},e}var he=i.c.div(ge()),je=i.c.div(pe()),Oe=function(e){var n=e.timezone,t=r.useState(Object(se.a)(d(),n)),c=Object(P.a)(t,2),o=c[0],i=c[1];r.useEffect((function(){i(Object(se.a)(d(),n))}),[n]),r.useEffect((function(){var e=setInterval((function(){i(Object(se.a)(d(),n))}),1e3);return function(){clearInterval(e)}}),[n]);var a=Object(ve.a)(o,"PP' | 'HH:mm:ss' | 'iiii").split(" | "),u=Object(P.a)(a,3),l=u[0],s=u[1],f=u[2],m=s.split(":"),b=Object(P.a)(m,3),v=b[0],p=b[1],g=b[2],h=1&Number(g)?":":" ";return r.createElement(he,null,r.createElement("span",null,v,h,p,h,g),r.createElement(je,null,l),r.createElement(je,null,f))},we=t(59),Ee=t(60),xe=t(56);function Se(){var e=Object(o.a)(["\n      align-items: center;\n      background: ",";\n      color: ",";\n      display: flex;\n      flex-flow: column nowrap;\n      justify-content: center;\n      min-width: ",";\n      ","\n      ","\n\n      border-radius: "," "," "," ",";\n\n      &::before {\n        content: '","';\n        font-size: ",";\n      }\n\n      &::after {\n        content: '","';\n        font-size: .6rem;\n        margin: .2rem 0;\n      }\n    "]);return Se=function(){return e},e}function ye(){var e=Object(o.a)(["\n  ","\n"]);return ye=function(){return e},e}function ze(){var e=Object(o.a)(["\n  align-items: stretch;\n  display: flex;\n  flex-flow: row nowrap;\n  height: 100%;\n  width: auto;\n"]);return ze=function(){return e},e}function Te(){var e=Object(o.a)(["\n  flex: 6;\n  margin-left: 2rem;\n  margin-right: .5rem;\n  max-width: 48rem;\n  overflow: overlay;\n"]);return Te=function(){return e},e}var ke=i.c.div(Te()),Fe=i.c.div(ze()),Le=i.c.div(ye(),(function(e){var n=e.date,t=e.hour,r=e.isDST,c=Object(ve.a)(n,"d MMM").split(" "),o=Object(P.a)(c,2),a=o[0],u=o[1];return Object(i.b)(Se(),function(e){return e>=21||e<=5?"#34495e":e>=18||e<=7?"#DBEDFF":"white"}(r?t-1:t),function(e){return e>=21||e<=5?"white":"black"}(r?t-1:t),0===t||23===t?"1.9rem":"2rem",0===t?"margin-left: .1rem;":"",23===t?"margin-right: .1rem;":"",0===t?".7rem":0,23===t?".7rem":0,23===t?".7rem":0,0===t?".7rem":0,0===t?a:t,0===t?".6rem":".8rem",0===t?u:"hrs")})),Ce=function(e){var n=e.isDST,t=e.timezone,c=Object(U.c)(q),o=Object(se.a)(d(),t),i=Object(se.a)(d(),c.timezone),a=r.useMemo((function(){return Object(we.a)(o,i)}),[o,i]);return r.createElement(ke,{className:"worldtime-graph"},r.createElement(Fe,null,Array(24).fill(null).map((function(e,t){var c=t+Math.round(a/60),i=c%24,u=i>=0?i:24+i;return r.createElement(Le,{date:Object(Ee.a)(Object(xe.a)(o,c),a),hour:u,isDST:n,key:t})}))))};function Ne(){var e=Object(o.a)(["\n  color: #777;\n  font-size: .7rem;\n  margin-bottom: .3rem;\n\n  & > span {\n    background-color: #aaa;\n    border-radius: .25rem;\n    color: white;\n    font-size: .6rem;\n    margin: 0 0 0 .5rem;\n    padding: .2rem;\n  }\n"]);return Ne=function(){return e},e}function De(){var e=Object(o.a)(["\n  align-items: flex-start;\n  display: flex;\n  flex: 1.5;\n  flex-flow: column nowrap;\n  justify-content: center;\n"]);return De=function(){return e},e}var He=i.c.div(De()),Ie=i.c.span(Ne()),Me=function(e){var n=e.children,t=e.isDST,c=n.replace("/","-").replace(/_/g," ").split("-"),o=Object(P.a)(c,2),i=o[0],a=o[1];return r.createElement(He,null,r.createElement(Ie,null,i,t&&r.createElement("span",null,"DST")),r.createElement("span",null,a))};function Be(){var e=Object(o.a)(["\n    border: 0;\n    border-radius: .5rem;\n    color: #999;\n    cursor: pointer;\n    height: 1.5rem;\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n    width: 1.5rem;\n\n    &:hover {\n      background-color: ","56;\n      color: ",";\n    }\n\n    &:active, &:focus {\n      outline: none;\n    }\n  "]);return Be=function(){return e},e}function Re(){var e=Object(o.a)(["\n  ","\n"]);return Re=function(){return e},e}function Ae(){var e=Object(o.a)(["\n  align-items: center;\n  background: linear-gradient(-45deg, #f39c12, #f1c40f);\n  border-radius: 50%;\n  color: white;\n  display: flex;\n  height: 2rem;\n  justify-content: center;\n  width: 2rem;\n"]);return Ae=function(){return e},e}function Je(){var e=Object(o.a)(["\n  align-items: center;\n  background-color: #e0e0e0;\n  border: 0;\n  border-radius: 50%;\n  color: #999;\n  display: flex;\n  font-size: 1.2rem;\n  font-weight: bold;\n  height: 4rem;\n  justify-content: center;\n  width: 4rem;\n"]);return Je=function(){return e},e}function Pe(){var e=Object(o.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  width: 6rem;\n"]);return Pe=function(){return e},e}function Ue(){var e=Object(o.a)(["\n  align-items: center;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-around;\n  width: 2rem;\n"]);return Ue=function(){return e},e}function Xe(){var e=Object(o.a)(["\n  align-items: stretch;\n  display: flex;\n  flex-flow: row nowrap;\n  margin: 2rem 0;\n"]);return Xe=function(){return e},e}var We=i.c.div(Xe()),_e=i.c.div(Ue()),Ke=i.c.div(Pe()),Ve=i.c.div(Je()),qe=i.c.i(Ae()),Ge=i.c.button(Re(),(function(e){var n=e.color;return Object(i.b)(Be(),n,n)})),Qe=function(e){var n=e.isHome,t=e.timezone,c=Object(U.b)(),o=Object(U.c)(Q(t));r.useEffect((function(){o||c(p.fetchTimezone(t))}),[o,c,t]);var i=r.useCallback((function(){c(p.switchTimezone(t))}),[c,t]),a=r.useCallback((function(){c(p.setHomeTimezone(t))}),[c,t]);return r.createElement(We,null,r.createElement(_e,null,n?r.createElement(qe,{className:"icon-home"}):r.createElement(Ge,{color:"#f1c40f",onClick:a},r.createElement("i",{className:"icon-home"})),!n&&r.createElement(Ge,{color:"#e74c3c",onClick:i},r.createElement("i",{className:"icon-remove"}))),r.createElement(Ke,null,r.createElement(Ve,null,null===o||void 0===o?void 0:o.abbreviation)),r.createElement(Me,{isDST:null===o||void 0===o?void 0:o.dst},t),r.createElement(Oe,{timezone:t}),r.createElement(Ce,{isDST:null===o||void 0===o?void 0:o.dst,timezone:t}))};function Ye(){var e=Object(o.a)(["\n  position: relative;\n"]);return Ye=function(){return e},e}var Ze=i.c.div(Ye()),$e=function(){var e=Object(U.b)(),n=Object(U.c)(q),t=r.useState(new Date),c=Object(P.a)(t,2),o=c[0],i=c[1];return r.useEffect((function(){n?setTimeout((function(){document.getElementsByClassName("worldtime-graph")[0].scrollTo({behavior:"auto",left:o.getHours()*m*2}),document.getElementsByClassName("worldtime-graph")[0].dispatchEvent(new Event("scroll"))}),10):z().then((function(n){e(p.fulfillTimezone(n)),e(p.setHomeTimezone(n.timezone))}))}),[e,n,o]),r.useEffect((function(){n&&i(Object(se.a)(d(),n.timezone))}),[n]),n?r.createElement(Ze,null,r.createElement(Qe,{isHome:!0,timezone:n.timezone}),r.createElement(be,{localTime:o})):r.createElement("div",null,"Loading")},en=(t(54),function(){var e=Object(U.c)(G),n=Object(U.c)(V);return r.useEffect((function(){!function(){var e=document.getElementsByClassName("worldtime-graph");Array.from(e).forEach((function(e,n,t){e.addEventListener("scroll",(function(e){t.forEach((function(t,r){r!==n&&(t.scrollLeft=e.currentTarget.scrollLeft)}))}))}))}()}),[e,n]),r.createElement(r.Fragment,null,e.map((function(e){return e&&r.createElement(Qe,{key:e,timezone:e})})))});function nn(){var e=Object(o.a)(["\n  overflow: hidden;\n"]);return nn=function(){return e},e}function tn(){var e=Object(o.a)(["\n  background-color: #FFFFFF;\n  border-radius: 1rem;\n  box-sizing: border-box;\n  padding: 2rem 3rem;\n  width: 100%;\n\n  & * {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    user-select: none;\n  }\n"]);return tn=function(){return e},e}var rn=i.c.div(tn()),cn=i.c.div(nn()),on=function(){return r.createElement(le,null,r.createElement(rn,null,r.createElement(_,null),r.createElement(cn,null,r.createElement($e,null),r.createElement(en,null))))};function an(){var e=Object(o.a)(["\n  align-items: center;\n  background: linear-gradient(-45deg, orangered, deeppink);\n  box-sizing: border-box;\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  padding: 10%;\n  width: 100vw;\n"]);return an=function(){return e},e}function un(){var e=Object(o.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n  }\n"]);return un=function(){return e},e}var ln=Object(i.a)(un()),sn=i.c.div(an()),fn=function(){return r.createElement(r.Fragment,null,r.createElement(ln,null),r.createElement(sn,null,r.createElement(on,null)))};globalThis.testView=function(){Object(c.render)(r.createElement(r.StrictMode,null,r.createElement(fn,null)),document.getElementById("root"))};n.default=on}},[[41,1,2]]]);
//# sourceMappingURL=main.4085259c.chunk.js.map