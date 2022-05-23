(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"title":"hello ! I\'m elahe","subtitle":"Frent-end Developer ","links":{"github":"https://github.com/elahekaramzade","stackoverflow":"https://stackoverflow.com/users/8633422/elahe-karamzade","linkedin":"https://www.linkedin.com/in/elahe-karamzade-02288168/"},"sections":[{"title":"About","items":[{"type":"p","content":"Front-end developer with proven experience in javascript frameworks such as vue and react, angularjs as well. Looking forward to improving my abilities in new techs and also being open to new experiences. I started coding in 2016. I chose to be a front-end developer as it is combining art and logic. I used to painting and playing game board in my spare time:)"}]},{"title":"Skills","items":[{"type":"card","content":{"image":"image/react.png","title":"React"}},{"type":"card","content":{"image":"image/vue.png","title":"Vue"}},{"type":"card","content":{"image":"image/javascript.png","title":"JavaScript"}},{"type":"card","content":{"image":"image/angularjs.png","title":"Angularjs"}},{"type":"card","content":{"image":"image/htmlcss.png","title":"Html/Css"}}]}],"icons":{"down":"image/down.png"}}')},24:function(e,t,n){e.exports=n(50)},29:function(e,t,n){},33:function(e,t,n){},42:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(8),c=n.n(i),r=(n(29),n(9)),o=n(10),s=n(4),m=n(12),u=n(11),d=n(22),p=n.n(d),g=n(1),h=(n(33),n(2)),v=function(e){return l.a.createElement("div",{className:"Navigation"},l.a.createElement("div",{className:"menu"},g.sections.map((function(e){return l.a.createElement(h.Link,{activeClass:"active",to:e.title,spy:!0,smooth:!0,offset:50,duration:500,delay:100},l.a.createElement("p",{style:{marginRight:"50px",cursor:"pointer"}},e.title))}))),l.a.createElement("div",{className:"magic",onClick:e.onClick},l.a.createElement("img",{src:"image/magic.png",alt:"",style:{width:"30px",margin:"10px",cursor:"pointer"}})))},E=(n(42),function(e){var t=e.children;return l.a.createElement("div",{className:"fullpage ".concat(e.className||"")},t)}),f=n(23),w=function(e){return l.a.createElement("div",{onClick:e.onClick,style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:"-34px",transform:"translateY(-45px)",cursor:"pointer"}},l.a.createElement("div",null,l.a.createElement("img",{src:e.icon,style:{maxWidth:"30px"},alt:""})))},k=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).changeColor=function(){e.setState({color:"white"===e.state.color?"yellow":"white"})},e.state={color:"white"},e.changeColor=e.changeColor.bind(Object(s.a)(e)),e}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement(h.Element,{name:"title",className:"element"},l.a.createElement(E,{className:"first"},l.a.createElement("div",null,l.a.createElement("h1",{className:"title",style:{color:this.state.color},onMouseOver:this.changeColor,onMouseLeave:this.changeColor},g.title)),l.a.createElement("div",null,l.a.createElement("h2",null," ",g.subtitle)),l.a.createElement("div",null,Object.keys(g.links).map((function(e){return l.a.createElement(f.SocialIcon,{className:"icon",url:g.links[e]})})))),l.a.createElement(h.Link,{activeClass:"active",to:"About",spy:!0,smooth:!0,offset:50,duration:500,delay:100},l.a.createElement(w,{icon:g.icons.down})))}}]),n}(a.Component),y=function(){return l.a.createElement(h.Element,{name:"About",className:"element"},l.a.createElement(E,{className:"second about-me"},l.a.createElement("h3",null,g.sections[0].title),l.a.createElement("div",null,l.a.createElement("p",null,g.sections[0].items[0].content))))},b=(n(48),function(e){var t=e.skill;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"image-wrapper"},l.a.createElement("img",{src:t.content.image,alt:"",width:"200px"})),l.a.createElement("div",{className:"skill-title-wrapper"},l.a.createElement("h4",null,t.content.title)))}),C=function(e){return l.a.createElement("div",{onClick:e.onClick,style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transform:"translateY(45px)",cursor:"pointer"}},l.a.createElement("div",null,l.a.createElement("img",{src:e.icon,style:{maxWidth:"30px",transform:"rotateX(180deg)"},alt:""})))},N=function(){return l.a.createElement(h.Element,{name:"Skills",className:"element"},l.a.createElement(E,{className:"third"},l.a.createElement("h3",null,g.sections[1].title),l.a.createElement("div",{className:"cards-wrapper"},g.sections[1].items.map((function(e){return l.a.createElement(b,{skill:e})}))),l.a.createElement(h.Link,{activeClass:"active",to:"title",spy:!0,smooth:!0,offset:50,duration:500,delay:100},l.a.createElement(C,{icon:g.icons.down}))))},x=(n(49),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).changeSnow=function(){e.setState({snow:!0!==e.state.snow})},e.state={snow:!0},e.changeSnow=e.changeSnow.bind(Object(s.a)(e)),e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},this.state.snow?l.a.createElement(p.a,null):"",l.a.createElement(v,{onClick:function(){e.changeSnow()}}),l.a.createElement(k,null),l.a.createElement(y,null),l.a.createElement(N,null))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.d7d69502.chunk.js.map