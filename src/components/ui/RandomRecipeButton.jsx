// Imports
import { LightButton } from "./LightButton";
import { data } from "../../utils/data";

export const RandomRecipeButton = ({ clickFn }) => {
  // Variables
  const randomRecipe = () => clickFn(data.hits[Math.floor(Math.random() * 20)]);
  // Component Output
  return <LightButton clickFn={randomRecipe} text={"Random New Recipe"} />;
};
