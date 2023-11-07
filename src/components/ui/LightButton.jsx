// Imports
import { Button } from "@chakra-ui/react";

export const LightButton = ({ clickFn, text, ...active }) => {
  // Component Output
  return (
    <Button
      colorScheme={"whiteAlpha"}
      {...active}
      py={3}
      px={6}
      onClick={() => {
        clickFn();
      }}
    >
      {text}
    </Button>
  );
};
