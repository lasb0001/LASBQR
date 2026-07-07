export function Home() {
  return `
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
  `;
}
