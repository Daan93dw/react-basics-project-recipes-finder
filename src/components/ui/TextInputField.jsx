// Imports
import { Input } from "@chakra-ui/react";

export const TextInputField = ({ changeFn, ...props }) => {
  // Component Output
  return (
    <>
      <Input onChange={changeFn} {...props} />
    </>
  );
};
