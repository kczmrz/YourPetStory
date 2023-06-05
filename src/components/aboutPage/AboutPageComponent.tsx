import { SimpleGrid, Center, Text, Stack, GridItem, Button, Box } from "@chakra-ui/react";
import Link from 'next/link';
import Image from 'next/image';
import { indexdog } from '../../images/index'

export default function AboutPageComponent()
{
    return(<>
            <Center h={"100%"}>
                <Stack display={"flex"} direction={{lg: 'row', md: 'column', sm: 'column'}} h={"100%"}>
                    <Stack w={{lg: "50%", md: "100%", sm: "100%"}} direction={"column"} alignItems={"center"} textAlign={"center"} fontSize={"2xl"} gap={"2rem"} mt={"2rem"} marginLeft={"1rem"} marginRight={"1rem"}>
                        <Text fontSize={"6xl"}>
                            O nas
                        </Text>
                        <Text>
                            Nasza aplikacja to wszechstronne narzędzie, które pomoże Ci w organizacji i dbaniu o ważne wydarzenia związane z Twoimi zwierzakami. Niezależnie od tego, czy posiadasz psa, kota, królika czy innego pupila, nasza aplikacja jest dostosowana do Twoich potrzeb.
                        </Text>
                        <Text>
                            Z naszą aplikacją możesz łatwo tworzyć i zarządzać harmonogramem wydarzeń dla swojego zwierzęcia. Czy to wizyta u weterynarza, rutynowe szczepienia, pielęgnacja, treningi czy ważne daty, takie jak urodziny czy rocznice, nasze narzędzia pomogą Ci zorganizować wszystko w jednym miejscu. Niezależnie od ilości zwierząt, możesz tworzyć oddzielne kalendarze dla każdego z nich, aby niczego nie przegapić.
                        </Text>
                        <Text>
                            Dbamy o prostotę i intuicyjność naszej aplikacji, aby była łatwa w obsłudze dla wszystkich użytkowników. Zrozumienie, jak ważne są nasze zwierzęta, stawiamy na ergonomiczny interfejs, który umożliwia łatwą nawigację i dostęp do wszystkich funkcji.
                        </Text>
                        <Text>
                            Zapraszamy do dołączenia do naszej społeczności miłośników zwierząt domowych i odkrycia, jak nasza aplikacja może ułatwić Ci życie i umożliwić Ci jeszcze większą troskę o swoje futrzane przyjaciółki i przyjaciół.
                        </Text>
                        <Link href={"/login"}>
                        <Button colorScheme={'blue'} variant={'solid'} flex={1}>
                            Zacznij już teraz
                        </Button>
                        </Link>
                    </Stack>
                    <Box w={{lg: "50%", md: "100%"}} display={{lg: "flex", xsm: "none"}} alignItems={"center"} justifyContent={"center"}>
                        <Image src={indexdog} alt=""/>
                    </Box>
                </Stack>
            </Center>
    </>)
}