console.log(RECIPES)

const loadRecipes = () => {
  RECIPES.forEach((recipe) => {
    const recipePanel = document.createElement('div')
    const MainContent = document.getElementById('MainContent')
    recipePanel.classList.add('recipe-panel')

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

loadRecipes()



const recipeLinks = document.querySelectorAll('.recipe-panel')

//add event listener to recipe-panels
recipeLinks.forEach((recipeLink) => {
  recipeLink.addEventListener('click', () => {modal.style.display = 'block'})
})

  // Get the modal
  const modal = document.getElementById('Modal')

    // Get the <span> element that closes the modal
  const closeModel = document.getElementsByClassName('close')[0]

  // When the user clicks on <span> (x), close the modal
  closeModel.onclick = function () {
    modal.style.display = 'none'
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = 'none'
    }
  }







