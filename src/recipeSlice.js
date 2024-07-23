// recipeSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipeList: [],
    currentRecipe: null,
    searchTerm: '',
    filters: {},
  },
  reducers: {
    setRecipes: (state, action) => {
      state.recipeList = action.payload;
    },
    setCurrentRecipe: (state, action) => {
      state.currentRecipe = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setRecipes, setCurrentRecipe, setSearchTerm, setFilters } = recipeSlice.actions;

export default recipeSlice.reducer;
