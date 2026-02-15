if (window.innerWidth >= 769) {
  // ================================
  // 通常カーソル生成
  // ================================
  const mainCursor = document.createElement("div");
  mainCursor.classList.add("cursor");
  document.body.appendChild(mainCursor);

  // マウス追従（共通）
  document.addEventListener("mousemove", (e) => {
    mainCursor.style.top = e.clientY + "px";
    mainCursor.style.left = e.clientX + "px";
  });

  // ボタン・リンクで拡大
  const hoverTargets = document.querySelectorAll("a, button");
  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      mainCursor.classList.add("active");
    });
    el.addEventListener("mouseleave", () => {
      mainCursor.classList.remove("active");
    });
  });

  // ================================
  // bio_scroll専用カーソル生成
  // ================================
  const bioArea = document.querySelector(".bio_scroll");
  const bioCursor = document.createElement("div");
  bioCursor.classList.add("bio_cursor");
  document.body.appendChild(bioCursor);

  // bioカーソルもマウス追従
  document.addEventListener("mousemove", (e) => {
    bioCursor.style.top = e.clientY + "px";
    bioCursor.style.left = e.clientX + "px";
  });

  // ================================
  // カーソル切替（フェード）
  // ================================
  if (bioArea) {
    bioArea.addEventListener("mouseenter", () => {
      mainCursor.classList.add("is-hidden");
      bioCursor.classList.add("is-active");
    });

    bioArea.addEventListener("mouseleave", () => {
      mainCursor.classList.remove("is-hidden");
      bioCursor.classList.remove("is-active");
    });
  }
}
// ================================
// bio横スクロールをJSドラッグに変更
// ================================
if (bioArea) {
  let isDown = false;
  let startX;
  let scrollLeft;

  // マウス押したらドラッグ開始
  bioArea.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - bioArea.offsetLeft;
    scrollLeft = bioArea.scrollLeft;
  });

  // マウス離したら終了
  document.addEventListener("mouseup", () => {
    isDown = false;
  });

  // ドラッグ中スクロール
  document.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - bioArea.offsetLeft;
    const walk = (x - startX) * 1.5; // ←スピード調整できる
    bioArea.scrollLeft = scrollLeft - walk;
  });
}
