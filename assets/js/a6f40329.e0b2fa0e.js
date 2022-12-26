"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[120],{4134:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7294),a=r(7462);const l={red:["#f56565","#ed64a6","#ffffff"],green:["#48bb78","#38a169","#ffffff"],lime:["#68d391","#4fd1c5","#ffffff"],purple:["#805ad5","#667eea","#ffffff"],blue:["#4299e1","#63b3ed","#ffffff"],gray:["#718096","#a0aec0","#ffffff"],white:["#ffffff","#ffffff","#2d3748"],black:["#2d3748","#2d3748","#ffffff"],yellow:["#f6e05e","#ecc94b","#ffffff"],orange:["#f6ad55","#ed8936","#ffffff"],pink:["#ed64a6","#f56565","#ffffff"]},o={flow:"white",number:"green",float:"green",integer:"lime",boolean:"red",string:"purple",object:"yellow",list:"orange"},i={Event:"red",Logic:"green",Variable:"purple",Query:"purple",Action:"blue",Flow:"gray",Time:"gray",None:"gray"};function s(e){let{title:t,category:r="None",children:a}=e,o=i[r];void 0===o&&(o="red");let[s,f,u]=l[o];return n.createElement("div",{style:{borderRadius:"0.25rem",color:"white",fontSize:"0.75rem",backgroundColor:"#2d3748",minWidth:"120px",width:"fit-content"}},n.createElement("div",{style:{backgroundColor:s,color:u,padding:"0.25rem 0.5rem",borderTopLeftRadius:"0.25rem",borderTopRightRadius:"0.25rem"}},t),n.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",padding:"0.5rem 0",borderLeft:"1px solid",borderRight:"1px solid",borderBottom:"1px solid",borderColor:f}},a))}var f=r(1954);const u={position:"absolute",top:0,left:0,visibility:"hidden",height:0,width:"auto",whiteSpace:"pre"},d=e=>{let{minWidth:t=30,...r}=e;const l=(0,n.useRef)(null),o=(0,n.useRef)(null),[i,s]=(0,n.useState)({}),f=(0,n.useCallback)((e=>{if(e){const t=window.getComputedStyle(e);s({fontSize:t.getPropertyValue("font-size"),paddingLeft:t.getPropertyValue("padding-left"),paddingRight:t.getPropertyValue("padding-right")})}l.current=e}),[]);return(0,n.useEffect)((()=>{if(null===o.current)return;if(null===l.current)return;const e=o.current.clientWidth;l.current.style.width=Math.max(t,e)+"px"}),[r.value,t,i]),n.createElement(n.Fragment,null,n.createElement("input",(0,a.Z)({ref:f},r)),n.createElement("span",{ref:o,style:{...u,...i}},r.value))};function c(e){let{value:t,onChange:r,name:a,valueType:i,defaultValue:s}=e;const u="flow"===i;let c=o[i];void 0===c&&(c="red");const[p,g]=l[c],m=!1===u||"flow"!==a;return n.createElement("div",{style:{display:"flex",flexGrow:1,alignItems:"center",justifyContent:"start",height:"7px"}},u&&n.createElement(f.JO,{style:{color:"#ffffff",fontSize:".75rem"},icon:"mdi:chevron-right"}),!u&&n.createElement(f.JO,{style:{color:g,fontSize:".75rem",marginRight:"2px"},icon:"mdi:circle-outline"}),m&&n.createElement("div",{style:{textTransform:"capitalize",marginRight:"2px"}},a),!1===u&&n.createElement(n.Fragment,null,"string"===i&&n.createElement(d,{type:"text",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??s??"",onChange:e=>r(a,e.currentTarget.value)}),"number"===i&&n.createElement(d,{type:"number",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??s??"",onChange:e=>r(a,e.currentTarget.value)}),"float"===i&&n.createElement(d,{type:"number",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??s??"",onChange:e=>r(a,e.currentTarget.value)}),"integer"===i&&n.createElement(d,{type:"number",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??s??"",onChange:e=>r(a,e.currentTarget.value)}),"boolean"===i&&n.createElement("input",{type:"checkbox",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??s??"",onChange:e=>r(a,e.currentTarget.checked)})))}function p(e){let{valueType:t,name:r}=e;const a="flow"===t;let i=o[t];void 0===i&&(i="red");const[s,u]=l[i],d=!1===a||"flow"!==r;return n.createElement("div",{style:{display:"flex",flexGrow:1,alignItems:"center",justifyContent:"end",height:"7px"}},d&&n.createElement("div",{style:{textTransform:"capitalize",marginRight:"2px"}},r),a&&n.createElement(f.JO,{style:{color:"#ffffff",fontSize:".75rem"},icon:"mdi:chevron-right"}),!a&&n.createElement(f.JO,{style:{color:u,fontSize:".75rem"},icon:"mdi:circle-outline"}))}const g=e=>{let{spec:t}=e;const r=((e,t)=>{const r=Math.max(e.length,t.length),n=[];for(let a=0;a<r;a++){const r=[e[a],t[a]];n.push(r)}return n})(t.inputs,t.outputs);return n.createElement(s,{title:t.label,category:t.category},r.map(((e,t)=>{let[r,l]=e;return n.createElement("div",{key:t,style:{display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"0.5rem",padding:"0.5rem",position:"relative"}},r&&n.createElement(c,(0,a.Z)({},r,{value:r.defaultValue})),l&&n.createElement(p,l))})))},m=e=>{let{description:t,inputs:r,outputs:a,spec:l}=e;return n.createElement("div",{style:{background:"rgb(30, 31, 34)",backgroundImage:"linear-gradient(rgb(37,38,40) .1em, transparent .1em), linear-gradient(90deg, rgb(37,38,40) .1em, transparent .1em)",backgroundSize:"1em 1em",padding:"2em",width:"fit-content"}},n.createElement(g,{spec:l}))}},375:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),l=r(4134);const o={},i="math/toList/string",s={unversionedId:"profiles/Struct/Nodes/math/to-list/string",id:"profiles/Struct/Nodes/math/to-list/string",title:"math/toList/string",description:"Converts a string to a list",source:"@site/docs/profiles/Struct/Nodes/math/to-list/string.mdx",sourceDirName:"profiles/Struct/Nodes/math/to-list",slug:"/profiles/Struct/Nodes/math/to-list/string",permalink:"/behave-graph-struct/docs/profiles/Struct/Nodes/math/to-list/string",draft:!1,editUrl:"https://github.com/aitorllj93/behave-graph-struct/tree/main/website/docs/profiles/Struct/Nodes/math/to-list/string.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"ToList",permalink:"/behave-graph-struct/docs/category/tolist"},next:{title:"ToObject",permalink:"/behave-graph-struct/docs/category/toobject"}},f={},u=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mathtoliststring"},"math/toList/string"),(0,a.kt)("p",null,"Converts a string to a list"),(0,a.kt)(l.Z,{description:{typeName:"math/toList/string",category:"Logic",label:"To List",otherTypeNames:[],helpDescription:"Converts a string to a list",configuration:{}},inputs:[{valueTypeName:"string",name:"a",valueChoices:[],links:[]}],outputs:[{valueTypeName:"list",name:"result",valueChoices:[],links:[]}],spec:{type:"math/toList/string",category:"Logic",label:"To List",inputs:[{name:"a",valueType:"string",defaultValue:""}],outputs:[{name:"result",valueType:"list"}],configuration:[]},mdxType:"NodePreview"}),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"a"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"result"),(0,a.kt)("td",{parentName:"tr",align:null},"list")))))}c.isMDXComponent=!0}}]);