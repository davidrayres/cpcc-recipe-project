//show me the data ==================================================
console.log(RECIPES)

// const ModalInserts = {
//   existing: `
//     <div id="CloseModal">&times;</div>

//     <div id="ModalHeader">
//       <img src="${thisRecipe.imageURL}"/>
//       <div>
//         <div class="modal-recipe-name">${thisRecipe.name}</div>
//         <div class="modal-recipe-description">${thisRecipe.description}</div>
//       </div>
//     </div>

//     <hr />

//     <div id="ModalBody">
//       <div class="modal-recipe-container">
//         <div id="IngredientList" class="modal-recipe-content ingredients">
//           <div class="modal-recipe-label ingredients">Ingredients</div>
//           <ul></ul>
//         </div>
//         <div id="InstructionList" class="modal-recipe-content steps">
//           <div class="modal-recipe-label steps">Instructions</div>
//           <ol></ol>
//         </div>
//       </div>
//     </div>
//     <div id="ModalFooter"></div>
//   `,

//   new: `
//     <div id="CloseModal">&times;</div>
//     <div id="ModalHeader">
//       <img src="images/image-placeholder.png" />
//       <div style="flex: 1">
//         <input type="text" placeholder="Recipe Name" />
//         <textarea placeholder="Add description..." rows="5"></textarea>
//       </div>
//     </div>

//     <hr />

//     <div id="ModalBody">
//       <div class="modal-recipe-container">
//         <div id="IngredientList" class="modal-recipe-content">
//           <div class="modal-recipe-label">Ingredients</div>

//           <div class="modal-recipe-uibox">
//             <input type="text" placeholder="Add an ingredient..." />
//             <button>+</button>
//           </div>

//           <ul></ul>
//         </div>

//         <div id="InstructionList" class="modal-recipe-content">
//           <div class="modal-recipe-label">Instructions</div>

//           <div class="modal-recipe-uibox">
//             <input type="text" placeholder="Add an instruction..." />
//             <button>+</button>
//           </div>

//           <ol></ol>
//         </div>
//       </div>
//     </div>

//     <div id="ModalFooter">
//       <button id="CreateNewRecipe">Save This Deliciousness</button>
//     </div>
//   `,
// }

//Attach event listeners ============================================
//Add Button...
document
  .getElementById('AddButton')
  .addEventListener('click', (e) => launchNewRecipeModal(e))

//FUNCTION: Load Recipes Function ===================================
const loadRecipes = () => {
  //get Main Content section
  const MainContent = document.getElementById('MainContent')
  MainContent.innerHTML = ''

  RECIPES.forEach((recipe) => {
    //construct recipe panel (attach event listent)
    const recipePanel = document.createElement('div')
    recipePanel.setAttribute('id', recipe.id)
    recipePanel.classList.add('recipe-panel')
    recipePanel.addEventListener('click', (e) => launchExistingRecipeModal(e))

    //set HTML for recipe panel
    const recipeSummary = `
      <img src='${recipe.imageURL}'>
      <div class="recipe-name">${recipe.name}</div>
      <div class="recipe-description">${recipe.description}</div>
      <a class="recipe-details" data-ref='${recipe.ref}' href="#">delicious details...</a> 
    `
    //insert HTML into recipe panel
    recipePanel.innerHTML = recipeSummary

    //attach recipe panel to main content
    MainContent.append(recipePanel)
  })
}

//Load existing recipes to the page =================================
loadRecipes()

//FUNCTION: Launch Existing Recipe Modal ============================
const launchExistingRecipeModal = (e) => {
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
        <div class="modal-recipe-name">${thisRecipe.name}</div>
        <div class="modal-recipe-description">${thisRecipe.description}</div>
      </div>
    </div>

    <hr />

    <div id="ModalBody">
      <div class="modal-recipe-container">
        <div id="IngredientList" class="modal-recipe-content ingredients">
          <div class="modal-recipe-label ingredients">Ingredients</div>
          <ul></ul>
        </div>
        <div id="InstructionList" class="modal-recipe-content steps">
          <div class="modal-recipe-label steps">Instructions</div>
          <ol></ol>
        </div>
      </div>
    </div>
    <div id="ModalFooter"></div>
  `

  //Insert HTML into ModalContent ----------------------------------
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

//FUNCTION: Launch New Recipe Modal =================================
const launchNewRecipeModal = (e) => {
  //Create and append ModelContent to Modal ----------------------
  const Modal = document.getElementById('Modal')
  const ModalContent = document.createElement('div')
  ModalContent.setAttribute('id', 'ModalContent')
  Modal.append(ModalContent)

  //Construct HTML to be inserted into ModalContent --------------
  const recipeInputs = `
    <div id="CloseModal">&times;</div>
    <div id="ModalHeader">
      <img src="images/image-placeholder.png" />
      <div style="flex: 1">
        <input type="text" placeholder="Recipe Name" />
        <textarea placeholder="Add description..." rows="5"></textarea>
      </div>
    </div>

    <hr />

    <div id="ModalBody">
      <div class="modal-recipe-container">
        <div id="IngredientList" class="modal-recipe-content">
          <div class="modal-recipe-label">Ingredients</div>

          <div class="modal-recipe-uibox">
            <input type="text" placeholder="Add an ingredient..." />
            <button id="AddIngred">+</button>
          </div>

          <ul></ul>
        </div>

        <div id="InstructionList" class="modal-recipe-content">
          <div class="modal-recipe-label">Instructions</div>

          <div class="modal-recipe-uibox">
            <input type="text" placeholder="Add an instruction..." />
            <button id="AddStep">+</button>
          </div>

          <ol></ol>
        </div>
      </div>
    </div>

    <div id="ModalFooter">
      <button id="CreateNewRecipe">Save This Deliciousness</button>
    </div>
  `
  //Insert HTML into ModalContent -----------------------------------
  ModalContent.innerHTML = recipeInputs

  //Attach Event Listeners ------------------------------------------
  document
    .getElementById('CreateNewRecipe')
    .addEventListener('input', (e) => {
      

    })


  //Save Button...
  document
    .getElementById('CreateNewRecipe')
    .addEventListener('click', (e) => CreateNewRecipe(e))

  //Add Ingred Button...
  document.getElementById('AddIngred').addEventListener('click', (e) => {
    const newIngredInput = e.target.previousElementSibling
    AddIngredient(newIngredInput)
  })

  //Add Step Button...
  document.getElementById('AddStep').addEventListener('click', (e) => {
    const newStepInput = e.target.previousElementSibling
    AddStep(newStepInput)
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
