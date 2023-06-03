import { Heading, Flex, FormControl, FormLabel, Input, GridItem, Select } from '@chakra-ui/react';
import { useState } from "react";

export default function SecondStep() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <>
          <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
            Dane użytkownika
          </Heading>
          <FormControl as={GridItem} mb={"1rem"}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
            }}>
              Wiek
            </FormLabel>
            <Input
              type="number"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            >
            </Input>
          </FormControl>
          <FormControl as={GridItem} colSpan={[6, 3]}>
            <FormLabel
              htmlFor="country"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}>
              Państwo
            </FormLabel>
            <Select
              id="country"
              name="country"
              autoComplete="country"
              placeholder="Wybierz"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </Select>
          </FormControl>
    
          <FormControl as={GridItem} colSpan={6}>
            <FormLabel
              htmlFor="street_address"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}
              mt="2%">
              Ulica
            </FormLabel>
            <Input
              type="text"
              name="street_address"
              id="street_address"
              autoComplete="street-address"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>
    
          <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
            <FormLabel
              htmlFor="city"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}
              mt="2%">
              Miasto
            </FormLabel>
            <Input
              type="text"
              name="city"
              id="city"
              autoComplete="city"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>
        </>
      );
}