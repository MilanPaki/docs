"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66661],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7237:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],o={title:"ceil (Function)"},c=void 0,u={unversionedId:"cep/reference/functions/math/ceil",id:"cep/reference/functions/math/ceil",title:"ceil (Function)",description:"This function returns the smallest double value, i.e., the closest to the negative infinity, that is greater than or equal to the p1 argument, and is equal to a mathematical integer. It wraps the java.lang.Math.ceil() method.",source:"@site/docs/cep/reference/functions/math/ceil.md",sourceDirName:"cep/reference/functions/math",slug:"/cep/reference/functions/math/ceil",permalink:"/docs/cep/reference/functions/math/ceil",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/reference/functions/math/ceil.md",tags:[],version:"current",frontMatter:{title:"ceil (Function)"},sidebar:"tutorialSidebar",previous:{title:"cbrt (Function)",permalink:"/docs/cep/reference/functions/math/cbrt"},next:{title:"conv (Function)",permalink:"/docs/cep/reference/functions/math/conv"}},p={},m=[{value:"Query Parameters",id:"query-parameters",level:2},{value:"Example 1",id:"example-1",level:2}],s={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function returns the smallest double value, i.e., the closest to the negative infinity, that is greater than or equal to the ",(0,i.kt)("inlineCode",{parentName:"p"},"p1")," argument, and is equal to a mathematical integer. It wraps the ",(0,i.kt)("inlineCode",{parentName:"p"},"java.lang.Math.ceil()")," method."),(0,i.kt)("p",null,"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<DOUBLE> math:ceil(<FLOAT|DOUBLE> p1)\n")),(0,i.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible Data Types"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Dynamic"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"p1"),(0,i.kt)("td",{parentName:"tr",align:null},"The value of the parameter whose ceiling value is found."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"FLOAT DOUBLE"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("h2",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE STREAM InValueStream (inValue double);\n\ninsert into OutMediationStream\nselect math:ceil(inValue) as ceilingValue\nfrom InValueStream;\n")),(0,i.kt)("p",null,"This function calculates the ceiling value of the given ",(0,i.kt)("inlineCode",{parentName:"p"},"inValue")," and directs the result to ",(0,i.kt)("inlineCode",{parentName:"p"},"OutMediationStream")," output stream. For example, ceil(423.187d) returns 424.0."))}f.isMDXComponent=!0}}]);