const apiKey = '4a1d2fa6c3aa48d5a81b860abfc2474c';
const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch';
const resultsContainer = document.getElementById('results');
const recipeDetail = document.getElementById('recipeDetail');
const recipeInfo = document.getElementById('recipeInfo');
const backButton = document.getElementById('backButton');
const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById('searchButton');

let page = 1;

// Function to fetch recipes
async function fetchRecipes(query, page = 1) {
  const response = await fetch(`${baseUrl}?apiKey=${apiKey}&query=${query}&number=9&page=${page}`);
  const data = await response.json();
  return data.results;
}

// Function to display recipes
function displayRecipes(recipes) {
  resultsContainer.innerHTML = '';
  recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
      <h3>${recipe.title}</h3>
    `;
    recipeCard.addEventListener('click', () => showRecipeDetail(recipe));
    resultsContainer.appendChild(recipeCard);
  });
}

// Function to show recipe details
function showRecipeDetail(recipe) {
  recipeDetail.hidden = false;
  

  recipeInfo.innerHTML = `
    <h2>${recipe.title}</h2>
    <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
    <h3>Ingredients:</h3>
    <ul>
      ${recipe.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('')}
    </ul>
    <h3>Instructions:</h3>
    <p>${recipe.instructions || 'No instructions available.'}</p>
  `;
}

// Back button functionality
backButton.addEventListener('click', () => {
  recipeDetail.hidden = true;
  resultsContainer.hidden = false;
});

// Search functionality
searchButton.addEventListener('click', async () => {
  const query = searchBar.value.trim();
  if (query) {
    const recipes = await fetchRecipes(query);
    displayRecipes(recipes);
  }
});

// Handle search via enter key
searchBar.addEventListener('keypress', async (e) => {
  if (e.key === 'Enter') {
    const query = searchBar.value.trim();
    if (query) {
      const recipes = await fetchRecipes(query);
      displayRecipes(recipes);
    }
  }
});

// Infinite scroll (load more recipes)
window.addEventListener('scroll', async () => {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
    page++;
    const query = searchBar.value.trim();
    if (query) {
      const recipes = await fetchRecipes(query, page);
      displayRecipes(recipes);
    }
  }
});
