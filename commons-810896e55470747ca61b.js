(self.webpackChunkflexible_gatsby=self.webpackChunkflexible_gatsby||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var u,c,l,s;if(Array.isArray(e)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!a.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((u=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!i(e[l[c]],a[l[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";var r,o,i,a,u=n(5697),c=n.n(u),l=n(4839),s=n.n(l),f=n(2993),p=n.n(f),d=n(7294),A=n(6494),m=n.n(A),h="bodyAttributes",y="htmlAttributes",b="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(g).map((function(e){return g[e]})),"charset"),T="cssText",v="href",x="http-equiv",w="innerHTML",O="itemprop",C="name",S="property",I="rel",j="src",k="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",R="defer",D="encodeSpecialCharacters",P="onChangeClientState",Q="titleTemplate",z=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),B=[g.NOSCRIPT,g.SCRIPT,g.STYLE],U="data-react-helmet",Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},M=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=_(e,g.TITLE),n=_(e,Q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,N);return t||r||void 0},V=function(e){return _(e,P)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===t.indexOf(c)||n===I&&"canonical"===e[n].toLowerCase()||c===I&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==w&&u!==T&&u!==O||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=m()({},r[u],o[u]);r[u]=c}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ce(g.BODY,r),ce(g.HTML,o),ue(f,p);var d={baseTag:le(g.BASE,n),linkTags:le(g.LINK,i),metaTags:le(g.META,a),noscriptTags:le(g.NOSCRIPT,u),scriptTags:le(g.SCRIPT,l),styleTags:le(g.STYLE,s)},A={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(A[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),c(e,A,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ce(g.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(U),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var s=i.indexOf(c);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(U):n.getAttribute(U)!==a.join(",")&&n.setAttribute(U,a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===w)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(U,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[U]=!0,o=fe(n,r),[d.createElement(g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+q(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+q(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case y:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[U]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===w||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),d.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===w||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+q(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(g.BASE,t,r),bodyAttributes:pe(h,n,r),htmlAttributes:pe(y,o,r),link:pe(g.LINK,i,r),meta:pe(g.META,a,r),noscript:pe(g.NOSCRIPT,u,r),script:pe(g.SCRIPT,c,r),style:pe(g.STYLE,l,r),title:pe(g.TITLE,{title:f,titleAttributes:p},r)}},Ae=s()((function(e){return{baseTag:G([v,k],e),bodyAttributes:X(h,e),defer:_(e,R),encode:_(e,D),htmlAttributes:X(y,e),linkTags:J(g.LINK,[I,v],e),metaTags:J(g.META,[C,E,x,S,O],e),noscriptTags:J(g.NOSCRIPT,[w],e),onChangeClientState:V(e),scriptTags:J(g.SCRIPT,[j,w],e),styleTags:J(g.STYLE,[T],e),title:W(e),titleAttributes:X(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),me=(o=Ae,a=i=function(e){function t(){return H(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case g.TITLE:return Y({},o,((t={})[r.type]=a,t.titleAttributes=Y({},i),t));case g.BODY:return Y({},o,{bodyAttributes:Y({},i)});case g.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)}(K(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=K(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.createElement(o,r)},M(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind,t.Z=me},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function s(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",u),f}}},8738:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),o=n(5444),i=n(5414),a=n(1804),u=n.n(a),c=function(e){var t=e.sideData,n=e.src,i=t.site.siteMetadata,a=t.catogriesQuery.group,c=n.split("/")[1];return r.createElement(r.Fragment,null,r.createElement("aside",{className:"sidebar"},r.createElement("header",null,r.createElement("div",{className:"about"},r.createElement("div",{className:"cover-author-image"},r.createElement(o.Link,{to:"/"},r.createElement("img",{src:"data:image/jpeg;base64,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",alt:i.author}))),r.createElement("div",{className:"author-name"},i.author),r.createElement("p",null,i.description))),r.createElement("article",null,r.createElement("section",null,r.createElement("ul",null,a.map((function(e){return r.createElement("li",{key:e.fieldValue},e.fieldValue==c?r.createElement(o.Link,{style:{fontWeight:"900"},to:"/"+u()(e.fieldValue),className:"category"},e.fieldValue," (",e.totalCount,")"):r.createElement(o.Link,{to:"/"+u()(e.fieldValue),className:"category"},e.fieldValue," (",e.totalCount,")"))})),r.createElement("li",null,r.createElement(o.Link,{to:"/tags"},"AllTags"))))),r.createElement("footer",null,r.createElement("section",{className:"contact"},r.createElement("h3",{className:"contact-title"},"Contact me"),r.createElement("ul",null,i.social.twitter&&r.createElement("li",null,r.createElement("a",{href:"https://twitter.com/"+i.social.twitter,target:"_blank"},r.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}))),i.social.facebook&&r.createElement("li",null,r.createElement("a",{href:"https://facebook.com/"+i.social.facebook,target:"_blank"},r.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}))),i.social.github&&r.createElement("li",null,r.createElement("a",{href:"https://github.com/"+i.social.github,target:"_blank"},r.createElement("i",{className:"fa fa-github","aria-hidden":"true"}))),i.social.linkedin&&r.createElement("li",null,r.createElement("a",{href:"https://linkedin.com/in/"+i.social.linkedin,target:"_blank"},r.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"}))),i.social.email&&r.createElement("li",null,r.createElement("a",{href:"mailto:"+i.social.email,target:"_blank"},r.createElement("i",{className:"fa fa-envelope-o","aria-hidden":"true"}))))),r.createElement("div",{className:"copyright"},r.createElement("p",null,(new Date).getFullYear()," © ",i.author)))))},l=function(e){var t=e.children,n=t[0]._owner.key;return r.createElement(o.StaticQuery,{query:"2041074457",render:function(e){return r.createElement("div",{className:"wrapper"},r.createElement(i.Z,null,r.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato|PT+Serif&display=swap",rel:"stylesheet"})),r.createElement(c,{sideData:e,src:n}),t)}})}},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},9932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},2663:function(e){e.exports=function(e,t,n,r){var o=-1,i=null==e?0:e.length;for(r&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},4239:function(e,t,n){var r=n(2705),o=n(9607),i=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},531:function(e,t,n){var r=n(2705),o=n(9932),i=n(1469),a=n(3448),u=r?r.prototype:void 0,c=u?u.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return o(t,e)+"";if(a(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},5393:function(e,t,n){var r=n(2663),o=n(3816),i=n(8748),a=RegExp("['’]","g");e.exports=function(e){return function(t){return r(i(o(t).replace(a,"")),e,"")}}},9389:function(e,t,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(c){}var o=a.call(e);return r&&(t?e[u]=n:delete e[u]),o}},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},2757:function(e){var t="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+o+"]",a="\\d+",u="[\\u2700-\\u27bf]",c="["+n+"]",l="[^\\ud800-\\udfff"+o+a+t+n+r+"]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+r+"]",d="(?:"+c+"|"+l+")",A="(?:"+p+"|"+l+")",m="(?:['’](?:d|ll|m|re|s|t|ve))?",h="(?:['’](?:D|LL|M|RE|S|T|VE))?",y="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",b="[\\ufe0e\\ufe0f]?",g=b+y+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",s,f].join("|")+")"+b+y+")*"),E="(?:"+[u,s,f].join("|")+")"+g,T=RegExp([p+"?"+c+"+"+m+"(?="+[i,p,"$"].join("|")+")",A+"+"+h+"(?="+[i,p+d,"$"].join("|")+")",p+"?"+d+"+"+m,p+"+"+h,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,E].join("|"),"g");e.exports=function(e){return e.match(T)||[]}},3816:function(e,t,n){var r=n(9389),o=n(9833),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(i,r).replace(a,"")}},1469:function(e){var t=Array.isArray;e.exports=t},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},1804:function(e,t,n){var r=n(5393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},9833:function(e,t,n){var r=n(531);e.exports=function(e){return null==e?"":r(e)}},8748:function(e,t,n){var r=n(9029),o=n(3157),i=n(9833),a=n(2757);e.exports=function(e,t,n){return e=i(e),void 0===(t=n?void 0:t)?o(e)?a(e):r(e):e.match(t)||[]}}}]);
//# sourceMappingURL=commons-810896e55470747ca61b.js.map