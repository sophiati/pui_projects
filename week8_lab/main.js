/* Object Constructors */
function Lion(name, age) {
  this.name = name
  this.age = age
  this.image_alt = "This is a lion named " + this.name
  this.image = "lion.png"
}

function Bear(name, age) {
  this.name = name
  this.age = age
  this.image_alt = "This is a bear named " + this.name
  this.image = "bear.png"
}

function Monkey(name, age) {
  this.name = name
  this.age = age
  this.image_alt = "This is a monkey named " + this.name
  this.image = "monkey.png"
}

var animals = [new Lion(), new Bear(), new Monkey()]
var animalNames = [
  "simba",
  "pooh",
  "george",
  "nala",
  "charmin",
  "timon",
  "pumba",
  "sam",
]

function generateRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex)
}

function generateRandomName() {
  let randomIndex = generateRandomIndex(animalNames.length)
  return animalNames[randomIndex]
}

function generateRandomAge() {
  return generateRandomIndex(50)
}

function generateRandomAnimal() {
  let randomIdx = generateRandomIndex(animals.length)
  let randomAnimal = animals[randomIdx]

  if (randomAnimal instanceof Lion) {
    return new Lion(generateRandomName(), generateRandomAge())
  } else if (randomAnimal instanceof Bear) {
    return new Bear(generateRandomName(), generateRandomAge())
  } else if (randomAnimal instanceof Monkey) {
    return new Monkey(generateRandomName(), generateRandomAge())
  }
}

var saveChecker = localStorage.getItem("savedAnimal")

function onLoad() {
  var animal = JSON.parse(localStorage.getItem("savedAnimal"))
  if (animal === null) {
    document.getElementById("storage-button").textContent = "Save Animal"
    animal = generateRandomAnimal()
  } else {
    document.getElementById("storage-button").textContent = "Clear Animal"
  }
  var animal = generateRandomAnimal()
  console.log(animal)
  document.getElementById("animal-properties").textContent =
    animal.name + ", " + animal.age + " years old"
  var imageTag = document.getElementById("animal-img")
  imageTag.setAttribute("src", animal.image)
  imageTag.setAttribute("alt", animal.image_alt)

  var savedAnimal = { name: animal.name, age: animal.age }
  localStorage.setItem("myAnimal", JSON.stringify(savedAnimal))
  JSON.parse(localStorage.getItem("myAnimal"))
}

function onClick() {
  if (saveChecker === null) {
    localStorage.removeItem("savedAnimal")
    document.getElementById("note").textContent = "Saved!"
    localStorage.setItem("savedAnimal", "1")
  } else {
    localStorage.setItem("savedAnimal", JSON.stringify(animal))
    document.getElementById("note").textContent = "Cleared!"
    localStorage.removeItem("savedAnimal")
  }
}
