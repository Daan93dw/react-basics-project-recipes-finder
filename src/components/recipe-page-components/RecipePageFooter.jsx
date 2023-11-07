// Imports
import { Center } from "@chakra-ui/react";
import { LightButton } from "../ui/LightButton";
import { RandomRecipeButton } from "../ui/RandomRecipeButton";

export const RecipePageFooter = ({ clickFn }) => {
  // Component Output
  return (
    <Center
      bg={"darkolivegreen"}
      minH={"8vh"}
      flexDir={{ base: "column", sm: "row" }}
      gap={4}
    >
      <RandomRecipeButton clickFn={clickFn} text={"Random New Recipe"} />
      <LightButton clickFn={clickFn} text={"Back to recipe overview"} />
    </Center>
  );
};
