import{j as r,T as f,a as m,b as A,c as E,d as l,e as O}from"./toast.CqQs7s6_.js";import{r as d}from"./index.BVMjZLoJ.js";import"./shadcn.C91odNNy.js";import"./_commonjsHelpers.Cpj98o6Y.js";function v(){const{toasts:s}=j();return r.jsxs(f,{children:[s.map(function({id:t,title:e,description:o,action:n,...S}){return r.jsxs(m,{...S,children:[r.jsxs("div",{className:"grid gap-1",children:[e&&r.jsx(A,{children:e}),o&&r.jsx(E,{children:o})]}),n,r.jsx(l,{})]},t)}),r.jsx(O,{})]})}const _=1,x=1e6;let c=0;function h(){return c=(c+1)%Number.MAX_SAFE_INTEGER,c.toString()}const u=new Map,p=s=>{if(u.has(s))return;const t=setTimeout(()=>{u.delete(s),a({type:"REMOVE_TOAST",toastId:s})},x);u.set(s,t)},D=(s,t)=>{switch(t.type){case"ADD_TOAST":return{...s,toasts:[t.toast,...s.toasts].slice(0,_)};case"UPDATE_TOAST":return{...s,toasts:s.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{const{toastId:e}=t;return e?p(e):s.toasts.forEach(o=>{p(o.id)}),{...s,toasts:s.toasts.map(o=>o.id===e||e===void 0?{...o,open:!1}:o)}}case"REMOVE_TOAST":return t.toastId===void 0?{...s,toasts:[]}:{...s,toasts:s.toasts.filter(e=>e.id!==t.toastId)}}},i=[];let T={toasts:[]};function a(s){T=D(T,s),i.forEach(t=>{t(T)})}function I({...s}){const t=h(),e=n=>a({type:"UPDATE_TOAST",toast:{...n,id:t}}),o=()=>a({type:"DISMISS_TOAST",toastId:t});return a({type:"ADD_TOAST",toast:{...s,id:t,open:!0,onOpenChange:n=>{n||o()}}}),{id:t,dismiss:o,update:e}}function j(){const[s,t]=d.useState(T);return d.useEffect(()=>(i.push(t),()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)}),[s]),{...s,toast:I,dismiss:e=>a({type:"DISMISS_TOAST",toastId:e})}}export{v as Toaster};
