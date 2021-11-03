//Display cart as array of objects
const storedValue = JSON.parse(localStorage.getItem("savedCart"))
let cart
if (storedValue == null) {
  cart = []
} else {
  cart = storedValue
}

//1 - Function to create objects for each item
function Item(itemName, itemGlaze, itemPieces, itemQty, itemCost) {
  this.name = itemName
  this.glaze = itemGlaze
  this.pieces = itemPieces
  this.quantity = itemQty
  this.cost = itemCost
}

function clickToAdd() {
  showIcon()
  addToCart()
  updateReceipt()
}

// const myItem = new Item("Original", "Sugar-milk", "3pc", "2", "$18.00")

//Create an array of objects for the cart

// let cartCount = 0

//2 - Function to add items to cart, display cart as array, and show numbers on cart
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

  const product = new Item(name, glaze, pieces, quantity, total)
  console.log(product)
  cart.push(product)
  localStorage.setItem("savedCart", JSON.stringify(cart))
}

// addToCart("Original", "Sugar-milk", "3pc", "2", "$18.00")

// function showCart{
//   //Show numbers on cart
//   var newItem = document.getElementById("qty").value
//   cartCount += Number(newItem)
//   document.getElementById("shopper").style.display = "block"
//   document.getElementById("shopper").innerHTML = cartCount
//   alert(newItem + " boxes added to your cart")
//   localStorage.setItem('cartQuantity', JSON.stringify(cartCount))
//   const storedQty = JSON.parse(localStorage.getItem('cartQuantity'))
// }

//3 - Function to display products using templates & remove items from cart
// const cartDiv = documentgetElementById("column-1")
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
const receipt = []

function updateReceipt() {
  const product = cart[cart.length - 1]
  // receipt.push(product)
  // localStorage.setItem("savedReceipt", JSON.stringify(receipt))

  const clone;
  clone.querySelector('.item_name').innerText = product.name;

  //Display receipt as array of objects
  // const storedReceipt = JSON.parse(localStorage.getItem("savedReceipt"))
  // if (storedReceipt == null) {
  //   const receipt = []
  // } else {
  //   const receipt = storedReceipt
  // }

  //Subfunction to get subtotal
  // function subtotal() {

  // }
  let subtotal = 0;
  for (item of cart) {
    subtotal = subtotal + item.cost
  }

}

function onLoad() {
  //3 - Function to display products using templates & remove items from cart
  const cartDiv = documentgetElementById("column-1")
  const template = document.getElementById("cart-item-template")

  function showProductInCart(item) {
    const clone = template.content.cloneNode(true)
    clone.querySelector(".summary_title").innerText = item.name

    //Function to remove items from cart
    const remove = clone.querySelector(".delete")
    remove.addEventListener("click", function removeItem() {
      document.getElementById("cart-item-template")
      localStorage.removeItem("savedCart")
    })

    cartElement.appendChild(clone)
  }

  //5 - Function to clone & display receipts
  const receiptDiv = documentgetElementById("receipt")
  const receiptTemplate = document.getElementById("receipt-item")

  function showReceipt(item) {
    const clone = receiptTemplate.content.cloneNode(true)
    clone.querySelector(".item_name").innerText = item.name
    receiptElement.appendChild(clone)
  }
}
