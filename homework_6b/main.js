//Check localStorage on each page to create an empty Cart array or a Cart array from localStorage savedCart
const storedValue = JSON.parse(localStorage.getItem("savedCart"))
let cart
if (storedValue == null) {
  cart = []
} else {
  cart = storedValue
}

//1 - Function to create objects for each item
function Item(itemName, itemGlaze, itemPieces, itemQty, itemTotal, itemImage) {
  this.name = itemName
  this.glaze = itemGlaze
  this.pieces = itemPieces
  this.quantity = itemQty
  this.total = itemTotal
  this.image = itemImage
  this.id = 0
}

//2 - Wrapper function to show icon on the "cart" and add each item to the cart
function clickToAdd() {
  showIcon()
  addToCart()
}

//3 - On page load, the cart icon displays the number of items in the cart
let storedQty = JSON.parse(localStorage.getItem("cartQuantity"))
window.onload = function () {
  document.getElementById("shopper").style.display = "block"
  document.getElementById("shopper").innerHTML = storedQty.toString()
}

//4 - Function to store and update cartCount and show the number of items in the cart in the corner
function showIcon() {
  let storedQty = JSON.parse(localStorage.getItem("cartQuantity"))
  if (storedQty == null) {
    cartCount = 0
  } else {
    cartCount = storedQty
  }
  var newItem = document.getElementById("qty").value
  cartCount += Number(newItem)
  document.getElementById("shopper").style.display = "block"
  document.getElementById("shopper").innerHTML = cartCount.toString()
  alert(newItem + " boxes added to your cart")
  localStorage.setItem("cartQuantity", JSON.stringify(cartCount))
}

//5 - Updates price on product pages when different quantities and pieces per box are selected according to the price for each item
function updatePrice() {
  //Checks value of the pieces per box
  if (document.getElementById("one").checked) {
    var pieces = document.getElementById("one").value
  } else if (document.getElementById("three").checked) {
    var pieces = document.getElementById("three").value
  } else if (document.getElementById("six").checked) {
    var pieces = document.getElementById("six").value
  } else if (document.getElementById("twelve").checked) {
    var pieces = document.getElementById("twelve").value
  } else {
    var pieces = 1
  }

  //Checks value of the cost for each bun type
  if (document.getElementById("item-name").innerHTML == "Original") {
    var cost = 3
  } else if (document.getElementById("item-name").innerHTML == "Walnut") {
    var cost = 5
  } else if (document.getElementById("item-name").innerHTML == "Blackberry") {
    var cost = 4
  } else if (
    document.getElementById("item-name").innerHTML == "Caramel Pecan"
  ) {
    var cost = 5.5
  } else if (document.getElementById("item-name").innerHTML == "Original GF") {
    var cost = 4.5
  } else if (
    document.getElementById("item-name").innerHTML == "Pumpkin Spice"
  ) {
    var cost = 5.5
  }

  //Checks the quantity of boxes
  var quantity = document.getElementById("qty").value

  //Calculates the total cost for the item(s) being added to the cart
  var total = cost * pieces * quantity

  //Displays the updated price
  document.getElementById("item_price").innerHTML = "$" + total.toFixed(2)
}

//6 - Function to add items to cart, display cart as array, and store the cart array in local storage
const cartDiv = document.getElementById("items")

function addToCart() {
  //Creates name for the object being added
  var name = document.getElementById("item-name").innerText

  //Checks pieces per box
  if (document.getElementById("one").checked) {
    var pieces = document.getElementById("one").value
  } else if (document.getElementById("three").checked) {
    var pieces = document.getElementById("three").value
  } else if (document.getElementById("six").checked) {
    var pieces = document.getElementById("six").value
  } else if (document.getElementById("twelve").checked) {
    var pieces = document.getElementById("twelve").value
  } else {
    var pieces = 1
  }

  // Gets Image and cost for each bun type
  if (document.getElementById("item-name").innerHTML == "Original") {
    var image = "images/original.jpg"
    var cost = 3
  } else if (document.getElementById("item-name").innerHTML == "Walnut") {
    var image = "images/walnut.jpg"
    var cost = 5
  } else if (document.getElementById("item-name").innerHTML == "Blackberry") {
    var image = "images/blackberry.jpg"
    var cost = 4
  } else if (
    document.getElementById("item-name").innerHTML == "Caramel Pecan"
  ) {
    var image = "images/caramel_pecan.jpg"
    var cost = 5.5
  } else if (document.getElementById("item-name").innerHTML == "Original GF") {
    var image = "images/original_gf.jpg"
    var cost = 4.5
  } else if (
    document.getElementById("item-name").innerHTML == "Pumpkin Spice"
  ) {
    var image = "images/pumpkin_spice.jpg"
    var cost = 5.5
  }

  //Checks glaze type selected for each object
  if (document.getElementById("none").checked) {
    var glaze = "None"
  } else if (document.getElementById("sugar_milk").checked) {
    var glaze = "Sugar Milk"
  } else if (document.getElementById("vanilla_milk").checked) {
    var glaze = "Vanilla Milk"
  } else if (document.getElementById("double-chocolate").checked) {
    var glaze = "Double Chocolate"
  }

  //Checks quantity for each object
  var quantity = document.getElementById("qty").value

  // var cost = 3
  //Calculates total cost for the object item
  var total = cost * pieces * quantity

  //Sets an id for the object (to be used for removeItem function as index)
  var id = 0

  //Creates a new product with the attributes gathered from above
  const product = new Item(name, glaze, pieces, quantity, total, image, id)

  //Adds the new object to the cart array
  cart.push(product)

  //Stores the cart array using localStorage
  localStorage.setItem("savedCart", JSON.stringify(cart))
}
