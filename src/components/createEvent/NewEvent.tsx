import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Textarea,
    Select
  } from '@chakra-ui/react';
  import { ChangeEvent, useState } from 'react';
  import { Link } from '@chakra-ui/next-js';
  import { ThemeAppDay } from '@/app/ColorsTheme';
import EventType from '@/types/EventType';

export default function NewEvent() {
    const returnTextColor = useColorModeValue("black", ThemeAppDay.pureWhite)
    const [selectedOption, setSelectedOption] = useState<EventType>()
    const [priceValue, setPriceValue] = useState<number>(0)

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value as EventType)
    }

    const handlePriveValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value)
        setPriceValue(isNaN(value) ? 0 : value);
    }

    return (
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} 
              mx={'auto'} 
              maxW={'lg'} 
              py={12} 
              px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} 
                    textAlign={'center'}>
            Utwórz wydarzenie
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="firstName" isRequired>
                <FormLabel>Nazwa wydarzenia</FormLabel>
                <Input type="text" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Numer telefonu</FormLabel>
              <Input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Rodzaj wydarzenia</FormLabel>
                <Select value={selectedOption} onChange={handleSelectChange}>
                    {
                        Object.values(EventType).map((value, index) => (
                            <option key={index} value={value}>{value}</option>
                        ))
                    }
                </Select>
            </FormControl>
            {
                selectedOption !== EventType.Walk && (
                    <FormControl isRequired>
                        <FormLabel>Koszt</FormLabel>
                        <Input type='number' value={priceValue} onChange={handlePriveValueChange}/>
                    </FormControl>
                )
            }
            <FormControl isRequired>
                <FormLabel>Opis wydarzenia</FormLabel>
                <Textarea></Textarea>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Data</FormLabel>
                <Input type='datetime-local'></Input>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Dodaj
              </Button>
            </Stack>
            <Stack pt={6}>
                <Link href={"#"}>
                    <Text align={'center'} 
                          fontWeight={"bold"} 
                          color={returnTextColor} 
                          textDecoration={"none"}>
                    Powrót do panelu głównego
                    </Text>
                </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    )
}