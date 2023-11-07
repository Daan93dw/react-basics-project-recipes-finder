// Imports
import { Heading, Box, Container } from "@chakra-ui/react";
import { RecipeSearch } from "../components/recipe-list-page-components/RecipeSearch";
import { ListPageFooter } from "../components/recipe-list-page-components/ListPageFooter";

export const RecipeListPage = ({ clickFn }) => {
  // Component Output
  return (
    <Box minH={"100vh"} bg={"gray.700"}>
      <Container maxW={"1200px"} p={0} bg={"gray.100"}>
        <Box
          minH={"92vh"}
          display={"flex"}
          alignItems={"center"}
          flexDir={"column"}
          p={{ base: "6", sm: "12", lg: "16" }}
        >
          <Heading m={8} color={"gray.600"}>
            Check out these amazing recipes!
          </Heading>
          <RecipeSearch clickFn={clickFn} />
        </Box>

        <ListPageFooter clickFn={clickFn} w={"100%"} />
      </Container>
    </Box>
  );
};
