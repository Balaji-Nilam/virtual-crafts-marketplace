// RecipeList.js (update)
import React, { useEffect, useState } from 'react';
import RecipeDisplay from './RecipeDisplay';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import { recipes } from './sampleData';

const RecipeList = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(5);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setRecipeList(recipes);
      setCurrentRecipe(recipes[0]);
    } catch (err) {
      setError('Failed to fetch recipes.');
    }
  }, []);

  const filteredRecipes = recipeList.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {error ? <p>{error}</p> : null}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h1>Recipe List</h1>
      {currentRecipes.map((recipe) => (
        <button key={recipe.id} onClick={() => setCurrentRecipe(recipe)}>
          {recipe.title}
        </button>
      ))}
      {currentRecipe && <RecipeDisplay recipe={currentRecipe} />}
      <Pagination
        recipesPerPage={recipesPerPage}
        totalRecipes={filteredRecipes.length}
        paginate={paginate}
      />
    </div>
  );
};

export default RecipeList;
