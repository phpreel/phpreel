(self.webpackChunkphpreel_org=self.webpackChunkphpreel_org||[]).push([[801],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2866:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),s=["components"],a={sidebar_position:2},c="File structure",l={unversionedId:"themes/file-structure",id:"themes/file-structure",isDocsHomePage:!1,title:"File structure",description:"In order to create a phpReel theme you must comply to the theme standard defined by us. Don't worry, it's pretty simple. You just have to create a couple of directories and files as described below.",source:"@site/docs/themes/file-structure.md",sourceDirName:"themes",slug:"/themes/file-structure",permalink:"/phpreel/themes/file-structure",editUrl:"https://github.com/phpreel/developer.phpreel.github.io/docs/themes/file-structure.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/phpreel/themes/introduction"},next:{title:"Blade views",permalink:"/phpreel/themes/blade-views"}},u=[{value:"config.json file",id:"configjson-file",children:[]},{value:"cover.jpg",id:"coverjpg",children:[]},{value:"Directories inside theme folder",id:"directories-inside-theme-folder",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-structure"},"File structure"),(0,i.kt)("p",null,"In order to create a phpReel theme you must comply to the theme standard defined by us. Don't worry, it's pretty simple. You just have to create a couple of directories and files as described below. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"themes\n\u2502\n\u2514\u2500\u2500\u2500themeFolder\n    \u2502   config.json\n    \u2502   cover.jpg\n    \u2502   config.json   \n    \u2514\u2500\u2500\u2500auth\n    \u2514\u2500\u2500\u2500categories\n    \u2514\u2500\u2500\u2500css\n    \u2514\u2500\u2500\u2500episodes\n    \u2514\u2500\u2500\u2500img\n    \u2514\u2500\u2500\u2500js\n    \u2514\u2500\u2500\u2500lang\n    \u2514\u2500\u2500\u2500layouts\n    \u2514\u2500\u2500\u2500movie\n    \u2514\u2500\u2500\u2500pagination\n    \u2514\u2500\u2500\u2500search\n    \u2514\u2500\u2500\u2500series\n    \u2514\u2500\u2500\u2500subscribe\n    \u2514\u2500\u2500\u2500trailer\n    \u2514\u2500\u2500\u2500user\n")),(0,i.kt)("h2",{id:"configjson-file"},"config.json file"),(0,i.kt)("p",null,"This is a mandatory file that contains basic information about the theme. It's a simple JSON file that has to be structured exactly as bellow."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Theme name": "Default",\n    "Description": "This is the default theme for phpReel",\n    "Author": "phpReel team",\n    "Theme URL": "https://phpreel.org/",\n    "Version": "1.0.0",\n    "License": "MIT",\n    "License URL": "https://github.com/phpreel/phpreel/blob/main/LICENSE"\n}\n')),(0,i.kt)("h2",{id:"coverjpg"},"cover.jpg"),(0,i.kt)("p",null,"Mandatory image file used as a thumbnail image for the theme inside the dashboard. The file must have exactly the same name and extension."),(0,i.kt)("h2",{id:"directories-inside-theme-folder"},"Directories inside theme folder"),(0,i.kt)("p",null,"As shown in the File structure section, there are a number of directories and files (we call them views) in those directories. To make sure every page work you must create all of them. In addition you can add as many views or directories you want, the above structure is the bare minimum."))}d.isMDXComponent=!0}}]);