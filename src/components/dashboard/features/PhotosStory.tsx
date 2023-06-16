import { Box, Text, Flex, Button, useColorModeValue } from "@chakra-ui/react"
import { BgImage } from "@/images";
import { useState } from "react";
import { ThemeAppDay, ThemeAppNight } from "@/app/ColorsTheme";

export default function PhotosStory() {
    const photosStoryBackgroundImage = BgImage.phototsStory
    const [isHovered, setIsHovered] = useState(false);
    const buttonBackgroundColor = useColorModeValue(ThemeAppDay.pureWhite, ThemeAppNight.pureWhite)
    const textColor = useColorModeValue(ThemeAppDay.pureWhite, ThemeAppDay.pureWhite)
    const minSize = "250px";


    return (
        <Box
          bgImage={photosStoryBackgroundImage}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          minH={minSize}
          minW={minSize}
          w={"35%"}
          h={"70%"}
          position="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          borderRadius={"1rem"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
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
          <Flex h={"100%"} 
                flexDirection={"column"} 
                justifyContent={"center"} 
                alignItems={"center"}>
                <Text fontWeight={"bold"} 
                      color={textColor} 
                      fontSize={"3xl"} 
                      position={"relative"} 
                      zIndex={"1"} 
                      textAlign={"center"}>
                    Zapisz historię twojego zwierzaka
                </Text>
                <Button bgColor={buttonBackgroundColor} 
                        color={"black"} 
                        _hover={{ cursor: 'pointer' }}>
                    Zapisz
                </Button>
          </Flex>
        </Box>
      );
}


