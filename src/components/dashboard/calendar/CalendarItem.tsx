import React from 'react';
import {
  Box,
  Text,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react';
import { TimeIcon, PhoneIcon, ChevronDownIcon } from '@chakra-ui/icons'


export default function CalendarItem() {

    return (
        <Box width={"100%"} height={"100px"} borderRadius={"1rem"} display={"flex"} bgColor={"white"}>
            <Box display={"flex"} flexDirection={"column"} color={"red"} alignItems={"center"} justifyContent={"center"} w={"12%"} minW={"40px"} h={"100%"}>
                <Text fontSize={"lg"}>
                    Wed
                </Text>
                <Text fontSize={"3xl"} fontWeight={"bold"}>
                    23
                </Text>
            </Box>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} w={"20%"} minW={"50px"}>
                <Box display={"flex"} flexDirection={"row"} w={"100%"} alignItems={"center"} justifyContent={"center"} gap={"0.5rem"}>
                    <TimeIcon />
                    <Text>
                        9.00 - 10.00
                    </Text>
                </Box>
                <Box display={"flex"} flexDirection={"row"} w={"100%"} alignItems={"center"} justifyContent={"center"} gap={"0.5rem"}>
                    <PhoneIcon />
                    <Text>
                        +12 34 454 6234
                    </Text>
                </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} ml={"1rem"} w={"45%"}>
                <Text textAlign={"center"}>
                    Opis taska taki dłuższy dla testu
                </Text>
                <Stack>

                </Stack>
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