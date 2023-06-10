import { configureStore } from "@reduxjs/toolkit";
import MyPets  from "../features/PetSlice";
import Register  from "../features/registerSlice";
import AppStateSlice  from "../features/appSlice";
/*Główna konfiguracja stanu */
export const store = configureStore({
   reducer: {
    MyPets: MyPets,   /*Dodanie już tego ogólnie do Reduxa */
    Register: Register,
    User: AppStateSlice,
   }
})


/* Typy dla TypeScripta vvv*/
export type RootState = ReturnType<typeof store.getState>   
export type AppDispatch = typeof store.dispatch;      