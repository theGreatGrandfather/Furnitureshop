let tabsItem = document.querySelectorAll(".tabs__item");
let tabsContent = document.querySelectorAll(".tabs__block");

for (let item of tabsItem) {
  item.addEventListener("click", function () {
    for (let element of tabsContent) {
      element.classList.add("hidden");
    }

    let content = document.querySelector("#" + item.dataset.tab);
    console.log(content);
    content.classList.remove("hidden");
  });
}

let tabsDiv = $(".tabs__item");

tabsDiv.on("click", function () {
  tabsDiv.removeClass("active-tab");
  $(this).addClass("active-tab");
});

//animation

let animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);

  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        animItem.classList.remove("_active");
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}
