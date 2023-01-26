import{d as g,j as e,B as $,c as o,S as A,p as f,a4 as B,M as I,G as b,T as R,a5 as k}from"./index-1eb5dd4a.js";import{T as H,a as j,b as z,c as y,d,e as O,f as G,g as L,v as J}from"./TableSortLabel-dc5917b5.js";import{B as v}from"./Box-4dbe8fb2.js";import"./IconButton-73c433c2.js";import"./MenuItem-3a273dba.js";function h(t,r){return{name:t,totalPayment:Math.floor(Math.random()*1e3),monthlyRevenue:Math.floor(Math.random()*1e3),subscriptionPlan:r,transactions:Math.floor(Math.random()*100)}}const p=[h("Aidar","$10/mo, $100/yearly"),h("Charles","$15/mo, $100/yearly"),h("Ritesh","$12/mo, $100/yearly"),h("Yahya","$11/mo, $100/yearly"),h("Joe","$13/mo, $100/yearly"),h("Paul","$14/mo, $100/yearly")];function x(t,r,n){return r[n]<t[n]?-1:r[n]>t[n]?1:0}function N(t,r){return t==="desc"?(n,s)=>x(n,s,r):(n,s)=>-x(n,s,r)}function W(t,r){const n=t.map((s,l)=>[s,l]);return n.sort((s,l)=>{const a=r(s[0],l[0]);return a!==0?a:s[1]-l[1]}),n.map(s=>s[0])}const Y=[{id:"name",numeric:!1,disablePadding:!0,label:"Name"},{id:"totalPayment",numeric:!1,disablePadding:!1,label:"Total Payment"},{id:"monthlyRevenue",numeric:!1,disablePadding:!1,label:"Monthly Revenue"},{id:"subscriptionPlan",numeric:!0,disablePadding:!1,label:"Subscription Plan"},{id:"transactions",numeric:!0,disablePadding:!1,label:"Transactions"}];function M(t){const{order:r,orderBy:n,onRequestSort:s}=t,l=a=>c=>{s(c,a)};return e(G,{children:e(y,{children:Y.map(a=>e(d,{align:a.numeric?"right":"left",padding:a.disablePadding?"none":"normal",sortDirection:n===a.id?r:!1,children:o(L,{active:n===a.id,direction:n===a.id?r:"asc",onClick:l(a.id),children:[a.label,n===a.id?e($,{component:"span",sx:J,children:r==="desc"?"sorted descending":"sorted ascending"}):null]})},a.id))})})}M.propTypes={order:f.string.isRequired,orderBy:f.string.isRequired,onRequestSort:f.func.isRequired};function F(){const[t,r]=g.useState("asc"),[n,s]=g.useState("amount"),[l,a]=g.useState([]),[c,P]=g.useState(0),[m,q]=g.useState(5),w=(i,u)=>{r(n===u&&t==="asc"?"desc":"asc"),s(u)},C=i=>{if(i.target.checked){const u=p.map(T=>T.name);a(u);return}a([])},D=(i,u)=>{P(u)},E=i=>{q(parseInt(i.target.value,10)),P(0)},S=c>0?Math.max(0,(1+c)*m-p.length):0;return e($,{sx:{width:"100%"},children:o(A,{sx:{width:"100%",mb:2},children:[e(H,{children:o(j,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:"medium",children:[e(M,{numSelected:l.length,order:t,orderBy:n,onSelectAllClick:C,onRequestSort:w,rowCount:p.length}),o(z,{children:[W(p,N(t,n)).slice(c*m,c*m+m).map(i=>o(y,{hover:!0,role:"cell",tabIndex:-1,children:[e(d,{padding:"none",children:i.name}),e(d,{align:"left",children:i.totalPayment}),e(d,{align:"left",children:i.monthlyRevenue}),e(d,{align:"right",children:i.subscriptionPlan}),e(d,{align:"right",children:i.transactions})]},i.transactions)),S>0&&e(y,{style:{height:53*S},children:e(d,{colSpan:6})})]})]})}),e(O,{rowsPerPageOptions:[5,10,25],component:"div",count:p.length,rowsPerPage:m,page:c,onPageChange:D,onRowsPerPageChange:E})]})})}function Z(){const{merchantId:t}=B();return e(I,{children:o(b,{container:!0,children:[e(b,{item:!0,xs:12,children:o(v,{display:"flex",alignItems:"end",children:[o(R,{marginRight:1,variant:"h4",color:"rebeccapurple",display:"flex",alignItems:"end",children:[e(k,{}),e(v,{marginLeft:.5,children:"Events Details"})]}),e(R,{variant:"h4",children:t})]})}),e(b,{item:!0,xs:12,marginTop:5,children:e(F,{})})]})})}export{Z as default};
