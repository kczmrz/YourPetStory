import React from 'react';
import {
  Box,
  Text,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex
} from '@chakra-ui/react';
import { TimeIcon, PhoneIcon, ChevronDownIcon } from '@chakra-ui/icons'

export default function CalendarItem() {

    return (
        <Box width={"100%"} height={"100px"} borderRadius={"1rem"} display={"flex"} bgColor={"white"}>
            <Box color={"red"} w={"12%"} minW={"40px"} h={"100%"}>
                <Flex flexDirection={"column"} alignItems={"center"} justifyContent={"center"} h={"100%"}>
                    <Text fontSize={"lg"}>
                        Wed
                    </Text>
                    <Text fontSize={"3xl"} fontWeight={"bold"}>
                        23
                    </Text>
                </Flex>
            </Box>
            <Box h={"100%"} w={"20%"} minW={"50px"}>
                <Flex flexDirection={"column"} alignItems={"center"} justifyContent={"center"} h={"100%"}>
                    <Box w={"100%"}>
                        <Flex w={"100%"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"} gap={"0.5rem"}>
                            <TimeIcon />
                            <Text>
                                9.00 - 10.00
                            </Text>
                        </Flex>
                    </Box>
                    <Box w={"100%"}>
                        <Flex w={"100%"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"} gap={"0.5rem"}>
                            <PhoneIcon />
                            <Text>
                                +12 34 454 6234
                            </Text>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <Box display={"flex"} ml={"1rem"} w={"45%"}>
                <Flex flexDirection={"column"} alignItems={"center"} justifyContent={"center"} w={"100%"}>
                    <Text textAlign={"center"}>
                        Opis taska taki dłuższy dla testu
                    </Text>
                    <Stack>
                        {/* Przypisane zwierzaki */}
                    </Stack>
                </Flex>
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"end"} w={"20%"}>
                <Menu>
                    <MenuButton as={Button} leftIcon={<ChevronDownIcon />}>
                        Akcje
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Więcej</MenuItem>
                        <MenuItem>Usuń</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    )
}