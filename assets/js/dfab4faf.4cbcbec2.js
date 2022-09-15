"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98131],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>u});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function m(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),c=p(i),u=a,d=c["".concat(l,".").concat(u)]||c[u]||g[u]||o;return i?n.createElement(d,r(r({ref:t},s),{},{components:i})):n.createElement(d,r({ref:t},s))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=c;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:a,r[1]=m;for(var p=2;p<o;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},62404:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));const o={title:"Nextjs image optimization with examples",description:"Built-in image optimization using next image component",slug:"using-next-image",authors:"michael",tags:["nextjs","img","image","next-image","image-optimization"],image:"/img/placeholder.png",hide_table_of_contents:!1},r=void 0,m={permalink:"/blog/using-next-image",source:"@site/blog/2022-08-17-using-next-image.md",title:"Nextjs image optimization with examples",description:"Built-in image optimization using next image component",date:"2022-08-17T00:00:00.000Z",formattedDate:"August 17, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"img",permalink:"/blog/tags/img"},{label:"image",permalink:"/blog/tags/image"},{label:"next-image",permalink:"/blog/tags/next-image"},{label:"image-optimization",permalink:"/blog/tags/image-optimization"}],readingTime:13.225,hasTruncateMarker:!0,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],frontMatter:{title:"Nextjs image optimization with examples",description:"Built-in image optimization using next image component",slug:"using-next-image",authors:"michael",tags:["nextjs","img","image","next-image","image-optimization"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"NextAuth - Google And GitHub Authentications for Nextjs",permalink:"/blog/nextauth-google-github-authentication-nextjs"},nextItem:{title:"Mocking API calls in React Tests with Nock",permalink:"/blog/mocking-api-calls-in-react"},relatedPosts:[{title:"A Guide for Next.js with TypeScript",permalink:"/blog/next-js-with-typescript",formattedDate:"September 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:8.005,date:"2022-09-12T00:00:00.000Z"},{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component",formattedDate:"September 4, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:9.48,date:"2022-09-04T00:00:00.000Z"},{title:"Build a Progressive Web App (PWA) with Next.js",permalink:"/blog/next-js-pwa",formattedDate:"September 11, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:18.525,date:"2022-09-11T00:00:00.000Z"}],authorPosts:[{title:"A Guide for Next.js with TypeScript",permalink:"/blog/next-js-with-typescript",formattedDate:"September 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:8.005,date:"2022-09-12T00:00:00.000Z"},{title:"Next.js environment variables",permalink:"/blog/next-js-environment-variables",formattedDate:"September 7, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:6.48,date:"2022-09-07T00:00:00.000Z"},{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component",formattedDate:"September 4, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:9.48,date:"2022-09-04T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2}],s={toc:p};function g(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Images are a significant part of modern-day web application development. Depending on how you use them, they can either make or mar your applications' developer and user experiences. Images impact user experience and are equally crucial in Search Engine Optimization (SEO) ranking when used right.\nTraditionally, images are added to web pages with the HTML ",(0,a.kt)("inlineCode",{parentName:"p"},"img")," tag. This might prove to be efficient for simple use-cases, but things quickly get untidy when dealing with a sizable amount of images. "),(0,a.kt)("p",null,"NextJS introduced a solution for delivering performant images on the web in v.10. It features a new Image component and built-in automatic image optimization. In the coming sections, you'll learn how to leverage this solution for optimizing and developing performant applications, thereby improving developer and end-user experiences."))}g.isMDXComponent=!0}}]);