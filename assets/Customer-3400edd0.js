import{p as b,d as m,j as n,B as y,c as p,S as N,U as W,a6 as q,M as D,G as S}from"./index-1eb5dd4a.js";import{T as A,a as j,b as B,c as P,d,e as E,f as M,g as O,v as z}from"./TableSortLabel-dc5917b5.js";import"./IconButton-73c433c2.js";import"./MenuItem-3a273dba.js";function o(s,r,e,t){return{name:s,purchasedChannel:r,subscriptionPlan:e,purchaseDate:t}}const G=[{id:"name",numeric:!1,disablePadding:!0,label:"Customer Name"},{id:"purchasedChannel",numeric:!1,disablePadding:!1,label:"Purchased Channel"},{id:"subscriptionPlan",numeric:!0,disablePadding:!1,label:"Subscription Plan"},{id:"purchaseDate",numeric:!0,disablePadding:!1,label:"Purchase Date"},{id:"viewDetails",numeric:!0,disablePadding:!1,label:"View Details"}],g=[o("Ritesh","Hawker Weekly News","$10/mo, $100/yearly","12-02-2022"),o("Ritesh","Hawker Weekly News","$10/mo, $100/yearly","12-02-2022"),o("Ritesh","Hawker Weekly News","$10/mo, $100/yearly","12-02-2022"),o("Ritesh","Hawker Weekly News","$10/mo, $100/yearly","12-02-2022"),o("Ritesh","Hawker Weekly News","$10/mo, $100/yearly","12-02-2022"),o("Ritesh","Hawker Weekly News","$10/mo, $100/yearly","12-02-2022"),o("Ritesh","Hawker Weekly News","$10/mo, $100/yearly","12-02-2022")];function k(s,r,e){return r[e]<s[e]?-1:r[e]>s[e]?1:0}function I(s,r){return s==="desc"?(e,t)=>k(e,t,r):(e,t)=>-k(e,t,r)}function L(s,r){const e=s.map((t,l)=>[t,l]);return e.sort((t,l)=>{const a=r(t[0],l[0]);return a!==0?a:t[1]-l[1]}),e.map(t=>t[0])}function T(s){const{order:r,orderBy:e,onRequestSort:t}=s,l=a=>c=>{t(c,a)};return n(M,{children:n(P,{children:G.map(a=>n(d,{align:a.numeric?"right":"left",padding:a.disablePadding?"none":"normal",sortDirection:e===a.id?r:!1,children:p(O,{active:e===a.id,direction:e===a.id?r:"asc",onClick:l(a.id),children:[a.label,e===a.id?n(y,{component:"span",sx:z,children:r==="desc"?"sorted descending":"sorted ascending"}):null]})},a.id))})})}T.propTypes={order:b.string.isRequired,orderBy:b.string.isRequired,onRequestSort:b.func.isRequired};function U(){const[s,r]=m.useState("asc"),[e,t]=m.useState("amount"),[l,a]=m.useState([]),[c,f]=m.useState(0),[h,x]=m.useState(5),$=(i,u)=>{r(e===u&&s==="asc"?"desc":"asc"),t(u)},C=i=>{if(i.target.checked){const u=g.map(R=>R.name);a(u);return}a([])},H=(i,u)=>{f(u)},v=i=>{x(parseInt(i.target.value,10)),f(0)},w=c>0?Math.max(0,(1+c)*h-g.length):0;return n(y,{sx:{width:"100%"},children:p(N,{sx:{width:"100%",mb:2},children:[n(A,{children:p(j,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:"medium",children:[n(T,{numSelected:l.length,order:s,orderBy:e,onSelectAllClick:C,onRequestSort:$,rowCount:g.length}),p(B,{children:[L(g,I(s,e)).slice(c*h,c*h+h).map(i=>p(P,{hover:!0,role:"cell",tabIndex:-1,children:[n(d,{padding:"none",children:i.name}),n(d,{align:"left",children:i.purchasedChannel}),n(d,{align:"right",children:i.subscriptionPlan}),n(d,{align:"right",children:i.purchaseDate}),n(d,{align:"right",children:n(y,{marginRight:5,sx:{cursor:"pointer"},component:W,to:i.name,color:"rebeccapurple",children:n(q,{})})})]},i.name)),w>0&&n(P,{style:{height:53*w},children:n(d,{colSpan:6})})]})]})}),n(E,{rowsPerPageOptions:[5,10,25],component:"div",count:g.length,rowsPerPage:h,page:c,onPageChange:H,onRowsPerPageChange:v})]})})}function J(){return n(D,{title:"Customer",children:n(S,{container:!0,children:n(S,{item:!0,xs:12,children:n(U,{})})})})}export{J as default};
