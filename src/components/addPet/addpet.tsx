import { useDisclosure } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent,ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, FormLabel, Input, Select, Flex, Text } from "@chakra-ui/react"
import { ChangeEvent, useRef, useState } from "react";
import  { AddIcon } from "@chakra-ui/icons"
import { parseISO, isValid } from "date-fns";
import axios from "axios";
import { PetIE } from "@/mongoDB/schemas/pet";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { v4 as uuidv4 } from 'uuid';

export default function AddPet() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const { userID } = useSelector((state: RootState) => state.User)
    /*Alerty */
    const toast = useToast();
    const DisplayAlert = (message: string)=> {
        toast({
          title: "Informacja!",
          description: message,
          status: 'info',
          duration: 3000,
          isClosable: true,
        })
      }
    const [petname, setPetname] = useState<string>("");
    const [pettype, setPetType] = useState<string>("");
    const [petBreed, setPetBreed] = useState<string>("");
  
    const pets: string[] = [
      "Pies",
      "Kot",
      "Chomik",
      "Królik",
      "Papuga",
      "Rybki akwariowe",
      "Żółw wodny",
      "Świnka morska",
      "Szczur",
      "Jeż",
      "Fretek",
      "Legwan",
      "Wąż domowy ",
      "Mysz",
      "Szynszyl",
      "Papużka falista",
      "Pająk",
      "Kanarek"
    ];
   
    
    const [file, setFile] = useState<string | null>();

    /* Konwertowanie do Base 64  🥵 */
    const convertToBase64 = (e:ChangeEvent<any>) => {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload =()=> {
        setFile(reader.result as string);
     }

      reader.onerror = () => {
        alert("Błąd");
      }
    }

    const ResetFile = () => {
      setFile(null);
    }

  /* Data */
    const [DayDate, setDayDate] = useState<number>(1);
    const [MonthDate, setMonthDate] = useState<string>("Styczeń");
    const [YearDate, setYearDate] = useState<number>(2023);

    const [MaxDays, setMaxDays] = useState<number>(28);
    const [DataCorrect, setDataCorrect] = useState<boolean>(false);

    const CheckDate = () => {
       if(MonthDate == "Styczeń" || MonthDate == "Marzec" || MonthDate == "Maj" || MonthDate == "Lipiec" || MonthDate == "Sierpień" || MonthDate == "Październik" || MonthDate == "Grudzień")
       {
        setMaxDays(31);
       }
       else if(MonthDate == "Luty") {
        setMaxDays(28);
       }
       else {
        setMaxDays(30);
       }

       if( DayDate <= MaxDays && YearDate >= 1990 && YearDate <= 2023 && YearDate != null)
       {
        setDataCorrect(true)
       }
       else {
        setDataCorrect(false);
       }
    }


    /*Dodawanie zwierzaka do bazy danych */
    const AddPetToDb = async () => {
      if(petBreed == null) {
        setPetBreed("");
      }
      
     
      const AccountData:PetIE =  {
        ID_Owner: userID,
        ID_Pet: petname + uuidv4().slice(0, 8),
        name: petname,
        DateOfBirth: {
          Day: DayDate,
          Month: MonthDate,
          Year: YearDate
        },
        Type: pettype,
        Breed: petBreed,
        profileImage: file
        
     }
   
    try { 
      await axios.post('/api/add/pet', AccountData).then((req)=>{
        if(req.status == 200) {
          DisplayAlert("Dodano zwierzaka!");
          
        } 
      })
    }
    catch {
    console.log("Wystąpił błąd....");
    }
  
        
     
  
    }
  
    return (
      <>
        <Button onClick={onOpen}><AddIcon mr={'4'} />Dodaj zwierzaka</Button>
     
  
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Dodaj swojego pupila!</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Imię</FormLabel>
                <Input value={petname} onChange={(e:ChangeEvent<HTMLInputElement>)=>setPetname(e.target.value)} placeholder='Imię' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Typ:</FormLabel>
                <Select onChange={(e:ChangeEvent<HTMLSelectElement>) => setPetType(e.target.value)}>
                   {pets.map((id, key) => <option value={id} key={key}>{id} </option>)}
                </Select>
              </FormControl>


              <FormControl mt={4}>
                <FormLabel>Rasa*:</FormLabel>
                <Input value={petBreed} onChange={(e:ChangeEvent<HTMLInputElement>)=>setPetBreed(e.target.value)} placeholder='Rasa' />

              </FormControl>


              <FormControl mt={4}>
                <FormLabel>Data urodzin:</FormLabel>
              
                <Select flex="1" mr="2" placeholder="Miesiąc" onChange={(e:ChangeEvent<HTMLSelectElement>) => setMonthDate(e.target.value)} disabled={DataCorrect} >
                <option value="Styczeń">Styczeń</option>
                <option value="Luty">Luty</option>
                <option value="Marzec">Marzec</option>
                <option value="Kwiecień">Kwiecień</option>
                <option value="Maj">Maj</option>
                <option value="Czerwiec">Czerwiec</option>
                <option value="Lipiec">Lipiec</option>
                <option value="Sierpień">Sierpień</option>
                <option value="Wrzesień">Wrzesień</option>
                <option value="Październik">Październik</option>
                <option value="Listopad">Listopad</option>
                <option value="Grudzień">Grudzień</option>
                </Select>

                <Input type="number" min={1} max={MaxDays} value={DayDate} onChange={(e:ChangeEvent<HTMLInputElement>) => setDayDate(parseInt(e.target.value, 10))} placeholder="Dzień" disabled={DataCorrect}  />
                <Input type="number" min={1990} value={YearDate} onChange={(e: ChangeEvent<HTMLInputElement>) => setYearDate(parseInt(e.target.value, 10))} placeholder="Rok" disabled={DataCorrect}  />
                <Flex mt={4}> 
                <Button colorScheme='blue'fontSize={12} onClick={CheckDate} >Check date </Button>
               <Text ml={4} mt={2}> 
                {DataCorrect 
                ? <p>Data prawidłowa </p>
                :<p>Data nieprawidłowa</p>}
                </Text>
                </Flex>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Zdjęcie zwierzaka</FormLabel>
                <Input type="file" onChange={convertToBase64} />
                <Button mt={4} colorScheme="red" onClick={ResetFile}>
                  Usuń obrazek
                </Button>
            </FormControl>

            </ModalBody>
  
            <ModalFooter>
              {DataCorrect 
                ? <Button colorScheme='green' mr={3} onClick={AddPetToDb}>
                Dodaj!
              </Button>
              :null}
             
              <Button onClick={onClose} colorScheme="red">Anuluj</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }