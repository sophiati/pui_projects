window.onload = function () {
  const storedValue = JSON.parse(localStorage.getItem("savedPlan"))
  console.log(storedValue)
  document.getElementById("result").style.display = "block"
  updatePage()
}

function updatePage() {
  const resultDiv = document.getElementById("result")
  const template = document.getElementById("results-template")
  const research = plan[0]
  const clone = template.content.cloneNode(true)
  clone.querySelector("#question-input").innerText = research.question
  clone.querySelector("#goal-input").innerText = research.goal
  if (research.methods == 1) {
    console.log(1)
    clone
      .querySelector("#m1-card")
      .replaceWith(document.querySelector("#ab-testing"))
    clone
      .querySelector("#m2-card")
      .replaceWith(document.querySelector("#heuristic"))
    clone
      .querySelector("#m3-card")
      .replaceWith(document.querySelector("#web-analytics"))
  } else if (research.methods == 2) {
    clone
      .querySelector("#m1-card")
      .replaceWith(document.querySelector("#usability-testing"))
    clone
      .querySelector("#m2-card")
      .replaceWith(document.querySelector("#think-aloud"))
    clone
      .querySelector("#m3-card")
      .replaceWith(document.querySelector("#contextual-inquiry"))
  } else if (research.methods == 3) {
    console.log(3)
    clone
      .querySelector("#m1-card")
      .replaceWith(document.getElementById("#diaries"))
    console.log("diaries")
    clone
      .querySelector("#m2-card")
      .replaceWith(document.querySelector("#codesign"))
    clone
      .querySelector("#m3-card")
      .replaceWith(document.querySelector("#interviews"))
  } else if (research.methods == 4) {
    clone
      .querySelector("#m1-card")
      .replaceWith(document.querySelector("#speed-dating"))
    clone
      .querySelector("#m2-card")
      .replaceWith(document.querySelector("#card-sorting"))
    clone
      .querySelector("#m3-card")
      .replaceWith(document.querySelector("#survey"))
  }
  // clone.querySelector("#m1-card").replaceWith(research.method1)
  // clone.querySelector("#m2-card").replaceWith(research.method2)
  // clone.querySelector("#m3-card").replaceWith(research.method3)
  resultDiv.appendChild(clone)

  resultDiv.style.visibility = "visible"
}

// var method1 = document.querySelector("#ab-testing")
// var method2 = document.querySelector("#heuristic")
// var method3 = document.querySelector("#web-analytics")

// var method1 = document.querySelector("#usability-testing")
// var method2 = document.querySelector("#think-aloud")
// var method3 = document.querySelector("#contextual-inquiry")

// var method1 = document.querySelector("#diaries")
// var method2 = document.querySelector("#codesign")
// var method3 = document.querySelector("#interviews")

// var method1 = document.querySelector("#speed-dating")
// var method2 = document.querySelector("#card-sorting")
// var method3 = document.querySelector("#survey")
