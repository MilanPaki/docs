"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60858],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,h=p(e,["components","mdxType","originalType","parentName"]),c=l(a),d=r,u=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(u,o(o({ref:t},h),{},{components:a})):n.createElement(u,o({ref:t},h))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8598:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],p={title:"Example Graphs",sidebar_position:70},s=void 0,l={unversionedId:"collections/graphs/example-graphs",id:"collections/graphs/example-graphs",title:"Example Graphs",description:"GDN  comes with a set of easily graspable graphs that are used to demonstrate the APIs.",source:"@site/docs/collections/graphs/example-graphs.md",sourceDirName:"collections/graphs",slug:"/collections/graphs/example-graphs",permalink:"/docs/collections/graphs/example-graphs",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/collections/graphs/example-graphs.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"Example Graphs",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Graph Functions",permalink:"/docs/collections/graphs/graph-functions"},next:{title:"Indexing",permalink:"/docs/collections/indexing/"}},h={},m=[{value:"The Knows_Graph",id:"the-knows_graph",level:2},{value:"The Social Graph",id:"the-social-graph",level:2},{value:"The City Graph",id:"the-city-graph",level:2},{value:"The Traversal Graph",id:"the-traversal-graph",level:2},{value:"The k Shortest Paths Graph",id:"the-k-shortest-paths-graph",level:2},{value:"The World Graph",id:"the-world-graph",level:2},{value:"The Mps Graph",id:"the-mps-graph",level:2},{value:"Higher volume graph examples",id:"higher-volume-graph-examples",level:2}],c={toc:m};function d(e){var t=e.components,p=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"GDN  comes with a set of easily graspable graphs that are used to demonstrate the APIs.\nYou can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"add samples")," tab in the ",(0,i.kt)("inlineCode",{parentName:"p"},"create graph")," window in the web interface and use it to create instances of these graphs in your GDN fabric. Once you've created them, you can them in GUI."),(0,i.kt)("h2",{id:"the-knows_graph"},"The Knows","_","Graph"),(0,i.kt)("p",null,"A set of persons knowing each other:\n",(0,i.kt)("img",{alt:"Persons relation Example Graph",src:a(39014).Z,width:"1586",height:"898"})),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"knows")," graph consists of one ",(0,i.kt)("em",{parentName:"p"},"vertex collection")," ",(0,i.kt)("inlineCode",{parentName:"p"},"persons")," connected via one ",(0,i.kt)("em",{parentName:"p"},"edge collection")," ",(0,i.kt)("inlineCode",{parentName:"p"},"knows"),".\nIt will contain five persons ",(0,i.kt)("em",{parentName:"p"},"Alice"),", ",(0,i.kt)("em",{parentName:"p"},"Bob"),", ",(0,i.kt)("em",{parentName:"p"},"Charlie"),", ",(0,i.kt)("em",{parentName:"p"},"Dave")," and ",(0,i.kt)("em",{parentName:"p"},"Eve"),".\nWe will have the following directed relations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Alice")," knows ",(0,i.kt)("em",{parentName:"li"},"Bob")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Bob")," knows ",(0,i.kt)("em",{parentName:"li"},"Charlie")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Bob")," knows ",(0,i.kt)("em",{parentName:"li"},"Dave")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Eve")," knows ",(0,i.kt)("em",{parentName:"li"},"Alice")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Eve")," knows ",(0,i.kt)("em",{parentName:"li"},"Bob"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'With the default "Search Depth" of 2 of the graph viewer you may not see all edges of this graph.')),(0,i.kt)("h2",{id:"the-social-graph"},"The Social Graph"),(0,i.kt)("p",null,"A set of persons and their relations:"),(0,i.kt)("p",null,"This example has female and male persons as ",(0,i.kt)("em",{parentName:"p"},"vertices")," in two ",(0,i.kt)("em",{parentName:"p"},"vertex collections")," - ",(0,i.kt)("inlineCode",{parentName:"p"},"female")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"male"),". The ",(0,i.kt)("em",{parentName:"p"},"edges")," are their connections in the ",(0,i.kt)("inlineCode",{parentName:"p"},"relation")," ",(0,i.kt)("em",{parentName:"p"},"edge collection"),"."),(0,i.kt)("h2",{id:"the-city-graph"},"The City Graph"),(0,i.kt)("p",null,"A set of european cities, and their fictional traveling distances as connections:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Cities Example Graph",src:a(62417).Z,width:"992",height:"777"})),(0,i.kt)("p",null,"The example has the cities as ",(0,i.kt)("em",{parentName:"p"},"vertices")," in several ",(0,i.kt)("em",{parentName:"p"},"vertex collections")," - ",(0,i.kt)("inlineCode",{parentName:"p"},"germanCity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"frenchCity"),". The ",(0,i.kt)("em",{parentName:"p"},"edges")," are their interconnections in several ",(0,i.kt)("em",{parentName:"p"},"edge collections")," ",(0,i.kt)("inlineCode",{parentName:"p"},"french / german / international Highway"),". "),(0,i.kt)("h2",{id:"the-traversal-graph"},"The Traversal Graph"),(0,i.kt)("p",null,"This graph was designed to demonstrate filters in traversals. It has some labels to filter on it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Traversal Graph",src:a(91782).Z,width:"2074",height:"1588"})),(0,i.kt)("p",null,"The example has all its vertices in the ",(0,i.kt)("em",{parentName:"p"},"circles")," collection, and an ",(0,i.kt)("em",{parentName:"p"},"edges")," edge collection to connect them."),(0,i.kt)("p",null,"Circles have unique numeric labels. Edges have two boolean attributes (",(0,i.kt)("em",{parentName:"p"},"theFalse")," always being false, ",(0,i.kt)("em",{parentName:"p"},"theTruth")," always being true) and a label sorting ",(0,i.kt)("em",{parentName:"p"},"B")," - ",(0,i.kt)("em",{parentName:"p"},"D")," to the left side, ",(0,i.kt)("em",{parentName:"p"},"G")," - ",(0,i.kt)("em",{parentName:"p"},"K")," to the right side. Left and right side split into Paths - at ",(0,i.kt)("em",{parentName:"p"},"B")," and ",(0,i.kt)("em",{parentName:"p"},"G")," which are each direct neighbours of the root-node ",(0,i.kt)("em",{parentName:"p"},"A"),". Starting from ",(0,i.kt)("em",{parentName:"p"},"A")," the graph has a depth of 3 on all its paths."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'With the default "Search Depth" of 2 of the graph viewer you may not see all nodes of this graph.')),(0,i.kt)("h2",{id:"the-k-shortest-paths-graph"},"The k Shortest Paths Graph"),(0,i.kt)("p",null,"The vertices in this graph are train stations of cities in Europe and\nNorth America and the edges represent train connections between them,\nwith the travel time for both directions as edge weight."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Train Connection Map",src:a(6013).Z,width:"2394",height:"634"})),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/collections/graphs/graph-queries#shortest-path"},"Shortest Paths")," page for query examples."),(0,i.kt)("h2",{id:"the-world-graph"},"The World Graph"),(0,i.kt)("p",null,"The world country graph structures its nodes like that: world \u2192 continent \u2192 country \u2192 capital. In some cases edge directions aren't forward (therefore it will be displayed disjunct in the graph viewer). It has two ways of creating it. One using the named graph utilities (",(0,i.kt)("em",{parentName:"p"},"worldCountry"),"), one without (",(0,i.kt)("em",{parentName:"p"},"worldCountryUnManaged"),"). "),(0,i.kt)("p",null,"It is used to demonstrate raw traversal operations."),(0,i.kt)("h2",{id:"the-mps-graph"},"The Mps Graph"),(0,i.kt)("p",null,"This graph was created to demonstrate a use case of the shortest path algorithm. Even though the algorithm can only determine one shortest path, it is possible to return multiple shortest paths with two separate queries. Therefore the graph is named after the ",(0,i.kt)("a",{parentName:"p",href:"../../c8ql/examples/#multiple-path-search"},(0,i.kt)("strong",{parentName:"a"},"m"),"ultiple ",(0,i.kt)("strong",{parentName:"a"},"p"),"ath ",(0,i.kt)("strong",{parentName:"a"},"s"),"earch")," use case."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Mps Graph",src:a(4451).Z,width:"2080",height:"1460"})),(0,i.kt)("p",null,"The example graph consists of ",(0,i.kt)("em",{parentName:"p"},"vertices")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"mps_verts")," collection and ",(0,i.kt)("em",{parentName:"p"},"edges")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"mps_edges")," collection. It is a simple traversal graph with start node ",(0,i.kt)("em",{parentName:"p"},"A")," and end node ",(0,i.kt)("em",{parentName:"p"},"C"),"."),(0,i.kt)("h2",{id:"higher-volume-graph-examples"},"Higher volume graph examples"),(0,i.kt)("p",null,"All of the above examples are rather small so they are easier to comprehend and can demonstrate the way the functionality works. Example: ",(0,i.kt)("a",{parentName:"p",href:"https://snap.stanford.edu/data/soc-pokec.html"},"Pokec social network")))}d.isMDXComponent=!0},62417:function(e,t,a){t.Z=a.p+"assets/images/cities_graph-d8e1073687e912930a91dbfc98bd8fe3.png"},39014:function(e,t,a){t.Z=a.p+"assets/images/knows_graph-9cdc308841d80700b1dff486dbf1f638.png"},4451:function(e,t,a){t.Z=a.p+"assets/images/mps_graph-62c72b9517362812b0bc7d7ddadf82d1.png"},6013:function(e,t,a){t.Z=a.p+"assets/images/train_map-ca4c733be14a7c55433cbd7bb0c42ed8.png"},91782:function(e,t,a){t.Z=a.p+"assets/images/traversal_graph-a64cabebe07a017552f9a2f4414e6544.png"}}]);