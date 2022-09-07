const productObj = {};

const storeValue = () => {
  const productName = document.getElementById("productName").value;
  const productQtr = document.getElementById("productQtr").value;
  setCartItem(productName, productQtr);
};

const cartFromLs = () => {
  const isCart = localStorage.getItem("cart");
  let cart = {};
  if (isCart) {
    cart = JSON.parse(isCart);
  }
  return cart;
};

const setCartItem = (pd, qtr) => {
  const cart = cartFromLs();
  cart[pd] = qtr;
  localStorage.setItem("cart", JSON.stringify(cart));
};

const display = () => {
  const ul = document.getElementById("showValue");
  const cart = localStorage.getItem("cart");
  const cartObj = JSON.parse(cart);
  for (let list in cartObj) {
    //console.log(list);
    const li = document.createElement("li");
    li.innerText = `${list}:${cartObj[list]}`;
    ul.appendChild(li);
  }
};

display();
