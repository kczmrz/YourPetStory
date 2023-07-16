import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect, getCollection } from "@/mongoDB/mongo";
import pet from '@/mongoDB/schemas/pet';
import mongoose from 'mongoose';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { ID_Owner } = req.query;
  try {
  await dbConnect(process.env.DB_Name as string);
  
  
   /*Pierwszy string to nazwa bazy danych, a drugi to kolekcja w tej bazie */
   const collection = await getCollection("Users", "pets");
   
  /* Czy email jest w bazie */
   const result = await collection.find({ ID_Owner }).toArray();
   if(result)
   {
      res.json(result)
   }
   else {
    res.status(200).json({message: 'Brak'})

 }
 }
 catch{
  res.status(500).json({ message: 'Wystąpił błąd serwera.' });
 } 


}

  