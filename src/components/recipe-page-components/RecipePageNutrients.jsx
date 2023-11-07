// Imports
import { Heading, ListItem, UnorderedList, Text } from "@chakra-ui/react";

export const RecipePageNutrients = ({ recipe, h3 }) => {
  // Variables
  const calories = recipe.totalNutrients.ENERC_KCAL;
  const carbs = recipe.totalNutrients.CHOCDF;
  const protein = recipe.totalNutrients.PROCNT;
  const fat = recipe.totalNutrients.FAT;
  const cholesterol = recipe.totalNutrients.CHOLE;
  const sodium = recipe.totalNutrients.NA;

  // Component Output
  return (
    <>
      <Heading as={"h3"} size={"sm"} {...h3}>
        Total Nutrients:
      </Heading>
      <UnorderedList
        styleType={"none"}
        display={"flex"}
        m={1}
        gap={6}
        flexWrap={"wrap"}
      >
        {calories && (
          <ListItem color={"gray.600"}>
            <Text fontWeight={"semibold"}>Calories:</Text>
            {`${Math.round(calories.quantity)} ${calories.unit}`}
          </ListItem>
        )}
        {carbs && (
          <ListItem color={"gray.600"}>
            <Text fontWeight={"semibold"}>Carbs</Text>
            {`${Math.round(carbs.quantity)} ${carbs.unit}`}
          </ListItem>
        )}
        {protein && (
          <ListItem color={"gray.600"}>
            <Text fontWeight={"semibold"}>Protein</Text>
            {`${Math.round(protein.quantity)} ${protein.unit}`}
          </ListItem>
        )}
        {fat && (
          <ListItem color={"gray.600"}>
            <Text fontWeight={"semibold"}>Fat</Text>
            {`${Math.round(fat.quantity)} ${fat.unit}`}
          </ListItem>
        )}
        {cholesterol && (
          <ListItem color={"gray.600"}>
            <Text fontWeight={"semibold"}>Cholesterol</Text>
            {`${Math.round(cholesterol.quantity)} ${cholesterol.unit}`}
          </ListItem>
        )}
        {sodium && (
          <ListItem color={"gray.600"}>
            <Text fontWeight={"semibold"}>Sodium</Text>
            {`${Math.round(sodium.quantity)} ${sodium.unit}`}
          </ListItem>
        )}
      </UnorderedList>
    </>
  );
};
