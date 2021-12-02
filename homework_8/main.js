//Check localStorage on each page to create an empty Plan array or a Plan array from localStorage savedPlan
const storedValue = JSON.parse(localStorage.getItem("savedPlan"))
let plan
if (storedValue == null) {
  plan = []
} else {
  plan = storedValue
}

//1 - Function to create objects for each item
function Item(
  itemQuestion,
  itemGoal,
  itemABC,
  itemWW,
  itemMethod1,
  itemMethod2,
  itemMethod3
) {
  this.question = itemQuestion
  this.goal = itemGoal
  this.abc = itemABC
  this.ww = itemWW
  this.method1 = itemMethod1
  this.method2 = itemMethod2
  this.method3 = itemMethod3
}

function submit() {
  var question = document.getElementById("question").value

  //Checks Goal
  if (document.getElementById("strategize").checked) {
    var goal = document.getElementById("strategize").value
  } else if (document.getElementById("execute").checked) {
    var goal = document.getElementById("execute").value
  } else if (document.getElementById("assess").checked) {
    var goal = document.getElementById("assess").value
  }

  //Checks Focus - AB
  if (document.getElementById("attitudes").checked) {
    var abc = document.getElementById("attitudes").value
  } else if (document.getElementById("behaviors").checked) {
    var abc = document.getElementById("behaviors").value
  }

  //Checks Focus - WW
  if (document.getElementById("what").checked) {
    var ww = document.getElementById("what").value
  } else if (document.getElementById("why").checked) {
    var ww = document.getElementById("why").value
  }

  //Selects Methods
  if (abc == "behaviors" && ww == "what") {
    var method1 = document.getElementById("ab-testing")
    var method2 = document.getElementById("heuristic")
    var method3 = document.getElementById("web-analytics")
  } else if (abc == "behaviors" && ww == "why") {
    var method1 = document.getElementById("usability-testing")
    var method2 = document.getElementById("think-aloud")
    var method3 = document.getElementById("contextual-inquiry")
  } else if (abc == "attitudes" && ww == "why") {
    var method1 = document.getElementById("diaries")
    var method2 = document.getElementById("codesign")
    var method3 = document.getElementById("interviews")
  } else if (abc == "attitudes" && ww == "what") {
    var method1 = document.getElementById("speed-dating")
    var method2 = document.getElementById("card-sorting")
    var method3 = document.getElementById("survey")
  }

  const research = new Item(question, goal, abc, ww, method1, method2, method3)
}

// //Open Modals
// $(function () {
//   $("#exampleModalCenter").modal({
//     show: true,
//     backdrop: "static",
//   })
//   //now on button click
//   $("#exampleModalCenter").modal("show")
// })
