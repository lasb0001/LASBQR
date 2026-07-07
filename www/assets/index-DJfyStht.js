(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`
<div class="home">

<header class="brand">
<div>
<h1>QuickScan QR</h1>
<p>by <span>Las B</span></p>
</div>
<button class="search-btn">🔍</button>
</header>

<section class="subtitle">
<h2>Ready to Scan</h2>
<p>Tap the button below to scan any QR code or barcode instantly.</p>
</section>

<section class="scan">
<button id="scanButton" class="scan-btn">
<div class="scan-inner">
<div class="scan-icon"></div>
</div>
</button>
<p class="tap-text">Tap to Scan</p>
</section>

<section class="recent">

<div class="recent-header">
<h3>Recent Activity</h3>
<span>See all</span>
</div>

<div class="recent-card">
<strong>No scans yet</strong>
<p>Your recent scans will appear here.</p>
</div>

</section>

<nav class="bottom-nav">

<div class="nav-item active" id="homeNav">
🏠<br>Home
</div>

<div class="nav-item" id="historyNav">
🕘<br>History
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

      <div class="recent-card">
        <strong>Dark Theme</strong>
        <p>Enabled</p>
      </div>

      <br>

      <div class="recent-card">
        <strong>About</strong>
        <p>QuickScan QR by Las B</p>
      </div>

    </div>

    <nav class="bottom-nav">

      <div class="nav-item" id="homeNav">
        🏠<br>Home
      </div>

      <div class="nav-item" id="historyNav">
        🕘<br>History
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

      <div class="recent-card">🌐 Website</div>
      <br>

      <div class="recent-card">📝 Text</div>
      <br>

      <div class="recent-card">📶 Wi-Fi</div>
      <br>

      <div class="recent-card">📞 Contact</div>
      <br>

      <div class="recent-card">📧 Email</div>

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
  `}var i=document.getElementById(`app`);function a(a=`home`){switch(a){case`history`:i.innerHTML=t();break;case`settings`:i.innerHTML=n();break;case`generator`:i.innerHTML=r();break;default:i.innerHTML=e()}o()}function o(){document.getElementById(`homeNav`)?.addEventListener(`click`,()=>{a(`home`)}),document.getElementById(`historyNav`)?.addEventListener(`click`,()=>{a(`history`)}),document.getElementById(`generatorNav`)?.addEventListener(`click`,()=>{a(`generator`)}),document.getElementById(`settingsNav`)?.addEventListener(`click`,()=>{a(`settings`)}),document.getElementById(`scanButton`)?.addEventListener(`click`,()=>{alert(`Scanner will be connected next.`)})}a();