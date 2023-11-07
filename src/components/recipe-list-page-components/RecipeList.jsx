// Imports
import { Grid, GridItem } from "@chakra-ui/react";
import { data } from "../../utils/data.js";
import { RecipeCard } from "./RecipeCard.jsx";

export const RecipeList = ({ searchField, sortChoice, clickFn }) => {
  // Variables
  const userInput = searchField.toLowerCase();
  const sort = sortChoice.toLowerCase();

  // Sorting the recipes based on text input or sorting choices
  let matchedRecipes = data.hits;
  if (sort) {
    matchedRecipes = matchedRecipes.filter((recipe) =>
      recipe.recipe.healthLabels.some((healthLabel) =>
        healthLabel.toLowerCase().includes(sort)
      )
    );
  }
  matchedRecipes = matchedRecipes.filter((recipe) =>
    recipe.recipe.label.toLowerCase().includes(userInput)
  );

  // Component Output
  return (
    <Grid
      templateColumns={{
        base: "1",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gridGap={8}
    >
      {matchedRecipes.map((recipe, i) => {
        return (
          <GridItem
            key={recipe.recipe.label}
            onClick={() => {
              clickFn(matchedRecipes[i]);
            }}
          >
            <RecipeCard recipe={recipe.recipe} />
          </GridItem>
        );
      })}
    </Grid>
  );
};
