import React, { ReactNode } from 'react';
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import SideBarContent from './sideBar/SideBarContent';
import SideBarContentNavMobile from './sideBar/SideBarContentNavMobile';
import AppCalendar from './calendar/AppCalendar';
import AppFeatures from './features/AppFeatures';

export default function AppDashboard({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH={"100vh"} w={"100%"} display={"flex"} flexDirection={{ base: "column", md: "row"}}>
      <SideBarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
        minW={"200px"}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SideBarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <SideBarContentNavMobile display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box w={{ base: "100vw", md: "90vw"}} display={"flex"} flexDirection={"column"} gap={"2%"}>
        <AppFeatures />
        <AppCalendar />
      </Box>
    </Box>
  );
}
