(()=>{"use strict";var e={2392:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.API_ORIGIN=void 0,o.API_ORIGIN="https://little-water-8645.fly.dev"}},o={};function t(n){var i=o[n];if(void 0!==i)return i.exports;var r=o[n]={exports:{}};return e[n](r,r.exports,t),r.exports}(()=>{const e=t(2392);let o;async function n(o,t){return await i(location.href.includes("staging")?`${e.API_ORIGIN}/matching/friend/poll/staging`:`${e.API_ORIGIN}/matching/friend/poll`,{session_token:o},t)}async function i(e,o,t){const n=await fetch(e,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"},keepalive:!0}).then((e=>e.json())).then(t).catch((e=>{console.error("Error:",e)}));if(console.log(n),!n)throw alert("network error!"),new Error("network error!");return n}(async()=>{const t=await async function(o){return await i(location.href.includes("staging")?`${e.API_ORIGIN}/matching/friend/make_room/staging`:`${e.API_ORIGIN}/matching/friend/make_room`,{},(e=>e))}();o=t;const r=location.href.split("/");r[r.length-1]=`friend_join_room.html?room_id=${t.room_id}&room_key=${t.room_key}`,document.getElementById("url").value=r.join("/");const s=document.getElementById("url-button");s.disabled=!1,s.value=isSecureContext?"URLをコピーする":"全選択";let a=await n(t.session_token,(e=>e));for(;"Ok"!==a.type||"LetTheGameBegin"!==a.ret.type;)await new Promise((e=>setTimeout(e,200*(2+Math.random())*.8093))),a=await n(t.session_token,(e=>e));var c,l,_;c=t.session_token,l=a.ret.is_first_move_my_move,_=a.ret.is_IA_down_for_me,sessionStorage.vs="someone",sessionStorage.session_token=c,sessionStorage.is_first_move_my_move=JSON.stringify(l),sessionStorage.is_IA_down_for_me=JSON.stringify(_),location.href="main.html"})(),document.getElementById("cancel_button").onclick=function(){void 0!==o&&(async()=>{console.log(`trying to cancel ${o.session_token}:`);const t=await async function(o,t){return await i(location.href.includes("staging")?`${e.API_ORIGIN}/matching/friend/delete_room/staging`:`${e.API_ORIGIN}/matching/friend/delete_room`,{session_token:o},(e=>e))}(o.session_token);console.log(`got result ${JSON.stringify(t)}`)})(),location.href="entrance.html"}})()})();