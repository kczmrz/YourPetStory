import { Heading, Flex, FormControl, FormLabel, Input, FormHelperText, InputGroup, InputRightElement, Button, SimpleGrid, GridItem } from '@chakra-ui/react';
import { useState } from "react";


export default function FirstStep() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <>
          <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
            Rejestracja
          </Heading>
          <Flex>
            <FormControl mr="5%">
              <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                Imie
              </FormLabel>
              <Input id="first-name" />
            </FormControl>
    
            <FormControl>
              <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                Nazwisko
              </FormLabel>
              <Input id="last-name" />
            </FormControl>
          </Flex>
          <FormControl mt="2%">
            <FormLabel htmlFor="email" fontWeight={'normal'}>
              Email
            </FormLabel>
            <Input id="email" type="email" />
          </FormControl>
    
          <FormControl>
            <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
              Hasło
            </FormLabel>
            <SimpleGrid columns={2} spacing={5}>
              <InputGroup as={GridItem} size="md" marginBottom={"1rem"}>
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Podaj hasło"
                  />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Schowaj' : 'Pokaż'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <InputGroup as={GridItem} size="md">
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Powtórz hasło"
                  />
              </InputGroup>
            </SimpleGrid>
          </FormControl>
        </>
      );
}