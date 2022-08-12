"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5051],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294),r=t(34334),l="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(83117),r=t(67294),l=t(34334),o=t(72389),i=t(67392),c=t(7094),s=t(12466),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var n,t,o=e.lazy,p=e.block,m=e.defaultValue,g=e.values,y=e.groupId,f=e.className,_=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:_.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,i.l)(b,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var R=null===m?m:null!=(n=null!=m?m:null==(t=_.find((function(e){return e.props.default})))?void 0:t.props.value)?n:_[0].props.value;if(null!==R&&!b.some((function(e){return e.value===R})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+R+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,c.U)(),q=h.tabGroupChoices,w=h.setTabGroupChoices,T=(0,r.useState)(R),E=T[0],k=T[1],x=[],N=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var C=q[y];null!=C&&C!==E&&b.some((function(e){return e.value===C}))&&k(C)}var S=function(e){var n=e.currentTarget,t=x.indexOf(n),a=b[t].value;a!==E&&(N(n),k(a),null!=y&&w(y,String(a)))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=x.indexOf(e.currentTarget)+1;t=null!=(a=x[r])?a:x[0];break;case"ArrowLeft":var l,o=x.indexOf(e.currentTarget)-1;t=null!=(l=x[o])?l:x[x.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},b.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:S,onClick:S},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(_.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},_.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function m(e){var n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},42527:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var a=t(83117),r=t(80102),l=(t(67294),t(3905)),o=t(65488),i=t(85162),c=["components"],s={sidebar_position:70,title:"Query Worker Tutorial"},u=void 0,d={unversionedId:"queryworkers/tutorial",id:"queryworkers/tutorial",title:"Query Worker Tutorial",description:"This tutorial is about using C8QL queries as API (aka Query Workers) in Macrometa GDN with low latencies across the globe.",source:"@site/docs/queryworkers/tutorial.md",sourceDirName:"queryworkers",slug:"/queryworkers/tutorial",permalink:"/docs/queryworkers/tutorial",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/queryworkers/tutorial.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70,title:"Query Worker Tutorial"},sidebar:"tutorialSidebar",previous:{title:"Fundamentals",permalink:"/docs/queryworkers/fundamentals"},next:{title:"Streams",permalink:"/docs/streams/"}},p={},m=[{value:"Installation",id:"installation",level:2},{value:"Code Sample",id:"code-sample",level:2}],g={toc:m};function y(e){var n=e.components,t=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This tutorial is about using C8QL queries as API (aka Query Workers) in Macrometa GDN with low latencies across the globe."),(0,l.kt)("p",null,"For this example, we use the following credentials:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tenant name: ",(0,l.kt)("inlineCode",{parentName:"li"},"nemo@nautilus.com")),(0,l.kt)("li",{parentName:"ul"},"User password: ",(0,l.kt)("inlineCode",{parentName:"li"},"xxxxxx"),".")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"With Yarn or NPM\n\n    yarn add jsc8\n    (or)\n    npm install jsc8\n\nIf you want to use the SDK outside of the current directory, you can also install it globally using the `--global` flag:\n\n    npm install --global jsc8\n\nFrom source,\n\n    git clone https://github.com/macrometacorp/jsc8.git\n    cd jsC8\n    npm install\n    npm run dist\n"))),(0,l.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"pyC8 requires Python 3.5+. Python 3.6 or higher is recommended\n\nTo install pyC8, simply run\n\n    $ pip3 install pyC8\n\nor, if you prefer to use conda:\n\n    conda install -c conda-forge pyC8\n\nor pipenv:\n\n    pipenv install --pre pyC8\n\nOnce the installation process is finished, you can begin developing applications in Python.\n")))),(0,l.kt)("h2",{id:"code-sample"},"Code Sample"),(0,l.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const jsc8 = require(\'jsc8\');\n\nconst gdnUrl = "https://gdn.paas.macrometa.io";\n\n// Create auth instance with token\nconst client = new jsc8({\n    url: gdnUrl, \n    token: "XXXX", \n    fabricName: \'_system\'\n});\n\n// ----- OR -----\n\n// Create an auth instance with an API Key\nconst client = new jsc8({\n    url: gdnUrl, \n    apiKey: "XXXX", \n    fabricName: \'_system\'\n});\n\n// ----- OR -----\n\n// Create an auth instance using an email and password\nconst client = new jsc8(gdnUrl);\nawait client.login("nemo@nautilus.com", "xxxxx");\n\n// Variables\nconst collection_name = "address";\n\n// Variables - Query Workers\nlet parameter = {"firstname": "", "lastname": "", "email": "", "zipcode": ""};\n\nlet insert_data = {\n    "query": {\n        "name": "insertRecord",\n        "value": `INSERT {\'firstname\':@firstname, \'lastname\':@lastname, \'email\':@email, \'zipcode\':@zipcode, \'_key\': \'abc\'} IN ${collection_name}`,\n        "parameter": parameter\n\n    }\n};\n\nlet get_data = {\n    "query": {\n        "name": "getRecords",\n        "value": `FOR doc IN ${collection_name} RETURN doc`\n    }\n};\n\nlet update_data = {\n    "query": {\n        "name": "updateRecord",\n        "value": `UPDATE \'abc\' WITH { \\"lastname\\": \\"cena\\" } IN ${collection_name}`\n    }\n};\n\nlet delete_data = {\n    "query": {\n        "name": "deleteRecord",\n        "value": `REMOVE \'abc\' IN ${collection_name}`\n    }\n};\n\nlet get_count = {\n    "query": {\n        "name": "countRecords",\n        "value": `RETURN COUNT(FOR doc IN ${collection_name} RETURN 1)`\n    }\n};\n\nasync function createCollection() {\n    console.log("\\n 2. CREATE_COLLECTION");\n\n    try {\n        console.log(`Creating the collection ${collection_name}...`);\n        const exists_coll = await client.hasCollection(collection_name);\n        if (exists_coll === false) {\n            await client.createCollection(collection_name);\n        }\n    } catch (e) {\n        await console.log("Collection creation did not succeed due to " + e);\n    }\n}\n\nasync function createRestQL() {\n    console.log("\\n 3. CREATE_RESTQLS");\n\n    await client.createRestql(\n        insert_data.query.name.toString(),\n        insert_data.query.value.toString(),\n        insert_data.query.parameter\n    );\n\n    await client.createRestql(get_data.query.name.toString(), get_data.query.value.toString(), {});\n    await client.createRestql(update_data.query.name.toString(), update_data.query.value.toString(), {});\n    await client.createRestql(delete_data.query.name.toString(), delete_data.query.value.toString(), {});\n    await client.createRestql(get_count.query.name.toString(), get_count.query.value.toString(), {});\n}\n\n\nasync function executeRestQL() {\n    console.log("\\n 4. EXECUTE_RESTQLS");\n    console.log("\\n a. Insert Data");\n\n    let resp = await client.executeRestql(insert_data.query.name.toString(), {\n        "firstname": "john",\n        "lastname": "doe",\n        "email": "john.doe@macrometa.io",\n        "zipcode": "511037"\n    });\n    console.log(resp.result);\n\n    console.log("\\n b. Get Data");\n    resp = await client.executeRestql(get_data.query.name.toString(), {});\n    console.log(resp.result);\n\n    console.log("\\n c. Update Data");\n    resp = await client.executeRestql(update_data.query.name.toString(), {})\n    console.log(resp.result);\n\n    console.log("\\n d. Get Data");\n    resp = await client.executeRestql(get_data.query.name.toString(), {});\n    console.log(resp.result);\n\n    console.log("\\n e. Count Records");\n    resp = await client.executeRestql(get_count.query.name.toString(), {})\n    console.log(resp.result);\n\n    console.log("\\n f. Delete Record");\n    resp = await client.executeRestql(delete_data.query.name.toString(), {})\n    console.log(resp.result);\n}\n\nasync function deleteRestQL() {\n    console.log("\\n 4. DELETE_RESTQLS");\n\n    await client.deleteRestql(insert_data.query.name.toString());\n    await client.deleteRestql(get_data.query.name.toString());\n    await client.deleteRestql(update_data.query.name.toString());\n    await client.deleteRestql(get_data.query.name.toString());\n    await client.deleteRestql(get_count.query.name.toString());\n    await client.deleteRestql(delete_data.query.name.toString());\n}\n\n\n(async function() {\n    await createCollection();\n    await createRestQL();\n    await executeRestQL();\n    await deleteRestQL();\n})();\n'))),(0,l.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'from c8 import C8Client\nimport pprint\n\n# Variables - URLs\nglobal_url = "gdn.paas.macrometa.io"\n\n# Variables - DB\nemail = "nemo@nautilus.com"\npassword = "xxxxxx"\ngeo_fabric = "_system"\ncollection_name = "address"\n\n# Variables - Query Workers\nparameter = {"firstname": "", "lastname": "", "email": "", "zipcode": ""}\ninsert_data = {\n    "query": {\n        "name": "insertRecord",\n        "value": "INSERT {\'firstname\':@firstname, \'lastname\':@lastname, \'email\':@email, \'zipcode\':@zipcode, \'_key\': \'abc\'} IN %s" % collection_name,\n        "parameter": parameter\n    }\n}\nget_data = {\n    "query": {\n        "name": "getRecords",\n        "value": "FOR doc IN %s RETURN doc" % collection_name\n    }\n}\nupdate_data = {\n    "query": {\n        "name": "updateRecord",\n        "value": "UPDATE \'abc\' WITH { \\"lastname\\": \\"cena\\" } IN %s" % collection_name\n    }\n}\ndelete_data = {\n    "query": {\n        "name": "deleteRecord",\n        "value": "REMOVE \'abc\' IN %s" % collection_name\n    }\n}\nget_count = {\n    "query": {\n        "name": "countRecords",\n        "value": "RETURN COUNT(FOR doc IN %s RETURN 1)" % collection_name\n    }\n}\n\npp = pprint.PrettyPrinter(indent=4)\n\nif __name__ == \'__main__\':\n\n# Step1: Open connection to GDN. You will be routed to closest region.\n    print("1. CONNECT: federation: {},  user: {}".format(global_url, email))\n    client = C8Client(protocol=\'https\', host=global_url, port=443,\n                        email=email, password=password,\n                        geofabric=geo_fabric)      \n\n    # Step2: Create a collection if not exists\n    print("2. CREATE_COLLECTION: region: {},  collection: {}".format(global_url, collection_name))\n    if client.has_collection(collection_name):\n        collection = client.collection(collection_name)\n    else:\n        collection = client.create_collection(collection_name)\n\n    # Step3: Create RestQLs\n    print("3. CREATE_RESTQLs: region: {}".format(global_url))\n    client.create_restql(insert_data)  # name: insertRecord\n    client.create_restql(get_data)  # name: getRecords\n    client.create_restql(update_data)  # name: updateRecord\n    client.create_restql(delete_data)  # name: deleteRecord\n    client.create_restql(get_count)  # name: countRecords\n    pp.pprint(client.get_restqls())\n\n    # Step4: Execute Query Workers\n    print("4. EXECUTE_RESTQLs: region: {}".format(global_url))\n\n    print("\\t a. Insert data....")\n    response = client.execute_restql(\n        "insertRecord", {\n            "bindVars": {\n                "firstname": "john",\n                "lastname": "doe",\n                "email": "john.doe@macrometa.io",\n                "zipcode": "511037"\n            }\n        })\n    print("\\t b. Get data....")\n    response = client.execute_restql("getRecords")\n    pp.pprint(response[\'result\'])\n    print("\\t c. Update data....")\n    response = client.execute_restql("updateRecord")\n    print("\\t d. Get data....")\n    response = client.execute_restql("getRecords")\n    pp.pprint(response[\'result\'])\n    print("\\t e. Count records....")\n    response = client.execute_restql("countRecords")\n    pp.pprint(response[\'result\'])\n    print("\\t f. Delete data....")\n    response = client.execute_restql("deleteRecord")\n\n    print("5. DELETE_RESTQLs: region: {}".format(global_url))\n    client.delete_restql("insertRecord")\n    client.delete_restql("getRecords")\n    client.delete_restql("updateRecord")\n    client.delete_restql("countRecords")\n    client.delete_restql("deleteRecord")\n')))))}y.isMDXComponent=!0}}]);