import FirstStep from "@/components/registerPage/firstStep";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iRegister {
    user_name:string;
    surrname: string;
    email: string;
    password: string;
    password2: string;
    nick: string;
    age: number;
    country: string;
    city:string;
    avatar?: string | null;
}


const initialState:iRegister = {
    user_name: "",
    surrname: "",
    email: "",
    password: "",
    password2: "",
    nick: "",
    age: 0,
    country: "",
    city:"", 
    avatar: null
}


export const Register = createSlice({
    name: "Register",
    initialState,
    reducers: {
        /* OnChange inputów */

        /*Imię */
        updateNameForm: (state, action: PayloadAction<string>) => {
            state.user_name =  action.payload
        },


         /*Nazwisko */
        updateSurrNameForm: (state, action: PayloadAction<string>) => {
            state.surrname =  action.payload
          },


        /*Email */
        updateEmail: (state, action: PayloadAction<string>) => {
            state.email =  action.payload
          },

        /*Haslo */
        updatePassword: (state, action: PayloadAction<string>) => {
            state.password =  action.payload
          },

        /*Haslo2 */
        updatePassword2: (state, action: PayloadAction<string>) => {
            state.password2 =  action.payload
          },


        /*Nickname */
        updateNickname: (state, action: PayloadAction<string>) => {
            state.nick =  action.payload
          },

         /*wiek */
        updateAge: (state, action: PayloadAction<number>) => {
            state.age =  action.payload
          },

      
        /*kraj */
      updateCountry: (state, action: PayloadAction<string>) => {
        state.country =  action.payload
      },

      /*miasto */
      updateCity: (state, action: PayloadAction<string>) => {
        state.city =  action.payload
      },

      updateAvatar: (state, action: PayloadAction<string | null>) => {
        state.avatar =  action.payload
      },

      clearRegisterState:(state) => {
        state.user_name = "",
        state.surrname = "",
        state.email = "",
        state.password = "",
        state.password2 = "",
        state.nick= "",
        state.age = 0,
        state.country = "",
        state.city= "", 
        state.avatar = null
      }


    }});
        

        


  
  export const { updateNameForm, updateSurrNameForm, updateEmail, updatePassword, updatePassword2, 
    updateNickname, updateAge, updateCountry, updateCity, updateAvatar, clearRegisterState } = Register.actions;
  export default Register.reducer;