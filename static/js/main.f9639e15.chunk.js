(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(e,t,a){e.exports=a(51)},37:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),i=a(15),o=(a(37),a(38),a(7)),m=a(73),u=a(19),p=a(52),E=a(53),s=a(54),d=a(55),g=a(56),b=a(57),h=a(58),v=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),l=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement(p.a,{color:"warning",light:!0,expand:"md"},r.a.createElement(E.a,{tag:i.b,to:"/"},"Tang So-Cute"),r.a.createElement(s.a,{onClick:function(){return c(!l)}}),r.a.createElement(d.a,{isOpen:l,navbar:!0},r.a.createElement(g.a,{className:"mr-auto",navbar:!0},r.a.createElement(b.a,null,r.a.createElement(h.a,{tag:i.b,to:"/about"},"\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e40\u0e23\u0e32")),r.a.createElement(b.a,null,r.a.createElement(h.a,{tag:i.b,to:"/contact"},"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e40\u0e23\u0e32")),r.a.createElement(b.a,null,r.a.createElement(h.a,{tag:i.b,to:"/products"},"\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"))),r.a.createElement(g.a,{className:"ml-auto",navbar:!0},r.a.createElement(b.a,null,r.a.createElement(h.a,{tag:i.b,to:"/profile"},"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e48\u0e27\u0e19\u0e15\u0e31\u0e27")),r.a.createElement(b.a,null,r.a.createElement(h.a,{tag:i.b,to:"/signin"},"\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a")),r.a.createElement(b.a,null,r.a.createElement(h.a,{tag:i.b,to:"/signup"},"\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01"))))))},f=a(9),j=a(10),O=a(12),y=a(11),k=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"\u0e2a\u0e48\u0e27\u0e19\u0e25\u0e48\u0e32\u0e07"))}}]),a}(n.Component),S=a(63),x=a(64),w=a(31),C=a(59),R=a(60),T=a(61),N=a(62),I=[{src:"/image/p7.jpg",altText:"Slide 1",caption:"Slide 1"},{src:"/image/p7.jpg",altText:"Slide 2",caption:"Slide 2"},{src:"/image/p7.jpg",altText:"Slide 3",caption:"Slide 3"}],H=function(e){var t=Object(n.useState)(0),a=Object(u.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(!1),o=Object(u.a)(i,2),m=o[0],p=o[1],E=function(){if(!m){var e=l===I.length-1?0:l+1;c(e)}},s=function(){if(!m){var e=0===l?I.length-1:l-1;c(e)}},d=I.map((function(e){return r.a.createElement(w.a,{onExiting:function(){return p(!0)},onExited:function(){return p(!1)},key:e.src},r.a.createElement("img",{src:e.src,alt:e.altText}),r.a.createElement(C.a,{captionText:e.caption,captionHeader:e.caption}))}));return r.a.createElement(R.a,{activeIndex:l,next:E,previous:s},r.a.createElement(T.a,{items:I,activeIndex:l,onClickHandler:function(e){m||c(e)}}),d,r.a.createElement(N.a,{direction:"prev",directionText:"Previous",onClickHandler:s}),r.a.createElement(N.a,{direction:"next",directionText:"Next",onClickHandler:E}))},M=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"\u0e2b\u0e19\u0e49\u0e32\u0e2b\u0e25\u0e31\u0e01"),r.a.createElement("h2",null," \u0e22\u0e34\u0e19\u0e14\u0e35\u0e15\u0e49\u0e2d\u0e19\u0e23\u0e31\u0e1a\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e49\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c"),r.a.createElement(S.a,{color:"primary"},"\u0e01\u0e14\u0e40\u0e25\u0e22\u0e2a\u0e34!"),r.a.createElement("hr",null),r.a.createElement(H,null),r.a.createElement(x.a,null,r.a.createElement("h1",{className:"display-3"},"\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e08\u0e48\u0e30!!"),r.a.createElement("p",{className:"lead"},"This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information."),r.a.createElement("hr",{className:"my-2"}),r.a.createElement("p",null,"It uses utility classes for typography and spacing to space content out within the larger container."),r.a.createElement("p",{className:"lead"},r.a.createElement(S.a,{color:"primary"},"Learn More"))))}}]),a}(n.Component),P=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e40\u0e23\u0e32 \u0e21\u0e32\u0e2a\u0e34!"),r.a.createElement("hr",null))}}]),a}(n.Component),J={products:[{id:1,name:"CPU",brand:"Intel",price:12500,rating:4.5,numStock:50,numReview:10,image:"image/p2.jpg"},{id:2,name:"RAM",brand:"corsair",price:3e3,rating:4.7,numStock:20,numReview:13,image:"image/p1.jpg"},{id:3,name:"Power Supply",brand:"corsair",price:24580,rating:4.7,numStock:20,numReview:13,image:"image/p3.jpg"},{id:4,name:"rtx-2080 Ti HOF",brand:"galax",price:24580,rating:4.7,numStock:20,numReview:13,image:"image/p4.jpg"},{id:5,name:"CORSAIR MP500 series M.2 SSDs ",brand:"corsair",price:24580,rating:4.7,numStock:20,numReview:13,image:"image/p5.jpg"},{id:6,name:"mainboard Z390",brand:"msi",price:3e3,rating:4.7,numStock:20,numReview:13,image:"image/p6.png"}]},L=a(65),A=a(66),B=a(67),W=a(68),D=a(69),F=a(70),U=a(71),Z=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e40\u0e23\u0e32"),J.products.map((function(e){return r.a.createElement("div",null,r.a.createElement(L.a,null,r.a.createElement(A.a,{md:3},r.a.createElement(B.a,null,r.a.createElement(W.a,{src:e.image}),r.a.createElement(D.a,null,r.a.createElement(F.a,null,e.name),r.a.createElement(U.a,null,e.brand),r.a.createElement(U.a,null,e.price),r.a.createElement(U.a,null,e.rating),r.a.createElement(U.a,null,e.numStock),r.a.createElement(U.a,null,e.numReview))))))})))}}]),a}(n.Component),$=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"))}}]),a}(n.Component),q=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S.a,{color:"primary"},"Loin")," ",r.a.createElement(S.a,{color:"primary"},"Loin"))}}]),a}(n.Component),z=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01"),r.a.createElement("hr",null))}}]),a}(n.Component),G=a(72),K=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"),r.a.createElement(L.a,null,J.products.map((function(e){return r.a.createElement(A.a,{sm:"3"},r.a.createElement(B.a,null,r.a.createElement(W.a,{src:e.image}),r.a.createElement(D.a,null,r.a.createElement(F.a,null,e.name),r.a.createElement(U.a,null,"\u0e23\u0e32\u0e04\u0e32",e.price,"\u0e1a\u0e32\u0e17"),r.a.createElement(F.a,null,"\u0e08\u0e33\u0e19\u0e27\u0e19",e.numStock),r.a.createElement(G.a,null,"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"),r.a.createElement(S.a,{color:"warning"},"\u0e01\u0e14\u0e0b\u0e37\u0e49\u0e2d\u0e44\u0e1b\u0e40\u0e25\u0e22\u0e2a\u0e34~!"))))}))))}}]),a}(n.Component);var Q=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(m.a,null,r.a.createElement(o.a,{exact:!0,path:"/",component:M}),r.a.createElement(o.a,{path:"/about",component:Z}),r.a.createElement(o.a,{path:"/contact",component:P}),r.a.createElement(o.a,{path:"/profile",component:$}),r.a.createElement(o.a,{path:"/signin",component:q}),r.a.createElement(o.a,{path:"/signup",component:z}),r.a.createElement(o.a,{path:"/products",component:K})),r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.f9639e15.chunk.js.map