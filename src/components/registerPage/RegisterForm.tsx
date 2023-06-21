import React, { useEffect, useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Flex,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
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
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { clearRegisterState } from '@/redux/features/registerSlice';




export default function RegisterForm() {
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);
    const [EmailInDB, setEmailInDb] = useState<boolean>(true);
    const [NickInDB, setNickInDb] = useState<boolean>(true);
    const toast = useToast();
    const router = useRouter();
    const dispatch = useDispatch();

    /*Redux */
    const { user_name, surrname, email, password, password2, nick, age, country, city, avatar } = useSelector((state: RootState) => state.Register)
        
    /*Alerty */
    const DisplayAlert = (message: string)=> {
      toast({
        title: "Informacja!",
        description: message,
        status: 'info',
        duration: 3000,
        isClosable: true,
      })
    }

    const CreateAnAccount = async() => {
      DisplayAlert("Konto zostało założone! Możesz się zalogować");
      router.push('/login', undefined);
    }
    /* Czy email jest w bazie danych? */
    const checkEmailInDB = async ()=> {
      try {
        const response = await fetch('/api/check/Email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email })
        }).then((res)=> {
          if(res.status === 400) {
            setEmailInDb(true);
            DisplayAlert("Email jest zajęty!");
          }
          else {
             DisplayAlert("Email jest wolny, możesz przejść dalej!")
             setEmailInDb(false);
          }
        })
        } 
      catch {
        console.log('Wystąpił błąd serwera.');
      }
      
    }


    /* Czy Nick jest w bazie danych? */
    const checkNickInDB = async ()=> {
      try {
        const response = await fetch('/api/check/Nick', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ nick })
        }).then((res)=> {
          if(res.status === 400) {
            setNickInDb(true);
            DisplayAlert("Nick jest już zajęty! Może '" + nick+"2?'");
          }
          else {
            DisplayAlert("Nick jest wolny, możesz przejść dalej!")
            setNickInDb(false);
          }
        })
        } 
      catch {
        console.log('Wystąpił błąd serwera.');
      }
      
    }
    /*Sprawdzanie etapu pierwszego */

    const CheckFirstStep = async () => {
      let MailCorrectBool:boolean|null = null;
        if(step == 1){
          await checkEmailInDB();
            const emailValidationResult = EmailValidation.validate(email)
            const passwordValidationResult = LoginAndPasswordValidation.validatePassword(password)
            const arePasswordTheSame = (password === password2) ? true : false;
           
            if(emailValidationResult && passwordValidationResult && arePasswordTheSame && !EmailInDB) {
              setStep(step + 1)
              setProgress(progress + 33.3)
            }
            else return;
            
        }
        else return;
    }

    /*Sprawdzanie etapu drugiego */

    const CheckSecondStep = async () => {
      if(step == 2){
          await checkNickInDB();
          const isAgeValid = (age > 13 && age < 99)
          const nickValidationResult = LoginAndPasswordValidation.validateLogin(nick);
          const isCountrySelected = (country != "");
          const isCitySelected = (city != "");

          if(isAgeValid && nickValidationResult && isCountrySelected && isCitySelected && !NickInDB) {
              setStep(step + 1)
              setProgress(progress + 33.3)
          }
          else if(!isAgeValid) {
             DisplayAlert("Nieprawidłowy wiek! (Minimalny wiek rejestracji wynosi 13 lat)")
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
      Avatar: avatar
  }
 
  try { 
    await axios.post('/api/add/user', AccountData).then((req)=>{
      if(req.status == 200) {
        dispatch(clearRegisterState());
        CreateAnAccount();
        
      } 
    })
  }
  catch {

  }

      
   

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
                    Zarejestruj
                  </Button>
                ) : null}
              </Flex>
            </ButtonGroup>
          </Box>
        </main>
        </>
      );
}