// Imports
import { Center } from "@chakra-ui/react";
import { RandomRecipeButton } from "../ui/RandomRecipeButton";

export const ListPageFooter = ({ clickFn }) => {
  // Component Output
  return (
    <Center
      bg={"darkolivegreen"}
      minH={"8vh"}
      flexDir={{ base: "column", sm: "row" }}
    >
      <RandomRecipeButton clickFn={clickFn} text={"Random New Recipe"} />
    </Center>
  );
};
