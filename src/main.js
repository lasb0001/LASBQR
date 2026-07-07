import "./style.css";

import { Home } from "./home.js";
import { History } from "./history.js";
import { Settings } from "./settings.js";
import { Generator } from "./generator.js";
import { Scanner } from "./scanner.js";
import { Contact } from "./contact.js";

const app = document.getElementById("app");

function render(page = "home") {
  switch (page) {
    case "history":
      app.innerHTML = History();
      break;

    case "settings":
      app.innerHTML = Settings();
      break;

    case "generator":
      app.innerHTML = Generator();
      break;

    case "scanner":
      app.innerHTML = Scanner();
      break;

    case "contact":
      app.innerHTML = Contact();
  break;

    default:
      app.innerHTML = Home();
      break;
  }

  bindEvents();
}

function bindEvents() {
  document.getElementById("homeNav")?.addEventListener("click", () => render("home"));
  document.getElementById("historyNav")?.addEventListener("click", () => render("history"));
  document.getElementById("generatorNav")?.addEventListener("click", () => render("generator"));
  document.getElementById("settingsNav")?.addEventListener("click", () => render("settings"));

  document.getElementById("seeAll")?.addEventListener("click", () => render("history"));

  document.getElementById("scanButton")?.addEventListener("click", () => render("scanner"));

  document.getElementById("searchButton")?.addEventListener("click", () => {
    alert("Search feature coming soon.");
  });

  document.getElementById("aboutCard")?.addEventListener("click", () => {
    alert("QuickScan QR\n\nVersion 1.0.0\n\nDeveloped by Las B");
  });

  document.getElementById("themeCard")?.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
    alert("Theme button clicked");
});

  document.getElementById("contactQR")?.addEventListener("click", () => {
    render("contact");
});

  document.getElementById("emailQR")?.addEventListener("click", () => {
    alert("Email QR Generator");
});

  document.getElementById("startScanner")?.addEventListener("click", startScanner);
}

  document.getElementById("generateContactQR")?.addEventListener("click", generateContactQR);

async function generateContactQR() {
  const QRCode = (await import("qrcode")).default;

  const name = document.getElementById("contactName").value.trim();
  const phone = document.getElementById("contactPhone").value.trim();
  const email = document.getElementById("contactEmail").value.trim();

  if (!name || !phone) {
    alert("Please enter at least a name and phone number.");
    return;
  }

  const vcard =
`BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${phone}
EMAIL:${email}
END:VCARD`;

  const qr = await QRCode.toDataURL(vcard);

  document.getElementById("qrResult").innerHTML =
    `<img src="${qr}" style="width:220px;border-radius:16px;">`;
}

async function startScanner() {
  try {
    const {
      CapacitorBarcodeScanner,
      CapacitorBarcodeScannerTypeHint,
    } = await import("@capacitor/barcode-scanner");

    const result = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHint.ALL,
    });

    if (result?.ScanResult) {
      alert(result.ScanResult);
    } else {
      alert("No QR code detected.");
    }
  } catch (err) {
    console.error(err);
    alert(err?.message || "Scanner failed.");
  }
}

render();
