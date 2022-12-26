"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5036],{4134:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(7294),l=a(7462);const n={red:["#f56565","#ed64a6","#ffffff"],green:["#48bb78","#38a169","#ffffff"],lime:["#68d391","#4fd1c5","#ffffff"],purple:["#805ad5","#667eea","#ffffff"],blue:["#4299e1","#63b3ed","#ffffff"],gray:["#718096","#a0aec0","#ffffff"],white:["#ffffff","#ffffff","#2d3748"],black:["#2d3748","#2d3748","#ffffff"],yellow:["#f6e05e","#ecc94b","#ffffff"],orange:["#f6ad55","#ed8936","#ffffff"],pink:["#ed64a6","#f56565","#ffffff"]},o={flow:"white",number:"green",float:"green",integer:"lime",boolean:"red",string:"purple",object:"yellow",list:"orange"},i={Event:"red",Logic:"green",Variable:"purple",Query:"purple",Action:"blue",Flow:"gray",Time:"gray",None:"gray"};function d(e){let{title:t,category:a="None",children:l}=e,o=i[a];void 0===o&&(o="red");let[d,c,u]=n[o];return r.createElement("div",{style:{borderRadius:"0.25rem",color:"white",fontSize:"0.75rem",backgroundColor:"#2d3748",minWidth:"120px",width:"fit-content"}},r.createElement("div",{style:{backgroundColor:d,color:u,padding:"0.25rem 0.5rem",borderTopLeftRadius:"0.25rem",borderTopRightRadius:"0.25rem"}},t),r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",padding:"0.5rem 0",borderLeft:"1px solid",borderRight:"1px solid",borderBottom:"1px solid",borderColor:c}},l))}var c=a(1954);const u={position:"absolute",top:0,left:0,visibility:"hidden",height:0,width:"auto",whiteSpace:"pre"},s=e=>{let{minWidth:t=30,...a}=e;const n=(0,r.useRef)(null),o=(0,r.useRef)(null),[i,d]=(0,r.useState)({}),c=(0,r.useCallback)((e=>{if(e){const t=window.getComputedStyle(e);d({fontSize:t.getPropertyValue("font-size"),paddingLeft:t.getPropertyValue("padding-left"),paddingRight:t.getPropertyValue("padding-right")})}n.current=e}),[]);return(0,r.useEffect)((()=>{if(null===o.current)return;if(null===n.current)return;const e=o.current.clientWidth;n.current.style.width=Math.max(t,e)+"px"}),[a.value,t,i]),r.createElement(r.Fragment,null,r.createElement("input",(0,l.Z)({ref:c},a)),r.createElement("span",{ref:o,style:{...u,...i}},a.value))};function f(e){let{value:t,onChange:a,name:l,valueType:i,defaultValue:d}=e;const u="flow"===i;let f=o[i];void 0===f&&(f="red");const[p,m]=n[f],g=!1===u||"flow"!==l;return r.createElement("div",{style:{display:"flex",flexGrow:1,alignItems:"center",justifyContent:"start",height:"7px"}},u&&r.createElement(c.JO,{style:{color:"#ffffff",fontSize:".75rem"},icon:"mdi:chevron-right"}),!u&&r.createElement(c.JO,{style:{color:m,fontSize:".75rem",marginRight:"2px"},icon:"mdi:circle-outline"}),g&&r.createElement("div",{style:{textTransform:"capitalize",marginRight:"2px"}},l),!1===u&&r.createElement(r.Fragment,null,"string"===i&&r.createElement(s,{type:"text",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??d??"",onChange:e=>a(l,e.currentTarget.value)}),"number"===i&&r.createElement(s,{type:"number",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??d??"",onChange:e=>a(l,e.currentTarget.value)}),"float"===i&&r.createElement(s,{type:"number",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??d??"",onChange:e=>a(l,e.currentTarget.value)}),"integer"===i&&r.createElement(s,{type:"number",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??d??"",onChange:e=>a(l,e.currentTarget.value)}),"boolean"===i&&r.createElement("input",{type:"checkbox",style:{backgroundColor:"#6b7280",color:"#ffffff",padding:"1px 2px",border:"none",borderRadius:"4px"},value:String(t)??d??"",onChange:e=>a(l,e.currentTarget.checked)})))}function p(e){let{valueType:t,name:a}=e;const l="flow"===t;let i=o[t];void 0===i&&(i="red");const[d,u]=n[i],s=!1===l||"flow"!==a;return r.createElement("div",{style:{display:"flex",flexGrow:1,alignItems:"center",justifyContent:"end",height:"7px"}},s&&r.createElement("div",{style:{textTransform:"capitalize",marginRight:"2px"}},a),l&&r.createElement(c.JO,{style:{color:"#ffffff",fontSize:".75rem"},icon:"mdi:chevron-right"}),!l&&r.createElement(c.JO,{style:{color:u,fontSize:".75rem"},icon:"mdi:circle-outline"}))}const m=e=>{let{spec:t}=e;const a=((e,t)=>{const a=Math.max(e.length,t.length),r=[];for(let l=0;l<a;l++){const a=[e[l],t[l]];r.push(a)}return r})(t.inputs,t.outputs);return r.createElement(d,{title:t.label,category:t.category},a.map(((e,t)=>{let[a,n]=e;return r.createElement("div",{key:t,style:{display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"0.5rem",padding:"0.5rem",position:"relative"}},a&&r.createElement(f,(0,l.Z)({},a,{value:a.defaultValue})),n&&r.createElement(p,n))})))},g=e=>{let{description:t,inputs:a,outputs:l,spec:n}=e;return r.createElement("div",{style:{background:"rgb(30, 31, 34)",backgroundImage:"linear-gradient(rgb(37,38,40) .1em, transparent .1em), linear-gradient(90deg, rgb(37,38,40) .1em, transparent .1em)",backgroundSize:"1em 1em",padding:"2em",width:"fit-content"}},r.createElement(m,{spec:n}))}},5747:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=a(7462),l=(a(7294),a(3905)),n=a(4134);const o={},i="logic/validate/object",d={unversionedId:"profiles/Struct/Nodes/logic/validate/object",id:"profiles/Struct/Nodes/logic/validate/object",title:"logic/validate/object",description:"Validate data using passed schema. See Ajv's validate",source:"@site/docs/profiles/Struct/Nodes/logic/validate/object.mdx",sourceDirName:"profiles/Struct/Nodes/logic/validate",slug:"/profiles/Struct/Nodes/logic/validate/object",permalink:"/behave-graph-struct/docs/profiles/Struct/Nodes/logic/validate/object",draft:!1,editUrl:"https://github.com/aitorllj93/behave-graph-struct/tree/main/website/docs/profiles/Struct/Nodes/logic/validate/object.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Validate",permalink:"/behave-graph-struct/docs/category/validate"},next:{title:"ToList",permalink:"/behave-graph-struct/docs/category/tolist"}},c={},u=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],s={toc:u};function f(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"logicvalidateobject"},"logic/validate/object"),(0,l.kt)("p",null,"Validate data using passed schema. See ",(0,l.kt)("a",{parentName:"p",href:"https://ajv.js.org/api.html#ajv-validate-schemaorref-object-string-data-any-boolean"},"Ajv's validate")),(0,l.kt)(n.Z,{description:{typeName:"logic/validate/object",category:"Logic",label:"Validate",otherTypeNames:[],helpDescription:"Validate data using passed schema. See [Ajv's validate](https://ajv.js.org/api.html#ajv-validate-schemaorref-object-string-data-any-boolean)",configuration:{}},inputs:[{valueTypeName:"object",name:"schema",valueChoices:[],links:[]},{valueTypeName:"object",name:"data",valueChoices:[],links:[]}],outputs:[{valueTypeName:"boolean",name:"result",valueChoices:[],links:[]},{valueTypeName:"list",name:"errors",valueChoices:[],links:[]}],spec:{type:"logic/validate/object",category:"Logic",label:"Validate",inputs:[{name:"schema",valueType:"object",defaultValue:"[]"},{name:"data",valueType:"object",defaultValue:"[]"}],outputs:[{name:"result",valueType:"boolean"},{name:"errors",valueType:"list"}],configuration:[]},mdxType:"NodePreview"}),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errors"),(0,l.kt)("td",{parentName:"tr",align:null},"list")))))}f.isMDXComponent=!0}}]);