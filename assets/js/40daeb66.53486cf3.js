"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5387],{4134:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(7294),l=r(7462);const n={red:["#f56565","#ed64a6","#ffffff"],green:["#48bb78","#38a169","#ffffff"],lime:["#68d391","#4fd1c5","#ffffff"],purple:["#805ad5","#667eea","#ffffff"],blue:["#4299e1","#63b3ed","#ffffff"],gray:["#718096","#a0aec0","#ffffff"],white:["#ffffff","#ffffff","#2d3748"],black:["#2d3748","#2d3748","#ffffff"],yellow:["#f6e05e","#ecc94b","#ffffff"],orange:["#f6ad55","#ed8936","#ffffff"],pink:["#ed64a6","#f56565","#ffffff"]},i={flow:"white",number:"green",float:"green",integer:"lime",boolean:"red",string:"purple",object:"yellow",list:"orange"},o={Event:"red",Logic:"green",Variable:"purple",Query:"purple",Action:"blue",Flow:"gray",Time:"gray",None:"gray"};function u(e){let{title:t,category:r="None",children:l}=e,i=o[r];void 0===i&&(i="red");let[u,s,f]=n[i];return a.createElement("div",{style:{borderRadius:"0.25rem",color:"white",fontSize:"0.75rem",backgroundColor:"#2d3748",minWidth:"120px",width:"fit-content"}},a.createElement("div",{style:{backgroundColor:u,color:f,padding:"0.25rem 0.5rem",borderTopLeftRadius:"0.25rem",borderTopRightRadius:"0.25rem"}},t),a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",padding:"0.5rem 0",borderLeft:"1px solid",borderRight:"1px solid",borderBottom:"1px solid",borderColor:s}},l))}var s=r(1954);const f={position:"absolute",top:0,left:0,visibility:"hidden",height:0,width:"auto",whiteSpace:"pre"},c=e=>{let{minWidth:t=30,...r}=e;const n=(0,a.useRef)(null),i=(0,a.useRef)(null),[o,u]=(0,a.useState)({}),s=(0,a.useCallback)((e=>{if(e){const t=window.getComputedStyle(e);u({fontSize:t.getPropertyValue("font-size"),paddingLeft:t.getPropertyValue("padding-left"),paddingRight:t.getPropertyValue("padding-right")})}n.current=e}),[]);return(0,a.useEffect)((()=>{if(null===i.current)return;if(null===n.current)return;const e=i.current.clientWidth;n.current.style.width=Math.max(t,e)+"px"}),[r.value,t,o]),a.createElement(a.Fragment,null,a.createElement("input",(0,l.Z)({ref:s},r)),a.createElement("span",{ref:i,style:{...f,...o}},r.value))};function d(e){let{value:t,onChange:r,name:l,valueType:o,defaultValue:u}=e;const f="flow"===o;let d=i[o];void 0===d&&(d="red");const[p,m]=n[d],g=!1===f||"flow"!==l;return a.createElement("div",{style:{display:"flex",flexGrow:1,alignItems:"center",justifyContent:"start",height:"7px"}},f&&a.createElement(s.JO,{style:{color:"#ffffff",fontSize:".75rem"},icon:"mdi:chevron-right"}),!f&&a.createElement(s.JO,{style:{color:m,fontSize:".75rem",marginRight:"2px"},icon:"mdi:circle-outline"}),g&&a.createElement("div",{style:{textTransform:"capitalize",marginRight:"2px"}},l),!1===f&&a.createElement(a.Fragment,null,"string"===o&&a.createElement(c,{type:"text",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??u??"",onChange:e=>r(l,e.currentTarget.value)}),"number"===o&&a.createElement(c,{type:"number",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??u??"",onChange:e=>r(l,e.currentTarget.value)}),"float"===o&&a.createElement(c,{type:"number",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??u??"",onChange:e=>r(l,e.currentTarget.value)}),"integer"===o&&a.createElement(c,{type:"number",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??u??"",onChange:e=>r(l,e.currentTarget.value)}),"boolean"===o&&a.createElement("input",{type:"checkbox",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??u??"",onChange:e=>r(l,e.currentTarget.checked)})))}function p(e){let{valueType:t,name:r}=e;const l="flow"===t;let o=i[t];void 0===o&&(o="red");const[u,f]=n[o],c=!1===l||"flow"!==r;return a.createElement("div",{style:{display:"flex",flexGrow:1,alignItems:"center",justifyContent:"end",height:"7px"}},c&&a.createElement("div",{style:{textTransform:"capitalize",marginRight:"2px"}},r),l&&a.createElement(s.JO,{style:{color:"#ffffff",fontSize:".75rem"},icon:"mdi:chevron-right"}),!l&&a.createElement(s.JO,{style:{color:f,fontSize:".75rem"},icon:"mdi:circle-outline"}))}const m=e=>{let{spec:t}=e;const r=((e,t)=>{const r=Math.max(e.length,t.length),a=[];for(let l=0;l<r;l++){const r=[e[l],t[l]];a.push(r)}return a})(t.inputs,t.outputs);return a.createElement(u,{title:t.label,category:t.category},r.map(((e,t)=>{let[r,n]=e;return a.createElement("div",{key:t,style:{display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"0.5rem",padding:"0.5rem",position:"relative"}},r&&a.createElement(d,(0,l.Z)({},r,{value:r.defaultValue})),n&&a.createElement(p,n))})))},g=e=>{let{description:t,inputs:r,outputs:l,spec:n}=e;return a.createElement("div",{style:{background:"rgb(30, 31, 34)",backgroundImage:"linear-gradient(rgb(37,38,40) .1em, transparent .1em), linear-gradient(90deg, rgb(37,38,40) .1em, transparent .1em)",backgroundSize:"1em 1em",padding:"2em",width:"fit-content"}},a.createElement(m,{spec:n}))}},7518:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>f});var a=r(7462),l=(r(7294),r(3905)),n=r(4134);const i={},o="logic/equal/list",u={unversionedId:"profiles/Struct/Nodes/logic/equal/list",id:"profiles/Struct/Nodes/logic/equal/list",title:"logic/equal/list",description:"Returns true if its arguments are equivalent, false otherwise. Handles cyclical data structures. Dispatches symmetrically to the equals methods of both arguments, if present. See Rambdax's equals",source:"@site/docs/profiles/Struct/Nodes/logic/equal/list.mdx",sourceDirName:"profiles/Struct/Nodes/logic/equal",slug:"/profiles/Struct/Nodes/logic/equal/list",permalink:"/behave-graph-struct/docs/profiles/Struct/Nodes/logic/equal/list",draft:!1,editUrl:"https://github.com/aitorllj93/behave-graph-struct/tree/main/website/docs/profiles/Struct/Nodes/logic/equal/list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Equal",permalink:"/behave-graph-struct/docs/category/equal"},next:{title:"logic/equal/object",permalink:"/behave-graph-struct/docs/profiles/Struct/Nodes/logic/equal/object"}},s={},f=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:f};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"logicequallist"},"logic/equal/list"),(0,l.kt)("p",null,"Returns true if its arguments are equivalent, false otherwise. Handles cyclical data structures. Dispatches symmetrically to the equals methods of both arguments, if present. See ",(0,l.kt)("a",{parentName:"p",href:"https://selfrefactor.github.io/rambdax/#/?id=equals"},"Rambdax's equals")),(0,l.kt)(n.Z,{description:{typeName:"logic/equal/list",category:"Logic",label:"=",otherTypeNames:[],helpDescription:"Returns true if its arguments are equivalent, false otherwise. Handles cyclical data structures. Dispatches symmetrically to the equals methods of both arguments, if present. See [Rambdax's equals](https://selfrefactor.github.io/rambdax/#/?id=equals)",configuration:{}},inputs:[{valueTypeName:"list",name:"a",valueChoices:[],links:[]},{valueTypeName:"list",name:"b",valueChoices:[],links:[]}],outputs:[{valueTypeName:"boolean",name:"result",valueChoices:[],links:[]}],spec:{type:"logic/equal/list",category:"Logic",label:"=",inputs:[{name:"a",valueType:"list",defaultValue:"[]"},{name:"b",valueType:"list",defaultValue:"[]"}],outputs:[{name:"result",valueType:"boolean"}],configuration:[]},mdxType:"NodePreview"}),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"a"),(0,l.kt)("td",{parentName:"tr",align:null},"list"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"b"),(0,l.kt)("td",{parentName:"tr",align:null},"list"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean")))))}d.isMDXComponent=!0}}]);