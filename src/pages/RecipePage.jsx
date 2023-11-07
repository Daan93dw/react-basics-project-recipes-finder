// Imports
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { RecipePageHeader } from "../components/recipe-page-components/RecipePageHeader";
import { RecipePageIngredients } from "../components/recipe-page-components/RecipePageIngredients";
import { RecipePageLabels } from "../components/recipe-page-components/RecipePageLabels";
import { RecipePageNutrients } from "../components/recipe-page-components/RecipePageNutrients";
import { RecipePageFooter } from "../components/recipe-page-components/RecipePageFooter";

export const RecipePage = ({ clickFn, selectedRecipe }) => {
  // Variables
  const recipe = selectedRecipe.recipe;
  const recipeName = recipe.label;
  let cookTime = `${recipe.totalTime} Minutes`;
  if (recipe.totalTime === 0) {
    cookTime = `Sorry, this isn't listed.`;
  }
  const servings = recipe.yield;

  // Styles
  const headerStyles = {
    color: "gray.600",
    bg: "white",
    borderRadius: "15px 5px",
    mt: 4,
    mb: ".5em",
    p: "10px",
    border: "2px solid darkolivegreen ",
    transition: "300ms",
    _hover: {
      border: "2px solid orange",
    },
  };

  const hStyle = {
    h1: {
      ...headerStyles,
      size: "lg",
      as: "h1",
    },
    h2: {
      ...headerStyles,
      size: "md",
      as: "h2",
    },
    h3: {
      ...headerStyles,
      size: "sm",
      as: "h3",
    },
  };
  // Component Output
  return (
    <Box w={"100%"} minH={"100vh"} bg={"gray.700"}>
      <Container maxW={"1200px"} p={0} bg={"gray.100"}>
        {/* TOP SECTION OF THE PAGE */}
        <RecipePageHeader recipe={recipe} />
        <Box
          display={"flex"}
          flexDir={{ base: "column", md: "row" }}
          maxW={"100%"}
          minH={"65vh"}
          p={{ base: "6", sm: "12", lg: "16" }}
          gap={12}
        >
          {/* LEFT SECTION OF THE PAGE */}
          <Box w={{ base: "100%", md: "50%" }} my={{ base: 1, md: 4 }}>
            <Heading {...hStyle.h1}>{recipeName}</Heading>
            <Text color={"gray.600"}>Cooking time: {cookTime} </Text>
            <Text color={"gray.600"}>Servings: {servings}</Text>
            <RecipePageIngredients recipe={recipe} h2={hStyle.h2} />
          </Box>
          {/* RIGHT SECTION OF THE PAGE */}
          <Box w={{ base: "100%", md: "50%" }} my={{ base: 1, md: 4 }}>
            <RecipePageLabels recipe={recipe} h3={hStyle.h3} />
            <RecipePageNutrients recipe={recipe} h3={hStyle.h3} />
          </Box>
        </Box>

        {/* BOTTOM SECTION OF THE PAGE */}
        <RecipePageFooter clickFn={clickFn} />
      </Container>
    </Box>
  );
};
