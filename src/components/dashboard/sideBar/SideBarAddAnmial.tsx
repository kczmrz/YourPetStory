import { Link as ChakraLink, Flex, Text } from "@chakra-ui/react"
import  { AddIcon } from "@chakra-ui/icons"

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
                    _hover={{
                        bg: 'gray.400',
                        color: 'white',
                    }}>
                    <AddIcon mr={"4"}/>
                    <Text fontSize={"16"}>
                        Dodaj pupila
                    </Text>
                </Flex>
        </ChakraLink>
    )
}