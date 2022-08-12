"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49335],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return d}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(o),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return o?n.createElement(f,i(i({ref:t},u),{},{components:o})):n.createElement(f,i({ref:t},u))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},18166:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var n=o(83117),a=o(80102),r=(o(67294),o(3905)),i=["components"],l={sidebar_position:1,title:"Collections"},c=void 0,s={unversionedId:"collections/index",id:"collections/index",title:"Collections",description:"A collection can be empty or contain documents. Macrometa GDN is schemaless, so you do not need to define valid document attributes. Documents with completely different structures can be stored in the same collection.",source:"@site/docs/collections/index.md",sourceDirName:"collections",slug:"/collections/",permalink:"/docs/collections/",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/collections/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Collections"},sidebar:"tutorialSidebar",previous:{title:"GeoFabrics",permalink:"/docs/geofabrics"},next:{title:"View Collections",permalink:"/docs/collections/view-collections"}},u={},m=[{value:"Global or Local Collections",id:"global-or-local-collections",level:2},{value:"Collection Types",id:"collection-types",level:2}],p={toc:m};function d(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A collection can be empty or contain documents. Macrometa GDN is ",(0,r.kt)("em",{parentName:"p"},"schemaless"),", so you do not need to define valid document attributes. Documents with completely different structures can be stored in the same collection."),(0,r.kt)("h2",{id:"global-or-local-collections"},"Global or Local Collections"),(0,r.kt)("p",null,"Document collections can be created as ",(0,r.kt)("em",{parentName:"p"},"local")," or ",(0,r.kt)("em",{parentName:"p"},"global")," collections."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("em",{parentName:"li"},"local collection")," stores its data in one region and does not replicate to other regions. You can create a local collection in any specified region. Best practice is to use a region-specific API endpoint when interacting with local collections. If a user sends a request to a local collection without being routed to the appropriate region, the request will fail."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("em",{parentName:"li"},"global collection")," replicates its data and maintains state and consistency across all regions in the GeoFabric.")),(0,r.kt)("h2",{id:"collection-types"},"Collection Types"),(0,r.kt)("p",null,"Macrometa offers several types of collections."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"/docs/collections/documents/"},"Document Store")," is a NoSQL database that stores data in JSON format (JavaScript Object Notation). For more information, refer to ",(0,r.kt)("a",{parentName:"li",href:"https://www.macrometa.com/articles/what-is-document-database"},"What is a document database?")),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"/docs/collections/keyvalue/"},"Key-Value Store")," contains documents in which each document stored in a collection contains a ",(0,r.kt)("inlineCode",{parentName:"li"},"_key"),", and the rest of the document is its value. For more information, refer to ",(0,r.kt)("a",{parentName:"li",href:"https://www.macrometa.com/articles/key-value-databases"},"Key-Value Databases"),"."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"/docs/collections/dynamo/create-dynamo-table"},"Dynamo Table")," collection allows you to use AWS Dynamo Database with Macrometa as a datastore."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"/docs/collections/graphs/"},"Graph Edge collection")," stores ",(0,r.kt)("em",{parentName:"li"},"edge documents")," (or ",(0,r.kt)("em",{parentName:"li"},"edges"),") that define a relationship between other documents with the ",(0,r.kt)("inlineCode",{parentName:"li"},"_from")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"_to")," values. A ",(0,r.kt)("em",{parentName:"li"},"vertex")," is a document collection that contains graphs. For more information, refer to ",(0,r.kt)("a",{parentName:"li",href:"https://www.macrometa.com/articles/what-is-graph-database"},"What is a graph database?"))))}d.isMDXComponent=!0}}]);