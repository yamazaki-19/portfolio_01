document.addEventListener("DOMContentLoaded", () => {
  /*** -----------------------------
   * トップボタン＆ファーストビュー スクロールバー
   * ----------------------------- ***/
  const topButton = document.querySelector(".top_button");
  const triggerSection = document.querySelectorAll("section")[2];
  const scrollBar = document.querySelector(".scroll_bar");
  const firstview = document.querySelector(".firstview");

  window.addEventListener("scroll", () => {
    // トップボタン表示制御
    if (triggerSection && topButton) {
      const triggerPosition = triggerSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (triggerPosition < windowHeight) {
        topButton.classList.add("show");
      } else {
        topButton.classList.remove("show");
      }
    }

    // ファーストビュー スクロールバー
    if (firstview && scrollBar) {
      const firstviewHeight = firstview.offsetHeight;
      const scrollTop = window.scrollY;
      const progress = Math.min(scrollTop / firstviewHeight, 1);
      scrollBar.style.transform = `translateY(${progress * 152}px)`;
    }
  });

  // トップボタンクリックでスムーススクロール
  if (topButton) {
    topButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /*** -----------------------------
   * 経歴 横スクロール＆丸カーソル
   * ----------------------------- ***/
  const bioScroll = document.querySelector(".bio_scroll");
  if (!bioScroll) return;

  const slider = bioScroll.querySelector("ul");
  if (!slider) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  // 丸カーソル作成
  const cursor = document.createElement("div");
  cursor.classList.add("bio_cursor");
  document.body.appendChild(cursor);
  bioScroll.style.cursor = "none";

  bioScroll.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
    cursor.style.opacity = 1;
    cursor.style.backgroundColor = isDown ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.2)";
    cursor.style.transform = isDown ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0.5)";
  });
  bioScroll.addEventListener("mouseleave", () => {
    cursor.style.opacity = 0;
  });

  // ドラッグ操作
  bioScroll.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - bioScroll.offsetLeft;
    scrollLeft = bioScroll.scrollLeft;
  });
  bioScroll.addEventListener("mouseup", () => (isDown = false));
  bioScroll.addEventListener("mouseleave", () => (isDown = false));
  bioScroll.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - bioScroll.offsetLeft;
    bioScroll.scrollLeft = scrollLeft - (x - startX) * 2;
  });

  // タッチ操作
  bioScroll.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - bioScroll.offsetLeft;
    scrollLeft = bioScroll.scrollLeft;
  });
  bioScroll.addEventListener("touchend", () => (isDown = false));
  bioScroll.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - bioScroll.offsetLeft;
    bioScroll.scrollLeft = scrollLeft - (x - startX) * 2;
  });

  /*** -----------------------------
   * スクロールバーのホバー色（滑らかに変化）
   * ----------------------------- ***/
  bioScroll.addEventListener("mouseenter", () => {
    bioScroll.style.setProperty("--scrollbar-color", "#5E7939");
  });
  bioScroll.addEventListener("mouseleave", () => {
    bioScroll.style.setProperty("--scrollbar-color", "#E6E7D7");
  });
});
const bioScroll = document.querySelector(".bio_scroll");
const bioLine = document.querySelector(".bio_line");

bioScroll.addEventListener("scroll", () => {
  const maxScroll = bioScroll.scrollWidth - bioScroll.clientWidth;
  const scrollRate = bioScroll.scrollLeft / maxScroll;

  const lineMaxWidth = bioScroll.scrollWidth;
  bioLine.style.width = lineMaxWidth * scrollRate + "px";

  // 一番右まで来たら矢印表示
  if (scrollRate > 0.98) {
    bioScroll.classList.add("end");
  } else {
    bioScroll.classList.remove("end");
  }
});
