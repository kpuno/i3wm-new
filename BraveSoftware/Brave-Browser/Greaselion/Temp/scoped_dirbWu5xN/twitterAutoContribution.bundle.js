(()=>{"use strict";const e="mnojpmjdmbbfmejpflffifhffcmidifd";let t=null;const n=()=>t,i=(e,t)=>e&&t?`${e}_${t}`:"";let o=!1;const a="twitter";let r=0,s="";const c=new Set,d=()=>{r=Date.now()},m=e=>{e&&e.url&&location.href!==s&&(s=location.href,d())};var u;chrome.extension.inIncognitoContext||(u=e=>{e?(document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState?d():(()=>{const e=(e=>{const t=new URLSearchParams(e.search);if(!t)return"";const n=t.get("screen_name");if(n)return unescape(n);if(!e.pathname)return"";const i=e.pathname.split("/").filter((e=>e));return i&&0!==i.length?i[0]:""})(new URL(location.href)),t=!c.has(e);t&&c.add(e);const o=Math.round((Date.now()-r)/1e3);((e,t,o,a)=>{if(!t)return;const r=n();r&&r.postMessage({type:"MediaDurationMetadata",mediaType:e,data:{mediaKey:i(e,t),duration:o,firstVisit:a}})})(a,e,o,t)})()})),"visible"===document.visibilityState&&d(),((e,t)=>{if(o)return;o=!0;const i=n();i&&(i.postMessage({type:"RegisterOnUpdatedTab",mediaType:e}),i.onMessage.addListener((function(e){e.data&&"OnUpdatedTab"===e.type&&t(e.data.changeInfo)})))})(a,m)):console.error("Failed to initialize communications port")},t?u(!0):(chrome.runtime.sendMessage(e,{type:"SupportsGreaselion"},(function(n){!chrome.runtime.lastError&&n&&n.supported&&(t=chrome.runtime.connect(e,{name:"Greaselion"}),u(!0))})),setTimeout((()=>{t||(t=chrome.runtime.connect("jidkidbbcafjabdphckchenhfomhnfma",{name:"Greaselion"}),u(!0))}),100)),console.info("Greaselion script loaded: twitterAutoContribution.ts"))})();