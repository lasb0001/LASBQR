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
  `;
}
