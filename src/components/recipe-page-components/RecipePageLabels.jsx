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
      {healthLabels.length != 0 && (
        <>
          <Heading as={"h3"} size={"sm"} {...h3}>
            Health Labels:
          </Heading>

          <TagLister array={healthLabels} colorScheme="green" {...tagStyles} />
        </>
      )}

      {dietLabels.length != 0 && (
        <>
          <Heading as={"h3"} size={"sm"} {...h3}>
            Diet:
          </Heading>
          <TagLister array={dietLabels} colorScheme="purple" {...tagStyles} />
        </>
      )}

      {cautions.length != 0 && (
        <>
          <Heading as={"h3"} size={"sm"} {...h3}>
            Cautions:
          </Heading>

          <TagLister array={cautions} colorScheme="red" {...tagStyles} />
        </>
      )}
    </>
  );
};
