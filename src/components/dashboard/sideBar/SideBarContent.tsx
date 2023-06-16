import React from 'react';
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  Divider 
} from '@chakra-ui/react';
import {
    FiHome,
  } from 'react-icons/fi';
import { ThemeAppDay } from '@/app/ColorsTheme';
import ISidebarProps from '@/types/interfaces/SideBarProps';
import LinkItemProps from '@/types/interfaces/LinkItemProps';
import SideBarContentNavItem from '@/components/dashboard/sideBar/SideBarContentNavItem'
import SideBarAddAnimal from './SideBarAddAnmial';

export default function SideBarContent({ onClose, ...rest }: ISidebarProps) {
const SideBarBackgroundColor = useColorModeValue(ThemeAppDay.lightAshen, "white.100");

// Tutaj będzie dodawanie zwierzaków
// Połącz to z reduxem albo z jakimś pobraniem danych z bazki

const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome },
    // { name: 'Trending', icon: FiTrendingUp },
    // { name: 'Explore', icon: FiCompass },
    // { name: 'Favourites', icon: FiStar },
    // { name: 'Settings', icon: FiSettings },
  ];

    return (
        <Box
          bg={SideBarBackgroundColor}
          borderRight="1px"
          borderRightColor={useColorModeValue('gray.200', 'gray.700')}
          w={{ base: "full", md: "10vw"}}
          pos="sticky"
          h={"100vh"}
          {...rest}>
          <Flex h="20" 
                alignItems="center" 
                mx="8" 
                justifyContent="space-between">
            <Text fontSize="2xl" 
                  fontFamily="monospace" 
                  fontWeight="bold" 
                  textAlign={"center"}>
              Twoje zwierzaki
            </Text>
            <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
          </Flex>
          {LinkItems.map((link) => (
            <SideBarContentNavItem key={link.name} icon={link.icon}>
              {link.name}
            </SideBarContentNavItem> 
          ))}
          <Divider mt={"0.5rem"} mb={"0.5rem"}/>
          <SideBarAddAnimal />
        </Box>
      );
}