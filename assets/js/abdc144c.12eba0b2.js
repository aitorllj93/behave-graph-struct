"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8301],{54192:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>n,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=a(87462),t=(a(67294),a(3905));const s={},i="euler",u={unversionedId:"profiles/Scene/Values/euler",id:"profiles/Scene/Values/euler",title:"euler",description:"Serialize",source:"@site/docs/profiles/Scene/Values/euler.mdx",sourceDirName:"profiles/Scene/Values",slug:"/profiles/Scene/Values/euler",permalink:"/behave-graph-struct/docs/profiles/Scene/Values/euler",draft:!1,editUrl:"https://github.com/aitorllj93/behave-graph-struct/tree/main/website/docs/profiles/Scene/Values/euler.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"color",permalink:"/behave-graph-struct/docs/profiles/Scene/Values/color"},next:{title:"mat3",permalink:"/behave-graph-struct/docs/profiles/Scene/Values/mat3"}},n={},c=[{value:"Serialize",id:"serialize",level:2},{value:"Deserialize",id:"deserialize",level:2}],o={toc:c};function p(e){let{components:l,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},o,a,{components:l,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"euler"},"euler"),(0,t.kt)("h2",{id:"serialize"},"Serialize"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"(value) => [value.x, value.y, value.z]\n")),(0,t.kt)("h2",{id:"deserialize"},"Deserialize"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"(value) => typeof value === 'string'\n    ? (0, Vec3_1.vec3Parse)(value)\n    : new Vec3_1.Vec3(value[0], value[1], value[2])\n")))}p.isMDXComponent=!0}}]);