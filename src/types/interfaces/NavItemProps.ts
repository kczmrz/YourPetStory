import { FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { ReactText } from "react";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: any;
}

export default NavItemProps;
