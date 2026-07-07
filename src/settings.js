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
  `;
}
