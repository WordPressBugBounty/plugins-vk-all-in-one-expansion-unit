(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,a=window.React;var r,l;function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(null,arguments)}var c=function(e){return a.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},e),r||(r=a.createElement("g",{clipPath:"url(#icon_svg__a)"},a.createElement("path",{fill:"#000",d:"M11.5 6v1h-6v2h1V8h11v1h1V7h-6V6z"}),a.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M9.5 1.5V4h5V1.5zM9 0a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zM3.5 11v2.5h5V11zM3 9.5a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1zM15.5 11v2.5h5V11zM15 9.5a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1z",clipRule:"evenodd"}),a.createElement("path",{fill:"#fff",d:"M7.022 11.5c1.104 0 1.67.957 1.596 1.783l2.271-.005c1.418 0 2.142 1.705 1.166 2.725L9.598 18.59l1.086 3.498c.304.971-.383 2.092-1.534 2.092H5.862c-.37 0-.678-.118-.921-.293l-.193.549-.005.012c-.52 1.403-2.496 1.403-3.017 0l-.006-.015-3.145-9.048-.01-.038c-.254-.873.308-2.07 1.543-2.07h3.16l.245-.687a1.61 1.61 0 0 1 1.515-1.082h.005z"}),a.createElement("path",{fill:"#000",d:"m10.89 14.778-3.267.007a.11.11 0 0 0-.102.076l-.25.722c-.022.076.03.152.103.152h1.27c.095 0 .146.122.08.19L6.7 18.105h.007l1.042 3.397c.022.076-.03.144-.103.144h-1.02a.104.104 0 0 1-.102-.076L6 19.83c-.029-.106-.168-.106-.205-.007l-.426 1.223a.1.1 0 0 0 0 .069l.39 1.481c.014.046.058.084.102.084H9.15c.073 0 .125-.076.103-.145l-1.329-4.277c-.014-.038 0-.084.03-.114l3.016-3.176c.066-.069.015-.19-.08-.19"}),a.createElement("path",{fill:"#D8141C",d:"m7.022 13-1.99.008a.11.11 0 0 0-.102.076l-.257.721c-.03.076.03.152.103.152h.836c.074 0 .125.076.103.152l-2.37 6.717a.108.108 0 0 1-.206 0l-1.703-4.848a.112.112 0 0 1 .103-.152h.859a.11.11 0 0 1 .103.076l.616 1.748a.108.108 0 0 0 .206 0l.954-2.72a.112.112 0 0 0-.103-.152H.108c-.073 0-.125.076-.103.152l3.127 8.996a.108.108 0 0 0 .205 0l3.787-10.774c.022-.076-.029-.152-.102-.152"}))),l||(l=a.createElement("defs",null,a.createElement("clipPath",{id:"icon_svg__a"},a.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"})))))};const o=JSON.parse('{"apiVersion":2,"name":"vk-blocks/sitemap","title":"HTML Sitemap","category":"veu-block","description":"Display HTML Sitemap","textdomain":"vk-all-in-one-expansion-unit","attributes":{},"supports":{"className":true}}'),i=window.wp.blockEditor,s=window.wp.serverSideRender;var u=e.n(s);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}var m,v,f,h=o.name,b={icon:React.createElement(c,null),edit:function(e){var t=e.attributes,a=t.className,r=(0,i.useBlockProps)({className:"veu_sitemap_block ".concat(a)});return React.createElement(React.Fragment,null,React.createElement("div",r,React.createElement(u(),{block:"vk-blocks/sitemap",attributes:t})))}};(0,t.unstable__bootstrapServerSideBlockDefinitions)((m={},f=o,(v=function(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,"string");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:t+""}(v=h))in m?Object.defineProperty(m,v,{value:f,enumerable:!0,configurable:!0,writable:!0}):m[v]=f,m)),(0,t.registerBlockType)(o,b)})();