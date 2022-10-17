let clickNav = document.querySelector(".nav");
let clickNavItem = document.querySelector(".link");
clickNav.addEventListener("click", (e) => {
  if (!clickNavItem.classList.contains(".active")) {
    clickNavItem.classList.remove("active");
  }
  console.log("클릭", e.target);
  e.target.classList.add("active");
  clickNavItem = e.target;
});

const $product = document.getElementById("product");
function scrollFunc() {
  let scrollHeight = scrollY + window.innerHeight;
  let documentHeight = document.body.scrollHeight;

  console.log("scrollHeight:" + scrollHeight);
  console.log("yoffset:" + scrollY);

  console.log("documentHeight" + documentHeight);

  if (scrollY >= 10) {
    $product.classList.add("active");
  }
}

const targets = document.querySelectorAll(".fade-class");
const options = { root: null, threshold: 0.1, rootMargin: "-0px" };
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    const container = entry.target;
    if (entry.isIntersecting) {
      container.classList.add("fade-in");
    } else {
      container.classList.remove("fade-in");
    }
  });
}, options);

targets.forEach((target) => {
  observer.observe(target);
});

window.addEventListener("scroll", scrollFunc);
