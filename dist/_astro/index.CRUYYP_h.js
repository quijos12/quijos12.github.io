function p(){}const V=t=>t;function E(t,e){for(const n in e)t[n]=e[n];return t}function C(t){return t()}function W(){return Object.create(null)}function G(t){t.forEach(C)}function j(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function K(t){return Object.keys(t).length===0}function b(t,...e){if(t==null){for(const i of e)i(void 0);return p}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Q(t){let e;return b(t,n=>e=n)(),e}function X(t,e,n){t.$$.on_destroy.push(b(e,n))}function Y(t,e,n,i){if(t){const r=x(t,e,n,i);return t[0](r)}}function x(t,e,n,i){return t[1]&&i?E(n.ctx.slice(),t[1](i(e))):n.ctx}function Z(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function tt(t,e,n,i,r,l){if(r){const c=x(e,n,i,l);t.p(c,r)}}function et(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function nt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function it(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function rt(t){return t&&j(t.destroy)?t.destroy:p}const k=["",!0,1,"true","contenteditable"];let _=!1;function ct(){_=!0}function st(){_=!1}function A(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function O(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:A(1,r,N=>e[n[N]].claim_order,u))-1;i[s]=n[a]+1;const y=a+1;n[y]=s,r=Math.max(y,r)}const l=[],c=[];let o=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(l.push(e[s-1]);o>=s;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<l.length&&c[s].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(c[s],a)}}function S(t,e){t.appendChild(e)}function D(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ot(t){const e=g("style");return e.textContent="/* empty */",L(D(t),e),e.sheet}function L(t,e){return S(t.head||t,e),e.sheet}function T(t,e){if(_){for(O(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function lt(t,e,n){_&&!n?T(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ut(t){t.parentNode&&t.parentNode.removeChild(t)}function at(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function B(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function ft(){return m(" ")}function _t(){return m("")}function dt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const I=["width","height"];function P(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&I.indexOf(i)===-1?t[i]=e[i]:h(t,i,e[i])}function mt(t,e){for(const n in e)h(t,n,e[n])}function $(t,e){Object.keys(e).forEach(n=>{M(t,n,e[n])})}function M(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:h(t,e,n)}function ht(t){return/-/.test(t)?$:P}function yt(t){return Array.from(t.childNodes)}function R(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function w(t,e,n,i,r=!1){R(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function v(t,e,n,i){return w(t,r=>r.nodeName===e,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(e))}function pt(t,e,n){return v(t,e,n,g)}function bt(t,e,n){return v(t,e,n,B)}function q(t,e){return w(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>m(e),!0)}function xt(t){return q(t," ")}function z(t,e){e=""+e,t.data!==e&&(t.data=e)}function F(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function gt(t,e,n){~k.indexOf(n)?F(t,e):z(t,e)}function wt(t,e,n,i){t.style.setProperty(e,n,"")}function vt(t,e,n){t.classList.toggle(e,!!n)}function H(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}let d;function Nt(t){d=t}function f(){if(!d)throw new Error("Function called outside component initialization");return d}function Et(t){f().$$.on_mount.push(t)}function Ct(t){f().$$.on_destroy.push(t)}function jt(){const t=f();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=H(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}function kt(t,e){return f().$$.context.set(t,e),e}function At(t){return f().$$.context.get(t)}function Ot(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const U="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(U);export{mt as $,T as A,gt as B,ft as C,xt as D,h as E,z as F,p as G,D as H,ot as I,Nt as J,d as K,H as L,V as M,W as N,K as O,C as P,ct as Q,st as R,b as S,Ct as T,Q as U,jt as V,kt as W,At as X,X as Y,B as Z,bt as _,E as a,at as a0,nt as b,it as c,ut as d,_t as e,Y as f,g,pt as h,lt as i,yt as j,ht as k,wt as l,et as m,Z as n,Et as o,Ot as p,dt as q,G as r,J as s,vt as t,tt as u,rt as v,j as w,m as x,q as y,P as z};
