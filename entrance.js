(()=>{var e={392:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_ORIGIN=void 0,t.API_ORIGIN="https://serene-reef-96808.herokuapp.com"}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}(()=>{"use strict";const e=o(392);let t;async function n(t,o){return await r(`${e.API_ORIGIN}/random/poll`,{access_token:t},o)}async function r(e,t,o){const n=await fetch(e,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},keepalive:!0}).then((function(e){return e.json()})).then(o).catch((function(e){console.error("Error:",e)}));if(console.log(n),!n)throw alert("network error!"),new Error("network error!");return n}async function s(t){return await r(`${e.API_ORIGIN}/random/entry`,{},t)}window.addEventListener("beforeunload",(function(o){if(void 0!==t){const o=new Blob([JSON.stringify({access_token:t.access_token})],{type:"application/json; charset=UTF-8"});navigator.sendBeacon(`${e.API_ORIGIN}/random/cancel`,o)}})),(async()=>{let e=await s((e=>e));for(t=e;"let_the_game_begin"!=e.state;){await new Promise((e=>setTimeout(e,200*(2+Math.random())*.8093)));const o=await n(e.access_token,(e=>e));o.legal?(e=o.ret,t=e):(e=await s((e=>e)),t=e)}var o,r,a;o=e.access_token,r=e.is_first_move_my_move,a=e.is_IA_down_for_me,alert("Let the game begin"),sessionStorage.access_token=o,sessionStorage.is_first_move_my_move=JSON.stringify(r),sessionStorage.is_IA_down_for_me=JSON.stringify(a),location.href="main.html"})()})()})();