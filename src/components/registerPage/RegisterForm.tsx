import React, { useEffect, useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Flex,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import FirstStep from '@/components/registerPage/firstStep';
import SecondStep from '@/components/registerPage/secondStep';
import ThirdStep from '@/components/registerPage/thirdStep';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import Head from 'next/head';
import { EmailValidation } from '@/utils/DatasValidation/EmailValidation';
import { LoginAndPasswordValidation } from '@/utils/DatasValidation/LoginAndPasswordValidation';
import axios from 'axios';
import { User } from '@/mongoDB/schemas/account';

export default function RegisterForm() {
    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);

    /*Redux */
    const { user_name, surrname, email, password, password2, nick, age, country, city } = useSelector((state: RootState) => state.Register)
        
    /*Sprawdzanie etapu pierwszego */

    const CheckFirstStep = () => {
        if(step == 1){
            const emailValidationResult = EmailValidation.validate(email)
            const passwordValidationResult = LoginAndPasswordValidation.validatePassword(password)
            const arePasswordTheSame = (password === password2) ? true : false;

            if(emailValidationResult && passwordValidationResult && arePasswordTheSame) {
              setStep(step + 1)
              setProgress(progress + 33.3)
            }
        }
        else return;
    }

    /*Sprawdzanie etapu drugiego */

    const CheckSecondStep = () => {
      if(step == 2){
          const isAgeValid = (age > 0)
          const nickValidationResult = LoginAndPasswordValidation.validateLogin(nick);
          const isCountrySelected = (country != "");
          const isCitySelected = (city != "");

          if(isAgeValid && nickValidationResult && isCountrySelected && isCitySelected) {
              setStep(step + 1)
              setProgress(progress + 33.3)
          }
      }
      else return;
  }


  const Register = async () => {

    const AccountData:User =  {
      ID: "Testowe ID",
      name: user_name,
      surrname:surrname,
      email: email,
      password: password,
      nick: nick,
      age: age,
      country: country,
      city: city,
  }
    
  await axios.post('/api/AddUser', 
    AccountData
  ).then(()=> alert('dziala')).catch((e)=>console.log(e))
      
   

  }

    return (
        <>
        <Head>
          <title>Zarejestruj się!</title>
        </Head>
        <main >
          <Box
            borderWidth="1px"
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
            maxWidth={800}
            p={6}
            m="10px auto"
            as="form"
            h={{lg: "50%", sm: "150vmni"}}>
            <Progress
              hasStripe
              value={progress}
              mb="5%"
              mx="5%"
              isAnimated></Progress>
            {step === 1 ? <FirstStep /> : step === 2 ? <SecondStep /> : <ThirdStep />}
            <ButtonGroup mt="5%" w="100%">
              <Flex w="100%" justifyContent="space-between">
                <Flex>
                  <Button
                    onClick={() => {
                      setStep(step - 1);
                      setProgress(progress - 33.33);
                    }}
                    isDisabled={step === 1}
                    colorScheme="teal"
                    variant="solid"
                    w="7rem"
                    mr="5%">
                    Wróć
                  </Button>
                  <Button
                    w="7rem"
                    isDisabled={step === 3}
                    onClick={() => {
                        switch(step) {
                          case 1: {
                            CheckFirstStep()
                          }
                          case 2: {
                            CheckSecondStep()
                          }
                          case 3: {
                            //redirect to main page
                          }
                      }
                    }}
                    colorScheme="teal"
                    variant="outline">
                    Dalej
                  </Button>
                </Flex>
                {step === 3 ? (
                  <Button
                    w="7rem"
                    colorScheme="green"
                    variant="outline"
                    onClick={() => {
                      Register();
                    }}
                  >
                    Może później
                  </Button>
                ) : null}
              </Flex>
            </ButtonGroup>
          </Box>
        </main>
        </>
      );
}