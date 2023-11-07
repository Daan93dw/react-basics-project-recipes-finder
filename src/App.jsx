import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  // Your state code here
  const [selectedRecipe, setSelectedRecipe] = useState(undefined);

  // const clickHandler = (recipe) => {
  //   return setSelectedRecipe(recipe);
  // };
  return (
    <>
      {selectedRecipe ? (
        <RecipePage
          clickFn={setSelectedRecipe}
          selectedRecipe={selectedRecipe}
        />
      ) : (
        <RecipeListPage clickFn={setSelectedRecipe} />
      )}
    </>
  );
};
