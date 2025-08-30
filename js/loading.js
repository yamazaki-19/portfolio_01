document.addEventListener("DOMContentLoaded", () => {
  const loadingBar = document.getElementById("loading-bar-inner");
  const loadingText = document.getElementById("loading-text");
  const loadingScreen = document.getElementById("loading");

  if (sessionStorage.getItem("loaded")) {
    loadingScreen.style.display = "none";
    return;
  }

  let percent = 0;
  const interval = setInterval(() => {
    percent++;
    loadingBar.style.width = percent + "%";
    loadingText.textContent = percent + "%";

    if (percent >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loadingScreen.classList.add("fadeout");
        setTimeout(() => {
          loadingScreen.style.display = "none";
        }, 800);
      }, 200);

      sessionStorage.setItem("loaded", "true");
    }
  }, 20);
});
