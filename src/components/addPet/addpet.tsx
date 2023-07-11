import { useDisclosure } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent,ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
import { ChangeEvent, useRef, useState } from "react";
import  { AddIcon } from "@chakra-ui/icons"
import { parseISO, isValid } from "date-fns";


export default function AddPet() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const [petname, setPetname] = useState<string>("");
    const [pettype, setPetType] = useState<string>("");
  
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
   
    const [DateIsValid, setDateIsValid] = useState<boolean>(false);
    const [Date, setDate] = useState<Date | any>();

    const onChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
      const inputDate = event.target.value;
      const regex = /^(\d{2})-(\d{2})-(\d{4})$/;
      const isValidFormat = regex.test(inputDate);

      if(isValidFormat)
      {
        const inputDate: string = event.target.value;
        const parsedDate: Date = parseISO(inputDate);
        const isValidFormat: boolean = isValid(parsedDate);
          setDate(isValidFormat ? parsedDate : null);
          setDateIsValid(true);
         
      }
      else {
        setDate(inputDate);
        setDateIsValid(false);
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
                <FormLabel>Data urodzin:</FormLabel>
                <Input
                  placeholder="DD-MM-YYYY"
                  value={Date}
                  onChange={onChangeDate}
                />
                {DateIsValid 
                ? <p>Data prawidłowa </p>
                :<p>Data nieprawidłowa</p>}
              </FormControl>


            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='green' mr={3}>
                Dodaj!
              </Button>
              <Button onClick={onClose} colorScheme="red">Anuluj</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }