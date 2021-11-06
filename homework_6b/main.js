//Display cart as array of objects
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

function clickToAdd() {
  showIcon()
  addToCart()
  // updateReceipt()
}

//When item is added to cart, an alert shows with the quantity added and an icon displays and updates on the cart icon in the corner
let storedQty = JSON.parse(localStorage.getItem("cartQuantity"))
window.onload = function () {
  document.getElementById("shopper").style.display = "block"
  document.getElementById("shopper").innerHTML = storedQty.toString()
}

function showIcon() {
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

//2 - Function to add items to cart, display cart as array, and show numbers on cart
const cartDiv = document.getElementById("items")

function addToCart() {
  var name = document.getElementById("item-name").innerText
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

  // Gets Image
  if (document.getElementById("item-name").innerHTML == "Original") {
    var image = "images/original.jpg"
  } else if (document.getElementById("item-name").innerHTML == "Walnut") {
    var image = "images/walnut.jpg"
  } else if (document.getElementById("item-name").innerHTML == "Blackberry") {
    var image = "images/blackberry.jpg"
  } else if (
    document.getElementById("item-name").innerHTML == "Caramel Pecan"
  ) {
    var image = "images/caramel_pecan.jpg"
  } else if (document.getElementById("item-name").innerHTML == "Original GF") {
    var image = "images/original_gf.jpg"
  } else if (
    document.getElementById("item-name").innerHTML == "Pumpkin Spice"
  ) {
    var image = "images/pumpkin_spice.jpg"
  }

  if (document.getElementById("none").checked) {
    var glaze = "none"
  } else if (document.getElementById("sugar_milk").checked) {
    var glaze = "sugar milk"
  } else if (document.getElementById("vanilla_milk").checked) {
    var glaze = "vanilla milk"
  } else if (document.getElementById("double_chocolate").checked) {
    var glaze = "Double Chocolate"
  }

  var quantity = document.getElementById("qty").value
  var cost = 3
  var total = cost * pieces * quantity

  const product = new Item(name, glaze, pieces, quantity, total, image, id)
  console.log(product)
  cart.push(product)
  localStorage.setItem("savedCart", JSON.stringify(cart))
}

// console.log(cart)
