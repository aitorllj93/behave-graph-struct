"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[868],{91093:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var l=t(87462),o=(t(67294),t(3905));const a={},s="Wait All",r={unversionedId:"examples/core/flow/WaitAll",id:"examples/core/flow/WaitAll",title:"Wait All",description:"",source:"@site/docs/examples/core/flow/WaitAll.mdx",sourceDirName:"examples/core/flow",slug:"/examples/core/flow/WaitAll",permalink:"/behave-graph-struct/docs/examples/core/flow/WaitAll",draft:!1,editUrl:"https://github.com/aitorllj93/behave-graph-struct/tree/main/website/docs/examples/core/flow/WaitAll.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Sequence",permalink:"/behave-graph-struct/docs/examples/core/flow/Sequence"},next:{title:"Polynomial",permalink:"/behave-graph-struct/docs/examples/core/logic/Polynomial"}},i={},d=[],c={toc:d};function p(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,l.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wait-all"},"Wait All"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nodes": [\n    {\n      "type": "lifecycle/onStart",\n      "id": "0",\n      "flows": {\n        "flow": {\n          "nodeId": "1",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "type": "debug/log",\n      "id": "1",\n      "parameters": {\n        "text": {\n          "value": "Starting Sequence..."\n        }\n      },\n      "flows": {\n        "flow": {\n          "nodeId": "2",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "type": "flow/sequence",\n      "configuration": {\n        "numOutputs": 4\n      },\n      "id": "2",\n      "flows": {\n        "1": {\n          "nodeId": "3",\n          "socket": "flow"\n        },\n        "2": {\n          "nodeId": "4",\n          "socket": "flow"\n        },\n        "3": {\n          "nodeId": "5",\n          "socket": "flow"\n        },\n        "4": {\n          "nodeId": "6",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "type": "debug/log",\n      "id": "3",\n      "parameters": {\n        "text": {\n          "value": "Trigging WaitAll 1"\n        }\n      },\n      "flows": {\n        "flow": {\n          "nodeId": "7",\n          "socket": "1"\n        }\n      }\n    },\n    {\n      "type": "debug/log",\n      "id": "4",\n      "parameters": {\n        "text": {\n          "value": "Trigging WaitAll 2"\n        }\n      },\n      "flows": {\n        "flow": {\n          "nodeId": "7",\n          "socket": "2"\n        }\n      }\n    },\n    {\n      "type": "debug/log",\n      "id": "5",\n      "parameters": {\n        "text": {\n          "value": "Resetting WaitAll"\n        }\n      },\n      "flows": {\n        "flow": {\n          "nodeId": "7",\n          "socket": "reset"\n        }\n      }\n    },\n    {\n      "type": "debug/log",\n      "id": "6",\n      "parameters": {\n        "text": {\n          "value": "Triggering WaitAll 2"\n        }\n      },\n      "flows": {\n        "flow": {\n          "nodeId": "7",\n          "socket": "2"\n        }\n      }\n    },\n    {\n      "type": "flow/waitAll",\n      "configuration": {\n        "numInputs": 2\n      },\n      "id": "7",\n      "flows": {\n        "flow": {\n          "nodeId": "8",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "type": "debug/log",\n      "id": "8",\n      "parameters": {\n        "text": {\n          "value": "WaitAll Output Triggered"\n        }\n      }\n    }\n  ]\n}\n\n')))}p.isMDXComponent=!0}}]);