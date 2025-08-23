document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menuOverlay = document.querySelector(".menu_overlay_sp");
  const navLinks = document.querySelectorAll(".menu_overlay_sp a");

  // ハンバーガークリックで開閉
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menuOverlay.classList.toggle("active");
  });

  // メニュー内リンクを押したら閉じる
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      menuOverlay.classList.remove("active");
    });
  });
});
