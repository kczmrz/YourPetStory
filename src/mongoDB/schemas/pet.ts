import { Schema } from 'mongoose';
import mongoose from 'mongoose';



export interface PetIE {
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


const PetSchema =  new Schema<PetIE>({
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
 
}, { collection: 'pets' });   



export default mongoose.models.PetIE || mongoose.model<PetIE>('Pet', PetSchema);