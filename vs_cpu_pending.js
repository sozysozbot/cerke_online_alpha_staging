(()=>{"use strict";var e={2392:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.API_ORIGIN=void 0,o.API_ORIGIN="https://serene-reef-96808.herokuapp.com"}},o={};function r(t){var n=o[t];if(void 0!==n)return n.exports;var s=o[t]={exports:{}};return e[t](s,s.exports,r),s.exports}(()=>{const e=r(2392);let o;(async()=>{const r=await async function(o){return await async function(e,o,r){const t=await fetch(e,{method:"POST",body:JSON.stringify({}),headers:{"Content-Type":"application/json"},keepalive:!0}).then((e=>e.json())).then(r).catch((e=>{console.error("Error:",e)}));if(console.log(t),!t)throw alert("network error!"),new Error("network error!");return t}(location.href.includes("staging")?`${e.API_ORIGIN}/matching/vs_cpu/entry/staging`:`${e.API_ORIGIN}/matching/vs_cpu/entry`,0,(e=>e))}();var t,n,s;o=r,t=r.access_token,n=r.is_first_move_my_move,s=r.is_IA_down_for_me,sessionStorage.access_token=t,sessionStorage.vs="cpu",sessionStorage.is_first_move_my_move=JSON.stringify(n),sessionStorage.is_IA_down_for_me=JSON.stringify(s),location.href="main.html"})()})()})();