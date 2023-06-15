import { Center, Text, Stack, Button, Box, useColorModeValue } from "@chakra-ui/react";
import Link from 'next/link';
import Image from 'next/image';
import { indexdog } from '../../images/index'
import { ThemeAppDay } from "@/app/ColorsTheme";
import TextDescription from "./TextDescripton";

export default function AboutPageComponent()
{
    const HeaderBackgroundColor = useColorModeValue(ThemeAppDay.lightAshen, "yellow.100");
    const BtnHoverBackgroundColor = useColorModeValue(ThemeAppDay.lightAshen, "yellow.400");

    const Descriptions: string[] = [
        "Nasza aplikacja to wszechstronne narzędzie, które pomoże Ci w organizacji i dbaniu o ważne wydarzenia związane z Twoimi zwierzakami. Niezależnie od tego, czy posiadasz psa, kota, królika czy innego pupila, nasza aplikacja jest dostosowana do Twoich potrzeb.",
        "Z naszą aplikacją możesz łatwo tworzyć i zarządzać harmonogramem wydarzeń dla swojego zwierzęcia. Czy to wizyta u weterynarza, rutynowe szczepienia, pielęgnacja, treningi czy ważne daty, takie jak urodziny czy rocznice, nasze narzędzia pomogą Ci zorganizować wszystko w jednym miejscu. Niezależnie od ilości zwierząt, możesz tworzyć oddzielne kalendarze dla każdego z nich, aby niczego nie przegapić.",
        "Dbamy o prostotę i intuicyjność naszej aplikacji, aby była łatwa w obsłudze dla wszystkich użytkowników. Zrozumienie, jak ważne są nasze zwierzęta, stawiamy na ergonomiczny interfejs, który umożliwia łatwą nawigację i dostęp do wszystkich funkcji.",
        "Zapraszamy do dołączenia do naszej społeczności miłośników zwierząt domowych i odkrycia, jak nasza aplikacja może ułatwić Ci życie i umożliwić Ci jeszcze większą troskę o swoje futrzane przyjaciółki i przyjaciół."
    ]

    return(<>
            <Center h={"100%"}>
                <Stack display={"flex"} 
                    direction={{lg: 'row', md: 'column', sm: 'column'}}
                    h={"100%"}
                    w={"90%"}>
                    <Stack w={{lg: "55%", md: "100%", sm: "100%"}}
                        direction={"column"} 
                        alignItems={"center"} 
                        textAlign={"center"} 
                        fontSize={{"2xl": "2xl", xl: "2xl"}} 
                        gap={"2rem"} 
                        mt={"2rem"}>
                        <Text fontSize={"6xl"} color={HeaderBackgroundColor}>
                            O nas
                        </Text>

                        {Descriptions.map((paragraph) => (
                            <TextDescription description={paragraph}/>
                        ))}
                        
                        <Link href={"/login"}>
                        <Button colorScheme={'blue'} 
                            variant={'solid'} 
                            flex={1} 
                            _hover={{bg: BtnHoverBackgroundColor}}>
                            Zacznij już teraz
                        </Button>
                        </Link>
                    </Stack>
                    <Box w={{lg: "45%", md: "100%"}} 
                        display={{lg: "flex", xsm: "none"}} 
                        alignItems={"center"} 
                        justifyContent={"center"} 
                        mb={"2rem"}>
                        <Image src={indexdog} alt="Animal Background image"/>
                    </Box>
                </Stack>
            </Center>
    </>)
}