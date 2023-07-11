import { Link as ChakraLink, Flex, Text } from "@chakra-ui/react"
import AddPet from "@/components/addPet/addpet"
export default function SideBarAddAnimal() {
    return(
        <ChakraLink href="#" 
            style={{ textDecoration: 'none' }} 
            _focus={{ boxShadow: 'none' }} 
            mt={"0.5rem"}>
                <Flex
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderRadius="lg"
                    p="4"
                    m="4"
                    cursor="pointer"
                    >
                    <Text fontSize={"16"}>
                        <AddPet/>
                    </Text>
                </Flex>
        </ChakraLink>
    )
}