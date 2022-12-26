"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1081],{4134:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(7294),n=r(7462);const l={red:["#f56565","#ed64a6","#ffffff"],green:["#48bb78","#38a169","#ffffff"],lime:["#68d391","#4fd1c5","#ffffff"],purple:["#805ad5","#667eea","#ffffff"],blue:["#4299e1","#63b3ed","#ffffff"],gray:["#718096","#a0aec0","#ffffff"],white:["#ffffff","#ffffff","#2d3748"],black:["#2d3748","#2d3748","#ffffff"],yellow:["#f6e05e","#ecc94b","#ffffff"],orange:["#f6ad55","#ed8936","#ffffff"],pink:["#ed64a6","#f56565","#ffffff"]},o={flow:"white",number:"green",float:"green",integer:"lime",boolean:"red",string:"purple",object:"yellow",list:"orange"},i={Event:"red",Logic:"green",Variable:"purple",Query:"purple",Action:"blue",Flow:"gray",Time:"gray",None:"gray"};function c(e){let{title:t,category:r="None",children:n}=e,o=i[r];void 0===o&&(o="red");let[c,f,u]=l[o];return a.createElement("div",{style:{borderRadius:"0.25rem",color:"white",fontSize:"0.75rem",backgroundColor:"#2d3748",minWidth:"120px",width:"fit-content"}},a.createElement("div",{style:{backgroundColor:c,color:u,padding:"0.25rem 0.5rem",borderTopLeftRadius:"0.25rem",borderTopRightRadius:"0.25rem"}},t),a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",padding:"0.5rem 0",borderLeft:"1px solid",borderRight:"1px solid",borderBottom:"1px solid",borderColor:f}},n))}var f=r(1954);const u={position:"absolute",top:0,left:0,visibility:"hidden",height:0,width:"auto",whiteSpace:"pre"},p=e=>{let{minWidth:t=30,...r}=e;const l=(0,a.useRef)(null),o=(0,a.useRef)(null),[i,c]=(0,a.useState)({}),f=(0,a.useCallback)((e=>{if(e){const t=window.getComputedStyle(e);c({fontSize:t.getPropertyValue("font-size"),paddingLeft:t.getPropertyValue("padding-left"),paddingRight:t.getPropertyValue("padding-right")})}l.current=e}),[]);return(0,a.useEffect)((()=>{if(null===o.current)return;if(null===l.current)return;const e=o.current.clientWidth;l.current.style.width=Math.max(t,e)+"px"}),[r.value,t,i]),a.createElement(a.Fragment,null,a.createElement("input",(0,n.Z)({ref:f},r)),a.createElement("span",{ref:o,style:{...u,...i}},r.value))};function d(e){let{value:t,onChange:r,name:n,valueType:i,defaultValue:c}=e;const u="flow"===i;let d=o[i];void 0===d&&(d="red");const[s,g]=l[d],m=!1===u||"flow"!==n;return a.createElement("div",{style:{display:"flex",flexGrow:1,alignItems:"center",justifyContent:"start",height:"7px"}},u&&a.createElement(f.JO,{style:{color:"#ffffff",fontSize:".75rem"},icon:"mdi:chevron-right"}),!u&&a.createElement(f.JO,{style:{color:g,fontSize:".75rem",marginRight:"2px"},icon:"mdi:circle-outline"}),m&&a.createElement("div",{style:{textTransform:"capitalize",marginRight:"2px"}},n),!1===u&&a.createElement(a.Fragment,null,"string"===i&&a.createElement(p,{type:"text",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??c??"",onChange:e=>r(n,e.currentTarget.value)}),"number"===i&&a.createElement(p,{type:"number",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??c??"",onChange:e=>r(n,e.currentTarget.value)}),"float"===i&&a.createElement(p,{type:"number",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??c??"",onChange:e=>r(n,e.currentTarget.value)}),"integer"===i&&a.createElement(p,{type:"number",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??c??"",onChange:e=>r(n,e.currentTarget.value)}),"boolean"===i&&a.createElement("input",{type:"checkbox",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??c??"",onChange:e=>r(n,e.currentTarget.checked)})))}function s(e){let{valueType:t,name:r}=e;const n="flow"===t;let i=o[t];void 0===i&&(i="red");const[c,u]=l[i],p=!1===n||"flow"!==r;return a.createElement("div",{style:{display:"flex",flexGrow:1,alignItems:"center",justifyContent:"end",height:"7px"}},p&&a.createElement("div",{style:{textTransform:"capitalize",marginRight:"2px"}},r),n&&a.createElement(f.JO,{style:{color:"#ffffff",fontSize:".75rem"},icon:"mdi:chevron-right"}),!n&&a.createElement(f.JO,{style:{color:u,fontSize:".75rem"},icon:"mdi:circle-outline"}))}const g=e=>{let{spec:t}=e;const r=((e,t)=>{const r=Math.max(e.length,t.length),a=[];for(let n=0;n<r;n++){const r=[e[n],t[n]];a.push(r)}return a})(t.inputs,t.outputs);return a.createElement(c,{title:t.label,category:t.category},r.map(((e,t)=>{let[r,l]=e;return a.createElement("div",{key:t,style:{display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"0.5rem",padding:"0.5rem",position:"relative"}},r&&a.createElement(d,(0,n.Z)({},r,{value:r.defaultValue})),l&&a.createElement(s,l))})))},m=e=>{let{description:t,inputs:r,outputs:n,spec:l}=e;return a.createElement("div",{style:{background:"rgb(30, 31, 34)",backgroundImage:"linear-gradient(rgb(37,38,40) .1em, transparent .1em), linear-gradient(90deg, rgb(37,38,40) .1em, transparent .1em)",backgroundSize:"1em 1em",padding:"2em",width:"fit-content"}},a.createElement(g,{spec:l}))}},3657:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=r(7462),n=(r(7294),r(3905)),l=r(4134);const o={},i="logic/path/object",c={unversionedId:"profiles/Struct/Nodes/logic/path/object",id:"profiles/Struct/Nodes/logic/path/object",title:"logic/path/object",description:'If pathToSearch is "a.b" then it will return 1 if obj is }. It will return undefined, if such path is not found. See Rambdax\'s path"',source:"@site/docs/profiles/Struct/Nodes/logic/path/object.mdx",sourceDirName:"profiles/Struct/Nodes/logic/path",slug:"/profiles/Struct/Nodes/logic/path/object",permalink:"/behave-graph-struct/docs/profiles/Struct/Nodes/logic/path/object",draft:!1,editUrl:"https://github.com/aitorllj93/behave-graph-struct/tree/main/website/docs/profiles/Struct/Nodes/logic/path/object.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"logic/path/integer",permalink:"/behave-graph-struct/docs/profiles/Struct/Nodes/logic/path/integer"},next:{title:"logic/path/string",permalink:"/behave-graph-struct/docs/profiles/Struct/Nodes/logic/path/string"}},f={},u=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"logicpathobject"},"logic/path/object"),(0,n.kt)("p",null,'If pathToSearch is "a.b" then it will return 1 if obj is {a:{b:1}}. It will return undefined, if such path is not found. See ',(0,n.kt)("a",{parentName:"p",href:"https://selfrefactor.github.io/rambdax/#/?id=path"},"Rambdax's path"),'"'),(0,n.kt)(l.Z,{description:{typeName:"logic/path/object",category:"Logic",label:"Path",otherTypeNames:[],helpDescription:'If pathToSearch is "a.b" then it will return 1 if obj is {a:{b:1}}. It will return undefined, if such path is not found. See [Rambdax\'s path](https://selfrefactor.github.io/rambdax/#/?id=path)"',configuration:{}},inputs:[{valueTypeName:"string",name:"pathToSearch",valueChoices:[],links:[]},{valueTypeName:"object",name:"obj",valueChoices:[],links:[]}],outputs:[{valueTypeName:"object",name:"result",valueChoices:[],links:[]}],spec:{type:"logic/path/object",category:"Logic",label:"Path",inputs:[{name:"pathToSearch",valueType:"string",defaultValue:""},{name:"obj",valueType:"object",defaultValue:"[]"}],outputs:[{name:"result",valueType:"object"}],configuration:[]},mdxType:"NodePreview"}),(0,n.kt)("h2",{id:"inputs"},"Inputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pathToSearch"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"obj"),(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"result"),(0,n.kt)("td",{parentName:"tr",align:null},"object")))))}d.isMDXComponent=!0}}]);