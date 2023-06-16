import { Stack, Flex, Box , Text, Heading, useColorModeValue, Fade, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { indexdog } from "@/images"

export default function IndexPage() {
  const TextDescriptionColor = useColorModeValue("black", "white");
  const buttonsBackgroundColor = useColorModeValue('gray.300', 'gray.500');

   return(
    <Stack minH={'80vh'} direction={{xl: 'row', md: 'row'}}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Fade in={true}> 
           <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} textAlign={"center"}>
                <Text
                  as={'span'}
                  position={'relative'}
                  zIndex={3}
                  textAlign={"center"}>
                    Zaoferuj swoim pupilom najlepszą opiekę
                  </Text>
                  <br />{' '}
                <Text mt={"2rem"} color={TextDescriptionColor} textAlign={"center"} fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }}>
                  Z naszą aplikacją to prostsze niż myślisz!
                </Text>{' '}
              </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} 
                  color={TextDescriptionColor} 
                  textAlign={"center"}>
                    Nasza aplikacja zapewni Ci pełną kontrolę nad opieką nad Twoim zwierzakiem! Wizyty u weterynarza, zajęcia z tresury czy wizyty u psiego fryzjera staną się teraz łatwe do zaplanowania i nie będą wymykać się spod kontroli. Dodatkowo, będziesz mógł śledzić rozwój i zmiany Twojego pupila wraz z jego dorastaniem. Ciesz się pełnym spektrum opieki nad swoim zwierzakiem dzięki naszej aplikacji
            </Text>
          <Stack direction={{ base: 'column', md: 'row' }} 
                 display={"flex"} 
                 justifyContent={"center"} 
                 spacing={4}>
                  <Link href={'/register'}>
                    <Button
                      rounded={'full'}
                      bg={buttonsBackgroundColor}
                      color={TextDescriptionColor}>
                        Dołącz do nas!
                    </Button>
                  </Link>
                  <Link href={'/about'}>
                      <Button rounded={'full'} 
                        bg={buttonsBackgroundColor}>
                          Dowiedz się więcej
                      </Button>
                  </Link>
          </Stack>
        </Stack>
        </Fade>
      </Flex>
      <Flex flex={1} placeContent={'center'} justifyContent={'center'}>
      <Box mt={10} w={'80%'}> 
        <Image
          src={indexdog}
          alt={"Index doge"}/>
       </Box>
      </Flex>
    </Stack>)
}