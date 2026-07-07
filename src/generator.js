export function Generator() {
  return `
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
  `;
}
