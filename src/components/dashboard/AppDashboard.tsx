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
    <Box minH="100vh" w={"100%"} bg={useColorModeValue('gray.100', 'gray.900')} pos={"relative"}>
      <SideBarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
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
      <Box ml={{ base: 0, md: 60 }} boxSizing='border-box' pos={{ md: 'absolute', sm: 'static'}} 
              display={"flex"} flexDirection={"column"} alignContent={"center"} justifyContent={"center"} 
              top={"0"} 
              h={"100%"} w={"90vw"} >
          <AppFeatures />
          <AppCalendar />
      </Box>
    </Box>
  );
}
