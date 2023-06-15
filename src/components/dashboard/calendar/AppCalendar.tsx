import React from 'react';
import {
  Box,
  useColorModeValue
} from '@chakra-ui/react';
import CalendarItem from './CalendarItem';

export default function AppCalendar() {
    return (
        <Box h={"60%"} p={"1rem"} w={"full"} display={"flex"} alignItems={"center"}>
            <Box width={"100%"} h={"100%"} p={"1rem"} borderRadius={"0.75rem"} bgColor={"#4CAF50"}>

                <CalendarItem />
            </Box>
        </Box>
    )
}