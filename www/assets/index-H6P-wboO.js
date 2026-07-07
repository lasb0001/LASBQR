const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/esm-fL6ck85c.js","assets/definitions-CIAk5tW3.js"])))=>i.map(i=>d[i]);
var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function l(){return`
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
  `}function u(){return`
  <div class="home">

    <header class="brand">
      <div>
        <h1>History</h1>
        <p>by <span>Las B</span></p>
      </div>
    </header>

    <div class="recent" style="margin-top:40px">

      <div class="recent-card">
        <strong>No history yet</strong>

        <p>
          Your scanned QR codes will appear here automatically.
        </p>

      </div>

    </div>

    <nav class="bottom-nav">

      <div class="nav-item" id="homeNav">
        🏠<br>Home
      </div>

      <div class="nav-item active" id="historyNav">
        🕘<br>History
      </div>

      <div class="nav-item" id="settingsNav">
        ⚙<br>Settings
      </div>

    </nav>

  </div>
  `}function d(){return`
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
  `}function f(){return`
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
  `}function p(){return`
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
  `}function m(){return`
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
  `}var h=`modulepreload`,g=function(e){return`/`+e},_={},v=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=g(t,n),t=s(t),t in _)return;_[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:h,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},y=document.getElementById(`app`);function b(e=`home`){switch(e){case`history`:y.innerHTML=u();break;case`settings`:y.innerHTML=d();break;case`generator`:y.innerHTML=f();break;case`scanner`:y.innerHTML=p();break;case`contact`:y.innerHTML=m();break;default:y.innerHTML=l();break}x()}function x(){document.getElementById(`homeNav`)?.addEventListener(`click`,()=>b(`home`)),document.getElementById(`historyNav`)?.addEventListener(`click`,()=>b(`history`)),document.getElementById(`scanNav`)?.addEventListener(`click`,()=>b(`scanner`)),document.getElementById(`settingsNav`)?.addEventListener(`click`,()=>b(`settings`)),document.getElementById(`seeAll`)?.addEventListener(`click`,()=>b(`history`)),document.getElementById(`scanButton`)?.addEventListener(`click`,()=>b(`scanner`)),document.getElementById(`searchButton`)?.addEventListener(`click`,()=>{alert(`Search feature coming soon.`)}),document.getElementById(`aboutCard`)?.addEventListener(`click`,()=>{alert(`QuickScan QR

Version 1.0.0

Developed by Las B`)}),document.getElementById(`themeCard`)?.addEventListener(`click`,()=>{document.body.classList.toggle(`light-theme`),alert(`Theme button clicked`)}),document.getElementById(`contactQR`)?.addEventListener(`click`,()=>{b(`contact`)}),document.getElementById(`emailQR`)?.addEventListener(`click`,()=>{alert(`Email QR Generator`)}),document.getElementById(`startScanner`)?.addEventListener(`click`,C),document.getElementById(`generateContactQR`)?.addEventListener(`click`,S)}async function S(){let e=(await v(async()=>{let{default:e}=await import(`./browser-D0C0CvLy.js`).then(e=>c(e.default));return{default:e}},[])).default,t=document.getElementById(`contactName`).value.trim(),n=document.getElementById(`contactPhone`).value.trim(),r=document.getElementById(`contactEmail`).value.trim();if(!t||!n){alert(`Please enter at least a name and phone number.`);return}let i=`BEGIN:VCARD
VERSION:3.0
FN:${t}
TEL:${n}
EMAIL:${r}
END:VCARD`,a=await e.toDataURL(i);document.getElementById(`qrResult`).innerHTML=`<img src="${a}" style="width:220px;border-radius:16px;">`}async function C(){try{let{CapacitorBarcodeScanner:e,CapacitorBarcodeScannerTypeHint:t}=await v(async()=>{let{CapacitorBarcodeScanner:e,CapacitorBarcodeScannerTypeHint:t}=await import(`./esm-fL6ck85c.js`);return{CapacitorBarcodeScanner:e,CapacitorBarcodeScannerTypeHint:t}},__vite__mapDeps([0,1])),n=await e.scanBarcode({hint:t.ALL});if(n?.ScanResult){let e=n.ScanResult;e.startsWith(`http://`)||e.startsWith(`https://`)?location.href=e:alert(e)}else alert(`No QR code detected.`)}catch(e){console.error(e),alert(e?.message||`Scanner failed.`)}}b();export{o as n,c as r,v as t};