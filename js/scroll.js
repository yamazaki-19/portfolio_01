const topButton = document.querySelector(".top_button");
const triggerSection = document.querySelectorAll("section")[2];
const scrollBar = document.querySelector(".scroll_bar");

window.addEventListener("scroll", () => {
  // トップボタン表示
  const triggerPosition = triggerSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (triggerPosition < windowHeight) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }

  // スクロールバー（ファーストビュー内のみ）
  const firstview = document.querySelector(".firstview");
  const firstviewHeight = firstview.offsetHeight;
  const scrollTop = window.scrollY;

  const progress = Math.min(scrollTop / firstviewHeight, 1);
  scrollBar.style.transform = `translateY(${progress * 152}px)`;
});
