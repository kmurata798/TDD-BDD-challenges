// ========================================================
// Level 1 Challenges
// ========================================================
const doggo = () => {
  return "dog"
}

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return w * h
}

const perimeter = (w, h) => {
  return ( w * 2 ) + (h * 2)
}

const circleArea = (r) => {
  return Math.PI * (r**2)
}

const checkNeg = (num) => {
  if (num >= 0) {
    return num
  } else {
    return null
  }
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart()
}

const addItemToCart = (item) => {
  // should add item to shopping cart
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
}

module.exports = {
  checkNeg, doggo, sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
