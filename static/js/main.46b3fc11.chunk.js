(window.webpackJsonpapp=window.webpackJsonpapp||[]).push([[0],{18:function(e,t,r){e.exports=r(35)},23:function(e,t,r){},24:function(e,t,r){},30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){},34:function(e,t,r){},35:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(6),l=r.n(c),i=(r(23),r(24),r(4)),o=r(5),s=(r(30),function(e){var t=e.idDrink,r=e.strDrink,n=e.strDrinkThumb;return a.a.createElement("li",{key:t},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card-image-wrapper"},a.a.createElement("img",{className:"card-image",alt:"strDrink",src:n})),a.a.createElement("p",{className:"card-text"},r)))}),u=(r(31),function(e){return a.a.createElement("div",{role:"loader",className:"loader"})}),p=(r(32),function(e){var t=e.drinks,r=e.isLoading;Object(o.a)(e,["drinks","isLoading"]);return a.a.createElement("div",{className:"drink-list-container"},r&&0===t.length&&a.a.createElement(u,null),t.length>0&&a.a.createElement("ul",{"data-testid":"drink-list",className:"drink-list"},t.map(s)))}),f=r(11),m=r(10),d=r.n(m),v=r(14),h=function(e){return{type:"RECIEVE_DRINKS",payload:e}},b=function(e){return{type:"REQUEST_DRINKS",query:e}};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var O=a.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),y=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),w=function(e){var t=e.svgRef,r=e.title,n=E(e,["svgRef","title"]);return a.a.createElement("svg",g({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),r?a.a.createElement("title",null,r):null,O,y)},j=a.a.forwardRef((function(e,t){return a.a.createElement(w,g({svgRef:t},e))}));r.p;function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var D=a.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),R=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),N=function(e){var t=e.svgRef,r=e.title,n=S(e,["svgRef","title"]);return a.a.createElement("svg",k({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),r?a.a.createElement("title",null,r):null,D,R)},L=a.a.forwardRef((function(e,t){return a.a.createElement(N,k({svgRef:t},e))}));r.p;function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var C=a.a.createElement("g",null,a.a.createElement("path",{d:"M103.4,40.3l36,52.4H66l167.7,199.5v198.2c-44.6,0.4-79.5,3.6-79.5,7.6c0,0.2,0.1,0.4,0.3,0.6h174.6   c0.2-0.2,0.3-0.4,0.3-0.6c0-4-34.9-7.2-79.5-7.6V292.3L417.6,92.8H157.2L115.6,32c-7.4-10.8-19.7-17.3-32.8-17.3H6v14.8h76.7   C91,29.5,98.7,33.5,103.4,40.3z M383.8,108.5l-28.4,33.8H191.2L168,108.5H383.8z M150.2,108.5l23.2,33.8h-26.5l104.3,124.1   l-9.3,11.1l-142-169H150.2z"}),a.a.createElement("path",{d:"M433,144.6c32.1,0,58.2-26.1,58.2-58.2c0-32.1-26.1-58.2-58.2-58.2c-31,0-56.3,24.3-58.1,54.8h-14.8   c1.8-38.7,33.8-69.5,72.9-69.5c40.2,0,73,32.7,73,73s-32.7,73-73,73c-17.1,0-32.8-5.9-45.2-15.8l9.5-11.3   C407.2,140,419.6,144.6,433,144.6z"})),I=function(e){var t=e.svgRef,r=e.title,n=P(e,["svgRef","title"]);return a.a.createElement("svg",x({id:"Layer_1",style:{enableBackground:"new 0 0 512 512"},viewBox:"0 0 512 512",xmlSpace:"preserve",ref:t},n),r?a.a.createElement("title",null,r):null,C)},z=a.a.forwardRef((function(e,t){return a.a.createElement(I,x({svgRef:t},e))})),M=(r.p,r(34),function(e){var t=e.hasContent,r=e.isLoading,c=(Object(o.a)(e,["hasContent","isLoading"]),Object(n.useState)("")),l=Object(f.a)(c,2),s=l[0],p=l[1],m=Object(n.useState)(!1),g=Object(f.a)(m,2),E=g[0],O=g[1],y=Object(i.b)();return a.a.createElement("div",{className:"search-container".concat(t||E?" top":" center")},a.a.createElement("div",{className:"logo-wrapper ".concat(t||E?" hide":"")},a.a.createElement(z,null),a.a.createElement("p",null,a.a.createElement("b",null,"Cocktail"),"Finder")),a.a.createElement("div",{className:"icon-wrapper start"},a.a.createElement(L,null)),a.a.createElement("label",{className:"hidden",htmlFor:"search-input","aria-label":"Search cocktail"},"Search cocktail"),a.a.createElement("input",{id:"search-input",name:"search-input",className:"search-input",placeholder:"Search your favorite cocktail",value:s,onChange:function(e){var t=e.target.value;p(t),y(function(e){return function(){var t=Object(v.a)(d.a.mark((function t(r){var n,a,c,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.length>=3)){t.next=20;break}return r(b(e)),t.prev=2,t.next=5,fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(e));case 5:return n=t.sent,t.next=8,n.json();case 8:return a=t.sent,c=a.drinks,l=c.map((function(e){var t=e.idDrink,r=e.strDrink,n=e.strDrinkThumb;Object(o.a)(e,["idDrink","strDrink","strDrinkThumb"]);return{idDrink:t,strDrink:r,strDrinkThumb:n}})),t.abrupt("return",r(h(l)));case 14:return t.prev=14,t.t0=t.catch(2),console.error(t.t0),t.abrupt("return",r(h([])));case 18:t.next=21;break;case 20:return t.abrupt("return",r(h([])));case 21:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e){return t.apply(this,arguments)}}()}(t))},onFocus:function(){return O(!0)},onBlur:function(e){0===s.length&&O(!1)}}),s.length>0&&!r&&a.a.createElement("div",{className:"icon-wrapper end"},a.a.createElement("button",{"data-testid":"clear",onClick:function(e){y({type:"CLEAR"}),p(""),O(!1)}},a.a.createElement(j,null))),t&&r&&a.a.createElement("div",{className:"loader-wrapper"},a.a.createElement(u,null)))}),H=function(e){var t=Object(i.c)((function(e){return e})),r=t.drinks,n=t.isLoading;return a.a.createElement("main",{className:"App"},a.a.createElement(M,{hasContent:r.length>0,isLoading:n}),a.a.createElement(p,{drinks:r,isLoading:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=r(3),T=r(15),_=r(16),K=r(17);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(r,!0).forEach((function(t){Object(K.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V={drinks:[],isLoading:!1},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_DRINKS":return F({},e,{isLoading:!0});case"RECIEVE_DRINKS":return F({},e,{drinks:t.payload,isLoading:!1});case"CLEAR":return V;default:return e}},J=Object(B.createStore)(W,Object(_.composeWithDevTools)(Object(B.applyMiddleware)(T.a)));l.a.render(a.a.createElement(i.a,{store:J},a.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.46b3fc11.chunk.js.map