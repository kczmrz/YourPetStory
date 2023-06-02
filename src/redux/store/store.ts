import { configureStore } from "@reduxjs/toolkit";
import MyPets  from "../features/PetSlice";

/*Główna konfiguracja stanu */
export const store = configureStore({
   reducer: {
    MyPets: MyPets,   /*Dodanie już tego ogólnie do Reduxa */
   }
})


/* Typy dla TypeScripta vvv*/
export type RootState = ReturnType<typeof store.getState>   
export type AppDispatch = typeof store.dispatch;      