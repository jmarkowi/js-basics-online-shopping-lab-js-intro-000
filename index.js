var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var item = { itemName: item, itemPrice: Math.floor(Math.random() * 100) };
 cart.push(item);
 return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  var numberItems = cart.length
  if(numberItems === 0) {
    return "Your shopping cart is empty."
  }
  else if(numberItems === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
