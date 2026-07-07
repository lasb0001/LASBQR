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

  document.getElementById("homeNav")?.onclick = () => render("home");

  document.getElementById("historyNav")?.onclick = () => render("history");

  document.getElementById("generatorNav")?.onclick = () => render("generator");

  document.getElementById("settingsNav")?.onclick = () => render("settings");

  document.getElementById("seeAll")?.onclick = () => render("history");

  document.getElementById("scanButton")?.onclick = () => render("scanner");

  document.getElementById("searchButton")?.onclick = () => {
    alert("Search feature coming soon.");
  };

  document.getElementById("aboutCard")?.onclick = () => {
    alert("QuickScan QR\nVersion 1.0.0\n\nDeveloped by Las B");
  };

  document.getElementById("themeCard")?.onclick = () => {
    document.body.classList.toggle("light-theme");
  };

  document.getElementById("startScanner")?.onclick = startScanner;

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

      // History saving comes next.

    }

  } catch (e) {

    console.error(e);
    alert("Scanner error.");

  }

}

render();
