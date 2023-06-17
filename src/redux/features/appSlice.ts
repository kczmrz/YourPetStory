import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
    userLogin: boolean;
    userNick: string;
    userAvatar?: string;
    userPets?: any[];
}

export interface sessionData {
    data: AppState
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
    reducers: {
        updateSession: (state, action: PayloadAction<sessionData>) => {
           state.userLogin = true;
           state.userNick = action.payload.data.userNick;
           state.userAvatar = action.payload.data.userAvatar;
           state.userPets = action.payload.data.userPets;
         },
     } 
})

  
export const { updateSession} = AppStateSlice.actions;
export default AppStateSlice.reducer;
