// Imports
import { Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export const RecipePageIngredients = ({ recipe, h2 }) => {
  // Component Output
  return (
    <>
      <Heading {...h2}>Ingredients:</Heading>
      <UnorderedList color={"gray.600"}>
        {recipe.ingredientLines &&
          recipe.ingredientLines.map((ingredient, i) => {
            return <ListItem key={i}>{ingredient}</ListItem>;
          })}
      </UnorderedList>
    </>
  );
};
