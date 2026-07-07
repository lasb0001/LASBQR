export function History() {
  const history = JSON.parse(localStorage.getItem("scanHistory") || "[]");

  let items = "";

  if (history.length === 0) {
    items = `
      <div class="recent-card">
        <strong>No history yet</strong>
        <p>Your scanned QR codes will appear here automatically.</p>
      </div>
    `;
  } else {
    items = history.map(item => `
<div class="recent-card"
     style="margin-bottom:15px;cursor:pointer;"
     onclick="window.open('${item.text}','_blank')">
  <strong>${item.text}</strong>
  <p>${item.date}</p>
</div>
    `).join("");
  }

  return `
  <div class="home">

    <header class="brand">
      <div>
        <h1>History</h1>
        <p>by <span>Las B</span></p>
      </div>
    </header>

    <div class="recent" style="margin-top:35px">
<button id="clearHistory"
style="margin-bottom:20px;padding:12px 18px;border:none;border-radius:12px;background:#2563EB;color:white;font-weight:600;">
Clear History
</button>
      ${items}
    </div>

    <nav class="bottom-nav">
      <div class="nav-item" id="homeNav">🏠<br>Home</div>
      <div class="nav-item active" id="historyNav">🕘<br>History</div>
      <div class="nav-item" id="scanNav">📷<br>Scan</div>
      <div class="nav-item" id="settingsNav">⚙<br>Settings</div>
    </nav>

  </div>
  `;
}
