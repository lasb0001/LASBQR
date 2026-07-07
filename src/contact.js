export function Contact() {
  return `
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
  `;
}
