import { Stack, Flex, Box , Text, Heading, useColorModeValue, Fade, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { indexdog } from "@/images"
import { ThemeAppDay } from "@/app/ColorsTheme";
export default function IndexPage() {

  const Header2 = useColorModeValue(ThemeAppDay.lgreen1, "yellow.100");
  const Describe = useColorModeValue("black", "white");
  const btnFirst = useColorModeValue(ThemeAppDay.lgreen2, "yellow.600")
  const btnFirst_hover = useColorModeValue(ThemeAppDay.lgreen1, "yellow.400")
   return(
    <>
    <Stack minH={'80vh'} direction={{xl: 'row', md: 'row'}}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Fade in={true}> 
           <Stack spacing={6} w={'full'} maxW={'lg'}>
               <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
           <Text
              as={'span'}
              position={'relative'}
              zIndex={3}>
                Zaoferuj swoim pupilom najlepszą opiekę
                </Text>
              <br />{' '}
            <Text color={Header2} as={'span'} fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }}>
               Z naszą aplikacją to prostsze niż myślisz!
            </Text>{' '}
            </Heading>
           
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={Describe}>
            Nasza aplikacja zapewni Ci pełną kontrolę nad opieką nad Twoim zwierzakiem! Wizyty u weterynarza, zajęcia z tresury czy wizyty u psiego fryzjera staną się teraz łatwe do zaplanowania i nie będą wymykać się spod kontroli. Dodatkowo, będziesz mógł śledzić rozwój i zmiany Twojego pupila wraz z jego dorastaniem. Ciesz się pełnym spektrum opieki nad swoim zwierzakiem dzięki naszej aplikacji
          
          </Text>

          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link href={'/register'}>
              <Button
              rounded={'full'}
              bg={btnFirst}
              color={'white'}
              _hover={{
                bg: btnFirst_hover,
              }}>
              Dołącz do nas!
              </Button>
            </Link>
            <Link href={'/about'}>
                <Button rounded={'full'}>Dowiedz się więcej</Button>
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
    </Stack>
    </>
          
    )
}

