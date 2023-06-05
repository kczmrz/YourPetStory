import { Heading, FormControl, FormLabel, Input, GridItem, Select } from '@chakra-ui/react';
import { useState, useEffect } from "react";
import GetCountriesNames from '@/utils/GetCountriesNames';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import { updateNickname, updateAge, updateCountry, updateCity} from '@/redux/features/registerSlice';

export default function SecondStep() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [countries, setCountries] = useState<string[]>()


   /*Redux */
    const dispatch = useDispatch();
    const { nick, age, country, city } = useSelector((state: RootState) => state.Register);

     /*Zmiana nicku */
     const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateNickname(event.target.value));
     };

       /*Zmiana wieku */
     const handleChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateAge(parseInt(event.target.value)));
      };

      /*Zmiana kraju */
     const handleCountryName = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateCountry(event.target.value));
     };

     /*Zamiana miasta */
     const handleChangeCity= (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateCity(event.target.value));
    };


    useEffect(() => {
      GetCountriesNames.get().then(res => setCountries(res.sort()))
    }, [])

    return (
        <>
          <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
            Dane użytkownika
          </Heading>

          <FormControl as={GridItem} colSpan={6}  mb={"1rem"}>
            <FormLabel
              htmlFor="street_address"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}
              mt="2%">
              Nick
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
              value={nick}
              onChange={handleChangeName}
            />
          </FormControl>
          
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
              min={5}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              value={age}
              onChange={handleChangeAge}
              
            >
            </Input>
          </FormControl>
          <FormControl as={GridItem} colSpan={[6, 3]}
              onChange={handleCountryName}>
            <FormLabel
              htmlFor="country"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}
            >
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
              {
                countries ? (
                countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                )))
                : (<>
                <option key="poland" value="poland">
                  Poland
                </option>
                <option key="spain" value="spain">
                  Spain
                </option>
                <option key="germany" value="germany">
                  Germany
                </option>
                </>)
              }
            </Select>
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
              value={city}
              onChange={handleChangeCity}
            />
          </FormControl>
        </>
      );
}
        
    