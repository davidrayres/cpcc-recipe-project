console.log(RECIPES)
loadRecipes()

// Load Recipes =====================================================

const loadRecipes = () => {
  RECIPES.forEach((recipe) => {
    const MainContent = document.getElementById('MainContent')

    const recipePanel = document.createElement('div')
    recipePanel.setAttribute('id', recipe.id)
    recipePanel.classList.add('recipe-panel')
    recipePanel.addEventListener('click', (e) => launchNewRecipeModal(e))

    const recipeSummary = `
      <img src='${recipe.imageURL}'>
      <div class="recipe-name">${recipe.name}</div>
      <div class="recipe-description">${recipe.description}</div>
      <a class="recipe-details" data-ref='${recipe.ref}' href="#">delicious details...</a> 
    `
    recipePanel.innerHTML = recipeSummary
    MainContent.append(recipePanel)
  })
}

// Launch Existing Recipe Modal =====================================

const launchNewRecipeModal = (e) => {
  //Create and append ModelContent to Modal -------------------------
  const Modal = document.getElementById('Modal')
  const ModalContent = document.createElement('div')
  ModalContent.setAttribute('id', 'ModalContent')
  Modal.append(ModalContent)

  //Get the object of the recipe clicked from data ------------------
  const thisRecipe = RECIPES.find((recipe) => recipe.id == e.currentTarget.id)
  console.log(thisRecipe)

  //Construct HTML to be inserted into ModalContent -----------------
  const recipeDetails = `
    <div id="CloseModal">&times;</div>

    <div id="ModalHeader">
      <img src="${thisRecipe.imageURL}"/>
      <div>
        <div class="recipe-name">${thisRecipe.name}</div>
        <div class="recipe-description">${thisRecipe.description}</div>
      </div>
    </div>

    <hr />

    <div id="ModalBody">
    
      <div class="recipe-container">

        <div id="IngredientList" class="recipe-content ingredients">
          <div class="recipe-label ingredients">Ingredients</div>
          <ul></ul>
        </div>

        <div id="InstructionList" class="recipe-content steps">
          <div class="recipe-label steps">Instructions</div>
          <ol></ol>
        </div>

      </div>
      
    </div>
    <div id="ModalFooter"></div>
  `

  // Insert HTML into ModalContent ----------------------------------
  ModalContent.innerHTML = recipeDetails

  //Insert Ingredients and Instructions -----------------------------
  //Ingredients...
  const IngredientsUl = document.querySelector('#IngredientList ul')

  thisRecipe.ingredients.forEach((ingredient) => {
    const ingredientLi = document.createElement('li')
    ingredientLi.innerHTML = `${ingredient.quantity} ${ingredient.name}`
    IngredientsUl.append(ingredientLi)
  })

  //Instructions...
  const InstructionsUl = document.querySelector('#InstructionList ol')

  thisRecipe.steps.forEach((step) => {
    const instructionLi = document.createElement('li')
    instructionLi.innerHTML = step
    InstructionsUl.append(instructionLi)
  })

  //Set up Close Modal ----------------------------------------------
  //Close and clear HTML when 'X' is clicked...
  document.getElementById('CloseModal').onclick = function () {
    Modal.style.display = 'none'
    Modal.innerHTML = ''
  }

  //Close and clear HTML when anywhere outside of modal is clicked...
  window.onclick = function (e) {
    if (e.target === Modal) {
      Modal.style.display = 'none'
      Modal.innerHTML = ''
    }
  }

  Modal.style.display = 'block'
}

// Launch Existing Recipe Modal =====================================

const launchExistingNewRecipe = (e) => {
  //Create and append ModelContent to Modal -------------------------
  const Modal = document.getElementById('Modal')
  const ModalContent = document.createElement('div')
  ModalContent.setAttribute('id', 'ModalContent')
  Modal.append(ModalContent)

  //Get the object of the recipe clicked from data ------------------
  const thisRecipe = RECIPES.find((recipe) => recipe.id == e.currentTarget.id)
  console.log(thisRecipe)

  //Construct HTML to be inserted into ModalContent -----------------
  const recipeDetails = `
    <div id="CloseModal">&times;</div>

    <div id="ModalHeader">
      <img src="${thisRecipe.imageURL}"/>
      <div>
        <div class="recipe-name">${thisRecipe.name}</div>
        <div class="recipe-description">${thisRecipe.description}</div>
      </div>
    </div>

    <hr />

    <div id="ModalBody">
    
      <div class="recipe-container">

        <div id="IngredientList" class="recipe-content ingredients">
          <div class="recipe-label ingredients">Ingredients</div>
          <ul></ul>
        </div>

        <div id="InstructionList" class="recipe-content steps">
          <div class="recipe-label steps">Instructions</div>
          <ol></ol>
        </div>

      </div>
      
    </div>
    <div id="ModalFooter"></div>
  `

  // Insert HTML into ModalContent ----------------------------------
  ModalContent.innerHTML = recipeDetails

  //Insert Ingredients and Instructions -----------------------------
  //Ingredients...
  const IngredientsUl = document.querySelector('#IngredientList ul')

  thisRecipe.ingredients.forEach((ingredient) => {
    const ingredientLi = document.createElement('li')
    ingredientLi.innerHTML = `${ingredient.quantity} ${ingredient.name}`
    IngredientsUl.append(ingredientLi)
  })

  //Instructions...
  const InstructionsUl = document.querySelector('#InstructionList ol')

  thisRecipe.steps.forEach((step) => {
    const instructionLi = document.createElement('li')
    instructionLi.innerHTML = step
    InstructionsUl.append(instructionLi)
  })

  //Set up Close Modal ----------------------------------------------
  //Close and clear HTML when 'X' is clicked...
  document.getElementById('CloseModal').onclick = function () {
    Modal.style.display = 'none'
    Modal.innerHTML = ''
  }

  //Close and clear HTML when anywhere outside of modal is clicked...
  window.onclick = function (e) {
    if (e.target === Modal) {
      Modal.style.display = 'none'
      Modal.innerHTML = ''
    }
  }

  Modal.style.display = 'block'
}
