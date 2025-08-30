// スライド
const isSP = window.innerWidth <= 768;

if (isSP) {
  document.querySelectorAll(".slider img").forEach((img, index, imgs) => {
    const showZoom = (e) => {
      e.preventDefault();

      // オーバーレイ
      const overlay = document.createElement("div");
      overlay.classList.add("zoom_overlay");

      // スライダー
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

      // ×ボタン
      const closeBtn = document.createElement("div");
      closeBtn.classList.add("zoom_close");
      closeBtn.textContent = "×";
      closeBtn.addEventListener("click", () => overlay.remove());
      overlay.appendChild(closeBtn);

      document.body.appendChild(overlay);

      // 最初にタップした画像から表示
      slider.scrollLeft = index * slider.offsetWidth;

      // overlay背景クリックでも閉じる
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.remove();
      });
    };

    img.addEventListener("click", showZoom);
    img.addEventListener("touchstart", showZoom);
  });
}

// 資料画像
const allImgs = [
  ...document.querySelectorAll(".slider img"),
  ...document.querySelectorAll(".production_image img"),
  ...document.querySelectorAll(".mock_view_item img"),
];

allImgs.forEach((img, index) => {
  const showZoom = (e) => {
    e.preventDefault();

    const overlay = document.createElement("div");
    overlay.classList.add("zoom_overlay");

    const slider = document.createElement("div");
    slider.classList.add("zoom_slider");

    allImgs.forEach((i) => {
      const slide = document.createElement("div");
      slide.classList.add("zoom_slide");
      const newImg = document.createElement("img");
      newImg.src = i.src;
      newImg.alt = i.alt;
      slide.appendChild(newImg);
      slider.appendChild(slide);
    });

    overlay.appendChild(slider);

    // ×ボタンを作る
    const closeBtn = document.createElement("div");
    closeBtn.classList.add("zoom_close");
    closeBtn.textContent = "×";
    closeBtn.addEventListener("click", () => overlay.remove());
    overlay.appendChild(closeBtn);

    document.body.appendChild(overlay);

    // 最初にクリック／タップした画像から表示
    slider.scrollLeft = index * slider.offsetWidth;

    // 背景クリックで閉じる（ボタンクリックは無視）
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.remove();
    });
  };

  img.addEventListener("click", showZoom);
  img.addEventListener("touchstart", showZoom);
});
