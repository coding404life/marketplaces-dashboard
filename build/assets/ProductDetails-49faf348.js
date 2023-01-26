import{d as g,j as e,B as $,c as o,S as B,p as f,a4 as I,M as k,G as b,T as R,a5 as H}from"./index-1eb5dd4a.js";import{T as j,a as z,b as E,c as P,d,e as O,f as G,g as L,v as J}from"./TableSortLabel-dc5917b5.js";import{B as x}from"./Box-4dbe8fb2.js";import"./IconButton-73c433c2.js";import"./MenuItem-3a273dba.js";function h(t,r){return{name:t,totalPayment:Math.floor(Math.random()*1e3),monthlyRevenue:Math.floor(Math.random()*1e3),subscriptionPlan:r,transactions:Math.floor(Math.random()*100)}}const p=[h("Aidar","$10/mo, $100/yearly"),h("Charles","$15/mo, $100/yearly"),h("Ritesh","$12/mo, $100/yearly"),h("Yahya","$11/mo, $100/yearly"),h("Joe","$13/mo, $100/yearly"),h("Paul","$14/mo, $100/yearly")];function v(t,r,n){return r[n]<t[n]?-1:r[n]>t[n]?1:0}function N(t,r){return t==="desc"?(n,i)=>v(n,i,r):(n,i)=>-v(n,i,r)}function W(t,r){const n=t.map((i,l)=>[i,l]);return n.sort((i,l)=>{const a=r(i[0],l[0]);return a!==0?a:i[1]-l[1]}),n.map(i=>i[0])}const Y=[{id:"name",numeric:!1,disablePadding:!0,label:"Name"},{id:"totalPayment",numeric:!1,disablePadding:!1,label:"Total Payment"},{id:"monthlyRevenue",numeric:!1,disablePadding:!1,label:"Monthly Revenue"},{id:"subscriptionPlan",numeric:!0,disablePadding:!1,label:"Subscription Plan"},{id:"transactions",numeric:!0,disablePadding:!1,label:"Transactions"}];function M(t){const{order:r,orderBy:n,onRequestSort:i}=t,l=a=>c=>{i(c,a)};return e(G,{children:e(P,{children:Y.map(a=>e(d,{align:a.numeric?"right":"left",padding:a.disablePadding?"none":"normal",sortDirection:n===a.id?r:!1,children:o(L,{active:n===a.id,direction:n===a.id?r:"asc",onClick:l(a.id),children:[a.label,n===a.id?e($,{component:"span",sx:J,children:r==="desc"?"sorted descending":"sorted ascending"}):null]})},a.id))})})}M.propTypes={order:f.string.isRequired,orderBy:f.string.isRequired,onRequestSort:f.func.isRequired};function F(){const[t,r]=g.useState("asc"),[n,i]=g.useState("amount"),[l,a]=g.useState([]),[c,y]=g.useState(0),[m,q]=g.useState(5),w=(s,u)=>{r(n===u&&t==="asc"?"desc":"asc"),i(u)},C=s=>{if(s.target.checked){const u=p.map(T=>T.name);a(u);return}a([])},D=(s,u)=>{y(u)},A=s=>{q(parseInt(s.target.value,10)),y(0)},S=c>0?Math.max(0,(1+c)*m-p.length):0;return e($,{sx:{width:"100%"},children:o(B,{sx:{width:"100%",mb:2},children:[e(j,{children:o(z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:"medium",children:[e(M,{numSelected:l.length,order:t,orderBy:n,onSelectAllClick:C,onRequestSort:w,rowCount:p.length}),o(E,{children:[W(p,N(t,n)).slice(c*m,c*m+m).map(s=>o(P,{hover:!0,role:"cell",tabIndex:-1,children:[e(d,{padding:"none",children:s.name}),e(d,{align:"left",children:s.totalPayment}),e(d,{align:"left",children:s.monthlyRevenue}),e(d,{align:"right",children:s.subscriptionPlan}),e(d,{align:"right",children:s.transactions})]},s.transactions)),S>0&&e(P,{style:{height:53*S},children:e(d,{colSpan:6})})]})]})}),e(O,{rowsPerPageOptions:[5,10,25],component:"div",count:p.length,rowsPerPage:m,page:c,onPageChange:D,onRowsPerPageChange:A})]})})}function Z(){const{merchantId:t}=I();return e(k,{children:o(b,{container:!0,children:[e(b,{item:!0,xs:12,children:o(x,{display:"flex",alignItems:"end",children:[o(R,{marginRight:1,variant:"h4",color:"rebeccapurple",display:"flex",alignItems:"end",children:[e(H,{}),e(x,{marginLeft:.5,children:"Product Details"})]}),e(R,{variant:"h4",children:t})]})}),e(b,{item:!0,xs:12,marginTop:5,children:e(F,{})})]})})}export{Z as default};
