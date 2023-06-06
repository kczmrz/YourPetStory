import { Heading, Flex, FormControl, FormLabel, Input, FormHelperText, InputGroup, InputRightElement, Button, SimpleGrid, GridItem } from '@chakra-ui/react';
import { useState } from "react";
import { updateNameForm, updateSurrNameForm, updateEmail, updatePassword, updatePassword2 } from '@/redux/features/registerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';

export default function FirstStep() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    /*Redux */
    const dispatch = useDispatch();
    const { user_name, surrname, email, password, password2 } = useSelector((state: RootState) => state.Register)

    /*Zmiana imienia */
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateNameForm(event.target.value));
     };

     /*Zamiana nazwiska */
     const handleChangeSurrname = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateSurrNameForm(event.target.value));
     };

     /* Zmiana emaila */
     const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateEmail(event.target.value));
     };

     /* Zmiana hasla*/
     const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updatePassword(event.target.value));
     };

      /* Zmiana hasla 2*/
      const handleChangePassword2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updatePassword2(event.target.value));
       };

    
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
              <Input id="first-name" value={user_name} onChange={handleChangeName} />
            </FormControl>
    
            <FormControl>
              <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                Nazwisko
              </FormLabel>
              <Input id="last-name" value={surrname} onChange={handleChangeSurrname}  />
            </FormControl>
          </Flex>
          <FormControl mt="2%">
            <FormLabel htmlFor="email" fontWeight={'normal'}>
              Email
            </FormLabel>
            <Input id="email" type="email" value={email} onChange={handleChangeEmail} />
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
                  value={password}
                  onChange={handleChangePassword}
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
                  value={password2}
                  onChange={handleChangePassword2}
                  />
              </InputGroup>
            </SimpleGrid>
          </FormControl>
        </>
      );
}