(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{524:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(525);Object.defineProperty(t,"stateToMarkdown",{enumerable:!0,get:function(){return(e=r,e&&e.__esModule?e:{default:e}).default;var e}})},525:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e,t){return new p(e,t).generate()};var a=n(526);var c=a.INLINE_STYLE.BOLD,i=a.INLINE_STYLE.CODE,u=a.INLINE_STYLE.ITALIC,l=a.INLINE_STYLE.STRIKETHROUGH,s=a.INLINE_STYLE.UNDERLINE,f={gfm:!1},p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.contentState=t,this.options=n||f}return o(e,[{key:"generate",value:function(){for(this.output=[],this.blocks=this.contentState.getBlockMap().toArray(),this.totalBlocks=this.blocks.length,this.currentBlock=0,this.listItemCounts={};this.currentBlock<this.totalBlocks;)this.processBlock();return this.output.join("")}},{key:"processBlock",value:function(){var e=this.blocks[this.currentBlock],t=e.getType();switch(t){case a.BLOCK_TYPE.HEADER_ONE:this.insertLineBreaks(1),this.output.push("# "+this.renderBlockContent(e)+"\n");break;case a.BLOCK_TYPE.HEADER_TWO:this.insertLineBreaks(1),this.output.push("## "+this.renderBlockContent(e)+"\n");break;case a.BLOCK_TYPE.HEADER_THREE:this.insertLineBreaks(1),this.output.push("### "+this.renderBlockContent(e)+"\n");break;case a.BLOCK_TYPE.HEADER_FOUR:this.insertLineBreaks(1),this.output.push("#### "+this.renderBlockContent(e)+"\n");break;case a.BLOCK_TYPE.HEADER_FIVE:this.insertLineBreaks(1),this.output.push("##### "+this.renderBlockContent(e)+"\n");break;case a.BLOCK_TYPE.HEADER_SIX:this.insertLineBreaks(1),this.output.push("###### "+this.renderBlockContent(e)+"\n");break;case a.BLOCK_TYPE.UNORDERED_LIST_ITEM:var n=e.getDepth(),r=this.getLastBlock(),o=r?r.getType():null,c=r&&d(o)?r.getDepth():null;o!==t&&c!==n-1&&(this.insertLineBreaks(1),o===a.BLOCK_TYPE.ORDERED_LIST_ITEM&&this.insertLineBreaks(1));var i=" ".repeat(4*e.depth);this.output.push(i+"- "+this.renderBlockContent(e)+"\n");break;case a.BLOCK_TYPE.ORDERED_LIST_ITEM:var u=e.getDepth(),l=this.getLastBlock(),s=l?l.getType():null,f=l&&d(s)?l.getDepth():null;s!==t&&f!==u-1&&(this.insertLineBreaks(1),s===a.BLOCK_TYPE.UNORDERED_LIST_ITEM&&this.insertLineBreaks(1));var p=" ".repeat(4*u),h=this.getListItemCount(e)%10;this.output.push(p+(h+". ")+this.renderBlockContent(e)+"\n");break;case a.BLOCK_TYPE.BLOCKQUOTE:this.insertLineBreaks(1),this.output.push(" > "+this.renderBlockContent(e)+"\n");break;case a.BLOCK_TYPE.CODE:if(this.insertLineBreaks(1),this.options.gfm){var v=e.getData()&&e.getData().get("language")?e.getData().get("language"):"";this.output.push("```"+v+"\n"),this.output.push(this.renderBlockContent(e)+"\n"),this.output.push("```\n")}else this.output.push("    "+this.renderBlockContent(e)+"\n");break;default:this.insertLineBreaks(1),this.output.push(this.renderBlockContent(e)+"\n")}this.currentBlock+=1}},{key:"getLastBlock",value:function(){return this.blocks[this.currentBlock-1]}},{key:"getNextBlock",value:function(){return this.blocks[this.currentBlock+1]}},{key:"getListItemCount",value:function(e){for(var t=e.getType(),n=e.getDepth(),r=this.currentBlock-1,o=this.blocks[r];o&&d(o.getType())&&o.getDepth()>n;)r-=1,o=this.blocks[r];return o&&o.getType()===t&&o.getDepth()===n||(this.listItemCounts[n]=0),this.listItemCounts[n]=this.listItemCounts[n]+1}},{key:"insertLineBreaks",value:function(e){if(this.currentBlock>0)for(var t=0;t<e;t++)this.output.push("\n")}},{key:"renderBlockContent",value:function(e){var t=this.contentState,n=e.getType(),o=e.getText();if(""===o)return"\u200b";var f=e.getCharacterList();return(0,a.getEntityRanges)(o,f).map(function(e){var o=r(e,2),f=o[0],p=o[1].map(function(e){var t=r(e,2),o=t[0],f=t[1];if(!o)return"";var p=o;return n===a.BLOCK_TYPE.CODE?p:f.has(i)?"`"+function(e){return e.replace(/`/g,"\\`")}(p)+"`":(p=function(e){return e.replace(/[*_`]/g,"\\$&")}(o),f.has(c)&&(p="**"+p+"**"),f.has(s)&&(p="++"+p+"++"),f.has(u)&&(p="_"+p+"_"),f.has(l)&&(p="~~"+p+"~~"),p)}).join(""),d=f?t.getEntity(f):null;if(null!=d&&d.getType()===a.ENTITY_TYPE.LINK){var m=d.getData(),b=m.href||m.url||"",g=m.title?' "'+v(m.title)+'"':"";return"["+p+"]("+h(b)+g+")"}if(null!=d&&d.getType()===a.ENTITY_TYPE.IMAGE){var y=d.getData(),O=y.src||"";return"!["+(y.alt?""+v(y.alt):"")+"]("+h(O)+")"}return p}).join("")}}]),e}();function d(e){switch(e){case a.BLOCK_TYPE.UNORDERED_LIST_ITEM:case a.BLOCK_TYPE.ORDERED_LIST_ITEM:return!0;default:return!1}}function h(e){return e.replace(/\)/g,"%29")}function v(e){return e.replace(/"/g,'\\"')}},707:function(e,t,n){"use strict";n.r(t);var r=n(12),o=n(14),a=n(135),c=n(105),i=n(2),u=n(0),l=n.n(u),s=n(315),f=n.n(s),p=n(56),d=n.n(p),h=(n(109),n(59),n(146)),v=n.n(h),m=(n(15),n(371)),b=n.n(m);function g(e,t){return v()(e)?b()(f()(e),t,function(e,t){if(d()(e))return t}):void 0!==t?t:e}function y(e,t){return Object.keys(e).reduce(function(n,r){return Object(c.a)({},n,Object(a.a)({},r,t(r,e[r])))},{})}var O=n(17),E=n.n(O),k=n(385),j=n.n(k);function w(e,t){return e.map(function(e){return e&&e[t]})}function S(e,t,n){var r=n.key;if(d()(e)&&d()(t)){var o=w(e,r),a=w(t,r);return j()(o,a).map(function(n){return g(e[o.indexOf(n)],t[a.indexOf(n)])})}return E()(t)?e:t}var C=n(396),x=n.n(C),B=n(419),I=n.n(B),T=n(421),R=n.n(T);function L(e){var t=e.header,n=e.props,r=e.sections;return"# ".concat(t.value,"\n").concat(n.map(function(e){var t=e.key,n=e.value;return"".concat(t,":").concat(n?" ".concat(n):"")}).join("\n"),"\n\n").concat(r.map(function(e){var t=e.key,n=e.header,r=e.placeholder,o=e.content;return"## ".concat(n," {").concat(t,"}").concat(r?"\n[".concat(r,"]"):"").concat(o?"\n".concat(o):"","\n")}).join("\n"),"\n")}var P=n(706),D={log:console.log,warn:console.warn,error:console.error},H=n(422),_=n.n(H),F=/^\s*#(?!#)\s*(.*)$/,M=/^\s*#(.*)$/,z=/^\s*(\S+)\s*:(.*)$/,A=/^\s*##([^{]*){([^}]*)}(.*)$/,K=/\[(.*)\S*\]/,Y=/\s*\[(.*)/,N=/^\s*([^\]]*)]/;function V(e){var t=e.split("\n"),n=function(e){var t=0;for(;t<e.length;){var n=e[t],r=n.match(F);if(r){var a=Object(o.a)(r,2),c=a[1];return{header:{value:c.trim()},index:t}}t+=1}return{header:{value:""},index:-1}}(t),r=n.header,a=function(e,t){var n=t,r=[];for(;n<e.length;){var a=e[n],c=a.match(z);if(c){var i=Object(o.a)(c,3),u=i[1],l=i[2];r.push({key:u.trim(),value:l.trim()})}else if(a.match(M))break;n+=1}return{props:r,lastIndex:n-1}}(t,n.index+1);return{header:r,props:a.props,sections:function(e,t){var n=t,r=[];for(;n<e.length;){var a=e[n],c=a.match(A);if(c){var i=Object(o.a)(c,4),u=i[1],l=i[2],s=i[3],f="".concat(u.trim()," ").concat(s.trim()).trim(),p=U(e,n+1),d=p.placeholder,h=p.index;n=h+1||n+1;for(var v=[];n<e.length&&!(e[n+1]||"").match(A);)a=e[n],v.push(a),n+=1;r.push({key:l.trim(),header:f,placeholder:d,content:v.join("\n").trim()})}n+=1}return{sections:r}}(t,a.lastIndex+1).sections}}function U(e,t){for(var n=t,r=[];n<e.length;){var a=e[n].trim();if(0===r.length){var c=a.match(K);if(c)return{placeholder:Object(o.a)(c,2)[1].trim(),index:n};var i=a.match(Y);if(i){var u=Object(o.a)(i,2)[1];r.push(u.trim())}else if(""!==a)break}else if(r.length>0){var l=a.match(N);if(l){var s=Object(o.a)(l,2)[1];return r.push(s.trim()),{placeholder:r.join("\n"),index:n}}r.push(a)}n+=1}return{placeholder:"",index:-1}}function W(e,t){try{var n=V(t),r=w(n.sections,{key:"key"}),o=w(e.sections,{key:"key"}),a=_.a.apply(void 0,[r].concat(Object(P.a)(o)));a.length>0&&(D.warn("Unexpected sections found:",a),a.forEach(function(e){delete n.sections[e]}));var c=w(n.sections,{key:"key"}),i=w(e.sections,{key:"key"}),u=_.a.apply(void 0,[c].concat(Object(P.a)(i)));return u.length>0&&(D.warn("Unexpected props found:",u),u.forEach(function(e){delete n.sections[e]})),n.sections=S(e.sections,n.sections,{key:"key"}),n.props=S(e.props,n.props,{key:"key"}),function e(t,n){var r=g(t,n);return v()(r)?y(r,function(r){return e(v()(t)?t[r]:void 0,v()(n)?n[r]:void 0)}):void 0!==n?n:t}(e,n)}catch(l){D.error("Parsing model failed"),D.error(l)}return e}var q=I()(function(e){localStorage.setItem(e.localStorageKey,L(e)),localStorage.setItem("isInited","true")},250);var $=function(e){var t=function(e){var t=e.model;if(!v()(t))throw new Error("Model must be provided: useMarkdownSync({ model })");var n,r=t,o=function(e){r=e,q(e),n&&n(e)},a={loadFromFile:function(e){return new Promise(function(t,n){var r=new FileReader;r.onload=function(e){a.loadMarkdown(e.target.result),t()},r.onerror=n,r.readAsText(e)})},loadFromLocalStorage:function(){a.loadMarkdown(localStorage.getItem(t.localStorageKey))},loadMarkdown:function(e){e&&o(W(t,e))},saveAs:function(){var e=new Blob([L(r)],{type:"text/plain;charset=utf-8"}),t="business model canvas - ".concat(r.header.value.substr(0,20).replace(/[^a-zA-Z0-9]+/g," "),".txt");R.a.saveAs(e,t)},reset:function(){o(t)},setOnChange:function(e){n=e},removeOnChange:function(){n=null},get SECTION_KEYS(){return w(t.sections,"key")},get sections(){return r.sections},getSectionIndex:function(e){return x()(a.sections,["key",e])},getSection:function(e){return a.sections[a.getSectionIndex(e)]},updateSection:function(e,n){if(!v()(n))throw new Error("Invalid arguments for markdownSyncApi.updateSection(key: string, sectionUpdate: object)");var i=a.getSectionIndex(e);if(-1===i)throw new Error('Section with key "'.concat(e,'" not available in model'),t);var u=r.sections[i],l=Array.from(r.sections);l[i]=Object(c.a)({},u,n),o(Object(c.a)({},r,{sections:l}))},get header(){return r.header},updateHeader:function(e){if(!v()(e))throw new Error("Invalid arguments for markdownSyncApi.updateHeader(headerUpdate: object)");o(Object(c.a)({},r,{header:Object(c.a)({},r.header,e)}))},get PROP_KEYS(){return w(t.props,"key")},get props(){return r.props},getPropertyIndex:function(e){return x()(a.props,["key",e])},getProperty:function(e){return a.props[a.getPropertyIndex(e)]},updateProperty:function(e,n){if(!v()(n))throw new Error("Invalid arguments for markdownSyncApi.updateHeader(key: string, propertyUpdate: object)");var i=a.getPropertyIndex(e);if(-1===i)throw new Error('Property with key "'.concat(e,'" not available in model'),t);var u=r.props[i],l=Array.from(r.props);l[i]=Object(c.a)({},u,n),o(Object(c.a)({},r,{props:l}))}};return a}({model:e});return t.loadFromLocalStorage(),t};var G=n(1),J=n(90),Q=n(512),X=n(524),Z=function(e,t){return J.EditorState.push(e,Object(Q.stateFromMarkdown)(t))},ee=function(e){return Object(X.stateToMarkdown)(e.getCurrentContent(),{gfm:!0})},te=function(e,t){return J.RichUtils.toggleInlineStyle(e,t)},ne=function(e,t,n){var r=re(e);if(oe(r,t)&&!ae(r,n))return ce(e,n);var o=J.RichUtils.toggleBlockType(e,t);return ce(o,n)},re=function(e){return e.getCurrentContent().getBlockForKey(e.getSelection().getStartKey())},oe=function(e,t){return e.getType()===t},ae=function(e,t){var n=e.getData(),r=Object.keys(t);return n.size===r.length&&!r.find(function(e){return t[e]!==n.get(e)})},ce=function(e,t){var n=J.Modifier.setBlockData(e.getCurrentContent(),e.getSelection(),t);return J.EditorState.push(e,n,"change-block-data")},ie=n(5),ue=function(){return Boolean(document.fullscreenElement||document.webkitCurrentFullScreenElement)},le=function(){ue()?document.exitFullscreen&&(document.exitFullscreen?document.exitFullscreen():document.mozExitFullscreen?document.mozExitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()):function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT||{})}()};var se=n(6);function fe(){var e=Object(i.a)(["\n  color: #999999;\n  display: inline-block;\n\n  ","\n"]);return fe=function(){return e},e}function pe(){var e=Object(i.a)(["\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  line-height: inherit;\n  text-transform: uppercase;\n\n  &:hover,\n  &:focus {\n    background: #DDDDDD;\n    outline: none;\n  }\n\n  ","\n"]);return pe=function(){return e},e}function de(){var e=Object(i.a)(["\n  display: block;\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n"]);return de=function(){return e},e}function he(){var e=Object(i.a)(["\n  background-color: ",";\n  padding: 0 0.5em;\n  text-align: right;\n\n  @media print {\n    display: none;\n  }\n"]);return he=function(){return e},e}var ve="\n  margin-top: -0.5em;\n  margin-right: 1px;\n  padding: 0.5em 1em;\n  position: relative;\n  &:last-child {\n    margin-right: -0.5em;\n  }\n\n  &:not(:last-child)::after {\n    background: currentColor;\n    bottom: 0.6em;\n    content: '';\n    position: absolute;\n    right: -1px;\n    top: 0.6em;\n    width: 1px;\n  }\n",me=G.c.div(he(),function(e){return e.theme.pageBackground}),be=G.c.form(de()),ge=G.c.button(pe(),ve),ye=G.c.span(fe(),ve);var Oe=function(e){var t=e.loadFromFile,n=e.onReset,a=e.onSaveAs,c=Object(r.a)(e,["loadFromFile","onReset","onSaveAs"]),i=Object(u.useRef)(),s=Object(u.useRef)(),f=Object(u.useCallback)(function(){window.confirm("Are you sure to reject all your changes?")&&n()},[n]),p=Object(u.useCallback)(function(){Object(se.b)("/")},[]),d=function(){var e=Object(u.useState)(ue()),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(u.useEffect)(function(){var e=function(){return r(ue())};return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),function(){document.removeEventListener("fullscreenchange",e)}},[r]),{isFullscreen:n,isFullscreenSupported:ie.c.fullscreen,toggleFullscreen:le}}(),h=d.isFullscreen,v=d.isFullscreenSupported,m=d.toggleFullscreen;return l.a.createElement(me,c,ie.b.isIos&&!ie.a.isStandalone&&l.a.createElement(ye,null,'Install this webapp: Tap share button and "Add to Home Screen"'),!ie.b.isIos&&v&&l.a.createElement(ge,{onClick:m},h?"Exit full screen":"full screen"),l.a.createElement(ge,{onClick:a},"Save to file"),l.a.createElement(ge,{onClick:function(){return s.current.click()}},"Import from file",l.a.createElement(be,{ref:i},l.a.createElement("input",{accept:"text/plain, text/markdown","aria-hidden":!0,tabIndex:"-1",type:"file",onChange:function(e){var n=e.target;t(n.files[0]),i.current.reset()},ref:s}))),l.a.createElement(ge,{onClick:f},"Create new canvas"),l.a.createElement(ge,{onClick:window.print},"Print"),l.a.createElement(ge,{"aria-label":"Help",onClick:p},"?"))};function Ee(){var e=Object(i.a)(["\n  border-left-style: solid;\n  bottom: ",";\n  left: 0;\n  top: ",";\n"]);return Ee=function(){return e},e}function ke(){var e=Object(i.a)(["\n  border-bottom-style: solid;\n  bottom: 0;\n  left: ",";\n  right: ",";\n"]);return ke=function(){return e},e}function je(){var e=Object(i.a)(["\n  border-right-style: solid;\n  bottom: ",";\n  right: 0;\n  top: ",";\n"]);return je=function(){return e},e}function we(){var e=Object(i.a)(["\n  border-top-style: solid;\n  left: ",";\n  right: ",";\n  top: 0;\n"]);return we=function(){return e},e}function Se(){var e=Object(i.a)(["\n  position: absolute;\n  border-color: ",";\n  border-style: none;\n  border-width: 1px;\n\n  @media print {\n    border-width: 2px;\n  }\n"]);return Se=function(){return e},e}var Ce=G.c.div(Se(),function(e){return e.theme.borderColor}),xe=Object(G.c)(Ce)(we(),"0.75em","0.75em"),Be=Object(G.c)(Ce)(je(),"0.75em","0.75em"),Ie=Object(G.c)(Ce)(ke(),"0.75em","0.75em"),Te=Object(G.c)(Ce)(Ee(),"0.75em","0.75em");var Re=function(e){var t=e.top,n=e.right,r=e.bottom,o=e.left;return l.a.createElement(l.a.Fragment,null,t&&l.a.createElement(xe,null),n&&l.a.createElement(Be,null),r&&l.a.createElement(Ie,null),o&&l.a.createElement(Te,null))},Le=n(699),Pe=n.n(Le),De=[],He=function(e,t){De.push({isFocusWithin:!1,ref:e,setIsFocusWithin:t}),1===Object.keys(De).length&&(document.body.addEventListener("mousedown",Fe),document.body.addEventListener("keydown",Fe),document.body.addEventListener("keyup",Fe))},_e=function(e){Pe()(De,function(t){return t.ref===e}),0===Object.keys(De).length&&(document.body.removeEventListener("mousedown",Fe),document.body.removeEventListener("keydown",Fe),document.body.removeEventListener("keyup",Fe))},Fe=function(e){var t=e.target;De=De.map(function(e){var n=e.ref.current;if(!n)return e;var r=n.contains(t);return e.isFocusWithin===r?e:(e.setIsFocusWithin(r),Object(c.a)({},e,{isFocusWithin:r}))})};function Me(){return(Me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ze(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Ae=l.a.createElement("path",{d:"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"}),Ke=l.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),Ye=function(e){var t=e.svgRef,n=ze(e,["svgRef"]);return l.a.createElement("svg",Me({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),Ae,Ke)},Ne=l.a.forwardRef(function(e,t){return l.a.createElement(Ye,Me({svgRef:t},e))});n.p;function Ve(){return(Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ue(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var We=l.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),qe=l.a.createElement("path",{d:"M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"}),$e=function(e){var t=e.svgRef,n=Ue(e,["svgRef"]);return l.a.createElement("svg",Ve({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),We,qe)},Ge=l.a.forwardRef(function(e,t){return l.a.createElement($e,Ve({svgRef:t},e))});n.p;function Je(){return(Je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Qe(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Xe=l.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),Ze=l.a.createElement("path",{d:"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"}),et=function(e){var t=e.svgRef,n=Qe(e,["svgRef"]);return l.a.createElement("svg",Je({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),Xe,Ze)},tt=l.a.forwardRef(function(e,t){return l.a.createElement(et,Je({svgRef:t},e))});n.p;function nt(){return(nt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function rt(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ot=l.a.createElement("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),at=l.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),ct=function(e){var t=e.svgRef,n=rt(e,["svgRef"]);return l.a.createElement("svg",nt({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),ot,at)},it=l.a.forwardRef(function(e,t){return l.a.createElement(ct,nt({svgRef:t},e))});n.p;function ut(){return(ut=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function lt(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var st=l.a.createElement("path",{d:"M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"}),ft=l.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),pt=function(e){var t=e.svgRef,n=lt(e,["svgRef"]);return l.a.createElement("svg",ut({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),st,ft)},dt=l.a.forwardRef(function(e,t){return l.a.createElement(pt,ut({svgRef:t},e))});n.p;function ht(){return(ht=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function vt(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var mt=l.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),bt=l.a.createElement("path",{d:"M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"}),gt=function(e){var t=e.svgRef,n=vt(e,["svgRef"]);return l.a.createElement("svg",ht({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),mt,bt)},yt=l.a.forwardRef(function(e,t){return l.a.createElement(gt,ht({svgRef:t},e))});n.p;function Ot(){return(Ot=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Et(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var kt=l.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),jt=l.a.createElement("path",{d:"M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"}),wt=function(e){var t=e.svgRef,n=Et(e,["svgRef"]);return l.a.createElement("svg",Ot({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),kt,jt)},St=l.a.forwardRef(function(e,t){return l.a.createElement(wt,Ot({svgRef:t},e))});n.p;function Ct(){return(Ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function xt(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Bt=l.a.createElement("path",{d:"M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"}),It=l.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Tt=function(e){var t=e.svgRef,n=xt(e,["svgRef"]);return l.a.createElement("svg",Ct({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),Bt,It)},Rt=l.a.forwardRef(function(e,t){return l.a.createElement(Tt,Ct({svgRef:t},e))}),Lt=(n.p,[{label:"Bold",type:"BOLD",icon:l.a.createElement(Ne,null)},{label:"Italic",type:"ITALIC",icon:l.a.createElement(tt,null)},{label:"Underline",type:"UNDERLINE",icon:l.a.createElement(St,null)},{label:"Strikethrough",type:"STRIKETHROUGH",icon:l.a.createElement(yt,null)}]),Pt=[{label:"Header",type:"header-three",icon:l.a.createElement(Ge,null)},{label:"UL",type:"unordered-list-item",icon:l.a.createElement(it,null)},{label:"OL",type:"ordered-list-item",icon:l.a.createElement(dt,null)}];function Dt(e){var t=e.color,n=e.label,r=e.key;return{color:t,data:{language:void 0===r?n:r},icon:l.a.createElement(Rt,null),label:n,type:"code-block"}}function Ht(){var e=Object(i.a)(["\n  color: ",";\n  background: ",";;\n  border: none;\n  border-radius: 0;\n  cursor: pointer;\n  display: flex;\n  opacity: ",";\n  padding: 0.25em;\n\n  &:hover, &:focus {\n    background: #DDDDDD;\n  }\n  &:first-child {\n    padding-left: 0.4em;\n    border-top-left-radius: 0.75em;\n    border-bottom-left-radius: 0.75em;\n  }\n  &:last-child {\n    padding-left: 0.4em;\n    border-top-right-radius: 0.75em;\n    border-bottom-right-radius: 0.75em;\n  }\n"]);return Ht=function(){return e},e}var _t=G.c.button(Ht(),function(e){return e.color||"inherit"},function(e){return e["aria-pressed"]?"#DDDDDD":"transparent"},function(e){return e["aria-pressed"]?1:.5});var Ft=function(e){var t=e.color,n=e.icon,o=e.isActive,a=e.label,c=e.onToggle,i=e.type,u=e.data,s=Object(r.a)(e,["color","icon","isActive","label","onToggle","type","data"]),f=function(e){e.preventDefault(),c(i,u)};return l.a.createElement(_t,Object.assign({"aria-label":a,"aria-pressed":o,color:t,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||f(e)},onMouseDown:f,tabIndex:"0"},s),n||a)};function Mt(){var e=Object(i.a)(["\n  background: #EEEEEE;\n  border-radius: 0.75em;\n  display: flex;\n  margin-right: 0.5em;\n  margin-top: 0.25em;\n"]);return Mt=function(){return e},e}var zt=G.c.div(Mt());var At=function(e){var t=e.controlTypes,n=e.getIsActive,r=e.onToggle;return l.a.createElement(zt,null,t.map(function(e){return l.a.createElement(Ft,Object.assign({isActive:n(e),key:e.label,onToggle:r},e))}))};function Kt(){var e=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  visibility: ",";\n  z-index: 2;\n\n  @media print {\n    display: none;\n  }\n"]);return Kt=function(){return e},e}var Yt=G.c.div(Kt(),function(e){return e.isVisible?"visible":"hidden"});var Nt=function(e){var t=e.cardControlTypes,n=e.editorState,o=e.isVisible,a=e.onChange,c=Object(r.a)(e,["cardControlTypes","editorState","isVisible","onChange"]),i=Object(u.useCallback)(function(e){var t=te(n,e);a(t)},[a,n]),s=Object(u.useCallback)(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=ne(n,e,t);a(r)},[a,n]),f=re(n),p=Object(u.useCallback)(function(e){return oe(f,e.type)&&ae(f,e.data||{})},[f]),d=n.getCurrentInlineStyle(),h=Object(u.useCallback)(function(e){return d.has(e.type)},[d]);return l.a.createElement(Yt,Object.assign({isVisible:o},c),l.a.createElement(At,{controlTypes:Lt,editorState:n,getIsActive:h,onToggle:i}),l.a.createElement(At,{controlTypes:Pt,editorState:n,getIsActive:p,onToggle:s}),t.length>0&&l.a.createElement(At,{controlTypes:t,editorState:n,getIsActive:p,onToggle:s}))},Vt=n(225),Ut=n.n(Vt);function Wt(){var e=Object(i.a)(["\n  background-color: ",";\n  padding: 0.5em;\n"]);return Wt=function(){return e},e}var qt=G.c.section(Wt(),function(e){return e.color||"#EEEEEE"});var $t=function(e){var t=e.blockProps,n=Object(r.a)(e,["blockProps"]);return l.a.createElement(qt,{color:t.color},l.a.createElement(J.EditorBlock,n))},Gt=Ut()(function(e){return function(t){if("code-block"===t.getType()){var n=t.getData(),r=e.find(function(e){return n.get("language")===e.key});return{component:$t,editable:!0,props:{color:r&&r.color}}}return null}});n(705);function Jt(){var e=Object(i.a)(["\n  .DraftEditor-root {\n    flex: 1;\n  }\n  .public-DraftEditorPlaceholder-inner {\n    @media print {\n      display: none;\n    }\n  }\n"]);return Jt=function(){return e},e}function Qt(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Qt=function(){return e},e}var Xt=G.c.div(Qt()),Zt=Object(G.b)(Jt());function en(e){var t=e.cardStyles,n=e.editorState,a=e.isSimple,c=e.onChange,i=e.placeholder,s=Object(r.a)(e,["cardStyles","editorState","isSimple","onChange","placeholder"]),f=Object(u.useRef)(null),p=Object(u.useRef)(null),d=function(e){var t=Object(u.useState)(!1),n=Object(o.a)(t,2),r=n[0],a=n[1];return Object(u.useEffect)(function(){return He(e,a),function(){_e(e)}},[]),r}(p),h=Object(u.useMemo)(function(){return Gt(t)},[t]),v=Object(u.useCallback)(function(e){c(e)},[c]),m=Object(u.useCallback)(function(e,t){var n=J.RichUtils.handleKeyCommand(t,e);return n?(c(n),"handled"):"not-handled"},[c]);return l.a.createElement(Xt,Object.assign({onClick:function(){f.current.focus()},ref:p},s),l.a.createElement(Zt,null),l.a.createElement(J.Editor,{blockRendererFn:h,editorState:n,handleKeyCommand:m,onChange:v,placeholder:i,ref:f}),!a&&l.a.createElement(Nt,{cardControlTypes:t&&t.map(Dt),editorState:n,isVisible:d,onChange:v}))}en.defaultProps={cardStyles:[{label:"Card",data:{}},{label:"Card OK",color:"green",key:"ok"},{label:"Card Warn",color:"orange",key:"warn"},{label:"Card Not OK",color:"red",key:"not ok"}]};var tn=en;function nn(){var e=Object(i.a)(["\n  flex: 1;\n"]);return nn=function(){return e},e}function rn(){var e=Object(i.a)(["\n  position: absolute;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  text-indent: -999;\n"]);return rn=function(){return e},e}function on(){var e=Object(i.a)(["\n  font-size: 1.4em;\n  margin: 0 0 0.5rem 0;\n"]);return on=function(){return e},e}function an(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0.75rem;\n  position: relative;\n"]);return an=function(){return e},e}var cn=G.c.article(an()),un=G.c.h2(on()),ln=G.c.h2(rn()),sn=Object(G.c)(tn)(nn());function fn(e){var t=e.border,n=(e.content,e.editorState),o=e.header,a=e.isSimple,c=e.onChange,i=e.placeholder,u=Object(r.a)(e,["border","content","editorState","header","isSimple","onChange","placeholder"]);return l.a.createElement(cn,u,a?l.a.createElement(ln,null,o):l.a.createElement(un,null,o),l.a.createElement(sn,{editorState:n,isSimple:a,onChange:function(e){c({content:ee(e),editorState:e})},placeholder:i}),l.a.createElement(Re,t))}fn.defaultProps={border:[!1,!1,!1,!1]};var pn=fn;function dn(){var e=Object(i.a)(["\n  flex: 1;\n"]);return dn=function(){return e},e}function hn(){var e=Object(i.a)(["\n  border: none;\n  display: block;\n  font-weight: inherit;\n  text-align: right;\n  width: 20em;\n"]);return hn=function(){return e},e}function vn(){var e=Object(i.a)(["\n"]);return vn=function(){return e},e}function mn(){var e=Object(i.a)(["\n  border: none;\n  display: block;\n  font-weight: inherit;\n  width: 100%;\n"]);return mn=function(){return e},e}function bn(){var e=Object(i.a)(["\n  margin: 0;\n  flex: 1;\n"]);return bn=function(){return e},e}function gn(){var e=Object(i.a)(["\n  margin: 0.75em 0.75em 0 0.75em;\n  display: flex;\n"]);return gn=function(){return e},e}function yn(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return yn=function(){return e},e}var On=G.c.div(yn()),En=G.c.div(gn()),kn=G.c.h1(bn()),jn=G.c.input(mn()),wn=G.c.div(vn()),Sn=G.c.input(hn()),Cn=Object(G.c)(pn)(dn());var xn=function(e){var t=e.getProperty,n=(e.gridArea,e.header),o=e.onHeaderChange,a=e.onPropertyChange,c=e.sectionProps,i=Object(r.a)(e,["getProperty","gridArea","header","onHeaderChange","onPropertyChange","sectionProps"]),s=Object(u.useCallback)(function(e){var t=e.target;o({value:t.value})},[o]),f=Object(u.useCallback)(function(e){var t=e.target;a("date",{value:t.value})},[a]),p=Object(u.useCallback)(function(e){var t=e.target;a("name",{value:t.value})},[a]);return l.a.createElement(On,i,l.a.createElement(En,null,l.a.createElement(kn,null,l.a.createElement(jn,Object.assign({"aria-label":"Your Business",onChange:s,placeholder:"Your Business"},n))),l.a.createElement(wn,null,l.a.createElement(Sn,Object.assign({onChange:f},t("date"))),l.a.createElement(Sn,Object.assign({onChange:p},t("name"))))),l.a.createElement(Cn,Object.assign({isSimple:!0},c)))},Bn={header:{value:"",placeholder:"Your Business"},localStorageKey:"businessModelCanvas",props:[{key:"date",placeholder:"Date",value:(new Date).toLocaleDateString()},{key:"name",placeholder:"Your Name",value:""}],sections:[{key:"purpose",border:{bottom:!0},content:"",header:"Purpose",isHeader:!0,placeholder:"Step 1:\nWhat is the business purpose?\nYou will need it to validate every single part of the model."},{key:"customer-segments",border:{left:!0},content:"",header:"Customer Segments",placeholder:"Step 2:\nWhich customers does your business try to serve?"},{key:"value-propositions",border:{right:!0,left:!0},content:"",header:"Value Propositions",placeholder:"Step 3:\nWhich products and services a business offers meet the needs of the customer segments?"},{key:"channels",border:{top:!0},content:"",header:"Channels",placeholder:"Step 4:\nWhich channels does your business use to deliver the value proposition to the customer segments"},{key:"customer-relationships",border:{},content:"",header:"Customer Relationships",placeholder:"Step 5:\nWhich type relationship does your business want to create with the customer segments"},{key:"revenue-streams",border:{top:!0},content:"",header:"Revenue Streams",placeholder:"Step 6:\nHow does your company make income from each customer segment?"},{key:"key-resources",border:{top:!0},content:"",header:"Key Resources",placeholder:"Step 7:\nWhich resources are necessary to create the value propositions?"},{key:"key-activities",border:{},content:"",header:"Key Activities",placeholder:"Step 8:\nWhat are the most important activities in executing the value propositions?"},{key:"key-partners",border:{right:!0},content:"",header:"Key Partners",placeholder:"Step 9:\nWhich buyer-supplier relationships can help you to focus on your core activity, optimise operations and reduce risks?"},{key:"cost-structure",border:{top:!0,right:!0},content:"",header:"Cost Structure",placeholder:"Step 10:\nWhat are the most important monetary consequences while operating under this business model?"}]};function In(){var e=Object(i.a)(["\n  grid-area: menu;\n"]);return In=function(){return e},e}function Tn(){var e=Object(i.a)(["\n  grid-area: ",";\n"]);return Tn=function(){return e},e}function Rn(){var e=Object(i.a)(["\n  grid-area: ",";\n"]);return Rn=function(){return e},e}function Ln(){var e=Object(i.a)(["\n  background-color: ",";\n  border-color: ",';\n  border-style: solid;\n  border-width: 0.5em;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: auto 0.5fr 1fr 1fr 1fr;\n  grid-template-areas:\n    "menu menu menu menu menu menu menu menu menu menu"\n    "purpose purpose purpose purpose purpose purpose purpose purpose purpose purpose"\n    "key-partners key-partners key-activities key-activities value-propositions value-propositions customer-relationships customer-relationships customer-segments customer-segments"\n    "key-partners key-partners key-resources key-resources value-propositions value-propositions channels channels customer-segments customer-segments"\n    "cost-structure cost-structure cost-structure cost-structure cost-structure revenue-streams revenue-streams revenue-streams revenue-streams revenue-streams";\n  margin: auto;\n\n  height: 100%;\n  width: 100%;\n  @media screen {\n    min-width: 90em;\n    min-height: 60em;\n  }\n']);return Ln=function(){return e},e}var Pn=G.c.div(Ln(),function(e){return e.theme.paperBackground},function(e){return e.theme.pageBackground}),Dn=Object(G.c)(pn)(Rn(),function(e){return e.gridArea}),Hn=Object(G.c)(xn)(Tn(),function(e){return e.gridArea}),_n=Object(G.c)(Oe)(In()),Fn=function(e){return e.reduce(function(e,t){return Object(c.a)({},e,Object(a.a)({},t.key,(n=t.content,J.EditorState.createWithContent(Object(Q.stateFromMarkdown)(n)))));var n},{})};t.default=function(){var e=function(e){var t=e.model,n=Object(u.useMemo)(function(){return $(t)},[]),r=Object(u.useState)(),a=Object(o.a)(r,2)[1];return Object(u.useEffect)(function(){return n.setOnChange(a),function(){n.removeOnChange()}}),n}({model:Bn}),t=Object(u.useMemo)(function(){return Fn(e.sections)},[]),n=Object(u.useState)(t),i=Object(o.a)(n,2),s=i[0],f=i[1],p=function(){var t=y(s,function(t,n){return Z(n,e.getSection(t).content)});f(t)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(Pn,null,l.a.createElement(_n,{loadFromFile:function(t){e.loadFromFile(t).then(p)},onReset:function(){e.reset(),p()},onSaveAs:e.saveAs}),e.sections.map(function(t){var n=t.isHeader,o=t.key,i=Object(r.a)(t,["isHeader","key"]),u=Object(c.a)({editorState:s[o],isSimple:n,onChange:function(t){var n=t.content,r=t.editorState;e.updateSection(o,{content:n}),function(e,t){var n=Object(c.a)({},s,Object(a.a)({},e,t));f(n)}(o,r)}},i);return n?l.a.createElement(Hn,{gridArea:o,header:e.header,key:o,onHeaderChange:e.updateHeader,onPropertyChange:e.updateProperty,getProperty:e.getProperty,sectionProps:u}):l.a.createElement(Dn,Object.assign({gridArea:o,key:o},u))})))}}}]);
//# sourceMappingURL=4.fb580f38.chunk.js.map