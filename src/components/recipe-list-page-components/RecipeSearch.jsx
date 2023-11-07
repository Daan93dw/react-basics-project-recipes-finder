// Imports
import { RecipeList } from "./RecipeList.jsx";
import { TextInputField } from "../ui/TextInputField.jsx";
import { useState } from "react";
import { Center } from "@chakra-ui/react";
import { LightButton } from "../ui/LightButton.jsx";

export const RecipeSearch = ({ clickFn }) => {
  // Variables
  const [searchField, setSearchField] = useState("");
  const [sortChoice, setSortChoice] = useState("");

  // Function that sets searchfield to typed input
  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  // Styles
  const activeButton = {
    bg: "gray.100",
    color: "darkolivegreen",
  };

  // Component Output
  return (
    <>
      {" "}
      <Center
        w={"100%"}
        mb={8}
        p={4}
        gap={4}
        bg={"darkolivegreen"}
        borderRadius={"15px"}
        flexDir={{ base: "column", md: "row" }}
      >
        <TextInputField
          changeFn={handleChange}
          background={"gray.300"}
          width={{ base: "80%", sm: "60%", md: "40%", lg: "30%" }}
          placeholder="Find a recipe"
        />
        <Center gap={4} flexDir={{ base: "column", sm: "row" }}>
          {sortChoice === "vegan" ? (
            <LightButton
              clickFn={() => setSortChoice("")}
              text={"Vegan"}
              {...activeButton}
            />
          ) : (
            <LightButton
              clickFn={() => {
                setSortChoice("vegan");
              }}
              text={"Vegan"}
            />
          )}
          {sortChoice === "vegetarian" ? (
            <LightButton
              clickFn={() => setSortChoice("")}
              text={"Vegetarian"}
              {...activeButton}
            />
          ) : (
            <LightButton
              clickFn={() => setSortChoice("vegetarian")}
              text={"Vegetarian"}
            />
          )}
          {sortChoice === "" ? (
            <LightButton
              clickFn={() => setSortChoice("")}
              text={"All"}
              {...activeButton}
            />
          ) : (
            <LightButton clickFn={() => setSortChoice("")} text={"All"} />
          )}
        </Center>
      </Center>
      <RecipeList
        searchField={searchField}
        sortChoice={sortChoice}
        clickFn={clickFn}
      />
    </>
  );
};
