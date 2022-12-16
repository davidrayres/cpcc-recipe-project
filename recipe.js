// CLASS: Recipe ====================================================
class Recipe {
  constructor(id, imageURL, name, description, ingredients, steps) {
    this.id = id
    this.imageURL = imageURL
    this.name = name
    this.description = description
    this.ingredients = ingredients
    this.steps = steps
  }
}

//FUNCTION: Create New Recipe =======================================
const newIngreds = []
const newSteps = []

console.log(Math.max(...RECIPES.map(recipe => recipe.id)) + 1)


const CreateNewRecipe = () => {

  const id = Math.max(...RECIPES.map(recipe => recipe.id)) + 1 
  const newImage = 'images/image-placeholder.png'
  const newName = document.getElementById('NewRecipeName').value
  const newDescr = document.getElementById('NewRecipeDescr').value

  const newRecipe = new Recipe(id, newImage, newName, newDescr, newIngreds, newSteps)

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
  newIngreds.push({name: newIngred})
}

const AddStep = (newStepInput) => {
  const stepOl = document.querySelector('#InstructionList ol')
  const stepLi = document.createElement('li')
  let newStep = newStepInput.value
  stepLi.innerHTML = newStep
  stepOl.append(stepLi)
  newStepInput.value = ''
  newStepInput.focus()
  newSteps.push(newStep)
}
