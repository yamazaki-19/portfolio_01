document.addEventListener("DOMContentLoaded", () => {
  let percent = 0;
  const loadingBar = document.getElementById("loading-bar-inner");
  const loadingText = document.getElementById("loading-text");
  const loadingScreen = document.getElementById("loading");

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
        }, 800); // フェードアウト後にDOMから消す
      }, 200); // 0.2秒待ってからフェード開始
    }
  }, 20); // 20msごとに1%進む → 約2秒で100%
});
