//Check localStorage on each page to create an empty Plan array or a Plan array from localStorage savedPlan
const storedValue = JSON.parse(localStorage.getItem("savedPlan"))
let plan
if (storedValue == null) {
  plan = []
} else {
  plan = storedValue
}

function homePage() {
  window.location.href = "index.html"
}

function startQuiz() {
  clearQuiz()
  window.location.href = "practice.html"
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

function getResults() {
  submitQuiz()
  displayResults()
}

function submitQuiz() {
  var question = document.getElementById("question").value

  //Checks Goal
  if (document.getElementById("strategize").checked) {
    var goal =
      "Strategize - Inspire, explore, and choose new directions and opportunities"
  } else if (document.getElementById("execute").checked) {
    var goal =
      "Execute  - Inform and optimize designs in order to reduce risk and improve usability"
  } else if (document.getElementById("assess").checked) {
    var goal =
      "Assess - Measure product performance against itself or competition"
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

  // window.location.href = "fake_results.html"
}

function displayResults() {
  const storedValue = JSON.parse(localStorage.getItem("savedPlan"))
  console.log(storedValue)
  document.getElementById("result").style.display = "block"
  updatePage()
}

function updatePage() {
  const resultDiv = document.getElementById("results-container")
  const template = document.getElementById("results-template")
  const research = plan[0]
  const clone = template.content.cloneNode(true)
  clone.querySelector("#question-input").innerText = research.question
  clone.querySelector("#goal-input").innerText = research.goal
  if (research.methods == 1) {
    clone.querySelector("#m1-title").innerText = abTesting.title
    clone.querySelector("#m1-subtitle").innerText = abTesting.subtitle
    clone.querySelector("#m2-title").innerText = heuristic.title
    clone.querySelector("#m2-subtitle").innerText = heuristic.subtitle
    clone.querySelector("#m3-title").innerText = webAnalytics.title
    clone.querySelector("#m3-subtitle").innerText = webAnalytics.subtitle
  } else if (research.methods == 2) {
    clone.querySelector("#m1-title").innerText = usabilityTesting.title
    clone.querySelector("#m1-subtitle").innerText = usabilityTesting.subtitle
    clone.querySelector("#m2-title").innerText = thinkAloud.title
    clone.querySelector("#m2-subtitle").innerText = thinkAloud.subtitle
    clone.querySelector("#m3-title").innerText = contextualInquiry.title
    clone.querySelector("#m3-subtitle").innerText = contextualInquiry.subtitle
  } else if (research.methods == 3) {
    clone.querySelector("#m1-title").innerText = digitalDiaries.title
    clone.querySelector("#m1-subtitle").innerText = digitalDiaries.subtitle
    clone.querySelector("#m2-title").innerText = codesign.title
    clone.querySelector("#m2-subtitle").innerText = codesign.subtitle
    clone.querySelector("#m3-title").innerText = interviews.title
    clone.querySelector("#m3-subtitle").innerText = interviews.subtitle
  } else if (research.methods == 4) {
    clone.querySelector("#m1-title").innerText = speedDating.title
    clone.querySelector("#m1-subtitle").innerText = speedDating.subtitle
    clone.querySelector("#m2-title").innerText = cardSorting.title
    clone.querySelector("#m2-subtitle").innerText = cardSorting.subtitle
    clone.querySelector("#m3-title").innerText = survey.title
    clone.querySelector("#m3-subtitle").innerText = survey.subtitle
  }
  resultDiv.appendChild(clone)

  resultDiv.style.visibility = "visible"
}
// let i = 0
// document.getElementById("goals").style.visibility = "hidden"
// document.getElementById("focus").style.visibility = "hidden"
// document.getElementById("question-bucket").style.visibility = "visible"

// function nextPage() {
//   let page = ["question-bucket", "goals"]
//   if ((i = 0)) {
//     document.getElementById("goals").style.visibility = "none"
//     document.getElementById("focus").style.visibility = "none"
//     document.getElementById("question-bucket").style.display = "block"
//   } else if ((i = 1)) {
//     document.getElementById("focus").style.display = "hidden"
//     document.getElementById("question-bucket").style.display = "hidden"
//     document.getElementById("goals").style.display = "block"
//   } else if ((i = 2)) {
//     document.getElementById("question-bucket").style.display = "hidden"
//     document.getElementById("goals").style.display = "hidden"
//     document.getElementById("focus").style.display = "block"
//   }
//   i++
// }

// //Open Modals
// $(function () {
//   $("#exampleModalCenter").modal({
//     show: true,
//     backdrop: "static",
//   })
//   //now on button click
//   $("#exampleModalCenter").modal("show")
// })
