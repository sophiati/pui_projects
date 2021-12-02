//Check localStorage on each page to create an empty Plan array or a Plan array from localStorage savedPlan
const storedValue = JSON.parse(localStorage.getItem("savedPlan"))
let plan
if (storedValue == null) {
  plan = []
} else {
  plan = storedValue
}

function startQuiz() {
  window.location.href = "fake_quiz.html"
  clearQuiz()
}

function clearQuiz() {
  localStorage.clear()
}

//1 - Function to create objects for each item
function Item(
  itemQuestion,
  itemGoal,
  itemABC,
  itemWW,
  itemMethods
  // itemMethod1,
  // itemMethod2,
  // itemMethod3
) {
  this.question = itemQuestion
  this.goal = itemGoal
  this.abc = itemABC
  this.ww = itemWW
  this.methods = itemMethods
  // this.method1 = itemMethod1
  // this.method2 = itemMethod2
  // this.method3 = itemMethod3
}

function submitQuiz() {
  var question = document.getElementById("question").value

  //Checks Goal
  if (document.getElementById("strategize").checked) {
    var goal = "Strategize"
  } else if (document.getElementById("execute").checked) {
    var goal = "Execute"
  } else if (document.getElementById("assess").checked) {
    var goal = "Assess"
  }

  console.log(goal)

  //Checks Focus - AB
  if (document.getElementById("attitudes").checked) {
    var abc = "attitudes"
  } else if (document.getElementById("behaviors").checked) {
    var abc = "behaviors"
  }

  console.log(abc)

  //Checks Focus - WW
  if (document.getElementById("what").checked) {
    var ww = "what"
  } else if (document.getElementById("why").checked) {
    var ww = "why"
  }

  console.log(ww)

  //Selects Methods
  if (abc == "behaviors" && ww == "what") {
    var methods = 1
    // var method1 = document.querySelector("#ab-testing")
    // var method2 = document.querySelector("#heuristic")
    // var method3 = document.querySelector("#web-analytics")
  } else if (abc == "behaviors" && ww == "why") {
    var methods = 2
    // var method1 = document.querySelector("#usability-testing")
    // var method2 = document.querySelector("#think-aloud")
    // var method3 = document.querySelector("#contextual-inquiry")
  } else if (abc == "attitudes" && ww == "why") {
    var methods = 3
    // var method1 = document.querySelector("#diaries")
    // var method2 = document.querySelector("#codesign")
    // var method3 = document.querySelector("#interviews")
  } else if (abc == "attitudes" && ww == "what") {
    var methods = 4
    // var method1 = document.querySelector("#speed-dating")
    // var method2 = document.querySelector("#card-sorting")
    // var method3 = document.querySelector("#survey")
  }
  console.log(methods)

  const research = new Item(question, goal, abc, ww, methods)
  console.log(research)

  plan.push(research)

  localStorage.setItem("savedPlan", JSON.stringify(plan))

  window.location.href = "fake_results.html"
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
