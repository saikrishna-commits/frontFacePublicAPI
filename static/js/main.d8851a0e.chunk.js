(this.webpackJsonpgeneral=this.webpackJsonpgeneral||[]).push([[0],{257:function(e,a,t){e.exports=t(446)},262:function(e,a,t){},446:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),o=(t(262),t(17)),i=t(14),s=t(193),u=t(3),m=t(527),p=t(545),d=t(556),E=t(552),g=t(546),h=t(547),f=t(76),b=t(549),v=t(532),y=t(548),w=t(550),j=t(551),x=t(212),O=t(544),C=t(209),k=t.n(C),S=t(211),N=t.n(S),B=t(210),F=t.n(B),I=t(447),T=t(523),q=t(524),z=t(195),D=t.n(z),H=t(196),W=t.n(H),A=t(197),_=t.n(A),P=t(198),K=t.n(P),L=t(199),M=t.n(L),Q=t(47),R=function(){var e=Object(Q.f)();return r.a.createElement("div",null,r.a.createElement(I.a,{button:!0,onClick:function(){return e.push("/corona-timeseries")}},r.a.createElement(T.a,null,r.a.createElement(D.a,null)),r.a.createElement(q.a,{primary:"Feature1"})),r.a.createElement(I.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(W.a,null)),r.a.createElement(q.a,{primary:"Feature2"})),r.a.createElement(I.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(_.a,null)),r.a.createElement(q.a,{primary:"Feature3"})),r.a.createElement(I.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(K.a,null)),r.a.createElement(q.a,{primary:"Feature4"})),r.a.createElement(I.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(M.a,null)),r.a.createElement(q.a,{primary:"Feature5"})))},G=(r.a.createElement("div",null),t(73)),J=t.n(G),Y=t(18),U=t(103),V=t(558),X=t(528),$=t(557),Z=t(559),ee=t(537),ae=t(449),te=t(530),ne=t(453),re=t(448),le=t(455),ce=t(554),oe=t(560),ie=t(531),se=t(450),ue=t(534),me=t(536),pe=t(535),de=t(533),Ee=t(5),ge=t(539),he=t(541),fe=t(525),be=t(538),ve=t(540),ye=t(526),we=t(542),je=function(e){return e.sort((function(){return Math.random()-.5}))},xe=Object(Ee.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(fe.a),Oe=Object(Ee.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(ye.a),Ce=function(e){return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}})},ke=Object(m.a)((function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},selectionContainer:{display:"flex",justifyContent:"space-around"},correctAnswer:{color:"green"},table:{maxHeight:"100px"}}}));function Se(){var e=ke(),a=r.a.useState(0),t=Object(o.a)(a,2),l=t[0],c=t[1],i=["Choose Quiz Type","Quiz"],s=r.a.useState(10),u=Object(o.a)(s,2),m=u[0],p=u[1],d=r.a.useState("multiple"),E=Object(o.a)(d,2),g=E[0],h=E[1],b=r.a.useState("easy"),v=Object(o.a)(b,2),y=v[0],w=v[1],j=r.a.useState([]),O=Object(o.a)(j,2),C=O[0],k=O[1],S=r.a.useState(!1),N=Object(o.a)(S,2),B=N[0],F=N[1],I=r.a.useState(0),T=Object(o.a)(I,2),q=T[0],z=T[1],D=r.a.useState(""),H=Object(o.a)(D,2),W=H[0],A=H[1];Object(n.useEffect)((function(){function e(){return(e=Object(U.a)(J.a.mark((function e(){var a,t,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,F(!0),e.next=4,fetch("https://opentdb.com/api.php?amount=".concat(m,"&difficulty=").concat(y,"&type=").concat(g));case 4:return a=e.sent,e.next=7,a.json();case 7:t=e.sent,n=t.results.map((function(e){return{question:e.question,options:je([e.correct_answer].concat(Object(Y.a)(e.incorrect_answers))),correctAnswer:e.correct_answer}})),k(n),F(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),F(!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[g,y,m]);var _=function(){c((function(e){return e+1}))},P=function(){k([]),c((function(e){return e-1}))},K=function(e){p(e.target.value)},L=function(e){h(e.target.value)},M=function(e){w(e.target.value)},Q=function(){C[q].correctAnswer;var e=C.length;q<e&&z(q+1)},R=function(e){A(e.target.value)};return r.a.createElement("div",{className:e.root},r.a.createElement(V.a,{activeStep:l,orientation:"vertical"},i.map((function(a,t){return r.a.createElement(X.a,{key:a},r.a.createElement($.a,null,a),r.a.createElement(Z.a,null,0===t&&r.a.createElement("div",{className:e.selectionContainer},r.a.createElement("div",null,r.a.createElement(re.a,{required:!0,className:e.formControl},r.a.createElement(ae.a,{id:"demo-simple-select-helper-label"}," Questions "),r.a.createElement(le.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:m,onChange:K},r.a.createElement(te.a,{value:10},"Ten"),r.a.createElement(te.a,{value:20},"Twenty"),r.a.createElement(te.a,{value:30},"Thirty"),r.a.createElement(te.a,{value:40},"Forty"),r.a.createElement(te.a,{value:50},"Fifty")),r.a.createElement(ne.a,null,"no of questions to play"))),r.a.createElement("div",null,r.a.createElement(se.a,{component:"legend"},"Answer Type"),r.a.createElement(oe.a,{"aria-label":"gender",name:"gender1",value:g,onChange:L},r.a.createElement(ie.a,{value:"multiple",control:r.a.createElement(ce.a,null),label:"Multiple Choice (Pick One)"}),r.a.createElement(ie.a,{value:"boolean",control:r.a.createElement(ce.a,null),label:"True /False"}))),r.a.createElement("div",null,r.a.createElement(se.a,{component:"legend"},"Difficulty"),r.a.createElement(oe.a,{"aria-label":"difficulty",name:"difficulty",value:y,onChange:M},r.a.createElement(ie.a,{value:"easy",control:r.a.createElement(ce.a,null),label:"Easy"}),r.a.createElement(ie.a,{value:"medium",control:r.a.createElement(ce.a,null),label:"Medium"}),r.a.createElement(ie.a,{value:"hard",control:r.a.createElement(ce.a,null),label:"Hard"}))))," ",1===t&&r.a.createElement("div",null,B&&r.a.createElement(de.a,null),r.a.createElement(ue.a,null,r.a.createElement(de.a,{variant:"static",value:Number(100*(q+1)/C.length)}),r.a.createElement(pe.a,null,C.length>0&&r.a.createElement("div",null,q+1,r.a.createElement(f.a,{className:e.title,color:"textSecondary",gutterBottom:!0},Ce(C[q].question)),r.a.createElement(oe.a,{"aria-label":"gender",name:"gender1",value:W,onChange:R},C[q].options.map((function(e){return r.a.createElement(ie.a,{key:e,value:e,control:r.a.createElement(ce.a,null),label:e})}))))),r.a.createElement(me.a,null,q===C.length-1?r.a.createElement(ee.a,{size:"small"},"Done"):r.a.createElement(ee.a,{size:"small",onClick:Q},"Next")))),r.a.createElement("div",{className:e.actionsContainer},r.a.createElement("div",null,r.a.createElement(ee.a,{disabled:0===l,onClick:P,className:e.button},"Back"),r.a.createElement(ee.a,{variant:"contained",color:"primary",onClick:_,className:e.button},l===i.length-1?"Finish":"Next")))))}))),l===i.length&&r.a.createElement(x.a,{square:!0,elevation:0,className:e.resetContainer},r.a.createElement(f.a,null," you're finished , View results "),r.a.createElement(be.a,{component:x.a},r.a.createElement(ge.a,{className:e.table,"aria-label":"customized table"},r.a.createElement(ve.a,null,r.a.createElement(ye.a,null,r.a.createElement(xe,null,"Question"),r.a.createElement(xe,{align:"right"},"Status"),r.a.createElement(xe,{align:"right"},"Correct"))),r.a.createElement(he.a,null,C.map((function(e){return r.a.createElement(Oe,{key:e.question},r.a.createElement(xe,{component:"th",scope:"row"},r.a.createElement(f.a,null,Ce(e.question))),r.a.createElement(xe,{align:"right"},r.a.createElement(we.a,{style:{color:"green"}},"highlight_off")),r.a.createElement(xe,{align:"right"},e.correctAnswer))}))))),r.a.createElement(ee.a,{onClick:function(){z(0),p(0),c(0)},className:e.button},"Reset")))}var Ne=t(34),Be=t(543),Fe=t(553),Ie="https://pomber.github.io/covid19/timeseries.json",Te=function(){var e=Object(n.useState)({}),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!0),i=Object(o.a)(c,2),s=i[0],u=i[1],m=Object(n.useState)("US"),p=Object(o.a)(m,2),d=p[0],E=p[1];Object(n.useEffect)((function(){function e(){return(e=Object(U.a)(J.a.mark((function e(){var a,t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(Ie);case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,l(t),u(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var g,h=Object.keys(t).map((function(e){return{title:e}}));return r.a.createElement("div",null,s&&r.a.createElement("p",null,"Wait I'm Loading comments for you"),r.a.createElement(Fe.a,{id:"combo-box-demo",options:h,getOptionLabel:function(e){return e.title},style:{width:300},onChange:function(e,a){a&&E(a.title)},renderInput:function(e){return r.a.createElement(Be.a,Object.assign({},e,{label:"Choose A Country",variant:"outlined"}))}}),d&&t[d]&&r.a.createElement("div",null," ",t[d].slice(-1)[0].recovered),r.a.createElement("br",null),d&&t[d]&&(g=t[d],r.a.createElement(Ne.d,{width:1080,height:400,data:g,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(Ne.a,{strokeDasharray:"3 3"}),r.a.createElement(Ne.f,{dataKey:"date"}),r.a.createElement(Ne.g,null),r.a.createElement(Ne.e,null),r.a.createElement(Ne.b,null),r.a.createElement(Ne.c,{type:"monotone",dataKey:"deaths",stroke:"#8884d8",activeDot:{r:8}}),r.a.createElement(Ne.c,{type:"monotone",dataKey:"recovered",stroke:"#82ca9d"}),r.a.createElement(Ne.c,{type:"monotone",dataKey:"confirmed",stroke:"#223344"}))))};function qe(){return r.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(O.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var ze=Object(m.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(i.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:"100%"}}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var De=t(99);c.a.render(r.a.createElement(De.a,null,"  ",r.a.createElement((function(){var e=ze(),a=r.a.useState(!1),t=Object(o.a)(a,2),n=t[0],l=t[1],c=Object(u.a)(e.paper,e.fixedHeight);return r.a.createElement(Q.c,null,r.a.createElement("div",{className:e.root},r.a.createElement(p.a,null),r.a.createElement(g.a,{position:"absolute",className:Object(u.a)(e.appBar,n&&e.appBarShift)},r.a.createElement(h.a,{className:e.toolbar},r.a.createElement(v.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},className:Object(u.a)(e.menuButton,n&&e.menuButtonHidden)},r.a.createElement(k.a,null)),r.a.createElement(f.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Dashboard"),r.a.createElement(v.a,{color:"inherit"},r.a.createElement(y.a,{badgeContent:4,color:"secondary"},r.a.createElement(F.a,null))))),r.a.createElement(d.a,{variant:"permanent",classes:{paper:Object(u.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(v.a,{onClick:function(){l(!1)}},r.a.createElement(N.a,null))),r.a.createElement(b.a,null),r.a.createElement(R,null),r.a.createElement(b.a,null)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(w.a,{maxWidth:"lg",className:e.container},r.a.createElement(j.a,{container:!0,spacing:3},r.a.createElement(j.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(x.a,{className:c},r.a.createElement(Q.a,{exact:!0,path:"/",component:Se}),r.a.createElement(Q.a,{path:"/corona-timeseries",component:function(){return r.a.createElement("div",null," ",r.a.createElement(Te,null))}})))),r.a.createElement(E.a,{pt:4},r.a.createElement(qe,null))))))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[257,1,2]]]);
//# sourceMappingURL=main.d8851a0e.chunk.js.map