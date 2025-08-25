(()=>{"use strict";function _(s){return atob(s)}const $=(i)=>document.getElementById(_(i)),R=(n)=>Math.floor(Math.random()*n);const I={code:"Y29kZQ==",gen:"Z2VuQnRu",copy:"Y29weUJ0bg==",txt:"dGV4dENvbnRlbnQ=",ws:"XFxz",g:"Zw==",rep:"cmVwbGFjZQ==",wrt:"d3JpdGVUZXh0",copd:"Q29waWVkIQ==",copylbl:"Q29weQ=="};const u=$(I.code),y=$(I.gen),m=$(I.copy);
// token list (base64-encoded to keep it opaque)
const T=[
  "MQ==","SQ==","bA==","fA==","Tw==","MA==","Mg==","Wg==",
  "cm4=","bQ==","NQ==","Uw==","VlY=","Vw=="
].map(_);
const L=6; // number of tokens per code
function make(){let out="";for(let i=0;i<L;i++){out+=T[R(T.length)];}return out;}
y.addEventListener("click",()=>{u[_(I.txt)]=make();});
m.addEventListener("click",async()=>{const txt=u[_(I.txt)][_(I.rep)](new RegExp(_(I.ws),_(I.g)),"");if(txt.length>0){try{await navigator.clipboard[_(I.wrt)](txt);m[_(I.txt)]=_(I.copd);setTimeout(()=>m[_(I.txt)]=_(I.copylbl),1500);}catch(e){}}});
})();
