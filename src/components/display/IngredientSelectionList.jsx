import React from 'react';
import { Grid2 } from '@mui/material'; // material-ui 라이브러리 사용
import IngredientItem from './IngredientItem';

const IngredientSelectionList = ({
  step,
  ingredients,
  selectedIngredients,
  preferences,
  dislikedIngredients,
  handleIngredientChange,
}) => {
  return (
    <Grid2 container spacing={2} justifyContent="center">
      {ingredients.map((ingredient) => (
        <IngredientItem
          key={ingredient.id}
          step={step}
          ingredient={ingredient}
          selectedIngredients={selectedIngredients}
          preferences={preferences}
          dislikedIngredients={dislikedIngredients}
          handleIngredientChange={handleIngredientChange}
        />
      ))}
    </Grid2>
  );
};

export default IngredientSelectionList;