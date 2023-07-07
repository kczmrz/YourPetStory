import { Schema, Document } from 'mongoose';
import mongoose from 'mongoose';


/*Interfejs dla schematu User */

export interface User {
    ID: string;
    name: string;
    surrname:string;
    email: string;
    password: string;
    nick: string;
    age: number;
    country: string;
    city: string;

    pets?: any[];  /*Trzeba będzie zrobić interface Pet, bo to będzie array z obiektami. I w interface pet musi być wszystko */
    Avatar?: string | null; 
}


const UserSchema =  new Schema<User>({
    ID: { type: String, required: true },
    name: { type: String, required: true },
    surrname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    nick: { type: String, required: true },
    age: { type: Number, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    pets: { type: String, required: false },
    Avatar: { type: [String, null], required: false },
}, { collection: 'users' });   /* Ta ostatnia linijka to nazwa kolekcji */




export default mongoose.models.User || mongoose.model<User>('User', UserSchema);