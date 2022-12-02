console.log(RECIPES)

const loadRecipes = () => {
  RECIPES.forEach((recipe) => {
    const MainContent = document.getElementById('MainContent')

    const recipePanel = document.createElement('div')
    recipePanel.setAttribute('id', recipe.id)
    recipePanel.classList.add('recipe-panel')
    recipePanel.addEventListener('click', (e) => launchRecipeModal(e))

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

const launchRecipeModal = (e) => {
  const Modal = document.getElementById('Modal')
  Modal.innerHTML = ''

  const ModalContent = document.createElement('div')
  ModalContent.setAttribute('id', 'ModalContent')

  const thisRecipe = RECIPES.find((recipe) => recipe.id == e.currentTarget.id)
  console.log(thisRecipe)

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

        <div class="recipe-content ingredients">
          <div class="recipe-label ingredients">Ingredients</div>
          <ul>
            <li>ingredient item</li>
            <li>ingredient item</li>
            <li>ingredient item</li>
            <li>ingredient item</li>
            <li>ingredient item</li>
            <li>ingredient item</li>
          </ul>
        </div>

        <div class="recipe-content steps">
          <div class="recipe-label steps">Instructions</div>
          <ul>
            <li>ingredient item</li>
            <li>ingredient item</li>
            <li>ingredient item</li>
            <li>ingredient item</li>
            <li>ingredient item</li>
            <li>ingredient item</li>
          </ul>
        </div>

      </div>
      
      <div id="ModalFooter"></div>
    </div>
  `
  ModalContent.innerHTML = recipeDetails
  Modal.append(ModalContent)

  // Get the <span> element that closes the modal
  const CloseModal = document.getElementById('CloseModal')

  // When the user clicks on <span> (x), close the modal
  CloseModal.onclick = function () {
    Modal.style.display = 'none'
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (e) {
    if (e.target === Modal) {
      Modal.style.display = 'none'
    }
  }

  Modal.style.display = 'block'
}

loadRecipes()
