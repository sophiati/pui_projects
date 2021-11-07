//Display cart as array of objects
// const storedValue = JSON.parse(localStorage.getItem("savedCart"))
// let cart
// if (storedValue == null) {
//   cart = []
// } else {
//   cart = storedValue
// }
// localStorage.clear()

window.onload = function () {
  const storedValue = JSON.parse(localStorage.getItem("savedCart"))
  console.log(storedValue)
  if (storedValue === null) {
    document.getElementById("clear").style.display = "none"
    document.getElementById("no-items").style.display = "block"
  } else if (storedValue !== null) {
    document.getElementById("no-items").style.display = "none"
    document.getElementById("clear").style.display = "block"
    updatePage()
    // showIcon()
  }
}

function updatePage() {
  document.getElementById("shopper").style.display = "block"
  document.getElementById("shopper").innerHTML = storedQty.toString()
  //3 - Function to display products using templates & remove items from cart
  const cartDiv = document.getElementById("items")
  const template = document.getElementById("cart-item-template")
  let i = 0
  for (let i = 0; i < cart.length; i++) {
    console.log(i)
    const product = cart[i]
    const clone = template.content.cloneNode(true)
    clone.querySelector("#cart_photo").setAttribute("src", product.image)
    clone.querySelector(".summary_title").innerText = product.name
    clone.querySelector(".glaze-option").innerText = product.glaze
    clone.querySelector(".pieces-option").innerText = product.pieces
    clone.querySelector("#item_qty").value = product.quantity
    clone.querySelector(".price").innerText = "$" + product.total.toFixed(2)
    product.id = i
    const button = clone.querySelector(".delete")
    button.addEventListener("click", function () {
      var cartItemsString = localStorage.getItem("savedCart")
      var cartQty = localStorage.getItem("cartQuantity")
      if (cartItemsString !== null) {
        var savedCart = JSON.parse(cartItemsString)
        console.log(savedCart)
        var storedQty = JSON.parse(cartQty)
        console.log("stored Qty: " + storedQty)

        var ind = product.id
        console.log(ind)
        if (ind !== -1) {
          savedCart.splice(ind, 1)
          let itemQty = product.quantity
          storedQty = storedQty - itemQty
          console.log("storedQty 2: " + storedQty)
          localStorage.setItem("savedCart", JSON.stringify(savedCart))
          localStorage.setItem("cartQuantity", JSON.stringify(storedQty))
          window.location.reload()
        }
      }
    })
    cartDiv.appendChild(clone)
    console.log(cartDiv)
  }

  cartDiv.style.visibility = "visible"

  const receiptDiv = document.getElementById("receipt-item")
  const receiptTemplate = document.getElementById("receipt-item-template")
  let r = 0
  for (let r = 0; r < cart.length; r++) {
    console.log(r)
    const product = cart[r]
    const clone = receiptTemplate.content.cloneNode(true)
    clone.querySelector(".item_name").innerText = product.name
    clone.querySelector(".multiplier").innerText =
      " (x" + product.quantity + ")"
    clone.querySelector(".cost").innerText = "$" + product.total.toFixed(2)
    receiptDiv.appendChild(clone)
  }
  receiptDiv.style.visibility = "visible"

  let subtotal = 0
  for (product of cart) {
    subtotal = subtotal + parseInt(product.total)
  }
  document.getElementById("subtotal").style.display = "block"
  document.getElementById("subtotal").innerHTML = "$" + subtotal.toFixed(2)

  const tax = subtotal * 0.07
  const grandTotal = subtotal + tax
  console.log(grandTotal)
  document.getElementById("subtotal").style.display = "block"
  document.getElementById("tax").innerHTML = "$" + tax.toFixed(2)
  document.getElementById("grand-total").innerHTML = "$" + grandTotal.toFixed(2)
}

function clearCart() {
  console.log("clear")
  localStorage.clear()
  window.location.reload()
  // document.getElementById("clear").style.display = "hidden"
  // document.getElementById("shopper").innerHTML =
  //   "There are no items in your cart!"
}

// function removeItem() {
//   var cartItemsString = localStorage.getItem("savedCart")
//   if (cartItemsString !== null) {
//     var savedCart = JSON.parse(cartItemsString)
//     console.log(savedCart)

//     var ind = savedCart.findIndex(function (item) {
//       return item.id
//       // item.name === self.name &&
//       // item.glaze === self.glaze &&
//       // item.quantity === self.quantity &&
//       // item.pieces === self.pieces &&
//       // item.total === self.total
//     })

//     console.log(item.id)

//     // let ind = product.id
//     // savedCart.splice(ind, 1)
//     // localStorage.setItem("savedCart", JSON.stringify(cart))
//     // console.log(savedCart)
//     console.log("ind " + ind)
//     if (ind !== -1) {
//       savedCart.splice(ind, 1)
//       localStorage.setItem("savedCart", JSON.stringify(cart))
//       updatePage()
//     }
//   }
// }

// function removeItem(obj) {
//   // retrieve the stored value of the cart items so that we can modify it
//   var cartItemsString = localStorage.getItem("cartItems")
//   if (cartItemsString !== null) {
//     var cartItems = JSON.parse(cartItemsString) // successfully loaded in the cart items

//     // find the index of the input object in the list
//     var ind = cartItems.findIndex(function (item) {
//       return item.glaze === obj.glaze && item.quantity === obj.quantity
//     })
//     console.log("ind " + ind)
//     if (ind !== -1) {
//       // remove item from the list
//       cartItems.splice(ind, 1)
//       // update the stored value
//       localStorage.setItem("cartItems", JSON.stringify(cartItems))
//       // re-render the page to reflect changes
//       updatePage()
//     }
//   }
// }
