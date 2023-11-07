// Imports
import { Heading } from "@chakra-ui/react";
import { TagLister } from "../ui/TagLister";

export const RecipePageLabels = ({ recipe, h3 }) => {
  // Variables
  const healthLabels = recipe.healthLabels;
  const dietLabels = recipe.dietLabels;
  const cautions = recipe.cautions;

  // Styles
  const tagStyles = {
    size: "md",
    m: 1,
    borderRadius: "full",
  };

  // Component Output
  return (
    <>
      <Heading as={"h3"} size={"sm"} {...h3}>
        Health Labels:
      </Heading>
      {healthLabels && (
        <TagLister array={healthLabels} colorScheme="green" {...tagStyles} />
      )}
      <Heading as={"h3"} size={"sm"} {...h3}>
        Diet:
      </Heading>
      {dietLabels && (
        <TagLister array={dietLabels} colorScheme="purple" {...tagStyles} />
      )}
      <Heading as={"h3"} size={"sm"} {...h3}>
        Cautions:
      </Heading>
      {cautions && (
        <TagLister array={cautions} colorScheme="red" {...tagStyles} />
      )}
    </>
  );
};
