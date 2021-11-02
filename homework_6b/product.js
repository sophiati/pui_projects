//Updating price by multiplying cost x # pieces per box x quantity of boxes

function updatePrice() {
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

  var cost = 3
  var quantity = document.getElementById("qty").value
  var total = cost * pieces * quantity
  document.getElementById("item_price").innerHTML = "$" + total.toFixed(2)
}

//Set initial cart variable to hold 0 items
let cartCount = 0

//When item is added to cart, an alert shows with the quantity added and an icon displays and updates on the cart icon in the corner
function addtoCart() {
  var newItem = document.getElementById("qty").value
  cartCount += Number(newItem)
  document.getElementById("shopper").style.display = "block"
  document.getElementById("shopper").innerHTML = cartCount
  alert(newItem + " boxes added to your cart")
}
