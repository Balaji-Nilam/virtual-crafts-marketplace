// RecipeDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { recipes } from './sampleData';
import RecipeDisplay from './RecipeDisplay';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  return (
    <div>
      {recipe ? <RecipeDisplay recipe={recipe} /> : <p>Recipe not found</p>}
    </div>
  );
};

export default RecipeDetail;
