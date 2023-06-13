import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
    userLogin: boolean;
    userNick: string;
    userAvatar?: string;
    userPets?: any[];
}


const initialState:AppState ={
    userLogin: false,
    userNick: "",
    userAvatar: "",
    userPets: [""]
}


export const AppStateSlice = createSlice({
    name: "Register",
    initialState,
    reducers: { } 
})

export default AppStateSlice.reducer;
