(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{18:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(10),i=n.n(o),s=n(13),b=(n(18),n(3)),u=n(5),d=n(6),r=n(1);function l(t){var e=t.choiceDenomination,n=t.isChoiceWindow;return Object(r.jsxs)("div",{className:"choiceWindow ".concat(n?"choiceWindow_open":""),children:[Object(r.jsx)("p",{className:"choiceWindow__text",children:"\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0440\u0438\u0435\u043d\u0442 \u043a\u0443\u043f\u044e\u0440"}),Object(r.jsxs)("ul",{className:"choiceWindow__allOptions",onClick:e,children:[Object(r.jsx)("li",{className:"choiceWindow__option",children:"1"}),Object(r.jsx)("li",{className:"choiceWindow__option",children:"2"}),Object(r.jsx)("li",{className:"choiceWindow__option",children:"3"}),Object(r.jsx)("li",{className:"choiceWindow__option",children:"4"}),Object(r.jsx)("li",{className:"choiceWindow__option",children:"5"}),Object(r.jsx)("li",{className:"choiceWindow__option",children:"6"})]})]})}var j,m,p=/[^\d,]/,_={1:{5e3:100,2e3:400,1e3:1e3,500:3e3,200:5e3,100:8e3,50:1e4},2:{5e3:476,2e3:345,1e3:6741,500:4362,200:234,100:1643,50:3450},3:{5e3:234,2e3:678,1e3:845,500:2451,200:9654,100:2345,50:234},4:{5e3:546,2e3:562,1e3:2543,500:4365,200:2154,100:124,50:342},5:{5e3:2732,2e3:347,1e3:479,500:7556,200:3296,100:1257,50:3854},6:{5e3:73,2e3:147,1e3:279,500:356,200:696,100:857,50:854}};function h(t){var e=t.choiceCollectionDenominations,n=t.isNampad,a=t.amount,o=t.setAmount,i=t.onClickWithdraw,s=t.outstandingBalance,u=t.issuedBanknotes,d=c.a.useState(""),l=Object(b.a)(d,2),j=l[0],m=l[1],_=c.a.useState(!1),h=Object(b.a)(_,2),O=h[0],x=h[1];function y(){(function(){for(var t=0,e=0;e<a.length;e++)","!==a[e]&&","!==a[0]||(t+=1);return t})()>1?alert("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430"):i()}return c.a.useEffect((function(){function t(t){"Enter"===t.key&&y()}return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}})),Object(r.jsxs)("div",{className:"nampad ".concat(n?"nampad_open":""),children:[Object(r.jsx)("p",{className:"nampad__text ".concat(O?"nampad__text_open":""),children:j}),Object(r.jsx)("input",{className:"nampad__input",value:a,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u0441\u043d\u044f\u0442\u0438\u044f",type:"text",onChange:function(t){var e=t.target.value;o(e.replace(p,""))}}),Object(r.jsx)("input",{className:"nampad__input",value:"\u0412\u044b\u0434\u0430\u043d\u043e \u043a\u0443\u043f\u044e\u0440: ".concat(u),type:"text",disabled:!0}),Object(r.jsx)("input",{className:"nampad__input",value:"\u041d\u0435\u0432\u044b\u0434\u0430\u043d\u043d\u044b\u0439 \u043e\u0441\u0442\u0430\u0442\u043e\u043a: ".concat(s," \u0440\u0443\u0431."),type:"text",disabled:!0}),Object(r.jsxs)("div",{className:"nampad__keyboard",onClick:function(t){var e=t.target.textContent;o(a+=e)},children:[Object(r.jsx)("button",{type:"button",className:"nampad__keyboard-button",children:"1"}),Object(r.jsx)("button",{type:"button",className:"nampad__keyboard-button",children:"2"}),Object(r.jsx)("button",{type:"button",className:"nampad__keyboard-button",children:"3"}),Object(r.jsx)("button",{type:"button",className:"nampad__keyboard-button",children:"4"}),Object(r.jsx)("button",{type:"button",className:"nampad__keyboard-button",children:"5"}),Object(r.jsx)("button",{type:"button",className:"nampad__keyboard-button",children:"6"}),Object(r.jsx)("button",{type:"button",className:"nampad__keyboard-button",children:"7"}),Object(r.jsx)("button",{type:"button",className:"nampad__keyboard-button",children:"8"}),Object(r.jsx)("button",{type:"button",className:"nampad__keyboard-button",children:"9"}),Object(r.jsx)("button",{type:"button",className:"nampad__keyboard-button"}),Object(r.jsx)("button",{type:"button",className:"nampad__keyboard-button",children:"0"}),Object(r.jsx)("button",{type:"button",className:"nampad__keyboard-button",children:","})]}),Object(r.jsxs)("div",{className:"nampad__interaction",children:[Object(r.jsx)("button",{type:"button",className:"nampad__interaction-button",onClick:function(){o("")},children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(r.jsx)("button",{type:"button",className:"nampad__interaction-button",onClick:function(){var t="\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u043a\u0443\u043f\u044e\u0440: ";for(var n in e)t+="\u043d\u043e\u043c\u0438\u043d\u0430\u043b ".concat(n,"-").concat(e[n],"\u0448\u0442\u0443\u043a, ");""!==j?(m(""),x(!1)):(m(t),x(!0))},children:"\u0421\u043f\u0440\u0430\u0432\u043a\u0430"}),Object(r.jsx)("button",{type:"button",className:"nampad__interaction-button",onClick:function(){o(a.slice(0,-1))},children:"\u041a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u043a\u0430"}),Object(r.jsx)("button",{type:"button",className:"nampad__interaction-button",onClick:y,children:"\u0412\u044b\u0434\u0430\u0442\u044c"})]})]})}function O(){return Object.keys(j).reduce((function(t,e){return Object(d.a)(Object(d.a)({},t),{},Object(u.a)({},e,0))}),{})}function x(){var t=c.a.useState(""),e=Object(b.a)(t,2),n=e[0],a=e[1],o=c.a.useState(""),i=Object(b.a)(o,2),s=i[0],u=i[1],p=c.a.useState({}),x=Object(b.a)(p,2),y=x[0],N=x[1],f=c.a.useState(0),k=Object(b.a)(f,2),v=k[0],w=k[1],C=c.a.useState(!0),g=Object(b.a)(C,2),W=g[0],S=g[1],B=c.a.useState(!1),E=Object(b.a)(B,2),D=E[0],F=E[1],L=c.a.useState(0),A=Object(b.a)(L,2),I=A[0],J=A[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)(l,{choiceDenomination:function(t){var e=t.target.textContent;j=_[e],m=Math.min.apply(null,Object.keys(j)),S(!1),F(!0),N(O())},isChoiceWindow:W}),Object(r.jsx)(h,{isNampad:D,setAmount:a,amount:n,onClickWithdraw:function(){for(var t,e,c=n.split(",")[0],o=0,i=Object(d.a)({},y);c>=m;)Object.keys(j).forEach((function(e){s&&0===o&&e>=s||j[e]-y[e]!==0&&(c<e||(c-=e,t=e,i[e]=i[e]+1))})),o+=1;for(var b in u(t),N(O()),J(c%50),a(""),j)j[b]-=i[b];w((e=i,Object.values(e).reduce((function(t,e){return t+Number(e)}),0)))},outstandingBalance:I,issuedBanknotes:v,choiceCollectionDenominations:j})]})}var y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),o(t),i(t)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(s.a,{children:Object(r.jsx)(x,{})})}),document.getElementById("root")),y()}},[[28,1,2]]]);
//# sourceMappingURL=main.61d3e23f.chunk.js.map