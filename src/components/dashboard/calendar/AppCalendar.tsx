import React from 'react';
import {
  Box,
  Flex
} from '@chakra-ui/react';
import CalendarItem from './CalendarItem';

export default function AppCalendar() {
    return (
        <Box h={"65%"} p={"1rem"} w={"full"} display={"flex"} alignItems={"start"}>
            <Box width={"100%"} h={"100%"} p={"1rem"} borderRadius={"0.75rem"} bgColor={"#718096"} gap={"1rem"} overflow={"hidden"} overflowY={"scroll"}>
                <Flex flexDirection={"column"} gap={"1rem"} >
                    <CalendarItem />
                    <CalendarItem />
                    <CalendarItem />
                    <CalendarItem />
                    <CalendarItem />
                    <CalendarItem />
                    <CalendarItem />
                    <CalendarItem />
                    <CalendarItem />
                    <CalendarItem />
                    <CalendarItem />
                </Flex>
            </Box>
        </Box>
    )
}