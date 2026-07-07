import "./style.css";

import { Home } from "./home.js";
import { History } from "./history.js";
import { Settings } from "./settings.js";
import { Generator } from "./generator.js";

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

    default:
      app.innerHTML = Home();
  }

  bindEvents();
}

function bindEvents() {

  document.getElementById("homeNav")?.addEventListener("click", () => {
    render("home");
  });

  document.getElementById("historyNav")?.addEventListener("click", () => {
    render("history");
  });

  document.getElementById("generatorNav")?.addEventListener("click", () => {
    render("generator");
  });

  document.getElementById("settingsNav")?.addEventListener("click", () => {
    render("settings");
  });

  document.getElementById("scanButton")?.addEventListener("click", () => {
    alert("Scanner will be connected next.");
  });

}

render();
