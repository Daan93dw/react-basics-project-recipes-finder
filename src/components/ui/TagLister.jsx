// Imports
import { Tag } from "@chakra-ui/react";

export const TagLister = ({ array, ...props }) => {
  // Component Output
  return array.map((tag, i) => (
    <Tag key={i} {...props}>
      {tag}
    </Tag>
  ));
};
