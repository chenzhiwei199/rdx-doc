(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{160:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},403:function(e,t,a){"use strict";t.a=function(){return null}},500:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(228),o=a(60),l=a.n(o);var i=function(){return r.a.createElement("nav",{"aria-label":"Skip navigation links"},r.a.createElement("button",{type:"button",tabIndex:0,className:l.a.skipToContent,onKeyDown:function(e){if(13===e.keyCode){document.activeElement.blur();var t=document.querySelector("main:first-of-type");t&&t.scrollIntoView()}}},"Skip to main content"))},s=a(246),u=a(638),d=a(61),m=a.n(d);var f=function(){var e,t=Object(u.a)(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar,o=Object(s.useThemeConfig)().announcementBar;if(!o)return null;var l=o.content,i=o.backgroundColor,d=o.textColor,f=o.isCloseable;return!l||f&&a?null:r.a.createElement("div",{className:m.a.announcementBar,style:{backgroundColor:i,color:d},role:"banner"},r.a.createElement("div",{className:Object(c.a)(m.a.announcementBarContent,(e={},e[m.a.announcementBarCloseable]=f,e)),dangerouslySetInnerHTML:{__html:l}}),f?r.a.createElement("button",{type:"button",className:m.a.announcementBarClose,onClick:n,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},h=a(3),b=a(497),v=a(705),p=a.n(v),g=a(25),k=a(62),E=a.n(k),O=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(E.a.toggle,E.a.dark),style:a},t)},j=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(E.a.toggle,E.a.light),style:a},t)},y=function(e){var t=Object(s.useThemeConfig)().colorMode.switchConfig,a=t.darkIcon,n=t.darkIconStyle,c=t.lightIcon,o=t.lightIconStyle,l=Object(g.default)().isClient;return r.a.createElement(p.a,Object(h.a)({disabled:!l,icons:{checked:r.a.createElement(O,{icon:a,style:n}),unchecked:r.a.createElement(j,{icon:c,style:o})}},e))},_=a(595),C=a(503),w=a(641),N=function(e){var t=Object(C.useLocation)(),a=Object(n.useState)(!e),r=a[0],c=a[1],o=Object(n.useRef)(!1),l=Object(n.useState)(0),i=l[0],s=l[1],u=Object(n.useState)(0),d=u[0],m=u[1],f=Object(n.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return Object(w.a)((function(t){var a=t.scrollY;if(e&&!(a<d)){if(o.current)return o.current=!1,c(!1),void s(a);i&&0===a&&c(!0);var n=document.documentElement.scrollHeight-d,r=window.innerHeight;i&&a>=i?c(!1):a+r<n&&c(!0),s(a)}}),[i,d,o]),Object(n.useEffect)((function(){e&&i&&c(!0)}),[t.pathname]),Object(n.useEffect)((function(){e&&(o.current=!0)}),[t.hash]),{navbarRef:f,isNavbarVisible:r}},T=a(642),S=a(643),L=a(7),I=a(568);function D(e){var t=e.mobile,a=Object(L.a)(e,["mobile"]),n=Object(g.default)(),c=n.siteConfig.baseUrl,o=n.i18n,l=o.defaultLocale,i=o.currentLocale,s=o.locales,u=o.localeConfigs,d=Object(C.useLocation)().pathname;function m(e){return u[e].label}var f=i===l?c:c.replace("/"+i+"/","/"),b=d.replace(c,"");var v=s.map((function(e){var t=""+function(e){return e===l?""+f:""+f+e+"/"}(e)+b;return{isNavLink:!0,label:m(e),to:"pathname://"+t,target:"_self",autoAddBaseUrl:!1,className:e===i?"dropdown__link--active":""}})),p=t?"Languages":m(i);return r.a.createElement(I.a,Object(h.a)({},a,{mobile:t,label:p,items:v}))}var B={default:function(){return I.a},localeDropdown:function(){return D},docsVersion:function(){return a(709).default},docsVersionDropdown:function(){return a(710).default},doc:function(){return a(711).default}};function x(e){var t=e.type,a=Object(L.a)(e,["type"]),n=function(e){void 0===e&&(e="default");var t=B[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(n,a)}var P=a(694),M=a(644),A=a(64),V=a.n(A);var F=function(){var e,t,a=Object(s.useThemeConfig)(),o=a.navbar,l=o.items,i=o.hideOnScroll,u=o.style,d=a.colorMode.disableSwitch,m=Object(n.useState)(!1),f=m[0],v=m[1],p=Object(n.useState)(!1),g=p[0],k=p[1],E=Object(_.a)(),O=E.isDarkTheme,j=E.setLightTheme,C=E.setDarkTheme,w=N(i),L=w.navbarRef,I=w.isNavbarVisible;Object(T.a)(f);var D=Object(n.useCallback)((function(){v(!0)}),[v]),B=Object(n.useCallback)((function(){v(!1)}),[v]),A=Object(n.useCallback)((function(e){return e.target.checked?C():j()}),[j,C]),F=Object(S.a)();Object(n.useEffect)((function(){F===S.b.desktop&&v(!1)}),[F]);var X=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")}))}}(l),H=X.leftItems,R=X.rightItems;return r.a.createElement("nav",{ref:L,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===u,"navbar--primary":"primary"===u,"navbar-sidebar--show":f},e[V.a.navbarHideable]=i,e[V.a.navbarHidden]=!I,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=l&&0!==l.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:D,onKeyDown:D},r.a.createElement(M.a,null)),r.a.createElement(P.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title",(t={},t[V.a.hideLogoText]=g,t))}),H.map((function(e,t){return r.a.createElement(x,Object(h.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},R.map((function(e,t){return r.a.createElement(x,Object(h.a)({},e,{key:t}))})),!d&&r.a.createElement(y,{className:V.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:O,onChange:A}),r.a.createElement(b.a,{handleSearchBarToggle:k,isSearchBarExpanded:g}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:B}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(P.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:B}),!d&&f&&r.a.createElement(y,{"aria-label":"Dark mode toggle in sidebar",checked:O,onChange:A})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return r.a.createElement(x,Object(h.a)({mobile:!0},e,{onClick:B,key:t}))})))))))},X=a(250),H=a(470),R=a(65),U=a.n(R);function G(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,o=Object(L.a)(e,["to","href","label","prependBaseUrlToHref"]),l=Object(H.a)(t),i=Object(H.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(X.a,Object(h.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?i:a}:{to:l},o),n)}var Y=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var K=function(){var e=Object(s.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,o=void 0===n?[]:n,l=t.logo,i=void 0===l?{}:l,u=Object(H.a)(i.src);return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(G,e))}))):null)}))),(i||a)&&r.a.createElement("div",{className:"footer__bottom text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:U.a.footerLogoLink},r.a.createElement(Y,{alt:i.alt,url:u})):r.a.createElement(Y,{alt:i.alt,url:u})),a?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null},W=a(10),z="light",J="dark",q=function(e){return e===J?J:z},Q=function(){return W.a.canUseDOM?q(document.documentElement.getAttribute("data-theme")):z},Z=function(e){try{localStorage.setItem("theme",q(e))}catch(t){console.error(t)}},$=function(){var e=Object(s.useThemeConfig)().colorMode,t=e.disableSwitch,a=e.respectPrefersColorScheme,r=Object(n.useState)(Q),c=r[0],o=r[1],l=Object(n.useCallback)((function(){o(z),Z(z)}),[]),i=Object(n.useCallback)((function(){o(J),Z(J)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",q(c))}),[c]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&o(q(e))}catch(a){console.error(a)}}),[o]),Object(n.useEffect)((function(){t&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;o(t?J:z)}))}),[]),{isDarkTheme:c===J,setLightTheme:l,setDarkTheme:i}},ee=a(640);var te=function(e){var t=$(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(ee.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},ae=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},ne=function(){var e=Object(s.useThemeConfig)().announcementBar,t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useCallback)((function(){localStorage.setItem("docusaurus.announcement.dismiss","true"),r(!0)}),[]);return Object(n.useEffect)((function(){if(e){var t=e.id,a=localStorage.getItem("docusaurus.announcement.id");"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;localStorage.setItem("docusaurus.announcement.id",t),n&&localStorage.setItem("docusaurus.announcement.dismiss","false"),(n||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&r(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}},re=a(639);var ce=function(e){var t=ae(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=ne(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(re.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)};function oe(e){var t=e.children;return r.a.createElement(te,null,r.a.createElement(ce,null,r.a.createElement(s.DocsPreferredVersionContextProvider,null,t)))}var le=a(26);function ie(e){var t=e.locale,a=e.version,n=e.tag,c=t;return r.a.createElement(le.a,null,c&&r.a.createElement("meta",{name:"docsearch:language",content:c}),a&&r.a.createElement("meta",{name:"docsearch:version",content:a}),n&&r.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:n}))}function se(e){var t=Object(g.default)(),a=t.siteConfig,n=t.i18n.currentLocale,c=a.favicon,o=a.themeConfig,l=o.image,i=o.metadatas,u=a.url,d=e.title,m=e.description,f=e.image,b=e.keywords,v=e.permalink,p=e.searchMetadatas,k=Object(s.useTitleFormatter)(d),E=f||l,O=Object(H.a)(E,{absolute:!0}),j=Object(H.a)(c),y=n.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,null,r.a.createElement("html",{lang:y}),k&&r.a.createElement("title",null,k),k&&r.a.createElement("meta",{property:"og:title",content:k}),c&&r.a.createElement("link",{rel:"shortcut icon",href:j}),m&&r.a.createElement("meta",{name:"description",content:m}),m&&r.a.createElement("meta",{property:"og:description",content:m}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),E&&r.a.createElement("meta",{property:"og:image",content:O}),E&&r.a.createElement("meta",{name:"twitter:image",content:O}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),v&&r.a.createElement("meta",{property:"og:url",content:u+v}),v&&r.a.createElement("link",{rel:"canonical",href:u+v}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(ie,Object(h.a)({tag:s.DEFAULT_SEARCH_TAG,locale:n},p)),r.a.createElement(le.a,null,i.map((function(e,t){return r.a.createElement("meta",Object(h.a)({key:"metadata_"+t},e))}))))}a(66);var ue=function(){Object(n.useEffect)((function(){function e(e){"keydown"===e.type&&"Tab"===e.key&&document.body.classList.add("navigation-with-keyboard"),"mousedown"===e.type&&document.body.classList.remove("navigation-with-keyboard")}return document.addEventListener("keydown",e),document.addEventListener("mousedown",e),function(){document.body.classList.remove("navigation-with-keyboard"),document.removeEventListener("keydown",e),document.removeEventListener("mousedown",e)}}),[])};a(67);t.a=function(e){var t=e.children,a=e.noFooter,n=e.wrapperClassName;return ue(),r.a.createElement(oe,null,r.a.createElement(se,e),r.a.createElement(i,null),r.a.createElement(f,null),r.a.createElement(F,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(K,null))}},568:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(228),i=a(250),s=a(470),u=a(503),d=a(246);function m(e){var t=e.activeBasePath,a=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,d=e.activeClassName,m=void 0===d?"navbar__link--active":d,f=e.prependBaseUrlToHref,h=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),b=Object(s.a)(c),v=Object(s.a)(t),p=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(n.a)({},l?{target:"_blank",rel:"noopener noreferrer",href:f?p:l}:Object.assign({isNavLink:!0,activeClassName:m,to:b},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(v)}}:null),h),u)}function f(e){var t=e.items,a=e.position,i=e.className,s=Object(r.a)(e,["items","position","className"]),u=Object(c.useRef)(null),d=Object(c.useRef)(null),f=Object(c.useState)(!1),h=f[0],b=f[1];Object(c.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var v=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?o.a.createElement("div",{ref:u,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a,"dropdown--show":h})},o.a.createElement(m,Object(n.a)({className:v(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!h))}}),s.label),o.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,a){var c=e.className,l=Object(r.a)(e,["className"]);return o.a.createElement("li",{key:a},o.a.createElement(m,Object(n.a)({onKeyDown:function(e){if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var n=u.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active",className:v(c,!0)},l)))})))):o.a.createElement(m,Object(n.a)({className:v(i)},s))}function h(e){var t,a,i=e.items,s=e.className,f=(e.position,Object(r.a)(e,["items","className","position"])),h=Object(c.useRef)(null),b=Object(u.useLocation)().pathname,v=Object(c.useState)((function(){var e;return null===(e=!(null!=i&&i.some((function(e){return Object(d.isSamePath)(e.to,b)}))))||void 0===e||e})),p=v[0],g=v[1],k=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};if(!i)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(m,Object(n.a)({className:k(s)},f)));var E=null!==(t=h.current)&&void 0!==t&&t.scrollHeight?(null===(a=h.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":p})},o.a.createElement(m,Object(n.a)({role:"button",className:k(s,!0)},f,{onClick:function(){g((function(e){return!e}))}}),f.label),o.a.createElement("ul",{className:"menu__list",ref:h,style:{height:p?void 0:E}},i.map((function(e,t){var a=e.className,c=Object(r.a)(e,["className"]);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(m,Object(n.a)({activeClassName:"menu__link--active",className:k(a)},c,{onClick:f.onClick})))}))))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(r.a)(e,["mobile"]),c=a?h:f;return o.a.createElement(c,n)}},638:function(e,t,a){"use strict";var n=a(0),r=a(639);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},639:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},641:function(e,t,a){"use strict";var n=a(0),r=a(10),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],l=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",l,e),function(){return window.removeEventListener("scroll",l,e)}}),t),r}},642:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},643:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),c=a[0],o=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){o(t())}}),[]),c}},644:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c);t.a=function(e){var t=e.width,a=void 0===t?30:t,c=e.height,l=void 0===c?30:c,i=e.className,s=Object(r.a)(e,["width","height","className"]);return o.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:i,width:a,height:l,viewBox:"0 0 30 30",role:"img",focusable:"false"},s),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},694:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(250),i=a(228),s=a(25),u=a(595),d=a(63),m=a.n(d),f=function(e){var t=Object(s.default)().isClient,a=Object(u.a)().isDarkTheme,c=e.sources,l=e.className,d=e.alt,f=void 0===d?"":d,h=Object(r.a)(e,["sources","className","alt"]),b=t?a?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,b.map((function(e){return o.a.createElement("img",Object(n.a)({key:e,src:c[e],alt:f,className:Object(i.a)(m.a.themedImage,m.a["themedImage--"+e],l)},h))})))},h=a(470),b=a(246),v=a(578);t.a=function(e){var t=Object(s.default)().isClient,a=Object(b.useThemeConfig)().navbar,c=a.title,i=a.logo,u=void 0===i?{src:""}:i,d=e.imageClassName,m=e.titleClassName,p=Object(r.a)(e,["imageClassName","titleClassName"]),g=Object(h.a)(u.href||"/"),k=u.target?{target:u.target}:Object(v.a)(g)?{}:{rel:"noopener noreferrer",target:"_blank"},E={light:Object(h.a)(u.src),dark:Object(h.a)(u.srcDark||u.src)};return o.a.createElement(l.a,Object(n.a)({to:g},p,k),u.src&&o.a.createElement(f,{key:t,className:d,sources:E,alt:u.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:m},c))}},705:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),l=m(a(160)),i=m(a(1)),s=m(a(706)),u=m(a(707)),d=a(708);function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},706:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},707:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},708:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},709:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(568),i=a(473),s=a(246);function u(e){var t,a=e.label,c=e.to,u=e.docsPluginId,d=Object(r.a)(e,["label","to","docsPluginId"]),m=Object(i.useActiveVersion)(u),f=Object(s.useDocsPreferredVersion)(u).preferredVersion,h=Object(i.useLatestVersion)(u),b=null!==(t=null!=m?m:f)&&void 0!==t?t:h,v=null!=a?a:b.label,p=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return o.a.createElement(l.a,Object(n.a)({},d,{label:v,to:p}))}},710:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(568),i=a(473),s=a(246),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,a,c=e.mobile,d=e.docsPluginId,m=e.dropdownActiveClassDisabled,f=e.dropdownItemsBefore,h=e.dropdownItemsAfter,b=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),v=Object(i.useActiveDocContext)(d),p=Object(i.useVersions)(d),g=Object(i.useLatestVersion)(d),k=Object(s.useDocsPreferredVersion)(d),E=k.preferredVersion,O=k.savePreferredVersionName;var j=null!==(t=null!==(a=v.activeVersion)&&void 0!==a?a:E)&&void 0!==t?t:g,y=c?"Versions":j.label,_=c?void 0:u(j).path;return o.a.createElement(l.a,Object(n.a)({},b,{mobile:c,label:y,to:_,items:function(){var e=p.map((function(e){var t=(null==v?void 0:v.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==v?void 0:v.activeVersion)},onClick:function(){O(e.name)}}})),t=[].concat(f,e,h);if(!(t.length<=1))return t}(),isActive:m?function(){return!1}:void 0}))}},711:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(568),i=a(473),s=a(228),u=a(246);function d(e){var t,a,c=e.docId,d=e.activeSidebarClassName,m=e.label,f=e.docsPluginId,h=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),b=Object(i.useActiveDocContext)(f),v=b.activeVersion,p=b.activeDoc,g=Object(u.useDocsPreferredVersion)(f).preferredVersion,k=Object(i.useLatestVersion)(f),E=null!==(t=null!=v?v:g)&&void 0!==t?t:k,O=E.docs.find((function(e){return e.id===c}));if(!O)throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+E.name+".\nAvailable docIds=\n- "+E.docs.join("\n- "));return o.a.createElement(l.a,Object(n.a)({exact:!0},h,{className:Object(s.a)(h.className,(a={},a[d]=p&&p.sidebar===O.sidebar,a)),label:null!=m?m:O.id,to:O.path}))}}}]);