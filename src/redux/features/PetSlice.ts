import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";
import { KindOfAnimal } from "@/enums/KindOfAnimal";
import { KindOfBreed } from "@/types/KindOfBreed";
import { EventTypes } from "@/types/EventTypes";

/*Prowizoryczna struktura danych w kwestii zwierzaka, do rozbudowy koniecznie!!!! */

interface event {
  DateOfEvent: Date;
  Type: EventTypes;
  Comment: string;
}
interface Pet {
  KindOfPet: KindOfAnimal;
  Breed: KindOfBreed;
  Alive: boolean;
  DateOfBirth: Date;
  events: event[];
}

/*Interface dla initialState */

interface initialStatePets {
  Pets: Pet[];
}
/* Initial state */
const initialState: initialStatePets = {
  Pets: [],
};

/* Jeden ze stanów aplikacji */
export const MyPets = createSlice({
  name: "MyPet",
  initialState,
  reducers: {
    /* Tutaj będą wszystkie funkcje odnośnie zmiany tego stanu np. gdy będzie trzeba usunąć zwierzaka, albo zmienić mu "event" */
  },
});

export default MyPets.reducer;
