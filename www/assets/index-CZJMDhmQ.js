const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/esm-Df4HGHrL.js","assets/definitions-CLT9v47c.js"])))=>i.map(i=>d[i]);
var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l;(function(e){e.Unimplemented=`UNIMPLEMENTED`,e.Unavailable=`UNAVAILABLE`})(l||={});var u=class extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}},d=e=>e?.androidBridge?`android`:e?.webkit?.messageHandlers?.bridge?`ios`:`web`,f=e=>{let t=e.CapacitorCustomPlatform||null,n=e.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>t===null?d(e):t.name,a=()=>i()!==`web`,o=e=>!!(f.get(e)?.platforms.has(i())||s(e)),s=e=>n.PluginHeaders?.find(t=>t.name===e),c=t=>e.console.error(t),f=new Map;return n.convertFileSrc||=e=>e,n.getPlatform=i,n.handleError=c,n.isNativePlatform=a,n.isPluginAvailable=o,n.registerPlugin=(e,a={})=>{let o=f.get(e);if(o)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),o.proxy;let c=i(),d=s(e),p,m=async()=>(!p&&c in a?p=p=typeof a[c]==`function`?await a[c]():a[c]:t!==null&&!p&&`web`in a&&(p=p=typeof a.web==`function`?await a.web():a.web),p),h=(t,r)=>{if(d){let i=d?.methods.find(e=>r===e.name);if(i)return i.rtype===`promise`?t=>n.nativePromise(e,r.toString(),t):(t,i)=>n.nativeCallback(e,r.toString(),t,i);if(t)return t[r]?.bind(t)}else if(t)return t[r]?.bind(t);else throw new u(`"${e}" plugin is not implemented on ${c}`,l.Unimplemented)},g=t=>{let n,r=(...r)=>{let i=m().then(i=>{let a=h(i,t);if(a){let e=a(...r);return n=e?.remove,e}else throw new u(`"${e}.${t}()" is not implemented on ${c}`,l.Unimplemented)});return t===`addListener`&&(i.remove=async()=>n()),i};return r.toString=()=>`${t.toString()}() { [capacitor code] }`,Object.defineProperty(r,"name",{value:t,writable:!1,configurable:!1}),r},_=g(`addListener`),v=g(`removeListener`),y=(e,t)=>{let n=_({eventName:e},t),r=async()=>{let r=await n;v({eventName:e,callbackId:r},t)},i=new Promise(e=>n.then(()=>e({remove:r})));return i.remove=async()=>{console.warn(`Using addListener() without 'await' is deprecated.`),await r()},i},b=new Proxy({},{get(e,t){switch(t){case`$$typeof`:return;case`toJSON`:return()=>({});case`addListener`:return d?y:_;case`removeListener`:return v;default:return g(t)}}});return r[e]=b,f.set(e,{name:e,proxy:b,platforms:new Set([...Object.keys(a),...d?[c]:[]])}),b},n.Exception=u,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},p=(e=>e.Capacitor=f(e))(typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}),m=p.registerPlugin,h=class{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);let r=this.windowListeners[e];return r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e),Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){let r=this.listeners[e];if(!r){if(n){let n=this.retainedEventArguments[e];n||=[],n.push(t),this.retainedEventArguments[e]=n}return}r.forEach(e=>e(t))}hasListeners(e){return!!this.listeners[e]?.length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e=`not implemented`){return new p.Exception(e,l.Unimplemented)}unavailable(e=`not available`){return new p.Exception(e,l.Unavailable)}async removeListener(e,t){let n=this.listeners[e];if(!n)return;let r=n.indexOf(t);this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(t=>{this.notifyListeners(e,t)}))}},g=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),_=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),v=class extends h{async getCookies(){let e=document.cookie,t={};return e.split(`;`).forEach(e=>{if(e.length<=0)return;let[n,r]=e.replace(/=/,`CAP_COOKIE`).split(`CAP_COOKIE`);n=_(n).trim(),r=_(r).trim(),t[n]=r}),t}async setCookie(e){try{let t=g(e.key),n=g(e.value),r=e.expires?`; expires=${e.expires.replace(`expires=`,``)}`:``,i=(e.path||`/`).replace(`path=`,``),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:``;document.cookie=`${t}=${n||``}${r}; path=${i}; ${a};`}catch(e){return Promise.reject(e)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{let e=document.cookie.split(`;`)||[];for(let t of e)document.cookie=t.replace(/^ +/,``).replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}};m(`CapacitorCookies`,{web:()=>new v});var y=async e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=r.result;t(e.indexOf(`,`)>=0?e.split(`,`)[1]:e)},r.onerror=e=>n(e),r.readAsDataURL(e)}),b=(e={})=>{let t=Object.keys(e);return Object.keys(e).map(e=>e.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=e[t[i]],n),{})},x=(e,t=!0)=>e?Object.entries(e).reduce((e,n)=>{let[r,i]=n,a,o;return Array.isArray(i)?(o=``,i.forEach(e=>{a=t?encodeURIComponent(e):e,o+=`${r}=${a}&`}),o.slice(0,-1)):(a=t?encodeURIComponent(i):i,o=`${r}=${a}`),`${e}&${o}`},``).substr(1):null,S=(e,t={})=>{let n=Object.assign({method:e.method||`GET`,headers:e.headers},t),r=b(e.headers)[`content-type`]||``;if(typeof e.data==`string`)n.body=e.data;else if(r.includes(`application/x-www-form-urlencoded`)){let t=new URLSearchParams;for(let[n,r]of Object.entries(e.data||{}))t.set(n,r);n.body=t.toString()}else if(r.includes(`multipart/form-data`)||e.data instanceof FormData){let t=new FormData;if(e.data instanceof FormData)e.data.forEach((e,n)=>{t.append(n,e)});else for(let n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;let r=new Headers(n.headers);r.delete(`content-type`),n.headers=r}else(r.includes(`application/json`)||typeof e.data==`object`)&&(n.body=JSON.stringify(e.data));return n},C=class extends h{async request(e){let t=S(e,e.webFetchExtra),n=x(e.params,e.shouldEncodeUrlParams),r=n?`${e.url}?${n}`:e.url,i=await fetch(r,t),a=i.headers.get(`content-type`)||``,{responseType:o=`text`}=i.ok?e:{};a.includes(`application/json`)&&(o=`json`);let s,c;switch(o){case`arraybuffer`:case`blob`:c=await i.blob(),s=await y(c);break;case`json`:s=await i.json();break;default:s=await i.text()}let l={};return i.headers.forEach((e,t)=>{l[t]=e}),{data:s,headers:l,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:`GET`}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:`POST`}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:`PUT`}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:`PATCH`}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:`DELETE`}))}};m(`CapacitorHttp`,{web:()=>new C});var w;(function(e){e.Dark=`DARK`,e.Light=`LIGHT`,e.Default=`DEFAULT`})(w||={});var T;(function(e){e.StatusBar=`StatusBar`,e.NavigationBar=`NavigationBar`})(T||={});var E=class extends h{async setStyle(){this.unavailable(`not available for web`)}async setAnimation(){this.unavailable(`not available for web`)}async show(){this.unavailable(`not available for web`)}async hide(){this.unavailable(`not available for web`)}};m(`SystemBars`,{web:()=>new E});var D;(function(e){e.General=`General`,e.ParentalGuidance=`ParentalGuidance`,e.Teen=`Teen`,e.MatureAudience=`MatureAudience`})(D||={});var O;(function(e){e.SizeChanged=`bannerAdSizeChanged`,e.Loaded=`bannerAdLoaded`,e.FailedToLoad=`bannerAdFailedToLoad`,e.Opened=`bannerAdOpened`,e.Closed=`bannerAdClosed`,e.AdImpression=`bannerAdImpression`})(O||={});var k;(function(e){e.TOP_CENTER=`TOP_CENTER`,e.CENTER=`CENTER`,e.BOTTOM_CENTER=`BOTTOM_CENTER`})(k||={});var A;(function(e){e.BANNER=`BANNER`,e.FULL_BANNER=`FULL_BANNER`,e.LARGE_BANNER=`LARGE_BANNER`,e.MEDIUM_RECTANGLE=`MEDIUM_RECTANGLE`,e.LEADERBOARD=`LEADERBOARD`,e.ADAPTIVE_BANNER=`ADAPTIVE_BANNER`,e.SMART_BANNER=`SMART_BANNER`})(A||={});var j;(function(e){e.Loaded=`interstitialAdLoaded`,e.FailedToLoad=`interstitialAdFailedToLoad`,e.Showed=`interstitialAdShowed`,e.FailedToShow=`interstitialAdFailedToShow`,e.Dismissed=`interstitialAdDismissed`})(j||={});var M;(function(e){e.Loaded=`onRewardedInterstitialAdLoaded`,e.FailedToLoad=`onRewardedInterstitialAdFailedToLoad`,e.Showed=`onRewardedInterstitialAdShowed`,e.FailedToShow=`onRewardedInterstitialAdFailedToShow`,e.Dismissed=`onRewardedInterstitialAdDismissed`,e.Rewarded=`onRewardedInterstitialAdReward`})(M||={});var N;(function(e){e.Loaded=`onRewardedVideoAdLoaded`,e.FailedToLoad=`onRewardedVideoAdFailedToLoad`,e.Showed=`onRewardedVideoAdShowed`,e.FailedToShow=`onRewardedVideoAdFailedToShow`,e.Dismissed=`onRewardedVideoAdDismissed`,e.Rewarded=`onRewardedVideoAdReward`})(N||={});var P;(function(e){e.NOT_REQUIRED=`NOT_REQUIRED`,e.OBTAINED=`OBTAINED`,e.REQUIRED=`REQUIRED`,e.UNKNOWN=`UNKNOWN`})(P||={});var F;(function(e){e[e.DISABLED=0]=`DISABLED`,e[e.EEA=1]=`EEA`,e[e.NOT_EEA=2]=`NOT_EEA`,e[e.US=3]=`US`,e[e.OTHER=4]=`OTHER`})(F||={});var I=`modulepreload`,L=function(e){return`/`+e},R={},z=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=L(t,n),t=s(t),t in R)return;R[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:I,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},B=m(`AdMob`,{web:()=>z(()=>import(`./web-B6a55g6c.js`).then(e=>new e.AdMobWeb),[])});function V(){return`
  <div class="home">

    <header class="brand">

      <div>
        <h1>QuickScan QR</h1>
        <p>by <span>Las B</span></p>
      </div>

      <button class="search-btn" id="searchButton">
        🔍
      </button>

    </header>

    <section class="subtitle">

      <h2>Ready to Scan</h2>

      <p>
        Tap the button below to scan any QR code or barcode instantly.
      </p>

    </section>

    <section class="scan">

      <button id="scanButton" class="scan-btn">

        <div class="scan-inner">
          <div class="scan-icon"></div>
        </div>

      </button>

      <p class="tap-text">
        Tap to Scan
      </p>

    </section>

    <section class="recent">

      <div class="recent-header">

        <h3>Recent Activity</h3>

        <span id="seeAll">
          See all
        </span>

      </div>

      <div class="recent-card">

        <strong>No scans yet</strong>

        <p>
          Your recent scans will appear here.
        </p>

      </div>

    </section>

    <nav class="bottom-nav">

      <div class="nav-item active" id="homeNav">
        🏠<br>Home
      </div>

      <div class="nav-item" id="historyNav">
        🕘<br>History
      </div>

      <div class="nav-item" id="scanNav">
        📷<br>Scan
      </div>

      <div class="nav-item" id="settingsNav">
        ⚙<br>Settings
      </div>

    </nav>

  </div>
  `}function H(){let e=JSON.parse(localStorage.getItem(`scanHistory`)||`[]`),t=``;return t=e.length===0?`
      <div class="recent-card">
        <strong>No history yet</strong>
        <p>Your scanned QR codes will appear here automatically.</p>
      </div>
    `:e.map(e=>`
<div class="recent-card"
     style="margin-bottom:15px;cursor:pointer;"
     onclick="window.open('${e.text}','_blank')">
  <strong>${e.text}</strong>
  <p>${e.date}</p>
</div>
    `).join(``),`
  <div class="home">

    <header class="brand">
      <div>
        <h1>History</h1>
        <p>by <span>Las B</span></p>
      </div>
    </header>

    <div class="recent" style="margin-top:35px">
<button id="clearHistory"
style="margin-bottom:20px;padding:12px 18px;border:none;border-radius:12px;background:#2563EB;color:white;font-weight:600;">
Clear History
</button>
      ${t}
    </div>

    <nav class="bottom-nav">
      <div class="nav-item" id="homeNav">🏠<br>Home</div>
      <div class="nav-item active" id="historyNav">🕘<br>History</div>
      <div class="nav-item" id="scanNav">📷<br>Scan</div>
      <div class="nav-item" id="settingsNav">⚙<br>Settings</div>
    </nav>

  </div>
  `}function U(){return`
  <div class="home">

    <header class="brand">
      <div>
        <h1>Settings</h1>
        <p>by <span>Las B</span></p>
      </div>
    </header>

    <div class="recent" style="margin-top:40px">

      <div class="recent-card" id="themeCard">
        <strong>🌙 Dark Theme</strong>
        <p>Tap to switch between Dark and Light mode</p>
      </div>

      <br>

      <div class="recent-card" id="aboutCard">
        <strong>ℹ About</strong>

        <p style="margin-top:15px">

<b>QuickScan QR</b><br><br>

Version 1.0.0<br><br>

Developed by<br>
<b>Las B</b><br><br>

Fast, secure and modern QR code and barcode scanner built for everyday use.<br><br>

<b>Features</b><br>

✓ QR Code Scanner<br>
✓ Barcode Scanner<br>
✓ Instant QR Scanning<br>
✓ Scan History<br>
✓ Share Results<br><br>

<b>Developer</b><br>

Las B<br>
Developer • Creator<br><br>

<b>Email</b><br>

bolajilasisi13@gmail.com<br><br>

<b>Website</b><br>

Coming Soon<br><br>

Copyright © 2026<br>

Las B. All rights reserved.

        </p>

      </div>

      <br>

    </div>

    <nav class="bottom-nav">

      <div class="nav-item" id="homeNav">
        🏠<br>Home
      </div>

      <div class="nav-item" id="historyNav">
        🕘<br>History
      </div>

      <div class="nav-item" id="scanNav">
        📷<br>Scan
      </div>

      <div class="nav-item active" id="settingsNav">
        ⚙<br>Settings
      </div>

    </nav>

  </div>
  `}function W(){return`
  <div class="home">

    <header class="brand">
      <div>
        <h1>Generate QR</h1>
        <p>by <span>Las B</span></p>
      </div>
    </header>

    <div class="recent" style="margin-top:30px">

      <div class="recent-card" id="contactQR">
        <strong>📞 Contact QR</strong>
        <p>Create a QR code for a contact.</p>
      </div>

      <br>

      <div class="recent-card" id="emailQR">
        <strong>📧 Email QR</strong>
        <p>Create a QR code for an email address.</p>
      </div>

    </div>

    <nav class="bottom-nav">

      <div class="nav-item" id="homeNav">
        🏠<br>Home
      </div>

      <div class="nav-item" id="historyNav">
        🕘<br>History
      </div>

      <div class="nav-item active" id="generatorNav">
        ✨<br>Generate
      </div>

      <div class="nav-item" id="settingsNav">
        ⚙<br>Settings
      </div>

    </nav>

  </div>
  `}function G(){return`
  <div class="home">

    <header class="brand">
      <div>
        <h1>Scan QR</h1>
        <p>by <span>Las B</span></p>
      </div>
    </header>

    <div class="scan" style="margin-top:70px;">

      <button class="scan-btn" id="startScanner">

        <div class="scan-inner">
          <div class="scan-icon"></div>
        </div>

      </button>

      <p class="tap-text">
        Tap to Start Scanning
      </p>

    </div>

    <nav class="bottom-nav">

      <div class="nav-item" id="homeNav">
        🏠<br>Home
      </div>

      <div class="nav-item" id="historyNav">
        🕘<br>History
      </div>

      <div class="nav-item active" id="scanNav">
        📷<br>Scan
      </div>

      <div class="nav-item" id="settingsNav">
        ⚙<br>Settings
      </div>

    </nav>

  </div>
  `}function K(){return`
  <div class="home">

    <header class="brand">
      <div>
        <h1>Contact QR</h1>
        <p>by <span>Las B</span></p>
      </div>
    </header>

    <div class="recent" style="margin-top:30px">

      <input id="contactName" placeholder="Full Name" class="input"/>

      <br><br>

      <input id="contactPhone" placeholder="Phone Number" class="input"/>

      <br><br>

      <input id="contactEmail" placeholder="Email Address" class="input"/>

      <br><br>

      <button id="generateContactQR" class="scan-btn">
        Generate Contact QR
      </button>

      <br><br>

      <div id="qrResult" style="text-align:center;"></div>

    </div>

    <nav class="bottom-nav">

      <div class="nav-item" id="homeNav">🏠<br>Home</div>

      <div class="nav-item" id="historyNav">🕘<br>History</div>

      <div class="nav-item active" id="generatorNav">✨<br>Generate</div>

      <div class="nav-item" id="settingsNav">⚙<br>Settings</div>

    </nav>

  </div>
  `}var q=document.getElementById(`app`);function J(e=`home`){switch(e){case`history`:q.innerHTML=H();break;case`settings`:q.innerHTML=U();break;case`generator`:q.innerHTML=W();break;case`scanner`:q.innerHTML=G();break;case`contact`:q.innerHTML=K();break;default:q.innerHTML=V();break}Y()}function Y(){document.getElementById(`homeNav`)?.addEventListener(`click`,()=>J(`home`)),document.getElementById(`historyNav`)?.addEventListener(`click`,()=>J(`history`)),document.getElementById(`scanNav`)?.addEventListener(`click`,()=>J(`scanner`)),document.getElementById(`settingsNav`)?.addEventListener(`click`,()=>J(`settings`)),document.getElementById(`seeAll`)?.addEventListener(`click`,()=>J(`history`)),document.getElementById(`scanButton`)?.addEventListener(`click`,()=>J(`scanner`)),document.getElementById(`searchButton`)?.addEventListener(`click`,()=>{alert(`Search feature coming soon.`)}),document.getElementById(`aboutCard`)?.addEventListener(`click`,()=>{alert(`QuickScan QR

Version 1.0.0

Developed by Las B`)}),document.getElementById(`themeCard`)?.addEventListener(`click`,()=>{document.body.classList.toggle(`light-theme`),alert(`Theme button clicked`)}),document.getElementById(`contactQR`)?.addEventListener(`click`,()=>{J(`contact`)}),document.getElementById(`emailQR`)?.addEventListener(`click`,()=>{alert(`Email QR Generator`)}),document.getElementById(`startScanner`)?.addEventListener(`click`,Q),document.getElementById(`generateContactQR`)?.addEventListener(`click`,X),document.getElementById(`clearHistory`)?.addEventListener(`click`,()=>{localStorage.removeItem(`scanHistory`),J(`history`)})}async function X(){let e=(await z(async()=>{let{default:e}=await import(`./browser-BwjUquHB.js`).then(e=>c(e.default));return{default:e}},[])).default,t=document.getElementById(`contactName`).value.trim(),n=document.getElementById(`contactPhone`).value.trim(),r=document.getElementById(`contactEmail`).value.trim();if(!t||!n){alert(`Please enter at least a name and phone number.`);return}let i=`BEGIN:VCARD
VERSION:3.0
FN:${t}
TEL:${n}
EMAIL:${r}
END:VCARD`,a=await e.toDataURL(i);document.getElementById(`qrResult`).innerHTML=`<img src="${a}" style="width:220px;border-radius:16px;">`}function Z(e){let t=JSON.parse(localStorage.getItem(`scanHistory`)||`[]`);t.unshift({text:e,date:new Date().toLocaleString()}),localStorage.setItem(`scanHistory`,JSON.stringify(t))}async function Q(){try{let{CapacitorBarcodeScanner:e,CapacitorBarcodeScannerTypeHint:t}=await z(async()=>{let{CapacitorBarcodeScanner:e,CapacitorBarcodeScannerTypeHint:t}=await import(`./esm-Df4HGHrL.js`);return{CapacitorBarcodeScanner:e,CapacitorBarcodeScannerTypeHint:t}},__vite__mapDeps([0,1])),n=await e.scanBarcode({hint:t.ALL});if(n?.ScanResult){let e=n.ScanResult;Z(e),e.startsWith(`http://`)||e.startsWith(`https://`)?location.href=e:alert(e)}else alert(`No QR code detected.`)}catch(e){console.error(e),alert(e?.message||`Scanner failed.`)}}async function $(){try{await B.initialize(),await B.showBanner({adId:`ca-app-pub-7968114534973295/8551876611`,adSize:A.BANNER,position:k.BOTTOM_CENTER,margin:0,isTesting:!0}),console.log(`AdMob banner loaded`)}catch(e){console.error(`AdMob failed:`,e)}}$(),J();export{o as a,m as i,P as n,c as o,h as r,z as t};