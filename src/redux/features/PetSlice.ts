import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";


/*Prowizoryczna struktura danych w kwestii zwierzaka, do rozbudowy koniecznie!!!! */

interface event {
    DateOfEvent: Date;
    Type: string;  /*vet etc */
    Comment: string;
}
interface Pet {
    KindOfPet: string;   /*rodzaj zwierzęcia */
    Breed: string;    /*rasa */
    Alive: boolean;
    DateOfBirth: Date;
    events: event[];
}

/*Interface dla initialState */

interface initialStatePets {
    Pets: Pet[]
}
/* Initial state */
const initialState:initialStatePets = {
   Pets: []
}



/* Jeden ze stanów aplikacji */
export const MyPets = createSlice({
    name: "MyPet",
    initialState,
    reducers:{
        /* Tutaj będą wszystkie funkcje odnośnie zmiany tego stanu np. gdy będzie trzeba usunąć zwierzaka, albo zmienić mu "event" */
    }

})


export default MyPets.reducer;
