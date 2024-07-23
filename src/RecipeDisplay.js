// RecipeDisplay.js
import React from 'react';

const RecipeDisplay = ({ recipe }) => (
  <div className="recipe-display">
    <h1>{recipe.title}</h1>
    <p>{recipe.description}</p>
    <h3>Ingredients</h3>
    <ul>
      {recipe.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
    <h3>Instructions</h3>
    <p>{recipe.instructions}</p>
  </div>
);

export default RecipeDisplay;
