import { dbConnect, disconnect, getCollection } from "@/mongoDB/mongo";
import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import  User  from "@/mongoDB/schemas/account";




export default async function handler(req: NextApiRequest, res: NextApiResponse) {   
    const { email, password } = req.body;
    try {
    await dbConnect(process.env.DB_Name as string);
    
    
     /*Pierwszy string to nazwa bazy danych, a drugi to kolekcja w tej bazie */
     const collection = await getCollection("Users", "users");
     
    /* Czy email jest w bazie */
     const user = await collection.findOne({ email });
     console.log(email);
     if(user)
     {
        console.log('Jest takie konto')
        
        if(user.password === password)
        {
            console.log('Zalogowano')
            res.status(200).json({message: 'Zalogowano'})
        }
        else {
            console.log('Haslo nieprawidlowe')
            res.status(400).json({message: 'Haslo nieprawidlowe'})

        }
     }
     else {
      res.status(400).json({message: 'Nie ma takiego konta'})
      console.log('Nie ma takiego konta');
   }
   }
   catch{
    res.status(500).json({ message: 'Wystąpił błąd serwera.' });
   } 


}