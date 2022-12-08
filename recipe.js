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

let newName
let newDescr
const newIngreds = []
const newSteps = []

const CreateNewRecipe = () => {
  const newRecipe = new Recipe(newName, newDescr, newIngreds, newSteps)
  RECIPES.unshift(newRecipe)
  Modal.style.display = 'none'
  Modal.innerHTML = ''

  console.log(newRecipe)
  console.log(RECIPES)

  loadRecipes()
}

const AddIngredient = (newIngredInput) => {
  const ingredUl = document.querySelector('#IngredientList ul')
  const ingredLi = document.createElement('li')
  let newIngred = newIngredInput.value
  ingredLi.innerHTML = newIngred
  ingredUl.append(ingredLi)
  newIngredInput.value = ''
  newIngredInput.focus()
  newIngreds.push(newIngred)
}

const AddStep = (newStepInput) => {
  const stepUl = document.querySelector('#InstructionList ol')
  const stepLi = document.createElement('li')
  let newStep = newStepInput.value
  stepLi.innerHTML = newStep
  stepUl.append(stepLi)
  newStepInput.value = ''
  newStepInput.focus()
  newSteps.push(newStep)
}
