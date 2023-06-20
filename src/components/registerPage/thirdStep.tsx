import { Heading, Flex, FormControl, FormLabel, Input, Stack, Center, Avatar, AvatarBadge, IconButton, useColorModeValue, Button, SimpleGrid, GridItem, Text } from '@chakra-ui/react';
import { SmallCloseIcon, AddIcon } from '@chakra-ui/icons';
import { useState, useRef, useEffect } from "react";


export default function ThirdStep() {

    const [show, setShow] = useState(false);
    
    /*Plik ze zdjeciem */
    const [file, setFile] = useState<any>("");
   
    /*Avatar w kółeckzu */
    const [AvatarInCircle, setAvatarInCircle] = useState<string>("./images/other/blankavatar.jpg");

    /* File Reader */
    const reader = new FileReader();

    const setImageFromFile = (e:any) => {
     
    }

    

    return (
        <>
          <Heading w="100%" textAlign={'center'} fontWeight="normal">
            Dodaj swój avatar!
          </Heading>
          <Flex
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          Dodaj zdjęcie
        </Heading>
        <FormControl id="userName">
          <FormLabel>Twój profil</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="2xl" src={AvatarInCircle}>
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  onClick={()=>setFile("")}
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Stack position={"relative"}>
                  <Input type='file' value={file} onChange={((e:any)=> setFile(e.target.files[0]))} accept=".png,.jpg" maxH={"30px"} maxW={"300px"}/>
                </Stack>
            </Center>
          </Stack>
        </FormControl>
      </Stack>
    </Flex>
        </>
      );
}