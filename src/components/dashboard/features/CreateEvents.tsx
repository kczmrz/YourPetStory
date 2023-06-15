import { Box, Flex, Text, Button } from "@chakra-ui/react"

export default function CreateEvents() {
    return (
        <Box display="flex"
        alignItems="center"
        justifyContent="center">
            <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                <Text fontSize={"2xl"} textAlign={"center"}>
                    Twórz nowe wydarzenia i przypomnienia
                </Text>
                <Flex flexDirection={"row"} >
                    <Button>
                        Nowe wydarzenie
                    </Button>
                    <Button>
                        Nowe Przypomnienie
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
}