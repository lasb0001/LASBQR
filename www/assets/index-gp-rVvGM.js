const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/esm-CFl6YVaZ.js","assets/definitions-Dh3PTAqS.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`
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

      <div class="nav-item" id="generatorNav">
        ✨<br>Generate
      </div>

      <div class="nav-item" id="settingsNav">
        ⚙<br>Settings
      </div>

    </nav>

  </div>
  `}function t(){return`
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
  `}function n(){return`
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
✓ QR Generator<br>
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

      <div class="recent-card">
        <strong>⭐ Rate App</strong>
        <p>Rate QuickScan QR on the Play Store</p>
      </div>

      <br>

      <div class="recent-card">
        <strong>📤 Share App</strong>
        <p>Share QuickScan QR with friends</p>
      </div>

    </div>

    <nav class="bottom-nav">

      <div class="nav-item" id="homeNav">
        🏠<br>Home
      </div>

      <div class="nav-item" id="historyNav">
        🕘<br>History
      </div>

      <div class="nav-item" id="generatorNav">
        ✨<br>Generate
      </div>

      <div class="nav-item active" id="settingsNav">
        ⚙<br>Settings
      </div>

    </nav>

  </div>
  `}function r(){return`
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
  `}function i(){return`
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

      <div class="nav-item" id="generatorNav">
        ✨<br>Generate
      </div>

      <div class="nav-item" id="settingsNav">
        ⚙<br>Settings
      </div>

    </nav>

  </div>
  `}function a(){return`
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
  `}var o=`modulepreload`,s=function(e){return`/`+e},c={},l=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function u(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=l(t.map(t=>{if(t=s(t,n),t=u(t),t in c)return;c[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:o,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},u=document.getElementById(`app`);function d(o=`home`){switch(o){case`history`:u.innerHTML=t();break;case`settings`:u.innerHTML=n();break;case`generator`:u.innerHTML=r();break;case`scanner`:u.innerHTML=i();break;case`contact`:u.innerHTML=a();break;default:u.innerHTML=e();break}f()}function f(){document.getElementById(`homeNav`)?.addEventListener(`click`,()=>d(`home`)),document.getElementById(`historyNav`)?.addEventListener(`click`,()=>d(`history`)),document.getElementById(`generatorNav`)?.addEventListener(`click`,()=>d(`generator`)),document.getElementById(`settingsNav`)?.addEventListener(`click`,()=>d(`settings`)),document.getElementById(`seeAll`)?.addEventListener(`click`,()=>d(`history`)),document.getElementById(`scanButton`)?.addEventListener(`click`,()=>d(`scanner`)),document.getElementById(`searchButton`)?.addEventListener(`click`,()=>{alert(`Search feature coming soon.`)}),document.getElementById(`aboutCard`)?.addEventListener(`click`,()=>{alert(`QuickScan QR

Version 1.0.0

Developed by Las B`)}),document.getElementById(`themeCard`)?.addEventListener(`click`,()=>{document.body.classList.toggle(`light-theme`),alert(`Theme button clicked`)}),document.getElementById(`contactQR`)?.addEventListener(`click`,()=>{d(`contact`)}),document.getElementById(`emailQR`)?.addEventListener(`click`,()=>{alert(`Email QR Generator`)}),document.getElementById(`startScanner`)?.addEventListener(`click`,p)}async function p(){try{let{BarcodeScanner:e,CapacitorBarcodeScannerTypeHintALLOption:t,CapacitorBarcodeScannerAndroidScanningLibrary:n,CapacitorBarcodeScannerCameraDirection:r,CapacitorBarcodeScannerScanOrientation:i}=await l(async()=>{let{BarcodeScanner:e,CapacitorBarcodeScannerTypeHintALLOption:t,CapacitorBarcodeScannerAndroidScanningLibrary:n,CapacitorBarcodeScannerCameraDirection:r,CapacitorBarcodeScannerScanOrientation:i}=await import(`./esm-CFl6YVaZ.js`);return{BarcodeScanner:e,CapacitorBarcodeScannerTypeHintALLOption:t,CapacitorBarcodeScannerAndroidScanningLibrary:n,CapacitorBarcodeScannerCameraDirection:r,CapacitorBarcodeScannerScanOrientation:i}},__vite__mapDeps([0,1])),a=await e.scanBarcode({hint:t.ALL,scanInstructions:`Place the QR code inside the frame`,scanText:`Scan`,cameraDirection:r.BACK,scanOrientation:i.PORTRAIT,android:{scanningLibrary:n.MLKIT}});a?.ScanResult?alert(a.ScanResult):alert(`No QR code detected.`)}catch(e){console.log(e),alert(`Scanner failed.`)}}d();export{l as t};