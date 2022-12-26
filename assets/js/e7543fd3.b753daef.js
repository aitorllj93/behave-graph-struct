"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4202],{18236:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const o={sidebar_position:2},r="Defining a Graph",d={unversionedId:"defining-a-graph",id:"defining-a-graph",title:"Defining a Graph",description:"A graph is a collection of nodes that define the flow of your application. The graph is defined in JSON format and can be created using the Graph Editor or by writing it manually.",source:"@site/docs/defining-a-graph.md",sourceDirName:".",slug:"/defining-a-graph",permalink:"/behave-graph-struct/docs/defining-a-graph",draft:!1,editUrl:"https://github.com/aitorllj93/behave-graph-struct/tree/main/website/docs/defining-a-graph.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/behave-graph-struct/docs/getting-started"},next:{title:"Running The Engine",permalink:"/behave-graph-struct/docs/running-the-engine"}},p={},s=[],l={toc:s};function h(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"defining-a-graph"},"Defining a Graph"),(0,i.kt)("p",null,"A graph is a collection of nodes that define the flow of your application. The graph is defined in JSON format and can be created using the ",(0,i.kt)("a",{parentName:"p",href:"./graph-editor"},"Graph Editor")," or by writing it manually."),(0,i.kt)("p",null,"Here's an example of how a Graph should look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nodes": [\n    {\n      "type": "lifecycle/onStart",\n      "id": "0",\n      "flows": {\n        "flow": {\n          "nodeId": "1",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "type": "debug/log",\n      "id": "1",\n      "parameters": {\n        "text": {\n          "value": "Hello World!"\n        }\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Each node has a ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," and an ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," is the name of the node and the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is a unique identifier for the node."),(0,i.kt)("p",null,"The nodes are connected using ",(0,i.kt)("inlineCode",{parentName:"p"},"flows"),". Each node has a ",(0,i.kt)("inlineCode",{parentName:"p"},"flows")," property that is an object with the name of the flow as the key and the value is an object with the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeId")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"socket")," of the node that the flow is connected to."),(0,i.kt)("p",null,"The nodes can also accept an arbitrary number of parameters. Each parameter can have a ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"link")," to another node's output."),(0,i.kt)("p",null,"The syntax to define a link is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"parameters": {\n  "text": {\n    "link": {\n      "nodeId": "1",\n      "socket": "result"\n    }\n  }\n}\n')))}h.isMDXComponent=!0}}]);