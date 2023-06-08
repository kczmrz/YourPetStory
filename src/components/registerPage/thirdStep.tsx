import { Heading, Flex, FormControl, FormLabel, Input, Stack, Center, Avatar, AvatarBadge, IconButton, useColorModeValue, Button, SimpleGrid, GridItem, Text } from '@chakra-ui/react';
import { SmallCloseIcon, AddIcon } from '@chakra-ui/icons';
import { useState, useRef, useEffect } from "react";

export default function ThirdStep() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const fileInputRef = useRef(null)

    useEffect(() => {
      console.log(fileInputRef.current)
    }, [fileInputRef])

    return (
        <>
          <Heading w="100%" textAlign={'center'} fontWeight="normal">
            Dodaj pierwszego zwierzaka
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
          Profil zwierzaka
        </Heading>
        <FormControl id="userName">
          <FormLabel>Ikona zwierzaka</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Stack position={"relative"}>
                  <Input type='file' ref={fileInputRef} accept=".png,.jpg" maxH={"30px"} maxW={"300px"}/>
                </Stack>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName" isRequired>
          <FormLabel>Imie</FormLabel>
          <Input
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Data urodzenia</FormLabel>
          <Input
            _placeholder={{ color: 'gray.500' }}
            type="date"
          />
          <Text as={'i'}>(Jeśli nie pamiętasz podaj przybliżoną datę)</Text>
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}>
            Cofnij
          </Button>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}>
            Potwierdź
          </Button>
        </Stack>
      </Stack>
    </Flex>
        </>
      );
}