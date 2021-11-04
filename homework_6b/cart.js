//Display cart as array of objects
// const storedValue = JSON.parse(localStorage.getItem("savedCart"))
// let cart
// if (storedValue == null) {
//   cart = []
// } else {
//   cart = storedValue
// }

window.onload = function () {
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

    clone.querySelector(".price").innerText = "$" + product.total.toFixed(2)
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
      " (x " + product.quantity + ")"
    clone.querySelector(".cost").innerText = "$" + product.total.toFixed(2)
    receiptDiv.appendChild(clone)
  }
  receiptDiv.style.visibility = "visible"

  let subtotal = 0
  for (product of cart) {
    subtotal = subtotal + parseInt(product.cost)
  }
  document.getElementById("subtotal").style.display = "block"
  document.getElementById("subtotal").innerHTML = "$" + subtotal

  const tax = subtotal * 0.07
  const grandTotal = subtotal + tax
  console.log(grandTotal)
  document.getElementById("subtotal").style.display = "block"
  document.getElementById("tax").innerHTML = "$" + tax
  document.getElementById("grand-total").innerHTML = "$" + grandTotal
}

//Function to remove items from cart
// const remove = clone.querySelector(".delete")
// remove.addEventListener("click", function removeItem() {
//   document.getElementById("cart-item-template")
//   localStorage.removeItem("savedCart")
// })
// }

//5 - Function to clone & display receipts
// const receiptDiv = documentgetElementById("receipt")
// const receiptTemplate = document.getElementById("receipt-item")

// function showReceipt(item) {
//   // const clone = receiptTemplate.content.cloneNode(true)
//   // clone.querySelector(".item_name").innerText = item.name
//   receiptElement.appendChild(clone)
// }
// }
