import "./style.css";
import { Home } from "./home.js";

const app = document.getElementById("app");

function renderHome() {
  app.innerHTML = Home();

  const scanButton = document.getElementById("scanButton");

  scanButton.addEventListener("click", () => {
    alert("Scanner screen coming next...");
  });
}

renderHome();
