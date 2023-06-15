import React from 'react';
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text
} from '@chakra-ui/react';
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
  } from 'react-icons/fi';
import ISidebarProps from '@/types/interfaces/ISideBarProps';
import ILinkItemProps from '@/types/interfaces/ILinkItemProps';
import SideBarContentNavItem from '@/components/dashboard/sideBar/SideBarContentNavItem'

export default function SideBarContent({ onClose, ...rest }: ISidebarProps) {

// Tutaj będzie dodawanie zwierzaków

const LinkItems: Array<ILinkItemProps> = [
    { name: 'Home', icon: FiHome },
    // { name: 'Trending', icon: FiTrendingUp },
    // { name: 'Explore', icon: FiCompass },
    // { name: 'Favourites', icon: FiStar },
    // { name: 'Settings', icon: FiSettings },
  ];

    return (
        <Box
          bg={useColorModeValue('white', 'gray.900')}
          borderRight="1px"
          borderRightColor={useColorModeValue('gray.200', 'gray.700')}
          w={{ base: "full", md: "10vw"}}
          pos="sticky"
          h={"100vh"}
          bgColor={"yellow"}
          {...rest}>
          <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" textAlign={"center"}>
              Dodaj zwierzaki
            </Text>
            <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
          </Flex>
          {LinkItems.map((link) => (
            <SideBarContentNavItem key={link.name} icon={link.icon}>
              {link.name}
            </SideBarContentNavItem>
          ))}
        </Box>
      );
}