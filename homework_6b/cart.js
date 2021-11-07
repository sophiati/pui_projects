//On load, checks if items are in the cart or not
window.onload = function () {
  const storedValue = JSON.parse(localStorage.getItem("savedCart"))
  console.log(storedValue)
  //If there are no items in the cart, the page displays "There are no items in your cart!"
  if (storedValue === null) {
    document.getElementById("clear").style.display = "none"
    document.getElementById("no-items").style.display = "block"
    //If the storedValue is not null, a "Clear Cart" button is shown below the cart items and the empty cart message is hidden
  } else if (storedValue !== null) {
    document.getElementById("no-items").style.display = "none"
    document.getElementById("clear").style.display = "block"
    updatePage()
  }
}

//1 - Function to display the cart icon count, create clones for all objects in the cart, display those clones, create clones for all objects in the receipt, display the receipt clones, and calculate the receipt total
function updatePage() {
  //Displays amount of items in the cart in the icon in the top right
  document.getElementById("shopper").style.display = "block"
  document.getElementById("shopper").innerHTML = storedQty.toString()
  //Uses a for loop to create a clone of the template for each item in the cart array
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

    //Sets a unique value for the id for each item in the array (to be used in the removeItem function as the index)
    product.id = i

    const button = clone.querySelector(".delete")
    //Adds an event listener to the delete buttons within the clones
    button.addEventListener("click", function () {
      var cartItemsString = localStorage.getItem("savedCart")
      var cartQty = localStorage.getItem("cartQuantity")
      if (cartItemsString !== null) {
        var savedCart = JSON.parse(cartItemsString)
        var storedQty = JSON.parse(cartQty)

        //Sets the index to the id value given to each item in the cart
        var ind = product.id

        //Checks if the index is not the last one in the array and then splices into the array to remove the called item
        if (ind !== -1) {
          savedCart.splice(ind, 1)
          let itemQty = product.quantity
          //Decrements the storedQty amount for the icon in the top right corner
          storedQty = storedQty - itemQty
          //Adjusts the localStorage for both the cart array and the counter array
          localStorage.setItem("savedCart", JSON.stringify(savedCart))
          localStorage.setItem("cartQuantity", JSON.stringify(storedQty))
          //Reloads the page with the updates from the removal of the item
          window.location.reload()
        }
      }
    })

    //Appends the clone to be displayed in the cartDiv
    cartDiv.appendChild(clone)
  }

  //Sets the cartDiv as visible
  cartDiv.style.visibility = "visible"

  //For loop through the receiptDiv to clone and display each receipt item
  const receiptDiv = document.getElementById("receipt-item")
  const receiptTemplate = document.getElementById("receipt-item-template")
  let r = 0
  for (let r = 0; r < cart.length; r++) {
    const product = cart[r]
    const clone = receiptTemplate.content.cloneNode(true)
    clone.querySelector(".item_name").innerText = product.name
    clone.querySelector(".multiplier").innerText =
      " (x" + product.quantity + ")"
    clone.querySelector(".cost").innerText = "$" + product.total.toFixed(2)
    //Appends each clone to the receiptDiv
    receiptDiv.appendChild(clone)
  }

  //Displays the receiptDiv
  receiptDiv.style.visibility = "visible"

  //Calculates the subtotal of the items
  let subtotal = 0
  for (product of cart) {
    subtotal = subtotal + parseInt(product.total)
  }

  //Displays the subtotal
  document.getElementById("subtotal").style.display = "block"
  document.getElementById("subtotal").innerHTML = "$" + subtotal.toFixed(2)

  //Calculats the tax for the receipt
  const tax = subtotal * 0.07
  //Calculates the grand total for the receipt (subtotal + tax)
  const grandTotal = subtotal + tax

  //Displays the subtotal, tax, and grand total
  document.getElementById("tax").innerHTML = "$" + tax.toFixed(2)
  document.getElementById("grand-total").innerHTML = "$" + grandTotal.toFixed(2)
}

//2 - Function to clear the cart
function clearCart() {
  //Clears all localStorage
  localStorage.clear()
  //Reloads the page with nothing in the cart array or counter value
  window.location.reload()
}
