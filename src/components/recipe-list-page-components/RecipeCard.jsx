// Imports
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import { TagLister } from "../ui/TagLister";

export const RecipeCard = ({ recipe }) => {
  // Variables
  const imgSrc = recipe.image;
  const dietLabels = recipe.dietLabels.map((dietLabel) => dietLabel);
  const cautions = recipe.cautions.map((caution) => caution);
  const dishType = recipe.dishType.map((dishType) => dishType.toUpperCase());
  const mealType = recipe.mealType.map((mealType) => mealType.toUpperCase());
  const meatlessRecipes = recipe.healthLabels.filter((recipe) =>
    recipe.toLowerCase().includes("veg")
  );

  console.log(mealType[0]);

  const getCardBG = () => {
    if (mealType.length <= 1) {
      switch (mealType[0]) {
        case "BREAKFAST":
          return "darkblue";
        case "SNACK":
          return "darkred";
        default:
          return "darkolivegreen";
      }
    }
    return "gray";
  };

  //Styles
  const tagStyles = {
    size: "md",
    m: 1,
    borderRadius: "full",
  };

  // Component Output
  return (
    <Card
      variant={"elevated"}
      shadow={"lg"}
      cursor={"pointer"}
      _hover={{
        shadow: "dark-lg",
      }}
      minH={"520px"}
      borderRadius={"15px"}
      transition={"300ms"}
    >
      <CardHeader borderRadius={"15px 15px 0px 0px"}>
        <Image
          src={imgSrc}
          h={"200px"}
          objectFit="cover"
          w={"100%"}
          borderRadius={"15px"}
        />
      </CardHeader>

      <CardBody>
        {" "}
        <Box>
          <Text fontSize={14} fontWeight={"bold"} color={"darkgrey"}>
            {dishType}{" "}
          </Text>
          <Heading as={"h3"} mb={4} size={"md"} color={"gray.700"}>
            {recipe.label}
          </Heading>
        </Box>
        <Box mb={4}>
          <TagLister
            array={meatlessRecipes}
            colorScheme="green"
            {...tagStyles}
          />
          <TagLister colorScheme="purple" array={dietLabels} {...tagStyles} />
          <TagLister colorScheme="red" array={cautions} {...tagStyles} />
        </Box>
      </CardBody>

      <CardFooter
        bg={getCardBG}
        borderRadius={"0px 0px 15px 15px"}
        justifyContent={"center"}
        color={"whiteAlpha.900"}
        fontWeight={"semibold"}
      >
        <Text>{mealType && mealType.join(" ")}</Text>
      </CardFooter>
    </Card>
  );
};
