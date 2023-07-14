import { Schema, Document } from 'mongoose';
import mongoose from 'mongoose';



export interface Pet {
    ID_Owner: string;   /* ID Wlasciciela zwierzaka */
    ID_Pet: string; /*ID zwierzaka */
    name: string;
    DateOfBirth: {
        Day: number;
        Month: string;
        Year: number;
    };
    Type: string;
    Breed: string;
    profileImage?: string | null;
    images?: string[];
   
}


const PetSchema =  new Schema<Pet>({
    ID_Owner: { type: String, required: true },
    ID_Pet: { type: String, required: true },
    name: { type: String, required: true },
   DateOfBirth: {
        Day: { type: Number, required: true },
        Month: { type: String, required: true },
        Year: { type: Number, required: true },
    },
    Type: {type: String, required: true},
    Breed: {type: String, required: true},
    profileImage: { type: [String, null], required: true },
 
}, { collection: 'pets' });   /* Ta ostatnia linijka to nazwa kolekcji */




export default mongoose.models.Pet || mongoose.model<Pet>('Pet', PetSchema);