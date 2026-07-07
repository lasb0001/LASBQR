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

async function startScanner() {
  try {
    const {
      BarcodeScanner,
      CapacitorBarcodeScannerTypeHintALLOption,
      CapacitorBarcodeScannerAndroidScanningLibrary,
      CapacitorBarcodeScannerCameraDirection,
      CapacitorBarcodeScannerScanOrientation,
    } = await import("@capacitor/barcode-scanner");

    const result = await BarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHintALLOption.ALL,
      scanInstructions: "Place the QR code inside the frame",
      scanText: "Scan",
      cameraDirection: CapacitorBarcodeScannerCameraDirection.BACK,
      scanOrientation: CapacitorBarcodeScannerScanOrientation.PORTRAIT,
      android: {
        scanningLibrary:
          CapacitorBarcodeScannerAndroidScanningLibrary.MLKIT,
      },
    });

    if (result?.ScanResult) {
      alert(result.ScanResult);
    } else {
      alert("No QR code detected.");
    }
  } catch (err) {
    console.log(err);
    alert("Scanner failed.");
  }
}

render();
