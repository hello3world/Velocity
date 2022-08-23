//нажатие кнопки меняет отображаемый контент
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

hideTabs();
showTab(0);

//плавный переход по странице
const ancors = document.querySelectorAll(".header__link");
ancors.forEach(anc => {
  anc.addEventListener("click", function(event) {
    event.preventDefault();
    const id = anc.getAttribute("href");
    const elem = document.querySelector(id);
    window.scroll({
      top: elem.offsetTop - 80,
      behavior: "smooth"
    })
  })
}); 
