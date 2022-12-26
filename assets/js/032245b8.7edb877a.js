"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3309],{51887:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var t=o(87462),l=(o(67294),o(3905));const p={},r="Flip Flop",s={unversionedId:"examples/core/flow/FlipFlop",id:"examples/core/flow/FlipFlop",title:"Flip Flop",description:"",source:"@site/docs/examples/core/flow/FlipFlop.mdx",sourceDirName:"examples/core/flow",slug:"/examples/core/flow/FlipFlop",permalink:"/behave-graph-struct/docs/examples/core/flow/FlipFlop",draft:!1,editUrl:"https://github.com/aitorllj93/behave-graph-struct/tree/main/website/docs/examples/core/flow/FlipFlop.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Do Once",permalink:"/behave-graph-struct/docs/examples/core/flow/DoOnce"},next:{title:"For Loop",permalink:"/behave-graph-struct/docs/examples/core/flow/ForLoop"}},a={},d=[],i={toc:d};function c(e){let{components:n,...o}=e;return(0,l.kt)("wrapper",(0,t.Z)({},i,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"flip-flop"},"Flip Flop"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nodes": [\n    {\n      "type": "lifecycle/onStart",\n      "id": "0",\n      "flows": {\n        "flow": {\n          "nodeId": "1",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "type": "debug/log",\n      "id": "1",\n      "parameters": {\n        "text": {\n          "value": "Starting For Loop..."\n        }\n      },\n      "flows": {\n        "flow": {\n          "nodeId": "2",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "type": "flow/forLoop",\n      "id": "2",\n      "parameters": {\n        "startIndex": {\n          "value": 0\n        },\n        "endIndex": {\n          "value": 10\n        }\n      },\n      "flows": {\n        "loopBody": {\n          "nodeId": "3",\n          "socket": "flow"\n        },\n        "completed": {\n          "nodeId": "6",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "type": "flow/flipFlop",\n      "id": "3",\n      "flows": {\n        "on": {\n          "nodeId": "4",\n          "socket": "flow"\n        },\n        "off": {\n          "nodeId": "5",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "type": "debug/log",\n      "id": "4",\n      "parameters": {\n        "text": {\n          "value": "FlipFlop On Body!"\n        }\n      }\n    },\n    {\n      "type": "debug/log",\n      "id": "5",\n      "parameters": {\n        "text": {\n          "value": "FlipFlop Off Body!"\n        }\n      }\n    },\n    {\n      "type": "debug/log",\n      "id": "6",\n      "parameters": {\n        "text": {\n          "value": "Completed For Loop!"\n        }\n      }\n    }\n  ]\n}\n\n')))}c.isMDXComponent=!0}}]);