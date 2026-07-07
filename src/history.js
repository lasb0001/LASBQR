export function History() {
  return `
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
  `;
}
