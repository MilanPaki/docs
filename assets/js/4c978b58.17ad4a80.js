"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54779],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(34334),s="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(83117),a=n(67294),s=n(34334),o=n(72389),l=n(67392),i=n(7094),c=n(12466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,f=e.values,b=e.groupId,v=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var E=(0,i.U)(),O=E.tabGroupChoices,T=E.setTabGroupChoices,w=(0,a.useState)(k),x=w[0],_=w[1],j=[],D=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var N=O[b];null!=N&&N!==x&&g.some((function(e){return e.value===N}))&&_(N)}var R=function(e){var t=e.currentTarget,n=j.indexOf(t),r=g[n].value;r!==x&&(D(t),_(r),null!=b&&T(b,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=j.indexOf(e.currentTarget)+1;n=null!=(r=j[a])?r:j[0];break;case"ArrowLeft":var s,o=j.indexOf(e.currentTarget)-1;n=null!=(s=j[o])?s:j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},v)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return j.push(e)},onKeyDown:P,onFocus:R,onClick:R},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(y.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},55877:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=n(83117),a=n(80102),s=(n(67294),n(3905)),o=n(65488),l=n(85162),i=["components"],c={sidebar_position:30,title:"Get Resources"},u=void 0,p={unversionedId:"sdks/get-resources",id:"sdks/get-resources",title:"Get Resources",description:"Get all accessible resources.",source:"@site/docs/sdks/get-resources.md",sourceDirName:"sdks",slug:"/sdks/get-resources",permalink:"/docs/sdks/get-resources",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/sdks/get-resources.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Get Resources"},sidebar:"tutorialSidebar",previous:{title:"Create API Key",permalink:"/docs/sdks/create-api-key"},next:{title:"Set Permissions",permalink:"/docs/sdks/set-permissions"}},d={},m=[],f={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,s.kt)("p",null,"Get all accessible resources."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"//Fetch accessible databases\ntry{\n    var databases = await client.listAccessibleDatabases(keyid)\n    console.log(\"Accessible Databases\")\n    console.log(databases.result)\n}\ncatch(e){\n    console.log('Failed to fetch accessible dataases: ', e);\n\n}\n// Fetch accessible streams\ntry{\n    streams = await client.listAccessibleStreams(keyid, '_system', full=false)\n    console.log(\"Accessible Streams\")\n    console.log(streams.result)\n}\ncatch(e){\n    console.log('Failed to fetch accessible streams: ', e);\n\n}\n"))),(0,s.kt)(l.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"from c8 import C8Client\n\n# Create a connection to gdn\nclient = C8Client(protocol='https', host='gdn.paas.macrometa.io', port=443,\n                        email='nemo@nautilus.com', password='xxxxx',\n                        geofabric='_system')\n\n# Fetch List of accessible databases and streams\nprint(\"Accessible Databases: \", client.list_accessible_databases('id1'))\n\nprint(\"Accessible Streams of a db: \", client.list_accessible_streams('id1', '_system'))\n"))),(0,s.kt)(l.Z,{value:"RA",label:"Rest API",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'# Fetch List of accessible databases and streams\nFEDERATION = "api-gdn.macrometa.io"\nFED_URL = "https://{}".format(FEDERATION)\nkeyid = "id1"\nurl = FED_URL + "/_api/key/" + keyid + "/database/_system/stream"\nresp = session.get(url)\nresp = json.loads(resp.text)\nif resp[\'error\'] is True:\n    print("ERROR: " , resp)\nelse:\n    print("Accessible Streams: ", resp)\n\nurl = FED_URL + "/_api/key/" + keyid + "/database/_system/collection"\nresp = session.get(url)\nresp = json.loads(resp.text)\nif resp[\'error\'] is True:\n    print("ERROR: " , resp)\nelse:\n    print("Accessible Collections: ", resp)\n\nurl = FED_URL + "/_api/key/" + keyid + "/database"\nresp = session.get(url)\nresp = json.loads(resp.text)\nif resp[\'error\'] is True:\n    print("ERROR: " , resp)\nelse:\n    print("Accessible Databases: ", resp)\n')))))}b.isMDXComponent=!0}}]);