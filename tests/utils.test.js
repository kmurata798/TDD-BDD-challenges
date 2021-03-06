const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================
it("should do something that you want done", function() {
  const dog = utils.doggo()
  expect(dog).to.be.a("string")
})

it("Area should return the area of a rectangle.", function() {
  const rectArea = utils.area(2, 3)
  expect(rectArea).to.equal(6)
})

it("Perimeter should return the perimeter of a rectangle.", function() {
  const rectPerim = utils.perimeter(2, 3) // 2 * 2 + 2 * 3
  expect(rectPerim).to.equal(10)
})

it("Should return the area of a circle with radius.", function() {
  const circleArea = utils.circleArea(5)
  expect(circleArea).to.equal(Math.PI * 5**2)
})

it("Stretch: Test that any negative widths, breadths, or radii return null", function() {
  const checkNegativeFail = utils.checkNeg(-6)
  expect(checkNegativeFail).to.be.null
  const checkNegativePass = utils.checkNeg(4)
  expect(checkNegativePass).to.equal(4)
})



// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
    // Create a new item and assign it to a variable so we can use it
  const item = utils.createItem("apple", 0.99)
    // Check that the item was created
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
    // Create new item by assigning it to a variable
  const item = utils.createItem("apple", 0.99)
    // Add item cart
  utils.addItemToCart(item)
    // Store the shoppingCart array in a variable so we can use it
  const itemsInCart = utils.getShoppingCart()
    // Check that the shopping cart
  expect(itemsInCart[0]).to.have.property("name", "apple")
})

it("Should add a new item to the shopping cart", function() {
    // Check that cart is empty
  const cartLength = utils.getNumItemsInCart()
  expect(cartLength).to.equal(0)
    // Add new item to cart
  const item = utils.createItem("apple", 0.99)
  utils.addItemToCart(item)
    // Check that new item was added
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("quantity", 1)
})

it("Should return the number of items in the cart", function() {
  const createdItem = utils.createItem("apple", 0.99)
  utils.addItemToCart(createdItem)
  // const cartItems = utils.getNumItemsInCart() // If I want to assign the cart to a variable
  expect(utils.getNumItemsInCart()).to.equal(1)
})

it("Should remove items from cart", function() {
  const createdItem = utils.createItem("apple", 0.99)
  utils.addItemToCart(createdItem)
  expect(utils.getNumItemsInCart()).to.equal(1)
  utils.removeItemFromCart(createdItem)
  // expect(utils.getShoppingCart()).to.equal(0)
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
