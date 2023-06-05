import { configureStore } from "@reduxjs/toolkit";
import MyPets  from "../features/PetSlice";
import Register  from "../features/registerSlice";
/*Główna konfiguracja stanu */
export const store = configureStore({
   reducer: {
    MyPets: MyPets,   /*Dodanie już tego ogólnie do Reduxa */
    Register: Register
   }
})


/* Typy dla TypeScripta vvv*/
export type RootState = ReturnType<typeof store.getState>   
export type AppDispatch = typeof store.dispatch;      