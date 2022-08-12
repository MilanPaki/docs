"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8639],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,g=u["".concat(l,".").concat(c)]||u[c]||p[c]||i;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52810:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],d={sidebar_position:1,title:"Reference"},l=void 0,s={unversionedId:"cep/reference/index",id:"cep/reference/index",title:"Reference",description:"Macrometa GDN allows you to integrate streaming data and take action based on streaming data. Typically the stream processing use cases involve collecting, analyzing and, integrate or acting on data generated during business activities by various sources i.e.,",source:"@site/docs/cep/reference/index.md",sourceDirName:"cep/reference",slug:"/cep/reference/",permalink:"/docs/cep/reference/",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/reference/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Reference"},sidebar:"tutorialSidebar",previous:{title:"Executing Scripts",permalink:"/docs/cep/tutorials/executing-scripts"},next:{title:"Basics",permalink:"/docs/cep/reference/basics"}},m={},p=[{value:"Architecture",id:"architecture",level:2},{value:"Key Features",id:"key-features",level:2}],u={toc:p};function c(e){var t=e.components,d=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Macrometa GDN allows you to integrate streaming data and take action based on streaming data. Typically the stream processing use cases involve collecting, analyzing and, integrate or acting on data generated during business activities by various sources i.e.,"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Stage"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Collect")),(0,i.kt)("td",{parentName:"tr",align:null},"Receive or capture data from various data sources.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Analyze")),(0,i.kt)("td",{parentName:"tr",align:null},"Analyze data to identify interesting patterns and to extract information.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Act")),(0,i.kt)("td",{parentName:"tr",align:null},"Take actions based on the results and findings done via processing the data. The action can be executing some random code, calling an external service, or triggering a complex integration.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Integrate")),(0,i.kt)("td",{parentName:"tr",align:null},"Make processed data available for consumers to consume globally in right format with very low latencies.")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Stream Workers is currently an Enterprise only feature. We will be rolling it out to all users in Q1 of 2022. Contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@macrometa.com"},"support@macrometa.com")," if you have any questions.")),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"The architecture of Macrometa stream processing engine fits this natural flow. Following are the major components of our stream processing engine."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Stream Processing Architecture",src:n(20944).Z,width:"2158",height:"1394"})),(0,i.kt)("p",null,"The stream processing engine receives data event-by-event and processes them in real-time to produce meaningful information i.e.,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accept event inputs from many different types of sources."),(0,i.kt)("li",{parentName:"ul"},"Process them to transform, enrich, and generate insights."),(0,i.kt)("li",{parentName:"ul"},"Publish them to multiple types of sinks.")),(0,i.kt)("p",null,"To use stream processor, you need to write the processing logic as a stream application using streaming SQL language which is discussed in the ",(0,i.kt)("a",{parentName:"p",href:"query-guide.md"},"Stream Query"),". "),(0,i.kt)("p",null,"When the stream application is published, it:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Consumes data one-by-one as events."),(0,i.kt)("li",{parentName:"ol"},"Pipe the events to queries through various streams for processing."),(0,i.kt)("li",{parentName:"ol"},"Generates new events based on the processing done at the queries."),(0,i.kt)("li",{parentName:"ol"},"Finally, sends newly generated events through output to streams.")),(0,i.kt)("h2",{id:"key-features"},"Key Features"),(0,i.kt)("p",null,"Macromete stream processing engine  allows you to write rich & complex stream processing logic using an intuitive SQL-like language. You can perform the following actions on the fly using stream queries and constructs."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Feature"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Realtime ETL"),(0,i.kt)("td",{parentName:"tr",align:null},"In realtime, extract data when available, transform it on the fly, and integrate it using sinks (http, streams, mqtt..) etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Consume & Publish Events"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"query-guide.md#source"},"Consume")," and ",(0,i.kt)("a",{parentName:"td",href:"query-guide.md#sink"},"Publish")," events via ",(0,i.kt)("inlineCode",{parentName:"td"},"Kafka"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"HTTP"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"TCP"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"MQTT"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Amazon SQS"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Google Pub/Sub"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"WebSocket"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"S3")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"Google Cloud Storage"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Filtering"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"query-guide.md"},"Filter")," events based on conditions such as value ranges, string matching, regex, and others.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Cleansing"),(0,i.kt)("td",{parentName:"tr",align:null},"Filter out corrupted, inaccurate or irrelevant data from a data stream based on one or more conditions. Modify or replace content to hide/remove unwanted data parts from a message (",(0,i.kt)("inlineCode",{parentName:"td"},"e.g., obscuring"),"). Clean data by setting defaults, and handling nulls, using ",(0,i.kt)("inlineCode",{parentName:"td"},"default"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"if-then-else")," functions, and many others.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Transformations"),(0,i.kt)("td",{parentName:"tr",align:null},"Support ",(0,i.kt)("inlineCode",{parentName:"td"},"data extraction")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"reconstruction of messages")," using inline ",(0,i.kt)("a",{parentName:"td",href:"query-guide.md"},"mathematical and logical operations"),",  inbuilt ",(0,i.kt)("a",{parentName:"td",href:"./functions"},"functions")," and custom functions in ",(0,i.kt)("a",{parentName:"td",href:"query-guide.md"},(0,i.kt)("inlineCode",{parentName:"a"},"JavaScript"))," for processing ",(0,i.kt)("inlineCode",{parentName:"td"},"JSON"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"time"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"math"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"regex"),", and others.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Enrichment"),(0,i.kt)("td",{parentName:"tr",align:null},"Enrich the data received in the stream with data from c8db or another data stream, or an external service to derive an expected result")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Summarization"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"query-guide.md#aggregate-function"},"Aggregate data")," using ",(0,i.kt)("inlineCode",{parentName:"td"},"sum"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"count"),", average (",(0,i.kt)("inlineCode",{parentName:"td"},"avg"),"), ",(0,i.kt)("inlineCode",{parentName:"td"},"min"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"max"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"distinctCount"),", and standard deviation (",(0,i.kt)("inlineCode",{parentName:"td"},"StdDev"),") operators. Summarize events based on time intervals like ",(0,i.kt)("inlineCode",{parentName:"td"},"sliding time"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"tumbling/batch time")," ",(0,i.kt)("a",{parentName:"td",href:"query-guide.md#window"},"windows")," and based on number of events like ",(0,i.kt)("inlineCode",{parentName:"td"},"sliding length"),", and ",(0,i.kt)("inlineCode",{parentName:"td"},"tumbling/batch length")," ",(0,i.kt)("a",{parentName:"td",href:"query-guide.md#window"},"windows"),". Support for data summarization based on ",(0,i.kt)("inlineCode",{parentName:"td"},"sessions")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"uniqueness"),". Support for ",(0,i.kt)("inlineCode",{parentName:"td"},"named aggregation")," and aggregation of data based on ",(0,i.kt)("inlineCode",{parentName:"td"},"group by fields"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"having")," conditions. Sort & limit the aggregated output using ",(0,i.kt)("inlineCode",{parentName:"td"},"order by")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"limit")," keywords.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Scripting"),(0,i.kt)("td",{parentName:"tr",align:null},"Write custom functions in ",(0,i.kt)("a",{parentName:"td",href:"query-guide.md#script"},(0,i.kt)("inlineCode",{parentName:"a"},"JavaScript"))," and use within streaming queries.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Pattern & Trend Mining"),(0,i.kt)("td",{parentName:"tr",align:null},"Identifies event ",(0,i.kt)("inlineCode",{parentName:"td"},"occurrence patterns")," among streams over time. Identify ",(0,i.kt)("inlineCode",{parentName:"td"},"non occurrence")," of events. Supports ",(0,i.kt)("inlineCode",{parentName:"td"},"repetitive matches")," of event pattern occurrences with logical conditions and time bound.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sequence Processing"),(0,i.kt)("td",{parentName:"tr",align:null},"Identifies continuous sequence of events from streams. Supports ",(0,i.kt)("inlineCode",{parentName:"td"},"zero to many"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"one to many"),", and ",(0,i.kt)("inlineCode",{parentName:"td"},"zero to one")," event matching conditions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Scatter-Gather"),(0,i.kt)("td",{parentName:"tr",align:null},"Process complex messages by dividing them into simple messages using ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenize")," function, process or transform them in isolation, and group them back using the ",(0,i.kt)("inlineCode",{parentName:"td"},"batch")," window and ",(0,i.kt)("inlineCode",{parentName:"td"},"group")," aggregation. Ability to modularize the execution logic of each use case to build a composite event-driven applications. Provide execution isolation and parallel processing by ",(0,i.kt)("inlineCode",{parentName:"td"},"partitioning")," the events using keys or value ranges.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Pipelines"),(0,i.kt)("td",{parentName:"tr",align:null},"Periodically trigger data pipelines based on time intervals, and cron expression using ",(0,i.kt)("inlineCode",{parentName:"td"},"triggers"),". Support for calling ",(0,i.kt)("inlineCode",{parentName:"td"},"HTTP"),"services in a non-blocking manner to fetch data and enrich events. Handle responses accordingly for different response status codes. Divert the events to error stream to handle the errors gracefully.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Geo Replicated Data Store"),(0,i.kt)("td",{parentName:"tr",align:null},"Query, modify, and join the data stored in ",(0,i.kt)("a",{parentName:"td",href:"query-guide.md#table"},"tables")," which support primary key constraints and indexing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rule Processing"),(0,i.kt)("td",{parentName:"tr",align:null},"Execution of rules based on single event using ",(0,i.kt)("a",{parentName:"td",href:"query-guide.md#filter"},(0,i.kt)("inlineCode",{parentName:"a"},"filter"))," operator, ",(0,i.kt)("inlineCode",{parentName:"td"},"if-then-else")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"match")," ",(0,i.kt)("a",{parentName:"td",href:"query-guide.md#function"},"functions"),", and many others. Rules based on collection of events using ",(0,i.kt)("a",{parentName:"td",href:"query-guide.md#aggregate-function"},"data summarization"),", and joins with ",(0,i.kt)("a",{parentName:"td",href:"query-guide.md#join-stream"},"streams"),", ",(0,i.kt)("a",{parentName:"td",href:"query-guide.md#join-table"},"tables"),", ",(0,i.kt)("a",{parentName:"td",href:"query-guide.md#join-named-window"},"windows")," or ",(0,i.kt)("a",{parentName:"td",href:"query-guide.md#join-named-aggregation"},"aggregations"),". Rules to detect event occurrence patterns, trends, or non-occurrence of a critical events using complex event processing constructs such as ",(0,i.kt)("a",{parentName:"td",href:"query-guide.md#pattern"},(0,i.kt)("inlineCode",{parentName:"a"},"pattern")),", and ",(0,i.kt)("a",{parentName:"td",href:"query-guide.md#sequence"},(0,i.kt)("inlineCode",{parentName:"a"},"sequence")),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Realtime Decisions as Service"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide REST APIs to ",(0,i.kt)("a",{parentName:"td",href:"query-guide.md#on-demand-query"},"query")," ",(0,i.kt)("inlineCode",{parentName:"td"},"multi-modal geo-replicated tables"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"windows")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"named-aggregations")," to make decisions based on the state of the system.")))),(0,i.kt)("p",null,"These features allows you to build robust global data processing and integration pipelines at the edge by combining powerful stream processing, multi-model database and geo-replicated streams capabilities."))}c.isMDXComponent=!0},20944:function(e,t,n){t.Z=n.p+"assets/images/cep-overview-ee5b77d8a5155a07fcba3c14674d1dd7.png"}}]);