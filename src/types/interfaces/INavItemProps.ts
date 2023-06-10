import { FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { ReactText } from "react";

interface INavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}

export default INavItemProps;
