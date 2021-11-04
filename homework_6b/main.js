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

  const product = new Item(name, glaze, pieces, quantity, total, image)
  console.log(product)
  cart.push(product)
  localStorage.setItem("savedCart", JSON.stringify(cart))
}

console.log(cart)

//3 - Function to display products using templates & remove items from cart
// const cartDiv = document.getElementById("column-1")
// const template = document.getElementById("cart-item-template")

// function showProductInCart(item) {
//   const clone = template.content.cloneNode(true)
//   clone.querySelector(".summary_title").innerText = item.name

//   //Function to remove items from cart
//   const remove = clone.querySelector('.delete')
//   remove.addEventListener('click', function () {
//     document.getElementById("cart-item-template")
//     localStorage.removeItem('savedCart')
//   }

//   cartElement.appendChild(clone)
// }

//4 - Function to Update Receipt & display receipt as array of objects
// const receipt = []

// function updateReceipt() {
//   const receiptDiv = document.getElementById("lines")
//   const receiptTemplate = document.getElementById("receipt-item")
//   let r = 0
//   for (let r = 0; r < cart.length; r++) {
//     console.log(r)
//     const product = cart[r]
//     const clone = receiptTemplate.content.cloneNode(true)
//     clone.querySelector(".item_name").innerText = product.name
//     clone.querySelector(".multiplier").innerText = "x" + product.quantity
//     clone.querySelector(".cost").innerText = "$" + product.total.toFixed(2)
//     receiptDiv.appendChild(clone)
//   }

//   receiptDiv.style.visibility = "visible"

////////
// const product = cart[cart.length - 1]
// const receiptDiv = document.getElementById("line-items")
// const receiptTemplate = document.getElementById("receipt-item")
// receipt.push(product)
// localStorage.setItem("savedReceipt", JSON.stringify(receipt))
// const clone = receiptTemplate.content.cloneNode(true)
// const clone = receiptTemplate.content.cloneNode(true)
// clone.querySelector(".item_name").innerText = product.name
// clone.querySelector(".multiplier").innerText = "x" + product.quantity
// clone.querySelector(".cost").innerText = "$" + product.total
// receiptElement.appendChild(clone)

//Display receipt as array of objects
// const storedReceipt = JSON.parse(localStorage.getItem("savedReceipt"))
// if (storedReceipt == null) {
//   const receipt = []
// } else {
//   const receipt = storedReceipt
// }

//   let subtotal = 0
//   for (item of cart) {
//     subtotal = subtotal + product.cost
//   }

//   const tax = subtotal * 0.07
//   const grandTotal = subtotal + tax
//   console.log(grandTotal)
// }

// function onLoad() {
//   //3 - Function to display products using templates & remove items from cart
//   const cartDiv = document.getElementById("items")
//   const template = document.getElementById("cart-item-template")

//   function showProductInCart(product) {
//     const clone = template.content.cloneNode(true)
//     clone.querySelector(".summary_title").innerText = product.name
//     clone.querySelector(".glaze-option").innerText = product.glaze
//     clone.querySelector(".pieces-option").innerText = product.pieces

//     //Function to remove items from cart
//     const remove = clone.querySelector(".delete")
//     remove.addEventListener("click", function removeItem() {
//       document.getElementById("cart-item-template")
//       localStorage.removeItem("savedCart")
//     })

//     cartElement.appendChild(clone)
//   }

//5 - Function to clone & display receipts
// const receiptDiv = documentgetElementById("receipt")
// const receiptTemplate = document.getElementById("receipt-item")

// function showReceipt(item) {
//   // const clone = receiptTemplate.content.cloneNode(true)
//   // clone.querySelector(".item_name").innerText = item.name
//   receiptElement.appendChild(clone)
// }
// }
