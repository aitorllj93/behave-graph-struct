"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8787],{61681:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var s=r(87462),o=(r(67294),r(3905));const i={sidebar_position:1},n="Registry",a={unversionedId:"core-concepts/registry",id:"core-concepts/registry",title:"Registry",description:"The registry is a collection of all the nodes and value types that are available in the system.",source:"@site/docs/core-concepts/registry.md",sourceDirName:"core-concepts",slug:"/core-concepts/registry",permalink:"/behave-graph-struct/docs/core-concepts/registry",draft:!1,editUrl:"https://github.com/aitorllj93/behave-graph-struct/tree/main/website/docs/core-concepts/registry.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Core Concepts",permalink:"/behave-graph-struct/docs/category/core-concepts"},next:{title:"Profiles",permalink:"/behave-graph-struct/docs/core-concepts/profiles"}},c={},p=[],l={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"registry"},"Registry"),(0,o.kt)("p",null,"The registry is a collection of all the nodes and value types that are available in the system."),(0,o.kt)("p",null,"In order to add a node or value type to the registry, you need to use the register function, usually inside your ",(0,o.kt)("a",{parentName:"p",href:"/behave-graph-struct/docs/core-concepts/profiles"},"profile's register function"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Registry } from '@behave-graph/core';\n\nconst registry = new Registry();\n\nconst { nodes, values } = registry;\n\n// Register a value type\nvalues.register(MyValueTypeDescription);\n\n// Register a node\nnodes.register(MyNodeDescription);\n")))}d.isMDXComponent=!0}}]);