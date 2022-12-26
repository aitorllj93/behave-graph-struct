"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6326],{66119:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var o=t(87462),a=(t(67294),t(3905));const s={},i="Graph",p={unversionedId:"examples/react-flow/graph",id:"examples/react-flow/graph",title:"Graph",description:"",source:"@site/docs/examples/react-flow/graph.mdx",sourceDirName:"examples/react-flow",slug:"/examples/react-flow/graph",permalink:"/behave-graph-struct/docs/examples/react-flow/graph",draft:!1,editUrl:"https://github.com/aitorllj93/behave-graph-struct/tree/main/website/docs/examples/react-flow/graph.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Set Get",permalink:"/behave-graph-struct/docs/examples/core/variables/SetGet"},next:{title:"Color",permalink:"/behave-graph-struct/docs/examples/scene/logic/Color"}},r={},d=[],l={toc:d};function c(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,o.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"graph"},"Graph"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nodes": [\n    {\n      "id": "7569b164-1b58-4520-bd1c-0ca1386c554b",\n      "type": "debug/log",\n      "metadata": {\n        "positionX": "-217",\n        "positionY": "413"\n      },\n      "parameters": {\n        "text": {\n          "value": "Finished"\n        }\n      }\n    },\n    {\n      "id": "9c8f417c-4a96-4be0-8b7b-5c0542ba3a0f",\n      "type": "lifecycle/onEnd",\n      "metadata": {\n        "positionX": "-430",\n        "positionY": "421"\n      },\n      "flows": {\n        "flow": {\n          "nodeId": "7569b164-1b58-4520-bd1c-0ca1386c554b",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "id": "fb0d04f5-0915-4408-bee0-87b1f3931ea7",\n      "type": "debug/log",\n      "metadata": {\n        "positionX": "-287",\n        "positionY": "196"\n      },\n      "parameters": {\n        "text": {\n          "value": "Ticking"\n        }\n      }\n    },\n    {\n      "id": "1fe32e5d-e14e-455a-9a49-7c21a79dd9da",\n      "type": "lifecycle/onTick",\n      "metadata": {\n        "positionX": "-550",\n        "positionY": "168"\n      },\n      "flows": {\n        "flow": {\n          "nodeId": "fb0d04f5-0915-4408-bee0-87b1f3931ea7",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "id": "0",\n      "type": "lifecycle/onStart",\n      "metadata": {\n        "positionX": "-579",\n        "positionY": "-67"\n      },\n      "flows": {\n        "flow": {\n          "nodeId": "1",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "id": "1",\n      "type": "debug/log",\n      "metadata": {\n        "positionX": "-422",\n        "positionY": "-67"\n      },\n      "parameters": {\n        "text": {\n          "value": "Starting Sequence..."\n        }\n      },\n      "flows": {\n        "flow": {\n          "nodeId": "2",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "id": "2",\n      "type": "flow/sequence",\n      "metadata": {\n        "positionX": "-164",\n        "positionY": "-67"\n      },\n      "flows": {\n        "1": {\n          "nodeId": "3",\n          "socket": "flow"\n        },\n        "2": {\n          "nodeId": "4",\n          "socket": "flow"\n        },\n        "3": {\n          "nodeId": "5",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "id": "3",\n      "type": "debug/log",\n      "metadata": {\n        "positionX": "32",\n        "positionY": "-99"\n      },\n      "parameters": {\n        "text": {\n          "value": "First Sequence Output!"\n        }\n      },\n      "flows": {\n        "flow": {\n          "nodeId": "6",\n          "socket": "flow"\n        }\n      }\n    },\n    {\n      "id": "4",\n      "type": "debug/log",\n      "metadata": {\n        "positionX": "26",\n        "positionY": "40"\n      },\n      "parameters": {\n        "text": {\n          "value": "Second Sequence Output!"\n        }\n      }\n    },\n    {\n      "id": "5",\n      "type": "debug/log",\n      "metadata": {\n        "positionX": "21",\n        "positionY": "179"\n      },\n      "parameters": {\n        "text": {\n          "value": "Third Sequence Output!"\n        }\n      }\n    },\n    {\n      "id": "6",\n      "type": "debug/log",\n      "metadata": {\n        "positionX": "321",\n        "positionY": "-98"\n      },\n      "parameters": {\n        "text": {\n          "value": "Downstream of First Sequence!"\n        }\n      }\n    }\n  ],\n  "variables": [],\n  "customEvents": []\n}\n')))}c.isMDXComponent=!0}}]);