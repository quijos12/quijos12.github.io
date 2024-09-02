import{G as w,H as st,d as W,I as rt,J as R,r as b,K as X,w as z,L as at,M as J,N as T,j as ot,O as ft,P as ct,Q as ut,R as lt}from"./index.CRUYYP_h.js";const Y=typeof window<"u";let K=Y?()=>window.performance.now():()=>Date.now(),L=Y?t=>requestAnimationFrame(t):w;const O=new Set;function Z(t){O.forEach(e=>{e.c(t)||(O.delete(e),e.f())}),O.size!==0&&L(Z)}function Q(t){let e;return O.size===0&&L(Z),{promise:new Promise(n=>{O.add(e={c:t,f:n})}),abort(){O.delete(e)}}}const N=new Map;let D=0;function dt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function _t(t,e){const n={stylesheet:rt(e),rules:{}};return N.set(t,n),n}function F(t,e,n,s,f,r,c,i=0){const a=16.666/s;let o=`{
`;for(let h=0;h<=1;h+=a){const m=e+(n-e)*r(h);o+=h*100+`%{${c(m,1-m)}}
`}const d=o+`100% {${c(n,1-n)}}
}`,l=`__svelte_${dt(d)}_${i}`,p=st(t),{stylesheet:g,rules:u}=N.get(p)||_t(p,t);u[l]||(u[l]=!0,g.insertRule(`@keyframes ${l} ${d}`,g.cssRules.length));const _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${l} ${s}ms linear ${f}ms 1 both`,D+=1,l}function G(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),f=n.length-s.length;f&&(t.style.animation=s.join(", "),D-=f,D||ht())}function ht(){L(()=>{D||(N.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&W(e)}),N.clear())})}const j=[],U=[];let S=[];const V=[],tt=Promise.resolve();let I=!1;function et(){I||(I=!0,tt.then(nt))}function wt(){return et(),tt}function M(t){S.push(t)}const H=new Set;let E=0;function nt(){if(E!==0)return;const t=X;do{try{for(;E<j.length;){const e=j[E];E++,R(e),gt(e.$$)}}catch(e){throw j.length=0,E=0,e}for(R(null),j.length=0,E=0;U.length;)U.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];H.has(n)||(H.add(n),n())}S.length=0}while(j.length);for(;V.length;)V.pop()();I=!1,H.clear(),R(t)}function gt(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}function pt(t){const e=[],n=[];S.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),S=e}let P;function q(){return P||(P=Promise.resolve(),P.then(()=>{P=null})),P}function k(t,e,n){t.dispatchEvent(at(`${e?"intro":"outro"}${n}`))}const C=new Set;let $;function bt(){$={r:0,c:[],p:$}}function vt(){$.r||b($.c),$=$.p}function mt(t,e){t&&t.i&&(C.delete(t),t.i(e))}function Et(t,e,n,s){if(t&&t.o){if(C.has(t))return;C.add(t),$.c.push(()=>{C.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const B={duration:0};function jt(t,e,n){const s={direction:"in"};let f=e(t,n,s),r=!1,c,i,a=0;function o(){c&&G(t,c)}function d(){const{delay:p=0,duration:g=300,easing:u=J,tick:_=w,css:h}=f||B;h&&(c=F(t,0,1,g,p,u,h,a++)),_(0,1);const m=K()+p,y=m+g;i&&i.abort(),r=!0,M(()=>k(t,!0,"start")),i=Q(x=>{if(r){if(x>=y)return _(1,0),k(t,!0,"end"),o(),r=!1;if(x>=m){const v=u((x-m)/g);_(v,1-v)}}return r})}let l=!1;return{start(){l||(l=!0,G(t),z(f)?(f=f(s),q().then(d)):d())},invalidate(){l=!1},end(){r&&(o(),r=!1)}}}function Ot(t,e,n){const s={direction:"out"};let f=e(t,n,s),r=!0,c;const i=$;i.r+=1;let a;function o(){const{delay:d=0,duration:l=300,easing:p=J,tick:g=w,css:u}=f||B;u&&(c=F(t,1,0,l,d,p,u));const _=K()+d,h=_+l;M(()=>k(t,!1,"start")),"inert"in t&&(a=t.inert,t.inert=!0),Q(m=>{if(r){if(m>=h)return g(0,1),k(t,!1,"end"),--i.r||b(i.c),!1;if(m>=_){const y=p((m-_)/l);g(1-y,y)}}return r})}return z(f)?q().then(()=>{f=f(s),o()}):o(),{end(d){d&&"inert"in t&&(t.inert=a),d&&f.tick&&f.tick(1,0),r&&(c&&G(t,c),r=!1)}}}function St(t,e,n,s){let r=e(t,n,{direction:"both"}),c=s?0:1,i=null,a=null,o=null,d;function l(){o&&G(t,o)}function p(u,_){const h=u.b-c;return _*=Math.abs(h),{a:c,b:u.b,d:h,duration:_,start:u.start,end:u.start+_,group:u.group}}function g(u){const{delay:_=0,duration:h=300,easing:m=J,tick:y=w,css:x}=r||B,v={start:K()+_,b:u};u||(v.group=$,$.r+=1),"inert"in t&&(u?d!==void 0&&(t.inert=d):(d=t.inert,t.inert=!0)),i||a?a=v:(x&&(l(),o=F(t,c,u,h,_,m,x)),u&&y(0,1),i=p(v,h),M(()=>k(t,u,"start")),Q(A=>{if(a&&A>a.start&&(i=p(a,h),a=null,k(t,i.b,"start"),x&&(l(),o=F(t,c,i.b,i.duration,0,m,r.css))),i){if(A>=i.end)y(c=i.b,1-c),k(t,i.b,"end"),a||(i.b?l():--i.group.r||b(i.group.c)),i=null;else if(A>=i.start){const it=A-i.start;c=i.a+i.d*m(it/i.duration),y(c,1-c)}}return!!(i||a)}))}return{run(u){z(r)?q().then(()=>{r=r({direction:u?"in":"out"}),g(u)}):g(u)},end(){l(),i=a=null}}}function Mt(t,e){const n={},s={},f={$$scope:1};let r=t.length;for(;r--;){const c=t[r],i=e[r];if(i){for(const a in c)a in i||(s[a]=1);for(const a in i)f[a]||(n[a]=i[a],f[a]=1);t[r]=i}else for(const a in c)f[a]=1}for(const c in s)c in n||(n[c]=void 0);return n}function Pt(t){return typeof t=="object"&&t!==null?t:{}}function Rt(t){t&&t.c()}function zt(t,e){t&&t.l(e)}function $t(t,e,n){const{fragment:s,after_update:f}=t.$$;s&&s.m(e,n),M(()=>{const r=t.$$.on_mount.map(ct).filter(z);t.$$.on_destroy?t.$$.on_destroy.push(...r):b(r),t.$$.on_mount=[]}),f.forEach(M)}function yt(t,e){const n=t.$$;n.fragment!==null&&(pt(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xt(t,e){t.$$.dirty[0]===-1&&(j.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function At(t,e,n,s,f,r,c=null,i=[-1]){const a=X;R(t);const o=t.$$={fragment:null,ctx:[],props:r,update:w,not_equal:f,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:T(),dirty:i,skip_bound:!1,root:e.target||a.$$.root};c&&c(o.root);let d=!1;if(o.ctx=n?n(t,e.props||{},(l,p,...g)=>{const u=g.length?g[0]:p;return o.ctx&&f(o.ctx[l],o.ctx[l]=u)&&(!o.skip_bound&&o.bound[l]&&o.bound[l](u),d&&xt(t,l)),p}):[],o.update(),d=!0,b(o.before_update),o.fragment=s?s(o.ctx):!1,e.target){if(e.hydrate){ut();const l=ot(e.target);o.fragment&&o.fragment.l(l),l.forEach(W)}else o.fragment&&o.fragment.c();e.intro&&mt(t.$$.fragment),$t(t,e.target,e.anchor),lt(),nt()}R(a)}class Ct{$$=void 0;$$set=void 0;$destroy(){yt(this,1),this.$destroy=w}$on(e,n){if(!z(n))return w;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const f=s.indexOf(n);f!==-1&&s.splice(f,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ct as S,Et as a,U as b,bt as c,vt as d,Rt as e,zt as f,Mt as g,Pt as h,At as i,yt as j,wt as k,Ot as l,$t as m,M as n,jt as o,St as p,mt as t};
