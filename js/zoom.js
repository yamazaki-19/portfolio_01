// ===============================
// タップ誤爆防止（スマホ用）
// ===============================
function addSafeTouchTap(element, callback) {
  let startX = 0;
  let startY = 0;
  let moved = false;

  element.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    moved = false;
  });

  element.addEventListener("touchmove", (e) => {
    const dx = Math.abs(e.touches[0].clientX - startX);
    const dy = Math.abs(e.touches[0].clientY - startY);
    if (dx > 10 || dy > 10) moved = true;
  });

  element.addEventListener("touchend", (e) => {
    if (!moved) callback(e);
  });
}

// ===============================
// スマホ用スライダー画像ズーム
// ===============================
const isSP = window.innerWidth <= 768;

if (isSP) {
  document.querySelectorAll(".slider img").forEach((img, index, imgs) => {
    const showZoom = (e) => {
      e.preventDefault();

      const overlay = document.createElement("div");
      overlay.classList.add("zoom_overlay");

      const slider = document.createElement("div");
      slider.classList.add("zoom_slider");

      imgs.forEach((i) => {
        const slide = document.createElement("div");
        slide.classList.add("zoom_slide");
        const newImg = document.createElement("img");
        newImg.src = i.src;
        newImg.alt = i.alt;
        slide.appendChild(newImg);
        slider.appendChild(slide);
      });

      overlay.appendChild(slider);

      const closeBtn = document.createElement("div");
      closeBtn.classList.add("zoom_close");
      closeBtn.textContent = "×";
      closeBtn.addEventListener("click", () => overlay.remove());
      overlay.appendChild(closeBtn);

      document.body.appendChild(overlay);

      slider.scrollLeft = index * slider.offsetWidth;

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.remove();
      });
    };

    img.addEventListener("click", showZoom);
    addSafeTouchTap(img, showZoom);
  });
}
