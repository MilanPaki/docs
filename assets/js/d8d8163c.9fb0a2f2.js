"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47767],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=s(r),m=i,y=f["".concat(c,".").concat(m)]||f[m]||l[m]||o;return r?t.createElement(y,a(a({ref:n},u),{},{components:r})):t.createElement(y,a({ref:n},u))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},90342:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var t=r(83117),i=r(80102),o=(r(67294),r(3905)),a=["components"],p={title:"binary (Sink Mapper)"},c=void 0,s={unversionedId:"cep/reference/functions/sinkmapper/binary",id:"cep/reference/functions/sinkmapper/binary",title:"binary (Sink Mapper)",description:"This section explains how to map events processed via Stream App in order to publish them in the binary format.",source:"@site/docs/cep/reference/functions/sinkmapper/binary.md",sourceDirName:"cep/reference/functions/sinkmapper",slug:"/cep/reference/functions/sinkmapper/binary",permalink:"/docs/cep/reference/functions/sinkmapper/binary",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/reference/functions/sinkmapper/binary.md",tags:[],version:"current",frontMatter:{title:"binary (Sink Mapper)"},sidebar:"tutorialSidebar",previous:{title:"avro (Sink Mapper)",permalink:"/docs/cep/reference/functions/sinkmapper/avro"},next:{title:"csv (Sink Mapper)",permalink:"/docs/cep/reference/functions/sinkmapper/csv"}},u={},l=[{value:"Example 1",id:"example-1",level:2}],f={toc:l};function m(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section explains how to map events processed via Stream App in order to publish them in the ",(0,o.kt)("inlineCode",{parentName:"p"},"binary")," format."),(0,o.kt)("p",null,"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'CREATE SINK <NAME> WITH (map.type="binary")\n')),(0,o.kt)("h2",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CREATE SINK FooStream WITH (type='inMemory', topic='gdn', map.type='binary') (symbol string, price float, volume long);\n")),(0,o.kt)("p",null,"This will publish Stream App event in binary format."))}m.isMDXComponent=!0}}]);