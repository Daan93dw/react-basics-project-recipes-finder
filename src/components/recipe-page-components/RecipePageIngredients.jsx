// Imports
import { Heading, Text } from "@chakra-ui/react";

export const RecipePageIngredients = ({ recipe, h2 }) => {
  // Component Output
  return (
    <>
      <Heading {...h2}>Ingredients:</Heading>
      {recipe.ingredientLines &&
        recipe.ingredientLines.map((ingredient, i) => {
          return (
            <Text key={i} color={"gray.600"}>
              {ingredient}
            </Text>
          );
        })}
    </>
  );
};
