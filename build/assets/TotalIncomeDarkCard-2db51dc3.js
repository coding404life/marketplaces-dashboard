import{q as U,t as j,v as C,s as k,_ as d,w as X,x as m,d as q,y as B,z as F,j as e,E,H as N,C as O,L as w,c as R,l as S,m as T,n as _,M as P,p as o,u as W,F as G,B as K,A as z,T as f}from"./index-1eb5dd4a.js";function D(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function H(t){return parseFloat(t)}function V(t){return U("MuiSkeleton",t)}j("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const J=["animation","className","component","height","style","variant","width"];let c=t=>t,b,y,v,x;const Q=t=>{const{classes:a,variant:r,animation:i,hasChildren:s,width:l,height:n}=t;return N({root:["root",r,i,s&&"withChildren",s&&!l&&"fitContent",s&&!n&&"heightAuto"]},V,a)},Y=C(b||(b=c`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Z=C(y||(y=c`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),tt=k("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,a[r.variant],r.animation!==!1&&a[r.animation],r.hasChildren&&a.withChildren,r.hasChildren&&!r.width&&a.fitContent,r.hasChildren&&!r.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const r=D(t.shape.borderRadius)||"px",i=H(t.shape.borderRadius);return d({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:X(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${r}/${Math.round(i/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&m(v||(v=c`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),Y),({ownerState:t,theme:a})=>t.animation==="wave"&&m(x||(x=c`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),Z,(a.vars||a).palette.action.hover)),at=q.forwardRef(function(a,r){const i=B({props:a,name:"MuiSkeleton"}),{animation:s="pulse",className:l,component:n="span",height:p,style:A,variant:I="text",width:L}=i,u=F(i,J),g=d({},i,{animation:s,component:n,variant:I,hasChildren:Boolean(u.children)}),M=Q(g);return e(tt,d({as:n,ref:r,className:E(M.root,l),ownerState:g},u,{style:d({width:L,height:p},A)}))}),h=at,et=()=>e(O,{sx:{p:2},children:e(w,{sx:{py:0},children:R(S,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[e(T,{children:e(h,{variant:"rectangular",width:44,height:44})}),e(_,{sx:{py:0},primary:e(h,{variant:"rectangular",height:20}),secondary:e(h,{variant:"text"})})]})})}),rt=k(P)(({theme:t})=>({backgroundColor:t.palette.secondary.dark,color:t.palette.primary.light,overflow:"hidden",position:"relative",marginRight:t.spacing(1),"&:after":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(210.04deg, ${t.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,borderRadius:"50%",top:-30,right:-180},"&:before":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(140.9deg, ${t.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,borderRadius:"50%",top:-160,right:-130}}));function $({isLoading:t,message:a,title:r,OptionIcon:i,sx:s,avatarSX:l}){const n=W();return e(G,{children:t?e(et,{}):e(rt,{border:!1,content:!1,sx:s,children:e(K,{sx:{p:2},children:e(w,{sx:{py:0},children:R(S,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[e(T,{children:e(z,{variant:"rounded",sx:{...n.typography.commonAvatar,...n.typography.largeAvatar,backgroundColor:n.palette.secondary[800],...l,color:"#fff"},children:i})}),e(_,{sx:{py:0,mt:.45,mb:.45},primary:e(f,{variant:"subtitle2",sx:{color:"#fff"},children:r}),secondary:e(f,{variant:"h4",sx:{color:"primary.light",mt:.25},children:a})})]})})})})})}$.propTypes={isLoading:o.bool.isRequired,message:o.string.isRequired,title:o.string.isRequired,OptionIcon:o.element,sx:o.object,avatarSX:o.object};$.defaultProps={OptionIcon:null,sx:{},avatarSX:{}};export{h as S,et as T,$ as a};
