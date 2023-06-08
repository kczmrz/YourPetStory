import { Schema } from 'mongoose';


interface User {
    name: string;
    surrname:string;
    email: string;
    password: string;
    nick: string;
    age: number;
    country: string;
    city: string;

    pets?: any[];  /*Trzeba będzie zrobić interface Pet, bo to będzie array z obiektami. I w interface pet musi być wszystko */
    userAvatar?: string; /*Można potem potem dodać user avatar, ale na tym narazie się nie skupiajmy, to taki bajer :p */
}
    
const UserSchema =  new Schema<User>({
    name: { type: String, required: true },
    surrname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    nick: { type: String, required: true },
    age: { type: Number, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },

    pets: { type: String, required: false },
    userAvatar: { type: String, required: false },



  });