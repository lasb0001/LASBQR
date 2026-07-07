export function Settings() {
  return `
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
  `;
}
