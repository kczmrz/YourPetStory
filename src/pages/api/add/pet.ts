import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect, disconnect, getCollection } from "@/mongoDB/mongo";

export default async function (req: NextApiRequest, res: NextApiResponse) {
 /*Pierwszy string to nazwa bazy danych, a drugi to kolekcja w tej bazie */
 const collection = await getCollection("Users", "pets");


 if (req.method === 'POST') {
    await dbConnect(process.env.DB_Name as string); 

    try {
      await dbConnect(process.env.DB_Name as string); // Połączenie z bazą danych i "Users" to nazwa bazy danych, a w Schemas jest kolekcja zapisana!
      await  res.status(200).json({ message: 'Dodano zwierzaka'});
      await collection.insertOne(req.body);
      
       } 
    catch (error) 
    {
      console.error( error);
     
    }
  } 
  else {
    res.status(405).json({ message: 'Metoda nie jest obsługiwana' });
  }
}