import { dbConnect, disconnect, getCollection } from "@/mongoDB/mongo";
import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import  User  from "@/mongoDB/schemas/account";




export default async function handler(req: NextApiRequest, res: NextApiResponse) {   
    const { email } = req.body;
    try {
    await dbConnect(process.env.DB_Name as string);
    
    console.log(req.body);
     /*Pierwszy string to nazwa bazy danych, a drugi to kolekcja w tej bazie */
     const collection = await getCollection("Users", "users");
     
    /* Czy email jest w bazie */
     const result = await collection.findOne({ email });
     if(result)
     {
        res.status(400).json({message: 'Email' + email + ' znajduje się w bazie danych'})
        console.log(email + '  znajduje się w bazie danych');
     }
     else {
      res.status(200).json({message: 'Nie ma takiego E-Maila'})
      console.log(email + ' nie znajduje się');
   }
   }
   catch{
    res.status(500).json({ message: 'Wystąpił błąd serwera.' });
   } 


}