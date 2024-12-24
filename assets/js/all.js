let currentLang = document.documentElement.getAttribute("lang") || "zh-Hant-TW";
const langLabel = document.getElementById("langLabel");
langLabel.textContent = (currentLang === "en") ? "繁中" : "EN";
document.getElementById("langSwitchBtn").addEventListener("click", function () {
  switch (currentLang) {
    case "zh-Hant-TW":
      window.location = 'index_en.html';
      break;
    case "en":
    default:
      window.location = 'index.html';
      break;
  }
});