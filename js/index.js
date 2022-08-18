const tabBtns = document.querySelectorAll(".tab-nav__btn");
const tabsItems = document.querySelectorAll(".tab-item");
function hideTabs() {
  tabsItems.forEach(item => item.classList.add("hide"));
  tabBtns.forEach(item => item.classList.remove("tab-nav__btn--active"));
}

function showTab(index) {
  tabsItems[index].classList.remove("hide");
  tabBtns[index].classList.add("tab-nav__btn--active");
}

tabBtns.forEach((btn, index) => btn.addEventListener("click", () => {
  hideTabs();
  showTab(index);
}));
