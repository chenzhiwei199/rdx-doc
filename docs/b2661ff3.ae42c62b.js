(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return x})),n.d(t,"metadata",(function(){return g})),n.d(t,"rightToc",(function(){return w})),n.d(t,"default",(function(){return j}));var r={};n.r(r),n.d(r,"Root",(function(){return v}));var o=n(2),a=n(6),i=n(0),c=n.n(i),s=n(118),l=n(119),u=n(492),p=n(666),f=n(363),d=n(491),m=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function c(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((r=r.apply(e,t||[])).next())}))},h=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},y=Object(u.a)({id:"atom",get:function(){return m(void 0,void 0,void 0,(function(){return h(this,(function(e){switch(e.label){case 0:return[4,(t=1e3,new Promise((function(e){return setTimeout(e,t)})))];case 1:return e.sent(),[2,1]}var t}))}))}}),v=function(){return c.a.createElement(p.a,null,c.a.createElement(b,null))},b=function(){var e=Object(f.k)(y),t=Object(f.c)(y);return c.a.createElement("span",{style:{display:"inline-flex",justifyContent:"space-around"}},c.a.createElement("span",null,Object(d.d)(e.status)?"\u52a0\u8f7d\u4e2d...":e.content),c.a.createElement("button",{onClick:function(){t()}},"\u5237\u65b0"))},x={id:"useRdxRefresh",title:"useRdxRefresh(state)"},g={unversionedId:"api/useRdxRefresh",id:"api/useRdxRefresh",isDocsHomePage:!1,title:"useRdxRefresh(state)",description:"\u4f1a\u6839\u636e\u5f53\u524d\u4f20\u5165\u7684state\u53c2\u6570\u6765\u8fd4\u4e00\u4e2a \u51fd\u6570\uff0c\u5982\u679cstate \u662f\u4e00\u4e2aatom\uff0c\u5219\u8c03\u7528\u8be5\u51fd\u6570\u5c06\u5237\u65b0\u72b6\u6001\uff0c\u5982\u679c\u662f\u4e00\u4e2acompute\uff0c\u5219\u4f1a\u91cd\u65b0",source:"@site/docs/api/useRdxRefresh.mdx",slug:"/api/useRdxRefresh",permalink:"/docs/api/useRdxRefresh",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/useRdxRefresh.mdx",version:"current",sidebar:"someSidebar",previous:{title:"useRdxReset(state)",permalink:"/docs/api/useRdxReset"},next:{title:"useRdxStatus",permalink:"/docs/api/useRdxStatus"}},w=[],O={rightToc:w};function j(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"\u4f1a\u6839\u636e\u5f53\u524d\u4f20\u5165\u7684state\u53c2\u6570\u6765\u8fd4\u4e00\u4e2a \u51fd\u6570\uff0c\u5982\u679cstate \u662f\u4e00\u4e2aatom\uff0c\u5219\u8c03\u7528\u8be5\u51fd\u6570\u5c06\u5237\u65b0\u72b6\u6001\uff0c\u5982\u679c\u662f\u4e00\u4e2acompute\uff0c\u5219\u4f1a\u91cd\u65b0\n\u8c03\u7528compute\u7684get\u65b9\u6cd5\u3002"),Object(s.b)("hr",null),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"function useRdxRefresh<GModel>(props: RdxValue<GModel>):() => void\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"state: \u53ef\u662f\u662f\u4e00\u4e2a atom \u6216\u8005\u662f\u4e00\u4e2a compute.")),Object(s.b)(l.a,{code:"import React from 'react';\nimport {\n  useRdxSetter,\n  RdxContext,\n  useRdxState,\n  compute,\n  useRdxStateLoader,\n  useRdxValueLoader,\n  useRdxRefresh,\n  isLoading,\n} from '@alife/rdx';\n\nconst pause = (t: number) => new Promise((resolve) => setTimeout(resolve, t));\nconst AsyncCompute = compute({\n  id: 'atom',\n  get: async () => {\n    await pause(1000);\n    return 1;\n  },\n});\n\nexport const Root = () => {\n  return (\n    <RdxContext>\n      <AsyncComponent />\n    </RdxContext>\n  );\n};\n\nconst AsyncComponent = () => {\n  const state = useRdxValueLoader(AsyncCompute);\n  const refresh = useRdxRefresh(AsyncCompute);\n  return (\n    <span\n      style={{\n        display: 'inline-flex',\n        justifyContent: 'space-around',\n      }}\n    >\n      <span>{isLoading(state.status) ? '\u52a0\u8f7d\u4e2d...' : state.content}</span>\n      <button\n        onClick={() => {\n          refresh();\n        }}\n      >\n        \u5237\u65b0\n      </button>\n    </span>\n  );\n};\n",example:r,mdxType:"ExampleCustomizer"}))}j.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r=n(0),o=n.n(r),a=n(133),i=n(134),c=n(135),s=n(120),l=n(127),u=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},p=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i};function f(e){var t,n,r=e.language,a=e.replace,i=e.section,c=e.source;if("object"==typeof c&&"default"in c&&(c=c.default),i){var s=new RegExp("// <"+i+">\\s([\\s\\S]*?)\\s// </"+i+">\\s","g");c=c.split(s).reduce((function(e,t,n){return n%2==0?e:e+"\n\n"+t}),"")}if(c=c.replace(/\/\/ <.*?\n/g,""),a)try{for(var f=u(Object.entries(a)),d=f.next();!d.done;d=f.next()){var m=p(d.value,2),h=(s=m[0],m[1]);c=c.replace(new RegExp(s,"gs"),h)}}catch(y){t={error:y}}finally{try{d&&!d.done&&(n=f.return)&&n.call(f)}finally{if(t)throw t.error}}return(c=c.trim()).includes("\n")||(c+="\n"),o.a.createElement("div",{style:{maxHeight:400,overflow:"auto"}},o.a.createElement(l.a.pre,null,o.a.createElement(l.a.code,{children:c,className:"language-"+r,mdxType:"code",originalType:"code",parentName:"pre"})))}var d=n(114),m=n.n(d),h=n(47),y=n.n(h),v=function(){return(v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function x(e){var t=e.active,n=e.icon,r=e.tooltipText,a=b(e,["active","icon","tooltipText"]);return o.a.createElement("span",v({},a,{className:m()(y.a.tooltip,y.a.item,t&&y.a.active)}),r&&o.a.createElement("span",{className:y.a["tooltip-text"]},r),n)}function g(e){var t=e.activeToggle,n=e.items,r=e.onClick,a=e.children;return o.a.createElement("section",{style:{position:"relative"},className:m()(y.a.toggler,y.a.header)},o.a.createElement("div",{style:{position:"absolute",left:0}},a),n.map((function(e,n){return o.a.createElement(x,v({active:t===n,key:n,onClick:function(){return r(n)}},e))})))}var w,O=(w=function(e,t){return(w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}w(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),j=function(e){function t(t){var n=e.call(this,t)||this;return n.state={hasError:!1},n}return O(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){},t.prototype.render=function(){return this.state.hasError?o.a.createElement("h1",null,"Something went wrong."):this.props.children},t}(o.a.Component),E=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},R=function(e){var t=e.code,n=Object(s.getParameters)({files:{"App.tsx":{content:t,isBinary:!1},"index.tsx":{content:'\nimport * as React from "react";\nimport { render } from "react-dom";\nimport * as App from "./App";\nconst rootElement = document.getElementById("root");\nfunction Main() {\n  return (\n    <div>\n      {Object.keys(App).map((item) => {\n        const Component = App[item];\n        return (\n          <div>\n            <h3>{item}</h3>\n            <Component />\n          </div>\n        );\n      })}\n    </div>\n  );\n}\nrender(<Main />, rootElement);\n        ',isBinary:!1},"index.html":{content:'\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta content="text/html; charset=utf-8" http-equiv="Content-type" />\n    <title>React Code Snippet Demo</title>\n  </head>\n  <body>\n    <div id="root" style="margin:20px"></div>\n  </body>\n</html>\n        ',isBinary:!1},"package.json":{content:'\n        {\n          "name": "rdx-sample",\n          "version": "1.0.0",\n          "description": "React and TypeScript example starter project",\n          "keywords": [\n            "typescript",\n            "react",\n            "starter"\n          ],\n          "main": "src/index.tsx",\n          "dependencies": {\n            "@alife/rdx": "0.x",\n            "react": "^16.12.0",\n            "react-dom": "^16.12.0",\n            "react-color": "^2.17.0",\n            "react-scripts": "3.3.0"\n          },\n          "devDependencies": {\n            "@types/react": "16.9.19",\n            "@types/react-dom": "16.9.5",\n            "typescript": "^4.1.0-beta"\n          },\n          "scripts": {\n            "start": "react-scripts start",\n            "build": "react-scripts build",\n            "test": "react-scripts test --env=jsdom",\n            "eject": "react-scripts eject"\n          },\n          "browserslist": [\n            ">0.2%",\n            "not dead",\n            "not ie <= 11",\n            "not op_mini all"\n          ]\n        }',isBinary:!1}}});return o.a.createElement("a",{style:{display:"flex",justifyContent:"center",alignItems:"center"},target:"_blank",href:"https://codesandbox.io/api/v1/sandboxes/define?parameters="+n},o.a.createElement(a.a,{size:24,color:"#23a3ff"}),o.a.createElement("div",{style:{color:"#23a3ff",marginLeft:12}},"Go To Codesandbox"))},C=[{icon:o.a.createElement(i.a,null),name:"Example",tooltipText:"Show example"},{icon:o.a.createElement(c.a,null),name:"Code",tooltipText:"Show source code"}];function k(e){var t=e.code,n=e.example,a=Object(r.useCallback)((function(e){switch(e.name){case"Code":return o.a.createElement(f,{language:"ts",source:t});case"Example":return o.a.createElement(o.a.Fragment,null,Object.keys(n).filter((function(e){return"default"!==e})).map((function(e){var t=n[e];return o.a.createElement("div",{key:e},o.a.createElement("h3",null,e),o.a.createElement(t,null))})));default:return null}}),[]),i=E(o.a.useState(0),2),c=i[0],s=i[1];return o.a.createElement("div",{style:{boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",borderRadius:"4px",padding:12,border:"1px solid lightgrey",marginBottom:12}},o.a.createElement(j,null,o.a.createElement(g,{activeToggle:c,onClick:function(e){s(e)},items:C},o.a.createElement(R,{code:t})),o.a.createElement(a,{name:C[c].name})))}},120:function(e,t,n){"use strict";t.__esModule=!0;var r=n(121);t.getParameters=r.getParameters},121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(122);t.getParameters=function(e){return t=JSON.stringify(e),r.compressToBase64(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");var t}},122:function(e,t,n){var r,o=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={};function o(e,t){if(!r[e]){r[e]={};for(var n=0;n<e.length;n++)r[e][e.charAt(n)]=n}return r[e][t]}var a={compressToBase64:function(e){if(null==e)return"";var n=a._compress(e,6,(function(e){return t.charAt(e)}));switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:a._decompress(e.length,32,(function(n){return o(t,e.charAt(n))}))},compressToUTF16:function(t){return null==t?"":a._compress(t,15,(function(t){return e(t+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:a._decompress(e.length,16384,(function(t){return e.charCodeAt(t)-32}))},compressToUint8Array:function(e){for(var t=a.compress(e),n=new Uint8Array(2*t.length),r=0,o=t.length;r<o;r++){var i=t.charCodeAt(r);n[2*r]=i>>>8,n[2*r+1]=i%256}return n},decompressFromUint8Array:function(t){if(null==t)return a.decompress(t);for(var n=new Array(t.length/2),r=0,o=n.length;r<o;r++)n[r]=256*t[2*r]+t[2*r+1];var i=[];return n.forEach((function(t){i.push(e(t))})),a.decompress(i.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":a._compress(e,6,(function(e){return n.charAt(e)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),a._decompress(e.length,32,(function(t){return o(n,e.charAt(t))})))},compress:function(t){return a._compress(t,16,(function(t){return e(t)}))},_compress:function(e,t,n){if(null==e)return"";var r,o,a,i={},c={},s="",l="",u="",p=2,f=3,d=2,m=[],h=0,y=0;for(a=0;a<e.length;a+=1)if(s=e.charAt(a),Object.prototype.hasOwnProperty.call(i,s)||(i[s]=f++,c[s]=!0),l=u+s,Object.prototype.hasOwnProperty.call(i,l))u=l;else{if(Object.prototype.hasOwnProperty.call(c,u)){if(u.charCodeAt(0)<256){for(r=0;r<d;r++)h<<=1,y==t-1?(y=0,m.push(n(h)),h=0):y++;for(o=u.charCodeAt(0),r=0;r<8;r++)h=h<<1|1&o,y==t-1?(y=0,m.push(n(h)),h=0):y++,o>>=1}else{for(o=1,r=0;r<d;r++)h=h<<1|o,y==t-1?(y=0,m.push(n(h)),h=0):y++,o=0;for(o=u.charCodeAt(0),r=0;r<16;r++)h=h<<1|1&o,y==t-1?(y=0,m.push(n(h)),h=0):y++,o>>=1}0==--p&&(p=Math.pow(2,d),d++),delete c[u]}else for(o=i[u],r=0;r<d;r++)h=h<<1|1&o,y==t-1?(y=0,m.push(n(h)),h=0):y++,o>>=1;0==--p&&(p=Math.pow(2,d),d++),i[l]=f++,u=String(s)}if(""!==u){if(Object.prototype.hasOwnProperty.call(c,u)){if(u.charCodeAt(0)<256){for(r=0;r<d;r++)h<<=1,y==t-1?(y=0,m.push(n(h)),h=0):y++;for(o=u.charCodeAt(0),r=0;r<8;r++)h=h<<1|1&o,y==t-1?(y=0,m.push(n(h)),h=0):y++,o>>=1}else{for(o=1,r=0;r<d;r++)h=h<<1|o,y==t-1?(y=0,m.push(n(h)),h=0):y++,o=0;for(o=u.charCodeAt(0),r=0;r<16;r++)h=h<<1|1&o,y==t-1?(y=0,m.push(n(h)),h=0):y++,o>>=1}0==--p&&(p=Math.pow(2,d),d++),delete c[u]}else for(o=i[u],r=0;r<d;r++)h=h<<1|1&o,y==t-1?(y=0,m.push(n(h)),h=0):y++,o>>=1;0==--p&&(p=Math.pow(2,d),d++)}for(o=2,r=0;r<d;r++)h=h<<1|1&o,y==t-1?(y=0,m.push(n(h)),h=0):y++,o>>=1;for(;;){if(h<<=1,y==t-1){m.push(n(h));break}y++}return m.join("")},decompress:function(e){return null==e?"":""==e?null:a._decompress(e.length,32768,(function(t){return e.charCodeAt(t)}))},_decompress:function(t,n,r){var o,a,i,c,s,l,u,p=[],f=4,d=4,m=3,h="",y=[],v={val:r(0),position:n,index:1};for(o=0;o<3;o+=1)p[o]=o;for(i=0,s=Math.pow(2,2),l=1;l!=s;)c=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),i|=(c>0?1:0)*l,l<<=1;switch(i){case 0:for(i=0,s=Math.pow(2,8),l=1;l!=s;)c=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),i|=(c>0?1:0)*l,l<<=1;u=e(i);break;case 1:for(i=0,s=Math.pow(2,16),l=1;l!=s;)c=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),i|=(c>0?1:0)*l,l<<=1;u=e(i);break;case 2:return""}for(p[3]=u,a=u,y.push(u);;){if(v.index>t)return"";for(i=0,s=Math.pow(2,m),l=1;l!=s;)c=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),i|=(c>0?1:0)*l,l<<=1;switch(u=i){case 0:for(i=0,s=Math.pow(2,8),l=1;l!=s;)c=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),i|=(c>0?1:0)*l,l<<=1;p[d++]=e(i),u=d-1,f--;break;case 1:for(i=0,s=Math.pow(2,16),l=1;l!=s;)c=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),i|=(c>0?1:0)*l,l<<=1;p[d++]=e(i),u=d-1,f--;break;case 2:return y.join("")}if(0==f&&(f=Math.pow(2,m),m++),p[u])h=p[u];else{if(u!==d)return null;h=a+a.charAt(0)}y.push(h),p[d++]=a+h.charAt(0),a=h,0==--f&&(f=Math.pow(2,m),m++)}}};return a}();void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)},133:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(7),i=n.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,l=s(e,["color","size"]);return o.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),o.a.createElement("polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}),o.a.createElement("polyline",{points:"7.5 19.79 7.5 14.6 3 12"}),o.a.createElement("polyline",{points:"21 12 16.5 14.6 16.5 19.79"}),o.a.createElement("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),o.a.createElement("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="Codesandbox",t.a=l},134:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(7),i=n.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,l=s(e,["color","size"]);return o.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),o.a.createElement("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),o.a.createElement("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="Box",t.a=l},135:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(7),i=n.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,l=s(e,["color","size"]);return o.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("polyline",{points:"16 18 22 12 16 6"}),o.a.createElement("polyline",{points:"8 6 2 12 8 18"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="Code",t.a=l}}]);