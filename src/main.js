import "./style.css";

import { Home } from "./home.js";
import { History } from "./history.js";
import { Settings } from "./settings.js";
import { Generator } from "./generator.js";
import { Scanner } from "./scanner.js";

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
    alert("QuickScan QR\nVersion 1.0.0\n\nDeveloped by Las B");
  });

  document.getElementById("themeCard")?.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  });

  document.getElementById("startScanner")?.addEventListener("click", startScanner);

}

async function startScanner() {
  try {
    const { BarcodeScanner } = await import("@capacitor/barcode-scanner");

    const permission = await BarcodeScanner.checkPermission({
      force: true,
    });

    if (!permission.granted) {
      alert("Camera permission denied.");
      return;
    }

    const result = await BarcodeScanner.scan();

    if (result.hasContent) {
      alert(result.content);
    }

  } catch (e) {
    console.error(e);
    alert("Scanner error.");
  }
}

render();
