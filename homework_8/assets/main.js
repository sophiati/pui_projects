//1-Function to Start Quiz & Clear Local Storage
function startQuiz() {
  clearQuiz()
  window.location.href = "quiz.html"
}

//2-Clears local storage when new quiz starts
function clearQuiz() {
  localStorage.clear()
}

//3-Check localStorage on each page to create an empty Plan array or a Plan array from localStorage savedPlan
const storedValue = JSON.parse(localStorage.getItem("savedPlan"))
let plan
if (storedValue == null) {
  plan = []
} else {
  plan = storedValue
}

//4 - Function to create objects for each research plan, which is an object
function Item(itemQuestion, itemGoal, itemABC, itemWW, itemMethods) {
  this.question = itemQuestion
  this.goal = itemGoal
  this.abc = itemABC
  this.ww = itemWW
  this.methods = itemMethods
}

//5-Wrapper Function to display results after quiz has been submitted
function getResults() {
  submitQuiz()
  displayResults()
}

//6-Submit Quiz Function gathers all of inputs from the quiz to create a new research plan object and saves this in local storage
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
  } else if (abc == "behaviors" && ww == "why") {
    var methods = 2
  } else if (abc == "attitudes" && ww == "why") {
    var methods = 3
  } else if (abc == "attitudes" && ww == "what") {
    var methods = 4
  }

  //Creates an object called research with the inputs
  const research = new Item(question, goal, abc, ww, methods)

  //Adds that object to the array
  plan.push(research)

  //Saves the array in local storage
  localStorage.setItem("savedPlan", JSON.stringify(plan))
}

//7-Displays results by retrieving value from local storage and calls updatePage function to display cloned template of the research plan
function displayResults() {
  const storedValue = JSON.parse(localStorage.getItem("savedPlan"))
  console.log(storedValue)
  document.getElementById("result").style.display = "block"
  updatePage()
}

//8-Creates a cloned template of the research plan with customized methods
function updatePage() {
  const resultDiv = document.getElementById("results-container")
  const template = document.getElementById("results-template")
  const research = plan[0]
  //Clones the template of the plan
  const clone = template.content.cloneNode(true)
  //Inputs the user's inputs into the research plan
  clone.querySelector("#question-input").innerText = research.question
  clone.querySelector("#goal-input").innerText = research.goal

  //Checks which inputs were selected to assign three methods based on the matrix framework from the home page, 3 methods per 4 quadrants
  if (research.methods == 1) {
    clone.querySelector("#m1-title").innerText = abTesting.title
    clone.querySelector("#m1-subtitle").innerText = abTesting.subtitle
    clone.querySelector("#m1-description").innerText = abTesting.description
    clone.querySelector("#m1-body").style.background = "#ff5a9c"
    clone.querySelector("#m2-title").innerText = heuristic.title
    clone.querySelector("#m2-subtitle").innerText = heuristic.subtitle
    clone.querySelector("#m2-description").innerText = heuristic.description
    clone.querySelector("#m2-body").style.background = "#ff5a9c"
    clone.querySelector("#m3-title").innerText = webAnalytics.title
    clone.querySelector("#m3-subtitle").innerText = webAnalytics.subtitle
    clone.querySelector("#m3-description").innerText = webAnalytics.description
    clone.querySelector("#m3-body").style.background = "#f0cc08"
  } else if (research.methods == 2) {
    clone.querySelector("#m1-title").innerText = usabilityTesting.title
    clone.querySelector("#m1-subtitle").innerText = usabilityTesting.subtitle
    clone.querySelector("#m1-description").innerText =
      usabilityTesting.description
    clone.querySelector("#m1-body").style.background = "#ff5a9c"
    clone.querySelector("#m2-title").innerText = thinkAloud.title
    clone.querySelector("#m2-subtitle").innerText = thinkAloud.subtitle
    clone.querySelector("#m2-description").innerText = thinkAloud.description
    clone.querySelector("#m2-body").style.background = "#ff5a9c"
    clone.querySelector("#m3-title").innerText = contextualInquiry.title
    clone.querySelector("#m3-subtitle").innerText = contextualInquiry.subtitle
    clone.querySelector("#m3-description").innerText =
      contextualInquiry.description
    clone.querySelector("#m3-body").style.background = "#9bc700"
  } else if (research.methods == 3) {
    clone.querySelector("#m1-title").innerText = digitalDiaries.title
    clone.querySelector("#m1-subtitle").innerText = digitalDiaries.subtitle
    clone.querySelector("#m1-description").innerText =
      digitalDiaries.description
    clone.querySelector("#m1-body").style.background = "#9bc700"
    clone.querySelector("#m2-title").innerText = codesign.title
    clone.querySelector("#m2-subtitle").innerText = codesign.subtitle
    clone.querySelector("#m2-description").innerText = codesign.description
    clone.querySelector("#m2-body").style.background = "#41bfe7"
    clone.querySelector("#m3-title").innerText = interviews.title
    clone.querySelector("#m3-subtitle").innerText = interviews.subtitle
    clone.querySelector("#m3-description").innerText = interviews.description
    clone.querySelector("#m3-body").style.background = "#9bc700"
  } else if (research.methods == 4) {
    clone.querySelector("#m1-title").innerText = speedDating.title
    clone.querySelector("#m1-subtitle").innerText = speedDating.subtitle
    clone.querySelector("#m1-description").innerText = speedDating.description
    clone.querySelector("#m1-body").style.background = "#41bfe7"
    clone.querySelector("#m2-title").innerText = cardSorting.title
    clone.querySelector("#m2-subtitle").innerText = cardSorting.subtitle
    clone.querySelector("#m2-description").innerText = cardSorting.description
    clone.querySelector("#m2-body").style.background = "#41bfe7"
    clone.querySelector("#m3-title").innerText = survey.title
    clone.querySelector("#m3-subtitle").innerText = survey.subtitle
    clone.querySelector("#m3-description").innerText = survey.description
    clone.querySelector("#m3-body").style.background = "#f0cc08"
  }
  //Appends clones to the resultDiv
  resultDiv.appendChild(clone)

  //Displays resultDiv
  resultDiv.style.visibility = "visible"
}

//9-Function to link back to homePage from the 'Return to Home' link and the 'Previous' button on quiz page 1
function homePage() {
  window.location.href = "index.html"
}
