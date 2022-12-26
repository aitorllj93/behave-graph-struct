"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7008],{63035:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>i,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=o(87462),l=(o(67294),o(3905));const s={},r="Do Once",c={unversionedId:"examples/core/flow/DoOnce",id:"examples/core/flow/DoOnce",title:"Do Once",description:"",source:"@site/docs/examples/core/flow/DoOnce.mdx",sourceDirName:"examples/core/flow",slug:"/examples/core/flow/DoOnce",permalink:"/behave-graph-struct/docs/examples/core/flow/DoOnce",draft:!1,editUrl:"https://github.com/aitorllj93/behave-graph-struct/tree/main/website/docs/examples/core/flow/DoOnce.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Counter",permalink:"/behave-graph-struct/docs/examples/core/flow/Counter"},next:{title:"Flip Flop",permalink:"/behave-graph-struct/docs/examples/core/flow/FlipFlop"}},a={},d=[],p={toc:d};function i(n){let{components:e,...o}=n;return(0,l.kt)("wrapper",(0,t.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"do-once"},"Do Once"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nodes": [\n    {\n      "type": "lifecycle/onStart",\n      "id": "0",\n      "flows": {\n        "flow": {\n          "nodeId": "1",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "type": "debug/log",\n      "id": "1",\n      "parameters": {\n        "text": {\n          "value": "Starting Sequence..."\n        }\n      },\n      "flows": {\n        "flow": {\n          "nodeId": "2",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "type": "flow/sequence/4",\n      "id": "2",\n      "flows": {\n        "1": {\n          "nodeId": "3",\n          "socket": "flow"\n        },\n        "2": {\n          "nodeId": "4",\n          "socket": "flow"\n        },\n        "3": {\n          "nodeId": "5",\n          "socket": "flow"\n        },\n        "4": {\n          "nodeId": "6",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "type": "debug/log",\n      "id": "3",\n      "parameters": {\n        "text": {\n          "value": "Trigging DoOnce"\n        }\n      },\n      "flows": {\n        "flow": {\n          "nodeId": "7",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "type": "debug/log",\n      "id": "4",\n      "parameters": {\n        "text": {\n          "value": "Trigging DoOnce"\n        }\n      },\n      "flows": {\n        "flow": {\n          "nodeId": "7",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "type": "debug/log",\n      "id": "5",\n      "parameters": {\n        "text": {\n          "value": "Resetting DoOnce"\n        }\n      },\n      "flows": {\n        "flow": {\n          "nodeId": "7",\n          "socket": "reset"\n        }\n      }\n    },\n    {\n      "type": "debug/log",\n      "id": "6",\n      "parameters": {\n        "text": {\n          "value": "Triggering DoOnce"\n        }\n      },\n      "flows": {\n        "flow": {\n          "nodeId": "7",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "type": "flow/doOnce",\n      "id": "7",\n      "flows": {\n        "flow": {\n          "nodeId": "8",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "type": "debug/log",\n      "id": "8",\n      "parameters": {\n        "text": {\n          "value": "DoOnce Output Triggered"\n        }\n      }\n    }\n  ]\n}\n\n')))}i.isMDXComponent=!0}}]);