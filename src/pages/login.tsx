import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
  } from '@chakra-ui/react';

export default function Login() {

    return (
        <>
        <Stack  height={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={4} w={'full'} maxW={'md'}>
                <Heading fontSize={'2xl'}>Zaloguj się</Heading>
                <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" autoComplete="off"/>
                </FormControl>
                <FormControl id="password">
                <FormLabel>Hasło</FormLabel>
                <Input type="password" autoComplete="off"/>
                </FormControl>
                <Stack spacing={6}>
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Checkbox>Zapamiętaj mnie</Checkbox>
                    {/* <Link color={'blue.500'}>Forgot password?</Link> */}
                </Stack>
                <Stack direction="row" spacing={4}>
                    <Flex direction={"row"} align={"center"} flex={3}>
                        <Button colorScheme={'blue'} variant={'solid'} flex={1}>
                        Zaloguj się
                        </Button>
                    </Flex>
                    <Flex direction={"row"} align={"center"} flex={1}>
                        <Button colorScheme={'blue'} variant={'solid'} flex={1}>
                        Zarejestruj się
                        </Button>
                    </Flex>
                </Stack>
                </Stack>
            </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
        </>
    )
}