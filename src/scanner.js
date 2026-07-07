export function Scanner() {
  return `
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
  `;
}
