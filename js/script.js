// header
const $menuBtn = document.querySelector(".menu-button");
const $mainNav = document.querySelector(".main-nav");
const $bag = document.querySelector(".bag");

function clickMenuButton() {
   if ($menuBtn.classList.contains("-active")) {
      $menuBtn.classList.remove("-active")
      $mainNav.classList.remove("-active")
      $bag.classList.remove("-hidden")
   } else {
      $menuBtn.classList.add("-active")
      $mainNav.classList.add("-active")
      $bag.classList.add("-hidden")
   }
}

$menuBtn.addEventListener("click", clickMenuButton)

// product carousel
const $bullet = document.querySelectorAll(".bullet");
let $bulletActive = document.querySelector(".bullet.-active");
let $productActive = document.querySelector(".product.-active");

function clickInBullet(item) {
   item.preventDefault();
   let $bulletClicked = this;
   $bulletActive.classList.remove("-active");
   $bulletClicked.classList.add("-active");
   $bulletActive = $bulletClicked;

   $productActive.classList.remove("-active");
   let idProduct = $bulletClicked.querySelector("a").getAttribute("href");
   let $targetProduct = document.querySelector(idProduct);
   $targetProduct.classList.add("-active");
   $productActive = $targetProduct;
}

$bullet.forEach((item) => {
   item.addEventListener("click", clickInBullet);
})