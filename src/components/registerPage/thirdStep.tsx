import { Heading, Flex, FormControl, FormLabel, Input, Stack, Center, Avatar, AvatarBadge, IconButton, useColorModeValue, Button, SimpleGrid, GridItem, Text } from '@chakra-ui/react';
import { SmallCloseIcon, AddIcon } from '@chakra-ui/icons';
import { useState, useRef, useEffect, ChangeEvent} from "react";
import { useDispatch } from 'react-redux';
import { updateAvatar } from '@/redux/features/registerSlice';
import { BlankAvatar } from '@/images';

export default function ThirdStep() {


    /*Redux */
    const dispatch = useDispatch();
    
    /*Plik ze zdjeciem */
    const [file, setFile] = useState<string | null>(BlankAvatar);


      /* Konwertowanie do Base 64  🥵 */
    const convertToBase64 = (e:ChangeEvent<any>) => {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload =()=> {
        setFile(reader.result as string);
        dispatch(updateAvatar(reader.result as string));
      }

      reader.onerror = () => {
        alert("Błąd");
      }
    }

    const ResetFile = () => {
      setFile(BlankAvatar);
      dispatch(updateAvatar(BlankAvatar));

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
              <Avatar size="2xl" src={file as string}>
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  onClick={ResetFile}
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Stack position={"relative"}>
                  <Input type='file' onChange={convertToBase64} accept=".png,.jpg" maxH={"30px"} maxW={"300px"}/>
                </Stack>
            </Center>
          </Stack>
        </FormControl>
      </Stack>
    </Flex>
        </>
      );
}