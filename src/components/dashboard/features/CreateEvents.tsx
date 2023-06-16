import { Box, Flex, Text, Button, useColorModeValue } from "@chakra-ui/react"
import { BgImage } from "@/images";
import { useState } from "react";

export default function CreateEvents() {
    const eventsBackgroundImage = BgImage.events;
    const [isHovered, setIsHovered] = useState(false);
    const buttonBackgroundColor = useColorModeValue("#EDF2F7", "#EDF2F7")

    return (
        <Box display="flex"
        alignItems="center"
        justifyContent="center"
        bgImage={eventsBackgroundImage}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        minH={"300px"}
        minW={"300px"}
        w={"35%"}
        h={"70%"}
        position="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        borderRadius={"1rem"}>
            <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            opacity={isHovered ? 1 : 0}
            transition="opacity 0.3s ease-in-out"
            backdropFilter="blur(2px)"
          />
          <Box
            position="absolute"
            top={isHovered ? "-10px" : 0}
            left={isHovered ? "-10px" : 0}
            right={isHovered ? "-10px" : 0}
            bottom={isHovered ? "-10px" : 0}
            transition="all 0.3s ease-in-out"
            transform={isHovered ? "scale(1.1)" : "scale(1)"}
            zIndex={1}
          />
            <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                <Text fontSize={"2xl"} textAlign={"center"} position={"relative"} zIndex={"1"} color={"black"} fontWeight={"bold"}>
                    Twórz nowe wydarzenia i przypomnienia
                </Text>
                <Flex flexDirection={{ base: "column", xl: "row" }} alignItems={"center"} mt={"2rem"} gap={"1.2rem"}>
                    <Button w={"fit-content"} color={"black"} bgColor={buttonBackgroundColor}>
                        <Text>
                            Nowe wydarzenie
                        </Text>
                    </Button>
                    <Button w={"fit-content"} color={"black"} bgColor={buttonBackgroundColor}>
                        <Text>
                            Nowe Przypomnienie
                        </Text>
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
}