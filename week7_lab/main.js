/* Object Constructors */
function Lion(name, age) {
  this.name = name
  this.age = age
  this.image_alt = "This is a lion named" + this.name
  this.image = "lion.png"
}

function Bear(name, age) {
  this.name = name
  this.age = age
  this.image_alt = "This is a bear named" + this.name
  this.image = "bear.png"
}

function Monkey(name, age) {
  this.name = name
  this.age = age
  this.image_alt = "This is a monkey named" + this.name
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
}
