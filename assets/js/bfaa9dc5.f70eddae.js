"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16497],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),m=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(r),h=i,d=u["".concat(c,".").concat(h)]||u[h]||s[h]||n;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<n;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},57980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var a=r(87462),i=(r(67294),r(3905));const n={title:"Next.js E-commerce App with Strapi and Chakra UI",description:"Learn the power of Refine for e-commerce with this quick & easy example. This step-by-step Refine SPA tutorial will get you started in no time.",slug:"handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",authors:"melih",tags:["refine","e-commerce","strapi","chakra-ui","next.js"],image:"/website/static/img/placeholder.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",source:"@site/blog/2022-02-14-refine-ecommerce-blog.md",title:"Next.js E-commerce App with Strapi and Chakra UI",description:"Learn the power of Refine for e-commerce with this quick & easy example. This step-by-step Refine SPA tutorial will get you started in no time.",date:"2022-02-14T00:00:00.000Z",formattedDate:"February 14, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"e-commerce",permalink:"/blog/tags/e-commerce"},{label:"strapi",permalink:"/blog/tags/strapi"},{label:"chakra-ui",permalink:"/blog/tags/chakra-ui"},{label:"next.js",permalink:"/blog/tags/next-js"}],readingTime:10.915,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Next.js E-commerce App with Strapi and Chakra UI",description:"Learn the power of Refine for e-commerce with this quick & easy example. This step-by-step Refine SPA tutorial will get you started in no time.",slug:"handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",authors:"melih",tags:["refine","e-commerce","strapi","chakra-ui","next.js"],image:"/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Top React JS Frameworks Every Developer Should Know",permalink:"/blog/best-react-frameworks"},nextItem:{title:"Implementing Dark Mode In Ant Design Using gulp",permalink:"/blog/how-to-add-darkmode-in-ant-design"},relatedPosts:[{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",permalink:"/blog/refine-invoice-generator",formattedDate:"March 1, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.745,date:"2022-03-01T00:00:00.000Z"},{title:"Build Fast and Customizable Admin Panel with NestJS",permalink:"/blog/customizable-admin-panel-with-nestjs",formattedDate:"October 4, 2021",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:4,date:"2021-10-04T00:00:00.000Z"},{title:"Migrating a React-Admin Application to Refine",permalink:"/blog/migrating-a-react-admin-application-to-refine",formattedDate:"October 6, 2021",authors:[{name:"Umut \xd6zdemir",title:"Frontend Developer",url:"https://github.com/miyavsu-limited",imageURL:"https://github.com/miyavsu-limited.png",key:"umut"}],readingTime:5.7,date:"2021-10-06T00:00:00.000Z"}],authorPosts:[{title:"How to Import CSV File with React",permalink:"/blog/how-to-import-csv",formattedDate:"January 18, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.195,date:"2022-01-18T00:00:00.000Z"},{title:"How to upload files from your HTML form using Base64 encoding",permalink:"/blog/how-to-base64-upload",formattedDate:"December 22, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:3.36,date:"2021-12-22T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.39,date:"2022-03-29T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[],p={toc:m};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-02-14-refine-ecommerce-blog/basket.gif",alt:"basket"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"In this article, we will create the e-commerce client of our ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/multi-tenancy/strapi-v4"},"Strapi-Multitenancy")," admin panel that we have done before."),(0,i.kt)("p",null,"It is now used ",(0,i.kt)("strong",{parentName:"p"},"headless")," with the ",(0,i.kt)("strong",{parentName:"p"},"refine")," 3 version. You can use any UI library you want with the ",(0,i.kt)("strong",{parentName:"p"},"headless")," feature."),(0,i.kt)("p",null,"We will use ",(0,i.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi")," and ",(0,i.kt)("a",{parentName:"p",href:"https://chakra-ui.com/"},"Chakra-UI")," together with ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/ssr/nextjs/"},(0,i.kt)("strong",{parentName:"a"},"Next.js"))," in our E-commerce client example application."))}s.isMDXComponent=!0}}]);