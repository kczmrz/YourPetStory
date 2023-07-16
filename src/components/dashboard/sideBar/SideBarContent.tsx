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
import axios from 'axios';
import { useState, useEffect } from 'react';
import { PetIE } from '@/mongoDB/schemas/pet';



export default function  SideBarContent({ onClose, ...rest }: ISidebarProps) {
const SideBarBackgroundColor = useColorModeValue(ThemeAppDay.lightAshen, "white.100");



const [myPetsList, setMyPetsList] = useState<PetIE[]>([]);
const getPets = async () => await axios.get('/api/get/pets?ID_Owner=8195dd9c-ddfd-4e3b-af9d-691ed2bd4728').then(data => setMyPetsList(data.data))


  useEffect(()=> {
    getPets();
    console.log(myPetsList)
  }, [])

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
          {
          myPetsList.map((pet, key)=>  ( <SideBarContentNavItem icon={FiHome} key={key}> {pet.name}</SideBarContentNavItem>))
           }
          <Divider mt={"0.5rem"} mb={"0.5rem"}/>
          <SideBarAddAnimal />
        </Box>
      );
}

