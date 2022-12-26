"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7385],{89226:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const a={sidebar_position:3},o="Running The Engine",s={unversionedId:"running-the-engine",id:"running-the-engine",title:"Running The Engine",description:"To be able to run Behave Graph, you need to have a graph in JSON format. You can create a graph using the Graph Editor or by writing it manually.",source:"@site/docs/running-the-engine.md",sourceDirName:".",slug:"/running-the-engine",permalink:"/behave-graph-struct/docs/running-the-engine",draft:!1,editUrl:"https://github.com/aitorllj93/behave-graph-struct/tree/main/website/docs/running-the-engine.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Defining a Graph",permalink:"/behave-graph-struct/docs/defining-a-graph"},next:{title:"Core Concepts",permalink:"/behave-graph-struct/docs/category/core-concepts"}},c={},l=[],u={toc:l};function g(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running-the-engine"},"Running The Engine"),(0,i.kt)("p",null,"To be able to run Behave Graph, you need to have a graph in JSON format. You can create a graph using the ",(0,i.kt)("a",{parentName:"p",href:"./graph-editor"},"Graph Editor")," or by writing it manually."),(0,i.kt)("p",null,"You will also need to configure the registry with the profiles you want to use. You can read more about profiles ",(0,i.kt)("a",{parentName:"p",href:"./core-concepts/profiles"},"here"),"."),(0,i.kt)("p",null,"Here's an example code of how should look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  DefaultLogger,\n  Engine,\n  readGraphFromJSON,\n  registerCoreProfile,\n  Registry,\n  ManualLifecycleEventEmitter,\n} from '@behave-graph/core';\n\nimport myGraphJson from './myGraph.json';\n\n/** Setup the Registry **/\nconst registry = new Registry();\nconst logger = new DefaultLogger();\nconst manualLifecycleEventEmitter = new ManualLifecycleEventEmitter();\n\nregisterCoreProfile(registry, logger, manualLifecycleEventEmitter);\n\n/** Prepare the Graph **/\nconst graph = readGraphFromJSON(myGraphJson, registry);\n\n/** Run the Graph **/\nconst engine = new Engine(graph);\n\n/** Trigger events **/\n\nif (manualLifecycleEventEmitter.startEvent.listenerCount > 0) {\n  manualLifecycleEventEmitter.startEvent.emit();\n  await engine.executeAllAsync(5);\n}\n\nif (manualLifecycleEventEmitter.tickEvent.listenerCount > 0) {\n  const iterations = 20;\n  const tickDuration = 0.01;\n  for (let tick = 0; tick < iterations; tick++) {\n    manualLifecycleEventEmitter.tickEvent.emit();\n    engine.executeAllSync(tickDuration);\n    await sleep(tickDuration);\n  }\n}\n\nif (manualLifecycleEventEmitter.endEvent.listenerCount > 0) {\n  manualLifecycleEventEmitter.endEvent.emit();\n  await engine.executeAllAsync(5);\n}\n\n")))}g.isMDXComponent=!0}}]);