(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=(e,t,a=[])=>{const r=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(n=>{r.setAttribute(n,String(t[n]))}),a.length&&a.forEach(n=>{const i=ws(...n);r.appendChild(i)}),r};var bs=([e,t,a])=>ws(e,t,a);/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=e=>Array.from(e.attributes).reduce((t,a)=>(t[a.name]=a.value,t),{}),EM=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",CM=e=>e.flatMap(EM).map(a=>a.trim()).filter(Boolean).filter((a,r,n)=>n.indexOf(a)===r).join(" "),TM=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,a,r)=>a.toUpperCase()+r.toLowerCase()),Fa=(e,{nameAttr:t,icons:a,attrs:r})=>{var y;const n=e.getAttribute(t);if(n==null)return;const i=TM(n),o=a[i];if(!o)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const c=kM(e),[h,d,p]=o,u={...d,"data-lucide":n,...r,...c},v=CM(["lucide",`lucide-${n}`,c,r]);v&&Object.assign(u,{class:v});const g=bs([h,u,p]);return(y=e.parentNode)==null?void 0:y.replaceChild(g,e)};/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=["svg",s,[["circle",{cx:"16",cy:"4",r:"1"}],["path",{d:"m18 19 1-7-6 1"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=["svg",s,[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=["svg",s,[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 8h12"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=["svg",s,[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}],["polygon",{points:"12 15 17 21 7 21 12 15"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=["svg",s,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"m9 13 2 2 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=["svg",s,[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.26 18.67 4 21"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4 4 2 6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=["svg",s,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M12 9v4l2 2"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=["svg",s,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M9 13h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=["svg",s,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=["svg",s,[["path",{d:"M4 8a2 2 0 0 1-2-2V3h20v3a2 2 0 0 1-2 2Z"}],["path",{d:"m19 8-.8 3c-.1.6-.6 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L5 8"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5"}],["path",{d:"M11 21c0-2.5 2-2.5 2-5"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=["svg",s,[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=["svg",s,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=["svg",s,[["path",{d:"M2 12h20"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=["svg",s,[["path",{d:"M12 2v20"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=["svg",s,[["line",{x1:"21",x2:"3",y1:"6",y2:"6"}],["line",{x1:"17",x2:"7",y1:"12",y2:"12"}],["line",{x1:"19",x2:"5",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=["svg",s,[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2"}],["path",{d:"M22 22H2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=["svg",s,[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2"}],["path",{d:"M22 22V2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=["svg",s,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M17 22v-5"}],["path",{d:"M17 7V2"}],["path",{d:"M7 22v-3"}],["path",{d:"M7 5V2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=["svg",s,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M10 2v20"}],["path",{d:"M20 2v20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=["svg",s,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M4 2v20"}],["path",{d:"M14 2v20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=["svg",s,[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M12 2v20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=["svg",s,[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2"}],["path",{d:"M22 2v20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=["svg",s,[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M2 2v20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=["svg",s,[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2"}],["path",{d:"M4 22V2"}],["path",{d:"M20 22V2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=["svg",s,[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2"}],["path",{d:"M3 2v20"}],["path",{d:"M21 2v20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=["svg",s,[["line",{x1:"3",x2:"21",y1:"6",y2:"6"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=["svg",s,[["line",{x1:"21",x2:"3",y1:"6",y2:"6"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=["svg",s,[["line",{x1:"21",x2:"3",y1:"6",y2:"6"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}],["line",{x1:"21",x2:"7",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=["svg",s,[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2"}],["path",{d:"M22 2H2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=["svg",s,[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2"}],["path",{d:"M2 2v20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=["svg",s,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M22 7h-5"}],["path",{d:"M7 7H1"}],["path",{d:"M22 17h-3"}],["path",{d:"M5 17H2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=["svg",s,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 20h20"}],["path",{d:"M2 10h20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=["svg",s,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M2 4h20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=["svg",s,[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 12h20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=["svg",s,[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 22h20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=["svg",s,[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2"}],["path",{d:"M2 2h20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=["svg",s,[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2"}],["path",{d:"M22 20H2"}],["path",{d:"M22 4H2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=["svg",s,[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2"}],["path",{d:"M2 21h20"}],["path",{d:"M2 3h20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=["svg",s,[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"}],["path",{d:"M16 12h3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=["svg",s,[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=["svg",s,[["circle",{cx:"12",cy:"5",r:"3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"8"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["path",{d:"M7.5 8 10 9"}],["path",{d:"m14 9 2.5-1"}],["path",{d:"M9 10h0"}],["path",{d:"M15 10h0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 15h8"}],["path",{d:"M8 9h2"}],["path",{d:"M14 9h2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=["svg",s,[["path",{d:"M2 12 7 2"}],["path",{d:"m7 12 5-10"}],["path",{d:"m12 12 5-10"}],["path",{d:"m17 12 5-10"}],["path",{d:"M4.5 7h15"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=["svg",s,[["path",{d:"M7 10c-2.8 0-5-2.2-5-5h5"}],["path",{d:"M7 4v8h7a8 8 0 0 0 8-8Z"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1H5Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"14.31",x2:"20.05",y1:"8",y2:"17.94"}],["line",{x1:"9.69",x2:"21.17",y1:"8",y2:"8"}],["line",{x1:"7.38",x2:"13.12",y1:"12",y2:"2.06"}],["line",{x1:"9.69",x2:"3.95",y1:"16",y2:"6.06"}],["line",{x1:"14.31",x2:"2.83",y1:"16",y2:"16"}],["line",{x1:"16.62",x2:"10.88",y1:"12",y2:"21.94"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=["svg",s,[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}],["path",{d:"M10 4v4"}],["path",{d:"M2 8h20"}],["path",{d:"M6 4v4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=["svg",s,[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"}],["path",{d:"M10 2c1 .5 2 2 2 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=["svg",s,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2"}],["path",{d:"m9 15 3-3 3 3"}],["path",{d:"M12 12v9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=["svg",s,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"m9.5 17 5-5"}],["path",{d:"m9.5 12 5 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=["svg",s,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=["svg",s,[["path",{d:"M3 3v18h18"}],["path",{d:"M7 12v5h12V8l-5 5-4-4Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=["svg",s,[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=["svg",s,[["path",{d:"M15 5H9"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9h6z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=["svg",s,[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=["svg",s,[["path",{d:"M19 15V9"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=["svg",s,[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=["svg",s,[["path",{d:"M5 9v6"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=["svg",s,[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=["svg",s,[["path",{d:"M9 19h6"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=["svg",s,[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=["svg",s,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=["svg",s,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=["svg",s,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=["svg",s,[["path",{d:"M19 3H5"}],["path",{d:"M12 21V7"}],["path",{d:"m6 15 6 6 6-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=["svg",s,[["path",{d:"M2 12a10 10 0 1 1 10 10"}],["path",{d:"m2 22 10-10"}],["path",{d:"M8 22H2v-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 8-8 8"}],["path",{d:"M16 16H8V8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=["svg",s,[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=["svg",s,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h4"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=["svg",s,[["path",{d:"M12 22a10 10 0 1 1 10-10"}],["path",{d:"M22 22 12 12"}],["path",{d:"M22 16v6h-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 8 8 8"}],["path",{d:"M16 8v8H8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=["svg",s,[["path",{d:"m7 7 10 10"}],["path",{d:"M17 7v10H7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=["svg",s,[["path",{d:"M12 2v14"}],["path",{d:"m19 9-7 7-7-7"}],["circle",{cx:"12",cy:"21",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=["svg",s,[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=["svg",s,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=["svg",s,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h10"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=["svg",s,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=["svg",s,[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 12H8"}],["path",{d:"m12 8-4 4 4 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=["svg",s,[["path",{d:"m9 6-6 6 6 6"}],["path",{d:"M3 12h14"}],["path",{d:"M21 19V5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=["svg",s,[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m12 8-4 4 4 4"}],["path",{d:"M16 12H8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=["svg",s,[["path",{d:"M3 19V5"}],["path",{d:"m13 6-6 6 6 6"}],["path",{d:"M7 12h14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=["svg",s,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=["svg",s,[["path",{d:"M3 5v14"}],["path",{d:"M21 12H7"}],["path",{d:"m15 18 6-6-6-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=["svg",s,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=["svg",s,[["path",{d:"M17 12H3"}],["path",{d:"m11 18 6-6-6-6"}],["path",{d:"M21 5v14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=["svg",s,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=["svg",s,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=["svg",s,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=["svg",s,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=["svg",s,[["path",{d:"m21 16-4 4-4-4"}],["path",{d:"M17 20V4"}],["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=["svg",s,[["path",{d:"m5 9 7-7 7 7"}],["path",{d:"M12 16V2"}],["circle",{cx:"12",cy:"21",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=["svg",s,[["path",{d:"m18 9-6-6-6 6"}],["path",{d:"M12 3v14"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=["svg",s,[["path",{d:"M2 8V2h6"}],["path",{d:"m2 2 10 10"}],["path",{d:"M12 2A10 10 0 1 1 2 12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8h8"}],["path",{d:"M16 16 8 8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=["svg",s,[["path",{d:"M7 17V7h10"}],["path",{d:"M17 17 7 7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=["svg",s,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h4"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=["svg",s,[["path",{d:"M22 12A10 10 0 1 1 12 2"}],["path",{d:"M22 2 12 12"}],["path",{d:"M16 2h6v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 8h8v8"}],["path",{d:"m8 16 8-8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=["svg",s,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=["svg",s,[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=["svg",s,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h10"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=["svg",s,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=["svg",s,[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=["svg",s,[["path",{d:"m4 6 3-3 3 3"}],["path",{d:"M7 17V3"}],["path",{d:"m14 6 3-3 3 3"}],["path",{d:"M17 17V3"}],["path",{d:"M4 21h16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=["svg",s,[["path",{d:"M12 6v12"}],["path",{d:"M17.196 9 6.804 15"}],["path",{d:"m6.804 9 10.392 6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=["svg",s,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=["svg",s,[["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=["svg",s,[["path",{d:"M2 10v3"}],["path",{d:"M6 6v11"}],["path",{d:"M10 3v18"}],["path",{d:"M14 8v7"}],["path",{d:"M18 5v13"}],["path",{d:"M22 10v3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=["svg",s,[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=["svg",s,[["circle",{cx:"12",cy:"8",r:"6"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=["svg",s,[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=["svg",s,[["path",{d:"M4 4v16h16"}],["path",{d:"m4 20 7-7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=["svg",s,[["path",{d:"M9 12h.01"}],["path",{d:"M15 12h.01"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=["svg",s,[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"}],["path",{d:"M8 10h8"}],["path",{d:"M8 18h8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=["svg",s,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=["svg",s,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M12 7v10"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=["svg",s,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=["svg",s,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=["svg",s,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=["svg",s,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=["svg",s,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 8h8"}],["path",{d:"M8 12h8"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=["svg",s,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=["svg",s,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 8 3 3v7"}],["path",{d:"m12 11 3-3"}],["path",{d:"M9 12h6"}],["path",{d:"M9 16h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=["svg",s,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=["svg",s,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=["svg",s,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=["svg",s,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 12h4"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 16h7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=["svg",s,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9 16h5"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=["svg",s,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M11 17V8h4"}],["path",{d:"M11 12h3"}],["path",{d:"M9 16h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=["svg",s,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=["svg",s,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=["svg",s,[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1"}],["circle",{cx:"18",cy:"20",r:"2"}],["circle",{cx:"9",cy:"20",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.9 4.9 14.2 14.2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=["svg",s,[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=["svg",s,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M6 12h.01M18 12h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=["svg",s,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=["svg",s,[["path",{d:"M3 3v18h18"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=["svg",s,[["path",{d:"M3 3v18h18"}],["path",{d:"M13 17V9"}],["path",{d:"M18 17V5"}],["path",{d:"M8 17v-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=["svg",s,[["path",{d:"M3 3v18h18"}],["rect",{width:"4",height:"7",x:"7",y:"10",rx:"1"}],["rect",{width:"4",height:"12",x:"15",y:"5",rx:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=["svg",s,[["path",{d:"M3 3v18h18"}],["rect",{width:"12",height:"4",x:"7",y:"5",rx:"1"}],["rect",{width:"7",height:"4",x:"7",y:"13",rx:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=["svg",s,[["path",{d:"M3 3v18h18"}],["path",{d:"M7 16h8"}],["path",{d:"M7 11h12"}],["path",{d:"M7 6h3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=["svg",s,[["line",{x1:"12",x2:"12",y1:"20",y2:"10"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=["svg",s,[["path",{d:"M3 5v14"}],["path",{d:"M8 5v14"}],["path",{d:"M12 5v14"}],["path",{d:"M17 5v14"}],["path",{d:"M21 5v14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=["svg",s,[["path",{d:"M4 20h16"}],["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=["svg",s,[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=["svg",s,[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"}],["path",{d:"m11 7-3 5h4l-3 5"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=["svg",s,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=["svg",s,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=["svg",s,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=["svg",s,[["path",{d:"M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"7",y2:"13"}],["line",{x1:"10",x2:"10",y1:"17",y2:"17.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=["svg",s,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=["svg",s,[["path",{d:"M4.5 3h15"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"}],["path",{d:"M6 14h12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=["svg",s,[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=["svg",s,[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=["svg",s,[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M12 4v6"}],["path",{d:"M2 18h20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=["svg",s,[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}],["path",{d:"M3 18h18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=["svg",s,[["path",{d:"M2 4v16"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10"}],["path",{d:"M2 17h20"}],["path",{d:"M6 8v9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=["svg",s,[["circle",{cx:"12.5",cy:"8.5",r:"2.5"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=["svg",s,[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1"}],["path",{d:"M9 12v6"}],["path",{d:"M13 12v6"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=["svg",s,[["path",{d:"M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["circle",{cx:"18",cy:"8",r:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=["svg",s,[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9"}],["path",{d:"M9 9h.01"}],["circle",{cx:"9",cy:"9",r:"7"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6"}],["circle",{cx:"20",cy:"16",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=["svg",s,[["path",{d:"M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M15 8h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=["svg",s,[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=["svg",s,[["path",{d:"M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M15 8h6"}],["path",{d:"M18 5v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=["svg",s,[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=["svg",s,[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=["svg",s,[["circle",{cx:"18.5",cy:"17.5",r:"3.5"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5"}],["circle",{cx:"15",cy:"5",r:"1"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=["svg",s,[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2"}],["path",{d:"M6 20h4"}],["path",{d:"M14 10h4"}],["path",{d:"M6 14h2v6"}],["path",{d:"M14 4h2v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=["svg",s,[["circle",{cx:"12",cy:"11.9",r:"2"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"}],["path",{d:"m8.9 10.1 1.4.8"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"}],["path",{d:"m15.1 10.1-1.4.8"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"}],["path",{d:"M12 13.9v1.6"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=["svg",s,[["path",{d:"M16 7h.01"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"}],["path",{d:"m20 7 2 .5-2 .5"}],["path",{d:"M10 18v3"}],["path",{d:"M14 17.75V21"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=["svg",s,[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=["svg",s,[["path",{d:"M3 3h18"}],["path",{d:"M20 7H8"}],["path",{d:"M20 11H8"}],["path",{d:"M10 19h10"}],["path",{d:"M8 15h12"}],["path",{d:"M4 3v14"}],["circle",{cx:"4",cy:"19",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=["svg",s,[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=["svg",s,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=["svg",s,[["path",{d:"m17 17-5 5V12l-5 5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=["svg",s,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66"}],["path",{d:"M18 12h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=["svg",s,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=["svg",s,[["path",{d:"M14 12a4 4 0 0 0 0-8H6v8"}],["path",{d:"M15 20a4 4 0 0 0 0-8H6v8Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=["svg",s,[["circle",{cx:"11",cy:"13",r:"9"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"}],["path",{d:"m22 2-1.5 1.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=["svg",s,[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"m8 13 4-7 4 7"}],["path",{d:"M9.1 11h5.7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M8 8v3"}],["path",{d:"M12 6v7"}],["path",{d:"M16 8v3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"m9 9.5 2 2 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=["svg",s,[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=["svg",s,[["path",{d:"M20 22h-2"}],["path",{d:"M20 15v2h-2"}],["path",{d:"M4 19.5V15"}],["path",{d:"M20 8v3"}],["path",{d:"M18 2h2v2"}],["path",{d:"M4 11V9"}],["path",{d:"M12 2h2"}],["path",{d:"M12 22h2"}],["path",{d:"M12 17h2"}],["path",{d:"M8 22H6.5a2.5 2.5 0 0 1 0-5H8"}],["path",{d:"M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M12 13V7"}],["path",{d:"m9 10 3 3 3-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["circle",{cx:"9",cy:"12",r:"1"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2"}],["circle",{cx:"15",cy:"12",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["circle",{cx:"10",cy:"8",r:"2"}],["path",{d:"m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"}],["path",{d:"M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20"}],["circle",{cx:"14",cy:"8",r:"2"}],["path",{d:"m20 2-4.5 4.5"}],["path",{d:"m19 3 1 1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"}],["path",{d:"M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20"}],["rect",{width:"8",height:"5",x:"12",y:"6",rx:"1"}],["path",{d:"M18 6V4a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=["svg",s,[["path",{d:"M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z"}],["path",{d:"m16 12 2 2 4-4"}],["path",{d:"M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=["svg",s,[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}],["path",{d:"M6 8h2"}],["path",{d:"M6 12h2"}],["path",{d:"M16 8h2"}],["path",{d:"M16 12h2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=["svg",s,[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}],["path",{d:"M12 7v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M8 7h6"}],["path",{d:"M8 11h8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M16 8V6H8v2"}],["path",{d:"M12 6v7"}],["path",{d:"M10 13h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"}],["path",{d:"M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M12 13V7"}],["path",{d:"m9 10 3-3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M12 13V7"}],["path",{d:"m9 10 3-3 3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M15 13a3 3 0 1 0-6 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"m14.5 7-5 5"}],["path",{d:"m9.5 7 5 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=["svg",s,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=["svg",s,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m9 10 2 2 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=["svg",s,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=["svg",s,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=["svg",s,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=["svg",s,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=["svg",s,[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M8 8v1"}],["path",{d:"M12 8v1"}],["path",{d:"M16 8v1"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2"}],["circle",{cx:"8",cy:"15",r:"2"}],["circle",{cx:"16",cy:"15",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=["svg",s,[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=["svg",s,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=["svg",s,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=["svg",s,[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=["svg",s,[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=["svg",s,[["path",{d:"M16 3h3v18h-3"}],["path",{d:"M8 21H5V3h3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=["svg",s,[["path",{d:"M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"}],["path",{d:"M16 8V5c0-1.1.9-2 2-2"}],["path",{d:"M12 13h4"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1"}],["path",{d:"M12 8h8"}],["path",{d:"M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"}],["path",{d:"M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"}],["path",{d:"M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"}],["path",{d:"M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=["svg",s,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5"}],["path",{d:"m15.7 10.4-.9.4"}],["path",{d:"m9.2 13.2-.9.4"}],["path",{d:"m13.6 15.7-.4-.9"}],["path",{d:"m10.8 9.2-.4-.9"}],["path",{d:"m15.7 13.5-.9-.4"}],["path",{d:"m9.2 10.9-.9-.4"}],["path",{d:"m10.5 15.7.4-.9"}],["path",{d:"m13.1 9.2.4-.9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=["svg",s,[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 9v6"}],["path",{d:"M16 15v6"}],["path",{d:"M16 3v6"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["path",{d:"M8 15v6"}],["path",{d:"M8 3v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=["svg",s,[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=["svg",s,[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=["svg",s,[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=["svg",s,[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"}],["path",{d:"M12 20v-8"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=["svg",s,[["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"m12 12 8 5-8 5Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=["svg",s,[["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"}],["path",{d:"M12 20v-9"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M22 13h-4"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=["svg",s,[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=["svg",s,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["path",{d:"M9 22v-4h6v4"}],["path",{d:"M8 6h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=["svg",s,[["path",{d:"M4 6 2 7"}],["path",{d:"M10 6h4"}],["path",{d:"m22 7-2-1"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M6 19v2"}],["path",{d:"M18 21v-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=["svg",s,[["path",{d:"M8 6v6"}],["path",{d:"M15 6v6"}],["path",{d:"M2 12h19.6"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"}],["circle",{cx:"7",cy:"18",r:"2"}],["path",{d:"M9 18h5"}],["circle",{cx:"16",cy:"18",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=["svg",s,[["path",{d:"M10 3h.01"}],["path",{d:"M14 2h.01"}],["path",{d:"m2 9 20-5"}],["path",{d:"M12 12V6.5"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=["svg",s,[["path",{d:"M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z"}],["path",{d:"M3 5V3"}],["path",{d:"M7 5V3"}],["path",{d:"M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9"}],["path",{d:"M17 21v-2"}],["path",{d:"M21 21v-2"}],["path",{d:"M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=["svg",s,[["circle",{cx:"9",cy:"7",r:"2"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"}],["path",{d:"M16 13H3"}],["path",{d:"M16 17H3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=["svg",s,[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"}],["path",{d:"M2 21h20"}],["path",{d:"M7 8v3"}],["path",{d:"M12 8v3"}],["path",{d:"M17 8v3"}],["path",{d:"M7 4h0.01"}],["path",{d:"M12 4h0.01"}],["path",{d:"M17 4h0.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=["svg",s,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=["svg",s,[["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["path",{d:"m16 20 2 2 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["path",{d:"m9 16 2 2 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=["svg",s,[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h5"}],["path",{d:"M17.5 17.5 16 16.25V14"}],["path",{d:"M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=["svg",s,[["path",{d:"M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=["svg",s,[["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["line",{x1:"16",x2:"22",y1:"19",y2:"19"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=["svg",s,[["path",{d:"M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h7"}],["path",{d:"M21 10h-5.5"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=["svg",s,[["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["line",{x1:"19",x2:"19",y1:"16",y2:"22"}],["line",{x1:"16",x2:"22",y1:"19",y2:"19"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["path",{d:"M17 14h-6"}],["path",{d:"M13 18H7"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 18h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=["svg",s,[["path",{d:"M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"}],["path",{d:"m22 22-1.5-1.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=["svg",s,[["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["line",{x1:"17",x2:"22",y1:"17",y2:"22"}],["line",{x1:"17",x2:"22",y1:"22",y2:"17"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["line",{x1:"10",x2:"14",y1:"14",y2:"18"}],["line",{x1:"14",x2:"10",y1:"14",y2:"18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=["svg",s,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=["svg",s,[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}],["circle",{cx:"12",cy:"13",r:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=["svg",s,[["path",{d:"M9 5v4"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1"}],["path",{d:"M9 15v2"}],["path",{d:"M17 3v2"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1"}],["path",{d:"M17 13v3"}],["path",{d:"M3 3v18h18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=["svg",s,[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=["svg",s,[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657"}],["path",{d:"M14 16.5V14"}],["path",{d:"M14 6.5v1.843"}],["path",{d:"M10 10v7.5"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=["svg",s,[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"}],["path",{d:"M14 6.5v10"}],["path",{d:"M10 7.5v10"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=["svg",s,[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=["svg",s,[["path",{d:"M10 2h4"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=["svg",s,[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"}],["circle",{cx:"7",cy:"17",r:"2"}],["path",{d:"M9 17h6"}],["circle",{cx:"17",cy:"17",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=["svg",s,[["rect",{width:"4",height:"4",x:"2",y:"9"}],["rect",{width:"4",height:"10",x:"10",y:"9"}],["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"}],["circle",{cx:"8",cy:"19",r:"2"}],["path",{d:"M10 19h12v-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=["svg",s,[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=["svg",s,[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=["svg",s,[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["circle",{cx:"18",cy:"12",r:"3"}],["path",{d:"M21 9v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=["svg",s,[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=["svg",s,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["circle",{cx:"8",cy:"10",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"10",r:"2"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=["svg",s,[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}],["path",{d:"M2 12a9 9 0 0 1 8 8"}],["path",{d:"M2 16a5 5 0 0 1 4 4"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=["svg",s,[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"}],["path",{d:"M18 11V4H6v7"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4"}],["path",{d:"M22 11V9"}],["path",{d:"M2 11V9"}],["path",{d:"M6 4V2"}],["path",{d:"M18 4V2"}],["path",{d:"M10 4V2"}],["path",{d:"M14 4V2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=["svg",s,[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"}],["path",{d:"M8 14v.5"}],["path",{d:"M16 14v.5"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=["svg",s,[["path",{d:"M7 9h.01"}],["path",{d:"M16.75 12H22l-3.5 7-3.09-4.32"}],["path",{d:"M18 9.5l-4 8-10.39-5.2a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3Z"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"}],["path",{d:"M2 21v-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=["svg",s,[["path",{d:"M18 6 7 17l-5-5"}],["path",{d:"m22 10-7.5 7.5L13 16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=["svg",s,[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}],["path",{d:"m9 11 3 3L22 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=["svg",s,[["path",{d:"m9 11 3 3L22 4"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=["svg",s,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=["svg",s,[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=["svg",s,[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 10-4 4-4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 10-4 4-4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=["svg",s,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=["svg",s,[["path",{d:"m17 18-6-6 6-6"}],["path",{d:"M7 6v12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=["svg",s,[["path",{d:"m7 18 6-6-6-6"}],["path",{d:"M17 6v12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14 16-4-4 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m14 16-4-4 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=["svg",s,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m10 8 4 4-4 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m10 8 4 4-4 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=["svg",s,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m8 14 4-4 4 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 14 4-4 4 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=["svg",s,[["path",{d:"m18 15-6-6-6 6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=["svg",s,[["path",{d:"m7 20 5-5 5 5"}],["path",{d:"m7 4 5 5 5-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=["svg",s,[["path",{d:"m7 6 5 5 5-5"}],["path",{d:"m7 13 5 5 5-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=["svg",s,[["path",{d:"m9 7-5 5 5 5"}],["path",{d:"m15 7 5 5-5 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=["svg",s,[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=["svg",s,[["path",{d:"m20 17-5-5 5-5"}],["path",{d:"m4 17 5-5-5-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=["svg",s,[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=["svg",s,[["path",{d:"m7 15 5 5 5-5"}],["path",{d:"m7 9 5-5 5 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=["svg",s,[["path",{d:"m17 11-5-5-5 5"}],["path",{d:"m17 18-5-5-5 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=["svg",s,[["path",{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"}],["path",{d:"M18 22V5l-6-3-6 3v17"}],["path",{d:"M12 7v5"}],["path",{d:"M10 9h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=["svg",s,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M12 12H2v4h14"}],["path",{d:"M22 12v4"}],["path",{d:"M18 12h-.5"}],["path",{d:"M7 12v4"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=["svg",s,[["path",{d:"M18 12H2v4h16"}],["path",{d:"M22 12v4"}],["path",{d:"M7 12v4"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=["svg",s,[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=["svg",s,[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M17 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M7 12h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=["svg",s,[["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=["svg",s,[["path",{d:"m2 2 20 20"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M22 2 2 22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=["svg",s,[["line",{x1:"9",x2:"15",y1:"15",y2:"9"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=["svg",s,[["path",{d:"M18 20a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"10",r:"4"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4"}],["circle",{cx:"15",cy:"15",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=["svg",s,[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34"}],["path",{d:"m14 10-5.5 5.5"}],["path",{d:"M14 17.85V10H6.15"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=["svg",s,[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"}],["path",{d:"m6.2 5.3 3.1 3.9"}],["path",{d:"m12.4 3.4 3.1 4"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=["svg",s,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=["svg",s,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4"}],["path",{d:"M21 14H11"}],["path",{d:"m15 10-4 4 4 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=["svg",s,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=["svg",s,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=["svg",s,[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"}],["path",{d:"m17 10 4 4-4 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=["svg",s,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"}],["path",{d:"M8 18h1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=["svg",s,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 12v-1h6v1"}],["path",{d:"M11 17h2"}],["path",{d:"M12 11v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=["svg",s,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m15 11-6 6"}],["path",{d:"m9 11 6 6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=["svg",s,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16.5 12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 12 16.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 7.5 12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=["svg",s,[["circle",{cx:"12",cy:"17",r:"3"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"}],["path",{d:"m15.7 18.4-.9-.3"}],["path",{d:"m9.2 15.9-.9-.3"}],["path",{d:"m10.6 20.7.3-.9"}],["path",{d:"m13.1 14.2.3-.9"}],["path",{d:"m13.6 20.7-.4-1"}],["path",{d:"m10.8 14.3-.4-1"}],["path",{d:"m8.3 18.6 1-.4"}],["path",{d:"m14.7 15.8 1-.4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=["svg",s,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 19v1"}],["path",{d:"M8 14v1"}],["path",{d:"M16 19v1"}],["path",{d:"M16 14v1"}],["path",{d:"M12 21v1"}],["path",{d:"M12 16v1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=["svg",s,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 17H7"}],["path",{d:"M17 21H9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=["svg",s,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v2"}],["path",{d:"M8 14v2"}],["path",{d:"M16 20h.01"}],["path",{d:"M8 20h.01"}],["path",{d:"M12 16v2"}],["path",{d:"M12 22h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=["svg",s,[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"}],["path",{d:"m13 12-3 5h4l-3 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=["svg",s,[["path",{d:"M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M11 20v2"}],["path",{d:"M7 19v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=["svg",s,[["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"}],["path",{d:"M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=["svg",s,[["path",{d:"m2 2 20 20"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=["svg",s,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m9.2 22 3-7"}],["path",{d:"m9 13-3 7"}],["path",{d:"m17 13-3 7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=["svg",s,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v6"}],["path",{d:"M8 14v6"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=["svg",s,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 15h.01"}],["path",{d:"M8 19h.01"}],["path",{d:"M12 17h.01"}],["path",{d:"M12 21h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M16 19h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=["svg",s,[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M11 20v2"}],["path",{d:"M7 19v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=["svg",s,[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=["svg",s,[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=["svg",s,[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=["svg",s,[["path",{d:"M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z"}],["path",{d:"M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16"}],["path",{d:"M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8"}],["path",{d:"M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z"}],["path",{d:"m7 17-5 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=["svg",s,[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"}],["path",{d:"M12 17.66L12 22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=["svg",s,[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=["svg",s,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=["svg",s,[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5"}],["polyline",{points:"22 8.5 12 15.5 2 8.5"}],["polyline",{points:"2 15.5 12 8.5 22 15.5"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=["svg",s,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=["svg",s,[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=["svg",s,[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}],["path",{d:"M12 2v2"}],["path",{d:"M12 22v-2"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["path",{d:"M14 12h8"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"m11 13.73-4 6.93"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=["svg",s,[["circle",{cx:"8",cy:"8",r:"6"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18"}],["path",{d:"M7 6h1v4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"12",x2:"12",y1:"3",y2:"21"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=["svg",s,[["rect",{width:"8",height:"8",x:"2",y:"2",rx:"2"}],["path",{d:"M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"}],["path",{d:"M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"}],["path",{d:"M10 18H5c-1.7 0-3-1.3-3-3v-1"}],["polyline",{points:"7 21 10 18 7 15"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=["svg",s,[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=["svg",s,[["path",{d:"M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"}],["path",{d:"m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"}],["path",{d:"M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"}],["path",{d:"m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=["svg",s,[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h2"}],["path",{d:"M12 18h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=["svg",s,[["path",{d:"M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z"}],["path",{d:"M20 16a8 8 0 1 0-16 0"}],["path",{d:"M12 4v4"}],["path",{d:"M10 4h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=["svg",s,[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=["svg",s,[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1"}],["path",{d:"M17 14v7"}],["path",{d:"M7 14v7"}],["path",{d:"M17 3v3"}],["path",{d:"M7 3v3"}],["path",{d:"M10 14 2.3 6.3"}],["path",{d:"m14 6 7.7 7.7"}],["path",{d:"m8 6 8 8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=["svg",s,[["path",{d:"M16 18a4 4 0 0 0-8 0"}],["circle",{cx:"12",cy:"11",r:"3"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=["svg",s,[["path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["circle",{cx:"12",cy:"10",r:"2"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=["svg",s,[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"}],["path",{d:"M10 21.9V14L2.1 9.1"}],["path",{d:"m10 14 11.9-6.9"}],["path",{d:"M14 19.8v-8.1"}],["path",{d:"M18 17.5V9.4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=["svg",s,[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"}],["path",{d:"M8.5 8.5v.01"}],["path",{d:"M16 15.5v.01"}],["path",{d:"M12 12v.01"}],["path",{d:"M11 17v.01"}],["path",{d:"M7 14v.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=["svg",s,[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=["svg",s,[["path",{d:"m12 15 2 2 4-4"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=["svg",s,[["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=["svg",s,[["line",{x1:"15",x2:"15",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=["svg",s,[["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=["svg",s,[["line",{x1:"12",x2:"18",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=["svg",s,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=["svg",s,[["polyline",{points:"9 10 4 15 9 20"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=["svg",s,[["polyline",{points:"15 10 20 15 15 20"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=["svg",s,[["polyline",{points:"14 15 9 20 4 15"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=["svg",s,[["polyline",{points:"14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=["svg",s,[["polyline",{points:"10 15 15 20 20 15"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=["svg",s,[["polyline",{points:"10 9 15 4 20 9"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=["svg",s,[["polyline",{points:"9 14 4 9 9 4"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=["svg",s,[["polyline",{points:"15 14 20 9 15 4"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=["svg",s,[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"9",y:"9",width:"6",height:"6"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=["svg",s,[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=["svg",s,[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=["svg",s,[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=["svg",s,[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=["svg",s,[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=["svg",s,[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"}],["path",{d:"M10 22v-8L2.25 9.15"}],["path",{d:"m10 14 11.77-6.87"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=["svg",s,[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"}],["path",{d:"M5 8h14"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}],["path",{d:"m12 8 1-6h2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=["svg",s,[["circle",{cx:"12",cy:"12",r:"8"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=["svg",s,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=["svg",s,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69"}],["path",{d:"M21 9.3V5"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88"}],["path",{d:"M12 12v4h4"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=["svg",s,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84"}],["path",{d:"M21 5V8"}],["path",{d:"M21 12L18 17H22L19 22"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=["svg",s,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=["svg",s,[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=["svg",s,[["circle",{cx:"12",cy:"4",r:"2"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=["svg",s,[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86"}],["path",{d:"m6.41 6.41 11.18 11.18"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=["svg",s,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M15 9h.01"}],["path",{d:"M9 15h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 12h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=["svg",s,[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 14h.01"}],["path",{d:"M15 6h.01"}],["path",{d:"M18 9h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=["svg",s,[["path",{d:"M12 3v14"}],["path",{d:"M5 10h14"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"5"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=["svg",s,[["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=["svg",s,[["circle",{cx:"12",cy:"6",r:"1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12"}],["circle",{cx:"12",cy:"18",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=["svg",s,[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5"}],["path",{d:"m17 6-2.5-2.5"}],["path",{d:"m14 8-1.5-1.5"}],["path",{d:"m7 18 2.5 2.5"}],["path",{d:"m3.5 14.5.5.5"}],["path",{d:"m20 9 .5.5"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m16.5 10.5 1 1"}],["path",{d:"m10 16 1.5 1.5"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=["svg",s,[["path",{d:"M2 15c6.667-6 13.333 0 20-6"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"}],["path",{d:"m17 6-2.5-2.5"}],["path",{d:"m14 8-1-1"}],["path",{d:"m7 18 2.5 2.5"}],["path",{d:"m3.5 14.5.5.5"}],["path",{d:"m20 9 .5.5"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m16.5 10.5 1 1"}],["path",{d:"m10 16 1.5 1.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=["svg",s,[["path",{d:"M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"}],["path",{d:"M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"}],["path",{d:"M8 14v.5"}],["path",{d:"M16 14v.5"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=["svg",s,[["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=["svg",s,[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=["svg",s,[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{d:"M2 20h20"}],["path",{d:"M14 12v.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=["svg",s,[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14"}],["path",{d:"M2 20h3"}],["path",{d:"M13 20h9"}],["path",{d:"M10 12v.01"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=["svg",s,[["circle",{cx:"12.1",cy:"12.1",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=["svg",s,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M12 12v9"}],["path",{d:"m8 17 4 4 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=["svg",s,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=["svg",s,[["circle",{cx:"12",cy:"5",r:"2"}],["path",{d:"m3 21 8.02-14.26"}],["path",{d:"m12.99 6.74 1.93 3.44"}],["path",{d:"M19 12c-3.87 4-10.13 4-14 0"}],["path",{d:"m21 21-2.16-3.84"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=["svg",s,[["path",{d:"M10 11h.01"}],["path",{d:"M14 6h.01"}],["path",{d:"M18 6h.01"}],["path",{d:"M6.5 13.1h.01"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=["svg",s,[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=["svg",s,[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=["svg",s,[["path",{d:"m2 2 8 8"}],["path",{d:"m22 2-8 8"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5"}],["path",{d:"M7 13.4v7.9"}],["path",{d:"M12 14v8"}],["path",{d:"M17 13.4v7.9"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=["svg",s,[["path",{d:"M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z"}],["path",{d:"m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=["svg",s,[["path",{d:"m6.5 6.5 11 11"}],["path",{d:"m21 21-1-1"}],["path",{d:"m3 3 1 1"}],["path",{d:"m18 22 4-4"}],["path",{d:"m2 6 4-4"}],["path",{d:"m3 10 7-7"}],["path",{d:"m14 21 7-7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=["svg",s,[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=["svg",s,[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=["svg",s,[["circle",{cx:"11.5",cy:"12.5",r:"3.5"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=["svg",s,[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=["svg",s,[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=["svg",s,[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=["svg",s,[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=["svg",s,[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"}],["path",{d:"M22 21H7"}],["path",{d:"m5 11 9 9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=["svg",s,[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=["svg",s,[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=["svg",s,[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}],["polyline",{points:"15 3 21 3 21 9"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=["svg",s,[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=["svg",s,[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=["svg",s,[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=["svg",s,[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M17 18h1"}],["path",{d:"M12 18h1"}],["path",{d:"M7 18h1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=["svg",s,[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"}],["path",{d:"M12 12v.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=["svg",s,[["polygon",{points:"13 19 22 12 13 5 13 19"}],["polygon",{points:"2 19 11 12 2 5 2 19"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=["svg",s,[["path",{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"}],["line",{x1:"16",x2:"2",y1:"8",y2:"22"}],["line",{x1:"17.5",x2:"9",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=["svg",s,[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M6 8h4"}],["path",{d:"M6 18h4"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M14 8h4"}],["path",{d:"M14 18h4"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=["svg",s,[["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M12 2v4"}],["path",{d:"m6.8 15-3.5 2"}],["path",{d:"m20.7 7-3.5 2"}],["path",{d:"M6.8 9 3.3 7"}],["path",{d:"m20.7 17-3.5-2"}],["path",{d:"m9 22 3-8 3 8"}],["path",{d:"M8 22h8"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=["svg",s,[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=["svg",s,[["path",{d:"M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2"}],["polyline",{points:"14 2 14 8 20 8"}],["circle",{cx:"10",cy:"20",r:"2"}],["path",{d:"M10 7V6"}],["path",{d:"M10 12v-1"}],["path",{d:"M10 18v-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=["svg",s,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3"}],["circle",{cx:"9",cy:"17",r:"1"}],["circle",{cx:"3",cy:"17",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=["svg",s,[["path",{d:"M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z"}],["path",{d:"M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z"}],["path",{d:"M2 19v-3a6 6 0 0 1 12 0v3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M8 10v8h8"}],["path",{d:"m8 18 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["path",{d:"M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=["svg",s,[["path",{d:"M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M12 18v-6"}],["path",{d:"M8 18v-1"}],["path",{d:"M16 18v-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M12 18v-4"}],["path",{d:"M8 18v-2"}],["path",{d:"M16 18v-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=["svg",s,[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z"}],["path",{d:"m7 17-4.74-2.85"}],["path",{d:"m7 17 4.74-2.85"}],["path",{d:"M7 17v5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=["svg",s,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m3 15 2 2 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m9 15 2 2 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=["svg",s,[["path",{d:"M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"}],["polyline",{points:"14 2 14 8 20 8"}],["circle",{cx:"8",cy:"16",r:"6"}],["path",{d:"M9.5 17.5 8 16.25V14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=["svg",s,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m9 18 3-3-3-3"}],["path",{d:"m5 12-3 3 3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m10 13-2 2 2 2"}],["path",{d:"m14 17 2-2-2-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=["svg",s,[["circle",{cx:"6",cy:"13",r:"3"}],["path",{d:"m9.7 14.4-.9-.3"}],["path",{d:"m3.2 11.9-.9-.3"}],["path",{d:"m4.6 16.7.3-.9"}],["path",{d:"m7.6 16.7-.4-1"}],["path",{d:"m4.8 10.3-.4-1"}],["path",{d:"m2.3 14.6 1-.4"}],["path",{d:"m8.7 11.8 1-.4"}],["path",{d:"m7.4 9.3-.3.9"}],["path",{d:"M14 2v6h6"}],["path",{d:"M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["path",{d:"M12 13V7"}],["path",{d:"M9 10h6"}],["path",{d:"M9 17h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=["svg",s,[["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2"}],["path",{d:"M14 2v6h6"}],["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M10 12h2v6"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M12 18v-6"}],["path",{d:"m9 15 3 3 3-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=["svg",s,[["path",{d:"M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=["svg",s,[["path",{d:"M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["circle",{cx:"10",cy:"13",r:"2"}],["path",{d:"m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=["svg",s,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M2 15h10"}],["path",{d:"m9 18 3-3-3-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=["svg",s,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=["svg",s,[["path",{d:"M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"}],["polyline",{points:"14 2 14 8 20 8"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"m10 10-4.5 4.5"}],["path",{d:"m9 11 1 1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["circle",{cx:"10",cy:"16",r:"2"}],["path",{d:"m16 10-4.5 4.5"}],["path",{d:"m15 11 1 1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=["svg",s,[["path",{d:"M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"}],["polyline",{points:"14 2 14 8 20 8"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1"}],["path",{d:"M15 12v-2a3 3 0 1 0-6 0v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=["svg",s,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M3 15h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["line",{x1:"9",x2:"15",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=["svg",s,[["circle",{cx:"14",cy:"16",r:"2"}],["circle",{cx:"6",cy:"18",r:"2"}],["path",{d:"M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5"}],["path",{d:"M8 18v-7.7L16 9v7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=["svg",s,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M2 15h10"}],["path",{d:"m5 12-3 3 3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=["svg",s,[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29"}],["path",{d:"M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=["svg",s,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M3 15h6"}],["path",{d:"M6 12v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["line",{x1:"12",x2:"12",y1:"18",y2:"12"}],["line",{x1:"9",x2:"15",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["path",{d:"M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=["svg",s,[["path",{d:"M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M16 22a2 2 0 0 1-2-2"}],["path",{d:"M20 22a2 2 0 0 0 2-2"}],["path",{d:"M20 14a2 2 0 0 1 2 2"}],["path",{d:"M16 14a2 2 0 0 0-2 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5"}],["path",{d:"M13.25 16.25 15 18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=["svg",s,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"m9 18-1.5-1.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=["svg",s,[["path",{d:"M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5"}],["path",{d:"M8 18h1"}],["path",{d:"M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M8 13h2"}],["path",{d:"M8 17h2"}],["path",{d:"M14 13h2"}],["path",{d:"M14 17h2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=["svg",s,[["path",{d:"M16 2v5h5"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17l4 4z"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=["svg",s,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m10 18 3-3-3-3"}],["path",{d:"M4 18v-1a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m8 16 2-2-2-2"}],["path",{d:"M12 18h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=["svg",s,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M2 13v-1h6v1"}],["path",{d:"M4 18h2"}],["path",{d:"M5 12v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M9 13v-1h6v1"}],["path",{d:"M11 18h2"}],["path",{d:"M12 12v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M12 12v6"}],["path",{d:"m15 15-3-3-3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=["svg",s,[["path",{d:"M4 8V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m10 11 5 3-5 3v-6Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M11.5 13.5c.32.4.5.94.5 1.5s-.18 1.1-.5 1.5"}],["path",{d:"M15 12c.64.8 1 1.87 1 3s-.36 2.2-1 3"}],["path",{d:"M8 15h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=["svg",s,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m7 10-3 2H2v4h2l3 2v-8Z"}],["path",{d:"M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=["svg",s,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v6h6"}],["path",{d:"m3 12.5 5 5"}],["path",{d:"m8 12.5-5 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["line",{x1:"9.5",x2:"14.5",y1:"12.5",y2:"17.5"}],["line",{x1:"14.5",x2:"9.5",y1:"12.5",y2:"17.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=["svg",s,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=["svg",s,[["path",{d:"M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"}],["path",{d:"M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"}],["path",{d:"M15 2v5h5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 3v18"}],["path",{d:"M3 7.5h4"}],["path",{d:"M3 12h18"}],["path",{d:"M3 16.5h4"}],["path",{d:"M17 3v18"}],["path",{d:"M17 7.5h4"}],["path",{d:"M17 16.5h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=["svg",s,[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=["svg",s,[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=["svg",s,[["path",{d:"M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02"}],["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{d:"M2 16h.01"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=["svg",s,[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"}],["path",{d:"M9 18h8"}],["path",{d:"M18 3h-3"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11"}],["path",{d:"M5 13h4"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=["svg",s,[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=["svg",s,[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=["svg",s,[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"}],["path",{d:"M18 12v.5"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=["svg",s,[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11"}],["path",{d:"M4 22V4"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=["svg",s,[["path",{d:"M17 22V2L7 7l10 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=["svg",s,[["path",{d:"M7 22V2l10 5-10 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=["svg",s,[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=["svg",s,[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"}],["path",{d:"m5 22 14-4"}],["path",{d:"m5 18 14 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=["svg",s,[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=["svg",s,[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=["svg",s,[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=["svg",s,[["path",{d:"M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542"}],["path",{d:"M10 2v2.343"}],["path",{d:"M14 2v6.343"}],["path",{d:"M8.5 2h7"}],["path",{d:"M7 16h9"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=["svg",s,[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M7 16h10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=["svg",s,[["path",{d:"M10 2v7.31"}],["path",{d:"M14 9.3V1.99"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14 9.3a6.5 6.5 0 1 1-4 0"}],["path",{d:"M5.52 16h12.96"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=["svg",s,[["path",{d:"m3 7 5 5-5 5V7"}],["path",{d:"m21 7-5 5 5 5V7"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=["svg",s,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=["svg",s,[["path",{d:"m17 3-5 5-5-5h10"}],["path",{d:"m17 21-5-5-5 5h10"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=["svg",s,[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=["svg",s,[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M12 10v12"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=["svg",s,[["path",{d:"M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m8 16 1.5-1.5"}],["path",{d:"M14.5 9.5 16 8"}],["path",{d:"m8 8 1.5 1.5"}],["path",{d:"M14.5 14.5 16 16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=["svg",s,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=["svg",s,[["path",{d:"M2 12h6"}],["path",{d:"M22 12h-6"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 9-3 3 3 3"}],["path",{d:"m5 15 3-3-3-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=["svg",s,[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3-3-3 3"}],["path",{d:"m15 5-3 3-3-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=["svg",s,[["circle",{cx:"15",cy:"19",r:"2"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"}],["path",{d:"M15 11v-1"}],["path",{d:"M15 17v-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=["svg",s,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9 13 2 2 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=["svg",s,[["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"}],["path",{d:"M16 14v2l1 1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=["svg",s,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M2 10h20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=["svg",s,[["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"}],["path",{d:"m21.7 19.4-.9-.3"}],["path",{d:"m15.2 16.9-.9-.3"}],["path",{d:"m16.6 21.7.3-.9"}],["path",{d:"m19.1 15.2.3-.9"}],["path",{d:"m19.6 21.7-.4-1"}],["path",{d:"m16.8 15.3-.4-1"}],["path",{d:"m14.3 19.6 1-.4"}],["path",{d:"m20.7 16.8 1-.4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=["svg",s,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=["svg",s,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m15 13-3 3-3-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=["svg",s,[["path",{d:"M8.4 10.6a2.1 2.1 0 1 1 2.99 2.98L6 19l-4 1 1-3.9Z"}],["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=["svg",s,[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"}],["circle",{cx:"13",cy:"12",r:"2"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8"}],["circle",{cx:"20",cy:"19",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=["svg",s,[["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M14 13h3"}],["path",{d:"M7 13h3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=["svg",s,[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=["svg",s,[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"}],["path",{d:"M2 13h10"}],["path",{d:"m9 16 3-3-3-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=["svg",s,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["path",{d:"M8 10v4"}],["path",{d:"M12 10v2"}],["path",{d:"M16 10v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=["svg",s,[["circle",{cx:"16",cy:"20",r:"2"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"}],["path",{d:"m22 14-4.5 4.5"}],["path",{d:"m21 15 1 1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=["svg",s,[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=["svg",s,[["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=["svg",s,[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"}],["circle",{cx:"14",cy:"15",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=["svg",s,[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=["svg",s,[["path",{d:"M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2"}],["path",{d:"M2 13h10"}],["path",{d:"m5 10-3 3 3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=["svg",s,[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=["svg",s,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M12 15v5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=["svg",s,[["circle",{cx:"11.5",cy:"12.5",r:"2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M13.3 14.3 15 16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=["svg",s,[["circle",{cx:"17",cy:"17",r:"3"}],["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"}],["path",{d:"m21 21-1.5-1.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=["svg",s,[["path",{d:"M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2"}],["path",{d:"m8 16 3-3-3-3"}],["path",{d:"M2 16v-1a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=["svg",s,[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1"}],["path",{d:"M12 10v4h4"}],["path",{d:"m12 14 1.5-1.5c.9-.9 2.2-1.5 3.5-1.5s2.6.6 3.5 1.5c.4.4.8 1 1 1.5"}],["path",{d:"M22 22v-4h-4"}],["path",{d:"m22 18-1.5 1.5c-.9.9-2.1 1.5-3.5 1.5s-2.6-.6-3.5-1.5c-.4-.4-.8-1-1-1.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=["svg",s,[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=["svg",s,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m9 13 3-3 3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=["svg",s,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9.5 10.5 5 5"}],["path",{d:"m14.5 10.5-5 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=["svg",s,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=["svg",s,[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=["svg",s,[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=["svg",s,[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5"}],["circle",{cx:"13",cy:"19",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=["svg",s,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["path",{d:"M12 12h.01"}],["path",{d:"M17 12h.01"}],["path",{d:"M7 12h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=["svg",s,[["polyline",{points:"15 17 20 12 15 7"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=["svg",s,[["line",{x1:"22",x2:"2",y1:"6",y2:"6"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=["svg",s,[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=["svg",s,[["line",{x1:"3",x2:"15",y1:"22",y2:"22"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=["svg",s,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}],["path",{d:"M9 11.2h5.7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=["svg",s,[["path",{d:"M2 7v10"}],["path",{d:"M6 5v14"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=["svg",s,[["path",{d:"M2 3v18"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2"}],["path",{d:"M22 3v18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=["svg",s,[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2"}],["path",{d:"M4 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}],["path",{d:"M19 21h1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=["svg",s,[["path",{d:"M7 2h10"}],["path",{d:"M5 6h14"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=["svg",s,[["path",{d:"M3 2h18"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2"}],["path",{d:"M3 22h18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=["svg",s,[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=["svg",s,[["line",{x1:"6",x2:"10",y1:"12",y2:"12"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 8h7"}],["path",{d:"M8 12h6"}],["path",{d:"M11 16h5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=["svg",s,[["path",{d:"M8 6h10"}],["path",{d:"M6 12h9"}],["path",{d:"M11 18h7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=["svg",s,[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M13.4 10.6 19 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=["svg",s,[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=["svg",s,[["path",{d:"m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"}],["path",{d:"m16 16 6-6"}],["path",{d:"m8 8 6-6"}],["path",{d:"m9 7 8 8"}],["path",{d:"m21 11-8-8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=["svg",s,[["path",{d:"M6 3h12l4 6-10 13L2 9Z"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6"}],["path",{d:"M2 9h20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=["svg",s,[["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=["svg",s,[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}],["path",{d:"M12 8v13"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=["svg",s,[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=["svg",s,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=["svg",s,[["circle",{cx:"12",cy:"12",r:"3"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=["svg",s,[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=["svg",s,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}],["path",{d:"m15 9-3-3 3-3"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9"}],["path",{d:"m9 15 3 3-3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=["svg",s,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=["svg",s,[["circle",{cx:"12",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["circle",{cx:"18",cy:"6",r:"3"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"}],["path",{d:"M12 12v3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=["svg",s,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v6"}],["circle",{cx:"5",cy:"18",r:"3"}],["path",{d:"M12 3v18"}],["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=["svg",s,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=["svg",s,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=["svg",s,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"m21 3-6 6"}],["path",{d:"m21 9-6-6"}],["path",{d:"M18 11.5V15"}],["circle",{cx:"18",cy:"18",r:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=["svg",s,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3"}],["path",{d:"M19 15v6"}],["path",{d:"M22 18h-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=["svg",s,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=["svg",s,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M18 6V5"}],["path",{d:"M18 11v-1"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=["svg",s,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=["svg",s,[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=["svg",s,[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=["svg",s,[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=["svg",s,[["circle",{cx:"6",cy:"15",r:"4"}],["circle",{cx:"18",cy:"15",r:"4"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=["svg",s,[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=["svg",s,[["path",{d:"M12 13V2l8 4-8 4"}],["path",{d:"M20.55 10.23A9 9 0 1 1 8 4.94"}],["path",{d:"M8 10a5 5 0 1 0 8.9 2.02"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=["svg",s,[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"}],["path",{d:"M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"}],["path",{d:"M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=["svg",s,[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=["svg",s,[["path",{d:"M22 5V2l-5.89 5.89"}],["circle",{cx:"16.6",cy:"15.89",r:"3"}],["circle",{cx:"8.11",cy:"7.4",r:"3"}],["circle",{cx:"12.35",cy:"11.65",r:"3"}],["circle",{cx:"13.91",cy:"5.85",r:"3"}],["circle",{cx:"18.15",cy:"10.09",r:"3"}],["circle",{cx:"6.56",cy:"13.2",r:"3"}],["circle",{cx:"10.8",cy:"17.44",r:"3"}],["circle",{cx:"5",cy:"19",r:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 12h18"}],["path",{d:"M12 3v18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=["svg",s,[["circle",{cx:"12",cy:"9",r:"1"}],["circle",{cx:"19",cy:"9",r:"1"}],["circle",{cx:"5",cy:"9",r:"1"}],["circle",{cx:"12",cy:"15",r:"1"}],["circle",{cx:"19",cy:"15",r:"1"}],["circle",{cx:"5",cy:"15",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=["svg",s,[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"9",cy:"5",r:"1"}],["circle",{cx:"9",cy:"19",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"15",cy:"5",r:"1"}],["circle",{cx:"15",cy:"19",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=["svg",s,[["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"19",cy:"5",r:"1"}],["circle",{cx:"5",cy:"5",r:"1"}],["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}],["circle",{cx:"19",cy:"19",r:"1"}],["circle",{cx:"5",cy:"19",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=["svg",s,[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=["svg",s,[["path",{d:"m20 7 1.7-1.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L17 4v3Z"}],["path",{d:"m17 7-5.1 5.1"}],["circle",{cx:"11.5",cy:"12.5",r:".5"}],["path",{d:"M6 12a2 2 0 0 0 1.8-1.2l.4-.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4"}],["path",{d:"m6 16 2 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=["svg",s,[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"}],["path",{d:"M17.64 15 22 10.64"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=["svg",s,[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=["svg",s,[["path",{d:"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=["svg",s,[["path",{d:"M12 2v8"}],["path",{d:"m16 6-4 4-4-4"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=["svg",s,[["path",{d:"m16 6-4-4-4 4"}],["path",{d:"M12 2v8"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=["svg",s,[["line",{x1:"22",x2:"2",y1:"12",y2:"12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=["svg",s,[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6h0"}],["path",{d:"M14 6h0a6 6 0 0 1 6 6v3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=["svg",s,[["line",{x1:"4",x2:"20",y1:"9",y2:"9"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=["svg",s,[["path",{d:"m5.2 6.2 1.4 1.4"}],["path",{d:"M2 13h2"}],["path",{d:"M20 13h2"}],["path",{d:"m17.4 7.6 1.4-1.4"}],["path",{d:"M22 17H2"}],["path",{d:"M22 21H2"}],["path",{d:"M16 13a4 4 0 0 0-8 0"}],["path",{d:"M12 5V2.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=["svg",s,[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"}],["path",{d:"M7.5 12h9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=["svg",s,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"m17 12 3-2v8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=["svg",s,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=["svg",s,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=["svg",s,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 10v4h4"}],["path",{d:"M21 10v8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=["svg",s,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 13v-3h4"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=["svg",s,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["circle",{cx:"19",cy:"16",r:"2"}],["path",{d:"M20 10c-2 2-3 3.5-3 6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=["svg",s,[["path",{d:"M6 12h12"}],["path",{d:"M6 20V4"}],["path",{d:"M18 20V4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=["svg",s,[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=["svg",s,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=["svg",s,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"}],["path",{d:"m18 15-2-2"}],["path",{d:"m15 18-2-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=["svg",s,[["line",{x1:"2",y1:"2",x2:"22",y2:"22"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=["svg",s,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=["svg",s,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=["svg",s,[["path",{d:"m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19"}],["path",{d:"m2 14 6 6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=["svg",s,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=["svg",s,[["path",{d:"m9 11-6 6v3h9l3-3"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=["svg",s,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=["svg",s,[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}],["polyline",{points:"9 22 9 12 15 12 15 22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=["svg",s,[["path",{d:"M17.5 5.5C19 7 20.5 9 21 11c-1.323.265-2.646.39-4.118.226"}],["path",{d:"M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5"}],["path",{d:"M17.5 17.5c-2.5 0-4 0-6-1"}],["path",{d:"M20 11.5c1 1.5 2 3.5 2 4.5"}],["path",{d:"M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5"}],["path",{d:"M22 22c-2 0-3.5-.5-5.5-1.5"}],["path",{d:"M4.783 4.782C1.073 8.492 1 14.5 5 18c1-1 2-4.5 1.5-6.5 1.5 1 4 1 5.5.5M8.227 2.57C11.578 1.335 15.453 2.089 18 5c-.88.88-3.7 1.761-5.726 1.618"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=["svg",s,[["path",{d:"M17.5 5.5C19 7 20.5 9 21 11c-2.5.5-5 .5-8.5-1"}],["path",{d:"M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5"}],["path",{d:"M16.5 11.5c1 2 1 3.5 1 6-2.5 0-4 0-6-1"}],["path",{d:"M20 11.5c1 1.5 2 3.5 2 4.5-1.5.5-3 0-4.5-.5"}],["path",{d:"M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5"}],["path",{d:"M20.5 16.5c1 2 1.5 3.5 1.5 5.5-2 0-3.5-.5-5.5-1.5"}],["path",{d:"M4.783 4.782C8.493 1.072 14.5 1 18 5c-1 1-4.5 2-6.5 1.5 1 1.5 1 4 .5 5.5-1.5.5-4 .5-5.5-.5C7 13.5 6 17 5 18c-4-3.5-3.927-9.508-.217-13.218Z"}],["path",{d:"M4.5 4.5 3 3c-.184-.185-.184-.816 0-1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=["svg",s,[["path",{d:"M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"}],["path",{d:"m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"}],["path",{d:"M8 7h.01"}],["path",{d:"M16 7h.01"}],["path",{d:"M12 7h.01"}],["path",{d:"M12 11h.01"}],["path",{d:"M16 11h.01"}],["path",{d:"M8 11h.01"}],["path",{d:"M10 22v-6.5m4 0V22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=["svg",s,[["path",{d:"M5 22h14"}],["path",{d:"M5 2h14"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=["svg",s,[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=["svg",s,[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"}],["path",{d:"M17 7A5 5 0 0 0 7 7"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=["svg",s,[["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.8"}],["path",{d:"m21 15-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19.5 3 3v-6"}],["path",{d:"m17 22.5 3-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=["svg",s,[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=["svg",s,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=["svg",s,[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=["svg",s,[["path",{d:"M12 3v12"}],["path",{d:"m8 11 4 4 4-4"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=["svg",s,[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=["svg",s,[["polyline",{points:"3 8 7 12 3 16"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=["svg",s,[["path",{d:"M6 3h12"}],["path",{d:"M6 8h12"}],["path",{d:"m6 13 8.5 8"}],["path",{d:"M6 13h3"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=["svg",s,[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h.01"}],["path",{d:"M17 7h.01"}],["path",{d:"M7 17h.01"}],["path",{d:"M17 17h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=["svg",s,[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=["svg",s,[["line",{x1:"19",x2:"10",y1:"4",y2:"4"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=["svg",s,[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"}],["polyline",{points:"16 14 20 18 16 22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=["svg",s,[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"}],["polyline",{points:"8 22 4 18 8 14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=["svg",s,[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3"}],["path",{d:"M6 15h12"}],["path",{d:"M6 11h12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=["svg",s,[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"}],["path",{d:"M6 15v-2"}],["path",{d:"M12 15V9"}],["circle",{cx:"12",cy:"6",r:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=["svg",s,[["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M14 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M3 14v1"}],["path",{d:"M3 9v1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=["svg",s,[["path",{d:"M6 5v11"}],["path",{d:"M12 5v6"}],["path",{d:"M18 5v14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=["svg",s,[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"}],["circle",{cx:"16.5",cy:"7.5",r:".5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=["svg",s,[["path",{d:"M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z"}],["path",{d:"m14 7 3 3"}],["path",{d:"M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=["svg",s,[["circle",{cx:"7.5",cy:"15.5",r:"5.5"}],["path",{d:"m21 2-9.6 9.6"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=["svg",s,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M2 12h20"}],["path",{d:"M6 12v4"}],["path",{d:"M10 12v4"}],["path",{d:"M14 12v4"}],["path",{d:"M18 12v4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=["svg",s,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",ry:"2"}],["path",{d:"M6 8h.001"}],["path",{d:"M10 8h.001"}],["path",{d:"M14 8h.001"}],["path",{d:"M18 8h.001"}],["path",{d:"M8 12h.001"}],["path",{d:"M12 12h.001"}],["path",{d:"M16 12h.001"}],["path",{d:"M7 16h10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=["svg",s,[["path",{d:"M12 2v5"}],["path",{d:"M6 7h12l4 9H2l4-9Z"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=["svg",s,[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z"}],["path",{d:"M9.5 6.5 4 12l3 6"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=["svg",s,[["path",{d:"M9 2h6l3 7H6l3-7Z"}],["path",{d:"M12 9v13"}],["path",{d:"M9 22h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=["svg",s,[["path",{d:"M11 13h6l3 7H8l3-7Z"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=["svg",s,[["path",{d:"M11 4h6l3 7H8l3-7Z"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=["svg",s,[["path",{d:"M8 2h8l4 10H4L8 2Z"}],["path",{d:"M12 12v6"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=["svg",s,[["path",{d:"m12 8 6-3-6-3v10"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"}],["path",{d:"m6.49 12.85 11.02 6.3"}],["path",{d:"M17.51 12.85 6.5 19.15"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=["svg",s,[["line",{x1:"3",x2:"21",y1:"22",y2:"22"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11"}],["polygon",{points:"12 2 20 7 4 7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=["svg",s,[["path",{d:"m5 8 6 6"}],["path",{d:"m4 14 6-6 2-3"}],["path",{d:"M2 5h12"}],["path",{d:"M7 2h1"}],["path",{d:"m22 22-5-10-5 10"}],["path",{d:"M14 18h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=["svg",s,[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=["svg",s,[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=["svg",s,[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=["svg",s,[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=["svg",s,[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=["svg",s,[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=["svg",s,[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=["svg",s,[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=["svg",s,[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=["svg",s,[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=["svg",s,[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=["svg",s,[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=["svg",s,[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["line",{x1:"9",x2:"9",y1:"21",y2:"9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=["svg",s,[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=["svg",s,[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"}],["path",{d:"M2 22 17 7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=["svg",s,[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1"}],["path",{d:"M7 3v18"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7v10"}],["path",{d:"M11 7v10"}],["path",{d:"m15 7 2 10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=["svg",s,[["path",{d:"m16 6 4 14"}],["path",{d:"M12 6v14"}],["path",{d:"M8 8v12"}],["path",{d:"M4 4v16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.93 4.93 4.24 4.24"}],["path",{d:"m14.83 9.17 4.24-4.24"}],["path",{d:"m14.83 14.83 4.24 4.24"}],["path",{d:"m9.17 14.83-4.24 4.24"}],["circle",{cx:"12",cy:"12",r:"4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=["svg",s,[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"}],["path",{d:"M6 12h4"}],["path",{d:"M14 12h2v8"}],["path",{d:"M6 20h4"}],["path",{d:"M14 20h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=["svg",s,[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=["svg",s,[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=["svg",s,[["path",{d:"M3 3v18h18"}],["path",{d:"m19 9-5 5-4-4-3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=["svg",s,[["path",{d:"M9 17H7A5 5 0 0 1 7 7"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=["svg",s,[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=["svg",s,[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=["svg",s,[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=["svg",s,[["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=["svg",s,[["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M10 18H3"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5"}],["path",{d:"m16 16-2 2 2 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=["svg",s,[["path",{d:"M3 6h18"}],["path",{d:"M7 12h10"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=["svg",s,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M21 12h-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=["svg",s,[["path",{d:"M21 15V6"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}],["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=["svg",s,[["line",{x1:"10",x2:"21",y1:"6",y2:"6"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18"}],["path",{d:"M4 6h1v4"}],["path",{d:"M4 10h2"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=["svg",s,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M18 9v6"}],["path",{d:"M21 12h-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=["svg",s,[["path",{d:"M21 6H3"}],["path",{d:"M7 12H3"}],["path",{d:"M7 18H3"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"}],["path",{d:"M11 10v4h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=["svg",s,[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M10 6H3"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5"}],["path",{d:"m16 8-2-2 2-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=["svg",s,[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1"}],["path",{d:"m3 17 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=["svg",s,[["path",{d:"M21 12h-8"}],["path",{d:"M21 6H8"}],["path",{d:"M21 18h-8"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=["svg",s,[["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}],["path",{d:"m16 12 5 3-5 3v-6Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=["svg",s,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"m19 10-4 4"}],["path",{d:"m15 10 4 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=["svg",s,[["line",{x1:"8",x2:"21",y1:"6",y2:"6"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=["svg",s,[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=["svg",s,[["line",{x1:"12",x2:"12",y1:"2",y2:"6"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=["svg",s,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=["svg",s,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=["svg",s,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=["svg",s,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=["svg",s,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=["svg",s,[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}],["polyline",{points:"10 17 15 12 10 7"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=["svg",s,[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}],["polyline",{points:"16 17 21 12 16 7"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=["svg",s,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=["svg",s,[["path",{d:"M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"}],["path",{d:"M10 20h4"}],["circle",{cx:"16",cy:"20",r:"2"}],["circle",{cx:"8",cy:"20",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8l4 4 4-4v8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=["svg",s,[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"}],["path",{d:"m5 8 4 4"}],["path",{d:"m12 15 4 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=["svg",s,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=["svg",s,[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M16 19h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=["svg",s,[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=["svg",s,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M19 16v6"}],["path",{d:"M16 19h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=["svg",s,[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}],["path",{d:"M20 22v.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=["svg",s,[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.5-1.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=["svg",s,[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M20 14v4"}],["path",{d:"M20 22v.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=["svg",s,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m17 17 4 4"}],["path",{d:"m21 17-4 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=["svg",s,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=["svg",s,[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"}],["polyline",{points:"15,9 18,9 18,11"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=["svg",s,[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=["svg",s,[["path",{d:"M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5"}],["path",{d:"M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82"}],["path",{d:"M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13"}],["path",{d:"M14.9 9.25a3 3 0 0 0-2.15-2.16"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=["svg",s,[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}],["circle",{cx:"12",cy:"10",r:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=["svg",s,[["path",{d:"M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=["svg",s,[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=["svg",s,[["path",{d:"M8 22h8"}],["path",{d:"M12 11v11"}],["path",{d:"m19 3-7 8-7-8Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=["svg",s,[["polyline",{points:"15 3 21 3 21 9"}],["polyline",{points:"9 21 3 21 3 15"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=["svg",s,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=["svg",s,[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"}],["path",{d:"M11 12 5.12 2.2"}],["path",{d:"m13 12 5.88-9.8"}],["path",{d:"M8 7h8"}],["circle",{cx:"12",cy:"17",r:"5"}],["path",{d:"M12 18v-2h-.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=["svg",s,[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14"}],["path",{d:"M21 15.34V6l-7.31 2.03"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=["svg",s,[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=["svg",s,[["path",{d:"M6 19v-3"}],["path",{d:"M10 19v-3"}],["path",{d:"M14 19v-3"}],["path",{d:"M18 19v-3"}],["path",{d:"M8 11V9"}],["path",{d:"M16 11V9"}],["path",{d:"M12 11V9"}],["path",{d:"M2 15h20"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 8h10"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=["svg",s,[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=["svg",s,[["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"}],["path",{d:"m20 22-5-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=["svg",s,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m10 10-2 2 2 2"}],["path",{d:"m14 10 2 2-2 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=["svg",s,[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=["svg",s,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=["svg",s,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=["svg",s,[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=["svg",s,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=["svg",s,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=["svg",s,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m10 15-3-3 3-3"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=["svg",s,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=["svg",s,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=["svg",s,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=["svg",s,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m10 8-2 2 2 2"}],["path",{d:"m14 8 2 2-2 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=["svg",s,[["path",{d:"M3 6V5c0-1.1.9-2 2-2h2"}],["path",{d:"M11 3h3"}],["path",{d:"M18 3h1c1.1 0 2 .9 2 2"}],["path",{d:"M21 9v2"}],["path",{d:"M21 15c0 1.1-.9 2-2 2h-1"}],["path",{d:"M14 17h-3"}],["path",{d:"m7 17-4 4v-5"}],["path",{d:"M3 12v-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=["svg",s,[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M9 10h6"}],["path",{d:"M12 7v6"}],["path",{d:"M9 17h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=["svg",s,[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"}],["circle",{cx:"18",cy:"6",r:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=["svg",s,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=["svg",s,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M16 10h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=["svg",s,[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"m2 2 20 20"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=["svg",s,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=["svg",s,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=["svg",s,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m10 7-3 3 3 3"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=["svg",s,[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7"}],["path",{d:"M16 3h5v5"}],["path",{d:"m16 8 5-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=["svg",s,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M13 8H7"}],["path",{d:"M17 12H7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=["svg",s,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v2"}],["path",{d:"M12 13h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=["svg",s,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=["svg",s,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=["svg",s,[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=["svg",s,[["path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"}],["circle",{cx:"17",cy:"7",r:"5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=["svg",s,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=["svg",s,[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=["svg",s,[["path",{d:"M6 18h8"}],["path",{d:"M3 22h18"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1"}],["path",{d:"M9 14h2"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=["svg",s,[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1"}],["path",{d:"M18 8v7"}],["path",{d:"M6 19v2"}],["path",{d:"M18 19v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=["svg",s,[["path",{d:"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"}],["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=["svg",s,[["path",{d:"M8 2h8"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=["svg",s,[["path",{d:"M8 2h8"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=["svg",s,[["polyline",{points:"4 14 10 14 10 20"}],["polyline",{points:"20 10 14 10 14 4"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=["svg",s,[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=["svg",s,[["path",{d:"M5 12h14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=["svg",s,[["path",{d:"m9 10 2 2 4-4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=["svg",s,[["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=["svg",s,[["path",{d:"M12 13V7"}],["path",{d:"m15 10-3 3-3-3"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=["svg",s,[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=["svg",s,[["path",{d:"M10 13V7"}],["path",{d:"M14 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=["svg",s,[["path",{d:"m10 7 5 3-5 3Z"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=["svg",s,[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=["svg",s,[["path",{d:"M5.5 20H8"}],["path",{d:"M17 9h.01"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"}],["circle",{cx:"17",cy:"15",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=["svg",s,[["rect",{x:"9",y:"7",width:"6",height:"6"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=["svg",s,[["path",{d:"m9 10 3-3 3 3"}],["path",{d:"M12 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=["svg",s,[["path",{d:"m14.5 12.5-5-5"}],["path",{d:"m9.5 12.5 5-5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=["svg",s,[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=["svg",s,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}],["path",{d:"M19 3v4"}],["path",{d:"M21 5h-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=["svg",s,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=["svg",s,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=["svg",s,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=["svg",s,[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=["svg",s,[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=["svg",s,[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=["svg",s,[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"M14 4.1 12 6"}],["path",{d:"m6 12-1.9 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=["svg",s,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h2"}],["path",{d:"M14 3h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v2"}],["path",{d:"M3 14v1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=["svg",s,[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=["svg",s,[["path",{d:"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"}],["path",{d:"m13 13 6 6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=["svg",s,[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7"}],["path",{d:"M12 6v4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=["svg",s,[["path",{d:"M5 3v16h16"}],["path",{d:"m5 19 6-6"}],["path",{d:"m2 6 3-3 3 3"}],["path",{d:"m18 16 3 3-3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=["svg",s,[["polyline",{points:"5 11 5 5 11 5"}],["polyline",{points:"19 13 19 19 13 19"}],["line",{x1:"5",x2:"19",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=["svg",s,[["polyline",{points:"13 5 19 5 19 11"}],["polyline",{points:"11 19 5 19 5 13"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=["svg",s,[["path",{d:"M11 19H5V13"}],["path",{d:"M19 5L5 19"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=["svg",s,[["path",{d:"M19 13V19H13"}],["path",{d:"M5 5L19 19"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=["svg",s,[["path",{d:"M8 18L12 22L16 18"}],["path",{d:"M12 2V22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=["svg",s,[["polyline",{points:"18 8 22 12 18 16"}],["polyline",{points:"6 8 2 12 6 16"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=["svg",s,[["path",{d:"M6 8L2 12L6 16"}],["path",{d:"M2 12H22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=["svg",s,[["path",{d:"M18 8L22 12L18 16"}],["path",{d:"M2 12H22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=["svg",s,[["path",{d:"M5 11V5H11"}],["path",{d:"M5 5L19 19"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=["svg",s,[["path",{d:"M13 5H19V11"}],["path",{d:"M19 5L5 19"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=["svg",s,[["path",{d:"M8 6L12 2L16 6"}],["path",{d:"M12 2V22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=["svg",s,[["polyline",{points:"8 18 12 22 16 18"}],["polyline",{points:"8 6 12 2 16 6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=["svg",s,[["polyline",{points:"5 9 2 12 5 15"}],["polyline",{points:"9 5 12 2 15 5"}],["polyline",{points:"15 19 12 22 9 19"}],["polyline",{points:"19 9 22 12 19 15"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=["svg",s,[["circle",{cx:"8",cy:"18",r:"4"}],["path",{d:"M12 18V2l7 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=["svg",s,[["circle",{cx:"12",cy:"18",r:"4"}],["path",{d:"M16 18V2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=["svg",s,[["path",{d:"M9 18V5l12-2v13"}],["path",{d:"m9 9 12-2"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=["svg",s,[["path",{d:"M9 18V5l12-2v13"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=["svg",s,[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=["svg",s,[["polygon",{points:"12 2 19 21 12 17 5 21 12 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=["svg",s,[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=["svg",s,[["polygon",{points:"3 11 22 2 13 21 11 13 3 11"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=["svg",s,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=["svg",s,[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"}],["path",{d:"M18 14h-8"}],["path",{d:"M15 18h-5"}],["path",{d:"M10 6h8v4h-8V6Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=["svg",s,[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=["svg",s,[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"}],["path",{d:"M19 10v3.343"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=["svg",s,[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=["svg",s,[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=["svg",s,[["path",{d:"M3 3h6l6 18h6"}],["path",{d:"M14 3h7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=["svg",s,[["circle",{cx:"12",cy:"12",r:"3"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=["svg",s,[["polyline",{points:"7 8 3 12 7 16"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=["svg",s,[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"}],["path",{d:"M12 3v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=["svg",s,[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=["svg",s,[["path",{d:"M16 16h6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=["svg",s,[["path",{d:"M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"}],["path",{d:"m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"}],["line",{x1:"12",x2:"12",y1:"22",y2:"13"}],["path",{d:"M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=["svg",s,[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=["svg",s,[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5"}],["path",{d:"M20.27 17.27 22 19"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=["svg",s,[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["path",{d:"m17 13 5 5m-5 0 5-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=["svg",s,[["path",{d:"m7.5 4.27 9 5.15"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=["svg",s,[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=["svg",s,[["path",{d:"M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z"}],["path",{d:"M6 12V2h12v10"}],["path",{d:"M14 2v4"}],["path",{d:"M10 2v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=["svg",s,[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"}],["path",{d:"M14.5 17.5 4.5 15"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=["svg",s,[["circle",{cx:"13.5",cy:"6.5",r:".5"}],["circle",{cx:"17.5",cy:"10.5",r:".5"}],["circle",{cx:"8.5",cy:"7.5",r:".5"}],["circle",{cx:"6.5",cy:"12.5",r:".5"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=["svg",s,[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}],["path",{d:"m15 8-3 3-3-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 15h1"}],["path",{d:"M19 15h2"}],["path",{d:"M3 15h2"}],["path",{d:"M9 15h1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}],["path",{d:"m9 10 3-3 3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 14v1"}],["path",{d:"M9 19v2"}],["path",{d:"M9 3v2"}],["path",{d:"M9 9v1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m14 9 3 3-3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"9",x2:"9",y1:"3",y2:"21"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"15",x2:"15",y1:"3",y2:"21"}],["path",{d:"m8 9 3 3-3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 14v1"}],["path",{d:"M15 19v2"}],["path",{d:"M15 3v2"}],["path",{d:"M15 9v1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"15",x2:"15",y1:"3",y2:"21"}],["path",{d:"m10 15-3-3 3-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"15",x2:"15",y1:"3",y2:"21"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["path",{d:"m9 16 3-3 3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 9h1"}],["path",{d:"M19 9h2"}],["path",{d:"M3 9h2"}],["path",{d:"M9 9h1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["path",{d:"m15 14-3 3-3-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=["svg",s,[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=["svg",s,[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m5 5 14 14"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.34"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=["svg",s,[["path",{d:"M9 9a3 3 0 1 1 6 0"}],["path",{d:"M12 12v3"}],["path",{d:"M11 15h2"}],["path",{d:"M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3"}],["path",{d:"M12 19v3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=["svg",s,[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3"}],["path",{d:"m2 2 20 20"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=["svg",s,[["path",{d:"M5.8 11.3 2 22l10.7-3.79"}],["path",{d:"M4 3h.01"}],["path",{d:"M22 8h.01"}],["path",{d:"M15 2h.01"}],["path",{d:"M22 20h.01"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=["svg",s,[["path",{d:"M10 15V9"}],["path",{d:"M14 15V9"}],["path",{d:"M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=["svg",s,[["rect",{width:"4",height:"16",x:"6",y:"4"}],["rect",{width:"4",height:"16",x:"14",y:"4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=["svg",s,[["circle",{cx:"11",cy:"4",r:"2"}],["circle",{cx:"18",cy:"8",r:"2"}],["circle",{cx:"20",cy:"16",r:"2"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=["svg",s,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2"}],["path",{d:"M15 14h.01"}],["path",{d:"M9 6h6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=["svg",s,[["path",{d:"M12 20h9"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=["svg",s,[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=["svg",s,[["path",{d:"m12 19 7-7 3 3-7 7-3-3z"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"}],["path",{d:"m2 2 7.586 7.586"}],["circle",{cx:"11",cy:"11",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=["svg",s,[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=["svg",s,[["path",{d:"M12 20h9"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"}],["path",{d:"m15 5 3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=["svg",s,[["path",{d:"m15 5 4 4"}],["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"}],["path",{d:"m8 6 2-2"}],["path",{d:"m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"}],["path",{d:"m18 16 2-2"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=["svg",s,[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"}],["path",{d:"m15 5 4 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=["svg",s,[["path",{d:"M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=["svg",s,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"}],["path",{d:"M9.2 9.2h.01"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"M14.7 14.8h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=["svg",s,[["line",{x1:"19",x2:"5",y1:"5",y2:"19"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=["svg",s,[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=["svg",s,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=["svg",s,[["polyline",{points:"18 2 22 6 18 10"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=["svg",s,[["polyline",{points:"16 2 16 8 22 8"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=["svg",s,[["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=["svg",s,[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=["svg",s,[["polyline",{points:"22 8 22 2 16 2"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=["svg",s,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h10"}],["path",{d:"M10 7v10"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=["svg",s,[["line",{x1:"9",x2:"9",y1:"4",y2:"20"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=["svg",s,[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"}],["path",{d:"M2 14h20"}],["path",{d:"M6 14v4"}],["path",{d:"M10 14v4"}],["path",{d:"M14 14v4"}],["path",{d:"M18 14v4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=["svg",s,[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=["svg",s,[["path",{d:"M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3"}],["rect",{width:"10",height:"7",x:"12",y:"13.5",ry:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=["svg",s,[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=["svg",s,[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1"}],["path",{d:"M16 11h0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17"}],["path",{d:"M12 7v10"}],["path",{d:"M16 7v10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=["svg",s,[["path",{d:"M13 4v16"}],["path",{d:"M17 4v16"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=["svg",s,[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"}],["path",{d:"m8.5 8.5 7 7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=["svg",s,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["line",{x1:"12",x2:"12",y1:"17",y2:"22"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12"}],["path",{d:"M15 9.34V6h1a2 2 0 0 0 0-4H7.89"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=["svg",s,[["line",{x1:"12",x2:"12",y1:"17",y2:"22"}],["path",{d:"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=["svg",s,[["path",{d:"m2 22 1-1h3l9-9"}],["path",{d:"M3 21v-3l9-9"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=["svg",s,[["path",{d:"M15 11h.01"}],["path",{d:"M11 15h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=["svg",s,[["path",{d:"M2 22h20"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=["svg",s,[["path",{d:"M2 22h20"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=["svg",s,[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["polygon",{points:"10 8 16 12 10 16 10 8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 8 6 4-6 4Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=["svg",s,[["polygon",{points:"5 3 19 12 5 21 5 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=["svg",s,[["path",{d:"M9 2v6"}],["path",{d:"M15 2v6"}],["path",{d:"M12 17v5"}],["path",{d:"M5 8h14"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0v0Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=["svg",s,[["path",{d:"m13 2-2 2.5h3L12 7"}],["path",{d:"M10 14v-3"}],["path",{d:"M14 14v-3"}],["path",{d:"M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z"}],["path",{d:"M12 22v-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=["svg",s,[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"m2 22 3-3"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m18 3-4 4h6l-4 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=["svg",s,[["path",{d:"M12 22v-5"}],["path",{d:"M9 8V2"}],["path",{d:"M15 8V2"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=["svg",s,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=["svg",s,[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"}],["path",{d:"M18 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=["svg",s,[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"}],["polyline",{points:"8 10 12 14 16 10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=["svg",s,[["circle",{cx:"12",cy:"11",r:"1"}],["path",{d:"M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z"}],["path",{d:"M8 14a5 5 0 1 1 8 0"}],["path",{d:"M17 18.5a9 9 0 1 0-10 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=["svg",s,[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"}],["path",{d:"M6 6v8"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=["svg",s,[["path",{d:"M22 14a8 8 0 0 1-8 8"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=["svg",s,[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"}],["path",{d:"M10 22 9 8"}],["path",{d:"m14 22 1-14"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=["svg",s,[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"}],["path",{d:"m22 22-5.5-5.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=["svg",s,[["path",{d:"M18 7c0-5.333-8-5.333-8 0"}],["path",{d:"M10 7v14"}],["path",{d:"M6 21h12"}],["path",{d:"M6 13h10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 12V6"}],["path",{d:"M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=["svg",s,[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68"}],["path",{d:"M12 2v4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 7v5"}],["path",{d:"M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=["svg",s,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=["svg",s,[["path",{d:"M2 3h20"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"}],["path",{d:"m7 21 5-5 5 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=["svg",s,[["polyline",{points:"6 9 6 2 18 2 18 9"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["rect",{width:"12",height:"8",x:"6",y:"14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=["svg",s,[["path",{d:"M5 7 3 5"}],["path",{d:"M9 6V3"}],["path",{d:"m13 7 2-2"}],["circle",{cx:"9",cy:"13",r:"3"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"}],["path",{d:"M16 16h2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=["svg",s,[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=["svg",s,[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"}],["path",{d:"M12 2v20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=["svg",s,[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3"}],["path",{d:"M21 21v.01"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7"}],["path",{d:"M3 12h.01"}],["path",{d:"M12 3h.01"}],["path",{d:"M12 16v.01"}],["path",{d:"M16 12h1"}],["path",{d:"M21 12v.01"}],["path",{d:"M12 21v-1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=["svg",s,[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=["svg",s,[["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1.93 1.93 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1c-1.7 0-3 1.3-3 3"}],["path",{d:"M7.61 12.53a3 3 0 1 0-1.6 4.3"}],["path",{d:"M13 16a3 3 0 0 1 2.24 5"}],["path",{d:"M18 12h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=["svg",s,[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}],["path",{d:"M4 6h.01"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"}],["path",{d:"M12 18h.01"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"m13.41 10.59 5.66-5.66"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=["svg",s,[["path",{d:"M12 12h0.01"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=["svg",s,[["path",{d:"M5 16v2"}],["path",{d:"M19 16v2"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2"}],["path",{d:"M18 12h0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=["svg",s,[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"}],["circle",{cx:"12",cy:"9",r:"2"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1"}],["path",{d:"M9.5 18h5"}],["path",{d:"m8 22 4-11 4 11"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=["svg",s,[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=["svg",s,[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82"}],["circle",{cx:"19",cy:"19",r:"2"}],["path",{d:"m13.41 13.41 4.18 4.18"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=["svg",s,[["path",{d:"M5 15h14"}],["path",{d:"M5 9h14"}],["path",{d:"m14 20-5-5 6-6-5-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=["svg",s,[["path",{d:"M22 17a10 10 0 0 0-20 0"}],["path",{d:"M6 17a6 6 0 0 1 12 0"}],["path",{d:"M10 17a2 2 0 0 1 4 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=["svg",s,[["path",{d:"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4"}],["path",{d:"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"}],["path",{d:"M13.2 18a3 3 0 0 0-2.2-5"}],["path",{d:"M13 22H4a2 2 0 0 1 0-4h12"}],["path",{d:"M16 9h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=["svg",s,[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=["svg",s,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17V7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=["svg",s,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=["svg",s,[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=["svg",s,[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"}],["path",{d:"m14 16-3 3 3 3"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=["svg",s,[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=["svg",s,[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=["svg",s,[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=["svg",s,[["path",{d:"M3 2v6h6"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8"}],["path",{d:"M21 22v-6h-6"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=["svg",s,[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"}],["path",{d:"M16 16h5v5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=["svg",s,[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"}],["path",{d:"M8 16H3v5"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M22 22 2 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=["svg",s,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=["svg",s,[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=["svg",s,[["path",{d:"M17 3v10"}],["path",{d:"m12.67 5.5 8.66 5"}],["path",{d:"m12.67 10.5 8.66-5"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=["svg",s,[["path",{d:"M4 7V4h16v3"}],["path",{d:"M5 20h6"}],["path",{d:"M13 4 8 20"}],["path",{d:"m15 15 5 5"}],["path",{d:"m20 15-5 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=["svg",s,[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}],["path",{d:"M11 10h1v4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=["svg",s,[["path",{d:"m2 9 3-3 3 3"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6"}],["path",{d:"m22 15-3 3-3-3"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=["svg",s,[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=["svg",s,[["path",{d:"M14 4c0-1.1.9-2 2-2"}],["path",{d:"M20 2c1.1 0 2 .9 2 2"}],["path",{d:"M22 8c0 1.1-.9 2-2 2"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"}],["path",{d:"M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=["svg",s,[["path",{d:"M14 4c0-1.1.9-2 2-2"}],["path",{d:"M20 2c1.1 0 2 .9 2 2"}],["path",{d:"M22 8c0 1.1-.9 2-2 2"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=["svg",s,[["polyline",{points:"7 17 2 12 7 7"}],["polyline",{points:"12 17 7 12 12 7"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=["svg",s,[["polyline",{points:"9 17 4 12 9 7"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=["svg",s,[["polygon",{points:"11 19 2 12 11 5 11 19"}],["polygon",{points:"22 19 13 12 22 5 22 19"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=["svg",s,[["path",{d:"M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44"}],["path",{d:"M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z"}],["path",{d:"m9.35 14.53 2.64-3.31"}],["path",{d:"m11.97 18.04 2.99 4 3.54-2.54-3.93-5"}],["path",{d:"M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=["svg",s,[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=["svg",s,[["polyline",{points:"3.5 2 6.5 12.5 18 12.5"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=["svg",s,[["path",{d:"M6 19V5"}],["path",{d:"M10 19V6.8"}],["path",{d:"M14 19v-7.8"}],["path",{d:"M18 5v4"}],["path",{d:"M18 19v-6"}],["path",{d:"M22 19V9"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=["svg",s,[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=["svg",s,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=["svg",s,[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=["svg",s,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3"}],["path",{d:"M15 5h-4.3"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=["svg",s,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=["svg",s,[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6.01 18H6"}],["path",{d:"M10.01 18H10"}],["path",{d:"M15 10v4"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=["svg",s,[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=["svg",s,[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"}],["path",{d:"m14.5 12.5 2-2"}],["path",{d:"m11.5 9.5 2-2"}],["path",{d:"m8.5 6.5 2-2"}],["path",{d:"m17.5 15.5 2-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=["svg",s,[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18"}],["path",{d:"M6 15h8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=["svg",s,[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"}],["path",{d:"M21 14 10 2 3 14h18Z"}],["path",{d:"M10 2v16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=["svg",s,[["path",{d:"M7 21h10"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"}],["path",{d:"m13 12 4-4"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=["svg",s,[["path",{d:"M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3"}],["path",{d:"M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83"}],["path",{d:"m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z"}],["path",{d:"M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=["svg",s,[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z"}],["path",{d:"m9 15 3-3"}],["path",{d:"M17 13a6 6 0 0 0-6-6"}],["path",{d:"M21 13A10 10 0 0 0 11 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=["svg",s,[["path",{d:"M13 7 9 3 5 7l4 4"}],["path",{d:"m17 11 4 4-4 4-4-4"}],["path",{d:"m8 12 4 4 6-6-4-4Z"}],["path",{d:"m16 8 3-3"}],["path",{d:"M9 21a6 6 0 0 0-6-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=["svg",s,[["path",{d:"M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z"}],["path",{d:"M10 2v4h6"}],["path",{d:"M18 18v-7h-8v7"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=["svg",s,[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}],["polyline",{points:"17 21 17 13 7 13 7 21"}],["polyline",{points:"7 3 7 8 15 8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=["svg",s,[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M5 7v12h12"}],["path",{d:"m5 19 6-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=["svg",s,[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"M7 21h10"}],["path",{d:"M12 3v18"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=["svg",s,[["path",{d:"M21 3 9 15"}],["path",{d:"M12 3H3v18h18v-9"}],["path",{d:"M16 3h5v5"}],["path",{d:"M14 15H9v-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=["svg",s,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 7v10"}],["path",{d:"M12 7v10"}],["path",{d:"M17 7v10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=["svg",s,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=["svg",s,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 9h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=["svg",s,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 12h10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=["svg",s,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=["svg",s,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 8h8"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=["svg",s,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=["svg",s,[["circle",{cx:"7.5",cy:"7.5",r:".5"}],["circle",{cx:"18.5",cy:"5.5",r:".5"}],["circle",{cx:"11.5",cy:"11.5",r:".5"}],["circle",{cx:"7.5",cy:"16.5",r:".5"}],["circle",{cx:"17.5",cy:"14.5",r:".5"}],["path",{d:"M3 3v18h18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=["svg",s,[["circle",{cx:"12",cy:"10",r:"1"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"}],["path",{d:"M6 17v.01"}],["path",{d:"M6 13v.01"}],["path",{d:"M18 17v.01"}],["path",{d:"M18 13v.01"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=["svg",s,[["path",{d:"m4 6 8-4 8 4"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"}],["path",{d:"M18 5v17"}],["path",{d:"M6 5v17"}],["circle",{cx:"12",cy:"9",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=["svg",s,[["path",{d:"M5.42 9.42 8 12"}],["circle",{cx:"4",cy:"8",r:"2"}],["path",{d:"m14 6-8.58 8.58"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"M10.8 14.8 14 18"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=["svg",s,[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"}],["path",{d:"M10 22H8"}],["path",{d:"M16 22h-2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=["svg",s,[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=["svg",s,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M8.12 8.12 12 12"}],["path",{d:"M20 4 8.12 15.88"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M14.8 14.8 20 20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=["svg",s,[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=["svg",s,[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m17 8 5-5"}],["path",{d:"M17 3h5v5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=["svg",s,[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M15 8h-5"}],["path",{d:"M15 12h-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=["svg",s,[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=["svg",s,[["path",{d:"m8 11 2 2 4-4"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=["svg",s,[["path",{d:"m9 9-2 2 2 2"}],["path",{d:"m13 13 2-2-2-2"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=["svg",s,[["path",{d:"m13.5 8.5-5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=["svg",s,[["path",{d:"m13.5 8.5-5 5"}],["path",{d:"m8.5 8.5 5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=["svg",s,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=["svg",s,[["path",{d:"m3 3 3 9-3 9 19-9Z"}],["path",{d:"M6 12h16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=["svg",s,[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=["svg",s,[["path",{d:"m22 2-7 20-4-9-9-4Z"}],["path",{d:"M22 2 11 13"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=["svg",s,[["line",{x1:"3",x2:"21",y1:"12",y2:"12"}],["polyline",{points:"8 8 12 4 16 8"}],["polyline",{points:"16 16 12 20 8 16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=["svg",s,[["line",{x1:"12",x2:"12",y1:"3",y2:"21"}],["polyline",{points:"8 8 4 12 8 16"}],["polyline",{points:"16 16 20 12 16 8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=["svg",s,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m15.7 13.4-.9-.3"}],["path",{d:"m9.2 10.9-.9-.3"}],["path",{d:"m10.6 15.7.3-.9"}],["path",{d:"m13.6 15.7-.4-1"}],["path",{d:"m10.8 9.3-.4-1"}],["path",{d:"m8.3 13.6 1-.4"}],["path",{d:"m14.7 10.8 1-.4"}],["path",{d:"m13.4 8.3-.3.9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=["svg",s,[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m13 6-4 6h6l-4 6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=["svg",s,[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"}],["path",{d:"M6 18h.01"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=["svg",s,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=["svg",s,[["path",{d:"M20 7h-9"}],["path",{d:"M14 17H5"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=["svg",s,[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=["svg",s,[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=["svg",s,[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=["svg",s,[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["polyline",{points:"16 6 12 2 8 6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=["svg",s,[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=["svg",s,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=["svg",s,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"m4 5 14 12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=["svg",s,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=["svg",s,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"M8 11h.01"}],["path",{d:"M12 11h.01"}],["path",{d:"M16 11h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=["svg",s,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"M12 22V2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=["svg",s,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"M8 11h8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=["svg",s,[["path",{d:"M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4.7 4.7 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=["svg",s,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"M8 11h8"}],["path",{d:"M12 15V7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=["svg",s,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=["svg",s,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"m14.5 9-5 5"}],["path",{d:"m9.5 9 5 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=["svg",s,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=["svg",s,[["circle",{cx:"12",cy:"12",r:"8"}],["path",{d:"M12 2v7.5"}],["path",{d:"m19 5-5.23 5.23"}],["path",{d:"M22 12h-7.5"}],["path",{d:"m19 19-5.23-5.23"}],["path",{d:"M12 14.5V22"}],["path",{d:"M10.23 13.77 5 19"}],["path",{d:"M9.5 12H2"}],["path",{d:"M10.23 10.23 5 5"}],["circle",{cx:"12",cy:"12",r:"2.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=["svg",s,[["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"}],["path",{d:"M12 10v4"}],["path",{d:"M12 2v3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=["svg",s,[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=["svg",s,[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}],["path",{d:"M3 6h18"}],["path",{d:"M16 10a4 4 0 0 1-8 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=["svg",s,[["path",{d:"m5 11 4-7"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4"}],["path",{d:"m9 11 1 9"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m15 11-1 9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=["svg",s,[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=["svg",s,[["path",{d:"M2 22v-5l5-5 5 5-5 5z"}],["path",{d:"M9.5 14.5 16 8"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=["svg",s,[["path",{d:"m4 4 2.5 2.5"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7"}],["path",{d:"M15 5 5 15"}],["path",{d:"M14 17v.01"}],["path",{d:"M10 16v.01"}],["path",{d:"M13 13v.01"}],["path",{d:"M16 10v.01"}],["path",{d:"M11 20v.01"}],["path",{d:"M17 14v.01"}],["path",{d:"M20 11v.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=["svg",s,[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=["svg",s,[["path",{d:"M12 22v-7l-2-2"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z"}],["path",{d:"m14 14-2 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=["svg",s,[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"}],["path",{d:"m18 14 4 4-4 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=["svg",s,[["path",{d:"M18 7V4H6l6 8-6 8h12v-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=["svg",s,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=["svg",s,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=["svg",s,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=["svg",s,[["path",{d:"M2 20h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=["svg",s,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}],["path",{d:"M22 4v16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=["svg",s,[["path",{d:"M10 9H4L2 7l2-2h6"}],["path",{d:"M14 5h6l2 2-2 2h-6"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18"}],["path",{d:"M8 22h8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=["svg",s,[["path",{d:"M12 3v3"}],["path",{d:"M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z"}],["path",{d:"M12 13v8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=["svg",s,[["path",{d:"M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z"}],["path",{d:"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z"}],["path",{d:"M21 12h1"}],["path",{d:"M18.5 4.5 18 5"}],["path",{d:"M2 12h1"}],["path",{d:"M12 2v1"}],["path",{d:"m4.929 4.929.707.707"}],["path",{d:"M12 12v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=["svg",s,[["polygon",{points:"19 20 9 12 19 4 19 20"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=["svg",s,[["polygon",{points:"5 4 15 12 5 20 5 4"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=["svg",s,[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["path",{d:"M8 20v2h8v-2"}],["path",{d:"m12.5 17-.5-1-.5 1h1z"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=["svg",s,[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=["svg",s,[["path",{d:"M22 2 2 22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=["svg",s,[["path",{d:"m8 14-6 6h9v-3"}],["path",{d:"M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=["svg",s,[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=["svg",s,[["line",{x1:"4",x2:"4",y1:"21",y2:"14"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=["svg",s,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12.667 8 10 12h4l-2.667 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=["svg",s,[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=["svg",s,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=["svg",s,[["path",{d:"M22 11v1a10 10 0 1 1-9-10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}],["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=["svg",s,[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}],["circle",{cx:"10",cy:"13",r:"8"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}],["path",{d:"M18 3 19.1 5.2"}],["path",{d:"M22 3 20.9 5.2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=["svg",s,[["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"m20 16-4-4 4-4"}],["path",{d:"m4 8 4 4-4 4"}],["path",{d:"m16 4-4 4-4-4"}],["path",{d:"m8 20 4-4 4 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=["svg",s,[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"}],["path",{d:"M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"}],["path",{d:"M4 18v2"}],["path",{d:"M20 18v2"}],["path",{d:"M12 4v9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=["svg",s,[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M7 21h10"}],["path",{d:"M19.5 12 22 6"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=["svg",s,[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=["svg",s,[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"}],["path",{d:"M12 18v4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=["svg",s,[["path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=["svg",s,[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}],["path",{d:"M5 3v4"}],["path",{d:"M19 17v4"}],["path",{d:"M3 5h4"}],["path",{d:"M17 19h4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=["svg",s,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M12 6h.01"}],["circle",{cx:"12",cy:"14",r:"4"}],["path",{d:"M12 14h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=["svg",s,[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=["svg",s,[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=["svg",s,[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"m16 20 2 2 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=["svg",s,[["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=["svg",s,[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=["svg",s,[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=["svg",s,[["path",{d:"M16 3h5v5"}],["path",{d:"M8 3H3v5"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"}],["path",{d:"m15 9 6-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=["svg",s,[["path",{d:"M3 3h.01"}],["path",{d:"M7 5h.01"}],["path",{d:"M11 7h.01"}],["path",{d:"M3 7h.01"}],["path",{d:"M7 9h.01"}],["path",{d:"M3 11h.01"}],["rect",{width:"4",height:"4",x:"15",y:"5"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"}],["path",{d:"m13 14 8-2"}],["path",{d:"m13 19 8-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=["svg",s,[["path",{d:"M7 20h10"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8.5 14 7-4"}],["path",{d:"m8.5 10 7 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m10 10-2 2 2 2"}],["path",{d:"m14 14 2-2-2-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=["svg",s,[["path",{d:"m10 10-2 2 2 2"}],["path",{d:"m14 14 2-2-2-2"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=["svg",s,[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=["svg",s,[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=["svg",s,[["path",{d:"M18 21a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"11",r:"4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=["svg",s,[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=["svg",s,[["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"}],["path",{d:"M16 20c0-1.7 1.3-3 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"}],["path",{d:"M15.2 22a3 3 0 0 0-2.2-5"}],["path",{d:"M18 13h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=["svg",s,[["path",{d:"M5 22h14"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=["svg",s,[["path",{d:"M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=["svg",s,[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=["svg",s,[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=["svg",s,[["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["polygon",{points:"14,20 4,12 14,4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=["svg",s,[["line",{x1:"6",x2:"6",y1:"4",y2:"20"}],["polygon",{points:"10,4 20,12 10,20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=["svg",s,[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"}],["circle",{cx:"20",cy:"10",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=["svg",s,[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"}],["path",{d:"M15 3v6h6"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1"}],["path",{d:"M8 13h0"}],["path",{d:"M16 13h0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=["svg",s,[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"}],["path",{d:"M15 3v6h6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{width:"6",height:"6",x:"9",y:"9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=["svg",s,[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"}],["path",{d:"M2 7h20"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=["svg",s,[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=["svg",s,[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=["svg",s,[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=["svg",s,[["path",{d:"m4 5 8 8"}],["path",{d:"m12 5-8 8"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=["svg",s,[["path",{d:"M7 13h4"}],["path",{d:"M15 13h2"}],["path",{d:"M7 9h2"}],["path",{d:"M13 9h4"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=["svg",s,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 4h.01"}],["path",{d:"M20 12h.01"}],["path",{d:"M12 20h.01"}],["path",{d:"M4 12h.01"}],["path",{d:"M17.657 6.343h.01"}],["path",{d:"M17.657 17.657h.01"}],["path",{d:"M6.343 17.657h.01"}],["path",{d:"M6.343 6.343h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=["svg",s,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 3v1"}],["path",{d:"M12 20v1"}],["path",{d:"M3 12h1"}],["path",{d:"M20 12h1"}],["path",{d:"m18.364 5.636-.707.707"}],["path",{d:"m6.343 17.657-.707.707"}],["path",{d:"m5.636 5.636.707.707"}],["path",{d:"m17.657 17.657.707.707"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=["svg",s,[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.9 4.9 1.4 1.4"}],["path",{d:"m17.7 17.7 1.4 1.4"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.3 17.7-1.4 1.4"}],["path",{d:"m19.1 4.9-1.4 1.4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=["svg",s,[["path",{d:"M10 9a3 3 0 1 0 0 6"}],["path",{d:"M2 12h1"}],["path",{d:"M14 21V3"}],["path",{d:"M10 4V3"}],["path",{d:"M10 21v-1"}],["path",{d:"m3.64 18.36.7-.7"}],["path",{d:"m4.34 6.34-.7-.7"}],["path",{d:"M14 12h8"}],["path",{d:"m17 4-3 3"}],["path",{d:"m14 17 3 3"}],["path",{d:"m21 15-3-3 3-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=["svg",s,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=["svg",s,[["path",{d:"M12 2v8"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=["svg",s,[["path",{d:"M12 10V2"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m16 6-4 4-4-4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=["svg",s,[["path",{d:"m4 19 8-8"}],["path",{d:"m12 19-8-8"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=["svg",s,[["path",{d:"M10 21V3h8"}],["path",{d:"M6 16h9"}],["path",{d:"M10 9.5h7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=["svg",s,[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m18 22-3-3 3-3"}],["path",{d:"m6 2 3 3-3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=["svg",s,[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=["svg",s,[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=["svg",s,[["path",{d:"m18 2 4 4"}],["path",{d:"m17 7 3-3"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}],["path",{d:"m9 11 4 4"}],["path",{d:"m5 19-3 3"}],["path",{d:"m14 4 6 6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=["svg",s,[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=["svg",s,[["path",{d:"M15 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=["svg",s,[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=["svg",s,[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"}],["path",{d:"M8 18h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=["svg",s,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=["svg",s,[["circle",{cx:"7",cy:"7",r:"5"}],["circle",{cx:"17",cy:"17",r:"5"}],["path",{d:"M12 17h10"}],["path",{d:"m3.46 10.54 7.08-7.08"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=["svg",s,[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"}],["path",{d:"M7 7h.01"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=["svg",s,[["path",{d:"M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"}],["path",{d:"M6 9.01V9"}],["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=["svg",s,[["path",{d:"M4 4v16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=["svg",s,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=["svg",s,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=["svg",s,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=["svg",s,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}],["path",{d:"M22 6 2 18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=["svg",s,[["circle",{cx:"17",cy:"4",r:"2"}],["path",{d:"M15.59 5.41 5.41 15.59"}],["circle",{cx:"4",cy:"17",r:"2"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=["svg",s,[["circle",{cx:"4",cy:"4",r:"2"}],["path",{d:"m14 5 3-3 3 3"}],["path",{d:"m14 10 3-3 3 3"}],["path",{d:"M17 14V2"}],["path",{d:"M17 14H7l-5 8h20Z"}],["path",{d:"M8 14v8"}],["path",{d:"m9 14 5 8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=["svg",s,[["path",{d:"M3.5 21 14 3"}],["path",{d:"M20.5 21 10 3"}],["path",{d:"M15.5 21 12 15l-3.5 6"}],["path",{d:"M2 21h20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=["svg",s,[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=["svg",s,[["polyline",{points:"4 17 10 11 4 5"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=["svg",s,[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3"}],["path",{d:"m16 2 6 6"}],["path",{d:"M12 16H4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=["svg",s,[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14.5 16h-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=["svg",s,[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2"}],["path",{d:"M3 2h7"}],["path",{d:"M14 2h7"}],["path",{d:"M9 16H4"}],["path",{d:"M20 16h-5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=["svg",s,[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"}],["path",{d:"M9 7v10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=["svg",s,[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=["svg",s,[["path",{d:"M17 6H3"}],["path",{d:"M21 12H8"}],["path",{d:"M21 18H8"}],["path",{d:"M3 12v6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=["svg",s,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=["svg",s,[["path",{d:"M17 6.1H3"}],["path",{d:"M21 12.1H3"}],["path",{d:"M15.1 18H3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=["svg",s,[["path",{d:"M2 10s3-3 3-8"}],["path",{d:"M22 10s-3-3-3-8"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8"}],["path",{d:"M2 10s2 2 2 5"}],["path",{d:"M22 10s-2 2-2 5"}],["path",{d:"M8 15h8"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=["svg",s,[["path",{d:"M2 12h10"}],["path",{d:"M9 4v16"}],["path",{d:"m3 9 3 3-3 3"}],["path",{d:"M12 6 9 9 6 6"}],["path",{d:"m6 18 3-3 1.5 1.5"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=["svg",s,[["path",{d:"M12 9a4 4 0 0 0-2 7.5"}],["path",{d:"M12 3v2"}],["path",{d:"m6.6 18.4-1.4 1.4"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}],["path",{d:"M4 13H2"}],["path",{d:"M6.34 7.34 4.93 5.93"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=["svg",s,[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=["svg",s,[["path",{d:"M17 14V2"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=["svg",s,[["path",{d:"M7 10v12"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=["svg",s,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M13 5v2"}],["path",{d:"M13 17v2"}],["path",{d:"M13 11v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=["svg",s,[["path",{d:"M10 2h4"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M12 12v-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=["svg",s,[["path",{d:"M10 2h4"}],["path",{d:"M12 14v-4"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"}],["path",{d:"M9 17H4v5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=["svg",s,[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=["svg",s,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"8",cy:"12",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=["svg",s,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"16",cy:"12",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=["svg",s,[["path",{d:"M21 4H3"}],["path",{d:"M18 8H6"}],["path",{d:"M19 12H9"}],["path",{d:"M16 16h-6"}],["path",{d:"M11 20H9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=["svg",s,[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=["svg",s,[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16"}],["path",{d:"M2 14h12"}],["path",{d:"M22 14h-2"}],["path",{d:"M12 20v-6"}],["path",{d:"m2 2 20 20"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=["svg",s,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M12 20v-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=["svg",s,[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"}],["path",{d:"M8 13v9"}],["path",{d:"M16 22v-9"}],["path",{d:"m9 6 1 7"}],["path",{d:"m15 6-1 7"}],["path",{d:"M12 6V2"}],["path",{d:"M13 2h-2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=["svg",s,[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=["svg",s,[["path",{d:"M3 4h9l1 7"}],["path",{d:"M4 11V4"}],["path",{d:"M8 10V4"}],["path",{d:"M18 5c-.6 0-1 .4-1 1v5.6"}],["path",{d:"m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1"}],["circle",{cx:"7",cy:"15",r:".5"}],["circle",{cx:"7",cy:"15",r:"5"}],["path",{d:"M16 18h-5"}],["circle",{cx:"18",cy:"18",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=["svg",s,[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=["svg",s,[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"}],["path",{d:"M10 15h.01"}],["path",{d:"M14 15h.01"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"}],["path",{d:"m9 19-2 3"}],["path",{d:"m15 19 2 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=["svg",s,[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1"}],["path",{d:"m9 15-1-1"}],["path",{d:"m15 15 1-1"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"}],["path",{d:"m8 19-2 3"}],["path",{d:"m16 19 2 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=["svg",s,[["path",{d:"M2 17 17 2"}],["path",{d:"m2 14 8 8"}],["path",{d:"m5 11 8 8"}],["path",{d:"m8 8 8 8"}],["path",{d:"m11 5 8 8"}],["path",{d:"m14 2 8 8"}],["path",{d:"M7 22 22 7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=["svg",s,[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M12 3v8"}],["path",{d:"m8 19-2 3"}],["path",{d:"m18 22-2-3"}],["path",{d:"M8 15h0"}],["path",{d:"M16 15h0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=["svg",s,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=["svg",s,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=["svg",s,[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"}],["path",{d:"M12 19v3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=["svg",s,[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"}],["path",{d:"M12 22v-3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=["svg",s,[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"}],["path",{d:"M7 16v6"}],["path",{d:"M13 19v3"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["rect",{width:"3",height:"9",x:"7",y:"7"}],["rect",{width:"3",height:"5",x:"14",y:"7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=["svg",s,[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}],["polyline",{points:"16 17 22 17 22 11"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=["svg",s,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=["svg",s,[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=["svg",s,[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=["svg",s,[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"}],["path",{d:"M4 22h16"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=["svg",s,[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"}],["circle",{cx:"7",cy:"18",r:"2"}],["path",{d:"M15 18H9"}],["circle",{cx:"17",cy:"18",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=["svg",s,[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"}],["path",{d:"M4.82 7.9 8 10"}],["path",{d:"M15.18 7.9 12 10"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=["svg",s,[["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=["svg",s,[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2"}],["polyline",{points:"17 2 12 7 7 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=["svg",s,[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=["svg",s,[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=["svg",s,[["polyline",{points:"4 7 4 4 20 4 20 7"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=["svg",s,[["path",{d:"M12 2v1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=["svg",s,[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0"}],["path",{d:"M12 2v1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=["svg",s,[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=["svg",s,[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=["svg",s,[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=["svg",s,[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=["svg",s,[["path",{d:"M16 12h6"}],["path",{d:"M8 12H2"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 15 3-3-3-3"}],["path",{d:"m5 9-3 3 3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=["svg",s,[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m15 5-3-3-3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=["svg",s,[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=["svg",s,[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=["svg",s,[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=["svg",s,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=["svg",s,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=["svg",s,[["path",{d:"m19 5 3-3"}],["path",{d:"m2 22 3-3"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=["svg",s,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M12 12v9"}],["path",{d:"m16 16-4-4-4 4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=["svg",s,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"17 8 12 3 7 8"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=["svg",s,[["circle",{cx:"10",cy:"7",r:"1"}],["circle",{cx:"4",cy:"20",r:"1"}],["path",{d:"M4.7 19.3 19 5"}],["path",{d:"m21 3-3 1 2 2Z"}],["path",{d:"M9.26 7.68 5 12l2 5"}],["path",{d:"m10 14 5 2 3.5-3.5"}],["path",{d:"m18 12 1-1 1 1-1 1Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=["svg",s,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["polyline",{points:"16 11 18 13 22 9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=["svg",s,[["circle",{cx:"18",cy:"15",r:"3"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2"}],["path",{d:"m21.7 16.4-.9-.3"}],["path",{d:"m15.2 13.9-.9-.3"}],["path",{d:"m16.6 18.7.3-.9"}],["path",{d:"m19.1 12.2.3-.9"}],["path",{d:"m19.6 18.7-.4-1"}],["path",{d:"m16.8 12.3-.4-1"}],["path",{d:"m14.3 16.6 1-.4"}],["path",{d:"m20.7 13.8 1-.4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=["svg",s,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=["svg",s,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=["svg",s,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=["svg",s,[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"10",cy:"8",r:"5"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m19.5 14.3-.4.9"}],["path",{d:"m16.9 20.8-.4.9"}],["path",{d:"m21.7 19.5-.9-.4"}],["path",{d:"m15.2 16.9-.9-.4"}],["path",{d:"m21.7 16.5-.9.4"}],["path",{d:"m15.2 19.1-.9.4"}],["path",{d:"m19.5 21.7-.4-.9"}],["path",{d:"m16.9 15.2-.4-.9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=["svg",s,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 19h-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=["svg",s,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M19 16v6"}],["path",{d:"M22 19h-6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=["svg",s,[["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.9-1.9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=["svg",s,[["path",{d:"M2 21a8 8 0 0 1 11.873-7"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m17 17 5 5"}],["path",{d:"m22 17-5 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=["svg",s,[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=["svg",s,[["circle",{cx:"10",cy:"7",r:"4"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2"}],["circle",{cx:"17",cy:"17",r:"3"}],["path",{d:"m21 21-1.9-1.9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=["svg",s,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=["svg",s,[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=["svg",s,[["path",{d:"M18 21a8 8 0 0 0-16 0"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=["svg",s,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=["svg",s,[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"}],["path",{d:"m2.1 21.8 6.4-6.3"}],["path",{d:"m19 5-7 7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=["svg",s,[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=["svg",s,[["path",{d:"M12 2v20"}],["path",{d:"M2 5h20"}],["path",{d:"M3 3v2"}],["path",{d:"M7 3v2"}],["path",{d:"M17 3v2"}],["path",{d:"M21 3v2"}],["path",{d:"m19 5-7 7-7-7"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=["svg",s,[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=["svg",s,[["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"}],["path",{d:"M16 8c4 0 6-2 6-6-4 0-6 2-6 6"}],["path",{d:"M17.41 3.6a10 10 0 1 0 3 3"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=["svg",s,[["path",{d:"M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"}],["path",{d:"M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z"}],["path",{d:"M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=["svg",s,[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=["svg",s,[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=["svg",s,[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=["svg",s,[["path",{d:"m22 8-6 4 6 4V8Z"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=["svg",s,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 8h20"}],["circle",{cx:"8",cy:"14",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"14",r:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=["svg",s,[["path",{d:"M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"}],["path",{d:"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=["svg",s,[["circle",{cx:"6",cy:"12",r:"4"}],["circle",{cx:"18",cy:"12",r:"4"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=["svg",s,[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=["svg",s,[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=["svg",s,[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=["svg",s,[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=["svg",s,[["path",{d:"m9 12 2 2 4-4"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"}],["path",{d:"M22 19H2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=["svg",s,[["path",{d:"M17 14h.01"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=["svg",s,[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=["svg",s,[["circle",{cx:"8",cy:"9",r:"2"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=["svg",s,[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"}],["path",{d:"m14 7 3 3"}],["path",{d:"M5 6v4"}],["path",{d:"M19 14v4"}],["path",{d:"M10 2v2"}],["path",{d:"M7 8H3"}],["path",{d:"M21 16h-4"}],["path",{d:"M11 3H9"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=["svg",s,[["path",{d:"M15 4V2"}],["path",{d:"M15 16v-2"}],["path",{d:"M8 9h2"}],["path",{d:"M20 9h2"}],["path",{d:"M17.8 11.8 19 13"}],["path",{d:"M15 9h0"}],["path",{d:"M17.8 6.2 19 5"}],["path",{d:"m3 21 9-9"}],["path",{d:"M12.2 6.2 11 5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=["svg",s,[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"}],["path",{d:"M6 18h12"}],["path",{d:"M6 14h12"}],["rect",{width:"12",height:"12",x:"6",y:"10"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=["svg",s,[["circle",{cx:"12",cy:"12",r:"6"}],["polyline",{points:"12 10 12 12 13 13"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=["svg",s,[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=["svg",s,[["circle",{cx:"12",cy:"4.5",r:"2.5"}],["path",{d:"m10.2 6.3-3.9 3.9"}],["circle",{cx:"4.5",cy:"12",r:"2.5"}],["path",{d:"M7 12h10"}],["circle",{cx:"19.5",cy:"12",r:"2.5"}],["path",{d:"m13.8 17.7 3.9-3.9"}],["circle",{cx:"12",cy:"19.5",r:"2.5"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=["svg",s,[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=["svg",s,[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=["svg",s,[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=["svg",s,[["path",{d:"m2 22 10-10"}],["path",{d:"m16 8-1.17 1.17"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=["svg",s,[["path",{d:"M2 22 16 8"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=["svg",s,[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=["svg",s,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0"}],["path",{d:"M2 8.82a15 15 0 0 1 4.17-2.65"}],["path",{d:"M10.66 5c4.01-.36 8.14.9 11.34 3.76"}],["path",{d:"M16.85 11.25a10 10 0 0 1 2.22 1.68"}],["path",{d:"M5 13a10 10 0 0 1 5.24-2.76"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=["svg",s,[["path",{d:"M5 13a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=["svg",s,[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=["svg",s,[["path",{d:"M8 22h8"}],["path",{d:"M7 10h3m7 0h-1.343"}],["path",{d:"M12 15v7"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=["svg",s,[["path",{d:"M8 22h8"}],["path",{d:"M7 10h10"}],["path",{d:"M12 15v7"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=["svg",s,[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=["svg",s,[["line",{x1:"3",x2:"21",y1:"6",y2:"6"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}],["polyline",{points:"16 16 14 18 16 20"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=["svg",s,[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=["svg",s,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=["svg",s,[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=["svg",s,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=["svg",s,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=["svg",s,[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}],["path",{d:"m10 15 5-3-5-3z"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=["svg",s,[["polyline",{points:"12.41 6.75 13 2 10.57 4.92"}],["polyline",{points:"18.57 12.91 21 10 15.66 10"}],["polyline",{points:"8 8 3 14 12 14 11 22 16 16"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=["svg",s,[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=["svg",s,[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=["svg",s,[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=Object.freeze(Object.defineProperty({__proto__:null,Accessibility:_s,Activity:As,ActivitySquare:Ss,AirVent:ks,Airplay:Es,AlarmCheck:we,AlarmClock:Ts,AlarmClockCheck:we,AlarmClockOff:Cs,AlarmMinus:Ls,AlarmPlus:Hs,AlarmSmoke:Os,Album:Vs,AlertCircle:Rs,AlertOctagon:Ps,AlertTriangle:Is,AlignCenter:Ds,AlignCenterHorizontal:$s,AlignCenterVertical:js,AlignEndHorizontal:Bs,AlignEndVertical:Us,AlignHorizontalDistributeCenter:Ns,AlignHorizontalDistributeEnd:qs,AlignHorizontalDistributeStart:Fs,AlignHorizontalJustifyCenter:zs,AlignHorizontalJustifyEnd:Zs,AlignHorizontalJustifyStart:Gs,AlignHorizontalSpaceAround:Ws,AlignHorizontalSpaceBetween:Ks,AlignJustify:Js,AlignLeft:Ys,AlignRight:Qs,AlignStartHorizontal:Xs,AlignStartVertical:tr,AlignVerticalDistributeCenter:er,AlignVerticalDistributeEnd:ar,AlignVerticalDistributeStart:sr,AlignVerticalJustifyCenter:rr,AlignVerticalJustifyEnd:nr,AlignVerticalJustifyStart:ir,AlignVerticalSpaceAround:or,AlignVerticalSpaceBetween:cr,Ampersand:hr,Ampersands:dr,Anchor:lr,Angry:pr,Annoyed:ur,Antenna:vr,Anvil:gr,Aperture:yr,AppWindow:fr,Apple:mr,Archive:wr,ArchiveRestore:Mr,ArchiveX:xr,AreaChart:br,Armchair:_r,ArrowBigDown:Ar,ArrowBigDownDash:Sr,ArrowBigLeft:Er,ArrowBigLeftDash:kr,ArrowBigRight:Tr,ArrowBigRightDash:Cr,ArrowBigUp:Hr,ArrowBigUpDash:Lr,ArrowDown:Gr,ArrowDown01:Or,ArrowDown10:Vr,ArrowDownAZ:be,ArrowDownAz:be,ArrowDownCircle:Rr,ArrowDownFromLine:Pr,ArrowDownLeft:jr,ArrowDownLeftFromCircle:Ir,ArrowDownLeftSquare:$r,ArrowDownNarrowWide:Dr,ArrowDownRight:Nr,ArrowDownRightFromCircle:Br,ArrowDownRightSquare:Ur,ArrowDownSquare:qr,ArrowDownToDot:Fr,ArrowDownToLine:zr,ArrowDownUp:Zr,ArrowDownWideNarrow:_e,ArrowDownZA:Se,ArrowDownZa:Se,ArrowLeft:Xr,ArrowLeftCircle:Wr,ArrowLeftFromLine:Kr,ArrowLeftRight:Jr,ArrowLeftSquare:Yr,ArrowLeftToLine:Qr,ArrowRight:n1,ArrowRightCircle:t1,ArrowRightFromLine:e1,ArrowRightLeft:a1,ArrowRightSquare:s1,ArrowRightToLine:r1,ArrowUp:w1,ArrowUp01:i1,ArrowUp10:o1,ArrowUpAZ:Ae,ArrowUpAz:Ae,ArrowUpCircle:c1,ArrowUpDown:h1,ArrowUpFromDot:d1,ArrowUpFromLine:l1,ArrowUpLeft:v1,ArrowUpLeftFromCircle:p1,ArrowUpLeftSquare:u1,ArrowUpNarrowWide:ke,ArrowUpRight:f1,ArrowUpRightFromCircle:g1,ArrowUpRightSquare:y1,ArrowUpSquare:m1,ArrowUpToLine:M1,ArrowUpWideNarrow:x1,ArrowUpZA:Ee,ArrowUpZa:Ee,ArrowsUpFromLine:b1,Asterisk:_1,AtSign:S1,Atom:A1,AudioLines:k1,AudioWaveform:E1,Award:C1,Axe:T1,Axis3D:Ce,Axis3d:Ce,Baby:L1,Backpack:H1,Badge:G1,BadgeAlert:O1,BadgeCent:V1,BadgeCheck:Te,BadgeDollarSign:R1,BadgeEuro:P1,BadgeHelp:I1,BadgeIndianRupee:$1,BadgeInfo:j1,BadgeJapaneseYen:D1,BadgeMinus:B1,BadgePercent:U1,BadgePlus:N1,BadgePoundSterling:q1,BadgeRussianRuble:F1,BadgeSwissFranc:z1,BadgeX:Z1,BaggageClaim:W1,Ban:K1,Banana:J1,Banknote:Y1,BarChart:rn,BarChart2:Q1,BarChart3:X1,BarChart4:tn,BarChartBig:en,BarChartHorizontal:sn,BarChartHorizontalBig:an,Barcode:nn,Baseline:on,Bath:cn,Battery:vn,BatteryCharging:hn,BatteryFull:dn,BatteryLow:ln,BatteryMedium:pn,BatteryWarning:un,Beaker:gn,Bean:fn,BeanOff:yn,Bed:xn,BedDouble:mn,BedSingle:Mn,Beef:wn,Beer:bn,Bell:Tn,BellDot:_n,BellElectric:Sn,BellMinus:An,BellOff:kn,BellPlus:En,BellRing:Cn,Bike:Ln,Binary:Hn,Biohazard:On,Bird:Vn,Bitcoin:Rn,Blinds:Pn,Blocks:In,Bluetooth:Bn,BluetoothConnected:$n,BluetoothOff:jn,BluetoothSearching:Dn,Bold:Un,Bomb:Nn,Bone:qn,Book:p2,BookA:Fn,BookAudio:zn,BookCheck:Zn,BookCopy:Gn,BookDashed:Le,BookDown:Wn,BookHeadphones:Kn,BookHeart:Jn,BookImage:Yn,BookKey:Qn,BookLock:Xn,BookMarked:t2,BookMinus:e2,BookOpen:r2,BookOpenCheck:a2,BookOpenText:s2,BookPlus:n2,BookTemplate:Le,BookText:i2,BookType:o2,BookUp:h2,BookUp2:c2,BookUser:d2,BookX:l2,Bookmark:f2,BookmarkCheck:u2,BookmarkMinus:v2,BookmarkPlus:g2,BookmarkX:y2,BoomBox:m2,Bot:M2,Box:w2,BoxSelect:x2,Boxes:b2,Braces:He,Brackets:_2,Brain:k2,BrainCircuit:S2,BrainCog:A2,BrickWall:E2,Briefcase:C2,BringToFront:T2,Brush:L2,Bug:V2,BugOff:H2,BugPlay:O2,Building:P2,Building2:R2,Bus:$2,BusFront:I2,Cable:D2,CableCar:j2,Cake:U2,CakeSlice:B2,Calculator:N2,Calendar:ei,CalendarCheck:F2,CalendarCheck2:q2,CalendarClock:z2,CalendarDays:Z2,CalendarHeart:G2,CalendarMinus:W2,CalendarOff:K2,CalendarPlus:J2,CalendarRange:Y2,CalendarSearch:Q2,CalendarX:ti,CalendarX2:X2,Camera:si,CameraOff:ai,CandlestickChart:ri,Candy:oi,CandyCane:ni,CandyOff:ii,Car:di,CarFront:ci,CarTaxiFront:hi,Caravan:li,Carrot:pi,CaseLower:ui,CaseSensitive:vi,CaseUpper:gi,CassetteTape:yi,Cast:fi,Castle:mi,Cat:Mi,Cctv:xi,Check:ki,CheckCheck:wi,CheckCircle:_i,CheckCircle2:bi,CheckSquare:Ai,CheckSquare2:Si,ChefHat:Ei,Cherry:Ci,ChevronDown:Hi,ChevronDownCircle:Ti,ChevronDownSquare:Li,ChevronFirst:Oi,ChevronLast:Vi,ChevronLeft:Ii,ChevronLeftCircle:Ri,ChevronLeftSquare:Pi,ChevronRight:Di,ChevronRightCircle:$i,ChevronRightSquare:ji,ChevronUp:Ni,ChevronUpCircle:Bi,ChevronUpSquare:Ui,ChevronsDown:Fi,ChevronsDownUp:qi,ChevronsLeft:Zi,ChevronsLeftRight:zi,ChevronsRight:Wi,ChevronsRightLeft:Gi,ChevronsUp:Ji,ChevronsUpDown:Ki,Chrome:Yi,Church:Qi,Cigarette:to,CigaretteOff:Xi,Circle:ho,CircleDashed:eo,CircleDollarSign:ao,CircleDot:ro,CircleDotDashed:so,CircleEllipsis:no,CircleEqual:io,CircleOff:oo,CircleSlash:co,CircleSlash2:Oe,CircleSlashed:Oe,CircleUser:Re,CircleUserRound:Ve,CircuitBoard:lo,Citrus:po,Clapperboard:uo,Clipboard:bo,ClipboardCheck:vo,ClipboardCopy:go,ClipboardEdit:yo,ClipboardList:fo,ClipboardPaste:mo,ClipboardSignature:Mo,ClipboardType:xo,ClipboardX:wo,Clock:Po,Clock1:_o,Clock10:So,Clock11:Ao,Clock12:ko,Clock2:Eo,Clock3:Co,Clock4:To,Clock5:Lo,Clock6:Ho,Clock7:Oo,Clock8:Vo,Clock9:Ro,Cloud:Ko,CloudCog:Io,CloudDrizzle:$o,CloudFog:jo,CloudHail:Do,CloudLightning:Bo,CloudMoon:No,CloudMoonRain:Uo,CloudOff:qo,CloudRain:zo,CloudRainWind:Fo,CloudSnow:Zo,CloudSun:Wo,CloudSunRain:Go,Cloudy:Jo,Clover:Yo,Club:Qo,Code:t0,Code2:Xo,Codepen:e0,Codesandbox:a0,Coffee:s0,Cog:r0,Coins:n0,Columns:i0,Combine:o0,Command:c0,Compass:h0,Component:d0,Computer:l0,ConciergeBell:p0,Cone:u0,Construction:v0,Contact:y0,Contact2:g0,Container:f0,Contrast:m0,Cookie:M0,CookingPot:x0,Copy:k0,CopyCheck:w0,CopyMinus:b0,CopyPlus:_0,CopySlash:S0,CopyX:A0,Copyleft:E0,Copyright:C0,CornerDownLeft:T0,CornerDownRight:L0,CornerLeftDown:H0,CornerLeftUp:O0,CornerRightDown:V0,CornerRightUp:R0,CornerUpLeft:P0,CornerUpRight:I0,Cpu:$0,CreativeCommons:j0,CreditCard:D0,Croissant:B0,Crop:U0,Cross:N0,Crosshair:q0,Crown:F0,Cuboid:z0,CupSoda:Z0,CurlyBraces:He,Currency:G0,Cylinder:W0,Database:Y0,DatabaseBackup:K0,DatabaseZap:J0,Delete:Q0,Dessert:X0,Diameter:tc,Diamond:ec,Dice1:ac,Dice2:sc,Dice3:rc,Dice4:nc,Dice5:ic,Dice6:oc,Dices:cc,Diff:hc,Disc:uc,Disc2:dc,Disc3:lc,DiscAlbum:pc,Divide:yc,DivideCircle:vc,DivideSquare:gc,Dna:mc,DnaOff:fc,Dog:Mc,DollarSign:xc,Donut:wc,DoorClosed:bc,DoorOpen:_c,Dot:Sc,Download:kc,DownloadCloud:Ac,DraftingCompass:Ec,Drama:Cc,Dribbble:Tc,Droplet:Lc,Droplets:Hc,Drum:Oc,Drumstick:Vc,Dumbbell:Rc,Ear:Ic,EarOff:Pc,Edit:Yt,Edit2:Ke,Edit3:We,Egg:Dc,EggFried:$c,EggOff:jc,Equal:Uc,EqualNot:Bc,Eraser:Nc,Euro:qc,Expand:Fc,ExternalLink:zc,Eye:Gc,EyeOff:Zc,Facebook:Wc,Factory:Kc,Fan:Jc,FastForward:Yc,Feather:Qc,Fence:Xc,FerrisWheel:th,Figma:eh,File:ad,FileArchive:ah,FileAudio:rh,FileAudio2:sh,FileAxis3D:Pe,FileAxis3d:Pe,FileBadge:ih,FileBadge2:nh,FileBarChart:ch,FileBarChart2:oh,FileBox:hh,FileCheck:lh,FileCheck2:dh,FileClock:ph,FileCode:vh,FileCode2:uh,FileCog:Ie,FileCog2:Ie,FileDiff:gh,FileDigit:yh,FileDown:fh,FileEdit:mh,FileHeart:Mh,FileImage:xh,FileInput:wh,FileJson:_h,FileJson2:bh,FileKey:Ah,FileKey2:Sh,FileLineChart:kh,FileLock:Ch,FileLock2:Eh,FileMinus:Lh,FileMinus2:Th,FileMusic:Hh,FileOutput:Oh,FilePieChart:Vh,FilePlus:Ph,FilePlus2:Rh,FileQuestion:Ih,FileScan:$h,FileSearch:Dh,FileSearch2:jh,FileSignature:Bh,FileSpreadsheet:Uh,FileStack:Nh,FileSymlink:qh,FileTerminal:Fh,FileText:zh,FileType:Gh,FileType2:Zh,FileUp:Wh,FileVideo:Jh,FileVideo2:Kh,FileVolume:Qh,FileVolume2:Yh,FileWarning:Xh,FileX:ed,FileX2:td,Files:sd,Film:rd,Filter:id,FilterX:nd,Fingerprint:od,FireExtinguisher:cd,Fish:ld,FishOff:hd,FishSymbol:dd,Flag:gd,FlagOff:pd,FlagTriangleLeft:ud,FlagTriangleRight:vd,Flame:fd,FlameKindling:yd,Flashlight:Md,FlashlightOff:md,FlaskConical:wd,FlaskConicalOff:xd,FlaskRound:bd,FlipHorizontal:Sd,FlipHorizontal2:_d,FlipVertical:kd,FlipVertical2:Ad,Flower:Cd,Flower2:Ed,Focus:Td,FoldHorizontal:Ld,FoldVertical:Hd,Folder:nl,FolderArchive:Od,FolderCheck:Vd,FolderClock:Rd,FolderClosed:Pd,FolderCog:$e,FolderCog2:$e,FolderDot:Id,FolderDown:$d,FolderEdit:jd,FolderGit:Bd,FolderGit2:Dd,FolderHeart:Ud,FolderInput:Nd,FolderKanban:qd,FolderKey:Fd,FolderLock:zd,FolderMinus:Zd,FolderOpen:Wd,FolderOpenDot:Gd,FolderOutput:Kd,FolderPlus:Jd,FolderRoot:Yd,FolderSearch:Xd,FolderSearch2:Qd,FolderSymlink:tl,FolderSync:el,FolderTree:al,FolderUp:sl,FolderX:rl,Folders:il,Footprints:ol,Forklift:cl,FormInput:hl,Forward:dl,Frame:ll,Framer:pl,Frown:ul,Fuel:vl,Fullscreen:gl,FunctionSquare:yl,GalleryHorizontal:ml,GalleryHorizontalEnd:fl,GalleryThumbnails:Ml,GalleryVertical:wl,GalleryVerticalEnd:xl,Gamepad:_l,Gamepad2:bl,GanttChart:Sl,GanttChartSquare:je,Gauge:kl,GaugeCircle:Al,Gavel:El,Gem:Cl,Ghost:Tl,Gift:Ll,GitBranch:Ol,GitBranchPlus:Hl,GitCommit:De,GitCommitHorizontal:De,GitCommitVertical:Vl,GitCompare:Pl,GitCompareArrows:Rl,GitFork:Il,GitGraph:$l,GitMerge:jl,GitPullRequest:Fl,GitPullRequestArrow:Dl,GitPullRequestClosed:Bl,GitPullRequestCreate:Nl,GitPullRequestCreateArrow:Ul,GitPullRequestDraft:ql,Github:zl,Gitlab:Zl,GlassWater:Gl,Glasses:Wl,Globe:Jl,Globe2:Kl,Goal:Yl,Grab:Ql,GraduationCap:Xl,Grape:tp,Grid:Jt,Grid2X2:Be,Grid2x2:Be,Grid3X3:Jt,Grid3x3:Jt,Grip:sp,GripHorizontal:ep,GripVertical:ap,Group:rp,Guitar:np,Hammer:ip,Hand:cp,HandMetal:op,HardDrive:lp,HardDriveDownload:hp,HardDriveUpload:dp,HardHat:pp,Hash:up,Haze:vp,HdmiPort:gp,Heading:bp,Heading1:yp,Heading2:fp,Heading3:mp,Heading4:Mp,Heading5:xp,Heading6:wp,Headphones:_p,Heart:Cp,HeartCrack:Sp,HeartHandshake:Ap,HeartOff:kp,HeartPulse:Ep,HelpCircle:Tp,HelpingHand:Lp,Hexagon:Hp,Highlighter:Op,History:Vp,Home:Rp,Hop:Ip,HopOff:Pp,Hotel:$p,Hourglass:jp,IceCream:Bp,IceCream2:Dp,Image:zp,ImageDown:Up,ImageMinus:Np,ImageOff:qp,ImagePlus:Fp,Import:Zp,Inbox:Gp,Indent:Wp,IndianRupee:Kp,Infinity:Jp,Info:Yp,Inspect:qe,InspectionPanel:Qp,Instagram:Xp,Italic:tu,IterationCcw:eu,IterationCw:au,JapaneseYen:su,Joystick:ru,Kanban:nu,KanbanSquare:Ne,KanbanSquareDashed:Ue,Key:cu,KeyRound:iu,KeySquare:ou,Keyboard:du,KeyboardMusic:hu,Lamp:yu,LampCeiling:lu,LampDesk:pu,LampFloor:uu,LampWallDown:vu,LampWallUp:gu,LandPlot:fu,Landmark:mu,Languages:Mu,Laptop:wu,Laptop2:xu,Lasso:_u,LassoSelect:bu,Laugh:Su,Layers:Eu,Layers2:Au,Layers3:ku,Layout:Ru,LayoutDashboard:Cu,LayoutGrid:Tu,LayoutList:Lu,LayoutPanelLeft:Hu,LayoutPanelTop:Ou,LayoutTemplate:Vu,Leaf:Pu,LeafyGreen:Iu,Library:Du,LibraryBig:$u,LibrarySquare:ju,LifeBuoy:Bu,Ligature:Uu,Lightbulb:qu,LightbulbOff:Nu,LineChart:Fu,Link:Gu,Link2:Zu,Link2Off:zu,Linkedin:Wu,List:c4,ListChecks:Ku,ListEnd:Ju,ListFilter:Yu,ListMinus:Qu,ListMusic:Xu,ListOrdered:t4,ListPlus:e4,ListRestart:a4,ListStart:s4,ListTodo:r4,ListTree:n4,ListVideo:i4,ListX:o4,Loader:d4,Loader2:h4,Locate:u4,LocateFixed:l4,LocateOff:p4,Lock:g4,LockKeyhole:v4,LogIn:y4,LogOut:f4,Lollipop:m4,Luggage:M4,MSquare:x4,Magnet:w4,Mail:L4,MailCheck:b4,MailMinus:_4,MailOpen:S4,MailPlus:A4,MailQuestion:k4,MailSearch:E4,MailWarning:C4,MailX:T4,Mailbox:H4,Mails:O4,Map:I4,MapPin:R4,MapPinOff:V4,MapPinned:P4,Martini:$4,Maximize:D4,Maximize2:j4,Medal:B4,Megaphone:N4,MegaphoneOff:U4,Meh:q4,MemoryStick:F4,Menu:Z4,MenuSquare:z4,Merge:G4,MessageCircle:r5,MessageCircleCode:W4,MessageCircleDashed:K4,MessageCircleHeart:J4,MessageCircleMore:Y4,MessageCircleOff:Q4,MessageCirclePlus:X4,MessageCircleQuestion:t5,MessageCircleReply:e5,MessageCircleWarning:a5,MessageCircleX:s5,MessageSquare:M5,MessageSquareCode:n5,MessageSquareDashed:i5,MessageSquareDiff:o5,MessageSquareDot:c5,MessageSquareHeart:h5,MessageSquareMore:d5,MessageSquareOff:l5,MessageSquarePlus:p5,MessageSquareQuote:u5,MessageSquareReply:v5,MessageSquareShare:g5,MessageSquareText:y5,MessageSquareWarning:f5,MessageSquareX:m5,MessagesSquare:x5,Mic:_5,Mic2:w5,MicOff:b5,Microscope:S5,Microwave:A5,Milestone:k5,Milk:C5,MilkOff:E5,Minimize:L5,Minimize2:T5,Minus:V5,MinusCircle:H5,MinusSquare:O5,Monitor:z5,MonitorCheck:R5,MonitorDot:P5,MonitorDown:I5,MonitorOff:$5,MonitorPause:j5,MonitorPlay:D5,MonitorSmartphone:B5,MonitorSpeaker:U5,MonitorStop:N5,MonitorUp:q5,MonitorX:F5,Moon:G5,MoonStar:Z5,MoreHorizontal:W5,MoreVertical:K5,Mountain:Y5,MountainSnow:J5,Mouse:av,MousePointer:ev,MousePointer2:Q5,MousePointerClick:X5,MousePointerSquare:qe,MousePointerSquareDashed:tv,Move:gv,Move3D:Fe,Move3d:Fe,MoveDiagonal:rv,MoveDiagonal2:sv,MoveDown:ov,MoveDownLeft:nv,MoveDownRight:iv,MoveHorizontal:cv,MoveLeft:hv,MoveRight:dv,MoveUp:uv,MoveUpLeft:lv,MoveUpRight:pv,MoveVertical:vv,Music:Mv,Music2:yv,Music3:fv,Music4:mv,Navigation:_v,Navigation2:wv,Navigation2Off:xv,NavigationOff:bv,Network:Sv,Newspaper:Av,Nfc:kv,Nut:Cv,NutOff:Ev,Octagon:Tv,Option:Lv,Orbit:Hv,Outdent:Ov,Package:Bv,Package2:Vv,PackageCheck:Rv,PackageMinus:Pv,PackageOpen:Iv,PackagePlus:$v,PackageSearch:jv,PackageX:Dv,PaintBucket:Uv,Paintbrush:qv,Paintbrush2:Nv,Palette:Fv,Palmtree:zv,PanelBottom:Kv,PanelBottomClose:Zv,PanelBottomInactive:Gv,PanelBottomOpen:Wv,PanelLeft:Ge,PanelLeftClose:ze,PanelLeftInactive:Jv,PanelLeftOpen:Ze,PanelRight:tg,PanelRightClose:Yv,PanelRightInactive:Qv,PanelRightOpen:Xv,PanelTop:rg,PanelTopClose:eg,PanelTopInactive:ag,PanelTopOpen:sg,Paperclip:ng,Parentheses:ig,ParkingCircle:cg,ParkingCircleOff:og,ParkingMeter:hg,ParkingSquare:lg,ParkingSquareOff:dg,PartyPopper:pg,Pause:gg,PauseCircle:ug,PauseOctagon:vg,PawPrint:yg,PcCase:fg,Pen:Ke,PenBox:Yt,PenLine:We,PenSquare:Yt,PenTool:mg,Pencil:wg,PencilLine:Mg,PencilRuler:xg,Pentagon:bg,Percent:kg,PercentCircle:_g,PercentDiamond:Sg,PercentSquare:Ag,PersonStanding:Eg,Phone:Rg,PhoneCall:Cg,PhoneForwarded:Tg,PhoneIncoming:Lg,PhoneMissed:Hg,PhoneOff:Og,PhoneOutgoing:Vg,Pi:Ig,PiSquare:Pg,Piano:$g,PictureInPicture:Dg,PictureInPicture2:jg,PieChart:Bg,PiggyBank:Ug,Pilcrow:qg,PilcrowSquare:Ng,Pill:Fg,Pin:Zg,PinOff:zg,Pipette:Gg,Pizza:Wg,Plane:Yg,PlaneLanding:Kg,PlaneTakeoff:Jg,Play:t3,PlayCircle:Qg,PlaySquare:Xg,Plug:r3,Plug2:e3,PlugZap:s3,PlugZap2:a3,Plus:o3,PlusCircle:n3,PlusSquare:i3,Pocket:h3,PocketKnife:c3,Podcast:d3,Pointer:p3,PointerOff:l3,Popcorn:u3,Popsicle:v3,PoundSterling:g3,Power:M3,PowerCircle:y3,PowerOff:f3,PowerSquare:m3,Presentation:x3,Printer:w3,Projector:b3,Puzzle:_3,Pyramid:S3,QrCode:A3,Quote:k3,Rabbit:E3,Radar:C3,Radiation:T3,Radio:O3,RadioReceiver:L3,RadioTower:H3,Radius:V3,RailSymbol:R3,Rainbow:P3,Rat:I3,Ratio:$3,Receipt:j3,RectangleHorizontal:D3,RectangleVertical:B3,Recycle:U3,Redo:F3,Redo2:N3,RedoDot:q3,RefreshCcw:Z3,RefreshCcwDot:z3,RefreshCw:W3,RefreshCwOff:G3,Refrigerator:K3,Regex:J3,RemoveFormatting:Y3,Repeat:t6,Repeat1:Q3,Repeat2:X3,Replace:a6,ReplaceAll:e6,Reply:r6,ReplyAll:s6,Rewind:n6,Ribbon:i6,Rocket:o6,RockingChair:c6,RollerCoaster:h6,Rotate3D:Je,Rotate3d:Je,RotateCcw:d6,RotateCw:l6,Route:u6,RouteOff:p6,Router:v6,Rows:g6,Rss:y6,Ruler:f6,RussianRuble:m6,Sailboat:M6,Salad:x6,Sandwich:w6,Satellite:_6,SatelliteDish:b6,Save:A6,SaveAll:S6,Scale:k6,Scale3D:Ye,Scale3d:Ye,Scaling:E6,Scan:R6,ScanBarcode:C6,ScanEye:T6,ScanFace:L6,ScanLine:H6,ScanSearch:O6,ScanText:V6,ScatterChart:P6,School:$6,School2:I6,Scissors:U6,ScissorsLineDashed:j6,ScissorsSquare:B6,ScissorsSquareDashedBottom:D6,ScreenShare:q6,ScreenShareOff:N6,Scroll:z6,ScrollText:F6,Search:J6,SearchCheck:Z6,SearchCode:G6,SearchSlash:W6,SearchX:K6,Send:Q6,SendHorizonal:Qe,SendHorizontal:Qe,SendToBack:Y6,SeparatorHorizontal:X6,SeparatorVertical:t8,Server:r8,ServerCog:e8,ServerCrash:a8,ServerOff:s8,Settings:i8,Settings2:n8,Shapes:o8,Share:h8,Share2:c8,Sheet:d8,Shell:l8,Shield:w8,ShieldAlert:p8,ShieldBan:u8,ShieldCheck:v8,ShieldClose:Xe,ShieldEllipsis:g8,ShieldHalf:y8,ShieldMinus:f8,ShieldOff:m8,ShieldPlus:M8,ShieldQuestion:x8,ShieldX:Xe,Ship:_8,ShipWheel:b8,Shirt:S8,ShoppingBag:A8,ShoppingBasket:k8,ShoppingCart:E8,Shovel:C8,ShowerHead:T8,Shrink:L8,Shrub:H8,Shuffle:O8,Sidebar:Ge,SidebarClose:ze,SidebarOpen:Ze,Sigma:R8,SigmaSquare:V8,Signal:D8,SignalHigh:P8,SignalLow:I8,SignalMedium:$8,SignalZero:j8,Signpost:U8,SignpostBig:B8,Siren:N8,SkipBack:q8,SkipForward:F8,Skull:z8,Slack:Z8,Slash:G8,Slice:W8,Sliders:J8,SlidersHorizontal:K8,Smartphone:X8,SmartphoneCharging:Y8,SmartphoneNfc:Q8,Smile:ey,SmilePlus:ty,Snail:ay,Snowflake:sy,Sofa:ry,SortAsc:ke,SortDesc:_e,Soup:ny,Space:iy,Spade:oy,Sparkle:cy,Sparkles:ta,Speaker:hy,Speech:dy,SpellCheck:py,SpellCheck2:ly,Spline:uy,Split:yy,SplitSquareHorizontal:vy,SplitSquareVertical:gy,SprayCan:fy,Sprout:my,Square:Ey,SquareAsterisk:My,SquareCode:xy,SquareDashedBottom:by,SquareDashedBottomCode:wy,SquareDot:_y,SquareEqual:Sy,SquareGantt:je,SquareKanban:Ne,SquareKanbanDashed:Ue,SquareSlash:Ay,SquareStack:ky,SquareUser:aa,SquareUserRound:ea,Squircle:Cy,Squirrel:Ty,Stamp:Ly,Star:Vy,StarHalf:Hy,StarOff:Oy,Stars:ta,StepBack:Ry,StepForward:Py,Stethoscope:Iy,Sticker:$y,StickyNote:jy,StopCircle:Dy,Store:By,StretchHorizontal:Uy,StretchVertical:Ny,Strikethrough:qy,Subscript:Fy,Subtitles:zy,Sun:Jy,SunDim:Zy,SunMedium:Gy,SunMoon:Wy,SunSnow:Ky,Sunrise:Yy,Sunset:Qy,Superscript:Xy,SwissFranc:tf,SwitchCamera:ef,Sword:af,Swords:sf,Syringe:rf,Table:cf,Table2:nf,TableProperties:of,Tablet:df,TabletSmartphone:hf,Tablets:lf,Tag:pf,Tags:uf,Tally1:vf,Tally2:gf,Tally3:yf,Tally4:ff,Tally5:mf,Tangent:Mf,Target:xf,Tent:bf,TentTree:wf,Terminal:Sf,TerminalSquare:_f,TestTube:kf,TestTube2:Af,TestTubes:Ef,Text:Hf,TextCursor:Tf,TextCursorInput:Cf,TextQuote:Lf,TextSelect:sa,TextSelection:sa,Theater:Of,Thermometer:Pf,ThermometerSnowflake:Vf,ThermometerSun:Rf,ThumbsDown:If,ThumbsUp:$f,Ticket:jf,Timer:Uf,TimerOff:Df,TimerReset:Bf,ToggleLeft:Nf,ToggleRight:qf,Tornado:Ff,Torus:zf,Touchpad:Gf,TouchpadOff:Zf,TowerControl:Wf,ToyBrick:Kf,Tractor:Jf,TrafficCone:Yf,Train:ra,TrainFront:Xf,TrainFrontTunnel:Qf,TrainTrack:tm,TramFront:ra,Trash:am,Trash2:em,TreeDeciduous:sm,TreePine:rm,Trees:nm,Trello:im,TrendingDown:om,TrendingUp:cm,Triangle:dm,TriangleRight:hm,Trophy:lm,Truck:pm,Turtle:um,Tv:gm,Tv2:vm,Twitch:ym,Twitter:fm,Type:mm,Umbrella:xm,UmbrellaOff:Mm,Underline:wm,Undo:Sm,Undo2:bm,UndoDot:_m,UnfoldHorizontal:Am,UnfoldVertical:km,Ungroup:Em,Unlink:Tm,Unlink2:Cm,Unlock:Hm,UnlockKeyhole:Lm,Unplug:Om,Upload:Rm,UploadCloud:Vm,Usb:Pm,User:qm,User2:da,UserCheck:Im,UserCheck2:na,UserCircle:Re,UserCircle2:Ve,UserCog:$m,UserCog2:ia,UserMinus:jm,UserMinus2:oa,UserPlus:Dm,UserPlus2:ca,UserRound:da,UserRoundCheck:na,UserRoundCog:ia,UserRoundMinus:oa,UserRoundPlus:ca,UserRoundSearch:Bm,UserRoundX:ha,UserSearch:Um,UserSquare:aa,UserSquare2:ea,UserX:Nm,UserX2:ha,Users:Fm,Users2:la,UsersRound:la,Utensils:Zm,UtensilsCrossed:zm,UtilityPole:Gm,Variable:Wm,Vegan:Km,VenetianMask:Jm,Verified:Te,Vibrate:Qm,VibrateOff:Ym,Video:t7,VideoOff:Xm,Videotape:e7,View:a7,Voicemail:s7,Volume:o7,Volume1:r7,Volume2:n7,VolumeX:i7,Vote:c7,Wallet:l7,Wallet2:h7,WalletCards:d7,Wallpaper:p7,Wand:v7,Wand2:u7,Warehouse:g7,Watch:y7,Waves:f7,Waypoints:m7,Webcam:M7,Webhook:x7,Weight:w7,Wheat:_7,WheatOff:b7,WholeWord:S7,Wifi:k7,WifiOff:A7,Wind:E7,Wine:T7,WineOff:C7,Workflow:L7,WrapText:H7,Wrench:O7,X:I7,XCircle:V7,XOctagon:R7,XSquare:P7,Youtube:$7,Zap:D7,ZapOff:j7,ZoomIn:B7,ZoomOut:U7},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=({icons:e={},nameAttr:t="data-lucide",attrs:a={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const r=document.querySelectorAll(`[${t}]`);if(Array.from(r).forEach(n=>Fa(n,{nameAttr:t,icons:e,attrs:a})),t==="data-lucide"){const n=document.querySelectorAll("[icon-name]");n.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(n).forEach(i=>Fa(i,{nameAttr:"icon-name",icons:e,attrs:a})))}},N7=Object.freeze(Object.defineProperty({__proto__:null,Accessibility:_s,Activity:As,ActivitySquare:Ss,AirVent:ks,Airplay:Es,AlarmClock:Ts,AlarmClockCheck:we,AlarmClockOff:Cs,AlarmMinus:Ls,AlarmPlus:Hs,AlarmSmoke:Os,Album:Vs,AlertCircle:Rs,AlertOctagon:Ps,AlertTriangle:Is,AlignCenter:Ds,AlignCenterHorizontal:$s,AlignCenterVertical:js,AlignEndHorizontal:Bs,AlignEndVertical:Us,AlignHorizontalDistributeCenter:Ns,AlignHorizontalDistributeEnd:qs,AlignHorizontalDistributeStart:Fs,AlignHorizontalJustifyCenter:zs,AlignHorizontalJustifyEnd:Zs,AlignHorizontalJustifyStart:Gs,AlignHorizontalSpaceAround:Ws,AlignHorizontalSpaceBetween:Ks,AlignJustify:Js,AlignLeft:Ys,AlignRight:Qs,AlignStartHorizontal:Xs,AlignStartVertical:tr,AlignVerticalDistributeCenter:er,AlignVerticalDistributeEnd:ar,AlignVerticalDistributeStart:sr,AlignVerticalJustifyCenter:rr,AlignVerticalJustifyEnd:nr,AlignVerticalJustifyStart:ir,AlignVerticalSpaceAround:or,AlignVerticalSpaceBetween:cr,Ampersand:hr,Ampersands:dr,Anchor:lr,Angry:pr,Annoyed:ur,Antenna:vr,Anvil:gr,Aperture:yr,AppWindow:fr,Apple:mr,Archive:wr,ArchiveRestore:Mr,ArchiveX:xr,AreaChart:br,Armchair:_r,ArrowBigDown:Ar,ArrowBigDownDash:Sr,ArrowBigLeft:Er,ArrowBigLeftDash:kr,ArrowBigRight:Tr,ArrowBigRightDash:Cr,ArrowBigUp:Hr,ArrowBigUpDash:Lr,ArrowDown:Gr,ArrowDown01:Or,ArrowDown10:Vr,ArrowDownAZ:be,ArrowDownCircle:Rr,ArrowDownFromLine:Pr,ArrowDownLeft:jr,ArrowDownLeftFromCircle:Ir,ArrowDownLeftSquare:$r,ArrowDownNarrowWide:Dr,ArrowDownRight:Nr,ArrowDownRightFromCircle:Br,ArrowDownRightSquare:Ur,ArrowDownSquare:qr,ArrowDownToDot:Fr,ArrowDownToLine:zr,ArrowDownUp:Zr,ArrowDownWideNarrow:_e,ArrowDownZA:Se,ArrowLeft:Xr,ArrowLeftCircle:Wr,ArrowLeftFromLine:Kr,ArrowLeftRight:Jr,ArrowLeftSquare:Yr,ArrowLeftToLine:Qr,ArrowRight:n1,ArrowRightCircle:t1,ArrowRightFromLine:e1,ArrowRightLeft:a1,ArrowRightSquare:s1,ArrowRightToLine:r1,ArrowUp:w1,ArrowUp01:i1,ArrowUp10:o1,ArrowUpAZ:Ae,ArrowUpCircle:c1,ArrowUpDown:h1,ArrowUpFromDot:d1,ArrowUpFromLine:l1,ArrowUpLeft:v1,ArrowUpLeftFromCircle:p1,ArrowUpLeftSquare:u1,ArrowUpNarrowWide:ke,ArrowUpRight:f1,ArrowUpRightFromCircle:g1,ArrowUpRightSquare:y1,ArrowUpSquare:m1,ArrowUpToLine:M1,ArrowUpWideNarrow:x1,ArrowUpZA:Ee,ArrowsUpFromLine:b1,Asterisk:_1,AtSign:S1,Atom:A1,AudioLines:k1,AudioWaveform:E1,Award:C1,Axe:T1,Axis3d:Ce,Baby:L1,Backpack:H1,Badge:G1,BadgeAlert:O1,BadgeCent:V1,BadgeCheck:Te,BadgeDollarSign:R1,BadgeEuro:P1,BadgeHelp:I1,BadgeIndianRupee:$1,BadgeInfo:j1,BadgeJapaneseYen:D1,BadgeMinus:B1,BadgePercent:U1,BadgePlus:N1,BadgePoundSterling:q1,BadgeRussianRuble:F1,BadgeSwissFranc:z1,BadgeX:Z1,BaggageClaim:W1,Ban:K1,Banana:J1,Banknote:Y1,BarChart:rn,BarChart2:Q1,BarChart3:X1,BarChart4:tn,BarChartBig:en,BarChartHorizontal:sn,BarChartHorizontalBig:an,Barcode:nn,Baseline:on,Bath:cn,Battery:vn,BatteryCharging:hn,BatteryFull:dn,BatteryLow:ln,BatteryMedium:pn,BatteryWarning:un,Beaker:gn,Bean:fn,BeanOff:yn,Bed:xn,BedDouble:mn,BedSingle:Mn,Beef:wn,Beer:bn,Bell:Tn,BellDot:_n,BellElectric:Sn,BellMinus:An,BellOff:kn,BellPlus:En,BellRing:Cn,Bike:Ln,Binary:Hn,Biohazard:On,Bird:Vn,Bitcoin:Rn,Blinds:Pn,Blocks:In,Bluetooth:Bn,BluetoothConnected:$n,BluetoothOff:jn,BluetoothSearching:Dn,Bold:Un,Bomb:Nn,Bone:qn,Book:p2,BookA:Fn,BookAudio:zn,BookCheck:Zn,BookCopy:Gn,BookDashed:Le,BookDown:Wn,BookHeadphones:Kn,BookHeart:Jn,BookImage:Yn,BookKey:Qn,BookLock:Xn,BookMarked:t2,BookMinus:e2,BookOpen:r2,BookOpenCheck:a2,BookOpenText:s2,BookPlus:n2,BookText:i2,BookType:o2,BookUp:h2,BookUp2:c2,BookUser:d2,BookX:l2,Bookmark:f2,BookmarkCheck:u2,BookmarkMinus:v2,BookmarkPlus:g2,BookmarkX:y2,BoomBox:m2,Bot:M2,Box:w2,BoxSelect:x2,Boxes:b2,Braces:He,Brackets:_2,Brain:k2,BrainCircuit:S2,BrainCog:A2,BrickWall:E2,Briefcase:C2,BringToFront:T2,Brush:L2,Bug:V2,BugOff:H2,BugPlay:O2,Building:P2,Building2:R2,Bus:$2,BusFront:I2,Cable:D2,CableCar:j2,Cake:U2,CakeSlice:B2,Calculator:N2,Calendar:ei,CalendarCheck:F2,CalendarCheck2:q2,CalendarClock:z2,CalendarDays:Z2,CalendarHeart:G2,CalendarMinus:W2,CalendarOff:K2,CalendarPlus:J2,CalendarRange:Y2,CalendarSearch:Q2,CalendarX:ti,CalendarX2:X2,Camera:si,CameraOff:ai,CandlestickChart:ri,Candy:oi,CandyCane:ni,CandyOff:ii,Car:di,CarFront:ci,CarTaxiFront:hi,Caravan:li,Carrot:pi,CaseLower:ui,CaseSensitive:vi,CaseUpper:gi,CassetteTape:yi,Cast:fi,Castle:mi,Cat:Mi,Cctv:xi,Check:ki,CheckCheck:wi,CheckCircle:_i,CheckCircle2:bi,CheckSquare:Ai,CheckSquare2:Si,ChefHat:Ei,Cherry:Ci,ChevronDown:Hi,ChevronDownCircle:Ti,ChevronDownSquare:Li,ChevronFirst:Oi,ChevronLast:Vi,ChevronLeft:Ii,ChevronLeftCircle:Ri,ChevronLeftSquare:Pi,ChevronRight:Di,ChevronRightCircle:$i,ChevronRightSquare:ji,ChevronUp:Ni,ChevronUpCircle:Bi,ChevronUpSquare:Ui,ChevronsDown:Fi,ChevronsDownUp:qi,ChevronsLeft:Zi,ChevronsLeftRight:zi,ChevronsRight:Wi,ChevronsRightLeft:Gi,ChevronsUp:Ji,ChevronsUpDown:Ki,Chrome:Yi,Church:Qi,Cigarette:to,CigaretteOff:Xi,Circle:ho,CircleDashed:eo,CircleDollarSign:ao,CircleDot:ro,CircleDotDashed:so,CircleEllipsis:no,CircleEqual:io,CircleOff:oo,CircleSlash:co,CircleSlash2:Oe,CircleUser:Re,CircleUserRound:Ve,CircuitBoard:lo,Citrus:po,Clapperboard:uo,Clipboard:bo,ClipboardCheck:vo,ClipboardCopy:go,ClipboardEdit:yo,ClipboardList:fo,ClipboardPaste:mo,ClipboardSignature:Mo,ClipboardType:xo,ClipboardX:wo,Clock:Po,Clock1:_o,Clock10:So,Clock11:Ao,Clock12:ko,Clock2:Eo,Clock3:Co,Clock4:To,Clock5:Lo,Clock6:Ho,Clock7:Oo,Clock8:Vo,Clock9:Ro,Cloud:Ko,CloudCog:Io,CloudDrizzle:$o,CloudFog:jo,CloudHail:Do,CloudLightning:Bo,CloudMoon:No,CloudMoonRain:Uo,CloudOff:qo,CloudRain:zo,CloudRainWind:Fo,CloudSnow:Zo,CloudSun:Wo,CloudSunRain:Go,Cloudy:Jo,Clover:Yo,Club:Qo,Code:t0,Code2:Xo,Codepen:e0,Codesandbox:a0,Coffee:s0,Cog:r0,Coins:n0,Columns:i0,Combine:o0,Command:c0,Compass:h0,Component:d0,Computer:l0,ConciergeBell:p0,Cone:u0,Construction:v0,Contact:y0,Contact2:g0,Container:f0,Contrast:m0,Cookie:M0,CookingPot:x0,Copy:k0,CopyCheck:w0,CopyMinus:b0,CopyPlus:_0,CopySlash:S0,CopyX:A0,Copyleft:E0,Copyright:C0,CornerDownLeft:T0,CornerDownRight:L0,CornerLeftDown:H0,CornerLeftUp:O0,CornerRightDown:V0,CornerRightUp:R0,CornerUpLeft:P0,CornerUpRight:I0,Cpu:$0,CreativeCommons:j0,CreditCard:D0,Croissant:B0,Crop:U0,Cross:N0,Crosshair:q0,Crown:F0,Cuboid:z0,CupSoda:Z0,Currency:G0,Cylinder:W0,Database:Y0,DatabaseBackup:K0,DatabaseZap:J0,Delete:Q0,Dessert:X0,Diameter:tc,Diamond:ec,Dice1:ac,Dice2:sc,Dice3:rc,Dice4:nc,Dice5:ic,Dice6:oc,Dices:cc,Diff:hc,Disc:uc,Disc2:dc,Disc3:lc,DiscAlbum:pc,Divide:yc,DivideCircle:vc,DivideSquare:gc,Dna:mc,DnaOff:fc,Dog:Mc,DollarSign:xc,Donut:wc,DoorClosed:bc,DoorOpen:_c,Dot:Sc,Download:kc,DownloadCloud:Ac,DraftingCompass:Ec,Drama:Cc,Dribbble:Tc,Droplet:Lc,Droplets:Hc,Drum:Oc,Drumstick:Vc,Dumbbell:Rc,Ear:Ic,EarOff:Pc,Egg:Dc,EggFried:$c,EggOff:jc,Equal:Uc,EqualNot:Bc,Eraser:Nc,Euro:qc,Expand:Fc,ExternalLink:zc,Eye:Gc,EyeOff:Zc,Facebook:Wc,Factory:Kc,Fan:Jc,FastForward:Yc,Feather:Qc,Fence:Xc,FerrisWheel:th,Figma:eh,File:ad,FileArchive:ah,FileAudio:rh,FileAudio2:sh,FileAxis3d:Pe,FileBadge:ih,FileBadge2:nh,FileBarChart:ch,FileBarChart2:oh,FileBox:hh,FileCheck:lh,FileCheck2:dh,FileClock:ph,FileCode:vh,FileCode2:uh,FileCog:Ie,FileDiff:gh,FileDigit:yh,FileDown:fh,FileEdit:mh,FileHeart:Mh,FileImage:xh,FileInput:wh,FileJson:_h,FileJson2:bh,FileKey:Ah,FileKey2:Sh,FileLineChart:kh,FileLock:Ch,FileLock2:Eh,FileMinus:Lh,FileMinus2:Th,FileMusic:Hh,FileOutput:Oh,FilePieChart:Vh,FilePlus:Ph,FilePlus2:Rh,FileQuestion:Ih,FileScan:$h,FileSearch:Dh,FileSearch2:jh,FileSignature:Bh,FileSpreadsheet:Uh,FileStack:Nh,FileSymlink:qh,FileTerminal:Fh,FileText:zh,FileType:Gh,FileType2:Zh,FileUp:Wh,FileVideo:Jh,FileVideo2:Kh,FileVolume:Qh,FileVolume2:Yh,FileWarning:Xh,FileX:ed,FileX2:td,Files:sd,Film:rd,Filter:id,FilterX:nd,Fingerprint:od,FireExtinguisher:cd,Fish:ld,FishOff:hd,FishSymbol:dd,Flag:gd,FlagOff:pd,FlagTriangleLeft:ud,FlagTriangleRight:vd,Flame:fd,FlameKindling:yd,Flashlight:Md,FlashlightOff:md,FlaskConical:wd,FlaskConicalOff:xd,FlaskRound:bd,FlipHorizontal:Sd,FlipHorizontal2:_d,FlipVertical:kd,FlipVertical2:Ad,Flower:Cd,Flower2:Ed,Focus:Td,FoldHorizontal:Ld,FoldVertical:Hd,Folder:nl,FolderArchive:Od,FolderCheck:Vd,FolderClock:Rd,FolderClosed:Pd,FolderCog:$e,FolderDot:Id,FolderDown:$d,FolderEdit:jd,FolderGit:Bd,FolderGit2:Dd,FolderHeart:Ud,FolderInput:Nd,FolderKanban:qd,FolderKey:Fd,FolderLock:zd,FolderMinus:Zd,FolderOpen:Wd,FolderOpenDot:Gd,FolderOutput:Kd,FolderPlus:Jd,FolderRoot:Yd,FolderSearch:Xd,FolderSearch2:Qd,FolderSymlink:tl,FolderSync:el,FolderTree:al,FolderUp:sl,FolderX:rl,Folders:il,Footprints:ol,Forklift:cl,FormInput:hl,Forward:dl,Frame:ll,Framer:pl,Frown:ul,Fuel:vl,Fullscreen:gl,FunctionSquare:yl,GalleryHorizontal:ml,GalleryHorizontalEnd:fl,GalleryThumbnails:Ml,GalleryVertical:wl,GalleryVerticalEnd:xl,Gamepad:_l,Gamepad2:bl,GanttChart:Sl,GanttChartSquare:je,Gauge:kl,GaugeCircle:Al,Gavel:El,Gem:Cl,Ghost:Tl,Gift:Ll,GitBranch:Ol,GitBranchPlus:Hl,GitCommitHorizontal:De,GitCommitVertical:Vl,GitCompare:Pl,GitCompareArrows:Rl,GitFork:Il,GitGraph:$l,GitMerge:jl,GitPullRequest:Fl,GitPullRequestArrow:Dl,GitPullRequestClosed:Bl,GitPullRequestCreate:Nl,GitPullRequestCreateArrow:Ul,GitPullRequestDraft:ql,Github:zl,Gitlab:Zl,GlassWater:Gl,Glasses:Wl,Globe:Jl,Globe2:Kl,Goal:Yl,Grab:Ql,GraduationCap:Xl,Grape:tp,Grid2x2:Be,Grid3x3:Jt,Grip:sp,GripHorizontal:ep,GripVertical:ap,Group:rp,Guitar:np,Hammer:ip,Hand:cp,HandMetal:op,HardDrive:lp,HardDriveDownload:hp,HardDriveUpload:dp,HardHat:pp,Hash:up,Haze:vp,HdmiPort:gp,Heading:bp,Heading1:yp,Heading2:fp,Heading3:mp,Heading4:Mp,Heading5:xp,Heading6:wp,Headphones:_p,Heart:Cp,HeartCrack:Sp,HeartHandshake:Ap,HeartOff:kp,HeartPulse:Ep,HelpCircle:Tp,HelpingHand:Lp,Hexagon:Hp,Highlighter:Op,History:Vp,Home:Rp,Hop:Ip,HopOff:Pp,Hotel:$p,Hourglass:jp,IceCream:Bp,IceCream2:Dp,Image:zp,ImageDown:Up,ImageMinus:Np,ImageOff:qp,ImagePlus:Fp,Import:Zp,Inbox:Gp,Indent:Wp,IndianRupee:Kp,Infinity:Jp,Info:Yp,InspectionPanel:Qp,Instagram:Xp,Italic:tu,IterationCcw:eu,IterationCw:au,JapaneseYen:su,Joystick:ru,Kanban:nu,KanbanSquare:Ne,KanbanSquareDashed:Ue,Key:cu,KeyRound:iu,KeySquare:ou,Keyboard:du,KeyboardMusic:hu,Lamp:yu,LampCeiling:lu,LampDesk:pu,LampFloor:uu,LampWallDown:vu,LampWallUp:gu,LandPlot:fu,Landmark:mu,Languages:Mu,Laptop:wu,Laptop2:xu,Lasso:_u,LassoSelect:bu,Laugh:Su,Layers:Eu,Layers2:Au,Layers3:ku,Layout:Ru,LayoutDashboard:Cu,LayoutGrid:Tu,LayoutList:Lu,LayoutPanelLeft:Hu,LayoutPanelTop:Ou,LayoutTemplate:Vu,Leaf:Pu,LeafyGreen:Iu,Library:Du,LibraryBig:$u,LibrarySquare:ju,LifeBuoy:Bu,Ligature:Uu,Lightbulb:qu,LightbulbOff:Nu,LineChart:Fu,Link:Gu,Link2:Zu,Link2Off:zu,Linkedin:Wu,List:c4,ListChecks:Ku,ListEnd:Ju,ListFilter:Yu,ListMinus:Qu,ListMusic:Xu,ListOrdered:t4,ListPlus:e4,ListRestart:a4,ListStart:s4,ListTodo:r4,ListTree:n4,ListVideo:i4,ListX:o4,Loader:d4,Loader2:h4,Locate:u4,LocateFixed:l4,LocateOff:p4,Lock:g4,LockKeyhole:v4,LogIn:y4,LogOut:f4,Lollipop:m4,Luggage:M4,MSquare:x4,Magnet:w4,Mail:L4,MailCheck:b4,MailMinus:_4,MailOpen:S4,MailPlus:A4,MailQuestion:k4,MailSearch:E4,MailWarning:C4,MailX:T4,Mailbox:H4,Mails:O4,Map:I4,MapPin:R4,MapPinOff:V4,MapPinned:P4,Martini:$4,Maximize:D4,Maximize2:j4,Medal:B4,Megaphone:N4,MegaphoneOff:U4,Meh:q4,MemoryStick:F4,Menu:Z4,MenuSquare:z4,Merge:G4,MessageCircle:r5,MessageCircleCode:W4,MessageCircleDashed:K4,MessageCircleHeart:J4,MessageCircleMore:Y4,MessageCircleOff:Q4,MessageCirclePlus:X4,MessageCircleQuestion:t5,MessageCircleReply:e5,MessageCircleWarning:a5,MessageCircleX:s5,MessageSquare:M5,MessageSquareCode:n5,MessageSquareDashed:i5,MessageSquareDiff:o5,MessageSquareDot:c5,MessageSquareHeart:h5,MessageSquareMore:d5,MessageSquareOff:l5,MessageSquarePlus:p5,MessageSquareQuote:u5,MessageSquareReply:v5,MessageSquareShare:g5,MessageSquareText:y5,MessageSquareWarning:f5,MessageSquareX:m5,MessagesSquare:x5,Mic:_5,Mic2:w5,MicOff:b5,Microscope:S5,Microwave:A5,Milestone:k5,Milk:C5,MilkOff:E5,Minimize:L5,Minimize2:T5,Minus:V5,MinusCircle:H5,MinusSquare:O5,Monitor:z5,MonitorCheck:R5,MonitorDot:P5,MonitorDown:I5,MonitorOff:$5,MonitorPause:j5,MonitorPlay:D5,MonitorSmartphone:B5,MonitorSpeaker:U5,MonitorStop:N5,MonitorUp:q5,MonitorX:F5,Moon:G5,MoonStar:Z5,MoreHorizontal:W5,MoreVertical:K5,Mountain:Y5,MountainSnow:J5,Mouse:av,MousePointer:ev,MousePointer2:Q5,MousePointerClick:X5,MousePointerSquare:qe,MousePointerSquareDashed:tv,Move:gv,Move3d:Fe,MoveDiagonal:rv,MoveDiagonal2:sv,MoveDown:ov,MoveDownLeft:nv,MoveDownRight:iv,MoveHorizontal:cv,MoveLeft:hv,MoveRight:dv,MoveUp:uv,MoveUpLeft:lv,MoveUpRight:pv,MoveVertical:vv,Music:Mv,Music2:yv,Music3:fv,Music4:mv,Navigation:_v,Navigation2:wv,Navigation2Off:xv,NavigationOff:bv,Network:Sv,Newspaper:Av,Nfc:kv,Nut:Cv,NutOff:Ev,Octagon:Tv,Option:Lv,Orbit:Hv,Outdent:Ov,Package:Bv,Package2:Vv,PackageCheck:Rv,PackageMinus:Pv,PackageOpen:Iv,PackagePlus:$v,PackageSearch:jv,PackageX:Dv,PaintBucket:Uv,Paintbrush:qv,Paintbrush2:Nv,Palette:Fv,Palmtree:zv,PanelBottom:Kv,PanelBottomClose:Zv,PanelBottomInactive:Gv,PanelBottomOpen:Wv,PanelLeft:Ge,PanelLeftClose:ze,PanelLeftInactive:Jv,PanelLeftOpen:Ze,PanelRight:tg,PanelRightClose:Yv,PanelRightInactive:Qv,PanelRightOpen:Xv,PanelTop:rg,PanelTopClose:eg,PanelTopInactive:ag,PanelTopOpen:sg,Paperclip:ng,Parentheses:ig,ParkingCircle:cg,ParkingCircleOff:og,ParkingMeter:hg,ParkingSquare:lg,ParkingSquareOff:dg,PartyPopper:pg,Pause:gg,PauseCircle:ug,PauseOctagon:vg,PawPrint:yg,PcCase:fg,Pen:Ke,PenLine:We,PenSquare:Yt,PenTool:mg,Pencil:wg,PencilLine:Mg,PencilRuler:xg,Pentagon:bg,Percent:kg,PercentCircle:_g,PercentDiamond:Sg,PercentSquare:Ag,PersonStanding:Eg,Phone:Rg,PhoneCall:Cg,PhoneForwarded:Tg,PhoneIncoming:Lg,PhoneMissed:Hg,PhoneOff:Og,PhoneOutgoing:Vg,Pi:Ig,PiSquare:Pg,Piano:$g,PictureInPicture:Dg,PictureInPicture2:jg,PieChart:Bg,PiggyBank:Ug,Pilcrow:qg,PilcrowSquare:Ng,Pill:Fg,Pin:Zg,PinOff:zg,Pipette:Gg,Pizza:Wg,Plane:Yg,PlaneLanding:Kg,PlaneTakeoff:Jg,Play:t3,PlayCircle:Qg,PlaySquare:Xg,Plug:r3,Plug2:e3,PlugZap:s3,PlugZap2:a3,Plus:o3,PlusCircle:n3,PlusSquare:i3,Pocket:h3,PocketKnife:c3,Podcast:d3,Pointer:p3,PointerOff:l3,Popcorn:u3,Popsicle:v3,PoundSterling:g3,Power:M3,PowerCircle:y3,PowerOff:f3,PowerSquare:m3,Presentation:x3,Printer:w3,Projector:b3,Puzzle:_3,Pyramid:S3,QrCode:A3,Quote:k3,Rabbit:E3,Radar:C3,Radiation:T3,Radio:O3,RadioReceiver:L3,RadioTower:H3,Radius:V3,RailSymbol:R3,Rainbow:P3,Rat:I3,Ratio:$3,Receipt:j3,RectangleHorizontal:D3,RectangleVertical:B3,Recycle:U3,Redo:F3,Redo2:N3,RedoDot:q3,RefreshCcw:Z3,RefreshCcwDot:z3,RefreshCw:W3,RefreshCwOff:G3,Refrigerator:K3,Regex:J3,RemoveFormatting:Y3,Repeat:t6,Repeat1:Q3,Repeat2:X3,Replace:a6,ReplaceAll:e6,Reply:r6,ReplyAll:s6,Rewind:n6,Ribbon:i6,Rocket:o6,RockingChair:c6,RollerCoaster:h6,Rotate3d:Je,RotateCcw:d6,RotateCw:l6,Route:u6,RouteOff:p6,Router:v6,Rows:g6,Rss:y6,Ruler:f6,RussianRuble:m6,Sailboat:M6,Salad:x6,Sandwich:w6,Satellite:_6,SatelliteDish:b6,Save:A6,SaveAll:S6,Scale:k6,Scale3d:Ye,Scaling:E6,Scan:R6,ScanBarcode:C6,ScanEye:T6,ScanFace:L6,ScanLine:H6,ScanSearch:O6,ScanText:V6,ScatterChart:P6,School:$6,School2:I6,Scissors:U6,ScissorsLineDashed:j6,ScissorsSquare:B6,ScissorsSquareDashedBottom:D6,ScreenShare:q6,ScreenShareOff:N6,Scroll:z6,ScrollText:F6,Search:J6,SearchCheck:Z6,SearchCode:G6,SearchSlash:W6,SearchX:K6,Send:Q6,SendHorizontal:Qe,SendToBack:Y6,SeparatorHorizontal:X6,SeparatorVertical:t8,Server:r8,ServerCog:e8,ServerCrash:a8,ServerOff:s8,Settings:i8,Settings2:n8,Shapes:o8,Share:h8,Share2:c8,Sheet:d8,Shell:l8,Shield:w8,ShieldAlert:p8,ShieldBan:u8,ShieldCheck:v8,ShieldEllipsis:g8,ShieldHalf:y8,ShieldMinus:f8,ShieldOff:m8,ShieldPlus:M8,ShieldQuestion:x8,ShieldX:Xe,Ship:_8,ShipWheel:b8,Shirt:S8,ShoppingBag:A8,ShoppingBasket:k8,ShoppingCart:E8,Shovel:C8,ShowerHead:T8,Shrink:L8,Shrub:H8,Shuffle:O8,Sigma:R8,SigmaSquare:V8,Signal:D8,SignalHigh:P8,SignalLow:I8,SignalMedium:$8,SignalZero:j8,Signpost:U8,SignpostBig:B8,Siren:N8,SkipBack:q8,SkipForward:F8,Skull:z8,Slack:Z8,Slash:G8,Slice:W8,Sliders:J8,SlidersHorizontal:K8,Smartphone:X8,SmartphoneCharging:Y8,SmartphoneNfc:Q8,Smile:ey,SmilePlus:ty,Snail:ay,Snowflake:sy,Sofa:ry,Soup:ny,Space:iy,Spade:oy,Sparkle:cy,Sparkles:ta,Speaker:hy,Speech:dy,SpellCheck:py,SpellCheck2:ly,Spline:uy,Split:yy,SplitSquareHorizontal:vy,SplitSquareVertical:gy,SprayCan:fy,Sprout:my,Square:Ey,SquareAsterisk:My,SquareCode:xy,SquareDashedBottom:by,SquareDashedBottomCode:wy,SquareDot:_y,SquareEqual:Sy,SquareSlash:Ay,SquareStack:ky,SquareUser:aa,SquareUserRound:ea,Squircle:Cy,Squirrel:Ty,Stamp:Ly,Star:Vy,StarHalf:Hy,StarOff:Oy,StepBack:Ry,StepForward:Py,Stethoscope:Iy,Sticker:$y,StickyNote:jy,StopCircle:Dy,Store:By,StretchHorizontal:Uy,StretchVertical:Ny,Strikethrough:qy,Subscript:Fy,Subtitles:zy,Sun:Jy,SunDim:Zy,SunMedium:Gy,SunMoon:Wy,SunSnow:Ky,Sunrise:Yy,Sunset:Qy,Superscript:Xy,SwissFranc:tf,SwitchCamera:ef,Sword:af,Swords:sf,Syringe:rf,Table:cf,Table2:nf,TableProperties:of,Tablet:df,TabletSmartphone:hf,Tablets:lf,Tag:pf,Tags:uf,Tally1:vf,Tally2:gf,Tally3:yf,Tally4:ff,Tally5:mf,Tangent:Mf,Target:xf,Tent:bf,TentTree:wf,Terminal:Sf,TerminalSquare:_f,TestTube:kf,TestTube2:Af,TestTubes:Ef,Text:Hf,TextCursor:Tf,TextCursorInput:Cf,TextQuote:Lf,TextSelect:sa,Theater:Of,Thermometer:Pf,ThermometerSnowflake:Vf,ThermometerSun:Rf,ThumbsDown:If,ThumbsUp:$f,Ticket:jf,Timer:Uf,TimerOff:Df,TimerReset:Bf,ToggleLeft:Nf,ToggleRight:qf,Tornado:Ff,Torus:zf,Touchpad:Gf,TouchpadOff:Zf,TowerControl:Wf,ToyBrick:Kf,Tractor:Jf,TrafficCone:Yf,TrainFront:Xf,TrainFrontTunnel:Qf,TrainTrack:tm,TramFront:ra,Trash:am,Trash2:em,TreeDeciduous:sm,TreePine:rm,Trees:nm,Trello:im,TrendingDown:om,TrendingUp:cm,Triangle:dm,TriangleRight:hm,Trophy:lm,Truck:pm,Turtle:um,Tv:gm,Tv2:vm,Twitch:ym,Twitter:fm,Type:mm,Umbrella:xm,UmbrellaOff:Mm,Underline:wm,Undo:Sm,Undo2:bm,UndoDot:_m,UnfoldHorizontal:Am,UnfoldVertical:km,Ungroup:Em,Unlink:Tm,Unlink2:Cm,Unlock:Hm,UnlockKeyhole:Lm,Unplug:Om,Upload:Rm,UploadCloud:Vm,Usb:Pm,User:qm,UserCheck:Im,UserCog:$m,UserMinus:jm,UserPlus:Dm,UserRound:da,UserRoundCheck:na,UserRoundCog:ia,UserRoundMinus:oa,UserRoundPlus:ca,UserRoundSearch:Bm,UserRoundX:ha,UserSearch:Um,UserX:Nm,Users:Fm,UsersRound:la,Utensils:Zm,UtensilsCrossed:zm,UtilityPole:Gm,Variable:Wm,Vegan:Km,VenetianMask:Jm,Vibrate:Qm,VibrateOff:Ym,Video:t7,VideoOff:Xm,Videotape:e7,View:a7,Voicemail:s7,Volume:o7,Volume1:r7,Volume2:n7,VolumeX:i7,Vote:c7,Wallet:l7,Wallet2:h7,WalletCards:d7,Wallpaper:p7,Wand:v7,Wand2:u7,Warehouse:g7,Watch:y7,Waves:f7,Waypoints:m7,Webcam:M7,Webhook:x7,Weight:w7,Wheat:_7,WheatOff:b7,WholeWord:S7,Wifi:k7,WifiOff:A7,Wind:E7,Wine:T7,WineOff:C7,Workflow:L7,WrapText:H7,Wrench:O7,X:I7,XCircle:V7,XOctagon:R7,XSquare:P7,Youtube:$7,Zap:D7,ZapOff:j7,ZoomIn:B7,ZoomOut:U7,createElement:bs,createIcons:L,icons:T},Symbol.toStringTag,{value:"Module"})),l={user:null,items:[],history:[],groupedHistory:[],distribLocations:[],collectLocations:[],foodProducts:[],hygieneProducts:[],clothingProducts:[],foodSubcats:[],hygieneSubcats:[],clothingSubcats:[],view:"list",filterMain:"TOUS",searchTerm:"",opMode:null,distribMode:null,opInfo:"",opCart:[],opDate:new Date().toISOString().split("T")[0],modalOpen:!1,quickAddModalOpen:!1,settingsModalOpen:!1,editingItem:null,quickAddItem:null,newItem:{name:"",quantity:"",mainCategory:"ALIMENTAIRE",remarks:"",minThreshold:5},isAuthMode:"login",isPasswordRecoveryMode:!1,histFilter:{year:new Date().getFullYear().toString(),month:(new Date().getMonth()+1).toString(),dateFrom:"",dateTo:"",search:""}};function ne(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a}function LM(e,t,a,r){function n(i){return i instanceof a?i:new a(function(o){o(i)})}return new(a||(a=Promise))(function(i,o){function c(p){try{d(r.next(p))}catch(u){o(u)}}function h(p){try{d(r.throw(p))}catch(u){o(u)}}function d(p){p.done?i(p.value):n(p.value).then(c,h)}d((r=r.apply(e,t||[])).next())})}const HM=e=>e?(...t)=>e(...t):(...t)=>fetch(...t);class Ea extends Error{constructor(t,a="FunctionsError",r){super(t),this.name=a,this.context=r}}class OM extends Ea{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class za extends Ea{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class Za extends Ea{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var pa;(function(e){e.Any="any",e.ApNortheast1="ap-northeast-1",e.ApNortheast2="ap-northeast-2",e.ApSouth1="ap-south-1",e.ApSoutheast1="ap-southeast-1",e.ApSoutheast2="ap-southeast-2",e.CaCentral1="ca-central-1",e.EuCentral1="eu-central-1",e.EuWest1="eu-west-1",e.EuWest2="eu-west-2",e.EuWest3="eu-west-3",e.SaEast1="sa-east-1",e.UsEast1="us-east-1",e.UsWest1="us-west-1",e.UsWest2="us-west-2"})(pa||(pa={}));class VM{constructor(t,{headers:a={},customFetch:r,region:n=pa.Any}={}){this.url=t,this.headers=a,this.region=n,this.fetch=HM(r)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t){return LM(this,arguments,void 0,function*(a,r={}){var n;let i,o;try{const{headers:c,method:h,body:d,signal:p,timeout:u}=r;let v={},{region:g}=r;g||(g=this.region);const y=new URL(`${this.url}/${a}`);g&&g!=="any"&&(v["x-region"]=g,y.searchParams.set("forceFunctionRegion",g));let f;d&&(c&&!Object.prototype.hasOwnProperty.call(c,"Content-Type")||!c)?typeof Blob<"u"&&d instanceof Blob||d instanceof ArrayBuffer?(v["Content-Type"]="application/octet-stream",f=d):typeof d=="string"?(v["Content-Type"]="text/plain",f=d):typeof FormData<"u"&&d instanceof FormData?f=d:(v["Content-Type"]="application/json",f=JSON.stringify(d)):f=d;let M=p;u&&(o=new AbortController,i=setTimeout(()=>o.abort(),u),p?(M=o.signal,p.addEventListener("abort",()=>o.abort())):M=o.signal);const w=yield this.fetch(y.toString(),{method:h||"POST",headers:Object.assign(Object.assign(Object.assign({},v),this.headers),c),body:f,signal:M}).catch(B=>{throw new OM(B)}),b=w.headers.get("x-relay-error");if(b&&b==="true")throw new za(w);if(!w.ok)throw new Za(w);let m=((n=w.headers.get("Content-Type"))!==null&&n!==void 0?n:"text/plain").split(";")[0].trim(),E;return m==="application/json"?E=yield w.json():m==="application/octet-stream"||m==="application/pdf"?E=yield w.blob():m==="text/event-stream"?E=w:m==="multipart/form-data"?E=yield w.formData():E=yield w.text(),{data:E,error:null,response:w}}catch(c){return{data:null,error:c,response:c instanceof Za||c instanceof za?c.context:void 0}}finally{i&&clearTimeout(i)}})}}var RM=class extends Error{constructor(e){super(e.message),this.name="PostgrestError",this.details=e.details,this.hint=e.hint,this.code=e.code}},PM=class{constructor(e){var t,a;this.shouldThrowOnError=!1,this.method=e.method,this.url=e.url,this.headers=new Headers(e.headers),this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=(t=e.shouldThrowOnError)!==null&&t!==void 0?t:!1,this.signal=e.signal,this.isMaybeSingle=(a=e.isMaybeSingle)!==null&&a!==void 0?a:!1,e.fetch?this.fetch=e.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,t){return this.headers=new Headers(this.headers),this.headers.set(e,t),this}then(e,t){var a=this;this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json");const r=this.fetch;let n=r(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async i=>{let o=null,c=null,h=null,d=i.status,p=i.statusText;if(i.ok){var u,v;if(a.method!=="HEAD"){var g;const w=await i.text();w===""||(a.headers.get("Accept")==="text/csv"||a.headers.get("Accept")&&(!((g=a.headers.get("Accept"))===null||g===void 0)&&g.includes("application/vnd.pgrst.plan+text"))?c=w:c=JSON.parse(w))}const f=(u=a.headers.get("Prefer"))===null||u===void 0?void 0:u.match(/count=(exact|planned|estimated)/),M=(v=i.headers.get("content-range"))===null||v===void 0?void 0:v.split("/");f&&M&&M.length>1&&(h=parseInt(M[1])),a.isMaybeSingle&&a.method==="GET"&&Array.isArray(c)&&(c.length>1?(o={code:"PGRST116",details:`Results contain ${c.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},c=null,h=null,d=406,p="Not Acceptable"):c.length===1?c=c[0]:c=null)}else{var y;const f=await i.text();try{o=JSON.parse(f),Array.isArray(o)&&i.status===404&&(c=[],o=null,d=200,p="OK")}catch{i.status===404&&f===""?(d=204,p="No Content"):o={message:f}}if(o&&a.isMaybeSingle&&(!(o==null||(y=o.details)===null||y===void 0)&&y.includes("0 rows"))&&(o=null,d=200,p="OK"),o&&a.shouldThrowOnError)throw new RM(o)}return{error:o,data:c,count:h,status:d,statusText:p}});return this.shouldThrowOnError||(n=n.catch(i=>{var o;let c="";const h=i==null?void 0:i.cause;if(h){var d,p,u,v;const y=(d=h==null?void 0:h.message)!==null&&d!==void 0?d:"",f=(p=h==null?void 0:h.code)!==null&&p!==void 0?p:"";c=`${(u=i==null?void 0:i.name)!==null&&u!==void 0?u:"FetchError"}: ${i==null?void 0:i.message}`,c+=`

Caused by: ${(v=h==null?void 0:h.name)!==null&&v!==void 0?v:"Error"}: ${y}`,f&&(c+=` (${f})`),h!=null&&h.stack&&(c+=`
${h.stack}`)}else{var g;c=(g=i==null?void 0:i.stack)!==null&&g!==void 0?g:""}return{error:{message:`${(o=i==null?void 0:i.name)!==null&&o!==void 0?o:"FetchError"}: ${i==null?void 0:i.message}`,details:c,hint:"",code:""},data:null,count:null,status:0,statusText:""}})),n.then(e,t)}returns(){return this}overrideTypes(){return this}},IM=class extends PM{select(e){let t=!1;const a=(e??"*").split("").map(r=>/\s/.test(r)&&!t?"":(r==='"'&&(t=!t),r)).join("");return this.url.searchParams.set("select",a),this.headers.append("Prefer","return=representation"),this}order(e,{ascending:t=!0,nullsFirst:a,foreignTable:r,referencedTable:n=r}={}){const i=n?`${n}.order`:"order",o=this.url.searchParams.get(i);return this.url.searchParams.set(i,`${o?`${o},`:""}${e}.${t?"asc":"desc"}${a===void 0?"":a?".nullsfirst":".nullslast"}`),this}limit(e,{foreignTable:t,referencedTable:a=t}={}){const r=typeof a>"u"?"limit":`${a}.limit`;return this.url.searchParams.set(r,`${e}`),this}range(e,t,{foreignTable:a,referencedTable:r=a}={}){const n=typeof r>"u"?"offset":`${r}.offset`,i=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(n,`${e}`),this.url.searchParams.set(i,`${t-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.method==="GET"?this.headers.set("Accept","application/json"):this.headers.set("Accept","application/vnd.pgrst.object+json"),this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:e=!1,verbose:t=!1,settings:a=!1,buffers:r=!1,wal:n=!1,format:i="text"}={}){var o;const c=[e?"analyze":null,t?"verbose":null,a?"settings":null,r?"buffers":null,n?"wal":null].filter(Boolean).join("|"),h=(o=this.headers.get("Accept"))!==null&&o!==void 0?o:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${i}; for="${h}"; options=${c};`),i==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(e){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${e}`),this}};const Ga=new RegExp("[,()]");var ft=class extends IM{eq(e,t){return this.url.searchParams.append(e,`eq.${t}`),this}neq(e,t){return this.url.searchParams.append(e,`neq.${t}`),this}gt(e,t){return this.url.searchParams.append(e,`gt.${t}`),this}gte(e,t){return this.url.searchParams.append(e,`gte.${t}`),this}lt(e,t){return this.url.searchParams.append(e,`lt.${t}`),this}lte(e,t){return this.url.searchParams.append(e,`lte.${t}`),this}like(e,t){return this.url.searchParams.append(e,`like.${t}`),this}likeAllOf(e,t){return this.url.searchParams.append(e,`like(all).{${t.join(",")}}`),this}likeAnyOf(e,t){return this.url.searchParams.append(e,`like(any).{${t.join(",")}}`),this}ilike(e,t){return this.url.searchParams.append(e,`ilike.${t}`),this}ilikeAllOf(e,t){return this.url.searchParams.append(e,`ilike(all).{${t.join(",")}}`),this}ilikeAnyOf(e,t){return this.url.searchParams.append(e,`ilike(any).{${t.join(",")}}`),this}regexMatch(e,t){return this.url.searchParams.append(e,`match.${t}`),this}regexIMatch(e,t){return this.url.searchParams.append(e,`imatch.${t}`),this}is(e,t){return this.url.searchParams.append(e,`is.${t}`),this}isDistinct(e,t){return this.url.searchParams.append(e,`isdistinct.${t}`),this}in(e,t){const a=Array.from(new Set(t)).map(r=>typeof r=="string"&&Ga.test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(e,`in.(${a})`),this}notIn(e,t){const a=Array.from(new Set(t)).map(r=>typeof r=="string"&&Ga.test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(e,`not.in.(${a})`),this}contains(e,t){return typeof t=="string"?this.url.searchParams.append(e,`cs.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cs.{${t.join(",")}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(t)}`),this}containedBy(e,t){return typeof t=="string"?this.url.searchParams.append(e,`cd.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cd.{${t.join(",")}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(t)}`),this}rangeGt(e,t){return this.url.searchParams.append(e,`sr.${t}`),this}rangeGte(e,t){return this.url.searchParams.append(e,`nxl.${t}`),this}rangeLt(e,t){return this.url.searchParams.append(e,`sl.${t}`),this}rangeLte(e,t){return this.url.searchParams.append(e,`nxr.${t}`),this}rangeAdjacent(e,t){return this.url.searchParams.append(e,`adj.${t}`),this}overlaps(e,t){return typeof t=="string"?this.url.searchParams.append(e,`ov.${t}`):this.url.searchParams.append(e,`ov.{${t.join(",")}}`),this}textSearch(e,t,{config:a,type:r}={}){let n="";r==="plain"?n="pl":r==="phrase"?n="ph":r==="websearch"&&(n="w");const i=a===void 0?"":`(${a})`;return this.url.searchParams.append(e,`${n}fts${i}.${t}`),this}match(e){return Object.entries(e).forEach(([t,a])=>{this.url.searchParams.append(t,`eq.${a}`)}),this}not(e,t,a){return this.url.searchParams.append(e,`not.${t}.${a}`),this}or(e,{foreignTable:t,referencedTable:a=t}={}){const r=a?`${a}.or`:"or";return this.url.searchParams.append(r,`(${e})`),this}filter(e,t,a){return this.url.searchParams.append(e,`${t}.${a}`),this}},$M=class{constructor(e,{headers:t={},schema:a,fetch:r}){this.url=e,this.headers=new Headers(t),this.schema=a,this.fetch=r}select(e,t){const{head:a=!1,count:r}=t??{},n=a?"HEAD":"GET";let i=!1;const o=(e??"*").split("").map(c=>/\s/.test(c)&&!i?"":(c==='"'&&(i=!i),c)).join("");return this.url.searchParams.set("select",o),r&&this.headers.append("Prefer",`count=${r}`),new ft({method:n,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch})}insert(e,{count:t,defaultToNull:a=!0}={}){var r;const n="POST";if(t&&this.headers.append("Prefer",`count=${t}`),a||this.headers.append("Prefer","missing=default"),Array.isArray(e)){const i=e.reduce((o,c)=>o.concat(Object.keys(c)),[]);if(i.length>0){const o=[...new Set(i)].map(c=>`"${c}"`);this.url.searchParams.set("columns",o.join(","))}}return new ft({method:n,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch})}upsert(e,{onConflict:t,ignoreDuplicates:a=!1,count:r,defaultToNull:n=!0}={}){var i;const o="POST";if(this.headers.append("Prefer",`resolution=${a?"ignore":"merge"}-duplicates`),t!==void 0&&this.url.searchParams.set("on_conflict",t),r&&this.headers.append("Prefer",`count=${r}`),n||this.headers.append("Prefer","missing=default"),Array.isArray(e)){const c=e.reduce((h,d)=>h.concat(Object.keys(d)),[]);if(c.length>0){const h=[...new Set(c)].map(d=>`"${d}"`);this.url.searchParams.set("columns",h.join(","))}}return new ft({method:o,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch})}update(e,{count:t}={}){var a;const r="PATCH";return t&&this.headers.append("Prefer",`count=${t}`),new ft({method:r,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch})}delete({count:e}={}){var t;const a="DELETE";return e&&this.headers.append("Prefer",`count=${e}`),new ft({method:a,url:this.url,headers:this.headers,schema:this.schema,fetch:(t=this.fetch)!==null&&t!==void 0?t:fetch})}},jM=class q7{constructor(t,{headers:a={},schema:r,fetch:n}={}){this.url=t,this.headers=new Headers(a),this.schemaName=r,this.fetch=n}from(t){if(!t||typeof t!="string"||t.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new $M(new URL(`${this.url}/${t}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new q7(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,a={},{head:r=!1,get:n=!1,count:i}={}){var o;let c;const h=new URL(`${this.url}/rpc/${t}`);let d;r||n?(c=r?"HEAD":"GET",Object.entries(a).filter(([u,v])=>v!==void 0).map(([u,v])=>[u,Array.isArray(v)?`{${v.join(",")}}`:`${v}`]).forEach(([u,v])=>{h.searchParams.append(u,v)})):(c="POST",d=a);const p=new Headers(this.headers);return i&&p.set("Prefer",`count=${i}`),new ft({method:c,url:h,headers:p,schema:this.schemaName,body:d,fetch:(o=this.fetch)!==null&&o!==void 0?o:fetch})}};class DM{constructor(){}static detectEnvironment(){var t;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((t=navigator.userAgent)===null||t===void 0)&&t.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};if(typeof process<"u"){const a=process.versions;if(a&&a.node){const r=a.node,n=parseInt(r.replace(/^v/,"").split(".")[0]);return n>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${n} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${n} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const t=this.detectEnvironment();if(t.constructor)return t.constructor;let a=t.error||"WebSocket not supported in this environment.";throw t.workaround&&(a+=`

Suggested solution: ${t.workaround}`),new Error(a)}static createWebSocket(t,a){const r=this.getWebSocketConstructor();return new r(t,a)}static isWebSocketSupported(){try{const t=this.detectEnvironment();return t.type==="native"||t.type==="ws"}catch{return!1}}}const BM="2.89.0",UM=`realtime-js/${BM}`,F7="1.0.0",NM="2.0.0",Wa=F7,ua=1e4,qM=1e3,FM=100;var tt;(function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"})(tt||(tt={}));var j;(function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"})(j||(j={}));var W;(function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"})(W||(W={}));var va;(function(e){e.websocket="websocket"})(va||(va={}));var ot;(function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"})(ot||(ot={}));class zM{constructor(t){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=t??[]}encode(t,a){if(t.event===this.BROADCAST_EVENT&&!(t.payload instanceof ArrayBuffer)&&typeof t.payload.event=="string")return a(this._binaryEncodeUserBroadcastPush(t));let r=[t.join_ref,t.ref,t.topic,t.event,t.payload];return a(JSON.stringify(r))}_binaryEncodeUserBroadcastPush(t){var a;return this._isArrayBuffer((a=t.payload)===null||a===void 0?void 0:a.payload)?this._encodeBinaryUserBroadcastPush(t):this._encodeJsonUserBroadcastPush(t)}_encodeBinaryUserBroadcastPush(t){var a,r;const n=(r=(a=t.payload)===null||a===void 0?void 0:a.payload)!==null&&r!==void 0?r:new ArrayBuffer(0);return this._encodeUserBroadcastPush(t,this.BINARY_ENCODING,n)}_encodeJsonUserBroadcastPush(t){var a,r;const n=(r=(a=t.payload)===null||a===void 0?void 0:a.payload)!==null&&r!==void 0?r:{},o=new TextEncoder().encode(JSON.stringify(n)).buffer;return this._encodeUserBroadcastPush(t,this.JSON_ENCODING,o)}_encodeUserBroadcastPush(t,a,r){var n,i;const o=t.topic,c=(n=t.ref)!==null&&n!==void 0?n:"",h=(i=t.join_ref)!==null&&i!==void 0?i:"",d=t.payload.event,p=this.allowedMetadataKeys?this._pick(t.payload,this.allowedMetadataKeys):{},u=Object.keys(p).length===0?"":JSON.stringify(p);if(h.length>255)throw new Error(`joinRef length ${h.length} exceeds maximum of 255`);if(c.length>255)throw new Error(`ref length ${c.length} exceeds maximum of 255`);if(o.length>255)throw new Error(`topic length ${o.length} exceeds maximum of 255`);if(d.length>255)throw new Error(`userEvent length ${d.length} exceeds maximum of 255`);if(u.length>255)throw new Error(`metadata length ${u.length} exceeds maximum of 255`);const v=this.USER_BROADCAST_PUSH_META_LENGTH+h.length+c.length+o.length+d.length+u.length,g=new ArrayBuffer(this.HEADER_LENGTH+v);let y=new DataView(g),f=0;y.setUint8(f++,this.KINDS.userBroadcastPush),y.setUint8(f++,h.length),y.setUint8(f++,c.length),y.setUint8(f++,o.length),y.setUint8(f++,d.length),y.setUint8(f++,u.length),y.setUint8(f++,a),Array.from(h,w=>y.setUint8(f++,w.charCodeAt(0))),Array.from(c,w=>y.setUint8(f++,w.charCodeAt(0))),Array.from(o,w=>y.setUint8(f++,w.charCodeAt(0))),Array.from(d,w=>y.setUint8(f++,w.charCodeAt(0))),Array.from(u,w=>y.setUint8(f++,w.charCodeAt(0)));var M=new Uint8Array(g.byteLength+r.byteLength);return M.set(new Uint8Array(g),0),M.set(new Uint8Array(r),g.byteLength),M.buffer}decode(t,a){if(this._isArrayBuffer(t)){let r=this._binaryDecode(t);return a(r)}if(typeof t=="string"){const r=JSON.parse(t),[n,i,o,c,h]=r;return a({join_ref:n,ref:i,topic:o,event:c,payload:h})}return a({})}_binaryDecode(t){const a=new DataView(t),r=a.getUint8(0),n=new TextDecoder;switch(r){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(t,a,n)}}_decodeUserBroadcast(t,a,r){const n=a.getUint8(1),i=a.getUint8(2),o=a.getUint8(3),c=a.getUint8(4);let h=this.HEADER_LENGTH+4;const d=r.decode(t.slice(h,h+n));h=h+n;const p=r.decode(t.slice(h,h+i));h=h+i;const u=r.decode(t.slice(h,h+o));h=h+o;const v=t.slice(h,t.byteLength),g=c===this.JSON_ENCODING?JSON.parse(r.decode(v)):v,y={type:this.BROADCAST_EVENT,event:p,payload:g};return o>0&&(y.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:d,event:this.BROADCAST_EVENT,payload:y}}_isArrayBuffer(t){var a;return t instanceof ArrayBuffer||((a=t==null?void 0:t.constructor)===null||a===void 0?void 0:a.name)==="ArrayBuffer"}_pick(t,a){return!t||typeof t!="object"?{}:Object.fromEntries(Object.entries(t).filter(([r])=>a.includes(r)))}}class z7{constructor(t,a){this.callback=t,this.timerCalc=a,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=a}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var O;(function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"})(O||(O={}));const Ka=(e,t,a={})=>{var r;const n=(r=a.skipTypes)!==null&&r!==void 0?r:[];return t?Object.keys(t).reduce((i,o)=>(i[o]=ZM(o,e,t,n),i),{}):{}},ZM=(e,t,a,r)=>{const n=t.find(c=>c.name===e),i=n==null?void 0:n.type,o=a[e];return i&&!r.includes(i)?Z7(i,o):ga(o)},Z7=(e,t)=>{if(e.charAt(0)==="_"){const a=e.slice(1,e.length);return JM(t,a)}switch(e){case O.bool:return GM(t);case O.float4:case O.float8:case O.int2:case O.int4:case O.int8:case O.numeric:case O.oid:return WM(t);case O.json:case O.jsonb:return KM(t);case O.timestamp:return YM(t);case O.abstime:case O.date:case O.daterange:case O.int4range:case O.int8range:case O.money:case O.reltime:case O.text:case O.time:case O.timestamptz:case O.timetz:case O.tsrange:case O.tstzrange:return ga(t);default:return ga(t)}},ga=e=>e,GM=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},WM=e=>{if(typeof e=="string"){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},KM=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch{return e}return e},JM=(e,t)=>{if(typeof e!="string")return e;const a=e.length-1,r=e[a];if(e[0]==="{"&&r==="}"){let i;const o=e.slice(1,a);try{i=JSON.parse("["+o+"]")}catch{i=o?o.split(","):[]}return i.map(c=>Z7(t,c))}return e},YM=e=>typeof e=="string"?e.replace(" ","T"):e,G7=e=>{const t=new URL(e);return t.protocol=t.protocol.replace(/^ws/i,"http"),t.pathname=t.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),t.pathname===""||t.pathname==="/"?t.pathname="/api/broadcast":t.pathname=t.pathname+"/api/broadcast",t.href};class le{constructor(t,a,r={},n=ua){this.channel=t,this.event=a,this.payload=r,this.timeout=n,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,a){var r;return this._hasReceived(t)&&a((r=this.receivedResp)===null||r===void 0?void 0:r.response),this.recHooks.push({status:t,callback:a}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=a=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=a,this._matchReceive(a)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,a){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:a})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:a}){this.recHooks.filter(r=>r.status===t).forEach(r=>r.callback(a))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var Ja;(function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"})(Ja||(Ja={}));class Et{constructor(t,a){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const r=(a==null?void 0:a.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(r.state,{},n=>{const{onJoin:i,onLeave:o,onSync:c}=this.caller;this.joinRef=this.channel._joinRef(),this.state=Et.syncState(this.state,n,i,o),this.pendingDiffs.forEach(h=>{this.state=Et.syncDiff(this.state,h,i,o)}),this.pendingDiffs=[],c()}),this.channel._on(r.diff,{},n=>{const{onJoin:i,onLeave:o,onSync:c}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(n):(this.state=Et.syncDiff(this.state,n,i,o),c())}),this.onJoin((n,i,o)=>{this.channel._trigger("presence",{event:"join",key:n,currentPresences:i,newPresences:o})}),this.onLeave((n,i,o)=>{this.channel._trigger("presence",{event:"leave",key:n,currentPresences:i,leftPresences:o})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,a,r,n){const i=this.cloneDeep(t),o=this.transformState(a),c={},h={};return this.map(i,(d,p)=>{o[d]||(h[d]=p)}),this.map(o,(d,p)=>{const u=i[d];if(u){const v=p.map(M=>M.presence_ref),g=u.map(M=>M.presence_ref),y=p.filter(M=>g.indexOf(M.presence_ref)<0),f=u.filter(M=>v.indexOf(M.presence_ref)<0);y.length>0&&(c[d]=y),f.length>0&&(h[d]=f)}else c[d]=p}),this.syncDiff(i,{joins:c,leaves:h},r,n)}static syncDiff(t,a,r,n){const{joins:i,leaves:o}={joins:this.transformState(a.joins),leaves:this.transformState(a.leaves)};return r||(r=()=>{}),n||(n=()=>{}),this.map(i,(c,h)=>{var d;const p=(d=t[c])!==null&&d!==void 0?d:[];if(t[c]=this.cloneDeep(h),p.length>0){const u=t[c].map(g=>g.presence_ref),v=p.filter(g=>u.indexOf(g.presence_ref)<0);t[c].unshift(...v)}r(c,p,h)}),this.map(o,(c,h)=>{let d=t[c];if(!d)return;const p=h.map(u=>u.presence_ref);d=d.filter(u=>p.indexOf(u.presence_ref)<0),t[c]=d,n(c,d,h),d.length===0&&delete t[c]}),t}static map(t,a){return Object.getOwnPropertyNames(t).map(r=>a(r,t[r]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((a,r)=>{const n=t[r];return"metas"in n?a[r]=n.metas.map(i=>(i.presence_ref=i.phx_ref,delete i.phx_ref,delete i.phx_ref_prev,i)):a[r]=n,a},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var Ya;(function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"})(Ya||(Ya={}));var Ct;(function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes",e.SYSTEM="system"})(Ct||(Ct={}));var J;(function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"})(J||(J={}));class xt{constructor(t,a={config:{}},r){var n,i;if(this.topic=t,this.params=a,this.socket=r,this.bindings={},this.state=j.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},a.config),this.timeout=this.socket.timeout,this.joinPush=new le(this,W.join,this.params,this.timeout),this.rejoinTimer=new z7(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=j.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(o=>o.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=j.closed,this.socket._remove(this)}),this._onError(o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=j.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=j.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=j.errored,this.rejoinTimer.scheduleTimeout())}),this._on(W.reply,{},(o,c)=>{this._trigger(this._replyEventName(c),o)}),this.presence=new Et(this),this.broadcastEndpointURL=G7(this.socket.endPoint),this.private=this.params.config.private||!1,!this.private&&(!((i=(n=this.params.config)===null||n===void 0?void 0:n.broadcast)===null||i===void 0)&&i.replay))throw`tried to use replay on public channel '${this.topic}'. It must be a private channel.`}subscribe(t,a=this.timeout){var r,n,i;if(this.socket.isConnected()||this.socket.connect(),this.state==j.closed){const{config:{broadcast:o,presence:c,private:h}}=this.params,d=(n=(r=this.bindings.postgres_changes)===null||r===void 0?void 0:r.map(g=>g.filter))!==null&&n!==void 0?n:[],p=!!this.bindings[Ct.PRESENCE]&&this.bindings[Ct.PRESENCE].length>0||((i=this.params.config.presence)===null||i===void 0?void 0:i.enabled)===!0,u={},v={broadcast:o,presence:Object.assign(Object.assign({},c),{enabled:p}),postgres_changes:d,private:h};this.socket.accessTokenValue&&(u.access_token=this.socket.accessTokenValue),this._onError(g=>t==null?void 0:t(J.CHANNEL_ERROR,g)),this._onClose(()=>t==null?void 0:t(J.CLOSED)),this.updateJoinPayload(Object.assign({config:v},u)),this.joinedOnce=!0,this._rejoin(a),this.joinPush.receive("ok",async({postgres_changes:g})=>{var y;if(this.socket._isManualToken()||this.socket.setAuth(),g===void 0){t==null||t(J.SUBSCRIBED);return}else{const f=this.bindings.postgres_changes,M=(y=f==null?void 0:f.length)!==null&&y!==void 0?y:0,w=[];for(let b=0;b<M;b++){const m=f[b],{filter:{event:E,schema:B,table:H,filter:$}}=m,Q=g&&g[b];if(Q&&Q.event===E&&xt.isFilterValueEqual(Q.schema,B)&&xt.isFilterValueEqual(Q.table,H)&&xt.isFilterValueEqual(Q.filter,$))w.push(Object.assign(Object.assign({},m),{id:Q.id}));else{this.unsubscribe(),this.state=j.errored,t==null||t(J.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=w,t&&t(J.SUBSCRIBED);return}}).receive("error",g=>{this.state=j.errored,t==null||t(J.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(g).join(", ")||"error")))}).receive("timeout",()=>{t==null||t(J.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(t,a={}){return await this.send({type:"presence",event:"track",payload:t},a.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,a,r){return this.state===j.joined&&t===Ct.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(async()=>await this.subscribe())),this._on(t,a,r)}async httpSend(t,a,r={}){var n;if(a==null)return Promise.reject("Payload is required for httpSend()");const i={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(i.Authorization=`Bearer ${this.socket.accessTokenValue}`);const o={method:"POST",headers:i,body:JSON.stringify({messages:[{topic:this.subTopic,event:t,payload:a,private:this.private}]})},c=await this._fetchWithTimeout(this.broadcastEndpointURL,o,(n=r.timeout)!==null&&n!==void 0?n:this.timeout);if(c.status===202)return{success:!0};let h=c.statusText;try{const d=await c.json();h=d.error||d.message||h}catch{}return Promise.reject(new Error(h))}async send(t,a={}){var r,n;if(!this._canPush()&&t.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:i,payload:o}=t,c={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(c.Authorization=`Bearer ${this.socket.accessTokenValue}`);const h={method:"POST",headers:c,body:JSON.stringify({messages:[{topic:this.subTopic,event:i,payload:o,private:this.private}]})};try{const d=await this._fetchWithTimeout(this.broadcastEndpointURL,h,(r=a.timeout)!==null&&r!==void 0?r:this.timeout);return await((n=d.body)===null||n===void 0?void 0:n.cancel()),d.ok?"ok":"error"}catch(d){return d.name==="AbortError"?"timed out":"error"}}else return new Promise(i=>{var o,c,h;const d=this._push(t.type,t,a.timeout||this.timeout);t.type==="broadcast"&&!(!((h=(c=(o=this.params)===null||o===void 0?void 0:o.config)===null||c===void 0?void 0:c.broadcast)===null||h===void 0)&&h.ack)&&i("ok"),d.receive("ok",()=>i("ok")),d.receive("error",()=>i("error")),d.receive("timeout",()=>i("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=j.leaving;const a=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(W.close,"leave",this._joinRef())};this.joinPush.destroy();let r=null;return new Promise(n=>{r=new le(this,W.leave,{},t),r.receive("ok",()=>{a(),n("ok")}).receive("timeout",()=>{a(),n("timed out")}).receive("error",()=>{n("error")}),r.send(),this._canPush()||r.trigger("ok",{})}).finally(()=>{r==null||r.destroy()})}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=j.closed,this.bindings={}}async _fetchWithTimeout(t,a,r){const n=new AbortController,i=setTimeout(()=>n.abort(),r),o=await this.socket.fetch(t,Object.assign(Object.assign({},a),{signal:n.signal}));return clearTimeout(i),o}_push(t,a,r=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let n=new le(this,t,a,r);return this._canPush()?n.send():this._addToPushBuffer(n),n}_addToPushBuffer(t){if(t.startTimeout(),this.pushBuffer.push(t),this.pushBuffer.length>FM){const a=this.pushBuffer.shift();a&&(a.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${a.event}`,a.payload))}}_onMessage(t,a,r){return a}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,a,r){var n,i;const o=t.toLocaleLowerCase(),{close:c,error:h,leave:d,join:p}=W;if(r&&[c,h,d,p].indexOf(o)>=0&&r!==this._joinRef())return;let v=this._onMessage(o,a,r);if(a&&!v)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(o)?(n=this.bindings.postgres_changes)===null||n===void 0||n.filter(g=>{var y,f,M;return((y=g.filter)===null||y===void 0?void 0:y.event)==="*"||((M=(f=g.filter)===null||f===void 0?void 0:f.event)===null||M===void 0?void 0:M.toLocaleLowerCase())===o}).map(g=>g.callback(v,r)):(i=this.bindings[o])===null||i===void 0||i.filter(g=>{var y,f,M,w,b,m;if(["broadcast","presence","postgres_changes"].includes(o))if("id"in g){const E=g.id,B=(y=g.filter)===null||y===void 0?void 0:y.event;return E&&((f=a.ids)===null||f===void 0?void 0:f.includes(E))&&(B==="*"||(B==null?void 0:B.toLocaleLowerCase())===((M=a.data)===null||M===void 0?void 0:M.type.toLocaleLowerCase()))}else{const E=(b=(w=g==null?void 0:g.filter)===null||w===void 0?void 0:w.event)===null||b===void 0?void 0:b.toLocaleLowerCase();return E==="*"||E===((m=a==null?void 0:a.event)===null||m===void 0?void 0:m.toLocaleLowerCase())}else return g.type.toLocaleLowerCase()===o}).map(g=>{if(typeof v=="object"&&"ids"in v){const y=v.data,{schema:f,table:M,commit_timestamp:w,type:b,errors:m}=y;v=Object.assign(Object.assign({},{schema:f,table:M,commit_timestamp:w,eventType:b,new:{},old:{},errors:m}),this._getPayloadRecords(y))}g.callback(v,r)})}_isClosed(){return this.state===j.closed}_isJoined(){return this.state===j.joined}_isJoining(){return this.state===j.joining}_isLeaving(){return this.state===j.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,a,r){const n=t.toLocaleLowerCase(),i={type:n,filter:a,callback:r};return this.bindings[n]?this.bindings[n].push(i):this.bindings[n]=[i],this}_off(t,a){const r=t.toLocaleLowerCase();return this.bindings[r]&&(this.bindings[r]=this.bindings[r].filter(n=>{var i;return!(((i=n.type)===null||i===void 0?void 0:i.toLocaleLowerCase())===r&&xt.isEqual(n.filter,a))})),this}static isEqual(t,a){if(Object.keys(t).length!==Object.keys(a).length)return!1;for(const r in t)if(t[r]!==a[r])return!1;return!0}static isFilterValueEqual(t,a){return(t??void 0)===(a??void 0)}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(W.close,{},t)}_onError(t){this._on(W.error,{},a=>t(a))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=j.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const a={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(a.new=Ka(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(a.old=Ka(t.columns,t.old_record)),a}}const pe=()=>{},Ft={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},QM=[1e3,2e3,5e3,1e4],XM=1e4,tx=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class ex{constructor(t,a){var r;if(this.accessTokenValue=null,this.apiKey=null,this._manuallySetToken=!1,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=ua,this.transport=null,this.heartbeatIntervalMs=Ft.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=pe,this.ref=0,this.reconnectTimer=null,this.vsn=Wa,this.logger=pe,this.conn=null,this.sendBuffer=[],this.serializer=new zM,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=n=>n?(...i)=>n(...i):(...i)=>fetch(...i),!(!((r=a==null?void 0:a.params)===null||r===void 0)&&r.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=a.params.apikey,this.endPoint=`${t}/${va.websocket}`,this.httpEndpoint=G7(t),this._initializeOptions(a),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(a==null?void 0:a.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=DM.createWebSocket(this.endpointURL())}catch(t){this._setConnectionState("disconnected");const a=t.message;throw a.includes("Node.js")?new Error(`${a}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${a}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:this.vsn}))}disconnect(t,a){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const r=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(r),this._setConnectionState("disconnected")},typeof this.conn.close=="function"&&(t?this.conn.close(t,a??""):this.conn.close()),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(t){const a=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),a}async removeAllChannels(){const t=await Promise.all(this.channels.map(a=>a.unsubscribe()));return this.channels=[],this.disconnect(),t}log(t,a,r){this.logger(t,a,r)}connectionState(){switch(this.conn&&this.conn.readyState){case tt.connecting:return ot.Connecting;case tt.open:return ot.Open;case tt.closing:return ot.Closing;default:return ot.Closed}}isConnected(){return this.connectionState()===ot.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(t,a={config:{}}){const r=`realtime:${t}`,n=this.getChannels().find(i=>i.topic===r);if(n)return n;{const i=new xt(`realtime:${t}`,a,this);return this.channels.push(i),i}}push(t){const{topic:a,event:r,payload:n,ref:i}=t,o=()=>{this.encode(t,c=>{var h;(h=this.conn)===null||h===void 0||h.send(c)})};this.log("push",`${a} ${r} (${i})`,n),this.isConnected()?o():this.sendBuffer.push(o)}async setAuth(t=null){this._authPromise=this._performAuth(t);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){var t;if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(a){this.log("error","error in heartbeat callback",a)}return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(a){this.log("error","error in heartbeat callback",a)}this._wasManualDisconnect=!1,(t=this.conn)===null||t===void 0||t.close(qM,"heartbeat timeout"),setTimeout(()=>{var a;this.isConnected()||(a=this.reconnectTimer)===null||a===void 0||a.scheduleTimeout()},Ft.HEARTBEAT_TIMEOUT_FALLBACK);return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(a){this.log("error","error in heartbeat callback",a)}this._setAuthSafely("heartbeat")}onHeartbeat(t){this.heartbeatCallback=t}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let a=this.channels.find(r=>r.topic===t&&(r._isJoined()||r._isJoining()));a&&(this.log("transport",`leaving duplicate topic "${t}"`),a.unsubscribe())}_remove(t){this.channels=this.channels.filter(a=>a.topic!==t.topic)}_onConnMessage(t){this.decode(t.data,a=>{if(a.topic==="phoenix"&&a.event==="phx_reply")try{this.heartbeatCallback(a.payload.status==="ok"?"ok":"error")}catch(d){this.log("error","error in heartbeat callback",d)}a.ref&&a.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null);const{topic:r,event:n,payload:i,ref:o}=a,c=o?`(${o})`:"",h=i.status||"";this.log("receive",`${h} ${r} ${n} ${c}`.trim(),i),this.channels.filter(d=>d._isMember(r)).forEach(d=>d._trigger(n,i,o)),this._triggerStateCallbacks("message",a)})}_clearTimer(t){var a;t==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):t==="reconnect"&&((a=this.reconnectTimer)===null||a===void 0||a.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t),this.conn.readyState===tt.open&&this._onConnOpen())}_teardownConnection(){if(this.conn){if(this.conn.readyState===tt.open||this.conn.readyState===tt.connecting)try{this.conn.close()}catch(t){this.log("error","Error closing connection",t)}this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null}this._clearAllTimers(),this._terminateWorker(),this.channels.forEach(t=>t.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).then(()=>{this.flushSendBuffer()}).catch(a=>{this.log("error","error waiting for auth on connect",a),this.flushSendBuffer()}),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const t=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(t),this.workerRef.onerror=a=>{this.log("worker","worker error",a.message),this._terminateWorker()},this.workerRef.onmessage=a=>{a.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_onConnClose(t){var a;this._setConnectionState("disconnected"),this.log("transport","close",t),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(a=this.reconnectTimer)===null||a===void 0||a.scheduleTimeout(),this._triggerStateCallbacks("close",t)}_onConnError(t){this._setConnectionState("disconnected"),this.log("transport",`${t}`),this._triggerChanError(),this._triggerStateCallbacks("error",t)}_triggerChanError(){this.channels.forEach(t=>t._trigger(W.error))}_appendParams(t,a){if(Object.keys(a).length===0)return t;const r=t.match(/\?/)?"&":"?",n=new URLSearchParams(a);return`${t}${r}${n}`}_workerObjectUrl(t){let a;if(t)a=t;else{const r=new Blob([tx],{type:"application/javascript"});a=URL.createObjectURL(r)}return a}_setConnectionState(t,a=!1){this._connectionState=t,t==="connecting"?this._wasManualDisconnect=!1:t==="disconnecting"&&(this._wasManualDisconnect=a)}async _performAuth(t=null){let a,r=!1;if(t)a=t,r=!0;else if(this.accessToken)try{a=await this.accessToken()}catch(n){this.log("error","Error fetching access token from callback",n),a=this.accessTokenValue}else a=this.accessTokenValue;r?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=a&&(this.accessTokenValue=a,this.channels.forEach(n=>{const i={access_token:a,version:UM};a&&n.updateJoinPayload(i),n.joinedOnce&&n._isJoined()&&n._push(W.access_token,{access_token:a})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(t="general"){this._isManualToken()||this.setAuth().catch(a=>{this.log("error",`Error setting auth in ${t}`,a)})}_triggerStateCallbacks(t,a){try{this.stateChangeCallbacks[t].forEach(r=>{try{r(a)}catch(n){this.log("error",`error in ${t} callback`,n)}})}catch(r){this.log("error",`error triggering ${t} callbacks`,r)}}_setupReconnectionTimer(){this.reconnectTimer=new z7(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},Ft.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(t){var a,r,n,i,o,c,h,d,p,u,v,g;switch(this.transport=(a=t==null?void 0:t.transport)!==null&&a!==void 0?a:null,this.timeout=(r=t==null?void 0:t.timeout)!==null&&r!==void 0?r:ua,this.heartbeatIntervalMs=(n=t==null?void 0:t.heartbeatIntervalMs)!==null&&n!==void 0?n:Ft.HEARTBEAT_INTERVAL,this.worker=(i=t==null?void 0:t.worker)!==null&&i!==void 0?i:!1,this.accessToken=(o=t==null?void 0:t.accessToken)!==null&&o!==void 0?o:null,this.heartbeatCallback=(c=t==null?void 0:t.heartbeatCallback)!==null&&c!==void 0?c:pe,this.vsn=(h=t==null?void 0:t.vsn)!==null&&h!==void 0?h:Wa,t!=null&&t.params&&(this.params=t.params),t!=null&&t.logger&&(this.logger=t.logger),(t!=null&&t.logLevel||t!=null&&t.log_level)&&(this.logLevel=t.logLevel||t.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(d=t==null?void 0:t.reconnectAfterMs)!==null&&d!==void 0?d:y=>QM[y-1]||XM,this.vsn){case F7:this.encode=(p=t==null?void 0:t.encode)!==null&&p!==void 0?p:(y,f)=>f(JSON.stringify(y)),this.decode=(u=t==null?void 0:t.decode)!==null&&u!==void 0?u:(y,f)=>f(JSON.parse(y));break;case NM:this.encode=(v=t==null?void 0:t.encode)!==null&&v!==void 0?v:this.serializer.encode.bind(this.serializer),this.decode=(g=t==null?void 0:t.decode)!==null&&g!==void 0?g:this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${this.vsn}`)}if(this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=t==null?void 0:t.workerUrl}}}var Ot=class extends Error{constructor(e,t){var a;super(e),this.name="IcebergError",this.status=t.status,this.icebergType=t.icebergType,this.icebergCode=t.icebergCode,this.details=t.details,this.isCommitStateUnknown=t.icebergType==="CommitStateUnknownException"||[500,502,504].includes(t.status)&&((a=t.icebergType)==null?void 0:a.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function ax(e,t,a){const r=new URL(t,e);if(a)for(const[n,i]of Object.entries(a))i!==void 0&&r.searchParams.set(n,i);return r.toString()}async function sx(e){return!e||e.type==="none"?{}:e.type==="bearer"?{Authorization:`Bearer ${e.token}`}:e.type==="header"?{[e.name]:e.value}:e.type==="custom"?await e.getHeaders():{}}function rx(e){const t=e.fetchImpl??globalThis.fetch;return{async request({method:a,path:r,query:n,body:i,headers:o}){const c=ax(e.baseUrl,r,n),h=await sx(e.auth),d=await t(c,{method:a,headers:{...i?{"Content-Type":"application/json"}:{},...h,...o},body:i?JSON.stringify(i):void 0}),p=await d.text(),u=(d.headers.get("content-type")||"").includes("application/json"),v=u&&p?JSON.parse(p):p;if(!d.ok){const g=u?v:void 0,y=g==null?void 0:g.error;throw new Ot((y==null?void 0:y.message)??`Request failed with status ${d.status}`,{status:d.status,icebergType:y==null?void 0:y.type,icebergCode:y==null?void 0:y.code,details:g})}return{status:d.status,headers:d.headers,data:v}}}}function zt(e){return e.join("")}var nx=class{constructor(e,t=""){this.client=e,this.prefix=t}async listNamespaces(e){const t=e?{parent:zt(e.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:t})).data.namespaces.map(r=>({namespace:r}))}async createNamespace(e,t){const a={namespace:e.namespace,properties:t==null?void 0:t.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:a})).data}async dropNamespace(e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${zt(e.namespace)}`})}async loadNamespaceMetadata(e){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${zt(e.namespace)}`})).data.properties}}async namespaceExists(e){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${zt(e.namespace)}`}),!0}catch(t){if(t instanceof Ot&&t.status===404)return!1;throw t}}async createNamespaceIfNotExists(e,t){try{return await this.createNamespace(e,t)}catch(a){if(a instanceof Ot&&a.status===409)return;throw a}}};function lt(e){return e.join("")}var ix=class{constructor(e,t="",a){this.client=e,this.prefix=t,this.accessDelegation=a}async listTables(e){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${lt(e.namespace)}/tables`})).data.identifiers}async createTable(e,t){const a={};return this.accessDelegation&&(a["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${lt(e.namespace)}/tables`,body:t,headers:a})).data.metadata}async updateTable(e,t){const a=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${lt(e.namespace)}/tables/${e.name}`,body:t});return{"metadata-location":a.data["metadata-location"],metadata:a.data.metadata}}async dropTable(e,t){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${lt(e.namespace)}/tables/${e.name}`,query:{purgeRequested:String((t==null?void 0:t.purge)??!1)}})}async loadTable(e){const t={};return this.accessDelegation&&(t["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${lt(e.namespace)}/tables/${e.name}`,headers:t})).data.metadata}async tableExists(e){const t={};this.accessDelegation&&(t["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${lt(e.namespace)}/tables/${e.name}`,headers:t}),!0}catch(a){if(a instanceof Ot&&a.status===404)return!1;throw a}}async createTableIfNotExists(e,t){try{return await this.createTable(e,t)}catch(a){if(a instanceof Ot&&a.status===409)return await this.loadTable({namespace:e.namespace,name:t.name});throw a}}},ox=class{constructor(e){var r;let t="v1";e.catalogName&&(t+=`/${e.catalogName}`);const a=e.baseUrl.endsWith("/")?e.baseUrl:`${e.baseUrl}/`;this.client=rx({baseUrl:a,auth:e.auth,fetchImpl:e.fetch}),this.accessDelegation=(r=e.accessDelegation)==null?void 0:r.join(","),this.namespaceOps=new nx(this.client,t),this.tableOps=new ix(this.client,t,this.accessDelegation)}async listNamespaces(e){return this.namespaceOps.listNamespaces(e)}async createNamespace(e,t){return this.namespaceOps.createNamespace(e,t)}async dropNamespace(e){await this.namespaceOps.dropNamespace(e)}async loadNamespaceMetadata(e){return this.namespaceOps.loadNamespaceMetadata(e)}async listTables(e){return this.tableOps.listTables(e)}async createTable(e,t){return this.tableOps.createTable(e,t)}async updateTable(e,t){return this.tableOps.updateTable(e,t)}async dropTable(e,t){await this.tableOps.dropTable(e,t)}async loadTable(e){return this.tableOps.loadTable(e)}async namespaceExists(e){return this.namespaceOps.namespaceExists(e)}async tableExists(e){return this.tableOps.tableExists(e)}async createNamespaceIfNotExists(e,t){return this.namespaceOps.createNamespaceIfNotExists(e,t)}async createTableIfNotExists(e,t){return this.tableOps.createTableIfNotExists(e,t)}},ie=class extends Error{constructor(e){super(e),this.__isStorageError=!0,this.name="StorageError"}};function R(e){return typeof e=="object"&&e!==null&&"__isStorageError"in e}var cx=class extends ie{constructor(e,t,a){super(e),this.name="StorageApiError",this.status=t,this.statusCode=a}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}},ya=class extends ie{constructor(e,t){super(e),this.name="StorageUnknownError",this.originalError=t}};const Ca=e=>e?(...t)=>e(...t):(...t)=>fetch(...t),hx=()=>Response,fa=e=>{if(Array.isArray(e))return e.map(a=>fa(a));if(typeof e=="function"||e!==Object(e))return e;const t={};return Object.entries(e).forEach(([a,r])=>{const n=a.replace(/([-_][a-z])/gi,i=>i.toUpperCase().replace(/[-_]/g,""));t[n]=fa(r)}),t},dx=e=>{if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},lx=e=>!e||typeof e!="string"||e.length===0||e.length>100||e.trim()!==e||e.includes("/")||e.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(e);function Vt(e){"@babel/helpers - typeof";return Vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vt(e)}function px(e,t){if(Vt(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(Vt(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ux(e){var t=px(e,"string");return Vt(t)=="symbol"?t:t+""}function vx(e,t,a){return(t=ux(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Qa(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Qa(Object(a),!0).forEach(function(r){vx(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Qa(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}const ue=e=>{var t;return e.msg||e.message||e.error_description||(typeof e.error=="string"?e.error:(t=e.error)===null||t===void 0?void 0:t.message)||JSON.stringify(e)},gx=async(e,t,a)=>{e instanceof await hx()&&!(a!=null&&a.noResolveJson)?e.json().then(r=>{const n=e.status||500,i=(r==null?void 0:r.statusCode)||n+"";t(new cx(ue(r),n,i))}).catch(r=>{t(new ya(ue(r),r))}):t(new ya(ue(e),e))},yx=(e,t,a,r)=>{const n={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"||!r?n:(dx(r)?(n.headers=S({"Content-Type":"application/json"},t==null?void 0:t.headers),n.body=JSON.stringify(r)):n.body=r,t!=null&&t.duplex&&(n.duplex=t.duplex),S(S({},n),a))};async function Bt(e,t,a,r,n,i){return new Promise((o,c)=>{e(a,yx(t,r,n,i)).then(h=>{if(!h.ok)throw h;return r!=null&&r.noResolveJson?h:h.json()}).then(h=>o(h)).catch(h=>gx(h,c,r))})}async function Rt(e,t,a,r){return Bt(e,"GET",t,a,r)}async function G(e,t,a,r,n){return Bt(e,"POST",t,r,n,a)}async function ma(e,t,a,r,n){return Bt(e,"PUT",t,r,n,a)}async function fx(e,t,a,r){return Bt(e,"HEAD",t,S(S({},a),{},{noResolveJson:!0}),r)}async function Ta(e,t,a,r,n){return Bt(e,"DELETE",t,r,n,a)}var mx=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t}then(e,t){return this.execute().then(e,t)}async execute(){var e=this;try{return{data:(await e.downloadFn()).body,error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(R(t))return{data:null,error:t};throw t}}};let W7;W7=Symbol.toStringTag;var Mx=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[W7]="BlobDownloadBuilder",this.promise=null}asStream(){return new mx(this.downloadFn,this.shouldThrowOnError)}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var e=this;try{return{data:await(await e.downloadFn()).blob(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(R(t))return{data:null,error:t};throw t}}};const xx={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Xa={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var wx=class{constructor(e,t={},a,r){this.shouldThrowOnError=!1,this.url=e,this.headers=t,this.bucketId=a,this.fetch=Ca(r)}throwOnError(){return this.shouldThrowOnError=!0,this}async uploadOrUpdate(e,t,a,r){var n=this;try{let i;const o=S(S({},Xa),r);let c=S(S({},n.headers),e==="POST"&&{"x-upsert":String(o.upsert)});const h=o.metadata;typeof Blob<"u"&&a instanceof Blob?(i=new FormData,i.append("cacheControl",o.cacheControl),h&&i.append("metadata",n.encodeMetadata(h)),i.append("",a)):typeof FormData<"u"&&a instanceof FormData?(i=a,i.has("cacheControl")||i.append("cacheControl",o.cacheControl),h&&!i.has("metadata")&&i.append("metadata",n.encodeMetadata(h))):(i=a,c["cache-control"]=`max-age=${o.cacheControl}`,c["content-type"]=o.contentType,h&&(c["x-metadata"]=n.toBase64(n.encodeMetadata(h))),(typeof ReadableStream<"u"&&i instanceof ReadableStream||i&&typeof i=="object"&&"pipe"in i&&typeof i.pipe=="function")&&!o.duplex&&(o.duplex="half")),r!=null&&r.headers&&(c=S(S({},c),r.headers));const d=n._removeEmptyFolders(t),p=n._getFinalPath(d),u=await(e=="PUT"?ma:G)(n.fetch,`${n.url}/object/${p}`,i,S({headers:c},o!=null&&o.duplex?{duplex:o.duplex}:{}));return{data:{path:d,id:u.Id,fullPath:u.Key},error:null}}catch(i){if(n.shouldThrowOnError)throw i;if(R(i))return{data:null,error:i};throw i}}async upload(e,t,a){return this.uploadOrUpdate("POST",e,t,a)}async uploadToSignedUrl(e,t,a,r){var n=this;const i=n._removeEmptyFolders(e),o=n._getFinalPath(i),c=new URL(n.url+`/object/upload/sign/${o}`);c.searchParams.set("token",t);try{let h;const d=S({upsert:Xa.upsert},r),p=S(S({},n.headers),{"x-upsert":String(d.upsert)});return typeof Blob<"u"&&a instanceof Blob?(h=new FormData,h.append("cacheControl",d.cacheControl),h.append("",a)):typeof FormData<"u"&&a instanceof FormData?(h=a,h.append("cacheControl",d.cacheControl)):(h=a,p["cache-control"]=`max-age=${d.cacheControl}`,p["content-type"]=d.contentType),{data:{path:i,fullPath:(await ma(n.fetch,c.toString(),h,{headers:p})).Key},error:null}}catch(h){if(n.shouldThrowOnError)throw h;if(R(h))return{data:null,error:h};throw h}}async createSignedUploadUrl(e,t){var a=this;try{let r=a._getFinalPath(e);const n=S({},a.headers);t!=null&&t.upsert&&(n["x-upsert"]="true");const i=await G(a.fetch,`${a.url}/object/upload/sign/${r}`,{},{headers:n}),o=new URL(a.url+i.url),c=o.searchParams.get("token");if(!c)throw new ie("No token returned by API");return{data:{signedUrl:o.toString(),path:e,token:c},error:null}}catch(r){if(a.shouldThrowOnError)throw r;if(R(r))return{data:null,error:r};throw r}}async update(e,t,a){return this.uploadOrUpdate("PUT",e,t,a)}async move(e,t,a){var r=this;try{return{data:await G(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:a==null?void 0:a.destinationBucket},{headers:r.headers}),error:null}}catch(n){if(r.shouldThrowOnError)throw n;if(R(n))return{data:null,error:n};throw n}}async copy(e,t,a){var r=this;try{return{data:{path:(await G(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:a==null?void 0:a.destinationBucket},{headers:r.headers})).Key},error:null}}catch(n){if(r.shouldThrowOnError)throw n;if(R(n))return{data:null,error:n};throw n}}async createSignedUrl(e,t,a){var r=this;try{let n=r._getFinalPath(e),i=await G(r.fetch,`${r.url}/object/sign/${n}`,S({expiresIn:t},a!=null&&a.transform?{transform:a.transform}:{}),{headers:r.headers});const o=a!=null&&a.download?`&download=${a.download===!0?"":a.download}`:"";return i={signedUrl:encodeURI(`${r.url}${i.signedURL}${o}`)},{data:i,error:null}}catch(n){if(r.shouldThrowOnError)throw n;if(R(n))return{data:null,error:n};throw n}}async createSignedUrls(e,t,a){var r=this;try{const n=await G(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:t,paths:e},{headers:r.headers}),i=a!=null&&a.download?`&download=${a.download===!0?"":a.download}`:"";return{data:n.map(o=>S(S({},o),{},{signedUrl:o.signedURL?encodeURI(`${r.url}${o.signedURL}${i}`):null})),error:null}}catch(n){if(r.shouldThrowOnError)throw n;if(R(n))return{data:null,error:n};throw n}}download(e,t){const a=typeof(t==null?void 0:t.transform)<"u"?"render/image/authenticated":"object",r=this.transformOptsToQueryString((t==null?void 0:t.transform)||{}),n=r?`?${r}`:"",i=this._getFinalPath(e),o=()=>Rt(this.fetch,`${this.url}/${a}/${i}${n}`,{headers:this.headers,noResolveJson:!0});return new Mx(o,this.shouldThrowOnError)}async info(e){var t=this;const a=t._getFinalPath(e);try{return{data:fa(await Rt(t.fetch,`${t.url}/object/info/${a}`,{headers:t.headers})),error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(R(r))return{data:null,error:r};throw r}}async exists(e){var t=this;const a=t._getFinalPath(e);try{return await fx(t.fetch,`${t.url}/object/${a}`,{headers:t.headers}),{data:!0,error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(R(r)&&r instanceof ya){const n=r.originalError;if([400,404].includes(n==null?void 0:n.status))return{data:!1,error:r}}throw r}}getPublicUrl(e,t){const a=this._getFinalPath(e),r=[],n=t!=null&&t.download?`download=${t.download===!0?"":t.download}`:"";n!==""&&r.push(n);const i=typeof(t==null?void 0:t.transform)<"u"?"render/image":"object",o=this.transformOptsToQueryString((t==null?void 0:t.transform)||{});o!==""&&r.push(o);let c=r.join("&");return c!==""&&(c=`?${c}`),{data:{publicUrl:encodeURI(`${this.url}/${i}/public/${a}${c}`)}}}async remove(e){var t=this;try{return{data:await Ta(t.fetch,`${t.url}/object/${t.bucketId}`,{prefixes:e},{headers:t.headers}),error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(R(a))return{data:null,error:a};throw a}}async list(e,t,a){var r=this;try{const n=S(S(S({},xx),t),{},{prefix:e||""});return{data:await G(r.fetch,`${r.url}/object/list/${r.bucketId}`,n,{headers:r.headers},a),error:null}}catch(n){if(r.shouldThrowOnError)throw n;if(R(n))return{data:null,error:n};throw n}}async listV2(e,t){var a=this;try{const r=S({},e);return{data:await G(a.fetch,`${a.url}/object/list-v2/${a.bucketId}`,r,{headers:a.headers},t),error:null}}catch(r){if(a.shouldThrowOnError)throw r;if(R(r))return{data:null,error:r};throw r}}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<"u"?Buffer.from(e).toString("base64"):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,"")}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(e){const t=[];return e.width&&t.push(`width=${e.width}`),e.height&&t.push(`height=${e.height}`),e.resize&&t.push(`resize=${e.resize}`),e.format&&t.push(`format=${e.format}`),e.quality&&t.push(`quality=${e.quality}`),t.join("&")}};const K7="2.89.0",J7={"X-Client-Info":`storage-js/${K7}`};var bx=class{constructor(e,t={},a,r){this.shouldThrowOnError=!1;const n=new URL(e);r!=null&&r.useNewHostname&&/supabase\.(co|in|red)$/.test(n.hostname)&&!n.hostname.includes("storage.supabase.")&&(n.hostname=n.hostname.replace("supabase.","storage.supabase.")),this.url=n.href.replace(/\/$/,""),this.headers=S(S({},J7),t),this.fetch=Ca(a)}throwOnError(){return this.shouldThrowOnError=!0,this}async listBuckets(e){var t=this;try{const a=t.listBucketOptionsToQueryString(e);return{data:await Rt(t.fetch,`${t.url}/bucket${a}`,{headers:t.headers}),error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(R(a))return{data:null,error:a};throw a}}async getBucket(e){var t=this;try{return{data:await Rt(t.fetch,`${t.url}/bucket/${e}`,{headers:t.headers}),error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(R(a))return{data:null,error:a};throw a}}async createBucket(e,t={public:!1}){var a=this;try{return{data:await G(a.fetch,`${a.url}/bucket`,{id:e,name:e,type:t.type,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:a.headers}),error:null}}catch(r){if(a.shouldThrowOnError)throw r;if(R(r))return{data:null,error:r};throw r}}async updateBucket(e,t){var a=this;try{return{data:await ma(a.fetch,`${a.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:a.headers}),error:null}}catch(r){if(a.shouldThrowOnError)throw r;if(R(r))return{data:null,error:r};throw r}}async emptyBucket(e){var t=this;try{return{data:await G(t.fetch,`${t.url}/bucket/${e}/empty`,{},{headers:t.headers}),error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(R(a))return{data:null,error:a};throw a}}async deleteBucket(e){var t=this;try{return{data:await Ta(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}),error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(R(a))return{data:null,error:a};throw a}}listBucketOptionsToQueryString(e){const t={};return e&&("limit"in e&&(t.limit=String(e.limit)),"offset"in e&&(t.offset=String(e.offset)),e.search&&(t.search=e.search),e.sortColumn&&(t.sortColumn=e.sortColumn),e.sortOrder&&(t.sortOrder=e.sortOrder)),Object.keys(t).length>0?"?"+new URLSearchParams(t).toString():""}},_x=class{constructor(e,t={},a){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=S(S({},J7),t),this.fetch=Ca(a)}throwOnError(){return this.shouldThrowOnError=!0,this}async createBucket(e){var t=this;try{return{data:await G(t.fetch,`${t.url}/bucket`,{name:e},{headers:t.headers}),error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(R(a))return{data:null,error:a};throw a}}async listBuckets(e){var t=this;try{const a=new URLSearchParams;(e==null?void 0:e.limit)!==void 0&&a.set("limit",e.limit.toString()),(e==null?void 0:e.offset)!==void 0&&a.set("offset",e.offset.toString()),e!=null&&e.sortColumn&&a.set("sortColumn",e.sortColumn),e!=null&&e.sortOrder&&a.set("sortOrder",e.sortOrder),e!=null&&e.search&&a.set("search",e.search);const r=a.toString(),n=r?`${t.url}/bucket?${r}`:`${t.url}/bucket`;return{data:await Rt(t.fetch,n,{headers:t.headers}),error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(R(a))return{data:null,error:a};throw a}}async deleteBucket(e){var t=this;try{return{data:await Ta(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}),error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(R(a))return{data:null,error:a};throw a}}from(e){var t=this;if(!lx(e))throw new ie("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const a=new ox({baseUrl:this.url,catalogName:e,auth:{type:"custom",getHeaders:async()=>t.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(a,{get(n,i){const o=n[i];return typeof o!="function"?o:async(...c)=>{try{return{data:await o.apply(n,c),error:null}}catch(h){if(r)throw h;return{data:null,error:h}}}}})}};const La={"X-Client-Info":`storage-js/${K7}`,"Content-Type":"application/json"};var Y7=class extends Error{constructor(e){super(e),this.__isStorageVectorsError=!0,this.name="StorageVectorsError"}};function F(e){return typeof e=="object"&&e!==null&&"__isStorageVectorsError"in e}var ve=class extends Y7{constructor(e,t,a){super(e),this.name="StorageVectorsApiError",this.status=t,this.statusCode=a}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}},Sx=class extends Y7{constructor(e,t){super(e),this.name="StorageVectorsUnknownError",this.originalError=t}};const Ha=e=>e?(...t)=>e(...t):(...t)=>fetch(...t),Ax=e=>{if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ts=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),kx=async(e,t,a)=>{if(e&&typeof e=="object"&&"status"in e&&"ok"in e&&typeof e.status=="number"&&!(a!=null&&a.noResolveJson)){const r=e.status||500,n=e;if(typeof n.json=="function")n.json().then(i=>{const o=(i==null?void 0:i.statusCode)||(i==null?void 0:i.code)||r+"";t(new ve(ts(i),r,o))}).catch(()=>{const i=r+"";t(new ve(n.statusText||`HTTP ${r} error`,r,i))});else{const i=r+"";t(new ve(n.statusText||`HTTP ${r} error`,r,i))}}else t(new Sx(ts(e),e))},Ex=(e,t,a,r)=>{const n={method:e,headers:(t==null?void 0:t.headers)||{}};return r?(Ax(r)?(n.headers=S({"Content-Type":"application/json"},t==null?void 0:t.headers),n.body=JSON.stringify(r)):n.body=r,S(S({},n),a)):n};async function Cx(e,t,a,r,n,i){return new Promise((o,c)=>{e(a,Ex(t,r,n,i)).then(h=>{if(!h.ok)throw h;if(r!=null&&r.noResolveJson)return h;const d=h.headers.get("content-type");return!d||!d.includes("application/json")?{}:h.json()}).then(h=>o(h)).catch(h=>kx(h,c,r))})}async function z(e,t,a,r,n){return Cx(e,"POST",t,r,n,a)}var Tx=class{constructor(e,t={},a){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=S(S({},La),t),this.fetch=Ha(a)}throwOnError(){return this.shouldThrowOnError=!0,this}async createIndex(e){var t=this;try{return{data:await z(t.fetch,`${t.url}/CreateIndex`,e,{headers:t.headers})||{},error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(F(a))return{data:null,error:a};throw a}}async getIndex(e,t){var a=this;try{return{data:await z(a.fetch,`${a.url}/GetIndex`,{vectorBucketName:e,indexName:t},{headers:a.headers}),error:null}}catch(r){if(a.shouldThrowOnError)throw r;if(F(r))return{data:null,error:r};throw r}}async listIndexes(e){var t=this;try{return{data:await z(t.fetch,`${t.url}/ListIndexes`,e,{headers:t.headers}),error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(F(a))return{data:null,error:a};throw a}}async deleteIndex(e,t){var a=this;try{return{data:await z(a.fetch,`${a.url}/DeleteIndex`,{vectorBucketName:e,indexName:t},{headers:a.headers})||{},error:null}}catch(r){if(a.shouldThrowOnError)throw r;if(F(r))return{data:null,error:r};throw r}}},Lx=class{constructor(e,t={},a){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=S(S({},La),t),this.fetch=Ha(a)}throwOnError(){return this.shouldThrowOnError=!0,this}async putVectors(e){var t=this;try{if(e.vectors.length<1||e.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return{data:await z(t.fetch,`${t.url}/PutVectors`,e,{headers:t.headers})||{},error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(F(a))return{data:null,error:a};throw a}}async getVectors(e){var t=this;try{return{data:await z(t.fetch,`${t.url}/GetVectors`,e,{headers:t.headers}),error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(F(a))return{data:null,error:a};throw a}}async listVectors(e){var t=this;try{if(e.segmentCount!==void 0){if(e.segmentCount<1||e.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(e.segmentIndex!==void 0&&(e.segmentIndex<0||e.segmentIndex>=e.segmentCount))throw new Error(`segmentIndex must be between 0 and ${e.segmentCount-1}`)}return{data:await z(t.fetch,`${t.url}/ListVectors`,e,{headers:t.headers}),error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(F(a))return{data:null,error:a};throw a}}async queryVectors(e){var t=this;try{return{data:await z(t.fetch,`${t.url}/QueryVectors`,e,{headers:t.headers}),error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(F(a))return{data:null,error:a};throw a}}async deleteVectors(e){var t=this;try{if(e.keys.length<1||e.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return{data:await z(t.fetch,`${t.url}/DeleteVectors`,e,{headers:t.headers})||{},error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(F(a))return{data:null,error:a};throw a}}},Hx=class{constructor(e,t={},a){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=S(S({},La),t),this.fetch=Ha(a)}throwOnError(){return this.shouldThrowOnError=!0,this}async createBucket(e){var t=this;try{return{data:await z(t.fetch,`${t.url}/CreateVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{},error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(F(a))return{data:null,error:a};throw a}}async getBucket(e){var t=this;try{return{data:await z(t.fetch,`${t.url}/GetVectorBucket`,{vectorBucketName:e},{headers:t.headers}),error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(F(a))return{data:null,error:a};throw a}}async listBuckets(e={}){var t=this;try{return{data:await z(t.fetch,`${t.url}/ListVectorBuckets`,e,{headers:t.headers}),error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(F(a))return{data:null,error:a};throw a}}async deleteBucket(e){var t=this;try{return{data:await z(t.fetch,`${t.url}/DeleteVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{},error:null}}catch(a){if(t.shouldThrowOnError)throw a;if(F(a))return{data:null,error:a};throw a}}},Ox=class extends Hx{constructor(e,t={}){super(e,t.headers||{},t.fetch)}from(e){return new Vx(this.url,this.headers,e,this.fetch)}async createBucket(e){var t=()=>super.createBucket,a=this;return t().call(a,e)}async getBucket(e){var t=()=>super.getBucket,a=this;return t().call(a,e)}async listBuckets(e={}){var t=()=>super.listBuckets,a=this;return t().call(a,e)}async deleteBucket(e){var t=()=>super.deleteBucket,a=this;return t().call(a,e)}},Vx=class extends Tx{constructor(e,t,a,r){super(e,t,r),this.vectorBucketName=a}async createIndex(e){var t=()=>super.createIndex,a=this;return t().call(a,S(S({},e),{},{vectorBucketName:a.vectorBucketName}))}async listIndexes(e={}){var t=()=>super.listIndexes,a=this;return t().call(a,S(S({},e),{},{vectorBucketName:a.vectorBucketName}))}async getIndex(e){var t=()=>super.getIndex,a=this;return t().call(a,a.vectorBucketName,e)}async deleteIndex(e){var t=()=>super.deleteIndex,a=this;return t().call(a,a.vectorBucketName,e)}index(e){return new Rx(this.url,this.headers,this.vectorBucketName,e,this.fetch)}},Rx=class extends Lx{constructor(e,t,a,r,n){super(e,t,n),this.vectorBucketName=a,this.indexName=r}async putVectors(e){var t=()=>super.putVectors,a=this;return t().call(a,S(S({},e),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async getVectors(e){var t=()=>super.getVectors,a=this;return t().call(a,S(S({},e),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async listVectors(e={}){var t=()=>super.listVectors,a=this;return t().call(a,S(S({},e),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async queryVectors(e){var t=()=>super.queryVectors,a=this;return t().call(a,S(S({},e),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async deleteVectors(e){var t=()=>super.deleteVectors,a=this;return t().call(a,S(S({},e),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}},Px=class extends bx{constructor(e,t={},a,r){super(e,t,a,r)}from(e){return new wx(this.url,this.headers,e,this.fetch)}get vectors(){return new Ox(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new _x(this.url+"/iceberg",this.headers,this.fetch)}};const Q7="2.89.0",mt=30*1e3,Ma=3,ge=Ma*mt,Ix="http://localhost:9999",$x="supabase.auth.token",jx={"X-Client-Info":`gotrue-js/${Q7}`},xa="X-Supabase-Api-Version",X7={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},Dx=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Bx=10*60*1e3;class Pt extends Error{constructor(t,a,r){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=a,this.code=r}}function x(e){return typeof e=="object"&&e!==null&&"__isAuthError"in e}class Ux extends Pt{constructor(t,a,r){super(t,a,r),this.name="AuthApiError",this.status=a,this.code=r}}function Nx(e){return x(e)&&e.name==="AuthApiError"}class ct extends Pt{constructor(t,a){super(t),this.name="AuthUnknownError",this.originalError=a}}class Y extends Pt{constructor(t,a,r,n){super(t,r,n),this.name=a,this.status=r}}class q extends Y{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function qx(e){return x(e)&&e.name==="AuthSessionMissingError"}class pt extends Y{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Zt extends Y{constructor(t){super(t,"AuthInvalidCredentialsError",400,void 0)}}class Gt extends Y{constructor(t,a=null){super(t,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=a}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function Fx(e){return x(e)&&e.name==="AuthImplicitGrantRedirectError"}class es extends Y{constructor(t,a=null){super(t,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=a}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class zx extends Y{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class wa extends Y{constructor(t,a){super(t,"AuthRetryableFetchError",a,void 0)}}function ye(e){return x(e)&&e.name==="AuthRetryableFetchError"}class as extends Y{constructor(t,a,r){super(t,"AuthWeakPasswordError",a,"weak_password"),this.reasons=r}}class ba extends Y{constructor(t){super(t,"AuthInvalidJwtError",400,"invalid_jwt")}}const Qt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),ss=` 	
\r=`.split(""),Zx=(()=>{const e=new Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<ss.length;t+=1)e[ss[t].charCodeAt(0)]=-2;for(let t=0;t<Qt.length;t+=1)e[Qt[t].charCodeAt(0)]=t;return e})();function rs(e,t,a){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;){const r=t.queue>>t.queuedBits-6&63;a(Qt[r]),t.queuedBits-=6}else if(t.queuedBits>0)for(t.queue=t.queue<<6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;){const r=t.queue>>t.queuedBits-6&63;a(Qt[r]),t.queuedBits-=6}}function tM(e,t,a){const r=Zx[e];if(r>-1)for(t.queue=t.queue<<6|r,t.queuedBits+=6;t.queuedBits>=8;)a(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else{if(r===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}}function ns(e){const t=[],a=o=>{t.push(String.fromCodePoint(o))},r={utf8seq:0,codepoint:0},n={queue:0,queuedBits:0},i=o=>{Kx(o,r,a)};for(let o=0;o<e.length;o+=1)tM(e.charCodeAt(o),n,i);return t.join("")}function Gx(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function Wx(e,t){for(let a=0;a<e.length;a+=1){let r=e.charCodeAt(a);if(r>55295&&r<=56319){const n=(r-55296)*1024&65535;r=(e.charCodeAt(a+1)-56320&65535|n)+65536,a+=1}Gx(r,t)}}function Kx(e,t,a){if(t.utf8seq===0){if(e<=127){a(e);return}for(let r=1;r<6;r+=1)if(!(e>>7-r&1)){t.utf8seq=r;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw new Error("Invalid UTF-8 sequence");t.utf8seq-=1}else if(t.utf8seq>0){if(e<=127)throw new Error("Invalid UTF-8 sequence");t.codepoint=t.codepoint<<6|e&63,t.utf8seq-=1,t.utf8seq===0&&a(t.codepoint)}}function bt(e){const t=[],a={queue:0,queuedBits:0},r=n=>{t.push(n)};for(let n=0;n<e.length;n+=1)tM(e.charCodeAt(n),a,r);return new Uint8Array(t)}function Jx(e){const t=[];return Wx(e,a=>t.push(a)),new Uint8Array(t)}function ht(e){const t=[],a={queue:0,queuedBits:0},r=n=>{t.push(n)};return e.forEach(n=>rs(n,a,r)),rs(null,a,r),t.join("")}function Yx(e){return Math.round(Date.now()/1e3)+e}function Qx(){return Symbol("auth-callback")}const N=()=>typeof window<"u"&&typeof document<"u",rt={tested:!1,writable:!1},eM=()=>{if(!N())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(rt.tested)return rt.writable;const e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),rt.tested=!0,rt.writable=!0}catch{rt.tested=!0,rt.writable=!1}return rt.writable};function Xx(e){const t={},a=new URL(e);if(a.hash&&a.hash[0]==="#")try{new URLSearchParams(a.hash.substring(1)).forEach((n,i)=>{t[i]=n})}catch{}return a.searchParams.forEach((r,n)=>{t[n]=r}),t}const aM=e=>e?(...t)=>e(...t):(...t)=>fetch(...t),tw=e=>typeof e=="object"&&e!==null&&"status"in e&&"ok"in e&&"json"in e&&typeof e.json=="function",Mt=async(e,t,a)=>{await e.setItem(t,JSON.stringify(a))},nt=async(e,t)=>{const a=await e.getItem(t);if(!a)return null;try{return JSON.parse(a)}catch{return a}},U=async(e,t)=>{await e.removeItem(t)};class oe{constructor(){this.promise=new oe.promiseConstructor((t,a)=>{this.resolve=t,this.reject=a})}}oe.promiseConstructor=Promise;function fe(e){const t=e.split(".");if(t.length!==3)throw new ba("Invalid JWT structure");for(let r=0;r<t.length;r++)if(!Dx.test(t[r]))throw new ba("JWT not in base64url format");return{header:JSON.parse(ns(t[0])),payload:JSON.parse(ns(t[1])),signature:bt(t[2]),raw:{header:t[0],payload:t[1]}}}async function ew(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function aw(e,t){return new Promise((r,n)=>{(async()=>{for(let i=0;i<1/0;i++)try{const o=await e(i);if(!t(i,null,o)){r(o);return}}catch(o){if(!t(i,o)){n(o);return}}})()})}function sw(e){return("0"+e.toString(16)).substr(-2)}function rw(){const t=new Uint32Array(56);if(typeof crypto>"u"){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=a.length;let n="";for(let i=0;i<56;i++)n+=a.charAt(Math.floor(Math.random()*r));return n}return crypto.getRandomValues(t),Array.from(t,sw).join("")}async function nw(e){const a=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",a),n=new Uint8Array(r);return Array.from(n).map(i=>String.fromCharCode(i)).join("")}async function iw(e){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),e;const a=await nw(e);return btoa(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function ut(e,t,a=!1){const r=rw();let n=r;a&&(n+="/PASSWORD_RECOVERY"),await Mt(e,`${t}-code-verifier`,n);const i=await iw(r);return[i,r===i?"plain":"s256"]}const ow=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function cw(e){const t=e.headers.get(xa);if(!t||!t.match(ow))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function hw(e){if(!e)throw new Error("Missing exp claim");const t=Math.floor(Date.now()/1e3);if(e<=t)throw new Error("JWT has expired")}function dw(e){switch(e){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const lw=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function vt(e){if(!lw.test(e))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function me(){const e={};return new Proxy(e,{get:(t,a)=>{if(a==="__isUserNotAvailableProxy")return!0;if(typeof a=="symbol"){const r=a.toString();if(r==="Symbol(Symbol.toPrimitive)"||r==="Symbol(Symbol.toStringTag)"||r==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${a}" property of the session object is not supported. Please use getUser() instead.`)},set:(t,a)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${a}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(t,a)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${a}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function pw(e,t){return new Proxy(e,{get:(a,r,n)=>{if(r==="__isInsecureUserWarningProxy")return!0;if(typeof r=="symbol"){const i=r.toString();if(i==="Symbol(Symbol.toPrimitive)"||i==="Symbol(Symbol.toStringTag)"||i==="Symbol(util.inspect.custom)"||i==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(a,r,n)}return!t.value&&typeof r=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),t.value=!0),Reflect.get(a,r,n)}})}function is(e){return JSON.parse(JSON.stringify(e))}const it=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),uw=[502,503,504];async function os(e){var t;if(!tw(e))throw new wa(it(e),0);if(uw.includes(e.status))throw new wa(it(e),e.status);let a;try{a=await e.json()}catch(i){throw new ct(it(i),i)}let r;const n=cw(e);if(n&&n.getTime()>=X7["2024-01-01"].timestamp&&typeof a=="object"&&a&&typeof a.code=="string"?r=a.code:typeof a=="object"&&a&&typeof a.error_code=="string"&&(r=a.error_code),r){if(r==="weak_password")throw new as(it(a),e.status,((t=a.weak_password)===null||t===void 0?void 0:t.reasons)||[]);if(r==="session_not_found")throw new q}else if(typeof a=="object"&&a&&typeof a.weak_password=="object"&&a.weak_password&&Array.isArray(a.weak_password.reasons)&&a.weak_password.reasons.length&&a.weak_password.reasons.reduce((i,o)=>i&&typeof o=="string",!0))throw new as(it(a),e.status,a.weak_password.reasons);throw new Ux(it(a),e.status||500,r)}const vw=(e,t,a,r)=>{const n={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?n:(n.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),n.body=JSON.stringify(r),Object.assign(Object.assign({},n),a))};async function _(e,t,a,r){var n;const i=Object.assign({},r==null?void 0:r.headers);i[xa]||(i[xa]=X7["2024-01-01"].name),r!=null&&r.jwt&&(i.Authorization=`Bearer ${r.jwt}`);const o=(n=r==null?void 0:r.query)!==null&&n!==void 0?n:{};r!=null&&r.redirectTo&&(o.redirect_to=r.redirectTo);const c=Object.keys(o).length?"?"+new URLSearchParams(o).toString():"",h=await gw(e,t,a+c,{headers:i,noResolveJson:r==null?void 0:r.noResolveJson},{},r==null?void 0:r.body);return r!=null&&r.xform?r==null?void 0:r.xform(h):{data:Object.assign({},h),error:null}}async function gw(e,t,a,r,n,i){const o=vw(t,r,n,i);let c;try{c=await e(a,Object.assign({},o))}catch(h){throw console.error(h),new wa(it(h),0)}if(c.ok||await os(c),r!=null&&r.noResolveJson)return c;try{return await c.json()}catch(h){await os(h)}}function Z(e){var t;let a=null;mw(e)&&(a=Object.assign({},e),e.expires_at||(a.expires_at=Yx(e.expires_in)));const r=(t=e.user)!==null&&t!==void 0?t:e;return{data:{session:a,user:r},error:null}}function cs(e){const t=Z(e);return!t.error&&e.weak_password&&typeof e.weak_password=="object"&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message=="string"&&e.weak_password.reasons.reduce((a,r)=>a&&typeof r=="string",!0)&&(t.data.weak_password=e.weak_password),t}function et(e){var t;return{data:{user:(t=e.user)!==null&&t!==void 0?t:e},error:null}}function yw(e){return{data:e,error:null}}function fw(e){const{action_link:t,email_otp:a,hashed_token:r,redirect_to:n,verification_type:i}=e,o=ne(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),c={action_link:t,email_otp:a,hashed_token:r,redirect_to:n,verification_type:i},h=Object.assign({},o);return{data:{properties:c,user:h},error:null}}function hs(e){return e}function mw(e){return e.access_token&&e.refresh_token&&e.expires_in}const Me=["global","local","others"];class Mw{constructor({url:t="",headers:a={},fetch:r}){this.url=t,this.headers=a,this.fetch=aM(r),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)}}async signOut(t,a=Me[0]){if(Me.indexOf(a)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Me.join(", ")}`);try{return await _(this.fetch,"POST",`${this.url}/logout?scope=${a}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(r){if(x(r))return{data:null,error:r};throw r}}async inviteUserByEmail(t,a={}){try{return await _(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:a.data},headers:this.headers,redirectTo:a.redirectTo,xform:et})}catch(r){if(x(r))return{data:{user:null},error:r};throw r}}async generateLink(t){try{const{options:a}=t,r=ne(t,["options"]),n=Object.assign(Object.assign({},r),a);return"newEmail"in r&&(n.new_email=r==null?void 0:r.newEmail,delete n.newEmail),await _(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:n,headers:this.headers,xform:fw,redirectTo:a==null?void 0:a.redirectTo})}catch(a){if(x(a))return{data:{properties:null,user:null},error:a};throw a}}async createUser(t){try{return await _(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:et})}catch(a){if(x(a))return{data:{user:null},error:a};throw a}}async listUsers(t){var a,r,n,i,o,c,h;try{const d={nextPage:null,lastPage:0,total:0},p=await _(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(a=t==null?void 0:t.page)===null||a===void 0?void 0:a.toString())!==null&&r!==void 0?r:"",per_page:(i=(n=t==null?void 0:t.perPage)===null||n===void 0?void 0:n.toString())!==null&&i!==void 0?i:""},xform:hs});if(p.error)throw p.error;const u=await p.json(),v=(o=p.headers.get("x-total-count"))!==null&&o!==void 0?o:0,g=(h=(c=p.headers.get("link"))===null||c===void 0?void 0:c.split(","))!==null&&h!==void 0?h:[];return g.length>0&&(g.forEach(y=>{const f=parseInt(y.split(";")[0].split("=")[1].substring(0,1)),M=JSON.parse(y.split(";")[1].split("=")[1]);d[`${M}Page`]=f}),d.total=parseInt(v)),{data:Object.assign(Object.assign({},u),d),error:null}}catch(d){if(x(d))return{data:{users:[]},error:d};throw d}}async getUserById(t){vt(t);try{return await _(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:et})}catch(a){if(x(a))return{data:{user:null},error:a};throw a}}async updateUserById(t,a){vt(t);try{return await _(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:a,headers:this.headers,xform:et})}catch(r){if(x(r))return{data:{user:null},error:r};throw r}}async deleteUser(t,a=!1){vt(t);try{return await _(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:a},xform:et})}catch(r){if(x(r))return{data:{user:null},error:r};throw r}}async _listFactors(t){vt(t.userId);try{const{data:a,error:r}=await _(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:n=>({data:{factors:n},error:null})});return{data:a,error:r}}catch(a){if(x(a))return{data:null,error:a};throw a}}async _deleteFactor(t){vt(t.userId),vt(t.id);try{return{data:await _(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(a){if(x(a))return{data:null,error:a};throw a}}async _listOAuthClients(t){var a,r,n,i,o,c,h;try{const d={nextPage:null,lastPage:0,total:0},p=await _(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(a=t==null?void 0:t.page)===null||a===void 0?void 0:a.toString())!==null&&r!==void 0?r:"",per_page:(i=(n=t==null?void 0:t.perPage)===null||n===void 0?void 0:n.toString())!==null&&i!==void 0?i:""},xform:hs});if(p.error)throw p.error;const u=await p.json(),v=(o=p.headers.get("x-total-count"))!==null&&o!==void 0?o:0,g=(h=(c=p.headers.get("link"))===null||c===void 0?void 0:c.split(","))!==null&&h!==void 0?h:[];return g.length>0&&(g.forEach(y=>{const f=parseInt(y.split(";")[0].split("=")[1].substring(0,1)),M=JSON.parse(y.split(";")[1].split("=")[1]);d[`${M}Page`]=f}),d.total=parseInt(v)),{data:Object.assign(Object.assign({},u),d),error:null}}catch(d){if(x(d))return{data:{clients:[]},error:d};throw d}}async _createOAuthClient(t){try{return await _(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:t,headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(x(a))return{data:null,error:a};throw a}}async _getOAuthClient(t){try{return await _(this.fetch,"GET",`${this.url}/admin/oauth/clients/${t}`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(x(a))return{data:null,error:a};throw a}}async _updateOAuthClient(t,a){try{return await _(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${t}`,{body:a,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(x(r))return{data:null,error:r};throw r}}async _deleteOAuthClient(t){try{return await _(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${t}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(a){if(x(a))return{data:null,error:a};throw a}}async _regenerateOAuthClientSecret(t){try{return await _(this.fetch,"POST",`${this.url}/admin/oauth/clients/${t}/regenerate_secret`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(x(a))return{data:null,error:a};throw a}}}function ds(e={}){return{getItem:t=>e[t]||null,setItem:(t,a)=>{e[t]=a},removeItem:t=>{delete e[t]}}}const gt={debug:!!(globalThis&&eM()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class sM extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}class xw extends sM{}async function ww(e,t,a){gt.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",e,t);const r=new globalThis.AbortController;return t>0&&setTimeout(()=>{r.abort(),gt.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",e)},t),await Promise.resolve().then(()=>globalThis.navigator.locks.request(e,t===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:r.signal},async n=>{if(n){gt.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",e,n.name);try{return await a()}finally{gt.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",e,n.name)}}else{if(t===0)throw gt.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",e),new xw(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);if(gt.debug)try{const i=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(i,null,"  "))}catch(i){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",i)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await a()}}))}function bw(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function rM(e){if(!/^0x[a-fA-F0-9]{40}$/.test(e))throw new Error(`@supabase/auth-js: Address "${e}" is invalid.`);return e.toLowerCase()}function _w(e){return parseInt(e,16)}function Sw(e){const t=new TextEncoder().encode(e);return"0x"+Array.from(t,r=>r.toString(16).padStart(2,"0")).join("")}function Aw(e){var t;const{chainId:a,domain:r,expirationTime:n,issuedAt:i=new Date,nonce:o,notBefore:c,requestId:h,resources:d,scheme:p,uri:u,version:v}=e;{if(!Number.isInteger(a))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${a}`);if(!r)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(o&&o.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`);if(!u)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(v!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${v}`);if(!((t=e.statement)===null||t===void 0)&&t.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`)}const g=rM(e.address),y=p?`${p}://${r}`:r,f=e.statement?`${e.statement}
`:"",M=`${y} wants you to sign in with your Ethereum account:
${g}

${f}`;let w=`URI: ${u}
Version: ${v}
Chain ID: ${a}${o?`
Nonce: ${o}`:""}
Issued At: ${i.toISOString()}`;if(n&&(w+=`
Expiration Time: ${n.toISOString()}`),c&&(w+=`
Not Before: ${c.toISOString()}`),h&&(w+=`
Request ID: ${h}`),d){let b=`
Resources:`;for(const m of d){if(!m||typeof m!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${m}`);b+=`
- ${m}`}w+=b}return`${M}
${w}`}class I extends Error{constructor({message:t,code:a,cause:r,name:n}){var i;super(t,{cause:r}),this.__isWebAuthnError=!0,this.name=(i=n??(r instanceof Error?r.name:void 0))!==null&&i!==void 0?i:"Unknown Error",this.code=a}}class Xt extends I{constructor(t,a){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:a,message:t}),this.name="WebAuthnUnknownError",this.originalError=a}}function kw({error:e,options:t}){var a,r,n;const{publicKey:i}=t;if(!i)throw Error("options was missing required publicKey property");if(e.name==="AbortError"){if(t.signal instanceof AbortSignal)return new I({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:e})}else if(e.name==="ConstraintError"){if(((a=i.authenticatorSelection)===null||a===void 0?void 0:a.requireResidentKey)===!0)return new I({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:e});if(t.mediation==="conditional"&&((r=i.authenticatorSelection)===null||r===void 0?void 0:r.userVerification)==="required")return new I({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:e});if(((n=i.authenticatorSelection)===null||n===void 0?void 0:n.userVerification)==="required")return new I({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:e})}else{if(e.name==="InvalidStateError")return new I({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:e});if(e.name==="NotAllowedError")return new I({message:e.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e});if(e.name==="NotSupportedError")return i.pubKeyCredParams.filter(c=>c.type==="public-key").length===0?new I({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:e}):new I({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:e});if(e.name==="SecurityError"){const o=window.location.hostname;if(nM(o)){if(i.rp.id!==o)return new I({message:`The RP ID "${i.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:e})}else return new I({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:e})}else if(e.name==="TypeError"){if(i.user.id.byteLength<1||i.user.id.byteLength>64)return new I({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:e})}else if(e.name==="UnknownError")return new I({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:e})}return new I({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e})}function Ew({error:e,options:t}){const{publicKey:a}=t;if(!a)throw Error("options was missing required publicKey property");if(e.name==="AbortError"){if(t.signal instanceof AbortSignal)return new I({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:e})}else{if(e.name==="NotAllowedError")return new I({message:e.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e});if(e.name==="SecurityError"){const r=window.location.hostname;if(nM(r)){if(a.rpId!==r)return new I({message:`The RP ID "${a.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:e})}else return new I({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:e})}else if(e.name==="UnknownError")return new I({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:e})}return new I({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e})}class Cw{createNewAbortSignal(){if(this.controller){const a=new Error("Cancelling existing WebAuthn API call for new one");a.name="AbortError",this.controller.abort(a)}const t=new AbortController;return this.controller=t,t.signal}cancelCeremony(){if(this.controller){const t=new Error("Manually cancelling existing WebAuthn API call");t.name="AbortError",this.controller.abort(t),this.controller=void 0}}}const Tw=new Cw;function Lw(e){if(!e)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(e);const{challenge:t,user:a,excludeCredentials:r}=e,n=ne(e,["challenge","user","excludeCredentials"]),i=bt(t).buffer,o=Object.assign(Object.assign({},a),{id:bt(a.id).buffer}),c=Object.assign(Object.assign({},n),{challenge:i,user:o});if(r&&r.length>0){c.excludeCredentials=new Array(r.length);for(let h=0;h<r.length;h++){const d=r[h];c.excludeCredentials[h]=Object.assign(Object.assign({},d),{id:bt(d.id).buffer,type:d.type||"public-key",transports:d.transports})}}return c}function Hw(e){if(!e)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(e);const{challenge:t,allowCredentials:a}=e,r=ne(e,["challenge","allowCredentials"]),n=bt(t).buffer,i=Object.assign(Object.assign({},r),{challenge:n});if(a&&a.length>0){i.allowCredentials=new Array(a.length);for(let o=0;o<a.length;o++){const c=a[o];i.allowCredentials[o]=Object.assign(Object.assign({},c),{id:bt(c.id).buffer,type:c.type||"public-key",transports:c.transports})}}return i}function Ow(e){var t;if("toJSON"in e&&typeof e.toJSON=="function")return e.toJSON();const a=e;return{id:e.id,rawId:e.id,response:{attestationObject:ht(new Uint8Array(e.response.attestationObject)),clientDataJSON:ht(new Uint8Array(e.response.clientDataJSON))},type:"public-key",clientExtensionResults:e.getClientExtensionResults(),authenticatorAttachment:(t=a.authenticatorAttachment)!==null&&t!==void 0?t:void 0}}function Vw(e){var t;if("toJSON"in e&&typeof e.toJSON=="function")return e.toJSON();const a=e,r=e.getClientExtensionResults(),n=e.response;return{id:e.id,rawId:e.id,response:{authenticatorData:ht(new Uint8Array(n.authenticatorData)),clientDataJSON:ht(new Uint8Array(n.clientDataJSON)),signature:ht(new Uint8Array(n.signature)),userHandle:n.userHandle?ht(new Uint8Array(n.userHandle)):void 0},type:"public-key",clientExtensionResults:r,authenticatorAttachment:(t=a.authenticatorAttachment)!==null&&t!==void 0?t:void 0}}function nM(e){return e==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)}function ls(){var e,t;return!!(N()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.create)=="function"&&typeof((t=navigator==null?void 0:navigator.credentials)===null||t===void 0?void 0:t.get)=="function")}async function Rw(e){try{const t=await navigator.credentials.create(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new Xt("Browser returned unexpected credential type",t)}:{data:null,error:new Xt("Empty credential response",t)}}catch(t){return{data:null,error:kw({error:t,options:e})}}}async function Pw(e){try{const t=await navigator.credentials.get(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new Xt("Browser returned unexpected credential type",t)}:{data:null,error:new Xt("Empty credential response",t)}}catch(t){return{data:null,error:Ew({error:t,options:e})}}}const Iw={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},$w={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function te(...e){const t=n=>n!==null&&typeof n=="object"&&!Array.isArray(n),a=n=>n instanceof ArrayBuffer||ArrayBuffer.isView(n),r={};for(const n of e)if(n)for(const i in n){const o=n[i];if(o!==void 0)if(Array.isArray(o))r[i]=o;else if(a(o))r[i]=o;else if(t(o)){const c=r[i];t(c)?r[i]=te(c,o):r[i]=te(o)}else r[i]=o}return r}function jw(e,t){return te(Iw,e,t||{})}function Dw(e,t){return te($w,e,t||{})}class Bw{constructor(t){this.client=t,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(t){return this.client.mfa.enroll(Object.assign(Object.assign({},t),{factorType:"webauthn"}))}async _challenge({factorId:t,webauthn:a,friendlyName:r,signal:n},i){try{const{data:o,error:c}=await this.client.mfa.challenge({factorId:t,webauthn:a});if(!o)return{data:null,error:c};const h=n??Tw.createNewAbortSignal();if(o.webauthn.type==="create"){const{user:d}=o.webauthn.credential_options.publicKey;d.name||(d.name=`${d.id}:${r}`),d.displayName||(d.displayName=d.name)}switch(o.webauthn.type){case"create":{const d=jw(o.webauthn.credential_options.publicKey,i==null?void 0:i.create),{data:p,error:u}=await Rw({publicKey:d,signal:h});return p?{data:{factorId:t,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:p}},error:null}:{data:null,error:u}}case"request":{const d=Dw(o.webauthn.credential_options.publicKey,i==null?void 0:i.request),{data:p,error:u}=await Pw(Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:d,signal:h}));return p?{data:{factorId:t,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:p}},error:null}:{data:null,error:u}}}}catch(o){return x(o)?{data:null,error:o}:{data:null,error:new ct("Unexpected error in challenge",o)}}}async _verify({challengeId:t,factorId:a,webauthn:r}){return this.client.mfa.verify({factorId:a,challengeId:t,webauthn:r})}async _authenticate({factorId:t,webauthn:{rpId:a=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:n}={}},i){if(!a)return{data:null,error:new Pt("rpId is required for WebAuthn authentication")};try{if(!ls())return{data:null,error:new ct("Browser does not support WebAuthn",null)};const{data:o,error:c}=await this.challenge({factorId:t,webauthn:{rpId:a,rpOrigins:r},signal:n},{request:i});if(!o)return{data:null,error:c};const{webauthn:h}=o;return this._verify({factorId:t,challengeId:o.challengeId,webauthn:{type:h.type,rpId:a,rpOrigins:r,credential_response:h.credential_response}})}catch(o){return x(o)?{data:null,error:o}:{data:null,error:new ct("Unexpected error in authenticate",o)}}}async _register({friendlyName:t,webauthn:{rpId:a=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:n}={}},i){if(!a)return{data:null,error:new Pt("rpId is required for WebAuthn registration")};try{if(!ls())return{data:null,error:new ct("Browser does not support WebAuthn",null)};const{data:o,error:c}=await this._enroll({friendlyName:t});if(!o)return await this.client.mfa.listFactors().then(p=>{var u;return(u=p.data)===null||u===void 0?void 0:u.all.find(v=>v.factor_type==="webauthn"&&v.friendly_name===t&&v.status!=="unverified")}).then(p=>p?this.client.mfa.unenroll({factorId:p==null?void 0:p.id}):void 0),{data:null,error:c};const{data:h,error:d}=await this._challenge({factorId:o.id,friendlyName:o.friendly_name,webauthn:{rpId:a,rpOrigins:r},signal:n},{create:i});return h?this._verify({factorId:o.id,challengeId:h.challengeId,webauthn:{rpId:a,rpOrigins:r,type:h.webauthn.type,credential_response:h.webauthn.credential_response}}):{data:null,error:d}}catch(o){return x(o)?{data:null,error:o}:{data:null,error:new ct("Unexpected error in register",o)}}}}bw();const Uw={url:Ix,storageKey:$x,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:jx,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1};async function ps(e,t,a){return await a()}const yt={};class It{get jwks(){var t,a;return(a=(t=yt[this.storageKey])===null||t===void 0?void 0:t.jwks)!==null&&a!==void 0?a:{keys:[]}}set jwks(t){yt[this.storageKey]=Object.assign(Object.assign({},yt[this.storageKey]),{jwks:t})}get jwks_cached_at(){var t,a;return(a=(t=yt[this.storageKey])===null||t===void 0?void 0:t.cachedAt)!==null&&a!==void 0?a:Number.MIN_SAFE_INTEGER}set jwks_cached_at(t){yt[this.storageKey]=Object.assign(Object.assign({},yt[this.storageKey]),{cachedAt:t})}constructor(t){var a,r,n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const i=Object.assign(Object.assign({},Uw),t);if(this.storageKey=i.storageKey,this.instanceID=(a=It.nextInstanceID[this.storageKey])!==null&&a!==void 0?a:0,It.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!i.debug,typeof i.debug=="function"&&(this.logger=i.debug),this.instanceID>0&&N()){const o=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(o),this.logDebugMessages&&console.trace(o)}if(this.persistSession=i.persistSession,this.autoRefreshToken=i.autoRefreshToken,this.admin=new Mw({url:i.url,headers:i.headers,fetch:i.fetch}),this.url=i.url,this.headers=i.headers,this.fetch=aM(i.fetch),this.lock=i.lock||ps,this.detectSessionInUrl=i.detectSessionInUrl,this.flowType=i.flowType,this.hasCustomAuthorizationHeader=i.hasCustomAuthorizationHeader,this.throwOnError=i.throwOnError,i.lock?this.lock=i.lock:this.persistSession&&N()&&(!((r=globalThis==null?void 0:globalThis.navigator)===null||r===void 0)&&r.locks)?this.lock=ww:this.lock=ps,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new Bw(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.persistSession?(i.storage?this.storage=i.storage:eM()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=ds(this.memoryStorage)),i.userStorage&&(this.userStorage=i.userStorage)):(this.memoryStorage={},this.storage=ds(this.memoryStorage)),N()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(o){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",o)}(n=this.broadcastChannel)===null||n===void 0||n.addEventListener("message",async o=>{this._debug("received broadcast notification from other tab or client",o),await this._notifyAllSubscribers(o.data.event,o.data.session,!1)})}this.initialize()}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(t){if(this.throwOnError&&t&&t.error)throw t.error;return t}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Q7}) ${new Date().toISOString()}`}_debug(...t){return this.logDebugMessages&&this.logger(this._logPrefix(),...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var t;try{let a={},r="none";if(N()&&(a=Xx(window.location.href),this._isImplicitGrantCallback(a)?r="implicit":await this._isPKCECallback(a)&&(r="pkce")),N()&&this.detectSessionInUrl&&r!=="none"){const{data:n,error:i}=await this._getSessionFromURL(a,r);if(i){if(this._debug("#_initialize()","error detecting session from URL",i),Fx(i)){const h=(t=i.details)===null||t===void 0?void 0:t.code;if(h==="identity_already_exists"||h==="identity_not_found"||h==="single_identity_not_deletable")return{error:i}}return await this._removeSession(),{error:i}}const{session:o,redirectType:c}=n;return this._debug("#_initialize()","detected session in URL",o,"redirect type",c),await this._saveSession(o),setTimeout(async()=>{c==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",o):await this._notifyAllSubscribers("SIGNED_IN",o)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(a){return x(a)?this._returnResult({error:a}):this._returnResult({error:new ct("Unexpected error during initialization",a)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(t){var a,r,n;try{const i=await _(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(r=(a=t==null?void 0:t.options)===null||a===void 0?void 0:a.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:(n=t==null?void 0:t.options)===null||n===void 0?void 0:n.captchaToken}},xform:Z}),{data:o,error:c}=i;if(c||!o)return this._returnResult({data:{user:null,session:null},error:c});const h=o.session,d=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",h)),this._returnResult({data:{user:d,session:h},error:null})}catch(i){if(x(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signUp(t){var a,r,n;try{let i;if("email"in t){const{email:p,password:u,options:v}=t;let g=null,y=null;this.flowType==="pkce"&&([g,y]=await ut(this.storage,this.storageKey)),i=await _(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:v==null?void 0:v.emailRedirectTo,body:{email:p,password:u,data:(a=v==null?void 0:v.data)!==null&&a!==void 0?a:{},gotrue_meta_security:{captcha_token:v==null?void 0:v.captchaToken},code_challenge:g,code_challenge_method:y},xform:Z})}else if("phone"in t){const{phone:p,password:u,options:v}=t;i=await _(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:p,password:u,data:(r=v==null?void 0:v.data)!==null&&r!==void 0?r:{},channel:(n=v==null?void 0:v.channel)!==null&&n!==void 0?n:"sms",gotrue_meta_security:{captcha_token:v==null?void 0:v.captchaToken}},xform:Z})}else throw new Zt("You must provide either an email or phone number and a password");const{data:o,error:c}=i;if(c||!o)return await U(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:c});const h=o.session,d=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",h)),this._returnResult({data:{user:d,session:h},error:null})}catch(i){if(await U(this.storage,`${this.storageKey}-code-verifier`),x(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signInWithPassword(t){try{let a;if("email"in t){const{email:i,password:o,options:c}=t;a=await _(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:i,password:o,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken}},xform:cs})}else if("phone"in t){const{phone:i,password:o,options:c}=t;a=await _(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:i,password:o,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken}},xform:cs})}else throw new Zt("You must provide either an email or phone number and a password");const{data:r,error:n}=a;if(n)return this._returnResult({data:{user:null,session:null},error:n});if(!r||!r.session||!r.user){const i=new pt;return this._returnResult({data:{user:null,session:null},error:i})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),this._returnResult({data:Object.assign({user:r.user,session:r.session},r.weak_password?{weakPassword:r.weak_password}:null),error:n})}catch(a){if(x(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithOAuth(t){var a,r,n,i;return await this._handleProviderSignIn(t.provider,{redirectTo:(a=t.options)===null||a===void 0?void 0:a.redirectTo,scopes:(r=t.options)===null||r===void 0?void 0:r.scopes,queryParams:(n=t.options)===null||n===void 0?void 0:n.queryParams,skipBrowserRedirect:(i=t.options)===null||i===void 0?void 0:i.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async signInWithWeb3(t){const{chain:a}=t;switch(a){case"ethereum":return await this.signInWithEthereum(t);case"solana":return await this.signInWithSolana(t);default:throw new Error(`@supabase/auth-js: Unsupported chain "${a}"`)}}async signInWithEthereum(t){var a,r,n,i,o,c,h,d,p,u,v;let g,y;if("message"in t)g=t.message,y=t.signature;else{const{chain:f,wallet:M,statement:w,options:b}=t;let m;if(N())if(typeof M=="object")m=M;else{const K=window;if("ethereum"in K&&typeof K.ethereum=="object"&&"request"in K.ethereum&&typeof K.ethereum.request=="function")m=K.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof M!="object"||!(b!=null&&b.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");m=M}const E=new URL((a=b==null?void 0:b.url)!==null&&a!==void 0?a:window.location.href),B=await m.request({method:"eth_requestAccounts"}).then(K=>K).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!B||B.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const H=rM(B[0]);let $=(r=b==null?void 0:b.signInWithEthereum)===null||r===void 0?void 0:r.chainId;if(!$){const K=await m.request({method:"eth_chainId"});$=_w(K)}const Q={domain:E.host,address:H,statement:w,uri:E.href,version:"1",chainId:$,nonce:(n=b==null?void 0:b.signInWithEthereum)===null||n===void 0?void 0:n.nonce,issuedAt:(o=(i=b==null?void 0:b.signInWithEthereum)===null||i===void 0?void 0:i.issuedAt)!==null&&o!==void 0?o:new Date,expirationTime:(c=b==null?void 0:b.signInWithEthereum)===null||c===void 0?void 0:c.expirationTime,notBefore:(h=b==null?void 0:b.signInWithEthereum)===null||h===void 0?void 0:h.notBefore,requestId:(d=b==null?void 0:b.signInWithEthereum)===null||d===void 0?void 0:d.requestId,resources:(p=b==null?void 0:b.signInWithEthereum)===null||p===void 0?void 0:p.resources};g=Aw(Q),y=await m.request({method:"personal_sign",params:[Sw(g),H]})}try{const{data:f,error:M}=await _(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:g,signature:y},!((u=t.options)===null||u===void 0)&&u.captchaToken?{gotrue_meta_security:{captcha_token:(v=t.options)===null||v===void 0?void 0:v.captchaToken}}:null),xform:Z});if(M)throw M;if(!f||!f.session||!f.user){const w=new pt;return this._returnResult({data:{user:null,session:null},error:w})}return f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("SIGNED_IN",f.session)),this._returnResult({data:Object.assign({},f),error:M})}catch(f){if(x(f))return this._returnResult({data:{user:null,session:null},error:f});throw f}}async signInWithSolana(t){var a,r,n,i,o,c,h,d,p,u,v,g;let y,f;if("message"in t)y=t.message,f=t.signature;else{const{chain:M,wallet:w,statement:b,options:m}=t;let E;if(N())if(typeof w=="object")E=w;else{const H=window;if("solana"in H&&typeof H.solana=="object"&&("signIn"in H.solana&&typeof H.solana.signIn=="function"||"signMessage"in H.solana&&typeof H.solana.signMessage=="function"))E=H.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof w!="object"||!(m!=null&&m.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");E=w}const B=new URL((a=m==null?void 0:m.url)!==null&&a!==void 0?a:window.location.href);if("signIn"in E&&E.signIn){const H=await E.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},m==null?void 0:m.signInWithSolana),{version:"1",domain:B.host,uri:B.href}),b?{statement:b}:null));let $;if(Array.isArray(H)&&H[0]&&typeof H[0]=="object")$=H[0];else if(H&&typeof H=="object"&&"signedMessage"in H&&"signature"in H)$=H;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in $&&"signature"in $&&(typeof $.signedMessage=="string"||$.signedMessage instanceof Uint8Array)&&$.signature instanceof Uint8Array)y=typeof $.signedMessage=="string"?$.signedMessage:new TextDecoder().decode($.signedMessage),f=$.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in E)||typeof E.signMessage!="function"||!("publicKey"in E)||typeof E!="object"||!E.publicKey||!("toBase58"in E.publicKey)||typeof E.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");y=[`${B.host} wants you to sign in with your Solana account:`,E.publicKey.toBase58(),...b?["",b,""]:[""],"Version: 1",`URI: ${B.href}`,`Issued At: ${(n=(r=m==null?void 0:m.signInWithSolana)===null||r===void 0?void 0:r.issuedAt)!==null&&n!==void 0?n:new Date().toISOString()}`,...!((i=m==null?void 0:m.signInWithSolana)===null||i===void 0)&&i.notBefore?[`Not Before: ${m.signInWithSolana.notBefore}`]:[],...!((o=m==null?void 0:m.signInWithSolana)===null||o===void 0)&&o.expirationTime?[`Expiration Time: ${m.signInWithSolana.expirationTime}`]:[],...!((c=m==null?void 0:m.signInWithSolana)===null||c===void 0)&&c.chainId?[`Chain ID: ${m.signInWithSolana.chainId}`]:[],...!((h=m==null?void 0:m.signInWithSolana)===null||h===void 0)&&h.nonce?[`Nonce: ${m.signInWithSolana.nonce}`]:[],...!((d=m==null?void 0:m.signInWithSolana)===null||d===void 0)&&d.requestId?[`Request ID: ${m.signInWithSolana.requestId}`]:[],...!((u=(p=m==null?void 0:m.signInWithSolana)===null||p===void 0?void 0:p.resources)===null||u===void 0)&&u.length?["Resources",...m.signInWithSolana.resources.map($=>`- ${$}`)]:[]].join(`
`);const H=await E.signMessage(new TextEncoder().encode(y),"utf8");if(!H||!(H instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");f=H}}try{const{data:M,error:w}=await _(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:y,signature:ht(f)},!((v=t.options)===null||v===void 0)&&v.captchaToken?{gotrue_meta_security:{captcha_token:(g=t.options)===null||g===void 0?void 0:g.captchaToken}}:null),xform:Z});if(w)throw w;if(!M||!M.session||!M.user){const b=new pt;return this._returnResult({data:{user:null,session:null},error:b})}return M.session&&(await this._saveSession(M.session),await this._notifyAllSubscribers("SIGNED_IN",M.session)),this._returnResult({data:Object.assign({},M),error:w})}catch(M){if(x(M))return this._returnResult({data:{user:null,session:null},error:M});throw M}}async _exchangeCodeForSession(t){const a=await nt(this.storage,`${this.storageKey}-code-verifier`),[r,n]=(a??"").split("/");try{if(!r&&this.flowType==="pkce")throw new zx;const{data:i,error:o}=await _(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:r},xform:Z});if(await U(this.storage,`${this.storageKey}-code-verifier`),o)throw o;if(!i||!i.session||!i.user){const c=new pt;return this._returnResult({data:{user:null,session:null,redirectType:null},error:c})}return i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),this._returnResult({data:Object.assign(Object.assign({},i),{redirectType:n??null}),error:o})}catch(i){if(await U(this.storage,`${this.storageKey}-code-verifier`),x(i))return this._returnResult({data:{user:null,session:null,redirectType:null},error:i});throw i}}async signInWithIdToken(t){try{const{options:a,provider:r,token:n,access_token:i,nonce:o}=t,c=await _(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:n,access_token:i,nonce:o,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:Z}),{data:h,error:d}=c;if(d)return this._returnResult({data:{user:null,session:null},error:d});if(!h||!h.session||!h.user){const p=new pt;return this._returnResult({data:{user:null,session:null},error:p})}return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",h.session)),this._returnResult({data:h,error:d})}catch(a){if(x(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithOtp(t){var a,r,n,i,o;try{if("email"in t){const{email:c,options:h}=t;let d=null,p=null;this.flowType==="pkce"&&([d,p]=await ut(this.storage,this.storageKey));const{error:u}=await _(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:c,data:(a=h==null?void 0:h.data)!==null&&a!==void 0?a:{},create_user:(r=h==null?void 0:h.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken},code_challenge:d,code_challenge_method:p},redirectTo:h==null?void 0:h.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:u})}if("phone"in t){const{phone:c,options:h}=t,{data:d,error:p}=await _(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:c,data:(n=h==null?void 0:h.data)!==null&&n!==void 0?n:{},create_user:(i=h==null?void 0:h.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken},channel:(o=h==null?void 0:h.channel)!==null&&o!==void 0?o:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:d==null?void 0:d.message_id},error:p})}throw new Zt("You must provide either an email or phone number.")}catch(c){if(await U(this.storage,`${this.storageKey}-code-verifier`),x(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async verifyOtp(t){var a,r;try{let n,i;"options"in t&&(n=(a=t.options)===null||a===void 0?void 0:a.redirectTo,i=(r=t.options)===null||r===void 0?void 0:r.captchaToken);const{data:o,error:c}=await _(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:i}}),redirectTo:n,xform:Z});if(c)throw c;if(!o)throw new Error("An error occurred on token verification.");const h=o.session,d=o.user;return h!=null&&h.access_token&&(await this._saveSession(h),await this._notifyAllSubscribers(t.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",h)),this._returnResult({data:{user:d,session:h},error:null})}catch(n){if(x(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}}async signInWithSSO(t){var a,r,n,i,o;try{let c=null,h=null;this.flowType==="pkce"&&([c,h]=await ut(this.storage,this.storageKey));const d=await _(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(r=(a=t.options)===null||a===void 0?void 0:a.redirectTo)!==null&&r!==void 0?r:void 0}),!((n=t==null?void 0:t.options)===null||n===void 0)&&n.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:c,code_challenge_method:h}),headers:this.headers,xform:yw});return!((i=d.data)===null||i===void 0)&&i.url&&N()&&!(!((o=t.options)===null||o===void 0)&&o.skipBrowserRedirect)&&window.location.assign(d.data.url),this._returnResult(d)}catch(c){if(await U(this.storage,`${this.storageKey}-code-verifier`),x(c))return this._returnResult({data:null,error:c});throw c}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:a},error:r}=t;if(r)throw r;if(!a)throw new q;const{error:n}=await _(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:a.access_token});return this._returnResult({data:{user:null,session:null},error:n})})}catch(t){if(x(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async resend(t){try{const a=`${this.url}/resend`;if("email"in t){const{email:r,type:n,options:i}=t,{error:o}=await _(this.fetch,"POST",a,{headers:this.headers,body:{email:r,type:n,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}},redirectTo:i==null?void 0:i.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:o})}else if("phone"in t){const{phone:r,type:n,options:i}=t,{data:o,error:c}=await _(this.fetch,"POST",a,{headers:this.headers,body:{phone:r,type:n,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:o==null?void 0:o.message_id},error:c})}throw new Zt("You must provide either an email or phone number and a type")}catch(a){if(x(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async a=>a))}async _acquireLock(t,a){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),n=(async()=>(await r,await a()))();return this.pendingInLock.push((async()=>{try{await n}catch{}})()),n}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const r=a();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){const n=[...this.pendingInLock];await Promise.all(n),this.pendingInLock.splice(0,n.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const a=await this.__loadSession();return await t(a)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const a=await nt(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",a),a!==null&&(this._isValidSession(a)?t=a:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const r=t.expires_at?t.expires_at*1e3-Date.now()<ge:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",t.expires_at),!r){if(this.userStorage){const o=await nt(this.userStorage,this.storageKey+"-user");o!=null&&o.user?t.user=o.user:t.user=me()}if(this.storage.isServer&&t.user&&!t.user.__isUserNotAvailableProxy){const o={value:this.suppressGetSessionWarning};t.user=pw(t.user,o),o.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:t},error:null}}const{data:n,error:i}=await this._callRefreshToken(t.refresh_token);return i?this._returnResult({data:{session:null},error:i}):this._returnResult({data:{session:n},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(t){if(t)return await this._getUser(t);await this.initializePromise;const a=await this._acquireLock(-1,async()=>await this._getUser());return a.data.user&&(this.suppressGetSessionWarning=!0),a}async _getUser(t){try{return t?await _(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:et}):await this._useSession(async a=>{var r,n,i;const{data:o,error:c}=a;if(c)throw c;return!(!((r=o.session)===null||r===void 0)&&r.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new q}:await _(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(i=(n=o.session)===null||n===void 0?void 0:n.access_token)!==null&&i!==void 0?i:void 0,xform:et})})}catch(a){if(x(a))return qx(a)&&(await this._removeSession(),await U(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:a});throw a}}async updateUser(t,a={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,a))}async _updateUser(t,a={}){try{return await this._useSession(async r=>{const{data:n,error:i}=r;if(i)throw i;if(!n.session)throw new q;const o=n.session;let c=null,h=null;this.flowType==="pkce"&&t.email!=null&&([c,h]=await ut(this.storage,this.storageKey));const{data:d,error:p}=await _(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:a==null?void 0:a.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:c,code_challenge_method:h}),jwt:o.access_token,xform:et});if(p)throw p;return o.user=d.user,await this._saveSession(o),await this._notifyAllSubscribers("USER_UPDATED",o),this._returnResult({data:{user:o.user},error:null})})}catch(r){if(await U(this.storage,`${this.storageKey}-code-verifier`),x(r))return this._returnResult({data:{user:null},error:r});throw r}}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new q;const a=Date.now()/1e3;let r=a,n=!0,i=null;const{payload:o}=fe(t.access_token);if(o.exp&&(r=o.exp,n=r<=a),n){const{data:c,error:h}=await this._callRefreshToken(t.refresh_token);if(h)return this._returnResult({data:{user:null,session:null},error:h});if(!c)return{data:{user:null,session:null},error:null};i=c}else{const{data:c,error:h}=await this._getUser(t.access_token);if(h)throw h;i={access_token:t.access_token,refresh_token:t.refresh_token,user:c.user,token_type:"bearer",expires_in:r-a,expires_at:r},await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)}return this._returnResult({data:{user:i.user,session:i},error:null})}catch(a){if(x(a))return this._returnResult({data:{session:null,user:null},error:a});throw a}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async a=>{var r;if(!t){const{data:o,error:c}=a;if(c)throw c;t=(r=o.session)!==null&&r!==void 0?r:void 0}if(!(t!=null&&t.refresh_token))throw new q;const{data:n,error:i}=await this._callRefreshToken(t.refresh_token);return i?this._returnResult({data:{user:null,session:null},error:i}):n?this._returnResult({data:{user:n.user,session:n},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(a){if(x(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async _getSessionFromURL(t,a){try{if(!N())throw new Gt("No browser detected.");if(t.error||t.error_description||t.error_code)throw new Gt(t.error_description||"Error in URL with unspecified error_description",{error:t.error||"unspecified_error",code:t.error_code||"unspecified_code"});switch(a){case"implicit":if(this.flowType==="pkce")throw new es("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Gt("Not a valid implicit grant flow url.");break;default:}if(a==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!t.code)throw new es("No code detected.");const{data:b,error:m}=await this._exchangeCodeForSession(t.code);if(m)throw m;const E=new URL(window.location.href);return E.searchParams.delete("code"),window.history.replaceState(window.history.state,"",E.toString()),{data:{session:b.session,redirectType:null},error:null}}const{provider_token:r,provider_refresh_token:n,access_token:i,refresh_token:o,expires_in:c,expires_at:h,token_type:d}=t;if(!i||!c||!o||!d)throw new Gt("No session defined in URL");const p=Math.round(Date.now()/1e3),u=parseInt(c);let v=p+u;h&&(v=parseInt(h));const g=v-p;g*1e3<=mt&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${g}s, should have been closer to ${u}s`);const y=v-u;p-y>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",y,v,p):p-y<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",y,v,p);const{data:f,error:M}=await this._getUser(i);if(M)throw M;const w={provider_token:r,provider_refresh_token:n,access_token:i,expires_in:u,expires_at:v,refresh_token:o,token_type:d,user:f.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:w,redirectType:t.type},error:null})}catch(r){if(x(r))return this._returnResult({data:{session:null,redirectType:null},error:r});throw r}}_isImplicitGrantCallback(t){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),t):!!(t.access_token||t.error_description)}async _isPKCECallback(t){const a=await nt(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&a)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async a=>{var r;const{data:n,error:i}=a;if(i)return this._returnResult({error:i});const o=(r=n.session)===null||r===void 0?void 0:r.access_token;if(o){const{error:c}=await this.admin.signOut(o,t);if(c&&!(Nx(c)&&(c.status===404||c.status===401||c.status===403)))return this._returnResult({error:c})}return t!=="others"&&(await this._removeSession(),await U(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(t){const a=Qx(),r={id:a,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",a),this.stateChangeEmitters.delete(a)}};return this._debug("#onAuthStateChange()","registered callback with id",a),this.stateChangeEmitters.set(a,r),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(a)})))(),{data:{subscription:r}}}async _emitInitialSession(t){return await this._useSession(async a=>{var r,n;try{const{data:{session:i},error:o}=a;if(o)throw o;await((r=this.stateChangeEmitters.get(t))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",i)),this._debug("INITIAL_SESSION","callback id",t,"session",i)}catch(i){await((n=this.stateChangeEmitters.get(t))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",i),console.error(i)}})}async resetPasswordForEmail(t,a={}){let r=null,n=null;this.flowType==="pkce"&&([r,n]=await ut(this.storage,this.storageKey,!0));try{return await _(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:r,code_challenge_method:n,gotrue_meta_security:{captcha_token:a.captchaToken}},headers:this.headers,redirectTo:a.redirectTo})}catch(i){if(await U(this.storage,`${this.storageKey}-code-verifier`),x(i))return this._returnResult({data:null,error:i});throw i}}async getUserIdentities(){var t;try{const{data:a,error:r}=await this.getUser();if(r)throw r;return this._returnResult({data:{identities:(t=a.user.identities)!==null&&t!==void 0?t:[]},error:null})}catch(a){if(x(a))return this._returnResult({data:null,error:a});throw a}}async linkIdentity(t){return"token"in t?this.linkIdentityIdToken(t):this.linkIdentityOAuth(t)}async linkIdentityOAuth(t){var a;try{const{data:r,error:n}=await this._useSession(async i=>{var o,c,h,d,p;const{data:u,error:v}=i;if(v)throw v;const g=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,t.provider,{redirectTo:(o=t.options)===null||o===void 0?void 0:o.redirectTo,scopes:(c=t.options)===null||c===void 0?void 0:c.scopes,queryParams:(h=t.options)===null||h===void 0?void 0:h.queryParams,skipBrowserRedirect:!0});return await _(this.fetch,"GET",g,{headers:this.headers,jwt:(p=(d=u.session)===null||d===void 0?void 0:d.access_token)!==null&&p!==void 0?p:void 0})});if(n)throw n;return N()&&!(!((a=t.options)===null||a===void 0)&&a.skipBrowserRedirect)&&window.location.assign(r==null?void 0:r.url),this._returnResult({data:{provider:t.provider,url:r==null?void 0:r.url},error:null})}catch(r){if(x(r))return this._returnResult({data:{provider:t.provider,url:null},error:r});throw r}}async linkIdentityIdToken(t){return await this._useSession(async a=>{var r;try{const{error:n,data:{session:i}}=a;if(n)throw n;const{options:o,provider:c,token:h,access_token:d,nonce:p}=t,u=await _(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(r=i==null?void 0:i.access_token)!==null&&r!==void 0?r:void 0,body:{provider:c,id_token:h,access_token:d,nonce:p,link_identity:!0,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Z}),{data:v,error:g}=u;return g?this._returnResult({data:{user:null,session:null},error:g}):!v||!v.session||!v.user?this._returnResult({data:{user:null,session:null},error:new pt}):(v.session&&(await this._saveSession(v.session),await this._notifyAllSubscribers("USER_UPDATED",v.session)),this._returnResult({data:v,error:g}))}catch(n){if(await U(this.storage,`${this.storageKey}-code-verifier`),x(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}})}async unlinkIdentity(t){try{return await this._useSession(async a=>{var r,n;const{data:i,error:o}=a;if(o)throw o;return await _(this.fetch,"DELETE",`${this.url}/user/identities/${t.identity_id}`,{headers:this.headers,jwt:(n=(r=i.session)===null||r===void 0?void 0:r.access_token)!==null&&n!==void 0?n:void 0})})}catch(a){if(x(a))return this._returnResult({data:null,error:a});throw a}}async _refreshAccessToken(t){const a=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(a,"begin");try{const r=Date.now();return await aw(async n=>(n>0&&await ew(200*Math.pow(2,n-1)),this._debug(a,"refreshing attempt",n),await _(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:Z})),(n,i)=>{const o=200*Math.pow(2,n);return i&&ye(i)&&Date.now()+o-r<mt})}catch(r){if(this._debug(a,"error",r),x(r))return this._returnResult({data:{session:null,user:null},error:r});throw r}finally{this._debug(a,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,a){const r=await this._getUrlForProvider(`${this.url}/authorize`,t,{redirectTo:a.redirectTo,scopes:a.scopes,queryParams:a.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",a,"url",r),N()&&!a.skipBrowserRedirect&&window.location.assign(r),{data:{provider:t,url:r},error:null}}async _recoverAndRefresh(){var t,a;const r="#_recoverAndRefresh()";this._debug(r,"begin");try{const n=await nt(this.storage,this.storageKey);if(n&&this.userStorage){let o=await nt(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!o&&(o={user:n.user},await Mt(this.userStorage,this.storageKey+"-user",o)),n.user=(t=o==null?void 0:o.user)!==null&&t!==void 0?t:me()}else if(n&&!n.user&&!n.user){const o=await nt(this.storage,this.storageKey+"-user");o&&(o!=null&&o.user)?(n.user=o.user,await U(this.storage,this.storageKey+"-user"),await Mt(this.storage,this.storageKey,n)):n.user=me()}if(this._debug(r,"session from storage",n),!this._isValidSession(n)){this._debug(r,"session is not valid"),n!==null&&await this._removeSession();return}const i=((a=n.expires_at)!==null&&a!==void 0?a:1/0)*1e3-Date.now()<ge;if(this._debug(r,`session has${i?"":" not"} expired with margin of ${ge}s`),i){if(this.autoRefreshToken&&n.refresh_token){const{error:o}=await this._callRefreshToken(n.refresh_token);o&&(console.error(o),ye(o)||(this._debug(r,"refresh failed with a non-retryable error, removing the session",o),await this._removeSession()))}}else if(n.user&&n.user.__isUserNotAvailableProxy===!0)try{const{data:o,error:c}=await this._getUser(n.access_token);!c&&(o!=null&&o.user)?(n.user=o.user,await this._saveSession(n),await this._notifyAllSubscribers("SIGNED_IN",n)):this._debug(r,"could not get user data, skipping SIGNED_IN notification")}catch(o){console.error("Error getting user data:",o),this._debug(r,"error getting user data, skipping SIGNED_IN notification",o)}else await this._notifyAllSubscribers("SIGNED_IN",n)}catch(n){this._debug(r,"error",n),console.error(n);return}finally{this._debug(r,"end")}}async _callRefreshToken(t){var a,r;if(!t)throw new q;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const n=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(n,"begin");try{this.refreshingDeferred=new oe;const{data:i,error:o}=await this._refreshAccessToken(t);if(o)throw o;if(!i.session)throw new q;await this._saveSession(i.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",i.session);const c={data:i.session,error:null};return this.refreshingDeferred.resolve(c),c}catch(i){if(this._debug(n,"error",i),x(i)){const o={data:null,error:i};return ye(i)||await this._removeSession(),(a=this.refreshingDeferred)===null||a===void 0||a.resolve(o),o}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(i),i}finally{this.refreshingDeferred=null,this._debug(n,"end")}}async _notifyAllSubscribers(t,a,r=!0){const n=`#_notifyAllSubscribers(${t})`;this._debug(n,"begin",a,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:t,session:a});const i=[],o=Array.from(this.stateChangeEmitters.values()).map(async c=>{try{await c.callback(t,a)}catch(h){i.push(h)}});if(await Promise.all(o),i.length>0){for(let c=0;c<i.length;c+=1)console.error(i[c]);throw i[0]}}finally{this._debug(n,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),this.suppressGetSessionWarning=!0,await U(this.storage,`${this.storageKey}-code-verifier`);const a=Object.assign({},t),r=a.user&&a.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!r&&a.user&&await Mt(this.userStorage,this.storageKey+"-user",{user:a.user});const n=Object.assign({},a);delete n.user;const i=is(n);await Mt(this.storage,this.storageKey,i)}else{const n=is(a);await Mt(this.storage,this.storageKey,n)}}async _removeSession(){this._debug("#_removeSession()"),this.suppressGetSessionWarning=!1,await U(this.storage,this.storageKey),await U(this.storage,this.storageKey+"-code-verifier"),await U(this.storage,this.storageKey+"-user"),this.userStorage&&await U(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&N()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(a){console.error("removing visibilitychange callback failed",a)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),mt);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async a=>{const{data:{session:r}}=a;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const n=Math.floor((r.expires_at*1e3-t)/mt);this._debug("#_autoRefreshTokenTick()",`access token expires in ${n} ticks, a tick lasts ${mt}ms, refresh threshold is ${Ma} ticks`),n<=Ma&&await this._callRefreshToken(r.refresh_token)})}catch(a){console.error("Auto refresh tick failed with error. This is likely a transient error.",a)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof sM)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!N()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const a=`#_onVisibilityChanged(${t})`;this._debug(a,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(a,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,a,r){const n=[`provider=${encodeURIComponent(a)}`];if(r!=null&&r.redirectTo&&n.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),r!=null&&r.scopes&&n.push(`scopes=${encodeURIComponent(r.scopes)}`),this.flowType==="pkce"){const[i,o]=await ut(this.storage,this.storageKey),c=new URLSearchParams({code_challenge:`${encodeURIComponent(i)}`,code_challenge_method:`${encodeURIComponent(o)}`});n.push(c.toString())}if(r!=null&&r.queryParams){const i=new URLSearchParams(r.queryParams);n.push(i.toString())}return r!=null&&r.skipBrowserRedirect&&n.push(`skip_http_redirect=${r.skipBrowserRedirect}`),`${t}?${n.join("&")}`}async _unenroll(t){try{return await this._useSession(async a=>{var r;const{data:n,error:i}=a;return i?this._returnResult({data:null,error:i}):await _(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(r=n==null?void 0:n.session)===null||r===void 0?void 0:r.access_token})})}catch(a){if(x(a))return this._returnResult({data:null,error:a});throw a}}async _enroll(t){try{return await this._useSession(async a=>{var r,n;const{data:i,error:o}=a;if(o)return this._returnResult({data:null,error:o});const c=Object.assign({friendly_name:t.friendlyName,factor_type:t.factorType},t.factorType==="phone"?{phone:t.phone}:t.factorType==="totp"?{issuer:t.issuer}:{}),{data:h,error:d}=await _(this.fetch,"POST",`${this.url}/factors`,{body:c,headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token});return d?this._returnResult({data:null,error:d}):(t.factorType==="totp"&&h.type==="totp"&&(!((n=h==null?void 0:h.totp)===null||n===void 0)&&n.qr_code)&&(h.totp.qr_code=`data:image/svg+xml;utf-8,${h.totp.qr_code}`),this._returnResult({data:h,error:null}))})}catch(a){if(x(a))return this._returnResult({data:null,error:a});throw a}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async a=>{var r;const{data:n,error:i}=a;if(i)return this._returnResult({data:null,error:i});const o=Object.assign({challenge_id:t.challengeId},"webauthn"in t?{webauthn:Object.assign(Object.assign({},t.webauthn),{credential_response:t.webauthn.type==="create"?Ow(t.webauthn.credential_response):Vw(t.webauthn.credential_response)})}:{code:t.code}),{data:c,error:h}=await _(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:o,headers:this.headers,jwt:(r=n==null?void 0:n.session)===null||r===void 0?void 0:r.access_token});return h?this._returnResult({data:null,error:h}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+c.expires_in},c)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",c),this._returnResult({data:c,error:h}))})}catch(a){if(x(a))return this._returnResult({data:null,error:a});throw a}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async a=>{var r;const{data:n,error:i}=a;if(i)return this._returnResult({data:null,error:i});const o=await _(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{body:t,headers:this.headers,jwt:(r=n==null?void 0:n.session)===null||r===void 0?void 0:r.access_token});if(o.error)return o;const{data:c}=o;if(c.type!=="webauthn")return{data:c,error:null};switch(c.webauthn.type){case"create":return{data:Object.assign(Object.assign({},c),{webauthn:Object.assign(Object.assign({},c.webauthn),{credential_options:Object.assign(Object.assign({},c.webauthn.credential_options),{publicKey:Lw(c.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},c),{webauthn:Object.assign(Object.assign({},c.webauthn),{credential_options:Object.assign(Object.assign({},c.webauthn.credential_options),{publicKey:Hw(c.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(a){if(x(a))return this._returnResult({data:null,error:a});throw a}})}async _challengeAndVerify(t){const{data:a,error:r}=await this._challenge({factorId:t.factorId});return r?this._returnResult({data:null,error:r}):await this._verify({factorId:t.factorId,challengeId:a.id,code:t.code})}async _listFactors(){var t;const{data:{user:a},error:r}=await this.getUser();if(r)return{data:null,error:r};const n={all:[],phone:[],totp:[],webauthn:[]};for(const i of(t=a==null?void 0:a.factors)!==null&&t!==void 0?t:[])n.all.push(i),i.status==="verified"&&n[i.factor_type].push(i);return{data:n,error:null}}async _getAuthenticatorAssuranceLevel(){var t,a;const{data:{session:r},error:n}=await this.getSession();if(n)return this._returnResult({data:null,error:n});if(!r)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:i}=fe(r.access_token);let o=null;i.aal&&(o=i.aal);let c=o;((a=(t=r.user.factors)===null||t===void 0?void 0:t.filter(p=>p.status==="verified"))!==null&&a!==void 0?a:[]).length>0&&(c="aal2");const d=i.amr||[];return{data:{currentLevel:o,nextLevel:c,currentAuthenticationMethods:d},error:null}}async _getAuthorizationDetails(t){try{return await this._useSession(async a=>{const{data:{session:r},error:n}=a;return n?this._returnResult({data:null,error:n}):r?await _(this.fetch,"GET",`${this.url}/oauth/authorizations/${t}`,{headers:this.headers,jwt:r.access_token,xform:i=>({data:i,error:null})}):this._returnResult({data:null,error:new q})})}catch(a){if(x(a))return this._returnResult({data:null,error:a});throw a}}async _approveAuthorization(t,a){try{return await this._useSession(async r=>{const{data:{session:n},error:i}=r;if(i)return this._returnResult({data:null,error:i});if(!n)return this._returnResult({data:null,error:new q});const o=await _(this.fetch,"POST",`${this.url}/oauth/authorizations/${t}/consent`,{headers:this.headers,jwt:n.access_token,body:{action:"approve"},xform:c=>({data:c,error:null})});return o.data&&o.data.redirect_url&&N()&&!(a!=null&&a.skipBrowserRedirect)&&window.location.assign(o.data.redirect_url),o})}catch(r){if(x(r))return this._returnResult({data:null,error:r});throw r}}async _denyAuthorization(t,a){try{return await this._useSession(async r=>{const{data:{session:n},error:i}=r;if(i)return this._returnResult({data:null,error:i});if(!n)return this._returnResult({data:null,error:new q});const o=await _(this.fetch,"POST",`${this.url}/oauth/authorizations/${t}/consent`,{headers:this.headers,jwt:n.access_token,body:{action:"deny"},xform:c=>({data:c,error:null})});return o.data&&o.data.redirect_url&&N()&&!(a!=null&&a.skipBrowserRedirect)&&window.location.assign(o.data.redirect_url),o})}catch(r){if(x(r))return this._returnResult({data:null,error:r});throw r}}async _listOAuthGrants(){try{return await this._useSession(async t=>{const{data:{session:a},error:r}=t;return r?this._returnResult({data:null,error:r}):a?await _(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:a.access_token,xform:n=>({data:n,error:null})}):this._returnResult({data:null,error:new q})})}catch(t){if(x(t))return this._returnResult({data:null,error:t});throw t}}async _revokeOAuthGrant(t){try{return await this._useSession(async a=>{const{data:{session:r},error:n}=a;return n?this._returnResult({data:null,error:n}):r?(await _(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:r.access_token,query:{client_id:t.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new q})})}catch(a){if(x(a))return this._returnResult({data:null,error:a});throw a}}async fetchJwk(t,a={keys:[]}){let r=a.keys.find(c=>c.kid===t);if(r)return r;const n=Date.now();if(r=this.jwks.keys.find(c=>c.kid===t),r&&this.jwks_cached_at+Bx>n)return r;const{data:i,error:o}=await _(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(o)throw o;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=n,r=i.keys.find(c=>c.kid===t),!r)?null:r}async getClaims(t,a={}){try{let r=t;if(!r){const{data:g,error:y}=await this.getSession();if(y||!g.session)return this._returnResult({data:null,error:y});r=g.session.access_token}const{header:n,payload:i,signature:o,raw:{header:c,payload:h}}=fe(r);a!=null&&a.allowExpired||hw(i.exp);const d=!n.alg||n.alg.startsWith("HS")||!n.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(n.kid,a!=null&&a.keys?{keys:a.keys}:a==null?void 0:a.jwks);if(!d){const{error:g}=await this.getUser(r);if(g)throw g;return{data:{claims:i,header:n,signature:o},error:null}}const p=dw(n.alg),u=await crypto.subtle.importKey("jwk",d,p,!0,["verify"]);if(!await crypto.subtle.verify(p,u,o,Jx(`${c}.${h}`)))throw new ba("Invalid JWT signature");return{data:{claims:i,header:n,signature:o},error:null}}catch(r){if(x(r))return this._returnResult({data:null,error:r});throw r}}}It.nextInstanceID={};const Nw=It,qw="2.89.0";let At="";typeof Deno<"u"?At="deno":typeof document<"u"?At="web":typeof navigator<"u"&&navigator.product==="ReactNative"?At="react-native":At="node";const Fw={"X-Client-Info":`supabase-js-${At}/${qw}`},zw={headers:Fw},Zw={schema:"public"},Gw={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},Ww={};function $t(e){"@babel/helpers - typeof";return $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$t(e)}function Kw(e,t){if($t(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if($t(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Jw(e){var t=Kw(e,"string");return $t(t)=="symbol"?t:t+""}function Yw(e,t,a){return(t=Jw(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function us(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?us(Object(a),!0).forEach(function(r){Yw(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):us(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}const Qw=e=>e?(...t)=>e(...t):(...t)=>fetch(...t),Xw=()=>Headers,t9=(e,t,a)=>{const r=Qw(a),n=Xw();return async(i,o)=>{var c;const h=(c=await t())!==null&&c!==void 0?c:e;let d=new n(o==null?void 0:o.headers);return d.has("apikey")||d.set("apikey",e),d.has("Authorization")||d.set("Authorization",`Bearer ${h}`),r(i,P(P({},o),{},{headers:d}))}};function e9(e){return e.endsWith("/")?e:e+"/"}function a9(e,t){var a,r;const{db:n,auth:i,realtime:o,global:c}=e,{db:h,auth:d,realtime:p,global:u}=t,v={db:P(P({},h),n),auth:P(P({},d),i),realtime:P(P({},p),o),storage:{},global:P(P(P({},u),c),{},{headers:P(P({},(a=u==null?void 0:u.headers)!==null&&a!==void 0?a:{}),(r=c==null?void 0:c.headers)!==null&&r!==void 0?r:{})}),accessToken:async()=>""};return e.accessToken?v.accessToken=e.accessToken:delete v.accessToken,v}function s9(e){const t=e==null?void 0:e.trim();if(!t)throw new Error("supabaseUrl is required.");if(!t.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(e9(t))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var r9=class extends Nw{constructor(e){super(e)}},n9=class{constructor(e,t,a){var r,n;this.supabaseUrl=e,this.supabaseKey=t;const i=s9(e);if(!t)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",i),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",i),this.storageUrl=new URL("storage/v1",i),this.functionsUrl=new URL("functions/v1",i);const o=`sb-${i.hostname.split(".")[0]}-auth-token`,c={db:Zw,realtime:Ww,auth:P(P({},Gw),{},{storageKey:o}),global:zw},h=a9(a??{},c);if(this.storageKey=(r=h.auth.storageKey)!==null&&r!==void 0?r:"",this.headers=(n=h.global.headers)!==null&&n!==void 0?n:{},h.accessToken)this.accessToken=h.accessToken,this.auth=new Proxy({},{get:(p,u)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(u)} is not possible`)}});else{var d;this.auth=this._initSupabaseAuthClient((d=h.auth)!==null&&d!==void 0?d:{},this.headers,h.global.fetch)}this.fetch=t9(t,this._getAccessToken.bind(this),h.global.fetch),this.realtime=this._initRealtimeClient(P({headers:this.headers,accessToken:this._getAccessToken.bind(this)},h.realtime)),this.accessToken&&this.accessToken().then(p=>this.realtime.setAuth(p)).catch(p=>console.warn("Failed to set initial Realtime auth token:",p)),this.rest=new jM(new URL("rest/v1",i).href,{headers:this.headers,schema:h.db.schema,fetch:this.fetch}),this.storage=new Px(this.storageUrl.href,this.headers,this.fetch,a==null?void 0:a.storage),h.accessToken||this._listenForAuthEvents()}get functions(){return new VM(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},a={head:!1,get:!1,count:void 0}){return this.rest.rpc(e,t,a)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var e=this,t,a;if(e.accessToken)return await e.accessToken();const{data:r}=await e.auth.getSession();return(t=(a=r.session)===null||a===void 0?void 0:a.access_token)!==null&&t!==void 0?t:e.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:a,storage:r,userStorage:n,storageKey:i,flowType:o,lock:c,debug:h,throwOnError:d},p,u){const v={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new r9({url:this.authUrl.href,headers:P(P({},v),p),storageKey:i,autoRefreshToken:e,persistSession:t,detectSessionInUrl:a,storage:r,userStorage:n,flowType:o,lock:c,debug:h,throwOnError:d,fetch:u,hasCustomAuthorizationHeader:Object.keys(this.headers).some(g=>g.toLowerCase()==="authorization")})}_initRealtimeClient(e){return new ex(this.realtimeUrl.href,P(P({},e),{},{params:P(P({},{apikey:this.supabaseKey}),e==null?void 0:e.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((e,t)=>{this._handleTokenChanged(e,"CLIENT",t==null?void 0:t.access_token)})}_handleTokenChanged(e,t,a){(e==="TOKEN_REFRESHED"||e==="SIGNED_IN")&&this.changedAccessToken!==a?(this.changedAccessToken=a,this.realtime.setAuth(a)):e==="SIGNED_OUT"&&(this.realtime.setAuth(),t=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const i9=(e,t,a)=>new n9(e,t,a);function o9(){if(typeof window<"u"||typeof process>"u")return!1;const e=process.version;if(e==null)return!1;const t=e.match(/^v(\d+)\./);return t?parseInt(t[1],10)<=18:!1}o9()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const ee="https://llkybuxglyroumijkssj.supabase.co",c9="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxsa3lidXhnbHlyb3VtaWprc3NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxMjMwMzcsImV4cCI6MjA3OTY5OTAzN30.1hhSPZzi9X9624s_jiBldXZOM4JeK9nXT6aAmybkYOs",h9="COP1-ASSO",Oa="/logo.png";let k,Tt=null;function _a(){return ee.includes("votre-url")?(console.error("SUPABASE_URL non configurée"),null):(k=i9(ee,c9),k)}function iM(e,t,a,r=null){return k?(Va(),console.log("📡 Configuration de l'écoute Realtime sur les tables 'items' et 'history'..."),Tt=k.channel("stock-realtime").on("postgres_changes",{event:"INSERT",schema:"public",table:"items"},n=>{var i;console.log("📡 Realtime INSERT (items):",(i=n.new)==null?void 0:i.name),e&&e(n)}).on("postgres_changes",{event:"UPDATE",schema:"public",table:"items"},n=>{var i;console.log("📡 Realtime UPDATE (items):",(i=n.new)==null?void 0:i.name),t&&t(n)}).on("postgres_changes",{event:"DELETE",schema:"public",table:"items"},n=>{var i;console.log("📡 Realtime DELETE (items):",(i=n.old)==null?void 0:i.name),a&&a(n)}).on("postgres_changes",{event:"INSERT",schema:"public",table:"history"},n=>{var i;console.log("📡 Realtime INSERT (history):",(i=n.new)==null?void 0:i.action),r&&r(n)}).subscribe(n=>{n==="SUBSCRIBED"?console.log("✅ Realtime connecté - Mises à jour du stock et historique en temps réel activées"):n==="CHANNEL_ERROR"&&console.error("❌ Erreur de connexion Realtime")}),Tt):(console.error("❌ Supabase client non initialisé"),null)}function Va(){Tt&&(console.log("🔌 Déconnexion Realtime..."),k.removeChannel(Tt),Tt=null)}const oM=Object.freeze(Object.defineProperty({__proto__:null,cleanupRealtimeSubscription:Va,initSupabase:_a,setupRealtimeSubscription:iM,get supabaseClient(){return k}},Symbol.toStringTag,{value:"Module"})),d9="modulepreload",l9=function(e){return"/"+e},vs={},C=function(t,a,r){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.allSettled(a.map(h=>{if(h=l9(h),h in vs)return;vs[h]=!0;const d=h.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":d9,d||(u.as="script"),u.crossOrigin="",u.href=h,c&&u.setAttribute("nonce",c),document.head.appendChild(u),d)return new Promise((v,g)=>{u.addEventListener("load",v),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return n.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})};function A(e,t="success"){const a=document.getElementById("toast-container");if(!a)return;const r={success:{border:"border-l-brand-500",icon:"check-circle-2",iconColor:"text-brand-500"},error:{border:"border-l-red-500",icon:"alert-circle",iconColor:"text-red-500"},warning:{border:"border-l-orange-400",icon:"alert-triangle",iconColor:"text-orange-500"},info:{border:"border-l-blue-500",icon:"info",iconColor:"text-blue-500"}},n=r[t]||r.success,i=document.createElement("div");i.className=`bg-white text-slate-800 border-l-4 ${n.border} p-4 rounded-xl shadow-2xl flex items-center gap-3 transform transition-all duration-300 translate-y-[-20px] opacity-0 mb-3 min-w-[280px] max-w-[90vw] pointer-events-auto`,i.innerHTML=`
        <i data-lucide="${n.icon}" class="w-5 h-5 ${n.iconColor} flex-shrink-0"></i>
        <span class="font-bold text-sm flex-1">${V(e)}</span>
        <button onclick="this.parentElement.remove()" class="text-slate-300 hover:text-slate-500 transition">
            <i data-lucide="x" class="w-4 h-4"></i>
        </button>
    `,a.appendChild(i),L({icons:T}),requestAnimationFrame(()=>{i.style.transform="translateY(0)",i.style.opacity="1"}),setTimeout(()=>{i.style.opacity="0",i.style.transform="translateY(-20px)",setTimeout(()=>i.remove(),300)},4e3)}function st(e,t,a={}){const r="custom-confirm-modal",n=document.getElementById(r);n&&n.remove();const{title:i="Confirmation",confirmText:o="Confirmer",cancelText:c="Annuler",type:h="info"}=a,d=h==="danger",p=d?"alert-triangle":"help-circle",u=d?"from-red-600 to-red-700":"from-slate-900 to-slate-800",v=d?"bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-red-500/30":"bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 shadow-brand-500/30",g=document.createElement("div");g.id=r,g.className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in",g.innerHTML=`
        <div class="bg-white rounded-[2rem] shadow-2xl max-w-sm w-full overflow-hidden animate-scale-in">
            <!-- Header -->
            <div class="bg-gradient-to-r ${u} p-5 relative">
                <div class="absolute inset-0 bg-grid-white/5 bg-[length:20px_20px] pointer-events-none"></div>
                <div class="relative z-10 flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl ${d?"bg-white/20":"bg-white/10"} flex items-center justify-center">
                        <i data-lucide="${p}" class="w-5 h-5 text-white"></i>
                    </div>
                    <h3 class="text-lg font-bold text-white">${i}</h3>
                </div>
            </div>
            
            <!-- Content -->
            <div class="p-5 bg-slate-50">
                <p class="text-slate-600 text-sm font-medium">${e}</p>
            </div>
            
            <!-- Footer -->
            <div class="flex gap-3 p-4 bg-white border-t border-slate-100">
                <button id="confirm-cancel-btn" class="flex-1 px-4 py-3 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold text-sm transition">
                    ${c}
                </button>
                <button id="confirm-ok-btn" class="flex-1 px-4 py-3 text-white ${v} rounded-xl font-bold text-sm shadow-lg transition flex items-center justify-center gap-2">
                    <i data-lucide="${d?"trash-2":"check"}" class="w-4 h-4"></i>
                    ${o}
                </button>
            </div>
        </div>
    `,document.body.appendChild(g),L({icons:T});const y=()=>{g.remove(),document.removeEventListener("keydown",f)},f=M=>{M.key==="Escape"&&(y(),a.onCancel&&a.onCancel())};document.addEventListener("keydown",f),document.getElementById("confirm-cancel-btn").onclick=()=>{y(),a.onCancel&&a.onCancel()},document.getElementById("confirm-ok-btn").onclick=()=>{y(),t&&t()}}function V(e){return e&&e.toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Ra(e,t,a={}){const r="custom-prompt-modal",n=document.getElementById(r);n&&n.remove();const{title:i="Saisie requise",confirmText:o="Valider",cancelText:c="Annuler",placeholder:h="",defaultValue:d="",inputType:p="text"}=a,u=document.createElement("div");u.id=r,u.className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in",u.innerHTML=`
        <div class="bg-white rounded-[2rem] shadow-2xl max-w-sm w-full overflow-hidden animate-scale-in">
            <!-- Header -->
            <div class="bg-gradient-to-r from-slate-900 to-slate-800 p-5 relative">
                <div class="absolute inset-0 bg-grid-white/5 bg-[length:20px_20px] pointer-events-none"></div>
                <div class="relative z-10 flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <i data-lucide="edit-3" class="w-5 h-5 text-white"></i>
                    </div>
                    <h3 class="text-lg font-bold text-white">${i}</h3>
                </div>
            </div>
            
            <!-- Content -->
            <div class="p-5 bg-slate-50 space-y-4">
                <p class="text-slate-600 text-sm font-medium">${e}</p>
                <input type="${p}" id="prompt-input" value="${V(d)}" 
                    class="w-full p-4 bg-white rounded-2xl border-2 border-slate-100 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none font-semibold text-slate-900 transition-all" 
                    placeholder="${h}">
            </div>
            
            <!-- Footer -->
            <div class="flex gap-3 p-4 bg-white border-t border-slate-100">
                <button id="prompt-cancel-btn" class="flex-1 px-4 py-3 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold text-sm transition">
                    ${c}
                </button>
                <button id="prompt-ok-btn" class="flex-1 px-4 py-3 text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 rounded-xl font-bold text-sm shadow-lg shadow-brand-500/30 transition flex items-center justify-center gap-2">
                    <i data-lucide="check" class="w-4 h-4"></i>
                    ${o}
                </button>
            </div>
        </div>
    `,document.body.appendChild(u),L({icons:T}),setTimeout(()=>{const f=document.getElementById("prompt-input");f&&f.focus()},50);const v=()=>{u.remove(),document.removeEventListener("keydown",g)},g=f=>{f.key==="Escape"&&(v(),a.onCancel&&a.onCancel())};document.addEventListener("keydown",g),document.getElementById("prompt-cancel-btn").onclick=()=>{v(),a.onCancel&&a.onCancel()};const y=()=>{const f=document.getElementById("prompt-input").value;v(),t&&t(f)};document.getElementById("prompt-ok-btn").onclick=y,document.getElementById("prompt-input").onkeypress=f=>{f.key==="Enter"&&y()}}window.showToast=A;window.showConfirm=st;window.showPrompt=Ra;function Pa(e){const t={Distribution:{color:"orange",icon:"shopping-bag",label:"Distribution"},"Retour Distrib":{color:"blue",icon:"rotate-ccw",label:"Retour Distribution"},Collecte:{color:"green",icon:"check-circle",label:"Collecte"},BA:{color:"blue",icon:"store",label:"Banque Alimentaire"},DON:{color:"purple",icon:"heart",label:"Dons"},COMMANDE:{color:"teal",icon:"truck",label:"Commande"},PERTE:{color:"red",icon:"trash-2",label:"Perte"},default:{color:"gray",icon:"info",label:e}};return l.opMode==="DISTRIB"&&l.distribMode==="IN"?t["Retour Distrib"]:l.opMode==="DISTRIB"&&l.distribMode==="OUT"||e.includes("Distribution")||e==="DISTRIB"?t.Distribution:e.includes("Retour")?t["Retour Distrib"]:e==="BA"||e.includes("Banque")?t.BA:e==="DON"||e.includes("Don")?t.DON:e==="COMMANDE"||e.includes("Commande")?t.COMMANDE:e==="PERTE"||e.includes("Perte")?t.PERTE:e==="COLLECTE"||e.includes("Collecte")?t.Collecte:t.default}function gs(e){return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim()}function p9(){const e=l.items.map(t=>[t.category,t.sub_category||"",t.name,t.quantity,t.threshold,t.remarks||""]);cM("stock.csv",["Cat","Sous-Cat","Produit","Qté","Seuil","Note"],e),A("Export CSV téléchargé ✓","success")}function u9(){const e=l.history.map(t=>[new Date(t.created_at).toLocaleString(),t.action,t.location||"",t.item_name,t.change_qty,t.user_email]);cM("historique.csv",["Date","Action","Info/Lieu","Produit","Qté","User"],e),A("Export historique téléchargé ✓","success")}function cM(e,t,a){const r=[t.join(";"),...a.map(i=>i.map(o=>`"${String(o).replace(/"/g,'""')}"`).join(";"))].join(`
`),n=document.createElement("a");n.href=URL.createObjectURL(new Blob(["\uFEFF"+r],{type:"text/csv;charset=utf-8;"})),n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)}async function v9(){try{const{data:e,error:t}=await k.from("settings").select("*");e&&e.length>0&&e.forEach(a=>{l[a.key]!==void 0&&(l[a.key]=a.value)})}catch(e){console.error("Erreur chargement settings:",e)}}async function g9(){const e="Sauvegarde du "+new Date().toLocaleString();Ra("Donnez un nom à cette sauvegarde :",async t=>{if(t)try{const{error:a}=await k.from("backups").insert([{name:t,data:l.items,created_at:new Date().toISOString()}]);if(a)throw a;A("Sauvegarde créée avec succès !","success");const{renderSettingsModal:r}=await C(async()=>{const{renderSettingsModal:n}=await Promise.resolve().then(()=>Nt);return{renderSettingsModal:n}},void 0);r()}catch(a){console.error("Erreur lors de la sauvegarde :",a),A("Erreur technique : "+a.message,"error")}},{defaultValue:e,title:"Créer une sauvegarde",confirmText:"Sauvegarder"})}async function y9(e){st("ATTENTION : Cela va ÉCRASER tout le stock actuel par la version sauvegardée. Êtes-vous sûr ?",async()=>{try{const{data:t}=await k.from("backups").select("data").eq("id",e).single();if(!t){A("Sauvegarde introuvable.","error");return}const a=t.data,{data:r}=await k.from("items").select("id");if(r.length>0){const o=r.map(c=>c.id);await k.from("items").delete().in("id",o)}const n=a.map(o=>{const{id:c,created_at:h,...d}=o;return{...d,updated_by:l.user.email}}),{error:i}=await k.from("items").insert(n);if(i)A("Erreur restauration : "+i.message,"error");else{A("Restauration terminée avec succès !","success");const{logHistory:o}=await C(async()=>{const{logHistory:d}=await Promise.resolve().then(()=>ce);return{logHistory:d}},void 0);await o("SYSTÈME","Restauration Sauvegarde",0);const{loadData:c}=await C(async()=>{const{loadData:d}=await Promise.resolve().then(()=>k9);return{loadData:d}},void 0);await c();const{closeSettingsModal:h}=await C(async()=>{const{closeSettingsModal:d}=await Promise.resolve().then(()=>Nt);return{closeSettingsModal:d}},void 0);h()}}catch(t){console.error(t),A("Erreur : "+t.message,"error")}},{title:"Restaurer une sauvegarde ?",confirmText:"Restaurer",type:"danger"})}async function f9(e){st("Voulez-vous vraiment supprimer cette sauvegarde ?",async()=>{try{await k.from("backups").delete().eq("id",e),A("Sauvegarde supprimée","success");const{renderSettingsModal:t}=await C(async()=>{const{renderSettingsModal:a}=await Promise.resolve().then(()=>Nt);return{renderSettingsModal:a}},void 0);t()}catch(t){A("Erreur : "+t.message,"error")}},{title:"Suppression",type:"danger"})}async function m9(e,t){if(t&&!l[e].includes(t)){l[e].push(t),l[e].sort();const{error:a}=await k.from("settings").upsert({key:e,value:l[e]});a?(A("Erreur sauvegarde : "+a.message,"error"),l[e]=l[e].filter(n=>n!==t)):A("Ajouté avec succès","success");const{renderSettingsModal:r}=await C(async()=>{const{renderSettingsModal:n}=await Promise.resolve().then(()=>Nt);return{renderSettingsModal:n}},void 0);r()}}async function M9(e,t){st(`Supprimer "${t}" ? (Cela sera supprimé pour tout le monde)`,async()=>{const a=[...l[e]];l[e]=l[e].filter(i=>i!==t);const{error:r}=await k.from("settings").upsert({key:e,value:l[e]});r?(A("Erreur suppression : "+r.message,"error"),l[e]=a):A("Supprimé avec succès","success");const{renderSettingsModal:n}=await C(async()=>{const{renderSettingsModal:i}=await Promise.resolve().then(()=>Nt);return{renderSettingsModal:i}},void 0);n()},{title:"Suppression d'un élément",confirmText:"Supprimer",type:"danger"})}async function ae(e,t,a){if(!l.user)return;const{error:r}=await k.from("history").insert([{item_name:e,action:t,change_qty:a,user_email:l.user.email,created_at:new Date().toISOString()}]);r&&console.error("Erreur historique:",r)}function hM(e){const t=l.histFilter,a=e.filter(n=>{const i=new Date(n.created_at);return!(t.year&&i.getFullYear().toString()!==t.year||t.month&&(i.getMonth()+1).toString()!==t.month||t.dateFrom&&new Date(t.dateFrom)>i||t.dateTo&&new Date(t.dateTo)<i||t.search&&!(n.action+" "+(n.location||"")+" "+n.item_name).toLowerCase().includes(t.search.toLowerCase()))}),r={};a.forEach(n=>{const i=new Date(n.created_at).toLocaleDateString(),o=n.location||"";let c=n.action==="Distribution"||n.action==="Retour Distrib"?"Distribution":n.action;const h=`${i}_${c}_${o}`;r[h]||(r[h]={date:i,fullDate:n.created_at,action:c,location:o,items:[]}),r[h].items.push(n)}),l.groupedHistory=Object.values(r).sort((n,i)=>new Date(i.fullDate)-new Date(n.fullDate))}async function dM(e=1,t=20,a={}){try{const r=(e-1)*t,n=r+t-1;let i=k.from("history").select("*",{count:"exact"});if(a.search&&(i=i.or(`item_name.ilike.%${a.search}%,action.ilike.%${a.search}%,user_email.ilike.%${a.search}%`)),a.dateFrom&&(i=i.gte("created_at",a.dateFrom)),a.dateTo&&(i=i.lte("created_at",a.dateTo)),a.year){const d=`${a.year}-01-01`,p=`${a.year}-12-31`;i=i.gte("created_at",d).lte("created_at",p)}if(a.month&&a.year){const d=a.month.padStart(2,"0"),p=`${a.year}-${d}-01`,u=new Date(a.year,a.month,0).getDate(),v=`${a.year}-${d}-${u}`;i=i.gte("created_at",p).lte("created_at",v)}else if(a.month&&!a.year){const d=new Date().getFullYear(),p=a.month.padStart(2,"0"),u=`${d}-${p}-01`,v=new Date(d,a.month,0).getDate(),g=`${d}-${p}-${v}`;i=i.gte("created_at",u).lte("created_at",g)}i=i.order("created_at",{ascending:!1}).range(r,n);const{data:o,count:c,error:h}=await i;if(h)throw h;return{data:o,count:c,error:null}}catch(r){return console.error("Erreur chargement historique:",r),{data:[],count:0,error:r}}}const ce=Object.freeze(Object.defineProperty({__proto__:null,getHistory:dM,logHistory:ae,processHistoryGroups:hM},Symbol.toStringTag,{value:"Module"}));async function dt(){const{data:e}=await k.from("items").select("*");e&&(l.items=e.sort((r,n)=>r.name.localeCompare(n.name)));const{data:t}=await k.from("history").select("*").order("created_at",{ascending:!1}).limit(500);if(t){l.history=t;const{processHistoryGroups:r}=await C(async()=>{const{processHistoryGroups:n}=await Promise.resolve().then(()=>ce);return{processHistoryGroups:n}},void 0);r(t)}const{renderApp:a}=await C(async()=>{const{renderApp:r}=await Promise.resolve().then(()=>_t);return{renderApp:r}},void 0);a()}function Sa(){iM(x9,w9,b9,A9)}function lM(){Va()}function x9(e){const t=e.new;!t||l.items.find(r=>r.id===t.id)||(l.items.push(t),l.items.sort((r,n)=>r.name.localeCompare(n.name)),Ia(),console.log(`📦 Nouveau produit ajouté: ${t.name}`))}function w9(e){const t=e.new;if(!t)return;const a=l.items.findIndex(r=>r.id===t.id);if(a!==-1){const r=l.items[a].quantity;if(l.items[a]=t,r!==t.quantity){const n=t.quantity-r;console.log(`📦 Stock mis à jour: ${t.name} (${n>0?"+":""}${n})`)}Ia()}}function b9(e){const t=e.old;if(!t)return;const a=l.items.findIndex(r=>r.id===t.id);a!==-1&&(l.items.splice(a,1),console.log(`🗑️ Produit supprimé: ${t.name}`),Ia())}function Ia(){if(l.modalOpen||l.quickAddModalOpen||l.settingsModalOpen){console.log("📡 Realtime: Mise à jour différée (modale ouverte)"),window._realtimePendingRefresh=!0;return}const e=document.activeElement;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.tagName==="SELECT")){console.log("📡 Realtime: Mise à jour différée (utilisateur en saisie)"),window._realtimePendingRefresh=!0;return}window._realtimeRefreshTimeout&&clearTimeout(window._realtimeRefreshTimeout),window._realtimeRefreshTimeout=setTimeout(()=>{l.view==="list"?_9():l.view==="history"&&S9(),window._realtimePendingRefresh=!1},300)}function _9(){const e=l.items.filter(o=>o.category==="ALIMENTAIRE").reduce((o,c)=>o+c.quantity,0),t=l.items.filter(o=>o.category==="HYGIENE").reduce((o,c)=>o+c.quantity,0),a=l.items.filter(o=>o.category==="VETEMENTS").reduce((o,c)=>o+c.quantity,0),r=e+t+a,n=document.querySelectorAll("[data-stat-category]");n.length>0&&n.forEach(o=>{const c=o.dataset.statCategory;c==="alimentaire"?o.textContent=e:c==="hygiene"?o.textContent=t:c==="vetements"?o.textContent=a:c==="total"&&(o.textContent=r)});const i=document.getElementById("stock-results-container");i&&C(async()=>{const{getStockListHTML:o}=await Promise.resolve().then(()=>T9);return{getStockListHTML:o}},void 0).then(({getStockListHTML:o})=>{i.innerHTML=o(),C(async()=>{const{createIcons:c,icons:h}=await Promise.resolve().then(()=>N7);return{createIcons:c,icons:h}},void 0).then(({createIcons:c,icons:h})=>{c({icons:h})})}),console.log("📡 Realtime: Vue stock mise à jour silencieusement")}async function S9(){try{const{data:e}=await k.from("history").select("*").order("created_at",{ascending:!1}).limit(500);if(e){l.history=e;const{processHistoryGroups:t}=await C(async()=>{const{processHistoryGroups:a}=await Promise.resolve().then(()=>ce);return{processHistoryGroups:a}},void 0);if(t(e),l.view==="history"&&!l.modalOpen){const{renderHist:a}=await C(async()=>{const{renderHist:n}=await Promise.resolve().then(()=>wM);return{renderHist:n}},void 0),r=document.getElementById("main-slot");r&&(a(r),console.log("📡 Realtime: Historique mis à jour"))}}}catch(e){console.error("Erreur rechargement historique:",e)}}function A9(e){const t=e.new;if(t&&(l.history.unshift(t),l.history.length>500&&(l.history=l.history.slice(0,500)),C(async()=>{const{processHistoryGroups:a}=await Promise.resolve().then(()=>ce);return{processHistoryGroups:a}},void 0).then(({processHistoryGroups:a})=>{a(l.history)}),l.view==="history"&&!l.modalOpen&&!l.quickAddModalOpen&&!l.settingsModalOpen)){const a=document.activeElement;if(a&&(a.tagName==="INPUT"||a.tagName==="TEXTAREA")){console.log("📡 Realtime: Historique différé (utilisateur en saisie)");return}window._historyRefreshTimeout&&clearTimeout(window._historyRefreshTimeout),window._historyRefreshTimeout=setTimeout(async()=>{const r=document.getElementById("history-results-container");r&&l.view==="history"&&(r.style.transition="opacity 0.15s ease",r.style.opacity="0.5",setTimeout(async()=>{const{getHistoryListHTML:n}=await C(async()=>{const{getHistoryListHTML:c}=await Promise.resolve().then(()=>wM);return{getHistoryListHTML:c}},void 0),{createIcons:i,icons:o}=await C(async()=>{const{createIcons:c,icons:h}=await Promise.resolve().then(()=>N7);return{createIcons:c,icons:h}},void 0);r.innerHTML=n(),i({icons:o}),r.style.opacity="1",console.log("📡 Realtime: Historique mis à jour silencieusement")},150))},800)}}async function $a(){const e=Number(document.getElementById("quick-qty").value);if(!e){const{closeQuickAddModal:n}=await C(async()=>{const{closeQuickAddModal:i}=await Promise.resolve().then(()=>re);return{closeQuickAddModal:i}},void 0);return n()}const t=l.quickAddItem;await k.from("items").update({quantity:Math.max(0,t.quantity+e),updated_by:l.user.email}).eq("id",t.id);const a=e>0?"Ajout Rapide":"Retrait Rapide";await k.from("history").insert([{item_name:t.name,action:a,change_qty:e,user_email:l.user.email}]),await dt();const{closeQuickAddModal:r}=await C(async()=>{const{closeQuickAddModal:n}=await Promise.resolve().then(()=>re);return{closeQuickAddModal:n}},void 0);r(),A(`${e>0?"+":""}${e} ${t.name}`,e>0?"success":"warning")}async function ja(){var n;const e=l.editingItem||l.newItem;if(!e.name){A("Veuillez saisir un nom de produit","error");return}const t=e.name.trim();e.subCategory||(e.subCategory="Autre");const a=Number(e.quantity)||0,r={name:t,category:e.mainCategory,sub_category:e.subCategory,quantity:a,threshold:Number(e.minThreshold),remarks:e.remarks||"",batches:e.batches||[],updated_by:l.user.email};try{if(l.editingItem){const{error:o}=await k.from("items").update(r).eq("id",e.id);if(o)throw o;const c=a-(((n=l.items.find(h=>h.id===e.id))==null?void 0:n.quantity)||0);c!==0&&await ae(t,c>0?"Correction (+)":"Correction (-)",c),A(`"${t}" mis à jour ✓`,"success")}else{if(l.items.find(p=>p.name.toLowerCase()===t.toLowerCase()&&p.category===e.mainCategory&&p.sub_category===e.subCategory)){A(`Le produit "${t}" existe déjà !`,"error");return}const{error:c}=await k.from("items").insert([r]);if(c)throw c;await ae(t,"Création",a);let h;e.mainCategory==="ALIMENTAIRE"?h="foodProducts":e.mainCategory==="HYGIENE"?h="hygieneProducts":h="clothingProducts";const d=l[h];d.includes(t)||(d.push(t),d.sort(),await k.from("settings").upsert({key:h,value:d})),A(`"${t}" créé avec succès !`,"success")}await dt();const{closeModal:i}=await C(async()=>{const{closeModal:o}=await Promise.resolve().then(()=>re);return{closeModal:o}},void 0);i()}catch(i){console.error(i),A("Erreur : "+i.message,"error")}}async function Da(){l.editingItem&&st(`Voulez-vous vraiment supprimer "${l.editingItem.name}" ?`,async()=>{try{const{error:e}=await k.from("items").delete().eq("id",l.editingItem.id);if(e)throw e;await ae(l.editingItem.name,"Suppression",-l.editingItem.quantity),A(`"${l.editingItem.name}" supprimé`,"warning"),await dt();const{closeModal:t}=await C(async()=>{const{closeModal:a}=await Promise.resolve().then(()=>re);return{closeModal:a}},void 0);t()}catch(e){console.error(e),A("Erreur : "+e.message,"error")}},{title:"Supprimer ce produit ?",confirmText:"Supprimer",cancelText:"Annuler",type:"danger"})}window.saveItem=ja;window.deleteItem=Da;window.saveQuickAdd=$a;const k9=Object.freeze(Object.defineProperty({__proto__:null,deleteItem:Da,initRealtimeStock:Sa,loadData:dt,saveItem:ja,saveQuickAdd:$a,stopRealtimeStock:lM},Symbol.toStringTag,{value:"Module"}));window.createBackup=g9;window.restoreBackup=y9;window.deleteBackup=f9;window.addToSettingList=m9;window.removeFromSettingList=M9;window.closeSettingsModal=Ba;window.openSettingsModal=Ut;function Ut(){l.settingsModalOpen=!0;const e=new URL(window.location);e.searchParams.set("modal","settings"),window.history.pushState({view:l.view,modal:"settings"},"",e),jt()}function Ba(){const e=document.getElementById("settings-modal-root"),t=e==null?void 0:e.querySelector(".modal-content"),a=e==null?void 0:e.querySelector(".modal-backdrop");if(t&&a)t.classList.add("animate-scale-out"),a.style.opacity="0",a.style.transition="opacity 0.3s ease",setTimeout(()=>{l.settingsModalOpen=!1,jt();const r=new URL(window.location);r.searchParams.delete("modal"),window.history.replaceState({view:l.view},"",r)},250);else{l.settingsModalOpen=!1,jt();const r=new URL(window.location);r.searchParams.delete("modal"),window.history.replaceState({view:l.view},"",r)}}function X(e,t,a){const r=l[t]||[],n="'"+t+"'",i=r.length===0?'<div class="text-xs text-slate-400 italic py-2">Aucun élément</div>':r.map(o=>`
            <div class="flex justify-between items-center bg-slate-50 px-3 py-2 rounded-lg group hover:bg-slate-100 transition">
                <span class="text-sm font-medium text-slate-700">${V(o)}</span>
                <button onclick="removeFromSettingList(${n}, '${V(o).replace(/'/g,"\\'")}')" class="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 transition">
                    <i data-lucide="x" class="w-4 h-4"></i>
                </button>
            </div>
        `).join("");return`
        <div class="mb-4">
            <div class="flex items-center justify-between mb-3">
                <span class="text-sm font-bold text-slate-700">${e}</span>
                <span class="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">${r.length}</span>
            </div>
            <div class="space-y-1.5 mb-3 max-h-32 overflow-y-auto">${i}</div>
            <div class="flex gap-2">
                <input type="text" id="input-${t}" 
                    class="flex-1 px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition" 
                    placeholder="${a}"
                    onkeypress="if(event.key==='Enter'){addToSettingList(${n}, this.value); this.value='';}"
                >
                <button onclick="addToSettingList(${n}, document.getElementById('input-${t}').value); document.getElementById('input-${t}').value='';" 
                    class="px-4 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition flex items-center justify-center">
                    <i data-lucide="plus" class="w-4 h-4"></i>
                </button>
            </div>
        </div>
    `}async function jt(){const e=document.getElementById("settings-modal-root");if(!l.settingsModalOpen){e.innerHTML="";return}e.innerHTML=`
        <div class="modal-backdrop fixed inset-0 bg-black/50 z-[70] flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
            <div class="modal-content bg-white w-full max-w-lg rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden animate-scale-in">
                
                <div class="p-5 border-b border-slate-100 flex justify-between items-center flex-shrink-0">
                    <div>
                        <h2 class="text-xl font-bold text-slate-900">Paramètres</h2>
                        <p class="text-xs text-slate-400">Configuration de l'application</p>
                    </div>
                    <button onclick="closeSettingsModal()" class="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition">
                        <i data-lucide="x" class="w-5 h-5"></i>
                    </button>
                </div>
                
                <div class="flex-1 overflow-y-auto p-5 space-y-6">
                    <div class="bg-amber-50 p-4 rounded-xl border border-amber-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-white"><i data-lucide="save" class="w-5 h-5"></i></div>
                            <div><h3 class="font-bold text-slate-900">Sauvegardes</h3><p class="text-xs text-slate-500">Points de restauration</p></div>
                        </div>
                        <button onclick="createBackup()" class="w-full py-2.5 bg-white border border-amber-300 text-amber-700 font-bold rounded-lg hover:bg-amber-100 transition text-sm mb-3">+ Nouvelle sauvegarde</button>
                        <div id="backup-list-container" class="space-y-2"><div class="text-center py-2"><div class="loader mx-auto"></div></div></div>
                    </div>
                    
                    <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center text-white"><i data-lucide="utensils" class="w-5 h-5"></i></div>
                            <h3 class="font-bold text-slate-900">Catégorie Alimentaire</h3>
                        </div>
                        ${X("Sous-catégories","foodSubcats","Ex: Féculents...")}
                        ${X("Produits suggérés","foodProducts","Nouveau produit...")}
                    </div>
                    
                    <div class="bg-purple-50 p-4 rounded-xl border border-purple-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center text-white"><i data-lucide="sparkles" class="w-5 h-5"></i></div>
                            <h3 class="font-bold text-slate-900">Catégorie Hygiène</h3>
                        </div>
                        ${X("Sous-catégories","hygieneSubcats","Ex: Savons...")}
                        ${X("Produits suggérés","hygieneProducts","Nouveau produit...")}
                    </div>
                    
                    <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-lg bg-indigo-500 flex items-center justify-center text-white"><i data-lucide="shirt" class="w-5 h-5"></i></div>
                            <h3 class="font-bold text-slate-900">Catégorie Vêtements</h3>
                        </div>
                        ${X("Sous-catégories","clothingSubcats","Ex: Manteaux...")}
                        ${X("Produits suggérés","clothingProducts","Nouveau produit...")}
                    </div>
                    
                    <div class="bg-slate-100 p-4 rounded-xl border border-slate-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-lg bg-slate-600 flex items-center justify-center text-white"><i data-lucide="truck" class="w-5 h-5"></i></div>
                            <h3 class="font-bold text-slate-900">Logistique</h3>
                        </div>
                        ${X("Lieux de Distribution","distribLocations","Nouveau lieu...")}
                        ${X("Lieux de Collecte","collectLocations","Nouveau lieu...")}
                    </div>
                </div>
                
                <div class="p-4 border-t border-slate-100 flex-shrink-0">
                    <button onclick="closeSettingsModal()" class="w-full py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition">Fermer</button>
                </div>
            </div>
        </div>`,L({icons:T}),E9()}async function E9(){const e=document.getElementById("backup-list-container");if(!e)return;const{data:t}=await k.from("backups").select("*").order("created_at",{ascending:!1}).limit(5);!t||t.length===0?e.innerHTML='<div class="text-xs text-slate-500 italic text-center py-2">Aucune sauvegarde</div>':e.innerHTML=t.map(a=>`
            <div class="flex justify-between items-center bg-white p-3 rounded-lg border border-amber-100">
                <div>
                    <div class="font-bold text-sm text-slate-900">${V(a.name)}</div>
                    <div class="text-[10px] text-slate-400">${new Date(a.created_at).toLocaleString("fr-FR")}</div>
                </div>
                <div class="flex gap-2">
                    <button onclick="restoreBackup(${a.id})" class="text-xs bg-amber-100 text-amber-700 px-3 py-1.5 rounded-lg font-bold hover:bg-amber-200 transition">Restaurer</button>
                    <button onclick="deleteBackup(${a.id})" class="text-slate-400 hover:text-red-500 transition"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                </div>
            </div>
        `).join(""),L({icons:T})}const Nt=Object.freeze(Object.defineProperty({__proto__:null,closeSettingsModal:Ba,openSettingsModal:Ut,renderSettingsModal:jt},Symbol.toStringTag,{value:"Module"}));window.saveItem=ja;window.deleteItem=Da;window.saveQuickAdd=$a;window.closeModal=pM;window.closeQuickAddModal=uM;window.openModal=he;window.openQuickAddModal=Ua;window.renderModal=at;function he(e,t){if(l.modalOpen=!0,e==="edit"){const a=l.items.find(r=>r.id==t);l.editingItem=a?{...a,mainCategory:a.category,subCategory:a.sub_category,minThreshold:a.threshold}:null}else l.editingItem=null,l.newItem={name:"",quantity:"",mainCategory:"ALIMENTAIRE",subCategory:l.foodSubcats[0]||"",remarks:"",minThreshold:5};at()}function pM(){const e=document.getElementById("modal-root"),t=e==null?void 0:e.querySelector(".modal-content"),a=e==null?void 0:e.querySelector(".modal-backdrop");t&&a?(t.classList.remove("animate-scale-in"),t.classList.add("animate-scale-out"),a.style.opacity="0",a.style.transition="opacity 0.3s ease",setTimeout(()=>{l.modalOpen=!1,at()},250)):(l.modalOpen=!1,at())}function Ua(e){l.quickAddItem=l.items.find(t=>t.id==e),l.quickAddModalOpen=!0,Dt()}function uM(){const e=document.getElementById("quick-add-root"),t=e==null?void 0:e.querySelector(".modal-content");t?(t.classList.add("animate-scale-out"),setTimeout(()=>{l.quickAddModalOpen=!1,Dt()},250)):(l.quickAddModalOpen=!1,Dt())}window.addBatch=()=>{var n,i,o,c;const e=(n=document.getElementById("new-batch-type"))==null?void 0:n.value,t=(i=document.getElementById("new-batch-date"))==null?void 0:i.value,a=(o=document.getElementById("new-batch-info"))==null?void 0:o.value;if(!t)return(c=window.showToast)==null?void 0:c.call(window,"Date requise","error");const r=l.editingItem||l.newItem;r.batches||(r.batches=[]),r.batches.push({type:e,date:t,info:a}),at()};window.removeBatch=e=>{const t=l.editingItem||l.newItem;t.batches&&(t.batches.splice(e,1),at())};const se={ALIMENTAIRE:{color:"emerald",icon:"utensils",label:"Alimentaire"},HYGIENE:{color:"purple",icon:"sparkles",label:"Hygiène"},VETEMENTS:{color:"indigo",icon:"shirt",label:"Vêtements"}};function C9(e){return!e.batches||e.batches.length===0?'<div class="text-xs text-slate-400 font-medium text-center p-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">Aucune date enregistrée</div>':e.batches.map((t,a)=>`
        <div class="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100 shadow-sm mb-2">
            <div class="flex items-center gap-3">
                <span class="text-[10px] font-bold px-2 py-1 rounded-lg ${t.type==="DLC"?"bg-red-50 text-red-600":"bg-blue-50 text-blue-600"}">${t.type||"DLC"}</span>
                <div>
                    <div class="font-bold text-slate-800 text-sm">${new Date(t.date).toLocaleDateString("fr-FR")}</div>
                    ${t.info?`<div class="text-[10px] text-slate-400 italic">${V(t.info)}</div>`:""}
                </div>
            </div>
            <button type="button" onclick="window.removeBatch(${a})" class="w-8 h-8 bg-red-50 text-red-400 rounded-lg flex items-center justify-center hover:bg-red-100 hover:text-red-500 transition"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
        </div>
    `).join("")}function at(){const e=document.getElementById("modal-root");if(!l.modalOpen){e.innerHTML="";return}const t=l.editingItem||l.newItem,a=!!l.editingItem;t.batches||(t.batches=[]);const r=se[t.mainCategory]||se.ALIMENTAIRE,i=(t.mainCategory==="ALIMENTAIRE"?l.foodProducts:t.mainCategory==="HYGIENE"?l.hygieneProducts:l.clothingProducts).sort(),o="list-modal-name",c="input-modal-name",h=i.map(p=>`<div onclick="window.selectCustomOption('${o}', '${c}', '${V(p).replace(/'/g,"\\'")}', false, 0, true)" class="p-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer text-slate-700 font-semibold text-sm transition">${V(p)}</div>`).join(""),d=t.mainCategory==="ALIMENTAIRE"?l.foodSubcats:t.mainCategory==="HYGIENE"?l.hygieneSubcats:l.clothingSubcats;e.innerHTML=`
    <div class="modal-backdrop fixed inset-0 bg-slate-900/60 z-[100] flex items-end sm:items-center justify-center pb-16 sm:pb-4 px-0 sm:px-4 pt-4 backdrop-blur-sm animate-fade-in" style="padding-bottom: max(4rem, env(safe-area-inset-bottom, 4rem));">
        <div class="modal-content bg-white w-full sm:max-w-md rounded-t-[2rem] sm:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-scale-in" style="max-height: min(85vh, calc(100dvh - 5rem));">
            <div class="relative bg-gradient-to-r from-slate-900 to-slate-800 p-5 flex-shrink-0">
                <div class="relative z-10 flex justify-between items-start">
                    <div class="min-w-0">
                        <h2 class="text-xl font-black text-white tracking-tight mb-1">${a?"Modifier le produit":"Ajouter un produit"}</h2>
                        <p class="text-slate-400 font-medium text-xs flex items-center gap-2"><i data-lucide="${r.icon}" class="w-3.5 h-3.5"></i> ${r.label}</p>
                    </div>
                    <button onclick="closeModal()" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"><i data-lucide="x" class="w-5 h-5"></i></button>
                </div>
            </div>
            
            <div class="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50">
                <form id="item-form" onsubmit="event.preventDefault(); saveItem()" class="space-y-4">
                    <div class="bg-white p-1.5 rounded-2xl flex shadow-sm border border-slate-100">
                        <button type="button" onclick="window.updateModalData('mainCategory', 'ALIMENTAIRE'); window.updateModalData('subCategory', '${l.foodSubcats[0]}'); renderModal()" class="flex-1 py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${t.mainCategory==="ALIMENTAIRE"?"bg-emerald-500 text-white shadow-lg":"text-slate-400 hover:text-slate-600"}"><i data-lucide="utensils" class="w-4 h-4"></i> Alimentaire</button>
                        <button type="button" onclick="window.updateModalData('mainCategory', 'HYGIENE'); window.updateModalData('subCategory', '${l.hygieneSubcats[0]}'); renderModal()" class="flex-1 py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${t.mainCategory==="HYGIENE"?"bg-purple-500 text-white shadow-lg":"text-slate-400 hover:text-slate-600"}"><i data-lucide="sparkles" class="w-4 h-4"></i> Hygiène</button>
                        <button type="button" onclick="window.updateModalData('mainCategory', 'VETEMENTS'); window.updateModalData('subCategory', '${l.clothingSubcats[0]}'); renderModal()" class="flex-1 py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${t.mainCategory==="VETEMENTS"?"bg-indigo-500 text-white shadow-lg":"text-slate-400 hover:text-slate-600"}"><i data-lucide="shirt" class="w-4 h-4"></i> Vêtements</button>
                    </div>

                    <div>
                        <label class="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Sous-catégorie</label>
                        <div class="relative">
                            <select onchange="window.updateModalData('subCategory', this.value)" class="w-full p-4 bg-white rounded-2xl font-semibold text-slate-900 outline-none border-2 border-slate-100 focus:border-brand-400 appearance-none transition-all">
                                ${d.map(p=>`<option value="${V(p)}" ${t.subCategory===p?"selected":""}>${V(p)}</option>`).join("")}
                            </select>
                            <i data-lucide="chevron-down" class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none"></i>
                        </div>
                    </div>

                    <div>
                        <label class="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Nom du produit *</label>
                        <div class="relative custom-select-container">
                            <input id="${c}" type="text" value="${V(t.name)}" onfocus="window.openCustomSelect?.('${o}')" oninput="window.updateModalData('name', this.value); window.openCustomSelect?.('${o}'); window.filterCustomSelect?.('${o}', this.value)" class="w-full p-4 bg-white rounded-2xl font-semibold text-slate-900 outline-none border-2 border-slate-100 focus:border-brand-400 placeholder-slate-300 transition-all" placeholder="Ex: Pâtes, Savon..." autocomplete="off">
                            <div id="${o}" class="custom-dropdown-list hidden absolute z-50 w-full bg-white border border-slate-100 rounded-xl shadow-xl max-h-48 overflow-y-auto mt-2">${h}</div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div><label class="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Stock actuel</label><input type="number" value="${t.quantity}" oninput="window.updateModalData('quantity', this.value)" class="w-full p-4 bg-white rounded-2xl font-bold text-lg text-slate-900 outline-none border-2 border-slate-100 focus:border-brand-400 text-center transition-all"></div>
                        <div><label class="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Alerte min.</label><input type="number" value="${t.minThreshold}" oninput="window.updateModalData('minThreshold', this.value)" class="w-full p-4 bg-white rounded-2xl font-bold text-slate-900 outline-none border-2 border-slate-100 focus:border-brand-400 text-center transition-all"></div>
                    </div>

                    <div><label class="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Note / Info</label><input type="text" value="${V(t.remarks||"")}" oninput="window.updateModalData('remarks', this.value)" class="w-full p-4 bg-white rounded-2xl font-medium text-sm text-slate-700 outline-none border-2 border-slate-100 focus:border-brand-400 transition-all" placeholder="Ex: Sans gluten..."></div>

                    <div class="bg-white p-4 rounded-2xl border-2 border-slate-100">
                        <div class="flex items-center gap-2 mb-4"><div class="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center"><i data-lucide="calendar-clock" class="w-4 h-4 text-brand-600"></i></div><span class="text-sm font-bold text-slate-700">Dates & Péremptions</span></div>
                        <div class="mb-4 max-h-32 overflow-y-auto">${C9(t)}</div>
                        <div class="bg-slate-50 p-3 rounded-xl">
                            <div class="text-[10px] font-bold text-slate-400 uppercase mb-2 ml-1">Ajouter une date</div>
                            <div class="grid grid-cols-2 gap-2 mb-2">
                                <select id="new-batch-type" class="p-3 bg-white rounded-xl text-xs font-bold text-slate-700 outline-none border border-slate-200"><option value="DLC">DLC (Périm.)</option><option value="DLUO">DLUO (Qualité)</option></select>
                                <input type="date" id="new-batch-date" class="p-3 bg-white rounded-xl text-xs font-bold text-slate-700 outline-none border border-slate-200">
                            </div>
                            <div class="flex gap-2">
                                <input type="text" id="new-batch-info" class="flex-1 p-3 bg-white rounded-xl text-xs font-medium outline-none placeholder-slate-300 border border-slate-200" placeholder="Note (ex: Lot #12)">
                                <button type="button" onclick="window.addBatch()" class="bg-brand-600 text-white px-4 rounded-xl hover:bg-brand-700 transition shadow-lg flex items-center justify-center"><i data-lucide="plus" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
            <div class="p-4 bg-white border-t border-slate-100 flex gap-3 flex-shrink-0">
                ${a?'<button type="button" onclick="deleteItem()" class="flex-1 py-3.5 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition flex items-center justify-center gap-2"><i data-lucide="trash-2" class="w-4 h-4"></i> Supprimer</button>':""}
                <button type="submit" form="item-form" class="flex-1 py-3.5 bg-gradient-to-r from-brand-600 to-brand-500 text-white rounded-xl font-bold shadow-lg flex items-center justify-center gap-2"><i data-lucide="${a?"save":"plus"}" class="w-4 h-4"></i> ${a?"Enregistrer":"Ajouter"}</button>
            </div>
        </div>
    </div>`,window.updateModalData=(p,u)=>{const v=l.editingItem||l.newItem;p==="quantity"||p==="minThreshold"?v[p]=Number(u):v[p]=u},L({icons:T})}function Dt(){const e=document.getElementById("quick-add-root");if(!l.quickAddModalOpen){e.innerHTML="";return}const t=l.quickAddItem,a=se[t.category]||se.ALIMENTAIRE;e.innerHTML=`
    <div class="modal-backdrop fixed inset-0 bg-slate-900/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
        <div class="modal-content bg-white rounded-[2rem] shadow-2xl w-full max-w-sm overflow-hidden animate-scale-in">
            <div class="relative bg-gradient-to-r from-slate-900 to-slate-800 p-5">
                <div class="relative z-10 flex justify-between items-start">
                    <div><h3 class="text-lg font-black text-white mb-0.5">${t.name}</h3><p class="text-slate-400 text-xs font-medium flex items-center gap-1.5"><i data-lucide="${a.icon}" class="w-3 h-3"></i> Stock actuel: <span class="text-white font-bold">${t.quantity}</span></p></div>
                    <button onclick="closeQuickAddModal()" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"><i data-lucide="x" class="w-4 h-4"></i></button>
                </div>
            </div>
            <div class="p-5 bg-slate-50">
                <label class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Quantité à ajouter / retirer</label>
                <input id="quick-qty" type="number" placeholder="+10 ou -5" class="w-full p-4 bg-white rounded-2xl border-2 border-slate-100 focus:border-brand-400 text-center text-2xl font-bold text-slate-900 outline-none transition-all">
                <p class="text-xs text-slate-400 mt-2 text-center">Utilisez un nombre négatif pour retirer</p>
            </div>
            <div class="p-4 bg-white border-t border-slate-100 flex gap-3">
                <button onclick="closeQuickAddModal()" class="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition">Annuler</button>
                <button onclick="saveQuickAdd()" class="flex-1 py-3 bg-gradient-to-r from-brand-600 to-brand-500 text-white rounded-xl font-bold shadow-lg flex items-center justify-center gap-2"><i data-lucide="check" class="w-4 h-4"></i> Valider</button>
            </div>
        </div>
    </div>`,L({icons:T}),setTimeout(()=>{var r;return(r=document.getElementById("quick-qty"))==null?void 0:r.focus()},100)}const re=Object.freeze(Object.defineProperty({__proto__:null,closeModal:pM,closeQuickAddModal:uM,openModal:he,openQuickAddModal:Ua,renderModal:at,renderQuickAddModal:Dt},Symbol.toStringTag,{value:"Module"}));window.setFilter=vM;window.setSearch=gM;window.downloadStockCSV=p9;window.openModal=he;window.openQuickAddModal=Ua;function vM(e){l.filterMain=e,window.renderApp&&window.renderApp()}function gM(e){l.searchTerm=e;const t=document.getElementById("stock-results-container");t&&(t.innerHTML=Na(),L({icons:T}))}function yM(e){if(!e||!Array.isArray(e)||e.length===0)return"";const a=[...e].sort((v,g)=>new Date(v.date)-new Date(g.date))[0];if(!a||!a.date)return"";const r=new Date;r.setHours(0,0,0,0);const n=new Date(a.date),i=n-r,o=Math.ceil(i/(1e3*60*60*24));let c="bg-emerald-50 text-emerald-700 border-emerald-200",h="calendar",d=n.toLocaleDateString("fr-FR"),p="";const u=a.type||"DLC";return o<0?u==="DLC"?(c="bg-red-100 text-red-700 border-red-300 font-extrabold",h="alert-triangle",p="⛔ STOP"):(c="bg-orange-100 text-orange-700 border-orange-300 font-bold",h="info",p="⚠️ DLUO"):o===0?(c="bg-red-50 text-red-600 border-red-200 font-bold",p="Aujourd'hui !"):o<=7?(c="bg-amber-50 text-amber-700 border-amber-200 font-bold",p=`J-${o}`):o<=30?(c="bg-blue-50 text-blue-600 border-blue-200",p=`${d}`):(c="bg-slate-50 text-slate-500 border-slate-200",p=`${d}`),`
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] border ${c}">
            <i data-lucide="${h}" class="w-3 h-3"></i> ${p}
        </span>`}function Na(){const e=l.items.filter(r=>(l.filterMain==="TOUS"||r.category===l.filterMain)&&r.name.toLowerCase().includes(l.searchTerm.toLowerCase())),t=(r,n,i,o,c)=>{const h=o.filter(u=>u.category===n);if(h.length===0)return"";const d={};i.forEach(u=>d[u]=[]),h.forEach(u=>{const v=u.sub_category||"Autre";d[v]||(d[v]=[]),d[v].push(u)});let p=`
        <div class="mb-8">
            <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 ml-1 flex items-center gap-2">
                ${c} ${r}
                <span class="bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md text-[10px] font-black">${h.length}</span>
            </h3>`;for(const[u,v]of Object.entries(d))v.length!==0&&(p+=`
            <div class="mb-6">
                <div class="inline-block px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-bold text-slate-500 uppercase mb-3 ml-1 border border-slate-200">${V(u)}</div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">`,v.sort((g,y)=>g.name.localeCompare(y.name)).forEach(g=>{const y=g.quantity<=g.threshold;p+=`
                <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-brand-200 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                    <div class="flex items-start justify-between gap-3 mb-2">
                        <div class="min-w-0">
                            <h4 class="font-bold text-slate-900 truncate text-base">${V(g.name)}</h4>
                            ${g.remarks?`<p class="text-xs text-slate-400 truncate mt-0.5">${V(g.remarks)}</p>`:""}
                        </div>
                        <div class="text-center px-2 py-1.5 rounded-xl ${y?"bg-red-50":"bg-slate-50"} min-w-[3.5rem]">
                            <div class="text-lg font-black ${y?"text-red-500":"text-slate-900"} leading-none">${g.quantity}</div>
                        </div>
                    </div>

                    <div class="mt-auto pt-3 flex items-center justify-between border-t border-slate-50">
                        <div class="flex flex-wrap gap-1">
                            ${y?'<span class="text-[9px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded border border-red-100">Stock Bas</span>':""}
                            ${yM(g.batches)}
                        </div>
                        
                        <div class="flex gap-1">
                            <button onclick="openQuickAddModal(${g.id})" 
                                class="w-8 h-8 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all border border-brand-100" title="Ajout rapide">
                                <i data-lucide="plus" class="w-4 h-4"></i>
                            </button>
                            <button onclick="openModal('edit', ${g.id})" 
                                class="w-8 h-8 bg-slate-50 text-slate-400 rounded-lg flex items-center justify-center hover:bg-slate-200 hover:text-slate-600 transition-all border border-slate-100" title="Modifier">
                                <i data-lucide="settings-2" class="w-3.5 h-3.5"></i>
                            </button>
                        </div>
                    </div>
                </div>`}),p+="</div></div>");return p+="</div>",p};let a="";return(l.filterMain==="TOUS"||l.filterMain==="ALIMENTAIRE")&&(a+=t("Alimentaire","ALIMENTAIRE",l.foodSubcats,e,"🍎")),(l.filterMain==="TOUS"||l.filterMain==="HYGIENE")&&(a+=t("Hygiène","HYGIENE",l.hygieneSubcats,e,"🧴")),(l.filterMain==="TOUS"||l.filterMain==="VETEMENTS")&&(a+=t("Vêtements","VETEMENTS",l.clothingSubcats,e,"👕")),e.length===0?`
        <div class="text-center py-16">
            <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="search-x" class="w-8 h-8 text-slate-300"></i>
            </div>
            <p class="font-bold text-slate-600">Aucun produit trouvé</p>
            <p class="text-sm text-slate-400 mt-1">Essayez une autre recherche</p>
        </div>`:a}function fM(e){const t=l.items.filter(n=>n.category==="ALIMENTAIRE").reduce((n,i)=>n+i.quantity,0),a=l.items.filter(n=>n.category==="HYGIENE").reduce((n,i)=>n+i.quantity,0),r=l.items.filter(n=>n.category==="VETEMENTS").reduce((n,i)=>n+i.quantity,0);e.innerHTML=`
        <div class="animate-fade-in pb-24 md:pb-10 max-w-none">
            
            <!-- STAT CARDS (Style minimaliste premium) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <!-- Card Alimentaire -->
                <div class="bg-white p-5 md:p-6 rounded-[2rem] shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-500">
                    <div class="relative z-10">
                        <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Alimentaire</div>
                        <div class="text-4xl md:text-5xl font-black text-slate-900 group-hover:scale-105 transition-transform origin-left duration-300" data-stat-category="alimentaire">${t}</div>
                    </div>
                    <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-brand-50 rounded-full group-hover:scale-125 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 ease-out"></div>
                    <i data-lucide="utensils" class="absolute right-6 bottom-6 w-8 h-8 text-brand-400 group-hover:rotate-12 transition-transform duration-500"></i>
                </div>

                <!-- Card Hygiène -->
                <div class="bg-white p-5 md:p-6 rounded-[2rem] shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500">
                    <div class="relative z-10">
                        <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Hygiène</div>
                        <div class="text-4xl md:text-5xl font-black text-slate-900 group-hover:scale-105 transition-transform origin-left duration-300" data-stat-category="hygiene">${a}</div>
                    </div>
                    <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-purple-50 rounded-full group-hover:scale-125 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 ease-out"></div>
                    <i data-lucide="sparkles" class="absolute right-6 bottom-6 w-8 h-8 text-purple-400 group-hover:rotate-12 transition-transform duration-500"></i>
                </div>

                <!-- Card Vêtements -->
                <div class="bg-white p-5 md:p-6 rounded-[2rem] shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500">
                    <div class="relative z-10">
                        <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Vêtements</div>
                        <div class="text-4xl md:text-5xl font-black text-slate-900 group-hover:scale-105 transition-transform origin-left duration-300" data-stat-category="vetements">${r}</div>
                    </div>
                    <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-indigo-50 rounded-full group-hover:scale-125 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 ease-out"></div>
                    <i data-lucide="shirt" class="absolute right-6 bottom-6 w-8 h-8 text-indigo-400 group-hover:rotate-12 transition-transform duration-500"></i>
                </div>
                
                <!-- Total Card -->
                 <div class="hidden md:block bg-gradient-to-br from-slate-800 to-slate-900 p-5 md:p-6 rounded-[2rem] shadow-lg relative overflow-hidden group">
                     <div class="relative z-10 text-white">
                        <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Total Produits</div>
                        <div class="text-4xl md:text-5xl font-black group-hover:scale-105 transition-transform origin-left duration-300" data-stat-category="total">${t+a+r}</div>
                    </div>
                    <i data-lucide="package" class="absolute right-6 bottom-6 w-8 h-8 text-slate-700 group-hover:text-slate-600 transition-colors"></i>
                </div>

                 <div class="hidden md:flex bg-white p-5 md:p-6 rounded-[2rem] shadow-sm border border-slate-100 items-center justify-center text-center group cursor-pointer hover:border-brand-200 transition-colors" onclick="downloadStockCSV()">
                     <div>
                        <div class="w-12 h-12 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <i data-lucide="download" class="w-6 h-6"></i>
                        </div>
                        <div class="font-bold text-slate-900 text-sm">Export CSV</div>
                    </div>
                </div>

            </div>

            <!-- FILTER PILLS -->
            <div class="flex gap-2 mb-6 flex-wrap">
                <button onclick="setFilter('TOUS')" 
                    class="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 ${l.filterMain==="TOUS"?"bg-slate-900 text-white shadow-xl shadow-slate-900/20":"bg-white text-slate-500 border border-slate-200 hover:bg-slate-50"}">
                    Tout voir
                </button>
                <button onclick="setFilter('ALIMENTAIRE')" 
                    class="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1.5 ${l.filterMain==="ALIMENTAIRE"?"bg-brand-600 text-white shadow-xl shadow-brand-500/30":"bg-white text-slate-500 border border-slate-200 hover:bg-slate-50"}">
                    <span>🍎</span> Alimentaire
                </button>
                <button onclick="setFilter('HYGIENE')" 
                    class="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1.5 ${l.filterMain==="HYGIENE"?"bg-purple-600 text-white shadow-xl shadow-purple-500/30":"bg-white text-slate-500 border border-slate-200 hover:bg-slate-50"}">
                    <span>✨</span> Hygiène
                </button>
                <button onclick="setFilter('VETEMENTS')" 
                    class="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1.5 ${l.filterMain==="VETEMENTS"?"bg-indigo-600 text-white shadow-xl shadow-indigo-500/30":"bg-white text-slate-500 border border-slate-200 hover:bg-slate-50"}">
                    <span>👕</span> Vêtements
                </button>
            </div>

            <!-- SEARCH BAR -->
            <div class="relative mb-8">
                <i data-lucide="search" class="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300"></i>
                <input type="text" placeholder="Rechercher un produit..." value="${l.searchTerm}" oninput="setSearch(this.value)" 
                    class="w-full pl-14 pr-4 py-4 bg-white rounded-2xl shadow-sm border border-slate-100 outline-none font-medium text-slate-800 placeholder-slate-300 focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all duration-300 focus:scale-[1.01] focus:shadow-lg">
            </div>
            
            <!-- RESULTS -->
            <div id="stock-results-container">
                ${Na()}
            </div>

            <!-- EXPORT LINK -->
            <div class="text-center mt-8">
                <button onclick="downloadStockCSV()" class="text-sm font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-2 hover:underline">
                    <i data-lucide="download" class="w-4 h-4"></i>
                    Exporter en CSV
                </button>
            </div>
        </div>`,L({icons:T})}const T9=Object.freeze(Object.defineProperty({__proto__:null,getBatchBadge:yM,getStockListHTML:Na,renderList:fM,setFilter:vM,setSearch:gM},Symbol.toStringTag,{value:"Module"}));async function mM(e){l.opMode=e,l.distribMode=null,l.opCart=[],l.opInfo="";const{renderApp:t}=await C(async()=>{const{renderApp:a}=await Promise.resolve().then(()=>_t);return{renderApp:a}},void 0);t()}async function L9(e){l.distribMode=e;const{renderApp:t}=await C(async()=>{const{renderApp:a}=await Promise.resolve().then(()=>_t);return{renderApp:a}},void 0);t()}async function H9(){let e="IN";l.distribMode?e=l.distribMode:(l.opMode==="DISTRIB"||l.opMode==="PERTE")&&(e="OUT"),l.opCart.push({id:Date.now(),mainCategory:"ALIMENTAIRE",name:"",quantity:"",type:e});const{renderApp:t}=await C(async()=>{const{renderApp:a}=await Promise.resolve().then(()=>_t);return{renderApp:a}},void 0);t()}async function O9(e){l.opCart=l.opCart.filter(a=>a.id!==e);const{renderApp:t}=await C(async()=>{const{renderApp:a}=await Promise.resolve().then(()=>_t);return{renderApp:a}},void 0);t()}async function V9(e,t,a,r=!1){const n=l.opCart.find(i=>i.id===e);if(n&&(n[t]=t==="quantity"?Number(a):a,!r)){const{renderApp:i}=await C(async()=>{const{renderApp:o}=await Promise.resolve().then(()=>_t);return{renderApp:o}},void 0);i()}}async function R9(){if(l.opCart.length===0)return A("Le panier est vide !","warning");const e=[...l.foodProducts,...l.hygieneProducts,...l.clothingProducts,...l.items.map(o=>o.name)];for(const o of l.opCart)if(!e.includes(o.name)){A(`Produit inconnu : "${o.name}"`,"error"),A("Veuillez l'ajouter dans les Paramètres d'abord.","warning");return}const t=Pa(l.opMode),a=l.opCart.filter(o=>o.name&&o.quantity).length,r=l.opCart.reduce((o,c)=>o+(Number(c.quantity)||0),0),n=l.opInfo?` à "${l.opInfo}"`:"",i=`Confirmer l'opération ${t.label}${n} ?

📦 ${a} produit(s)
📊 ${r} unité(s) au total`;st(i,async()=>{await P9()},{title:`Valider ${t.label} ?`,confirmText:"Confirmer",cancelText:"Annuler",type:"info"})}async function P9(){const e=document.getElementById("btn-val-op"),t=e.innerText;e.innerText="Validation...",e.disabled=!0;try{for(const a of l.opCart){if(!a.name||!a.quantity)continue;const r=Number(a.quantity),n=a.type==="OUT"?-r:r,{data:i,error:o}=await k.from("items").select("*").eq("name",a.name).eq("category",a.mainCategory).maybeSingle();if(o)throw o;if(i){const d=i.quantity+n,{error:p}=await k.from("items").update({quantity:Math.max(0,d),updated_by:l.user.email}).eq("id",i.id);if(p)throw p}else{const{error:d}=await k.from("items").insert([{name:a.name,category:a.mainCategory,quantity:r,threshold:5,updated_by:l.user.email}]);if(d)throw d}let c=l.opMode;l.opMode==="DISTRIB"&&l.distribMode&&(c=l.distribMode==="OUT"?"Distribution":"Retour Distrib");const{error:h}=await k.from("history").insert([{item_name:a.name,action:c,change_qty:n,location:l.opInfo||"",user_email:l.user.email,created_at:new Date(l.opDate).toISOString()}]);if(h)throw h}A("Opération validée avec succès !","success"),l.opCart=[],l.opInfo="",mM(null),await dt()}catch(a){console.error(a),A("Erreur technique : "+a.message,"error")}finally{e&&(e.innerText=t,e.disabled=!1)}}window.setOpMode=mM;window.setDistribMode=L9;window.addOpLine=H9;window.removeOpLine=O9;window.updateOpLine=V9;window.validateOp=R9;function I9(){return`
        <div class="animate-fade-in pb-10 max-w-4xl mx-auto">
            <div class="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 mb-6 shadow-md cursor-default">
                <div class="relative text-white">
                    <h1 class="text-2xl font-black tracking-tight flex items-center gap-2">
                        <i data-lucide="arrow-right-left" class="w-7 h-7"></i> Opérations
                    </h1>
                    <p class="text-white/70 text-sm font-medium mt-1">Gérez les mouvements de stock</p>
                </div>
            </div>

            <button onclick="setOpMode('DISTRIB')" class="w-full bg-gradient-to-br from-orange-400 to-orange-600 p-6 rounded-3xl flex items-center gap-5 shadow-xl shadow-orange-500/30 hover:scale-[1.02] transition-all mb-4 group">
                <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition">
                    <i data-lucide="shopping-bag" class="w-8 h-8"></i>
                </div>
                <div class="text-left text-white">
                    <span class="block text-2xl font-black uppercase">Distribution</span>
                    <span class="text-sm text-orange-100/80">Sortie & Retour de produits</span>
                </div>
            </button>

            <button onclick="setOpMode('COLLECTE')" class="w-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-5 rounded-2xl flex items-center gap-4 shadow-lg hover:scale-[1.02] transition-all mb-4 group">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition">
                    <i data-lucide="check-circle" class="w-6 h-6"></i>
                </div>
                <div class="text-left text-white">
                    <span class="block text-xl font-bold">Collecte</span>
                    <span class="text-sm text-emerald-100/80">Récupération de dons</span>
                </div>
            </button>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button onclick="setOpMode('BA')" class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all text-center group">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-lg group-hover:scale-110 transition text-white">
                        <i data-lucide="store" class="w-6 h-6"></i>
                    </div>
                    <div class="font-bold text-slate-800">Banque Alim.</div>
                    <div class="text-[10px] text-slate-400">Entrée stock</div>
                </button>
                <button onclick="setOpMode('DON')" class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all text-center group">
                    <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-lg group-hover:scale-110 transition text-white">
                        <i data-lucide="heart" class="w-6 h-6"></i>
                    </div>
                    <div class="font-bold text-slate-800">Dons</div>
                    <div class="text-[10px] text-slate-400">Entrée stock</div>
                </button>
                <button onclick="setOpMode('COMMANDE')" class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all text-center group">
                    <div class="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-lg group-hover:scale-110 transition text-white">
                        <i data-lucide="truck" class="w-6 h-6"></i>
                    </div>
                    <div class="font-bold text-slate-800">Commandes</div>
                    <div class="text-[10px] text-slate-400">Entrée stock</div>
                </button>
                <button onclick="setOpMode('PERTE')" class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all text-center group">
                    <div class="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-lg group-hover:scale-110 transition text-white">
                        <i data-lucide="trash-2" class="w-6 h-6"></i>
                    </div>
                    <div class="font-bold text-slate-800">Perte</div>
                    <div class="text-[10px] text-slate-400">Cassé / Périmé</div>
                </button>
            </div>
        </div>`}function $9(){return`
        <div class="animate-fade-in max-w-lg mx-auto">
            <div class="flex items-center gap-3 mb-6">
                <button onclick="setOpMode(null)" class="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">
                    <i data-lucide="arrow-left" class="w-5 h-5 text-slate-600"></i>
                </button>
                <h2 class="text-xl font-black text-slate-900">Distribution</h2>
            </div>
            <div class="space-y-4">
                <button onclick="setDistribMode('OUT')" class="w-full bg-gradient-to-br from-orange-400 to-red-500 p-6 rounded-3xl flex items-center gap-5 shadow-xl hover:scale-[1.02] transition-all group">
                    <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition">
                        <i data-lucide="log-out" class="w-8 h-8"></i>
                    </div>
                    <div class="text-left text-white">
                        <span class="block text-xl font-black uppercase">Sortie de Stock</span>
                        <span class="text-sm text-orange-100/80">Distribution aux bénéficiaires</span>
                    </div>
                </button>
                <button onclick="setDistribMode('IN')" class="w-full bg-gradient-to-br from-blue-400 to-indigo-500 p-6 rounded-3xl flex items-center gap-5 shadow-xl hover:scale-[1.02] transition-all group">
                    <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition">
                        <i data-lucide="rotate-ccw" class="w-8 h-8"></i>
                    </div>
                    <div class="text-left text-white">
                        <span class="block text-xl font-black uppercase">Retour Stock</span>
                        <span class="text-sm text-blue-100/80">Réintégration fin distribution</span>
                    </div>
                </button>
            </div>
        </div>`}function j9(){const e=Pa(l.opMode),t={orange:{gradient:"from-orange-400 to-orange-600",border:"border-orange-400",bg:"bg-orange-50",text:"text-orange-600",shadow:"shadow-orange-500/20"},green:{gradient:"from-emerald-400 to-emerald-600",border:"border-emerald-400",bg:"bg-emerald-50",text:"text-emerald-600",shadow:"shadow-emerald-500/20"},blue:{gradient:"from-blue-400 to-blue-600",border:"border-blue-400",bg:"bg-blue-50",text:"text-blue-600",shadow:"shadow-blue-500/20"},purple:{gradient:"from-purple-400 to-purple-600",border:"border-purple-400",bg:"bg-purple-50",text:"text-purple-600",shadow:"shadow-purple-500/20"},teal:{gradient:"from-teal-400 to-teal-600",border:"border-teal-400",bg:"bg-teal-50",text:"text-teal-600",shadow:"shadow-teal-500/20"},red:{gradient:"from-red-400 to-red-600",border:"border-red-400",bg:"bg-red-50",text:"text-red-600",shadow:"shadow-red-500/20"},gray:{gradient:"from-slate-400 to-slate-600",border:"border-slate-400",bg:"bg-slate-50",text:"text-slate-600",shadow:"shadow-slate-500/20"}},a=t[e.color]||t.gray,r=l.opCart.map(o=>{const c=o.type==="OUT";let h="bg-slate-50 text-slate-700";return o.mainCategory==="ALIMENTAIRE"?h="bg-green-50 text-green-700":o.mainCategory==="HYGIENE"?h="bg-purple-50 text-purple-700":o.mainCategory==="VETEMENTS"&&(h="bg-indigo-50 text-indigo-700"),`<div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2">
                    <select onchange="updateOpLine(${o.id},'mainCategory',this.value)" class="text-xs font-bold ${h} border px-2 py-1 rounded-lg">
                        <option value="ALIMENTAIRE" ${o.mainCategory==="ALIMENTAIRE"?"selected":""}>🍎 ALIM</option>
                        <option value="HYGIENE" ${o.mainCategory==="HYGIENE"?"selected":""}>🧴 HYG</option>
                        <option value="VETEMENTS" ${o.mainCategory==="VETEMENTS"?"selected":""}>👕 VET</option>
                    </select>
                    <span class="text-[10px] font-bold px-2 py-1 rounded-lg ${c?"bg-orange-100 text-orange-700":"bg-blue-100 text-blue-700"}">${c?"↑ SORTIE":"↓ ENTRÉE"}</span>
                </div>
                <button onclick="removeOpLine(${o.id})" class="text-slate-300 hover:text-red-500 p-1"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
            </div>
            <div class="flex gap-2">
                <div class="flex-1 relative custom-select-container">
                    ${(()=>{const d=`op-list-${o.id}`,p=`op-input-${o.id}`;let u=[];o.mainCategory==="ALIMENTAIRE"?u=l.foodProducts:o.mainCategory==="HYGIENE"?u=l.hygieneProducts:o.mainCategory==="VETEMENTS"&&(u=l.clothingProducts);const v=u.map(g=>`<div onclick="window.selectCustomOption('${d}', '${p}', '${V(g).replace(/'/g,"\\'")}', true, ${o.id}, false)" class="p-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer text-slate-700 font-semibold text-sm transition">${V(g)}</div>`).join("");return`
                        <input id="${p}" type="text" value="${V(o.name)}" 
                            onfocus="window.openCustomSelect('${d}')" 
                            oninput="window.updateOpLine(${o.id},'name',this.value,true); window.openCustomSelect('${d}'); window.filterCustomSelect('${d}', this.value)" 
                            class="w-full p-3 bg-slate-50 rounded-xl border font-medium focus:border-brand-500 outline-none" 
                            placeholder="Nom du produit..." autocomplete="off">
                        <div id="${d}" class="custom-dropdown-list hidden absolute z-50 w-full bg-white border border-slate-100 rounded-xl shadow-xl max-h-48 overflow-y-auto mt-2">${v}</div>
                        `})()}
                </div>
                <input type="number" value="${o.quantity}" onchange="updateOpLine(${o.id},'quantity',this.value)" class="w-20 p-3 bg-slate-50 rounded-xl border text-center font-bold" placeholder="Qté">
            </div>
        </div>`}).join(""),n=`<div class="text-center py-10 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
        <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 text-slate-300"><i data-lucide="package" class="w-7 h-7"></i></div>
        <p class="text-slate-400 font-medium">Panier vide</p>
    </div>`;let i="";if(l.opMode==="DISTRIB"||l.opMode==="COLLECTE"){const o=l.opMode==="DISTRIB"?"distribLocations":"collectLocations",c=l[o]||[],h="op-loc-list",d="op-loc-input",p=c.map(u=>`<div onclick="window.selectCustomOption('${h}', '${d}', '${V(u).replace(/'/g,"\\'")}', false, 0, false)" class="p-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer text-slate-700 font-semibold text-sm transition">${V(u)}</div>`).join("");i=`
        <div class="relative custom-select-container">
            <i data-lucide="map-pin" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${a.text} z-10 w-5 h-5"></i>
            <input id="${d}" type="text" value="${V(l.opInfo)}" 
                onfocus="window.openCustomSelect('${h}')" 
                oninput="state.opInfo=this.value; window.openCustomSelect('${h}'); window.filterCustomSelect('${h}', this.value)" 
                class="w-full pl-12 pr-4 py-3 ${a.bg} rounded-xl border-2 font-bold focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all" 
                placeholder="Lieu de l'opération..." autocomplete="off">
            <div id="${h}" class="custom-dropdown-list hidden absolute z-50 w-full bg-white border border-slate-100 rounded-xl shadow-xl max-h-48 overflow-y-auto mt-2">${p}</div>
        </div>`}else i=`<input type="text" value="${V(l.opInfo)}" oninput="state.opInfo=this.value" class="w-full p-3 bg-slate-50 rounded-xl border font-medium" placeholder="Informations complémentaires...">`;return`<div class="animate-fade-in max-w-lg mx-auto pb-10">
        <div class="bg-white rounded-3xl shadow-lg ${a.shadow} border-t-4 ${a.border} p-5 mb-4">
            <div class="flex justify-between items-start mb-4">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-gradient-to-br ${a.gradient} rounded-xl flex items-center justify-center text-white shadow-lg"><i data-lucide="${e.icon}" class="w-6 h-6"></i></div>
                    <div><h2 class="font-black text-lg text-slate-900">${e.label}</h2><input type="date" value="${l.opDate}" onchange="state.opDate=this.value" class="text-xs text-slate-400 bg-transparent"></div>
                </div>
                <button onclick="setOpMode(null)" class="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center"><i data-lucide="x" class="w-5 h-5 text-slate-500"></i></button>
            </div>
            ${i}
        </div>
        <div class="space-y-3 mb-4">${l.opCart.length===0?n:r}</div>
        <button onclick="addOpLine()" class="w-full py-4 border-2 border-dashed border-slate-200 text-slate-400 rounded-2xl font-bold hover:bg-slate-50 mb-4 flex items-center justify-center gap-2"><i data-lucide="plus" class="w-5 h-5"></i> Ajouter un produit</button>
        <button id="btn-val-op" onclick="validateOp()" class="w-full py-4 bg-gradient-to-r ${a.gradient} text-white rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2"><i data-lucide="check-circle" class="w-5 h-5"></i> Valider l'opération</button>
    </div>`}function D9(e){l.opMode?l.opMode==="DISTRIB"&&!l.distribMode?e.innerHTML=$9():e.innerHTML=j9():e.innerHTML=I9(),L({icons:T})}let D={page:1,limit:20,total:0};window.downloadHistoryCSV=u9;window.setHistFilter=async(e,t)=>{l.histFilter[e]=t,D.page=1,await de()};window.changeHistoryPage=async e=>{D.page=e,await de()};function MM(){return!l.groupedHistory||l.groupedHistory.length===0?`<div class="text-center py-16 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="clock" class="w-8 h-8 text-slate-300"></i>
            </div>
            <p class="text-slate-400 font-semibold">Aucun historique</p>
            <p class="text-xs text-slate-300 mt-1">Les opérations apparaîtront ici</p>
        </div>`:l.groupedHistory.map(e=>{const t=Pa(e.action),a=e.items.reduce((o,c)=>o+c.change_qty,0),r={orange:{gradient:"from-orange-400 to-orange-600",bg:"bg-orange-50",border:"border-orange-200",text:"text-orange-600"},green:{gradient:"from-emerald-400 to-emerald-600",bg:"bg-emerald-50",border:"border-emerald-200",text:"text-emerald-600"},blue:{gradient:"from-blue-400 to-blue-600",bg:"bg-blue-50",border:"border-blue-200",text:"text-blue-600"},purple:{gradient:"from-purple-400 to-purple-600",bg:"bg-purple-50",border:"border-purple-200",text:"text-purple-600"},teal:{gradient:"from-teal-400 to-teal-600",bg:"bg-teal-50",border:"border-teal-200",text:"text-teal-600"},red:{gradient:"from-red-400 to-red-600",bg:"bg-red-50",border:"border-red-200",text:"text-red-600"},gray:{gradient:"from-slate-400 to-slate-600",bg:"bg-slate-50",border:"border-slate-200",text:"text-slate-600"}},n=r[t.color]||r.gray,i=e.items.map(o=>`
            <div class="px-4 py-2.5 flex justify-between items-center hover:bg-slate-50 transition">
                <span class="text-sm text-slate-700 font-medium">${V(o.item_name)}</span>
                <span class="font-mono font-bold text-sm px-2 py-0.5 rounded-lg ${o.change_qty>0?"bg-emerald-50 text-emerald-600":"bg-red-50 text-red-600"}">
                    ${o.change_qty>0?"+":""}${o.change_qty}
                </span>
            </div>
        `).join("");return`
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition group">
            <div class="${n.bg} px-4 py-3 flex justify-between items-center border-b ${n.border}">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-gradient-to-br ${n.gradient} rounded-xl flex items-center justify-center text-white shadow-sm">
                        <i data-lucide="${t.icon}" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <div class="font-bold text-sm text-slate-900">${t.label}</div>
                        <div class="text-xs text-slate-500 flex items-center gap-1">
                            <i data-lucide="map-pin" class="w-3 h-3"></i>
                            ${V(e.location)||"Non spécifié"}
                        </div>
                    </div>
                </div>
                <div class="text-right">
                    <div class="text-xs font-bold text-slate-900">${e.date}</div>
                    <div class="text-[10px] font-bold ${a>0?"text-emerald-600":"text-red-500"}">
                        ${a>0?"+":""}${a} unités
                    </div>
                </div>
            </div>
            <div class="divide-y divide-slate-50">${i}</div>
        </div>`}).join("")}function xM(e){var i,o;const t=new Set([2024,new Date().getFullYear()]);l.history.forEach(c=>t.add(new Date(c.created_at).getFullYear()));const r=Array.from(t).sort((c,h)=>h-c).map(c=>`<option value="${c}" ${l.histFilter.year===c.toString()?"selected":""}>${c}</option>`).join(""),n=["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"];e.innerHTML=`
        <div class="animate-fade-in pb-24 max-w-4xl mx-auto">
            <div class="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-6 mb-6 shadow-2xl">
                <div class="relative flex items-center justify-between">
                    <div class="text-white">
                        <h1 class="text-2xl font-black tracking-tight flex items-center gap-2">
                            <i data-lucide="clock" class="w-7 h-7"></i> Historique
                        </h1>
                        <p class="text-white/60 text-sm font-medium mt-1">Traçabilité des opérations</p>
                    </div>
                    <button onclick="downloadHistoryCSV()" class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition group">
                        <i data-lucide="download" class="w-5 h-5 group-hover:scale-110 transition"></i>
                    </button>
                </div>
                <div class="flex gap-3 mt-5">
                    <div class="bg-white/10 rounded-xl px-4 py-2 border border-white/20">
                        <div class="text-xl font-black text-white">${((i=l.groupedHistory)==null?void 0:i.length)||0}</div>
                        <div class="text-[9px] font-bold text-white/50 uppercase">Opérations</div>
                    </div>
                    <div class="bg-white/10 rounded-xl px-4 py-2 border border-white/20">
                        <div class="text-xl font-black text-emerald-400">${((o=l.history)==null?void 0:o.length)||0}</div>
                        <div class="text-[9px] font-bold text-white/50 uppercase">Entrées</div>
                    </div>
                </div>
            </div>

            <div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-6 overflow-hidden">
                <div class="flex items-center gap-2 mb-3">
                    <i data-lucide="filter" class="w-4 h-4 text-slate-400"></i>
                    <span class="text-xs font-bold text-slate-400 uppercase">Filtres</span>
                </div>
                <div class="flex gap-2 mb-3">
                    <select onchange="setHistFilter('year', this.value)" class="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-200 font-bold text-sm outline-none min-w-0">
                        <option value="">Année</option>
                        ${r}
                    </select>
                    <select onchange="setHistFilter('month', this.value)" class="flex-[2] p-3 bg-slate-50 rounded-xl border border-slate-200 font-bold text-sm outline-none min-w-0">
                        <option value="">Tous les mois</option>
                        ${n.map((c,h)=>`<option value="${h+1}" ${l.histFilter.month===(h+1).toString()?"selected":""}>${c}</option>`).join("")}
                    </select>
                </div>
                <div class="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center mb-3 overflow-hidden">
                    <div class="relative flex-1 min-w-0">
                        <i data-lucide="calendar" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none z-10"></i>
                        <input type="date" onchange="setHistFilter('dateFrom', this.value)" value="${l.histFilter.dateFrom}" class="w-full max-w-full pl-10 pr-2 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium outline-none box-border">
                    </div>
                    <span class="text-slate-300 font-bold text-sm text-center hidden sm:block flex-shrink-0">→</span>
                    <div class="relative flex-1 min-w-0">
                        <i data-lucide="calendar" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none z-10"></i>
                        <input type="date" onchange="setHistFilter('dateTo', this.value)" value="${l.histFilter.dateTo}" class="w-full max-w-full pl-10 pr-2 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium outline-none box-border">
                    </div>
                </div>
                <div class="relative">
                    <i data-lucide="search" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"></i>
                    <input type="text" placeholder="Rechercher produit, lieu..." oninput="setHistFilter('search', this.value)" value="${l.histFilter.search}" class="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 font-medium outline-none">
                </div>
            </div>

            <div id="history-results-container" class="space-y-4">
                <div class="text-center py-12">
                     <div class="animate-spin w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full mx-auto mb-3"></div>
                     <p class="text-slate-400 font-bold animate-pulse">Chargement de l'historique...</p>
                </div>
            </div>
            
            <!-- PAGINATION -->
            <div id="history-pagination" class="mt-6"></div>
        </div>`,de(),L({icons:T})}async function de(){const e=document.getElementById("history-results-container"),t=document.getElementById("history-pagination");if(!e)return;e.style.opacity="0.5";const{data:a,count:r,error:n}=await dM(D.page,D.limit,l.histFilter);if(e.style.opacity="1",n){e.innerHTML=`
            <div class="text-center py-16 bg-white rounded-2xl border border-red-100">
                <div class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="alert-triangle" class="w-8 h-8 text-red-500"></i>
                </div>
                <p class="text-red-500 font-bold">Erreur de chargement</p>
                <p class="text-xs text-red-300 mt-1">Veuillez réessayer</p>
            </div>`,L({icons:T});return}D.total=r||0;const i=Math.ceil(D.total/D.limit);hM(a||[]),e.innerHTML=MM(),B9(t,i),L({icons:T})}function B9(e,t){if(!e)return;if(D.total===0){e.innerHTML="";return}const a=(D.page-1)*D.limit+1,r=Math.min(D.page*D.limit,D.total);e.innerHTML=`
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
            <div class="text-xs font-semibold text-slate-400">
                Affichage <span class="text-slate-700 font-bold">${a}-${r}</span> sur <span class="text-slate-700 font-bold">${D.total}</span> opérations
            </div>
            <div class="flex items-center gap-2">
                <button onclick="changeHistoryPage(${D.page-1})" ${D.page===1?"disabled":""} 
                    class="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition hover:shadow-sm">
                    <i data-lucide="chevron-left" class="w-5 h-5"></i>
                </button>
                <span class="text-sm font-bold text-slate-700 min-w-[4rem] text-center bg-slate-50 py-2 rounded-lg border border-slate-100">${D.page} / ${t||1}</span>
                <button onclick="changeHistoryPage(${D.page+1})" ${D.page>=t?"disabled":""} 
                    class="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition hover:shadow-sm">
                    <i data-lucide="chevron-right" class="w-5 h-5"></i>
                </button>
            </div>
        </div>
    `,L({icons:T})}const wM=Object.freeze(Object.defineProperty({__proto__:null,getHistoryListHTML:MM,loadHistoryData:de,renderHist:xM},Symbol.toStringTag,{value:"Module"}));function U9(){var a;const t=(((a=l.user)==null?void 0:a.email)||"U")[0].toUpperCase();return`
        <header class="md:hidden fixed top-0 left-0 right-0 w-full z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-sm" style="padding-top: env(safe-area-inset-top);">
            <div class="h-16 w-full flex items-center justify-between px-4">
                <!-- Logo + Brand -->
                <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center">
                        <img src="${Oa}" class="h-5 w-auto" alt="Logo">
                    </div>
                    <div class="flex items-baseline gap-0.5">
                        <span class="font-extrabold text-lg text-slate-900">Stock</span>
                        <span class="font-bold text-lg text-brand-600">COP1</span>
                    </div>
                </div>
                
                <!-- Profile Avatar -->
                <button 
                    data-action="open-mobile-menu"
                    aria-label="Menu" 
                    title="Menu"
                    class="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-brand-700 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-brand-500/25 hover:shadow-xl hover:scale-105 transition-all active:scale-95"
                >
                    ${t}
                </button>
            </div>
        </header>
    `}const bM=[{id:"list",icon:"box",label:"Stock",gradient:"from-blue-500 to-indigo-600",iconBg:"bg-blue-500",iconBgLight:"bg-blue-50",iconText:"text-blue-600"},{id:"operations",icon:"arrow-right-left",label:"Opérations",gradient:"from-emerald-500 to-teal-600",iconBg:"bg-emerald-500",iconBgLight:"bg-emerald-50",iconText:"text-emerald-600"},{id:"history",icon:"clock",label:"Historique",gradient:"from-violet-500 to-purple-600",iconBg:"bg-violet-500",iconBgLight:"bg-violet-50",iconText:"text-violet-600"}];function N9(){var n,i;const e=((n=l.user)==null?void 0:n.email)||"utilisateur@email.com",t=((i=e[0])==null?void 0:i.toUpperCase())||"?",a=l.view,r=bM.map(o=>{const c=o.id===a,h=c?`bg-gradient-to-r ${o.gradient} text-white shadow-lg shadow-brand-500/25`:"text-slate-600 hover:bg-slate-50 hover:text-slate-900",d=c?"bg-white/20":`${o.iconBgLight} group-hover:bg-white group-hover:shadow-sm`,p=c?"text-white":o.iconText;return`
            <button 
                data-nav-view="${o.id}" 
                aria-label="${o.label}"
                aria-current="${c?"page":"false"}"
                class="nav-link group relative w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${h}"
            >
                <div class="relative flex items-center justify-center w-9 h-9 rounded-lg ${d} transition-all duration-200">
                    <i data-lucide="${o.icon}" class="w-[18px] h-[18px] ${p}"></i>
                </div>
                <span class="flex-1 ${c?"font-semibold":""}">${o.label}</span>
                ${c?'<div class="w-1.5 h-1.5 rounded-full bg-white/80"></div>':""}
            </button>
        `}).join("");return`
        <aside id="sidebar" class="hidden md:flex w-72 flex-col fixed inset-y-0 left-0 bg-white/80 backdrop-blur-xl border-r border-slate-200/50 z-50 flex-shrink-0 h-full shadow-xl shadow-slate-200/50">
            <!-- Header avec Logo -->
            <div class="h-20 flex items-center gap-3 px-6 flex-shrink-0 border-b border-slate-100/50">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center">
                    <img src="${Oa}" class="h-6 w-auto" alt="Logo COP1">
                </div>
                <div>
                    <span class="font-extrabold text-xl text-slate-900">Stock</span>
                    <span class="font-bold text-xl text-brand-600"> COP1</span>
                </div>
            </div>
            
            <!-- User Card -->
            <div class="px-4 py-4 border-b border-slate-100/50">
                <div class="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100/50">
                    <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-600 to-brand-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand-500/25">
                        ${t}
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="font-bold text-slate-900 text-sm truncate">${e}</div>
                        <div class="text-xs text-slate-400 truncate">Gestionnaire Stock</div>
                    </div>
                </div>
            </div>
            
            <!-- Navigation -->
            <nav 
                id="sidebar-nav" 
                class="flex-1 px-3 space-y-1 py-4 overflow-y-auto no-scrollbar"
                role="navigation"
                aria-label="Navigation principale"
            >
                ${r}
            </nav>
            
            <!-- Footer avec Paramètres & Déconnexion -->
            <div class="p-4 flex-shrink-0 border-t border-slate-100/50 space-y-2">
                <button 
                    data-action="open-settings"
                    aria-label="Paramètres"
                    class="group flex items-center gap-3 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 w-full p-3 rounded-xl transition-all duration-200"
                >
                    <div class="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-slate-200 flex items-center justify-center transition-colors">
                        <i data-lucide="settings" class="w-4 h-4"></i>
                    </div>
                    <span>Paramètres</span>
                </button>
                <button 
                    data-action="logout"
                    aria-label="Se déconnecter"
                    class="group flex items-center gap-3 text-sm font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 w-full p-3 rounded-xl transition-all duration-200"
                >
                    <div class="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-red-100 flex items-center justify-center transition-colors">
                        <i data-lucide="log-out" class="w-4 h-4 group-hover:text-red-500 transition-colors"></i>
                    </div>
                    <span>Déconnexion</span>
                </button>
            </div>
        </aside>
    `}function q9(e){const t=document.getElementById("sidebar-nav");if(!t)return;t.querySelectorAll("[data-nav-view]").forEach(r=>{const n=r.dataset.navView,i=n===e,o=bM.find(v=>v.id===n);if(!o)return;const c=o.gradient.split(" ");r.classList.remove("bg-gradient-to-r","text-white","shadow-lg","shadow-brand-500/25"),r.classList.remove(...c),r.classList.add("text-slate-600","hover:bg-slate-50","hover:text-slate-900"),r.setAttribute("aria-current","false");const h=r.querySelector("div");h&&(h.classList.remove("bg-white/20"),h.classList.add(o.iconBgLight,"group-hover:bg-white","group-hover:shadow-sm"));const d=r.querySelector("i");d&&(d.classList.remove("text-white"),d.classList.add(o.iconText));const p=r.querySelector("span");p&&p.classList.remove("font-semibold");const u=r.querySelector(".bg-white\\/80");if(u&&u.remove(),i){r.classList.remove("text-slate-600","hover:bg-slate-50","hover:text-slate-900"),r.classList.add("bg-gradient-to-r","text-white","shadow-lg","shadow-brand-500/25"),r.classList.add(...c),r.setAttribute("aria-current","page"),h&&(h.classList.remove(o.iconBgLight,"group-hover:bg-white","group-hover:shadow-sm"),h.classList.add("bg-white/20")),d&&(d.classList.remove(o.iconText),d.classList.add("text-white")),p&&p.classList.add("font-semibold");const v=document.createElement("div");v.className="w-1.5 h-1.5 rounded-full bg-white/80",r.appendChild(v)}}),L({icons:T})}function F9(){const e=document.getElementById("sidebar");if(!e)return;e.querySelectorAll("[data-nav-view]").forEach(r=>{r.addEventListener("click",n=>{n.preventDefault();const i=r.dataset.navView;St(i)})});const t=e.querySelector('[data-action="open-settings"]');t&&t.addEventListener("click",Ut);const a=e.querySelector('[data-action="logout"]');a&&a.addEventListener("click",z9),L({icons:T})}async function z9(){st("Voulez-vous vraiment vous déconnecter ?",async()=>{try{const{supabaseClient:e}=await C(async()=>{const{supabaseClient:t}=await Promise.resolve().then(()=>oM);return{supabaseClient:t}},void 0);await e.auth.signOut(),l.user=null,A("Déconnexion réussie"),window.location.reload()}catch(e){console.error("❌ Erreur déconnexion:",e),window.location.reload()}},{confirmText:"Se déconnecter",type:"danger"})}const Z9=[{id:"list",icon:"box",label:"Stock"},{id:"operations",icon:"arrow-right-left",label:"Opérations"},{id:"history",icon:"clock",label:"Historique"},{id:"MENU",icon:"menu",label:"Menu"}];function G9(){const e=l.view;return`
        <nav 
            id="mobile-nav" 
            class="md:hidden fixed bottom-0 left-0 right-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-200/50 z-50 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]"
            role="navigation"
            style="padding-bottom: max(env(safe-area-inset-bottom), 8px);"
        >
            <div class="flex justify-around items-stretch px-2">
                ${Z9.map(a=>{if(a.id==="MENU")return ys(a,!1,!0);const r=a.id===e;return ys(a,r,!1)}).join("")}
            </div>
        </nav>
    `}function ys(e,t,a){return`
        <button 
            ${a?'data-action="open-mobile-menu"':`data-nav-view="${e.id}"`}
            aria-label="${e.label}"
            aria-current="${t?"page":"false"}"
            class="nav-item relative flex flex-col items-center justify-center gap-0.5 py-2 flex-1 transition-all duration-200 ${t?"text-brand-600":"text-slate-400"}"
        >
            <!-- Animated Pill Indicator -->
            <div class="active-pill absolute top-0 w-10 h-1 bg-brand-600 rounded-full transition-all duration-300 ease-out origin-center ${t?"scale-100 opacity-100":"scale-0 opacity-0"}"></div>
            
            <div class="icon-container relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 ${t?"bg-brand-50":"bg-transparent"}">
                <i data-lucide="${e.icon}" class="w-6 h-6 transition-all duration-200 ${t?"stroke-[2.5px]":"stroke-2"}"></i>
            </div>
            
            <span class="text-[10px] font-semibold transition-colors duration-200">${e.label}</span>
        </button>
    `}function W9(){const e=document.getElementById("mobile-nav");if(!e)return;e.querySelectorAll("[data-nav-view]").forEach(r=>{r.addEventListener("click",()=>{const n=r.dataset.navView;St(n)})});const t=e.querySelector('[data-action="open-mobile-menu"]');t&&t.addEventListener("click",fs);const a=document.querySelector('header [data-action="open-mobile-menu"]');a&&a.addEventListener("click",fs),L({icons:T})}function fs(){var r,n;const e=((r=l.user)==null?void 0:r.email)||"utilisateur@email.com",t=((n=e[0])==null?void 0:n.toUpperCase())||"?",a=document.createElement("div");a.id="mobile-menu-modal",a.className="fixed inset-0 bg-black/50 z-[100] flex flex-col justify-end backdrop-blur-sm animate-fade-in md:hidden",a.addEventListener("click",i=>{i.target===a&&kt()}),a.innerHTML=`
        <div class="bg-white rounded-t-[2rem] shadow-2xl animate-slide-up" style="max-height: 85vh; overflow-y: auto; padding-bottom: max(env(safe-area-inset-bottom), 16px);">
            <!-- Handle Bar -->
            <div class="flex justify-center pt-3 pb-1">
                <div class="w-12 h-1.5 bg-slate-200 rounded-full"></div>
            </div>
            
            <!-- User Card -->
            <div class="px-5 py-4">
                <div class="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 border border-slate-100">
                    <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-900 to-brand-700 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-800/30">
                        ${t}
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="font-bold text-slate-900 text-lg truncate">${e}</div>
                        <div class="text-sm text-slate-400 truncate">Gestionnaire Stock</div>
                    </div>
                </div>
            </div>
            
            <!-- Menu Grid -->
            <div class="px-5 pb-4">
                <div class="grid grid-cols-3 gap-3">
                    <button data-menu-action="navigate" data-menu-view="list" class="menu-card flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 active:scale-95 transition-all">
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/25">
                            <i data-lucide="box" class="w-5 h-5"></i>
                        </div>
                        <span class="text-xs font-semibold text-slate-700">Stock</span>
                    </button>
                    
                    <button data-menu-action="navigate" data-menu-view="operations" class="menu-card flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 active:scale-95 transition-all">
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25">
                            <i data-lucide="arrow-right-left" class="w-5 h-5"></i>
                        </div>
                        <span class="text-xs font-semibold text-slate-700">Opérations</span>
                    </button>
                    
                    <button data-menu-action="navigate" data-menu-view="history" class="menu-card flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 active:scale-95 transition-all">
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/25">
                            <i data-lucide="clock" class="w-5 h-5"></i>
                        </div>
                        <span class="text-xs font-semibold text-slate-700">Historique</span>
                    </button>
                </div>
            </div>
            
            <!-- Quick Actions -->
            <div class="px-5 pb-4 space-y-2">
                <!-- Paramètres -->
                <button data-menu-action="settings" class="w-full flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-150 transition-all active:scale-[0.98]">
                    <div class="w-11 h-11 rounded-xl bg-slate-500 flex items-center justify-center text-white shadow-lg">
                        <i data-lucide="settings" class="w-5 h-5"></i>
                    </div>
                    <div class="flex-1 text-left">
                        <div class="font-bold text-slate-700">Paramètres</div>
                        <div class="text-xs text-slate-400">Gérer les listes et sauvegardes</div>
                    </div>
                    <i data-lucide="chevron-right" class="w-5 h-5 text-slate-300"></i>
                </button>
                
                <!-- Déconnexion -->
                <button data-menu-action="logout" class="w-full flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-red-50 to-rose-50 hover:from-red-100 hover:to-rose-100 transition-all active:scale-[0.98]">
                    <div class="w-11 h-11 rounded-xl bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-500/25">
                        <i data-lucide="log-out" class="w-5 h-5"></i>
                    </div>
                    <div class="flex-1 text-left">
                        <div class="font-bold text-red-700">Se déconnecter</div>
                        <div class="text-xs text-red-400">Quitter l'application</div>
                    </div>
                    <i data-lucide="chevron-right" class="w-5 h-5 text-red-300"></i>
                </button>
            </div>
            
            <!-- Close Button -->
            <div class="px-5 pb-2">
                <button data-menu-action="close" class="w-full py-3.5 bg-slate-100 font-bold text-slate-500 rounded-2xl hover:bg-slate-200 active:scale-[0.98] transition-all text-sm">
                    Fermer
                </button>
            </div>
        </div>
    `,document.body.appendChild(a),L({icons:T}),K9(a)}function K9(e){e.addEventListener("click",async t=>{const a=t.target.closest("[data-menu-action]");if(!a)return;switch(a.dataset.menuAction){case"navigate":const n=a.dataset.menuView;n&&(kt(),St(n));break;case"settings":kt(),Ut();break;case"logout":kt(),await J9();break;case"close":kt();break}})}function kt(){var t;const e=document.getElementById("mobile-menu-modal");e&&(e.style.opacity="0",(t=e.querySelector(".bg-white"))==null||t.classList.add("translate-y-full"),setTimeout(()=>e.remove(),200))}async function J9(){st("Voulez-vous vous déconnecter ?",async()=>{try{const{supabaseClient:e}=await C(async()=>{const{supabaseClient:t}=await Promise.resolve().then(()=>oM);return{supabaseClient:t}},void 0);await e.auth.signOut(),l.user=null,A("Déconnexion réussie"),window.location.reload()}catch(e){console.error("Logout error:",e),A("Erreur déconnexion","error")}},{type:"danger",confirmText:"Déconnecter"})}window.setView=St;window.openSettingsModal=Ut;window.closeSettingsModal=Ba;window.openModal=he;function qt(){if(!l.user)return;const e=document.getElementById("app");if(!e)return;e.innerHTML=`
        <div class="flex h-full w-full overflow-hidden bg-[#F8FAFC]">
            
            <!-- DESKTOP SIDEBAR -->
            ${N9()}

            <div class="flex-1 flex flex-col h-full relative min-w-0 md:ml-72">

                <!-- MOBILE HEADER -->
                ${U9()}

                <!-- MAIN CONTENT SLOT -->
                <main id="main-slot" class="flex-1 overflow-y-auto pt-20 md:pt-8 pb-32 md:pb-8 px-4 md:px-8 w-full scroll-smooth max-w-7xl mx-auto focus:outline-none" tabindex="-1">
                </main>

                <!-- MOBILE BOTTOM NAVIGATION BAR -->
                ${G9()}

                <!-- FAB BUTTON (Stock view only) -->
                ${l.view==="list"?`
                <button onclick="openModal('add')" 
                    class="fixed bottom-24 right-5 md:bottom-10 md:right-10 bg-gradient-to-br from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white w-14 h-14 md:w-16 md:h-16 rounded-2xl shadow-lg shadow-brand-500/40 flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 z-40 border-4 border-white/20 group">
                    <i data-lucide="plus" class="w-7 h-7 group-hover:rotate-90 transition-transform duration-200"></i>
                </button>`:""}

            </div>
        </div>`,F9(),W9();const t=document.getElementById("main-slot");l.view==="list"?fM(t):l.view==="operations"?D9(t):l.view==="history"&&xM(t),at(),Dt(),jt(),window.supabaseClient=k,window.renderApp=qt,L({icons:T})}const _t=Object.freeze(Object.defineProperty({__proto__:null,renderApp:qt},Symbol.toStringTag,{value:"Module"}));function St(e,t=!0){if(l.view=e,t){const a=new URL(window.location);a.searchParams.set("view",e),window.history.pushState({view:e},"",a)}qt(),q9(e)}function Y9(){window.addEventListener("popstate",e=>{e.state&&e.state.view&&(St(e.state.view,!1),l.modalOpen=!1,l.quickAddModalOpen=!1,l.settingsModalOpen=!1,qt())})}const ms=30*60*1e3,Q9=5*60*1e3;let Lt=null,Ht=null,xe=!1;const _M=["mousedown","mousemove","keydown","scroll","touchstart","click"];function Aa(){Lt&&clearTimeout(Lt),Ht&&clearTimeout(Ht),xe=!1,Ht=setTimeout(()=>{xe||(xe=!0,A("⚠️ Vous serez déconnecté dans 5 minutes pour inactivité","warning"))},ms-Q9),Lt=setTimeout(async()=>{await X9()},ms)}async function X9(){try{A("Session expirée - Déconnexion automatique","info"),await new Promise(e=>setTimeout(e,1500)),await k.auth.signOut(),window.location.reload()}catch(e){console.error("Auto-logout error:",e),window.location.reload()}}function Ms(){_M.forEach(e=>{document.addEventListener(e,Aa,{passive:!0})}),Aa(),console.log("🔒 Inactivity monitor started (30 min timeout)")}function tb(){Lt&&clearTimeout(Lt),Ht&&clearTimeout(Ht),_M.forEach(e=>{document.removeEventListener(e,Aa)}),console.log("🔓 Inactivity monitor stopped")}async function eb(e){var o;e.preventDefault();const t=document.getElementById("email").value,a=document.getElementById("password").value,r=(o=document.getElementById("asso-code"))==null?void 0:o.value,n=document.getElementById("auth-btn"),i=n.innerHTML;n.innerHTML='<div class="loader"></div>';try{if(l.isAuthMode==="register"){if(typeof window.checkPasswordStrengthValid=="function"&&!window.checkPasswordStrengthValid())throw new Error("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre");if(r!==h9)throw new Error("Code incorrect");const{error:c}=await k.auth.signUp({email:t,password:a});if(c)throw c;A("Compte créé ! Connectez-vous.","success"),await SM()}else{const{error:c}=await k.auth.signInWithPassword({email:t,password:a});if(c)throw c}}catch(c){A(c.message,"error"),n.innerHTML=i}}function ab(){const e=document.getElementById("password"),t=document.getElementById("pw-icon");e.type==="password"?(e.type="text",t.setAttribute("data-lucide","eye-off")):(e.type="password",t.setAttribute("data-lucide","eye")),L({icons:T})}async function SM(){l.isAuthMode=l.isAuthMode==="login"?"register":"login";const{renderLogin:e}=await C(async()=>{const{renderLogin:t}=await Promise.resolve().then(()=>qa);return{renderLogin:t}},void 0);e()}async function sb(){try{const{error:e}=await k.auth.signOut();if(e)throw e}catch(e){console.error("Logout Error:",e),A("Erreur lors de la déconnexion","error")}}async function AM(e){try{const{error:t}=await k.auth.resetPasswordForEmail(e,{redirectTo:window.location.origin});if(t)throw t;return A("Email de réinitialisation envoyé !","success"),{error:null}}catch(t){return A(t.message,"error"),{error:t}}}window.logout=sb;window.resetPassword=AM;function wt(){const e=document.getElementById("app"),t=l.isAuthMode==="register";e.innerHTML=`
        <div class="min-h-screen w-full bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center p-4">
             <!-- Background Decorations -->
            <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div class="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-blue-400/20 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div class="absolute top-[40%] -left-[10%] w-[60vw] h-[60vw] bg-brand-400/20 rounded-full blur-[100px] animate-pulse-slow" style="animation-delay: 1s;"></div>
            </div>

            <!-- Card -->
            <div class="relative w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 z-10 animate-fade-in">
                
                <!-- Header -->
                <div class="text-center mb-8"> 
                    <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-50 to-white shadow-sm mb-4 border border-brand-100/50">
                        <img src="${Oa}" class="w-12 h-12 object-contain" alt="Logo">
                    </div>
                    <h1 class="text-2xl font-extrabold text-slate-800 tracking-tight">Stock COP1</h1>
                    <p class="text-slate-500 font-medium">Gestion des stocks et opérations</p>
                </div>

                <!-- Segmented Control -->
                <div class="bg-slate-100/80 p-1.5 rounded-2xl mb-8 flex relative">
                    <button onclick="window.switchAuth('login')" class="flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${t?"text-slate-500 hover:text-slate-700":"bg-white text-brand-600 shadow-sm"}">Connexion</button>
                    <button onclick="window.switchAuth('register')" class="flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${t?"bg-white text-brand-600 shadow-sm":"text-slate-500 hover:text-slate-700"}">Inscription</button>
                </div>

                <!-- Form -->
                <form id="auth-form" class="space-y-5">
                    <div class="space-y-1.5">
                        <label class="text-xs font-bold text-slate-500 uppercase ml-1">Email</label>
                        <div class="relative group">
                            <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors">
                                <i data-lucide="mail" class="w-5 h-5"></i>
                            </div>
                            <input id="email" type="email" autocomplete="username" required 
                                class="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl font-semibold text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all duration-300" 
                                placeholder="exemple@email.com">
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <div class="flex justify-between items-center ml-1">
                            <label class="text-xs font-bold text-slate-500 uppercase">Mot de passe</label>
                            ${t?"":'<button type="button" id="btn-forgot-password" class="text-[10px] font-bold text-brand-600 hover:text-brand-700 hover:underline">Oublié ?</button>'}
                        </div>
                        <div class="relative group">
                            <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors">
                                <i data-lucide="lock" class="w-5 h-5"></i>
                            </div>
                            <input id="password" type="password" autocomplete="current-password" required 
                                class="w-full pl-12 pr-12 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl font-semibold text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all duration-300" 
                                placeholder="••••••••">
                            <button type="button" id="pw-icon" onclick="window.togglePassword()" class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-600 transition-colors" tabindex="-1">
                                <i data-lucide="eye" class="w-5 h-5"></i>
                            </button>
                        </div>
                        
                        ${t?`
                        <!-- Password Strength Indicator -->
                        <div id="password-strength-container" class="hidden mt-3 p-3 bg-slate-50/80 rounded-xl border border-slate-100 space-y-2.5 animate-fade-in">
                            <div class="flex items-center justify-between">
                                <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Force du mot de passe</span>
                                <span id="password-strength-label" class="text-[10px] font-bold uppercase tracking-wide text-slate-400">—</span>
                            </div>
                            <div class="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                <div id="password-strength-bar" class="h-full w-0 rounded-full transition-all duration-300 ease-out"></div>
                            </div>
                            <div class="grid grid-cols-2 gap-1.5 pt-1">
                                <div id="req-length" class="flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
                                    <i data-lucide="circle" class="w-3 h-3"></i>
                                    <span>8 caractères min.</span>
                                </div>
                                <div id="req-upper" class="flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
                                    <i data-lucide="circle" class="w-3 h-3"></i>
                                    <span>1 majuscule</span>
                                </div>
                                <div id="req-lower" class="flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
                                    <i data-lucide="circle" class="w-3 h-3"></i>
                                    <span>1 minuscule</span>
                                </div>
                                <div id="req-number" class="flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
                                    <i data-lucide="circle" class="w-3 h-3"></i>
                                    <span>1 chiffre</span>
                                </div>
                            </div>
                        </div>
                        `:""}
                    </div>

                    ${t?`
                    <div class="space-y-1.5 animate-slide-up-subtle">
                         <label class="text-xs font-bold text-slate-500 uppercase ml-1">Code Asso</label>
                         <div class="relative group">
                            <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors">
                                <i data-lucide="key" class="w-5 h-5"></i>
                            </div>
                            <input id="asso-code" type="text" required 
                                class="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl font-semibold text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all duration-300" 
                                placeholder="Code Association">
                        </div>
                    </div>
                    `:""}
                    
                    <button id="auth-btn" type="submit" class="w-full py-4 bg-gradient-to-r from-brand-600 to-brand-500 text-white font-bold rounded-xl shadow-lg shadow-brand-500/30 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 transform">
                        ${t?"Créer un compte":"Se connecter"}
                    </button>
                </form>

                <div class="pt-6 text-center flex justify-center gap-4 text-[10px] text-slate-400 font-medium">
                    <span>Mentions Légales</span> • 
                    <span>Confidentialité</span> • 
                    <span>v2.0 Premium</span>
                </div>
            </div>
        </div>
    `;const a=document.getElementById("auth-form");a&&(a.onsubmit=eb);const r=document.getElementById("btn-forgot-password");r&&r.addEventListener("click",nb),window.switchAuth=n=>{l.isAuthMode!==n&&SM()},window.togglePassword=ab,L({icons:T}),t&&rb()}function rb(){const e=document.getElementById("password"),t=document.getElementById("password-strength-container"),a=document.getElementById("password-strength-bar"),r=document.getElementById("password-strength-label"),n=document.getElementById("req-length"),i=document.getElementById("req-upper"),o=document.getElementById("req-lower"),c=document.getElementById("req-number");function h(p,u){if(!p)return;const v=p.querySelector("i, svg");u?(p.classList.remove("text-slate-400"),p.classList.add("text-green-600"),v&&(v.outerHTML='<i data-lucide="check-circle" class="w-3 h-3"></i>')):(p.classList.remove("text-green-600"),p.classList.add("text-slate-400"),v&&(v.outerHTML='<i data-lucide="circle" class="w-3 h-3"></i>'))}function d(p){if(!a||!r)return null;const u={length:p.length>=8,upper:/[A-Z]/.test(p),lower:/[a-z]/.test(p),number:/[0-9]/.test(p)};h(n,u.length),h(i,u.upper),h(o,u.lower),h(c,u.number),L({icons:T,nameAttr:"data-lucide",attrs:{class:"w-3 h-3"}});const v=Object.values(u).filter(Boolean).length,y=[{width:"0%",color:"bg-slate-300",label:"—",labelColor:"text-slate-400"},{width:"25%",color:"bg-red-500",label:"Faible",labelColor:"text-red-500"},{width:"50%",color:"bg-orange-500",label:"Moyen",labelColor:"text-orange-500"},{width:"75%",color:"bg-yellow-500",label:"Bon",labelColor:"text-yellow-500"},{width:"100%",color:"bg-green-500",label:"Fort",labelColor:"text-green-600"}][v];return a.className=`h-full rounded-full transition-all duration-300 ease-out ${y.color}`,a.style.width=y.width,r.textContent=y.label,r.className=`text-[10px] font-bold uppercase tracking-wide ${y.labelColor}`,u}e&&t&&(e.addEventListener("focus",()=>{t.classList.remove("hidden")}),e.addEventListener("input",p=>{d(p.target.value)})),window.checkPasswordStrengthValid=()=>{const p=(e==null?void 0:e.value)||"",u={length:p.length>=8,upper:/[A-Z]/.test(p),lower:/[a-z]/.test(p),number:/[0-9]/.test(p)};return Object.values(u).every(Boolean)}}function nb(){Ra("Entrez votre email pour réinitialiser le mot de passe :",async e=>{e&&await AM(e)},{title:"Mot de passe oublié",placeholder:"Email",inputType:"email",confirmText:"Envoyer"})}const qa=Object.freeze(Object.defineProperty({__proto__:null,renderLogin:wt},Symbol.toStringTag,{value:"Module"}));function ka(){const e=document.getElementById("app");e.innerHTML=`
        <div class="min-h-screen w-full bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center p-4">
            <!-- Background Decorations -->
            <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div class="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-emerald-400/20 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div class="absolute top-[40%] -left-[10%] w-[60vw] h-[60vw] bg-brand-400/20 rounded-full blur-[100px] animate-pulse-slow" style="animation-delay: 1s;"></div>
            </div>

            <!-- Card -->
            <div class="relative w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 z-10 animate-fade-in">
                <!-- Header -->
                <div class="text-center mb-8"> 
                    <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-50 to-white shadow-sm mb-4 border border-emerald-100/50">
                        <i data-lucide="key-round" class="w-10 h-10 text-emerald-600"></i>
                    </div>
                    <h1 class="text-2xl font-extrabold text-slate-800 tracking-tight">Nouveau mot de passe</h1>
                    <p class="text-slate-500 font-medium mt-2">Définissez votre nouveau mot de passe</p>
                </div>

                <!-- Form -->
                <form id="form-reset-password" class="space-y-5">
                    <div class="space-y-1.5">
                        <label class="text-xs font-bold text-slate-500 uppercase ml-1">Nouveau mot de passe</label>
                        <div class="relative group">
                            <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors">
                                <i data-lucide="lock" class="w-5 h-5"></i>
                            </div>
                            <input id="new-password" type="password" autocomplete="new-password" required minlength="8"
                                class="w-full pl-12 pr-12 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl font-semibold text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all duration-300" 
                                placeholder="••••••••">
                            <button type="button" id="toggle-new-password" class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-600 transition-colors" tabindex="-1">
                                <i data-lucide="eye" class="w-5 h-5"></i>
                            </button>
                        </div>
                        
                        <!-- Password Strength Indicator -->
                        <div id="password-strength" class="hidden mt-3 p-3 bg-slate-50/80 rounded-xl border border-slate-100 space-y-2.5 animate-fade-in">
                            <div class="flex items-center justify-between">
                                <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Force du mot de passe</span>
                                <span id="password-strength-label" class="text-[10px] font-bold uppercase tracking-wide text-slate-400">—</span>
                            </div>
                            <div class="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                <div id="password-strength-bar" class="h-full w-0 rounded-full transition-all duration-300 ease-out"></div>
                            </div>
                            <div class="grid grid-cols-2 gap-1.5 pt-1">
                                <div id="req-length" class="flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
                                    <i data-lucide="circle" class="w-3 h-3"></i>
                                    <span>8 caractères min.</span>
                                </div>
                                <div id="req-upper" class="flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
                                    <i data-lucide="circle" class="w-3 h-3"></i>
                                    <span>1 majuscule</span>
                                </div>
                                <div id="req-lower" class="flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
                                    <i data-lucide="circle" class="w-3 h-3"></i>
                                    <span>1 minuscule</span>
                                </div>
                                <div id="req-number" class="flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
                                    <i data-lucide="circle" class="w-3 h-3"></i>
                                    <span>1 chiffre</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <label class="text-xs font-bold text-slate-500 uppercase ml-1">Confirmer le mot de passe</label>
                        <div class="relative group">
                            <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors">
                                <i data-lucide="lock-keyhole" class="w-5 h-5"></i>
                            </div>
                            <input id="confirm-password" type="password" autocomplete="new-password" required minlength="8"
                                class="w-full pl-12 pr-12 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl font-semibold text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all duration-300" 
                                placeholder="••••••••">
                            <button type="button" id="toggle-confirm-password" class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-600 transition-colors" tabindex="-1">
                                <i data-lucide="eye" class="w-5 h-5"></i>
                            </button>
                        </div>
                        <p id="match-indicator" class="text-[10px] font-bold text-slate-400 ml-1 hidden"></p>
                    </div>
                    
                    <button type="submit" id="btn-submit" class="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                        Mettre à jour le mot de passe
                    </button>
                    
                    <div class="pt-4 text-center">
                        <button type="button" id="btn-back-login" class="text-sm font-bold text-slate-500 hover:text-brand-600 transition-colors flex items-center justify-center gap-2 mx-auto">
                            <i data-lucide="arrow-left" class="w-4 h-4"></i>
                            Retour à la connexion
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `,L({icons:T}),ib()}function ib(){const e=document.getElementById("form-reset-password"),t=document.getElementById("new-password"),a=document.getElementById("confirm-password"),r=document.getElementById("password-strength"),n=document.getElementById("match-indicator"),i=document.getElementById("btn-back-login");xs("toggle-new-password","new-password"),xs("toggle-confirm-password","confirm-password"),i&&i.addEventListener("click",async()=>{l.isPasswordRecoveryMode=!1;const{renderLogin:c}=await C(async()=>{const{renderLogin:h}=await Promise.resolve().then(()=>qa);return{renderLogin:h}},void 0);c()}),t&&t.addEventListener("input",()=>{const c=t.value;c.length>0?(r.classList.remove("hidden"),ob(c)):r.classList.add("hidden"),o()}),a&&a.addEventListener("input",o);function o(){const c=(t==null?void 0:t.value)||"",h=(a==null?void 0:a.value)||"";h.length>0?(n.classList.remove("hidden"),c===h?(n.textContent="✓ Les mots de passe correspondent",n.classList.remove("text-red-500"),n.classList.add("text-emerald-500")):(n.textContent="✗ Les mots de passe ne correspondent pas",n.classList.remove("text-emerald-500"),n.classList.add("text-red-500"))):n.classList.add("hidden")}e&&e.addEventListener("submit",cb)}function xs(e,t){const a=document.getElementById(e),r=document.getElementById(t);a&&r&&a.addEventListener("click",()=>{const n=r.getAttribute("type")==="password"?"text":"password";r.setAttribute("type",n),a.innerHTML=`<i data-lucide="${n==="password"?"eye":"eye-off"}" class="w-5 h-5"></i>`,L({icons:T})})}function Wt(e,t){if(!e)return;const a=e.querySelector("i, svg");t?(e.classList.remove("text-slate-400"),e.classList.add("text-green-600"),a&&(a.outerHTML='<i data-lucide="check-circle" class="w-3 h-3"></i>')):(e.classList.remove("text-green-600"),e.classList.add("text-slate-400"),a&&(a.outerHTML='<i data-lucide="circle" class="w-3 h-3"></i>'))}function ob(e){const t=document.getElementById("password-strength-bar"),a=document.getElementById("password-strength-label"),r=document.getElementById("req-length"),n=document.getElementById("req-upper"),i=document.getElementById("req-lower"),o=document.getElementById("req-number");if(!t||!a)return null;const c={length:e.length>=8,upper:/[A-Z]/.test(e),lower:/[a-z]/.test(e),number:/[0-9]/.test(e)};Wt(r,c.length),Wt(n,c.upper),Wt(i,c.lower),Wt(o,c.number),L({icons:T,nameAttr:"data-lucide",attrs:{class:"w-3 h-3"}});const h=Object.values(c).filter(Boolean).length,p=[{width:"0%",color:"bg-slate-300",label:"—",labelColor:"text-slate-400"},{width:"25%",color:"bg-red-500",label:"Faible",labelColor:"text-red-500"},{width:"50%",color:"bg-orange-500",label:"Moyen",labelColor:"text-orange-500"},{width:"75%",color:"bg-yellow-500",label:"Bon",labelColor:"text-yellow-500"},{width:"100%",color:"bg-green-500",label:"Fort",labelColor:"text-green-600"}][h];return t.className=`h-full rounded-full transition-all duration-300 ease-out ${p.color}`,t.style.width=p.width,a.textContent=p.label,a.className=`text-[10px] font-bold uppercase tracking-wide ${p.labelColor}`,c}async function cb(e){var c,h;e.preventDefault();const t=(c=document.getElementById("new-password"))==null?void 0:c.value,a=(h=document.getElementById("confirm-password"))==null?void 0:h.value,r=document.getElementById("btn-submit"),n=r.innerHTML;if(!t||!a)return A("Veuillez remplir tous les champs","error");const i={length:t.length>=8,upper:/[A-Z]/.test(t),lower:/[a-z]/.test(t),number:/[0-9]/.test(t)};if(!Object.values(i).every(Boolean))return A("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre","error");if(t!==a)return A("Les mots de passe ne correspondent pas","error");r.innerHTML='<div class="loader"></div>',r.disabled=!0;try{const{error:d}=await k.auth.updateUser({password:t});d?(console.error("Password update error:",d),A(d.message||"Erreur lors de la mise à jour","error"),r.innerHTML=n,r.disabled=!1):(A("Mot de passe mis à jour avec succès !","success"),l.isPasswordRecoveryMode=!1,setTimeout(async()=>{const{renderLogin:p}=await C(async()=>{const{renderLogin:u}=await Promise.resolve().then(()=>qa);return{renderLogin:u}},void 0);p()},1500))}catch(d){console.error("Unexpected error:",d),A("Erreur inattendue","error"),r.innerHTML=n,r.disabled=!1}}window.renderResetPassword=ka;function hb(e){document.querySelectorAll(".custom-dropdown-list").forEach(a=>a.classList.add("hidden"));const t=document.getElementById(e);t&&t.classList.remove("hidden")}function db(e,t){const a=document.getElementById(e);if(!a)return;const r=a.querySelectorAll("div"),n=gs(t);r.forEach(i=>{gs(i.innerText).includes(n)?i.classList.remove("hidden"):i.classList.add("hidden")})}function lb(e,t,a,r=!1,n=0,i=!1){const o=document.getElementById(t);o&&(o.value=a),r?window.updateOpLine&&window.updateOpLine(n,"name",a,!0):i?window.updateModalData&&window.updateModalData("name",a):(l.opInfo=a,window.renderApp&&window.renderApp());const c=document.getElementById(e);c&&c.classList.add("hidden")}window.openCustomSelect=hb;window.filterCustomSelect=db;window.selectCustomOption=lb;function Kt(e){const t=document.getElementById("global-loader");t&&(e?(t.style.opacity="1",t.style.pointerEvents="auto"):(t.style.opacity="0",t.style.pointerEvents="none",setTimeout(()=>t.remove(),500)))}async function pb(){Kt(!0);try{console.log("🚀 Stock COP1 - Initialisation Vite...");const e=window.location.hash,t=new URLSearchParams(e.substring(1));if(e.includes("type=recovery")||e.includes("type=password_recovery")||t.get("type")==="recovery"||t.get("access_token")&&e.includes("recovery")||l.isPasswordRecoveryMode){console.log("🔑 Password recovery mode detected from URL"),l.isPasswordRecoveryMode=!0,ee.includes("votre-url")||_a(),ka(),Kt(!1);return}if(ee.includes("votre-url"))return Kt(!1),wt();_a(),await v9();const{data:{session:r}}=await k.auth.getSession();r?(l.user=r.user,console.log("✅ Utilisateur connecté:",r.user.email),await dt(),Sa(),Ms()):(console.log("🔒 Utilisateur non connecté"),wt()),k.auth.onAuthStateChange((o,c)=>{if(console.log("🔄 Auth state change:",o),o==="PASSWORD_RECOVERY"){console.log("🔑 Password recovery detected, showing reset form..."),l.isPasswordRecoveryMode=!0,ka();return}if(l.isPasswordRecoveryMode){console.log("🔐 En mode récupération de mot de passe, pas de redirection");return}l.user=(c==null?void 0:c.user)||null,l.user?(dt(),Sa(),Ms()):(lM(),tb(),wt())}),Y9();const i=new URLSearchParams(window.location.search).get("view");i&&(l.view=i),L({icons:T})}catch(e){console.error("Init Error:",e),wt()}finally{Kt(!1)}}window.onerror=(e,t,a,r,n)=>(console.error("❌ Erreur globale:",{msg:e,url:t,lineNo:a,columnNo:r,error:n}),!1);window.renderApp=qt;window.renderLogin=wt;window.setView=St;window.state=l;window.onload=pb;
