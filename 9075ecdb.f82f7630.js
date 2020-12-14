(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{131:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),p=function(e){var t=c.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=p(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(r),f=n,d=b["".concat(i,".").concat(f)]||b[f]||u[f]||a;return r?c.a.createElement(d,o(o({ref:t},s),{},{components:r})):c.a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<a;s++)i[s]=r[s];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),c=r(6),a=(r(0),r(131)),i={id:"_interfaces_.scrollseekconfiguration",title:"Interface: ScrollSeekConfiguration",sidebar_label:"ScrollSeekConfiguration"},o={unversionedId:"api/interfaces/_interfaces_.scrollseekconfiguration",id:"api/interfaces/_interfaces_.scrollseekconfiguration",isDocsHomePage:!1,title:"Interface: ScrollSeekConfiguration",description:'"interfaces".ScrollSeekConfiguration',source:"@site/docs/api/interfaces/_interfaces_.scrollseekconfiguration.md",slug:"/api/interfaces/_interfaces_.scrollseekconfiguration",permalink:"/api/interfaces/_interfaces_.scrollseekconfiguration",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_interfaces_.scrollseekconfiguration.md",version:"current",sidebar_label:"ScrollSeekConfiguration",sidebar:"someSidebar",previous:{title:"Interface: RecordItem",permalink:"/api/interfaces/_interfaces_.recorditem"},next:{title:"Interface: ScrollSeekToggle",permalink:"/api/interfaces/_interfaces_.scrollseektoggle"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"change",id:"change",children:[]},{value:"enter",id:"enter",children:[]},{value:"exit",id:"exit",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/modules/_interfaces_"}),'"interfaces"'),".ScrollSeekConfiguration"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ScrollSeekConfiguration"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"change"},"change"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"change"),": (velocity: number, range: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.listrange"}),"ListRange"),") => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/e394cc8/src/interfaces.ts#L90"}),"src/interfaces.ts:90"))),Object(a.b)("p",null,"called during scrolling in scroll seek mode - use to display a hint where the list is."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"enter"},"enter"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"enter"),": ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.scrollseektoggle"}),"ScrollSeekToggle")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/e394cc8/src/interfaces.ts#L86"}),"src/interfaces.ts:86"))),Object(a.b)("p",null,'Callback to determine if the list should enter "scroll seek" mode.'),Object(a.b)("hr",null),Object(a.b)("h3",{id:"exit"},"exit"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"exit"),": ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.scrollseektoggle"}),"ScrollSeekToggle")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/e394cc8/src/interfaces.ts#L94"}),"src/interfaces.ts:94"))),Object(a.b)("p",null,'Callback to determine if the list should enter "scroll seek" mode.'))}p.isMDXComponent=!0}}]);