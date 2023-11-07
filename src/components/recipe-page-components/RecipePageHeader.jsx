// Imports
import { Box } from "@chakra-ui/react";
import { TagLister } from "../ui/TagLister";

export const RecipePageHeader = ({ recipe }) => {
  // Variables
  const imgSrc = recipe.image;
  const mealType = recipe.mealType;
  const dishType = recipe.dishType;
  const cuisineType = recipe.cuisineType;

  // Styles
  const tagStyles = {
    variant: "solid",
    size: { base: "md", md: "lg" },
    m: 2,
    py: 1.5,
    pb: 2,
    px: 4,
    border: "3px solid white",
    borderRadius: "full",
  };

  // Component Output
  return (
    <Box h={"27vh"} bgImg={`url(${imgSrc})`} bgPos={"center"} bgSize={"cover"}>
      <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"}>
        <TagLister array={mealType} colorScheme="green" {...tagStyles} />
        <TagLister array={dishType} colorScheme="blue" {...tagStyles} />
        <TagLister array={cuisineType} colorScheme="purple" {...tagStyles} />
      </Box>
    </Box>
  );
};
