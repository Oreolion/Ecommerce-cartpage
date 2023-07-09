let menuBar = document.querySelector(".menubar");
let menuOpen = document.querySelector(".open");
let menuClose = document.querySelector(".close");
let mobileMenu = document.querySelector(".mobile-menu");
let cartBox = document.querySelector(".cartbox");
let cart = document.querySelector("#cart");
let thumbNails = document.querySelector(".image-thumbnails li");
let lightBox = document.querySelector(".lightbox");
let lightBoxCloseBtn = document.querySelector(".lightbox .content .close");
let cartBtn = document.querySelector("#cartBtn");
let increaseBtn = document.querySelector("#increase");
let decreaseBtn = document.querySelector("#decrease");
let price = document.querySelector("#price");
let itemList = document.querySelector(".list");

let product = {
  image: "images/image-product-1-thumbnail.jpg",
  price: 125,
};

let cartList = [{ ...product }];

function updateCart() {
  price.nodeValue = 0;
  let total = 0;

  if (price.textContent === 0) {
    itemList.textContent = 0;
    return "Your cart is empty";
  } else {
    itemList.textContent = price.textContent;
    cartBox.innerHTML = cartList.map((item) => {
      let { image, price } = item;
      let total;
      total = price * itemList.textContent;
      return `<div class="innercart">
              <div class="cartimgbox">
                  <img src=${image} alt="/">
              </div>
              <p>Fall Limited Edition Sneakers $${price} x ${itemList.textContent} <span>$${total}</span> </p>
              <img  id="innercartdelete" src="images/icon-delete.svg" alt=""> 
          </div>
          <button class="btn">Checkout</button>`;
    });
  }
}

menuBar.onclick = () => {
  menuBar.classList.toggle("active");
  mobileMenu.classList.toggle("active");
};

cart.onclick = () => {
  cartBox.classList.toggle("active");
};

thumbNails.onclick = () => {
  lightBox.classList.toggle("active");
};

lightBoxCloseBtn.onclick = () => {
  lightBox.classList.remove("active");
};

window.onresize = () => {
  lightBox.classList.remove("active");
};

window.onscroll = () => {
  menuBar.classList.toggle("active");
  mobileMenu.classList.remove("active");
};

// cart functionalities

let i = 0;
increaseBtn.addEventListener("click", () => {
  i++;
  i = i < 10 ? 0 + i : i;
  console.log(i);
  price.innerHTML = i;
});
decreaseBtn.addEventListener("click", () => {
  i--;
  i = i > 10 ? i - i : i;
  console.log(i);
  price.innerHTML = i;
});

cartBtn.onclick = () => {
  itemList.textContent = 0;
  updateCart();
};
