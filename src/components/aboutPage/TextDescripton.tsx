import {  Text } from "@chakra-ui/react";

export default function TextDescription(props: {description: string}) {

    return(<Text fontSize={{ "2xl": "2xl", md: "xl" }}>{props.description}</Text>)
}