// CLASS: Recipe ====================================================
class Recipe {
  constructor(name, descr, ingreds, steps) {
    this.name = name
    this.decsr = descr
    this.ingrds = ingreds
    this.steps = steps
  }
}

//FUNCTION: Create New Recipe =======================================

let newName = 'A New Recipe'
let newDescr =
  'ipsum lorem klhlk h glkhl kih lkjhlkj fgd gcj ljhgljk kljj fgfhe srew iytf ljgjlglkgtyi iytfiuyou ;kjh;kj ohpiu y'
let newIngreds = [
  'ipsum lorem klhlk h glkhl kih lkjhlkj fgd gcj ljhgljk kljj fgfhe srew iytf ljgjlglkgtyi iytfiuyou ;kjh;kj ohpiu y',
  'ipsum lorem klhlk h glkhl kih lkjhlkj fgd gcj ljhgljk kljj fgfhe srew iytf ljgjlglkgtyi iytfiuyou ;kjh;kj ohpiu y',
  'ipsum lorem klhlk h glkhl kih lkjhlkj fgd gcj ljhgljk kljj fgfhe srew iytf ljgjlglkgtyi iytfiuyou ;kjh;kj ohpiu y',
  'ipsum lorem klhlk h glkhl kih lkjhlkj fgd gcj ljhgljk kljj fgfhe srew iytf ljgjlglkgtyi iytfiuyou ;kjh;kj ohpiu y',
]
let newSteps = [
  'ipsum lorem klhlk h glkhl kih lkjhlkj fgd gcj ljhgljk kljj fgfhe srew iytf ljgjlglkgtyi iytfiuyou ;kjh;kj ohpiu y',
  'ipsum lorem klhlk h glkhl kih lkjhlkj fgd gcj ljhgljk kljj fgfhe srew iytf ljgjlglkgtyi iytfiuyou ;kjh;kj ohpiu y',
  'ipsum lorem klhlk h glkhl kih lkjhlkj fgd gcj ljhgljk kljj fgfhe srew iytf ljgjlglkgtyi iytfiuyou ;kjh;kj ohpiu y',
  'ipsum lorem klhlk h glkhl kih lkjhlkj fgd gcj ljhgljk kljj fgfhe srew iytf ljgjlglkgtyi iytfiuyou ;kjh;kj ohpiu y',
]

const CreateNewRecipe = () => {
  const newRecipe = new Recipe(newName, newDescr, newIngreds, newSteps)
  RECIPES.unshift(newRecipe)
  Modal.style.display = 'none'
  Modal.innerHTML = ''

  console.log(newRecipe)
  console.log(RECIPES)

  loadRecipes()
}
